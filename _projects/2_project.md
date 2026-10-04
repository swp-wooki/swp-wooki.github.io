---
layout: page
title: Optimization Grand Challenge 2026
description: From spectral packing and heightmaps to a geometry-aware, deadline-conscious solver for shipyard scheduling
img: assets/img/projects/ogc2026-yard-placement.png
importance: 0
category: work
related_publications: false
permalink: /projects/optimization-grand-challenge-2026/
---

A shipyard can have plenty of unused floor area and still have nowhere to put its next block. The empty space may be fragmented, the available shape may be wrong, or a placement may obstruct the crane path needed to remove another block. Solving this problem requires decisions about **assignment, geometry, and time** to work together.

In the **Optimization Grand Challenge 2026**, I worked with Hanyang University's team **최대난제** on this shipyard block-placement and scheduling problem. Our final presentation records **23rd place among 408 teams in the preliminary round** and feasible completion of **all eight main-round hidden instances**. Following our [2025 RoRo vehicle-stowage project]({% link _projects/1_project.md %}), this competition pushed our work from graph-based accessibility into irregular multilayer geometry.

The development went through several distinct implementations: spectral packing, heightmap-based placement, CP-SAT assignment with density feedback, and a later solver combining capacity-window LP planning with adaptive neighborhood search. Understanding why these stages changed is more informative than treating the final solver as a list of optimization techniques.

## What the solver actually decides

For every block $i$, the output specifies a bay $b_i$, integer coordinates $(x_i,y_i)$, an allowed orientation $o_i$, and entry and exit times $(s_i,e_i)$. Each block must enter and exit exactly once. **Once a block enters, it cannot be moved or rotated before leaving.** Search operators can revise a proposed schedule offline; the executed schedule cannot rearrange resident blocks whenever it becomes inconvenient.

A block cannot enter before its release date $r_i$, and it must remain for at least its processing time $p_i$:

$$
s_i \ge r_i,\qquad e_i-s_i \ge p_i.
$$

It occupies its bay over $[s_i,e_i)$. Completion after the due date $d_i$ incurs tardiness. Spatial feasibility has three parts: every layer must remain inside the bay, polygons on the same layer must not overlap in their interiors, and the vertical crane path must be clear during both entry and exit.

The official objective is a weighted sum:

$$
J=w_1 Z_1+w_2 Z_2+w_3 Z_3.
$$

Its components are more specific than “delay, balance, and preference.” Let $A_j$ be bay area, $\bar A$ the mean bay area, $q_i$ a block's workload, and $v_{ij}$ its preference score for bay $j$. Then

$$
\begin{aligned}
Z_1 &= \sum_i \max(0,e_i-d_i),\\
L_j &= \frac{\bar A}{A_j}\sum_{i:b_i=j}q_i,\\
Z_2 &= \left\lfloor\max_j L_j-\min_j L_j\right\rfloor,\\
Z_3 &= \sum_i\left(\max_j v_{ij}-v_{i,b_i}\right).
\end{aligned}
$$

Workload imbalance measures **total assigned workload normalized by bay area**, not the number of blocks currently present. A departure frees physical space but does not subtract from this cumulative workload.

Coordinates and orientations do not appear directly in the objective. They determine whether the selected assignment and timing can actually be realized. This distinction became central to the implementation: inexpensive objective calculations screen assignment changes, while geometric routines answer the harder feasibility question.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/ogc2026-actual-solution.gif" avoid_scaling=true alt="Eight successive event days showing block entries, exits, four bay layouts, and the complete entry-exit schedule for problem 35" title="Actual block placements and schedule for problem 35" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A saved solution for training instance prob_35: 250 blocks across four bays. Orange marks entries and red hatching marks exits; the lower panel shows the complete schedule. The animation covers event days 17–24. Rechecking the underlying operations with the archived checker confirms feasibility and objective 191,485, with Z₁ = 511, Z₂ = 802, and Z₃ = 760.
</div>

## How the approach developed

The source archives preserve changes in both the mathematical model and the geometric engine.

| Stage                                | Main idea                                                                                                                     | What it clarified                                                                                                                |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Early assignment and packing solvers | Combine assignment models, constructive placement, and neighborhood search.                                                   | A good allocation still needs a feasible geometric realization.                                                                  |
| FFT-based packing                    | Correlate occupancy and block masks using cached forward and inverse FFT plans.                                               | Computing a full map of possible offsets can be expensive when only a small candidate set is used.                               |
| Heightmap and CP-SAT stage           | Represent layer structure with height profiles; plan assignments using cumulative area capacity and several density settings. | Geometry needs a fast filter, while the assignment model needs feedback from actual packing.                                     |
| Later LP and policy-search stage     | Use time-window capacity prices, several complete decoding policies, and partial schedule reconstruction.                     | Search can improve the decisions that generate a layout instead of repeatedly solving the entire geometric problem from scratch. |

The earlier technical report gives a concrete CP-SAT model. A binary assignment activates a processing interval for each block–bay pair, and a cumulative constraint limits simultaneous area demand to $\rho A_j$. Several values of the density parameter $\rho$ generate different assignment candidates. The decoder realizes each candidate, and observed occupancy informs later planning.

This model is a surrogate for packing. Two collections of blocks may have the same total area demand but differ dramatically in whether their shapes fit. The later LP formulation retained this planning role while exposing time-dependent congestion prices.

The geometric score also evolved. In the heightmap implementation, a boundary map around walls and occupied regions is smoothed with a Gaussian kernel,

$$
D_j=G_\sigma * B_j,
$$

to give nearby positions a continuous measure of spatial contact. This helps distinguish candidates that a binary “touching or not touching” score treats identically. It is an auxiliary placement preference, not a guarantee against fragmentation. The earlier report records 27,830,365 raster-valid candidate cells across 40 problems, of which 577,399—about **2.07%**—were forwarded to exact geometric checks. That measurement belongs to the earlier heightmap implementation.

## Geometry: preserving layer structure without checking every polygon

A bounding rectangle is cheap but discards too much information. Two irregular blocks may fit around one another, and two multilayer blocks may overlap in a top-down projection while remaining disjoint at each height.

The implementation stores orientation-specific masks and lower and upper height profiles. Comparing a candidate's underside with the bay's existing top-height map quickly rejects many impossible positions. In the later code, a 0.25-unit raster supports this filtering, while the permitted placement offsets remain integers.

The crane constraint makes layer interlocking a scheduling decision as well. If a newly placed overhang would prevent a lower resident from being lifted out, their departure order must resolve that obstruction. The later geometry code tests these relationships against the planned exit times. Legal overlap in a static picture is insufficient.

The solver therefore has both conservative silhouette-based placement and layer-aware alternatives. Disjoint unions of all layers provide a simple safe arrangement; layer-aware candidates can use additional space when their entry and departure relationships are valid.

For candidate generation, compiled column scans collect a limited number of resting positions instead of evaluating every offset equally. The scans use compact occupancy representations and contact information; only shortlisted positions proceed to the organizer's predicates.

**The official checker remains the authority.** Raster cells can miss thin geometric features, and polygon unions or translated coordinates can behave differently around exact contact. The development notes record custom kernels that accepted arrangements rejected by the official checker. Fast representations became proposal and rejection mechanisms, with the original entry, exit, and full-solution checks retained for acceptance.

## Planning bays, then deciding who enters

The later planner divides the horizon into time windows and distributes each block's area–time demand across its release–due interval. Let $D_{iw}$ be that demand in window $w$, $c_{ij}$ the preference loss, and $\eta$ an assumed packing efficiency. Its basic relaxation has the form

$$
\begin{aligned}
\min\quad & \sum_{i,j}c_{ij}x_{ij}\\
\text{s.t.}\quad
& \sum_jx_{ij}=1 && \text{for every block }i,\\
& \sum_iD_{iw}x_{ij}\le \eta A_j\Delta_w
&& \text{for every bay }j\text{ and window }w,\\
& 0\le x_{ij}\le 1.
\end{aligned}
$$

Block–bay pairs that cannot fit even in an empty bay are excluded. The implementation uses at most 48 windows and selects each block's target bay by rounding toward its largest assignment variable.

That rounding does not preserve all capacity inequalities, and even an integer assignment would not prove geometric feasibility. **A target bay is advice to the decoder.** The placement routine can use another bay when the plan cannot be realized.

Capacity dual prices provide an additional signal. After conversion into objective units, the congestion charge for placing block $i$ in bay $j$ at time $t$ is proportional to

$$
\operatorname{footprint}_i
\sum_w \pi_{jw}\,
\left|[t,t+p_i)\cap W_w\right|.
$$

This measures which priced windows the block would occupy. It gives the decoder a way to compare otherwise attractive assignments that compete for scarce capacity at different times.

The event-driven decoder then separates decisions into stages. It advances to releases and exits, rather than scanning every day, and forms a small urgency cohort using apparent tardiness cost:

$$
\operatorname{ATC}_i(t)=
\frac{1}{p_i}
\exp\left[-\frac{\max(0,d_i-t-p_i)}{k\bar p}\right].
$$

The default cohort includes the top 32 ready blocks plus deferred blocks still waiting for their target bays. Within the cohort, footprint and search biases affect placement order. This lets urgent jobs remain competitive while giving large blocks a chance to claim contiguous space before small ones fragment it.

Bay choices are priced using weighted tardiness, the marginal change in normalized workload imbalance, and preference loss, with optional congestion signals. Positions within a bay are evaluated separately using contact and future-space criteria. Mixing all of these decisions into one undifferentiated score would hide the structure of the objective.

Some policies also allow deliberate waiting. The relief-wait mechanism examines a target bay's scheduled departures and searches for a future fit, then compares the resulting tardiness risk with the preference benefit. Waiting has to justify the space it expects to recover.

## What adaptive neighborhood search changes

The opening portfolio attempts different combinations of plans and decoder policies within its budget. Completed results are checked, and the best feasible result becomes the incumbent; unfinished attempts are discarded. Different initial policies matter because an early placement can change the rest of the schedule.

The later ALNS uses the **policy and reconstruction boundary** as part of its search representation. A policy contains priority and placement biases, waiting rules, plan-following choices, and candidate widths. The decoded solution is a separate map from each block to its bay, coordinates, orientation, entry, and exit.

Several operators target different causes of poor performance:

| Move family | What it changes                                                                               |
| :---------- | :-------------------------------------------------------------------------------------------- |
| Relief      | Bring a late block forward and defer competing admissions.                                    |
| Swap        | Promote a waiting block ahead of a block admitted to the same bay during its wait.            |
| Window      | Preserve an earlier schedule prefix and reconstruct the later interval.                       |
| Repack      | Remove selected residents from a replayed prefix so a blocked placement can be reconsidered.  |
| Prefer      | Redirect a block that finished on time but used an expensive bay.                             |
| Displace    | Propose a geometric change to a blocker, then reconstruct and validate the affected schedule. |

A preserved prefix is replayed with its original operations; the changed tail is decoded again. This saves repeated work and concentrates effort around the decision being revised. Reconstruction initially favors cuts within roughly the last 15% of the block entry order and reaches progressively earlier decisions after unsuccessful passes. This is a search preference: a directed move may still target an earlier block when no suitable later candidate exists.

Operator weights learn from improvements, new solutions, duplicates, and unusable draws. A portion of sampling remains exploratory so an initially unhelpful family can become useful after the incumbent changes. Plan variants are also sampled, including operator-specific preferences for which plan to decode against.

Two forms of repetition must be detected: different policies can be duplicates, and distinct policies can generate exactly the same schedule. The implementation tracks both policy history and fingerprints of complete assignment maps.

In the four-worker configuration, three workers search around the leading solution while a fourth island explores another promising starting point. The code also separates the exploratory search state from the protected best result. An exploration mechanism can visit a different region without replacing the answer returned to the user; **the incumbent changes only after a strictly better, officially validated solution is found**.

## Exact optimization in the places where it helps

Exact methods are most useful after the problem has been reduced to a manageable subproblem.

With bay assignments fixed, workload and preference costs are fixed too. Fixed-geometry re-timing can therefore use CP-SAT to improve entry times without reopening the entire packing problem. Geometric conflicts and interlocking relationships constrain which time changes remain legal.

Assignment descent works in the opposite direction. It cheaply scores relocations, swaps, and three-cycles by their workload and preference effects, then attempts to realize promising assignments geometrically. In the later implementation, the more expensive stages are gated toward low-congestion, preference-sensitive cases with no remaining tardiness.

A favorable assignment score does not ensure that the receiving bay can accommodate the block. This explains why expanding the assignment neighborhood is not automatically productive: it can create more promising mathematical proposals that all fail during placement.

The archive also preserves concrete negative results from earlier solver generations. In one 600-second experiment on prob_38, six restart candidates completed and none improved the incumbent; the run ended after 573.438 seconds. A separate test expanded prob_38's effective movable set from 16 to 60 blocks without improving its objective. The same configuration left prob_27 unchanged and worsened prob_33 from 7,502,877 to 7,727,930. These are limited experiments, but they show why “more runtime” and “a larger neighborhood” need to be evaluated against what they actually change.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/ogc2026-yard-placement.png" alt="Three bays with irregular blocks and floor occupancy of 62, 49, and 51 percent" title="Fragmented free space in a feasible solution" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A separate saved visualization for prob_1 at time 33, generated with a 60-second budget. The three bays contain 46 resident blocks. Floor occupancy is 62%, 49%, and 51%: the white area shows why unused area alone says little about whether the next irregular block will fit.
</div>

## Results and what their comparisons mean

The earlier technical report provides a consistent comparison on **40 main-round public training instances, with 230 seconds per instance**. Every version in this table returned feasible solutions on all 40 instances.

| Version in the report   | Total tardiness $Z_1$ | Total imbalance $Z_2$ | Total preference loss $Z_3$ | Sum of weighted objectives |
| :---------------------- | --------------------: | --------------------: | --------------------------: | -------------------------: |
| Refactored v4, August 4 |                74,773 |               126,186 |                     173,188 |                595,026,400 |
| Long Compact, August 4  |                70,085 |               107,698 |                     183,988 |                563,408,749 |
| Adaptive v5, August 5   |                69,905 |               115,461 |                     183,325 |                561,421,374 |
| Anytime v8, August 5    |                70,099 |               114,926 |                     182,921 |                562,785,756 |
| Final, August 6         |                70,018 |               123,475 |                     182,111 |                561,414,762 |

“Final” is the version name in that dated report; the folder also contains later implementations. Relative to v4, the August 6 result reduced the summed weighted objective by approximately **5.65%**. It traded higher preference loss for lower tardiness and workload imbalance. Because objective weights vary by instance, the last column is a sum of per-instance weighted objectives, not a weighted combination of the three column totals.

These training results are separate from the preliminary ranking and the eight-instance hidden evaluation. Competition scoring uses ranks on individual problems, so a reduction in summed objective is not the same as an equal percentage increase in competition points.

The experimental records also changed how we evaluated improvements. One saved comparison explicitly notes that its two favorable examples had been selected because they won; the full cohort improved on only **2 of 13** instances. The final presentation additionally discusses variation between identical-code runs and the need for paired comparisons. Together, these observations made per-instance regressions, selection bias, and matched runtime budgets central to our evaluation.

## The deadline includes returning the answer

Before optional search, the solver constructs and validates a simple schedule that processes blocks one at a time. It has poor objective quality but provides a fallback. An incomplete decode, an exception, or an unsuccessful optimization stage must leave the last validated incumbent intact.

The official objective can be calculated cheaply from exit times and bay assignments, but that calculation is not a feasibility certificate. Candidates that pass the relevant score filters still require the original full checker.

Final checking also takes time. The runtime controller measures the largest certification cost observed during the current call and reserves approximately 1.5 times that cost, with minimum margins and serialization allowance, before returning. Numerical-library threads are pinned to avoid multiplying thread pools across the worker processes.

The archived later submission documents these end-to-end measurements with four workers:

| Requested limit |  prob_13 |  prob_22 | Preliminary prob_6 |
| --------------: | -------: | -------: | -----------------: |
|            60 s |  59.29 s |  56.18 s |            59.33 s |
|           120 s | 118.67 s | 114.90 s |           118.70 s |
|           240 s | 234.33 s | 230.99 s |           237.54 s |
|           600 s | 587.47 s | 580.31 s |           589.82 s |

The README and later technical report describe **245 additional runs at 240- and 600-second budgets without an overrun**. They also document a preprocessing floor: on the 300-block prob_13, a requested 3 seconds took 3.46 seconds, while a 5-second request took 4.93 seconds. The measured timing behavior has a concrete scope; preserving a feasible incumbent does not make arbitrary short deadlines achievable.

Compiled geometry is part of this runtime design. If an event takes too long, checking the deadline only between events is insufficient. The archived implementation therefore avoids normal decoding when the compiled kernel is unavailable and retains its fallback path.

## What I took from the project

The central lesson was about choosing the right representation for each decision. Assignment models expose global tradeoffs, heightmaps make geometric search affordable, exact predicates preserve the competition's semantics, and partial reconstruction makes neighborhood search useful within a limited budget.

I also learned to distinguish an attractive subproblem solution from an improvement to the complete solver. A tighter assignment can be impossible to pack; a denser layout can delay urgent blocks; a successful local repair can consume time that another search would have used better. The relevant comparison is the complete, validated schedule under the same resource budget.

The team divided work across mathematical modeling and review, spatial representation and placement criteria, and optimization algorithms and system integration. We used generative AI to assist implementation, debugging, experiments, and writing, with team review and checker-based validation of proposed changes.

**Methods:** mathematical programming, spectral correlation, heightmaps, computational geometry, event-driven scheduling, adaptive large neighborhood search, parallel search islands, CP-SAT<br>
**Tools:** Python, NumPy, SciPy, Shapely, Numba, OR-Tools; pyFFTW in the earlier spectral solver and optional Gurobi in later assignment models

_Source scope: the original competition statement; the earlier 10-page technical report and its August 4–6 results; the later technical report and final presentation; preserved FFT and heightmap submission archives; the August 14 code snapshot accompanying the presentation; and saved experiment and solution records. Performance figures above retain the dataset, version, and runtime context of their source._

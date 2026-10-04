---
layout: page
title: Optimization Grand Challenge 2026
description: Shipyard block placement and scheduling with LP planning, geometric search, and adaptive large neighborhood search
img: assets/img/projects/ogc2026-yard-placement.png
importance: 0
category: work
related_publications: false
permalink: /projects/optimization-grand-challenge-2026/
---

In 2026, I returned to the **Optimization Grand Challenge** with Hanyang University's team **최대난제**. Following our [2025 project on RoRo vehicle stowage]({% link _projects/1_project.md %}), we tackled a different spatial optimization problem: deciding where and when to place irregular shipbuilding blocks in a shipyard.

The project combined mathematical programming, computational geometry, scheduling, and parallel heuristic search. Our solver had to coordinate these methods under a strict runtime budget while retaining a feasible solution throughout the search.

Our final presentation records three main outcomes:

| Measure                                           | Result                                                                         |
| :------------------------------------------------ | :----------------------------------------------------------------------------- |
| Preliminary-round standing                        | **23rd out of 408 teams**                                                      |
| Main-round completion                             | **8 of 8 hidden instances**, compared with 6 of 8 for the organizer's baseline |
| Reported objective reduction against the baseline | **61.07% on the six comparable hidden instances**                              |

The baseline comparison covers the six instances completed by both solvers; the completion result covers all eight hidden instances.

## The problem: space and time must be planned together

Each block has a release date, processing duration, due date, and a geometric shape represented by polygons on multiple layers. The solver must choose its **bay, coordinates, orientation, entry time, and exit time**. The 40-instance training set described in our presentation contained 150–300 blocks and 2–5 bays per instance, with blocks occupying 1–4 layers.

The objective combines three competing costs:

$$
\min\; J = w_1 Z_1 + w_2 Z_2 + w_3 Z_3,
$$

where $Z_1$ is total tardiness, $Z_2$ measures workload imbalance between bays, and $Z_3$ measures the loss from assigning blocks to less-preferred bays. The weights determine how much each tradeoff matters for a particular instance.

A bay assignment can look attractive in terms of workload and preference yet produce a poor schedule because the blocks do not fit together. Conversely, a dense arrangement can obstruct a later arrival or prevent a completed block from being lifted out. Overlap in a top-down view is not automatically a collision: blocks can occupy different layers, but their entry and exit must still satisfy the vertical crane constraints.

This makes the problem strongly dependent on earlier decisions. Placing one block changes the feasible positions and movement options of many others, including blocks that have not yet arrived.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/ogc2026-yard-placement.png" alt="Irregular shipbuilding blocks occupying three bays at time 33, with different shades showing their layers" title="A feasible shipyard layout from the OGC 2026 solver" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  An actual solution for training instance prob_1, generated with a 60-second budget and accepted by the official checker. At time 33, 46 of the instance's 150 blocks occupy the three bays. Darker shades indicate higher layers; percentages show layer-0 floor occupancy.
</div>

## Planning with capacity and congestion prices

The first planning stage uses a **linear programming relaxation over bay capacity windows**. It distributes each block's area–time demand across relevant time windows and proposes a target bay, accounting for preference costs and approximate capacity.

The capacity constraints also provide **dual prices**: a high price identifies a bay and time window where space is scarce. These prices help the downstream scheduler compare immediate placement, waiting, and using another bay.

The plan guides the search without fixing the final assignment. An area-based model cannot capture every geometric obstruction, so the placement routine must be able to redirect a block when the planned bay is unsuitable. Experiments in the final presentation showed that forcing the planned assignments could substantially worsen the objective. Keeping that flexibility was part of the algorithm's design.

## Turning a plan into a feasible schedule

An **event-driven decoder** converts a plan and a set of placement policies into a complete schedule. It advances between releases and exits, updates the available blocks, and compares a small group of urgent candidates using an apparent tardiness cost priority.

For each candidate, the decoder considers bays, orientations, and positions. Its evaluation combines immediate cost with the effect on remaining space: whether the placement fragments an open region, obstructs future exits, or consumes a useful position for a later block. When a nearby exit will free valuable space, waiting can be preferable to entering immediately.

Geometry is evaluated in stages. Precomputed silhouettes, raster masks, and height profiles support fast candidate generation, with Numba-compiled scans reducing the number of expensive polygon operations. The organizer's original geometric predicates make the final entry and exit decisions.

That boundary mattered in practice. Alternative geometry kernels passed internal checks but disagreed with the official checker around contact and layer interactions. The resulting design uses fast approximations to propose and filter positions, while retaining the official predicates for acceptance.

## Searching across policies and assignments

A single placement policy performed inconsistently across instances. We therefore used an **opening portfolio**: several combinations of plans and decoder policies independently construct complete solutions, and the best officially validated result becomes the incumbent.

The remaining budget supports **adaptive large neighborhood search (ALNS)**. Moves perturb priorities, partial block orders, bay preferences, waiting decisions, and placement policies, then pass those choices back through the decoder. Move families receive credit from their observed search outcomes, allowing the solver to adjust which neighborhoods it explores.

The four-worker configuration divides search between three workers around the leading solution and an independent fourth search island initialized from a different promising solution. Separate histories and random seeds help maintain diversity.

The finishing stages address narrower subproblems. Assignment moves, swaps, and three-block cycles target workload and preference costs when those terms dominate. Fixed-geometry re-timing uses CP-SAT to improve entry times while holding spatial decisions fixed. Each proposed improvement must survive reconstruction, exact objective evaluation, and official feasibility checking before it replaces the incumbent.

## Returning a valid solution on time

The solver begins with a simple constructive solution that is checked before optional optimization starts. Later stages follow the same acceptance rule: **propose, score, validate, and adopt only a strict improvement**. An unsuccessful or incomplete stage leaves the last validated solution available to return.

Time management includes the cost of returning the answer. The solver reserves time for final validation and serialization, using the largest official-check cost measured during the run, multiplied by 1.5, as part of that reserve. Internal numerical-library threads are limited so that four worker processes fit the intended four-core execution profile.

The final presentation reports **245 timing runs with budgets between 10 and 600 seconds and no overruns**. These timing results cover the tested configurations and budgets. In a competition where failed runs lose points, reliable completion was a direct part of solution quality.

## What the experiments taught us

One of the most useful findings came from measuring variation between runs. A control comparison using identical code showed a **1.4% difference at a 180-second budget**, large enough to obscure many of the small improvements we were pursuing. This led us to use paired comparisons, define acceptance criteria before running an experiment, and inspect regressions on individual instances alongside aggregate performance.

Failed approaches also clarified where the remaining difficulty lay. Reserving an entire bay for future demand could waste useful capacity; pricing a specific future placement was more flexible. Improving a schedule with fixed geometry eventually offered limited room for progress. A mathematically attractive assignment still had to be realized as a valid arrangement of irregular blocks.

The project strengthened my understanding of how mathematical models and executable heuristics can support each other. Capacity models expose congestion, geometric checks determine what can actually happen, and search explores alternative decisions. Careful measurement determines whether an added idea earns its runtime cost.

Our team also used generative AI to assist implementation, debugging, experiment tooling, and report preparation. As documented in the technical report, team members reviewed proposed changes and checked feasibility and performance through the official checker and computational experiments.

## Technical summary

**Methods:** linear programming, dual pricing, event-driven scheduling, computational geometry, adaptive large neighborhood search, parallel search islands, mixed-integer programming, CP-SAT<br>
**Tools:** Python, NumPy, SciPy, Shapely, Numba, OR-Tools; optional Gurobi for assignment optimization<br>
**Topics:** shipyard planning, irregular multilayer packing, spatial scheduling, combinatorial optimization, experimental methodology

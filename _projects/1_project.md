---
layout: page
title: Optimization Grand Challenge 2025
description: Graph-theoretic ALNS for RoRo ship stowage and vehicle rehandling
img: assets/img/projects/ogc2025-deck-state.png
importance: 1
category: work
related_publications: false
permalink: /projects/optimization-grand-challenge-2025/
---

In 2025, I participated in the **Optimization Grand Challenge**, a four-month optimization competition jointly organized by LG CNS and the Korean Institute of Industrial Engineers. The challenge attracted **343 teams and 676 participants**. Our three-person team, **최대난제**, worked on a real-world vehicle-stowage problem inspired by roll-on/roll-off (RoRo) shipping.

The project demanded more than finding a good mathematical idea. We had to translate that idea into a solver that could always return a feasible solution under a strict time limit, improve it through thousands of iterations, and explain why it worked. My work spanned mathematical modeling, graph-based heuristic design, algorithm implementation, experiment automation, and solution visualization.

## The problem: stowage as a dynamic graph optimization problem

A RoRo vessel carries vehicles through a sequence of ports. Its deck is modeled as an undirected graph: each node is a parking position, each edge is a traversable connection, and node 0 is the only entrance and exit. At every port, vehicles must be loaded or unloaded along collision-free paths.

The difficulty is that a locally convenient placement can create an expensive obstruction later. If a vehicle blocks the path of another vehicle that must leave earlier, it has to be temporarily unloaded and loaded again. Each movement incurs a fixed handling cost plus a distance-dependent cost. The objective is therefore to minimize

\[
\text{total cost} = \sum_{r \in \mathcal{R}} \left(F + |r| - 1\right),
\]

while satisfying every demand and preserving path feasibility throughout the entire port sequence.

This coupling between **placement, routing, and future accessibility** makes the problem strongly combinatorial. A decision at the first port can determine the amount of rehandling required many ports later.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/ogc2025-deck-state.png" title="RoRo deck state and vehicle allocation visualized during algorithm development" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A solver state at port 3. Colors identify destination groups; the highlighted node is a vehicle selected for removal. Building this visualizer made blocking and rehandling behavior directly inspectable.
</div>

## From the literature to a practical strategy

I began by studying work on RoRo stowage, induced-graph optimization, adaptive large neighborhood search, tabu search, simulated annealing, and graph centrality. Exact mixed-integer programming was an important conceptual reference, but the size and sequential nature of the competition instances made a purely exact formulation difficult to solve within the available runtime.

During development, I explored several alternatives—including GRASP, a genetic algorithm for loading order, and PPO-based reinforcement-learning prototypes. These experiments clarified the central design requirement: the solver needed a **fast, domain-aware constructor** that maintained feasibility by design, paired with a metaheuristic that could repeatedly improve the layout without rebuilding everything from scratch.

## A graph-aware constructive heuristic

The final solver first transforms the currently reachable empty deck into a directed acyclic graph rooted at the entrance. This orientation provides a safe loading order: placing vehicles from terminal nodes inward prevents a newly loaded vehicle from blocking the path needed by the next one.

I then scored candidate positions using three structural signals:

- **Depth from the entrance**, which represents both travel distance and how deeply a vehicle is stored.
- **Remaining travel duration**, which favors placing long-stay vehicles deeper and short-stay vehicles closer to the entrance.
- **Betweenness centrality**, which penalizes occupying nodes that lie on many entrance-to-deck paths.

Vehicles were grouped by destination and placed as spatial clusters. Keeping vehicles with the same unloading port together reduces fragmentation and makes future unloading more predictable. Vehicles scheduled for the very next port were handled separately and placed near the entrance.

The heuristic also detects **articulation points and biconnected components** in the empty-node graph. This prevents the algorithm from occupying a structurally critical node and accidentally disconnecting otherwise usable deck space. When a destination cluster no longer fits through ordinary terminal-node expansion, an adaptive clustering routine searches safe neighboring subgraphs and continues placement without sacrificing reachability.

## Improving the layout with adaptive large neighborhood search

The constructive heuristic supplies a reliable initial solution; an **Adaptive Large Neighborhood Search (ALNS)** then improves it port by port. Instead of perturbing individual vehicles, the destroy phase removes one or more destination clusters. The repair phase rebuilds those clusters with one of four policies:

1. **Greedy** — select the deepest feasible terminal node.
2. **Random terminal** — diversify the search among safe terminal nodes.
3. **Consolidation** — extend an existing cluster with the same destination.
4. **Unrestricted random** — explore non-critical internal nodes while excluding articulation points.

The repair operators are selected by roulette-wheel sampling. Their weights are updated online: an operator receives a larger reward when it finds a new global best and a smaller reward when it merely improves the current solution. This allows the search to learn which neighborhood is effective for the current instance rather than relying on a fixed operator schedule.

Candidate layouts are evaluated by simulating future ports and estimating their rehandling cost. Only feasible repairs enter the incumbent search state. The result is a hybrid method in which graph theory preserves structural feasibility while ALNS explores the combinatorial placement space.

## Engineering for a hard runtime limit

Algorithm quality mattered only if the implementation could deliver a valid answer on time. I treated runtime and failure handling as part of the optimization model itself.

- The solver reserves a fixed portion of the global time budget for ALNS and allocates the remaining time dynamically across ports.
- Four worker processes explore different destruction sizes and stagnation thresholds in parallel.
- Every candidate is passed through an independent feasibility checker before it can be selected.
- A deterministic constructive solution is retained as a fallback, so an unsuccessful search never results in an invalid submission.
- After the first parallel run, the solver reconstructs the deck state at every port, measures disagreement among solutions using Hamming distance, and restarts from the most divergent—or “singular”—port for a second focused search.

The surrounding experiment pipeline included automated batch evaluation, JSON result logging, parameter sweeps, and a step-by-step deck visualizer. The practice set covered **11 instances**, ranging from **23 to 363 deck nodes**, **5 to 15 ports**, and **24 to 812 vehicles**. A separate 60-second evaluation harness recorded results across 25 problem instances.

## What I learned

This project changed how I approach optimization software. A sophisticated search method is not enough on its own: the representation, feasibility-preserving operators, evaluation speed, and observability of the solver often matter just as much.

Academically, I learned to connect shortest paths, directed acyclic graphs, centrality, articulation points, and biconnected components to a concrete logistics problem. From an engineering perspective, I learned to design a solver around strict runtime constraints, isolate failures, parallelize stochastic search, build reproducible evaluation tools, and use visualization to diagnose decisions that are otherwise difficult to inspect.

Most importantly, the competition reinforced the kind of work I want to pursue: combining rigorous mathematical structure with practical algorithm engineering to solve problems that neither theory nor implementation can handle alone.

## Technical summary

**Methods:** graph algorithms, constructive heuristics, adaptive large neighborhood search, multiprocessing, simulation-based evaluation<br>
**Tools:** Python, NumPy, NetworkX, SciPy, Matplotlib<br>
**Topics:** combinatorial optimization, vehicle stowage, routing, graph connectivity, metaheuristics

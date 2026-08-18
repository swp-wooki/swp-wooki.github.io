---
layout: post
title: "Real Analysis 2: Exterior Measure"
date: 2026-03-06 12:00:00 +0900
description: "외측도의 정의와 단조성, 가산 준가법성, 열린집합에 의한 근사를 다룬다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

Now as a first step toward the Lebesgue measure, we will first define the **exterior measure**. Instead of defining a measure of an open set, we will define the exterior measure denoted by $m_*$, and is a function defined on the power set of $\mathbb{R}^d$ with value is an extended real number $\overline{\mathbb{R}}$.

<div class="real-analysis-statement" markdown="1">

**Exterior Measure.**

We define the exterior measure $m_* : \mathcal{P}(\mathbb{R}^d) \to \overline{\mathbb{R}} = [0, \infty]$ by
\[
m_*(E) = \inf \sum_{j=1}^\infty |Q_j|, \quad E \subset \mathbb{R}^d
\]
where the infimum is taken over all countable coverings $E \subset \bigcup_{j=1}^\infty Q_j$ by closed cubes.

</div>

The exterior measure $m_*$ is defined by the infimum of all possible countable convering $\bigcup_{j=1}^\infty Q_j$. Following statment would help us to understand this definition better. 
\[
Z_E \coloneq \left\{\sum_{j=1}^\infty |Q_j| : E \subset \bigcup_{j=1}^\infty Q_j \right\}
\]
Then we can define the exterior measure equivalently as
\[
m_{*}(E) = \inf Z_E
\]

The definition of $m_*$ looks complicated but it's in the same spirit as in the previous remark, but we generalized the concept of measure to an arbitrary set in $\mathbb{R}^d$. Thus $E$ can be very ugly. For given arbitrary set $E$, we cover it by a countable union of closed cubes. The covering is not necessarily to be an almost disjoint union of cubes. They might be intersecting each other. Anyway, once you have a such covering, you can compute its measure as a countable summation. Because we already know how to compute the volume of the cubes. 

Since there exists infinitely many different coverings of a given set $E$, thus we will get infinitely many non-negative real numbers. However, in the end, we take the infimum of these numbers then we have a unique real number. Indeed, it would be an extended real number because the summation can be infinite for every covering. In that case, the exterior measure will be infinity. But anyway, the infimum exists as an extended real number. Now we have the definition of the measure of an arbitrary set.

Our definition of exterior measure used covering by closed cubes, right? But you can use rectangles if you want. So instead of closed cubes, you can cover a given set $E$ by a countable union of closed rectangles and then compute these values and then take the infimum. Then you will get a different definition of your own exterior measurement. Nevertheless, those two definitions are equivalent. Detailed proof can be found in the exercise 15. Or you can even use balls. For a given open set $\mathcal{O}$ you may cover it by open balls or closed balls. In this case, these balls intersect each other. Indeed, they must intersect each other. But still, you can consider smaller balls so that the volume of all intersections becomes smaller and smaller, and we will take the infimum of them.This will be more difficult. This is Exercise 26 in Chapter 3. So if you need a harder problem, you can try to solve this.

<div class="real-analysis-statement" markdown="1">

**Remark.**

One can use rectangles or balls instead of closed cubes. (Exercise 15 for rectangles; Exercise 26 in Ch 3 for balls).

</div>

Let me show you some simple examples of exterior measures. Now we have a new definition of the measure so we will try to compute the measure of simple sets. Before that I want to emphasize that to compute the exterior measure is not our purpose. Our goal is to construct the Lebesgue measure. It has a different name because exterior measure is not what we desire even though it is well-defined for every set in $\mathbb{R}^d$. The reason is there exist very strange sets that cannot be measured properly with the Lebesgue's sense. There are very strange sets whose exterior measure is defined but for the Lebesgue measure, does not defined. Such strange example will be called a non-measurable set in the next session. 

<div class="real-analysis-statement" markdown="1">

**Example 1.**

<ul>

<li markdown="1">$m_*(\{x\}) = 0$. \\
      For a one-point set, maybe it's too simple but we want to use our definition to compute the measure of a singleton. And as you can expect, the measure of a singleton is zero. The proof is also simple because if you have a singleton, then you can cover the singleton by a single cube with arbitrarily small size, and actually our definition of a cube allows a singleton. Our definition of a cube was the product of closed intervals with the same lengths, so the endpoints of the interval can be the same. In that case, such cube becomes a singleton. Obviously the volume of such cube is zero. So the exterior measure of a single point is zero.
</li>
<li markdown="1">$m_*(\emptyset) = 0$. \\
      By a similar reason, the exterior measure of the empty set is also zero right, because you can cover an empty set by any cubes, like a singleton. So the measure will be zero. 

</li>
</ul>

</div>

Now let's consider a closed cube. We already defined the volume of $Q$ by the product of all sides. But this is not the exterior measure. So we have defined the exterior measure which is defined by this. So we need to compute the exterior measure of this cube by using this definition. But again this is also trivial because... no this is not trivial. What is trivial is one inequality. So the exterior measure of a cube is less than or equal to the volume of the cube. This is trivial, right, because this closed cube can be covered by this single cube itself and its value will be given by the volume of this cube. So the exterior measure will be less than or equal to this value, but the reverse inequality is what we have to prove.

<div class="real-analysis-statement" markdown="1">

**Example 2.**

Let $Q \subset \mathbb{R}^d$ be a closed cube. Then $m_*(Q) = |Q|$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Clearly, $m_*(Q) \le |Q|$, since $Q$ itself is a covering of $Q$.

And for this, we need to prove... I mean it's enough to show that the volume of the cube is less than or equal to the summation of this infinite sum whenever you are given a covering ($|Q| \le \sum_{j=1}^\infty |Q_j|$). So for any covering of $Q$ we need to prove this inequality. And this will give you the equality, right? I mean once we prove this statement, this means that this quantity has a lower bound by the volume of $Q$. So the infimum, which is the exterior measure, always has a lower bound by the volume of $Q$. So we will get the reverse inequality, right? So it's enough to show this statement.

Let's fix $\epsilon$ and choose an open cube, let's say $S_j$ containing the closed cube $Q_j$. So now for each $j$, we have a closed cube $Q_j$ but we chose an open cube containing this closed cube. So it must be slightly larger than $Q_j$. This is $S_j$ but in a controllable way. So the volume of $S_j$, I mean this is well-defined because this is also a cube, but its size is less than or equal to $(1 + \epsilon) |Q_j|$. So for a given error $\epsilon$ you can make an open cube $S_j$ as close as we want to $Q_j$. 

But now we consider a collection of these open cubes and it covers a compact set $Q$. So $Q$ is a closed cube with finite length. So it is bounded, and a bounded and closed set is always compact in the Euclidean space. So this is compact and we have a collection of open sets covering a compact set. So by definition of the compact set, we can find finitely many open sets $S_j$ which still cover the compact set $Q$. So originally the countable collection of open cubes covered $Q$, but by using compactness, we can choose finitely many open sets which still cover the set.

The reason we chose finitely many cubes is to use Lemma 1.2 which was about the inequality for the volumes of the rectangles. So the volume of $Q$ is less than or equal to the summation of the volume of $S_j$. So this is what we have proved, and we have this inequality for each $j$. We can estimate this:
\[
|Q| \le \sum_{j=1}^N |S_j| \le \sum_{j=1}^N (1 + \epsilon) |Q_j| \le (1 + \epsilon) \sum_{j=1}^\infty |Q_j|.
\]
And then we take the limit as $N$ goes to infinity, right? This is less than or equal to the infinite sum. Now we can simply let $\epsilon$ to zero to finish the proof. This finishes the proof. So we have proved this inequality.

</div>

Okay. Slower than I expected. But today I'm going to stop here and in the next week we will look at some more interesting examples of exterior measure and then we will define the Lebesgue measure. Okay. See you next week.

Last week we defined the exterior measure. Whenever a subset of $\mathbb{R}^d$ is given, we can compute the exterior measure of it by using covering with closed cubes. Furthermore, we saw some examples of sets and we computed their exterior measures. Today we will see more examples of simple sets where we can practice how to compute the exterior measure.Then we will study the properties of the exterior measure. In particular, we have computed the exterior measure of the empty set, the single point and the closed cube. 

Now let's consider the open cube. Let $Q$ be a subset of $\mathbb{R}^d$ and we assume that it's an open cube. Our intuition is the volume of the open cube will exactly be the same as the volume of the closed cube. That means that the boundary would not change the measure. Indeed, this is actually true for the cube. We will prove this. But we have to be careful here because there exist some strange open sets whose exterior measure is different from its closure. *i.e.* it's possible that the boundary of an open set which is defined by the closure minus open set may have positive measure. There exists such a strange set. Thus we have to be careful. But for simple examples like the open set is given by an open cube, then its measure is exactly the same as its closure and we will prove this by using definition. 

<div class="real-analysis-statement" markdown="1">

**Example 3 (Open Cube).**

Let $Q \subset \mathbb{R}^d$ be an open cube. Then $m_{*}(Q) = |Q|$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
If you remember the definition of the exterior measure we first make an arbitrary covering of given set $Q$ by union of closed cubes. Then we may compute the volume of the union of the cubes thereafter we take the infimum. Hence we need to consider the covering of $Q$ first. Indeed, for such a simple set, we can find a simple covering: the closure of the $Q$.

($\leq$) Note that the cube is a subset of the closure of itself. Then we have this inequality immediately.
\[
m_{*}(Q) \le m_{*}(\overline{Q}) = |\overline{Q}| = |Q|
\]
$\because$ $m_{*}(\overline{Q})$ is defined by the infimum of the volumes of the coverings of $\overline{Q}$. Also, whenever you take a covering of $\overline{Q}$, it becomes a covering of $Q$, since $ Q \subset \overline{Q}$. Thus, $m_{*}(Q) \le m_{*}(\overline{Q})$ holds. Moreover, in the previous example 2, we have computed that for closed cube, $m_{*}(\overline{Q}) = |\overline{Q}|$ holds. Therefore above inequality holds. The exterior measure of $Q$ is less than or equal to the volume. 

($\geq$) The opposite inequality is bit tricky. We fix $\epsilon$ and take a closed cube $Q_0$ inside the given open cube $Q$. *i.e.* Let $\epsilon > 0$ and take a closed cube $Q_{0}$, such that
\[
Q_{0} \subset Q \quad \text{and} \quad |Q| \le |Q_0| + \epsilon
\]
By doing this, for given open cube $Q$, we can find a smaller closed cube $Q_0$ which is contained in $Q$ and the volume of $Q$ is controlled by the volume of $Q_0$ with an error $\epsilon$.

Hereby we can make $Q_0$ as close to $Q$ as we want. So this is always possible. Again, since $Q_{0}$ is closed, we get $m_{*}(Q_0) = |Q_0|$. Furthermore, since $Q_{0} \subset Q$ then $m_{*}(Q_{0}) \le m_{*}(Q)$. To combine these inequalities, we have this inequality:
\[
|Q_0| = m_{*}(Q_0) \le m_{*}(Q)
\]
Now from $|Q| \le |Q_0| + \epsilon$, we have $|Q| - \epsilon \le |Q_0|$. Finally, one can conclude that
\[
|Q| - \epsilon \le |Q_0| = m_{*}(Q_0) \le m_{*}(Q)
\]
In this inequality, quantities are independent with $\epsilon$. Therefore since $\epsilon$ was arbitraty, we can let $\epsilon$ to zero. I will skip the last sentence to be needed in proof. I hope you are familiar with this argument.

</div>

In example 2 and 3 we computed exterior measure of cubes. Closed one and open one, but now let's consider a rectangle. From now on $R$ denotes a rectangle. When I say a rectangle, it would be always a closed rectangle. 

<div class="real-analysis-statement" markdown="1">

**Example 4 (Rectangle).**

Let $R \subset \mathbb{R}^d$ be a rectangle. Then $m_{*}(R) = |R|$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
As in the proof of example 2, we can obtain one inequality for free.

($\leq$) Note that we can always find the covering of $R$ by $\bigcup_{i=1}^{\infty} Q_i$ where each $Q_i$ is a closed cube. Then using the same argument as in the example 2, we have this inequality:

\[
|R| \le m_{*}(R)
\]

($\geq$) For the opposite inequality we woill estimate the cover of $R$ by cubes with a lattice. Imagine that we have a rectangle $R$ and consider the lattice with $\frac{1}{k}\mathbb{Z}^d$. Let $\mathcal{Q}$ be a collection of cubes contained in $R$, and $\mathcal{Q}'$ be the collection of cubes intersecting both $R$ and $R^c$. After that, if we collect all the cubes in $\mathcal{Q}$ and $\mathcal{Q}'$, then we can cover $R$ by the union of these cubes.

\[
R \subset \bigcup_{Q \in \mathcal{Q} \cup \mathcal{Q}'} Q
\]

This is obvious from the construction of $\mathcal{Q}$ and $\mathcal{Q}'$. Now if we take all the cubes from $\mathcal{Q}$, they are contained in $R$. Then let us consider the summation over $\mathcal{Q}$ only. So that the summation is controlled by the volume of the rectangle.
\[
\sum_{Q \in \mathcal{Q}} |Q| \le |R|
\]
On the other hand, if you sum up the volumes of the cubes in $\mathcal{Q}'$, one can approximate its summation in terms of the size of the lattice $k$. If you compute the sum of the volume of $Q$ from $\mathcal{Q}'$, you will get $\mathcal{O}\left(\frac{1}{k}\right)$
<span class="real-analysis-footnote">Note: At this moment, $\mathcal{O}(\cdot)$ denotes the big-O notation</span>. 
This means that $\sum_{Q \in \mathcal{Q}'} |Q|$ is less than or equal to some constant times $1/k$. This is true because the number of cubes in $\mathcal{Q}'$ is $\mathcal{O}(k^{d-1})$ where $d$ is the dimension of the space. Also, the volume of $Q \in \mathcal{Q}'$ is $\mathcal{O}(k^{-d})$, because of the side of each lattice is $1/k$. Hereby the volume of each cube is $k^{-d}$. To summerize, 
\[
(\text{number of cubes in } \mathcal{Q}') = \mathcal{O}(k^{d-1}), \quad \text{and} \quad |Q| = \mathcal{O}(k^{-d}) \text{ for each } Q \in \mathcal{Q}'.
\]
Note that $\mathcal{O}(k^{d-1}) \times \mathcal{O}(k^{-d}) = \mathcal{O}(k^{-1})$. This implies that 
\[
\sum_{Q \in \mathcal{Q}'} |Q| = O\left(\frac{1}{k}\right)
\]
Therefore we can combine these two estimates to get the following inequality:
\[
\sum_{Q \in \mathcal{Q} \cup \mathcal{Q}'} |Q| \le |R| + O\left(\frac{1}{k}\right)
\]
And now we can send $k$ to the infinity. Why do we send k to infinity? Beacuse we will take infimum to all possible covers. Therefore letting $k \to \infty$ yields $m_{*}(R) \le |R|$. For this example, the statement was very easy but its proof is very technical.

</div>

Another example is the exterior measure of the unbounded set. Remeber that the domain of exterior measure was the power set of $\mathbb{R}^d$. Thus we may compute the exterior measure of the whole space $\mathbb{R}^d$ by using the definition.

<div class="real-analysis-statement" markdown="1">

**Example 5 (Unbounded Set).**

$m_{*}(\mathbb{R}^d) = \infty$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Naturally, the exterior measure of the whole space is infinity as we expected. Because, we have the bound for any cube.
\[
|Q| \le m_{*}(\mathbb{R}^d) \quad \forall \, Q \subset \mathbb{R}^d
\]
Note that this inequality holds for any cube in $\mathbb{R}^d$. Therefore we can take the limit as it goes to infinity to conclude that the exterior measure of the whole space is infinity. 

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Let $E \subset \mathbb{R}^d$ be a set with $m_{*}(E) = \infty$. Then $E$ must be unbounded. However, the converse is not true. If $E$ is unbounded, then $m_{*}(E)$ can be either infinity or finite.

</div>

The final example is the Cantor set. Let $C$ be the Cantor set which is defined by the intersection of $C_k$ where $C_k$ is obtained by iteration as follows: $C_0$ is the unit interval from 0 to 1 and at the first step we delete the central open interval from the zero step and we iterate this procedure, *i.e.* from each of the intervals we delete 1/3 the center interval. In this way we define the set $C_k$ and then we take the intersection. 
\[
C = \bigcap_{k=0}^{\infty} C_k
\]

<div class="real-analysis-statement" markdown="1">

**Example (Cantor Set).**

Let $C$ be the Cantor set defined by $C = \bigcap_{k=0}^{\infty} C_k$. Then $m_{*}(C) = 0$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
By the definition, we immediately see that the Cantor set is contained in $C_k$ for any $k$. Furthermore, since each $C_k \subset \mathbb{R}$, $|C_{k}|$ is given by the length of each interval. And we have many small intervals, actually $2^k$ intervals at each step. Thus the length of $C_k$ is given by
\[
|C_k| = \left(\frac{1}{3}\right)^k \cdot 2^k = \left(\frac{2}{3}\right)^k
\]
Note that $C \subset C_k$ $\: \forall \:k \geq 0$. Hence we have this estimate:
\[
m_{*}(C) \le |C_k| = \left(\frac{2}{3}\right)^k
\]
Finally, letting $k \to \infty$ yields $m_{*}(C) = 0$, since left hand side is independent of $k$ and we have bound for any natural number $k$.

</div>

So far, we have seen several examples of exterior measures of simple sets. Now let's move on to general properties of the exterior measure. We have several observations about the exterior measure in our textbook. It start with the result `obs:1`, but let me make the result `obs:0` which is written above the result `obs:1` in the text book. 

<div class="real-analysis-statement" markdown="1">

**Observation 0.**

Given $E \subset \mathbb{R}^d$ and $\epsilon > 0$, $\exists$ a covering $E \subset \bigcup_{j=1}^{\infty} Q_j$ such that
\[
\sum_{j=1}^{\infty} m_{*}(Q_j) \le m_{*}(E) + \epsilon.
\]
which is equivalent to
\[
\sum_{j=1}^{\infty} m_{*}(Q_j) \ge m_{*}(E).
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Recall that the definition of the exterior measure of $E$ is:
\[
m_*(E) = \inf \sum_{j=1}^\infty |Q_j|, \quad \text{where } E \subset \bigcup_{j=1}^\infty Q_j \text{ and each } Q_j \text{ is a closed cube}.
\]
By the definition of infimum, 
\[
m_*(E) = \inf \sum_{j=1}^\infty |Q_j| \leq \sum_{j=1}^\infty |Q_j|
\]
holds for any covering $\bigcup_{j=1}^\infty Q_j$ of $E$. Therefore if we allow positive error $\epsilon$, we get
\[
m_*(E) \leq \sum_{j=1}^\infty |Q_j| \leq m_*(E) + \epsilon
\]
for some covering $\bigcup_{j=1}^\infty Q_j$ of $E$. This observation follows from the definition of infimum.

</div>

Next observations is about monotonicity of the exterior measure. Indeed, this was used several times in the previous examples. This obervation implies that the exterior measure is monotone with respect to the set inclusion. So if one set contains the other, then the exterior measure of the smaller set is less than or equal to that of the larger set.

<div class="real-analysis-statement" markdown="1">

**Observation 1 (Monotonicity).**

If $E_1 \subset E_2$, then $m_{*}(E_1) \le m_{*}(E_2)$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Note that if $E_1 \subset E_2$, this implies covering of $E_2$ also covers $E_1$. Thus, if $\bigcup_{j=1}^\infty Q_j^2$ is a covering of $E_2$ and $\bigcup_{j=1}^\infty Q_j^1$ is a covering of $E_1$, then $\bigcup_{j=1}^\infty Q_j^2$ is also a covering of $E_1$.
Hence, we have the following:
\[
\bigcup_{j=1}^\infty Q_j^1 \subset \bigcup_{j=1}^\infty Q_j^2 \implies \sum_{j=1}^{\infty} |Q_j^1| \leq \sum_{j=1}^{\infty} |Q_j^2|
\]
Therefore, by the definition of the exterior measure, we have
\[
m_{*}(E_1) = \inf \sum_{j=1}^\infty |Q_j^1| \leq \inf \sum_{j=1}^\infty |Q_j^2| = m_{*}(E_2).
\]

</div>

The next observation is countable subadditivity. If we have a set $E = \bigcup_{j=1}^{\infty} E_j$, then the exterior measure $m_{*}(E)$ is less than or equal to $\sum_{j=1}^{\infty} m_{*}(E_j)$. 

<div class="real-analysis-statement" markdown="1">

**Observation 2 (Countable Subadditivity).**

If $E = \bigcup_{j=1}^{\infty} E_j$, then $m_{*}(E) \le \sum_{j=1}^{\infty} m_{*}(E_j)$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
If $\sum_{j=1}^{\infty} m_{*}(E_j) = \infty$, there is nothing to prove. 

Thus let me assume that $\sum_{j=1}^{\infty} m_{*}(E_j) < \infty$. The idea is to use the result `obs:0` for some fixed $\epsilon$ to $E_j$ for each $j$. Let $\epsilon > 0$ be given. By the result `obs:0`, for each $j$, there exists a covering of $E_j$ by closed cubes $\{Q_{k,j}\}_{k=1}^\infty$ such that
\[
\sum_{k=1}^{\infty} |Q_{k,j}| \le m_{*}(E_j) + 2^{-j}\epsilon \quad \text{where } E_j \subset \bigcup_{k=1}^\infty Q_{k,j} \quad \text{for each } j \in \mathbb{N}.
\]
Instead of $\epsilon$, since we need smaller errors, we use $2^{-j}\epsilon$. Now we have a covering $\bigcup_{k=1}^\infty Q_{k,j}$ of $E_j$ for each $j$. Since $E$ is the union of $E_j$, we can cover $E$ by the union of all $Q_{k,j}$.
\[
E = \bigcup_{j=1}^{\infty} E_j \: \subset \: \bigcup_{j, k}^{\infty} Q_{k,j}
\]
Therefore we can conclude
\[
m_{*}(E) \le \sum_{j,k}^{\infty} |Q_{k,j}| \le \sum_{j=1}^{\infty} (m_{*}(E_j) + 2^{-j}\epsilon) = \sum_{j=1}^{\infty} m_{*}(E_j) + \epsilon
\]
this inquality. Note that the second inequality comes from the constrctuon of $Q_{k,j}$. Again, letting $\epsilon \to 0$ yields the desired results.

</div>

Next observation is also important. If you have a subset of $\mathbb{R}^d$, then you can approximate the exterior measure of this set by open sets from outside. 

<div class="real-analysis-statement" markdown="1">

**Observation 3.**

If $E \subset \mathbb{R}^d$, then 
\[
m_{*}(E) = \inf_{E\, \subset \, O \text{: open}} m_{*}(O)
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
So you compute the exterior measure of open sets which contain the set $E$ and then take infimum over all open sets. So here $O$ is open and it contains $E$. Maybe this notation is a bit confusing but it means that you take the infimum of all open sets containing $E$. Okay. Uh this is equality. So we will prove this inequality and the opposite inequality. But actually one of them is trivial. Which one of them is trivial? This one $(\le)$ is trivial. Right? Because whenever uh you have a larger set, from this observation from monotonicity uh you get this inequality without infimum. But you can take infimum and then the inequality stays there. So this part is clear from the monotonicity of the exterior measure. 

So let me prove the opposite uh inequality. I will use the same trick. We will uh allow some positive error. So we will fix $\epsilon$ and choose a covering again. So $E$ is covered by the union of closed cubes. But the sum of volumes is controlled by the exterior measure with this error $\epsilon$. This is the observation zero. Again for some I will take $\epsilon / 2$. So we need this inequality right. 
\[
E \subset \bigcup_{j} Q_j \quad \text{with} \quad \sum_j |Q_j| \le m_{*}(E) + \epsilon/2
\]
This is applied to this covering and uh we need to uh make an open set which covers $E$, but this covering is the union of closed cubes. So we will make it open by considering a slightly larger set. So for each $j$ let me consider another cube, open cube $Q_j^\circ$, so that $Q_j^\circ$ contains $Q_j$. But this new open cube is not that large in the sense that the volume of this open set is very close to the volume of the original set $Q_j$ with this error. We will see why we took this strange number in a second.
\[
|Q_j^\circ| \le |Q_j| + \frac{\epsilon}{2^{j+1}}
\]
Now we have an open cover of $E$. So we took union of closed cubes. But each $Q_j$ is covered by open set and therefore the original set is covered by the union of these open sets and the countable union of open sets is open again. So let me define $O$ by union of these open cubes.
\[
O = \bigcup_j Q_j^\circ
\]
This is open and the measure of this open set uh is less than the sum of the volumes of these by the countable subadditivity that we just proved in the previous observation. And we have this uh control. So $Q_j^\circ$ is controlled by $Q_j$ plus $\epsilon / 2^{j+1}$. Uh this is the sum of $Q_j$ plus $\epsilon / 2$. We can compute the geometric series. And now we use the very first inequality.
\[
m_{*}(O) \le \sum_j |Q_j^\circ| \le \sum_j \left( |Q_j| + \frac{\epsilon}{2^{j+1}} \right) \le \sum_j |Q_j| + \frac{\epsilon}{2} \le m_{*}(E) + \epsilon
\]
This is what we wanted to prove, right? The reverse part. 

</div>

Any questions so far? Okay. Uh, next observation. Uh, looks obvious but the condition uh the assumption may look stronger than we expect. Let's assume that the set $E$ is given by the union of the two sets $E_1$ and $E_2$ and assume that they are disjoint. Okay. But actually we assume that the distance of these two sets is positive which is stronger than uh the disjointness of two sets, then we will obtain the additivity. 

<div class="real-analysis-statement" markdown="1">

**Observation 4.**

If $E = E_1 \cup E_2$ and $dist(E_1, E_2) > 0$, then 
\[
m_{*}(E) = m_{*}(E_1) + m_{*}(E_2)
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
I mean in observation two sorry uh we we had countable subadditivity but in this example we will get additivity of two sets, of finite sets. So $m_{*}(E)$ is given by $m_{*}(E_1) + m_{*}(E_2)$. And if you have several sets whose relative distances are positive. Then you can uh apply the observation inductively so that uh you have additivity of several sets like finite sets and we will prove this. But actually you cannot replace this condition by the assumption that $E_1$ and $E_2$ are disjoint. This is not true. Uh and actually this is very difficult to prove, to provide a counterexample for it and we will deal with this question in the next session, but let me first prove this observation. 

What is this? The distance of two sets. Uh this is defined by uh so you first take uh the distance of two points $x$ and $y$, and in the Euclidean space if you choose two points you can compute the distance between them right, so when $x$ is in $E_1$ and $y$ is in $E_2$. You can compute the distance of these points and you collect all possible distances and then you take infimum of them. This is a subset of the real line. So you can take infimum. So this is the definition of the distance. 
\[
dist(E_1, E_2) = \inf \{ |x - y| : x \in E_1, y \in E_2 \}
\]
If you have two sets like two open sets whose boundaries intersect at a point. These two open sets are disjoint but their distance is zero. Right? I mean in this simple example this equality holds true but there are very strange examples of two sets, disjoint sets where this equality fails but we will come back to this issue later. 

Let me first prove this inequality. And this inequality $(\le)$ was already proved right in the observation two. I mean the countable subadditivity includes finite subadditivity as a special case. So this inequality was already proved uh and we will prove the reverse inequality. 

Again we take positive $\epsilon$ and we will also take a $\delta$ by the half of the distance which is still positive.
\[
\delta = \frac{1}{2}dist(E_1, E_2) > 0
\]
Uh we need this inequality. So we will start from the right hand side and we will use the observation zero. Again we will control each of the exterior measure by the sum of volumes of cubes with this error $\epsilon$. So as always we take a covering $Q_j$. So we're going to start with this measure. So we cover $E$ by closed cubes with this inequality.
\[
E \subset \bigcup_j Q_j \quad \text{with} \quad \sum_j |Q_j| \le m_{*}(E) + \epsilon
\]
But we have two sets $E_1$ and $E_2$ and they have positive distance from each other and the union is $E$ and we have covered uh the whole set $E$ by closed cubes like this. Of course we may have a cube that intersect uh both of them. Now uh we will divide the whole collection into two subcollections. But before that we will assume that the diameter of $Q_j$ is sufficiently small like smaller than $\delta$ so that we don't have such cube. Okay. If you have this closed cube in the collection Then you can subdivide this cube into smaller cubes which still cover the whole set $E$ but the diameter of each cube is less than the distance between these two sets. This is always possible and then you can classify these cubes into two subcollections. 

So let $J_1$ and $J_2$ be a set of indices for which $Q_j$ intersects $E_1$ or $E_2$. Uh, of course there can be some cubes that do not intersect $E_1$ and $E_2$, but we can ignore them, right? You can simply ignore them. Uh, but what we have is that these two index sets $J_1$ and $J_2$ uh do not intersect ($J_1 \cap J_2 = \emptyset$) and we already subdivided the cubes into smaller pieces. So it's not possible to have a cube that intersects uh $E_1$ and $E_2$ at the same time. And also each set, either the union of all cubes where $j$ is coming from the index set $J_i$ for $i=1$ and $2$. So $E_1$ is covered by the cubes that uh are intersecting $E_1$ and $E_2$ is covered by the cubes intersecting $E_2$. 

Now we can conclude uh the observation. So we start from the right hand side $m_{*}(E_1) + m_{*}(E_2)$ uh each set is covered by these uh cubes. So the exterior measure of $E_1$ is less than the summation from the index set $J_1$ and the same is true for $J_2$, right? And these index sets do not intersect. So these summations are disjoint. And therefore the sum of these two sums is controlled by the original uh sum. 
\[
m_{*}(E_1) + m_{*}(E_2) \le \sum_{j \in J_1} |Q_j| + \sum_{j \in J_2} |Q_j| \le \sum_j |Q_j|
\]
So this is, this is wrong, right? We have here. So the covering is larger but it's not that large in this way. So now we can go to the right hand side here to control, I mean we have controlled the right hand side by this $m_{*}(E) + \epsilon$ but all the quantities are independent of $\epsilon$. So we conclude the reverse inequality.

</div>

So this is one of the observations we made under this strange I mean very strong assumption but we will prove that uh it's necessary. We had the countable subadditivity in the observation two right when the set is covered by the union of other sets. But if you have uh a countable union of almost disjoint cubes then you will get equality, countable additivity. 

<div class="real-analysis-statement" markdown="1">

**Observation 5.**

If $E$ is the countable union of almost disjoint cubes $E = \bigcup_{j=1}^{\infty} Q_j$, then 
\[
m_{*}(E) = \sum_{j=1}^{\infty} |Q_j|
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
This statement is as follows. If the set $E$ is the countable union of almost disjoint cubes. So $E$ is given by the countable union of cubes and they are almost disjoint which means that their interiors do not intersect. Then you have the equality: the exterior measure of $E$ is given by the summation of all the volumes of cubes and here you have equality instead of inequality. Again we already have proved this inequality $(\le)$ which was the countable subadditivity. So we will prove the reverse inequality. 

So we fix $\epsilon > 0$. So in this example, $E$ is a random set and it is given by the countable union of almost disjoint cubes like this. But they share boundaries. We will go inside slightly into cubes. So we consider the new cube $\tilde{Q}_j$ which is strictly contained in $Q_j$. I mean they are closed cubes. So then the union of these new cubes are disjoint, that is the point. So they are strictly contained in $Q_j$'s but their volumes are comparable in the following sense:
\[
|\tilde{Q}_j| \ge |Q_j| - \epsilon/2^j
\]
Then the distance between two cubes are always positive. Right? If you choose two different cubes, $\tilde{Q}_j$ and $\tilde{Q}_k$, this is always positive for any $j, k$. Okay. Then we can apply the previous observation which was the finite additivity. But we have countably many cubes. So we cannot directly apply the finite additivity for countable sets but instead we apply the previous observation to finitely many cubes. So the exterior measure of $\bigcup_{j=1}^N \tilde{Q}_j$ from 1 to capital $N$, $N$ is any fixed natural number $N$. Then this is equal to the finite sum of the volumes of these cubes. And by using this inequality, the volume of $\tilde{Q}_j$ is bigger or equal to the original volume minus $\epsilon/2^j$. 
\[
m_{*}\left(\bigcup_{j=1}^N \tilde{Q}_j\right) = \sum_{j=1}^N m_{*}(\tilde{Q}_j) = \sum_{j=1}^N |\tilde{Q}_j| \ge \sum_{j=1}^N \left( |Q_j| - \frac{\epsilon}{2^j} \right)
\]
So this holds for any natural number $N$. This is the point. So we can pass the limit as $N$ goes to infinity in a moment.

Now uh this finite union of these new cubes is contained in $E$ right. I mean originally this countable union is equal to $E$ but we have constructed the smaller cubes so their union is contained in $E$. So we have this inequality $m_{*}(E)$ is larger or equal to the sum right. We used all the information we have. So this is uh bigger or equal to the sum of uh all volumes of these cubes which is this. And we have this lower bound and we can estimate this from below by this. 
\[
m_{*}(E) \ge \sum_{j=1}^N |Q_j| - \epsilon
\]
We have two parameters, natural number $N$ and positive number $\epsilon$. But now we first take the limit $N$ goes to infinity because these quantities are independent of $N$ so that we get infinity here and then we send $\epsilon$ to zero. So we first let $N$ to infinity and then $\epsilon$ goes to zero, this completes the proof.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**
Uh okay, these are observations but an important remark that I mentioned before is that the assumption in the previous example maybe in observation three no observation four sorry, for the uh finite additivity we needed positive distance from two sets. So the question is if you have a union of two disjoint sets $E_1$ and $E_2$. If this is disjoint, then is the following true?
\[
m_{*}(E_1 \cup E_2) = m_{*}(E_1) + m_{*}(E_2)
\]
This is one of the fundamental questions in this course. So in this question we don't have positive distance from these two sets in most of the cases, when $E_1$ and $E_2$ are simple sets this is true but surprisingly this is not true in general, so the answer is **no** and it's not that easy to see the counterexample. And if you like, you can try to solve the exercise 33. But this exercise will require some knowledge uh from the next session. So you can postpone uh this exercise uh until the next session. But exercises in Section 1.2 are the following 3, 14, 15.

</div>

Any questions so far? You can ask question in Korean. Okay, then let me briefly explain the goal of the next section where we will define measurable sets and the Lebesgue measure.

<!-- prettier-ignore-end -->

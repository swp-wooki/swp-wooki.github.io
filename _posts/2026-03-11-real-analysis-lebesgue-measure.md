---
layout: post
title: "Real Analysis 3: Measurable Sets and Lebesgue Measure"
date: 2026-03-11 12:00:00 +0900
description: "르베그 가측집합과 르베그 측도, 가산 가법성, Borel 집합과 불변성을 정리한다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

Uh as I said maybe last week, uh the exterior measure is not the one uh uh we want to have. But instead we will need uh a new measure which is called the Lebesgue measure. Originally introduced by Lebesgue the French mathematician and uh this measure will be defined on some subclass of the power set. I mean the exterior measure was defined for arbitrary subsets of the Euclidean space. Right? But as this example you know suggests not all subsets of $\mathbb{R}^d$ are good. Some sets behave badly. So we will exclude these sets from the domain of the measure and we will uh we will collect like good sets in some sets for the domain of the Lebesgue measure. So I think we have enough time to introduce the definition of the Lebesgue measure. 

<div class="real-analysis-statement" markdown="1">

**Definition.**
A subset $E$ of $\mathbb{R}^d$ is (Lebesgue) measurable or simply measurable if you like, if the following holds and the condition is as follows: for any positive number $\epsilon$ there exists an open set $O$ containing $E$ such that the exterior measure of $O \setminus E$ is less than or equal to $\epsilon$.
\[
m_{*}(O \setminus E) \le \epsilon
\]

</div>

In the textbook, uh Stein used this notation $O \setminus E$ instead of just set operation and this definition is very close to the observation, what was it, observation three. So the idea of observation three was that we can uh approximate an arbitrary set by open set from outside. This was the idea but it was possible for arbitrary subsets of $\mathbb{R}^d$ and observation three is a bit different from this definition. Uh observation three says that the exterior measure of $E$ can be approximated by the exterior measure of open sets containing that set but this says that there exists an open set containing $E$ so that the exterior measure of this difference is controllable in this way. Okay. 

Uh you may try to distinguish these two statements and observation three holds for arbitrary sets whereas uh uh this will exclude some strange sets from the measurable sets. And let me also let me continue on Friday. So on Friday we will study some nice property of Lebesgue measurable sets and we will also study the property of the collection of all measurable sets as a space of sets. And we will also construct a counterexample of this standard additivity. Okay. See you on Friday.

On Wednesday we studied some nice properties of the exterior measure, but in the end we found that there may exist a very strange set where the finite additivity may fail. Such a strange set will be constructed in the next week or in two weeks, I guess. And this strange set led us to the following definition of the Lebesgue measure.

First, for any subset of $\mathbb{R}^d$, we say that subset $E$ is **measurable** only when a certain condition is satisfied. Thus such condition will exclude some ugly sets. We will say that a set is measurable if for any $\epsilon$, you can find an open set $O$ which contains the given set $E$ such that $m_*(O \setminus E) \le \epsilon$. So whenever the error $\epsilon > 0$ is given, we must be able to find an open set $O$ covers $E$, but the exterior measure of the difference is controllable with $\epsilon$.

<div class="real-analysis-statement" markdown="1">

**Definition.**
A set $E \subset \mathbb{R}^d$ is **measurable** if $\forall \epsilon > 0$, there exists an open set $O \supset E$, such that 
\[
m_*(O \setminus E) \le \epsilon
\]

</div>

I think we need to compare this definition with Observation 3 that we made last time, which was that the exterior measure of an arbitrary set can be approximated by open sets from outside. 

<div class="real-analysis-statement" markdown="1">

**Observation 3.**

If $E \subset \mathbb{R}^d$, then 
\[
m_{*}(E) = \inf_{E\, \subset \, O \text{: open}} m_{*}(O)
\]

</div>

Note that the result `obs:3` holds for any $E \subset \mathbb{R}^d$, whether $E$ is either measurable or non-measurable. From the result `obs:3`, we have following inequality:
\[
\text{If } E \subset \mathbb{R}^d, \text{ then } \exists \text{ open set } O \supset E \text{ such that } m_*(O) < m_*(E) + \epsilon 
\]
Above inequality comes from the definition of the infimum. Nevertheless, this inequality is different from the definition of measurability, which was 
\[
\text{If } E \subset \mathbb{R}^d, \text{ then } \exists \text{ open set } O \supset E \text{ such that } m_*(O \setminus E) \le \epsilon
\]
*i.e.* $m_*(O) \le m_*(E) + \epsilon \nRightarrow m_*(O \setminus E) \le \epsilon$.
Another important remark is that the additivity with exterior measure may fail in general. Even if we have a **disjoint** union. 

Now we will see some nice examples of measurable sets. Indeed, many sets are measurable, and in that case, we define the **Lebesgue measure** of a set. After we define the Lebesgue measure, we may say simply **measure** instead of Lebesgue measure. 

Thus let me define the (Lebesgue) measure and some notations.
<div class="real-analysis-statement" markdown="1">

**Lebesgue Measure.**

     

<ul>

<li markdown="1">A set $E \subset \mathbb{R}^d$ is **(Lebesgue) measurable** if $\forall \epsilon > 0$,
      \[
      \exists \text{ an open set } O \supset E \quad \text{ s.t. } \: m_*(O \setminus E) \le \epsilon
      \]
</li>
<li markdown="1">If $E \subset \mathbb{R}^d$ is measurable, then the **(Lebesgue) measure** $m(E)$ of $E$ is defined by $$m(E) \coloneq m_*(E)$$
</li>
<li markdown="1">Let $\mathcal{M} = \mathcal{M}(\mathbb{R}^d) \subsetneq \mathcal{P}(\mathbb{R}^d)$ denote the **collection of all measurable sets** in $\mathbb{R}^d$.

</li>
</ul>

</div>

### Properties of Measurable Sets
The goal of this section is to study the nice properties of the measure of a set, especially for $\mathcal{M}$. Indeed, we will also prove that $\mathcal{M}$ is strictly included in the power set of $\mathbb{R}^d$ by constructing non-measurable sets, but at the moment, we don't know yet.
The collection of measurable sets is closed under some set operations like intersection, union, or complement, and even for countable union and countable intersection. Those are our first goals. Let me start with simple example. 

<div class="real-analysis-statement" markdown="1">

**Propoerty 1.**

Every open set in $\mathbb{R}^d$ is measurable.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $E \subset \mathbb{R}^d$ be an open set. Since $E$ is open, we can take $E$ itself to be open cover of $E$. Obviously, for any $\epsilon > 0$, we have
    \[
    m_*(E \setminus E) = m_*(\emptyset) = 0 \le \epsilon
    \]
    Thus every open set is measurable.

</div>

The following proposition is interesting. If the exterior measure of set is 0, then it is measurable. 

<div class="real-analysis-statement" markdown="1">

**Propoerty 2.**

If $m_*(E) = 0$, then $E \in \mathcal{M}$ and $m(E) = 0$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $\epsilon > 0$. By the result `obs:3`, we can find an open set $O$ such that
\[
E \subset O \text{ and } m_*(O) \le m_*(E) + \epsilon = 0 + \epsilon = \epsilon
\]
Note that $O \setminus E \subset O$. Since the exterior measure is monotone with respect to set inclusion, we have
\[
m_*(O \setminus E) \le m_*(O) \le \epsilon
\]
which implies that $E \in \mathcal{M}$.

</div>

For the next proposition, we will prove that $\mathcal{M}$ is closed under countable union.

<div class="real-analysis-statement" markdown="1">

**Propoerty 3.**

If $E_j \in \mathcal{M}$ for $j \in \mathbb{N}$, then $E = \bigcup_{j=1}^{\infty} E_j \in \mathcal{M}$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $\epsilon > 0$. Then for all $j \in \mathbb{N}$, there exists an open set $O_{j} \supset E_{j}$ such that
\[
m_*(O_j \setminus E_j) \leq \frac{\epsilon}{2^j}
\]
since each $E_j \in \mathcal{M}$. Note that we have proved that countable union of open sets is also open at Advanced Calculus class. *i.e.* $O = \bigcup_{j=1}^{\infty}O_j$ is open. Moreover, following inclusion holds.
\[
O \setminus E \subset \bigcup_{j=1}^{\infty} (O_j \setminus E_j)
\]
Thus, we can conclude that
\[
m_*(O \setminus E) \leq \sum_{j=1}^{\infty} m_*(O_j \setminus E_j) \leq \sum_{j=1}^{\infty} \frac{\epsilon}{2^j} = \epsilon
\]

</div>

the result `prop:3` plays a key role for the next propositions. Now we will prove that $\mathcal{M}$ is closed under countable intersection and complement. For that, we need this proposition.

<div class="real-analysis-statement" markdown="1">

**Propoerty 4.**

    Closed sets are measurable.

</div>

Indeed, to prove this proposition, it is enough to show following:
\[
\text{ETS : Compact sets are measurable, as } F = \bigcup_{k \in \mathbb{N}} (F \cap B_k)
\]
where $F$ is an arbitrary closed set and $B_k$ is a closed ball of radius $k$. *i.e.* If we have closed set $F$, then we can represent $F$ with countable union of compact set $F \cap B_k$, since $F$ is closed and $B_k$ is also closed and bounded, so that each intersection $F \cap B_k$ is closed and bounded, hence compact. Therefore if we prove that compact set is measurable, then countable union of compact set is also measurable by the result `prop:3`. 

And we need to prove this lemma first. 

<div class="real-analysis-statement" markdown="1">

**Lemma 3.1.**

If $F$ is closed, $K$ is compact, and $F \cap K = \emptyset$, then $d(F, K) > 0$, where distance $d(\cdot, \cdot)$ defined by $d(A, B) = \inf \: \{|x-y| : x \in A, \: \: y \in B\}$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $K$ be a compact and $F$ be a closed. Note that $F$ is not necessarily bounded. If they intersect at one point, then there exists at least one boundary point which belongs to $K$ and $F$ at the same time. So that will violate our assumption which was $F \cap K = \emptyset$. They need to be separated from each other. Let's prove it rigorously.

Whenever we encounter compact set, we need to use the definition of the compact set. Take an open cover of the compact set and find a finite subcover. This is our key strategy. Now for each $k \in K$, we can take $\delta_{x}$ such that
\[
d(x, F) > 3 \delta_{x}
\]
where we denote $\delta_{x}$ to emphasize the dependence of the radius on the point $x$. By doing this, we found $\delta_{x}$ so that $B_{3\delta_{x}}$ does not intersect with $F$. Now consider the smaller ball $B_{2\delta_{x}}$. Then we form the open cover of $K$, *i.e.* $K \subset \bigcup_{k \in K} B_{2\delta_{x}}(x)$. 

Since $K$ is compact, we may find finite a subcover as follows:
\[
\exists \: x_{1}, \cdots, x_{N} \in K \text{ such that } K \subset \bigcup_{j=1}^{N} B_{2\delta_{x_j}}(x_j)
\]
Let $\delta = \min \, \{ \delta_{x_1}, \dots, \delta_{x_N} \} > 0$. Then by construction, if $x \in K$ and $y \in F$, then we have
\[
|x_j - x| < 2\delta_{x_j} \text{ and } |y - x_j| \geq 3\delta_{x_j}
\]
for some $j \in \{1, \dots, N\}$.
<span class="real-analysis-footnote">Note: If $x \in K$, then $x \in B_{2\delta_{x_j}}$ for some $j$, since $\bigcup_{j=1}^{N} B_{2\delta_{x_j}}(x_j)$ covers $K$. Since $x \in B_{2\delta_{x_j}}$, $|x_j - x| < 2\delta_{x_j}$ holds.</span>
Thus, simple triangle inequality yields
\[
|x - y| \geq  |y - x_j| - |x - x_j| \geq 3\delta_{x_j} - 2\delta_{x_j} = \delta_{x_j} \geq \delta > 0
\]
which implies that $d(F, K) \geq \delta > 0$.

</div>

Now we use the result `lem:3.1` to prove the result `prop:4`.

<div class="real-analysis-proof" markdown="1">

*proof (the result `prop:4`).*

Suppose that $F \subset \mathbb{R}^d$ is compact.
<span class="real-analysis-footnote">Note: Once we prove that compact set is measurable, then its countable union is also measurable. Note that in previous page, we have shown that every closed set can be represented by countable union of compact set. Thus, for here, it is enough to show that compact set is measurable. This is why we assume $F$ be compact, not closed.</span>
Let $\epsilon > 0$. By the result `obs:3`, there exists an open set $O \supset F$ such that $m_*(O) \leq m_*(F) + \epsilon$.
\[
\text{WTS : } m_*(O \setminus F) \leq \epsilon
\]
Note that we cannot get above inequality from $m_*(O) \leq m_*(F) + \epsilon$ immediately. Since $F$ is closed, basic topology gives us that $O \setminus F$ is open. Then, we can cover $O \setminus F$ by countably many almost disjoint cubes $\{Q_j\}_{j=1}^{\infty}$ by Theorem 1.4.
<span class="real-analysis-footnote">Note: In last week, we studied Theorem 1.4 and how to compute the measure of open set. Note the followings:

> 
\centering
Every open subset $\mathcal{O} \subset \mathbb{R}^d$ can be written as a countable union of almost disjoint cubes. \\

\[
|\mathcal{O}| := \sum_{j=1}^\infty |Q_j| \in [0, \infty].
\]</span>
Hence we have $O \setminus F = \bigcup_{j=1}^{\infty} Q_j$. Now fix $N \in \mathbb{N}$ and consider a compact set $K = \bigcup_{j=1}^N Q_j$.  Then by the result `lem:3.1`
<span class="real-analysis-footnote">Note: Obviously, $F \cap K = \emptyset$, since for each $Q_j \subset O \setminus F \Rightarrow Q_j \cap F = \emptyset$.</span>
, we have $d(K, F) > 0$. Since $F \cup K \subset O$, we have
\begin{align*}
    m_*{(O)} &\geq m_*(F \cup K) \
    &= m_*(F) + m_*(K)  \
    &= m_*(F) + \sum_{j=1}^N m_*(Q_j)
\end{align*}
<span class="real-analysis-footnote">Note: This equality comes from the observation 4, which we have proved in last lecture. The statement of the observation 4 was as follows: If $E = E_1 \cup E_2$ and $dist(E_1, E_2) > 0$, then 
\[
m_{*}(E) = m_{*}(E_1) + m_{*}(E_2)
\]</span>
and from last estimate, we get
\[
\sum_{j=1}^N m_*(Q_j) \leq m_*(O) - m_*(F) \leq \epsilon.
\]
thus letting $N \to \infty$ yields
\[
m_*(O \setminus F) \leq \sum_{j=1}^\infty m_*(Q_j) \leq \epsilon 
\]

</div>

<span class="real-analysis-footnote">Note: Since $O \setminus F = \bigcup_{j=1}^{\infty} Q_j$, subadditivity of the exterior measure (Observation 2 in last lecture) yields $$m_*(O \setminus F) = m_*{\left( \bigcup_{j=1}^{\infty} Q_j \right) } \leq \sum_{j=1}^\infty m_*(Q_j)$$.</span>

Now we can prove that if $E \in \mathcal{M}$, then $E^c \in \mathcal{M}$. The idea of proof is simple. We use the complement of the approximation of $E$. Instead of playing with $\epsilon$, we will use a sequence of approximations and the result `prop:2`. For each $n \in \mathbb{N}$, we construct $O_n$ which is an approximation of E. This can be done from the definition of measurability. We always approximate $E$ by open sets from outside. But if you take the complement, the complement of $E$ is approximated by closed sets from inside. So the complement of $O_n$ is closed. That is why we need the result `prop:4`.

<div class="real-analysis-statement" markdown="1">

**Property 5.**

If $E \in \mathcal{M}$, then $E^c \in \mathcal{M}$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
For all $n \in \mathbb{N}$, there exists an open set $O_n \supset E$ such that 
\[
m_*(O_n \setminus E) \le \frac{1}{n}
\]
Since $O_n^c$ is closed, it is measurable by the result `prop:4`. Now define $S := \bigcup_n O_n^c$. Since countable union of measurable sets is measurable by the result `prop:3`, we have $S \in \mathcal{M}$. Note that since $E \subset O_n$, we have $E^c \supset O_n^c$ for all $n \in \mathbb{N}$. This implies that
\[
E^c \setminus S \subset O_n \setminus E 
\] 
<span class="real-analysis-footnote">Note: Note that $E^c \setminus S = E^c \cap S^c = E^c \cap \left(\bigcup_{k=1}^{\infty} O_{k}^{c}\right)^{c} = \bigcap_{k=1}^{\infty} (O_{k}^{c})^{c} = \bigcap_{k=1}^{\infty} O_{k}$ and $\bigcap_{k=1}^{\infty} O_{k} \subset O_n$ for all $n \in \mathbb{N}$. Thus, we have 
\[
E^{c} \setminus S = E^{c} \cap \left(\bigcap_{k=1}^{\infty} O_{k}\right) \subset O_n \cap E^c = O_n \setminus E
\]</span>
hence monotonicity of the exterior measure yields
\[
m_{*}(E^{c} \setminus S) \le m_*(O_n \setminus E) \le \frac{1}{n} \: \text{ for all } n \in \mathbb{N}
\]
and this inequality holds for any natural number $n$. Therefore, $m_{*}(E^c \setminus S)$ must be zero. Thus, by the result `prop:2`, we get
\[
m_{*}(E^c \setminus S) = 0 \implies E^c \setminus S \in \mathcal{M}
\]
In particular, since $E^c = S \cup (E^c \setminus S)$, we know that $S \in \mathcal{M}$ and $E^c \setminus S \in \mathcal{M}$ so is $E^c \in \mathcal{M}$.

</div>

We can combine these facts to conclude that any countable intersection is measurable again.

<div class="real-analysis-statement" markdown="1">

**Property 6.**

If $E_j \in \mathcal{M}$ for $j \in \mathbb{N}$, then $\bigcap_{j=1}^{\infty} E_{j} \in \mathcal{M}$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
$\bigcap_{j=1}^{\infty} E_j = \left(\bigcup_{j=1}^{\infty} E_j^c\right)^c \in \mathcal{M}$.
<span class="real-analysis-footnote">Note: Since $E_j \in \mathcal{M}$, we have $E_j^c \in \mathcal{M}$ by the result `prop:5`. By the result `prop:3`, we have $\bigcup_{j=1}^{\infty} E_j^c \in \mathcal{M}$. Finally, by the result `prop:5` again, we have $\left(\bigcup_{j=1}^{\infty} E_j^c\right)^c \in \mathcal{M}$.</span>

</div>

Now, here comes the theorem. The countable additivity for the Lebesgue measure. We already proved the countable union of measurable sets is measurable. Surprisingly, the measure of the countable union of measurable sets is the sum of the measures of each set.

the result `thm:3.2` fails for the exterior measure. But since have measurable sets, which is not arbitrary set in $\mathbb{R}^d$. We have noticed that for the exterior measure, if we have a positive distance from each other, then we have finite additivity. For measurable set, we allow the sets to be disjoint with zero distance, so that the condition is weaker than exterior measure. This is the key difference between the exterior measure and the Lebesgue measure. This is why we take the Lebesgue measure as the standard measure in $\mathbb{R}^d$.
Compare the following two statements with the result `thm:3.2`.

<div class="real-analysis-statement" markdown="1">

**Observation 2 (Countable Subadditivity).**

If $E = \bigcup_{j=1}^{\infty} E_j$, then $m_{*}(E) \le \sum_{j=1}^{\infty} m_{*}(E_j)$.

</div>

<div class="real-analysis-statement" markdown="1">

**Observation 4.**

If $E = E_1 \cup E_2$ and $dist(E_1, E_2) > 0$, then 
\[
m_{*}(E) = m_{*}(E_1) + m_{*}(E_2)
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.2 (Countable Additivity).**

If $E_j \in \mathcal{M}$ for $j \in \mathbb{N}$ are disjoint and $E = \bigcup_j E_j$, then $m(E) = \sum_{j=1}^\infty m(E_j)$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($\leq$) Clearly, by the result `obs:2`, we have $$m(E) = m_*(E) \le \sum_{j=1}^\infty m_*(E_j) = \sum_{j=1}^\infty m(E_j).$$

($\geq$) For this inequality, first assume that $E_j$ is bounded for all $j$. Of course, the set $E_j$ may be unbounded with finite measure, so we will first assume that $E_j$ is bounded, and in the next step we will prove the same equality for unbounded sets.

<ol>

<li markdown="1">**$E_j$ is bounded.** \\
        Suppose that $E_j$ is bounded for all $j$. We will approximate each set $E_j$ from **inside**, whereas we usally approximate a set from outside. Anyway, we will use the complement of the $E_j$ to find an approximation of $E_j$ from inside.
        
        Let $\epsilon > 0$. Since $E_j^c \in \mathcal{M}$ by the result `prop:5`, by definition of measure,
        \[
        \exists \: \text{ an open set } O_j \supset E_j^c \: \text{ such that } m_*(O_j \setminus E_j^c) = m_*(E_j \setminus O_j^c) \le \frac{\epsilon}{2^j}
        \]
        Then $F_j \coloneq O_j^c \subset E_j$ is a closed set since $O_j$ is open. Since $E_j$ is bounded by assumption, so is $F_j$. Thus, $F_j$ is bounded and closed, so it is compact. Moreover, $F_j$ is disjoint with each other.
        <span class="real-analysis-footnote">Note: Since $E_j$ are disjoint, we have $E_j^c \supset E_k$ for all $k \neq j$. Since $O_j \supset E_j^c$, we have $O_j \supset E_k$ for all $k \neq j$. Thus, we have $F_j = O_j^c \subset E_k^c$ for all $k \neq j$, which implies that $F_j \cap F_k = \emptyset$ for all $j \neq k$.</span>
        This is the reason why try to approximate $E_j$ from inside. 
        
        Now, for each fixed $N \in \mathbb{N}$, consider $F_1, \dots, F_N$ which are compact and disjoint. Thus, we have
        <span class="real-analysis-footnote">Note: For each $F_j$ and $F_k$ with $j \neq k$, we have $d(F_j, F_k) > 0$ by the result `lem:3.1`. Thus, we can apply the result `obs:4` to get $m\left(\bigcup_{j=1}^N F_j\right) = \sum_{j=1}^N m(F_j)$.</span>
        \[
        m\left(\bigcup_{j=1}^N F_j\right) = \sum_{j=1}^N m(F_j).
        \]
        Since $\bigcup_{j=1}^N F_j \subset E$, we have
        \begin{align*}
            \sum_{j=1}^N m(E_j) &= \sum_{j=1}^N (m(F_j) + m(E_j \setminus F_j)) \
            &= \sum_{j=1}^N m(F_j) + \sum_{j=1}^N m(E_j \setminus F_j) \
            &\le m\left(\bigcup_{j=1}^N F_j\right) + \sum_{j=1}^N \frac{\epsilon}{2^j} \
            &\le m(E) + \epsilon.
        \end{align*}
        Letting $N \to \infty$ and since $\epsilon > 0$ is arbitrary, we get
        \[
        m(E) \geq \sum_{j=1}^\infty m(E_j).
        \]
</li>
<li markdown="1">**$E_j$ is unbounded.** \\
        We need to prove the same equality for unbounded sets. To do this, we will cover the whole space by a sequence of growing cubes $Q_k$. Let $\{Q_k\}_{k \in \mathbb{N}}$ be a sequence of cubes such that $Q_k \subset Q_{k+1}$ for all $k$ and $\bigcup_k Q_k = \mathbb{R}^d$. Then one can decompose $\mathbb{R}^d$ with $S_k = Q_k \setminus Q_{k-1}$. *i.e.* $S_1 = Q_1$ and $S_k = Q_k \setminus Q_{k-1}$ for $k \ge 2$, and define the bounded set $E_{j,k} = E_j \cap S_k$. Note that $E_j = \bigcup_k E_{j,k}$ and $E = \bigcup_{j,k} E_{j,k}$ are disjoint unions. Thus,
\[
m(E) = \sum_{j,k} m(E_{j,k}) = \sum_j \sum_k m(E_{j,k}) = \sum_j m(E_j).
\]

</li>
</ol>

</div>

We have proved that open, closed, and compact sets are all measurable. And the collection of all measurable sets, which we denoted by calligraphic $\mathcal{M}$, is closed under some set operations like union, intersection, and the complements. We will study some more properties of $\mathcal{M}$ further. 

Needless to say, the most important property of the measurable sets is the countable additivity. We have proved the result `thm:3.2` in last week.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.2 (Countable Additivity).**

If $E_j \in \mathcal{M}$ for $j \in \mathbb{N}$ are disjoint and $E = \bigcup_j E_j$, then $m(E) = \sum_{j=1}^\infty m(E_j)$.

</div>

This theorem states that if we have *countably many* measurable sets, and they are *disjoint*, then the measure of the union of these sets is the same as the sum of the each measurable sets. This is called the *countable additivity* of the measurable sets, which distinguishes the measurable sets from arbitrary sets in $\mathbb{R}^d$. For the exterior measure, we cannot apply countable additivity, beacuse disjointness is not enough to guarantee the equality for the exterior measure. To get equality, we needed an additional assumption that the distance between pairs of two sets must be positive. Even though, we have only **finite** additivity for the exterior measure, but for measurable sets, we have the **countable** additivity.
<span class="real-analysis-footnote">Note: For your information, please compare following statement with the result `thm:3.2`.
<div class="real-analysis-statement" markdown="1">

**Observation 2 (Countable Subadditivity).**

If $E = \bigcup_{j=1}^{\infty} E_j$, then $m_{*}(E) \le \sum_{j=1}^{\infty} m_{*}(E_j)$.

</div>

<div class="real-analysis-statement" markdown="1">

**Observation 4.**

If $E = E_1 \cup E_2$ and $dist(E_1, E_2) > 0$, then 
\[
m_{*}(E) = m_{*}(E_1) + m_{*}(E_2)
\]

</div></span>

Today we are going to study some corollaries of the result `thm:3.2`. Let me start with the result `cor:3.3`, and we need to define some notations for the limit of sets.

    
<ul>

<li markdown="1">If $E_j \subset E_{j+1}$ and $\bigcup_{j=1}^\infty E_j = E$, we write $E_j \nearrow E$.
</li>
<li markdown="1">If $E_j \supset E_{j+1}$ and $\bigcap_{j=1}^\infty E_j = E$, we write $E_j \searrow E$.
    
</li>
</ul>

Thus for $E_j \nearrow E$, we have an increasing sequence of sets $\{E_j\}$, and for $E_j \searrow E$, we have a decreasing sequence of sets $\{E_j\}$.

<div class="real-analysis-statement" markdown="1">

**Corollary 3.3.**

Let $E_j \in \mathcal{M}$, for all $j \in \mathbb{N}$.

<ol>

<li markdown="1">If $E_j \nearrow E$ (i.e., $E_j \subset E_{j+1}$ and $\bigcup_{j=1}^\infty E_j = E$), then $m(E) = \lim_{j\to\infty} m(E_j)$.
</li>
<li markdown="1">If $E_j \searrow E$ (i.e., $E_j \supset E_{j+1}$ and $\bigcap_{j=1}^\infty E_j = E$) and $m(E_k) < \infty$ for some $k \in \mathbb{N}$, then $m(E) = \lim_{j\to\infty} m(E_j)$.

</li>
</ol>

</div>

The first statement is quite natural to expect. The same is true for the decreasing sequence, but we need one more assumption for the second statement. For the first statement, if we allow the measure of $E_j$ to be infinite, then $\{m(E_j)\}$ converges to infinity, and the measure of $E$ is also infinite. This is also possible. 

But for the second statement, if we drop the additional assumption that each $m(E_j)$ is finite, then the equality may fail. There exists a simple counterexample. In order to construct the counterexample, we have to find the sequence of sets $\{E_j\}$ such that $E_j \searrow E$ and $m(E_j) = \infty$ for any $j$. However, since this sequence is decreasing in the sence of set inclusion, the measure of $E = \bigcap_{j=1}^\infty E_j$ must be finite.

Thus for the counterexample, the right-hand side is infinite, but the left-hand side is finite. Let's consider $E_1 = (1, \infty)$ so that $m(E_1) = \infty$, *i.e.* define $E_j = (j, \infty)$. Clearly, for each $j$, $m(E_j) = \infty$. But 
\[
\bigcap_{j=1}^\infty E_j = \emptyset \implies m\left(\bigcap_{j=1}^\infty E_j\right) = 0 \ne \infty = \lim_{j\to\infty} m(E_j)
\]
Thus we have $m(E) \leq \lim_{j\to\infty} m(E_j)$. Now prove the corollary.
<div class="real-analysis-proof" markdown="1">

*Proof.*

    
<ol>

<li markdown="1">Let $G_1 = E_1$ and $G_j = E_j \setminus E_{j-1} (= E_j \cap E_{j-1}^c)$
        <span class="real-analysis-footnote">Note: Note that $G_j, E_j, E_j^c \in \mathcal{M}$ for each $j$. Indeed, $E_j \in \mathcal{M}$ by assumption, and since $\mathcal{M}$ is closed under intersection and complment, one can deduce that
            \[
            E_j \in \mathcal{M} \implies E_j^c \in \mathcal{M} \implies E_j \cap E_{j-1}^c (=E_j \setminus E_{j-1}=G_j) \in \mathcal{M}
            \]</span>
        for $j \ge 2$.
        <span class="real-analysis-footnote">Note: Since the result `thm:3.2` requires disjointness, we construct disjoint sets.</span>
        Then the $G_j \in \mathcal{M}$ are disjoint and $E = \bigcup_{j=1}^{\infty} G_j$. 
        Thus by countable additivity, we get
        \[
        m(E) = \sum_{j=1}^\infty m(G_j) = \lim_{N\to\infty} \sum_{j=1}^N m(G_j).
        \]
        Hence,
        \[
        m(E) = \lim_{N\to\infty} \sum_{j=1}^N m(G_j) = \lim_{N\to\infty} m\left(\bigcup_{j=1}^N G_j\right) = \lim_{N\to\infty} m(E_N).
        \]

</li>
<li markdown="1">We may assume that $m(E_1) < \infty$. 
        Let $G_k = E_k \setminus E_{k+1}$, so that 
        \begin{align*}
            E_1 &= E \cup \bigcup_{j=1}^{\infty} G_j \
            \intertext{is a disjoint union. Then,}
            m(E_1) &= m(E) + \lim_{N\to\infty} \sum_{j=1}^{N-1} (m(E_j) - m(E_{j+1})) \
                   &= m(E) + m(E_1) - \lim_{N\to\infty} m(E_N),
        \end{align*}
        which implies $m(E) = \lim_{N\to\infty} m(E_N)$. 
    
</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.4.**

Let $E \in \mathcal{M}$. Then $\forall \epsilon > 0$,

<ol>

<li markdown="1">$\exists$ open $O \supset E$ s.t. $m(O \setminus E) \le \epsilon$
</li>
<li markdown="1">$\exists$ closed $F \subset E$ s.t. $m(E \setminus F) \le \epsilon$
</li>
<li markdown="1">If $m(E) < \infty$, $\exists$ compact $K \subset E$ s.t. $m(E \setminus K) \le \epsilon$
</li>
<li markdown="1">If $m(E) < \infty$, then $\exists$ a finite union $F = \bigcup_{j=1}^N Q_j$ of cubes s.t. $m(E \Delta F) \le \epsilon$ <span class="real-analysis-footnote">Note: $E \Delta F = (E \setminus F) \cup (F \setminus E)$</span>.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

    
<ol>

<li markdown="1">See the definition of measure.
</li>
<li markdown="1">Use $E^c$ as before.

</li>
<li markdown="1">Take a closed set $F \subset E$ such that $m(E \setminus F) \le \epsilon/2$ and define compact sets $K_n = F \cap B_n$ where $B_n$ denotes the closed ball of radius $n$. Then $E \setminus K_n \searrow E \setminus F$. Since $m(E) < \infty$, $m(E \setminus K_n) < \infty$ and we get $m(E \setminus K_N) \le \epsilon$ for sufficiently large $N$.

</li>
<li markdown="1">Take a covering $E \subset \bigcup_{j=1}^\infty Q_j$ such that 
        \[
        \sum_{j=1}^\infty |Q_j| \le m(E) + \epsilon/2 \tag{2}
        \] 
        Choose $N \in \mathbb{N}$ such that 
        \begin{equation} \tag{1}
            \sum_{j=N+1}^\infty |Q_j| < \frac{\epsilon}{2}.
        \end{equation}
        
        If $F = \bigcup_{j=1}^N Q_j$, then
        \begin{align*}
            m(E \Delta F) &= m(E \setminus F) + m(F \setminus E) \
            &\le m\left(\bigcup_{j=N+1}^\infty Q_j\right) + m\left(\bigcup_{j=1}^\infty Q_j \setminus E\right) \
            &\le \sum_{j=N+1}^\infty |Q_j| + \sum_{j=1}^\infty |Q_j| - m(E) \
            &< \underbrace{\epsilon/2}_{(1)} + \underbrace{\epsilon/2}_{(2)} = \epsilon
        \end{align*}
    
</li>
</ol>

</div>

### Invariance properties of the Lebesgue measure
<div class="real-analysis-statement" markdown="1">

**Remark.**

     
    
<ol>

        If $E \in \mathcal{M}$, $h \in \mathbb{R}^d$ and $\delta > 0$, then
<li markdown="1">$E + h = \{x+h : x \in E\} \in \mathcal{M}$ and $m(E+h) = m(E)$
</li>
<li markdown="1">$\delta E = \{\delta x : x \in E\} \in \mathcal{M}$ and $m(\delta E) = \delta^d m(E)$ <span class="real-analysis-footnote">Note: (See exercises 7 \& 8)</span>
    
</li>
</ol>

</div>

### $\sigma$-algebra and Borel sets
<div class="real-analysis-statement" markdown="1">

**$\sigma$-algebra.**

A $\sigma$-algebra is a collection $\Sigma \subset \mathcal{P}(\mathbb{R}^d)$ that is closed under countable unions, countable intersections and complement.

</div>

<div class="real-analysis-statement" markdown="1">

**Borel $\sigma$-algebra $\mathcal{B}_{\mathbb{R}^d}$.**

The Borel $\sigma$-algebra $\mathcal{B}_{\mathbb{R}^d}$ is the smallest
<span class="real-analysis-footnote">Note: If $\mathcal{S}$ is another $\sigma$-algebra containing all open sets, then $\mathcal{B}_{\mathbb{R}^d} \subset \mathcal{S}$.
$\mathcal{B}_{\mathbb{R}^d}$ is the intersection of all $\sigma$-algebras containing all open sets.</span> $\sigma$-algebra that contains all open sets. Elements in $\mathcal{B}_{\mathbb{R}^d}$ are called Borel sets.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

     
    
<ol>

<li markdown="1">$\mathcal{B}_{\mathbb{R}^d}$ is the intersection of all $\sigma$-algebras containing all open sets.
</li>
<li markdown="1">$\mathcal{B}_{\mathbb{R}^d} \subsetneq  \mathcal{M} \subsetneq  \mathcal{P}(\mathbb{R}^d)$
        <span class="real-analysis-footnote">Note: See Exercise 35, not a homework.</span>
        <span class="real-analysis-footnote">Note: This is the counterexample for non-measurable set, which we will construct in the next section.</span>
    
</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**$G_\delta$ and $F_\sigma$ sets.**

     
    
<ol>

<li markdown="1">Countable intersection of open sets are $G_\delta$ sets.
</li>
<li markdown="1">Countable union of closed sets are $F_\sigma$ sets.
    
</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 3.5.**
 
    The following are equivalent:

<ol>

<li markdown="1">$E \in \mathcal{M}$
</li>
<li markdown="1">$E$ differs from a $G_\delta$ set by a set of measure $0$.
</li>
<li markdown="1">$E$ differs from a $F_\sigma$ set by a set of measure $0$.
    <span class="real-analysis-footnote">Note: $E$ differs from a set $A$ by a set of measure $0$ means that $m(E \setminus A) = 0$.</span>

</li>
</ol>

</div>

### Construction of non-measurable sets
We consider an equivalence relation 
\[
x \sim y \quad \iff \quad x - y \in \mathbb{Q} \qquad \text{ in } \mathbb{R}
\]
Then $[0,1]$ is the disjoint union of all equivalence classes;
\[
[0, 1] = \bigcup_\alpha E_\alpha
\] We choose exactly one element 
\[
x_\alpha \in E_\alpha \quad \forall \alpha
\] 
and define 
\[
N = \{x_\alpha\}_\alpha \subset [0, 1]
\]
which is uncountable set.

<div class="real-analysis-statement" markdown="1">

**Thmeorem 3.6.**

$N \notin \mathcal{M}$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $\{r_k\}_{k=1}^\infty$ be an enumeration of
\[
\mathbb{Q} \cap [-1, 1]
\] 
and consider
\[
N_k = N + r_k \text{ : translation of } N.
\]
(i) The sets $N_k$ are disjoint.\\
Suppose not. *i.e.* if $N_k \cap N_{k'} \neq \emptyset$, then 
\[
\exists \: x \text{ such that } x_\alpha + r_k = x_\beta + r_{k'}.
\]
Since $x_\alpha - x_\beta = r_{k'} - r_k \in \mathbb{Q} \setminus \{0\}$, 
we have 
\[
\alpha \neq \beta \text{ and } \underbrace{x_\alpha \sim x_\beta}_{\text{contradiction, from the choice of } x_\alpha}
\]
(ii) $[0, 1] \subset \bigcup_{k=1}^\infty N_k \subset [-1, 2]$. \\
$\bigcup_{k=1}^\infty N_k \subset [-1, 2]$ is trivial. Thus, it is enough to show that $[0, 1] \subset \bigcup_{k=1}^\infty N_k$.
If $x \in [0,1]$, then $x \sim x_\alpha$ for some $\alpha$, and therefore $x = x_\alpha + r_k$ for some $k \implies x \in N_k$. \\

Now, assume $N \in \mathcal{M}$. Then $N_k \in \mathcal{M}$ and $m(N_k) = m(N)$. Consequently,
\[
1 \le \sum_{k=1}^\infty m(N_k) = \sum_{k=1}^\infty m(N) \le 3
\]
which is a contradiction.

</div>

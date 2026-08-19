---
layout: post
title: "Real Analysis 10: Functions of Bounded Variation and Absolute Continuity"
date: 2026-06-04 12:00:00 +0900
description: "유계변동함수, 절대연속함수, 점프함수의 미분가능성을 정리한다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

<div class="real-analysis-statement" markdown="1">

**Main Question 2.**

What conditions on $$F$$ guarantee that $$F'$$ exists a.e., that $$F' \in L^1$$ and that

$$
F(b) - F(a) = \int_a^b F'(x) dx.
$$

cf. See Exercise 12: $$F' \notin L^1$$ in general.

</div>

### 3.3.1 Functions of bounded variation
Let $$\gamma$$ be a parametrized curve in $$\mathbb{R}^2$$ given by a continuous function,

$$
z(t) = (x(t), y(t)), \quad t \in [a, b]
$$

<div class="real-analysis-statement" markdown="1">

**Definition.**
$$\gamma$$ is **rectifiable** if there exists $$M < \infty$$ such that for any partition $$P$$,

$$
P : a = t_0 < t_1 < \dots < t_N = b
$$

the following holds:

$$
\sum_{j=1}^N \vert z(t_j) - z(t_{j-1})\vert  \le M.
$$

The length of $$\gamma$$ is defined by

$$
L(\gamma) \coloneq \sup_P \sum_{j=1}^N \vert z(t_j) - z(t_{j-1})\vert  = \inf M
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Question.**

What conditions on $$x, y$$ guarantee rectifiability of $$\gamma$$?

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
A function $$F : [a,b] \to \mathbb{C}$$
<span class="real-analysis-footnote" markdown="span">Note: $$F$$ is not necessarily continuous.</span>is of **bounded variation** if there exists $$M < \infty$$ such that for all partition of $$[a,b]$$,

$$
\sum_{j=1}^N \vert F(t_j) - F(t_{j-1})\vert  \le M.
$$

We call $$\sum_{j=1}^N \vert F(t_j) - F(t_{j-1})\vert $$ the variation of $$F$$ with respect to $$P$$. Furthermore, we define the set of all functions of bounded variation by

$$
BV[a,b] := \{F : [a,b] \to \mathbb{C} : F \text{ is of bounded variation}\}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.1.**

A curve parametrized by $$(x(t), y(t)), a \le t \le b$$, is rectifiable if and only if $$x$$ and $$y$$ are of bounded variation.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
One may write $$F(t) = x(t) + iy(t)$$. Observe that

$$
F(t_j) - F(t_{j-1}) = (x(t_j) - x(t_{j-1})) + i(y(t_j) - y(t_{j-1})).
$$

The results follows from $$\vert a + ib\vert \le \vert a\vert + \vert b\vert \le 2\vert a + ib\vert $$.

</div>

<div class="real-analysis-statement" markdown="1">

**Example.**

<ol>

<li markdown="1">If $$F : [a,b] \to \mathbb{R}$$ is increasing and bounded, then $$F \in BV$$ since

$$
\sum_{j=1}^N \vert F(t_j) - F(t_{j-1})\vert  = F(b) - F(a) < 2 \sup \vert F\vert  < \infty.
$$

</li>
<li markdown="1">If $$F$$ is differentiable and $$F'$$ is bounded, then $$F \in BV$$. Indeed, by the MVT,

$$
\sum \vert F(t_j) - F(t_{j-1})\vert  = \sum \vert F'(t_j^*)\vert  (t_j - t_{j-1}) \le M(b-a).
$$

See also exercise 23.
</li>
<li markdown="1">Let

$$
F(x) = \begin{cases}
x^a \sin(x^{-b}) & 0 < x \le 1 \
0 & x = 0
\end{cases}
$$

Then $$F \in BV[0,1]$$ if and only if $$a > b$$. (Exercise 11).

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

<ol>

<li markdown="1">The **total variation** of $$F$$ on $$[a,x]$$ is defined by

$$
T_F(a, x) \coloneq \sup_P \sum_{j=1}^N \vert F(t_j) - F(t_{j-1})\vert
$$

where $$P$$ is a partition of $$[a,x]$$.
</li>
<li markdown="1">The **positive variation of** $$F : [a, b] \to \mathbb{R}$$

$$
P_F(a, x) \coloneq \sup_P \sum_{(+)} (F(t_j) - F(t_{j-1}))
$$

where $$(+)$$ denotes the set of indices $$j$$ for which $$F(t_j) - F(t_{j-1}) \ge 0$$.
</li>
<li markdown="1">The **negative variation of** $$F : [a, b] \to \mathbb{R}$$

$$
N_F(a, x) \coloneq \sup_P \sum_{(-)} -(F(t_j) - F(t_{j-1}))
$$

where $$(-)$$ denotes the set of indices $$j$$ for which $$F(t_j) - F(t_{j-1}) < 0$$.

</li>
</ol>

</div>

Note that the total variation allows complex-valued functions, whereas the positive and negative varations are defined only for real-valued functions.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.2.**

Let $$F \in BV[a,b]$$ be real-valued function. Then for all $$x \in [a,b]$$,

$$
F(x) - F(a) = P_F(a, x) - N_F(a, x) \quad \text{and} \quad T_F(a, x) = P_F(a, x) + N_F(a, x).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
For all $$\epsilon > 0$$, there exists a partition $$P$$
such that

$$
P_F - \sum_{(+)} (F(t_j) - F(t_{j-1})) < \epsilon \quad @@REAL_ANALYSIS_MATH_24@@ \quad N_F - \sum_{(-)} -(F(t_j) - F(t_{j-1})) < \epsilon.
$$

That is, $$P$$ is a refinement of $$P_F$$ and $$N_F$$.
Since

$$
F(x) - F(a) = \sum_{(+)} (F(t_j) - F(t_{j-1})) - \sum_{(-)} -(F(t_j) - F(t_{j-1}))
$$

we have

$$
\vert F(x) - F(a) - (P_F - N_F)\vert  < 2\epsilon \implies F(x) - F(a) = P_F(a, x) - N_F(a, x).
$$

This proves the first equality.

To prove the second equality, note that ($$\le$$) is trivial. Hence for the other direction ($$\ge$$), we get the following estimate:

$$
\begin{aligned}
P_F + N_F &\le \sum_{(+)} + \sum_{(-)} + 2\epsilon \\
&= \sum_{j=1}^N \vert \cdot\vert  + 2\epsilon \le T_F + 2\epsilon \implies P_F + N_F \le T_F
\end{aligned}
$$

This completes the proof.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.3.**

Let $$F : [a,b] \to \mathbb{R}$$. Then $$F \in BV$$ if and only if $$F$$ is the difference of two increasing bounded functions.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($$\impliedby$$) Clear. <br>
($$\implies$$) Write $$F(x) = (P_F(a, x) + F(a)) - N_F(a, x)$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Bounded variation is not necessariliy continuous.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.4.**

If $$F \in BV[a,b]$$, then $$F'$$ exists a.e.

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 3.5 (Rising sun).**

Let $$G \in C(\mathbb{R})$$. Let

$$
E = \{x : G(x+h_x) > G(x) \text{ for some } h_x > 0\}.
$$

If $$E \neq \emptyset$$, then $$E$$ is open, hence $$E$$ is countable union of open intervals

$$
E = \bigcup_k (a_k, b_k).
$$

Moreover, if $$(a_k, b_k)$$ is finite interval in this union, then $$G(a_k) = G(b_k)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
If $$x \in E$$, then there exists $$\delta > 0$$ such that

$$
G(y + h_x) > G(y) \quad \forall \; y \in (x-\delta, x+\delta).
$$

Thus, $$E$$ is open. Now, consider $$(a_k, b_k) \subset E$$. Since $$a_k \notin E$$, $$G(b_k) \le G(a_k)$$.

Suppose $$G(b_k) < G(a_k)$$. By the MVT, there exists  $$c \in (a_k, b_k)$$ such that

$$
G(c) = \frac{1}{2}(G(a_k) + G(b_k))
$$

We may choose $$c$$ farthest to the right in $$(a_k, b_k)$$. Since $$c \in E$$,

$$
\exists \; d > c \quad \text{ such that } \quad G(d) > G(c)
$$

Note that $$G(x) \le G(b_k)$$ for all $$x \ge b_k$$. So $$d < b_k$$. Therefore, we can find $$c'$$ as

$$
c' \in (c, d) \subset (a_k, b_k) \quad \text{ such that } \quad G(c') = G(c)
$$

by using MVT again. Which is contradiction to the choice of $$c$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 3.6.**

Lem 3.5 also holds for $$G \in C[a,b]$$ and

$$
E = \{x \in (a,b) : G(x+h_x) > G(x) \text{ for some } h_x > 0\}
$$

except possibly when $$a = a_k$$, in which case

$$
G(a_k) \le G(b_k), \quad b = b_k, \quad \text{and} \quad G(a_k) \ge G(b_k).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof of Theorem 3.4.*

<ol>

<li markdown="1">We assume $$F$$ is increasing, bounded and continuous. We define

$$
\begin{aligned}
D^+ F(x) &= \limsup_{0 < \pm h \to 0} \Delta_h F(x) \quad \text{and}\\
D_+ F(x) &= \liminf_{0 < \pm h \to 0} \Delta_h F(x)
\end{aligned}
$$

where $$\Delta_h F(x) = \frac{F(x+h) - F(x)}{h}$$.
Then, it is enough to show that

<ol>

<li markdown="1">$$D^+ F < \infty$$ a.e.
</li>
<li markdown="1">$$D^+ F \le D_- F$$ a.e.

</li>
</ol>

Indeed, (ii) applied to $$-F(-x)$$ shows that

$$
D^- F \le D_+ F \quad \text{a.e.}
$$

and hence

$$
D^+ F \le D_- F \le D^- F \le D_+ F \le D^+ F < \infty \quad \text{a.e.}
$$

Now prove (i). Since

$$
\{D^+ F = \infty\} \subset \{D^+ F > \gamma\} \eqcolon E_\gamma \quad \forall \; \gamma > 0,
$$

hence it suffices to show that<span class="real-analysis-footnote" markdown="span">Note: See Exercise 14 to show that $$E_\gamma \in \mathcal{M}$$.</span>

$$
\text{ETS : } m(E_\gamma) \to 0 \quad \text{as } \gamma \to \infty.
$$

We apply Corollary 3.6 to $$G(x) = F(x) - \gamma x$$ :

$$
E_\gamma = \bigcup_k (a_k, b_k) \quad \text{ where } \quad F(b_k) - F(a_k) \ge \gamma (b_k - a_k).
$$

Then,

$$
\begin{aligned}
m(E_\gamma) &= \sum_k m((a_k, b_k)) \\
&\le \sum_k \frac{1}{\gamma} (F(b_k) - F(a_k)) \\
&\le \frac{1}{\gamma} (F(b) - F(a)) \to 0 \quad \text{as } \gamma \to \infty.
\end{aligned}
$$

Now, we prove (ii). Note that

$$
(a, b) \supset \{D^+ F > D_- F\} \subset \bigcup_{\overset{R, r \in \mathbb{Q}}{R > r}} \{D^+ F > R \text{ and } D_- F < r\}
$$

Then,

$$
\text{ETS : } m(E) = 0 \text{ for fixed } R, r \in \mathbb{Q} \text{ with } R > r.
$$

Suppose $$m(E) > 0$$. Then there exists an open $$\mathcal{O}$$ such that

$$
E \subset \mathcal{O} \subset (a,b) \quad \text{and} \quad m(\mathcal{O}) < m(E) + \frac{R}{r}.
$$

Write $$\mathcal{O} = \bigcup_n I_n$$ with $$I_n$$ disjoint intervals. We then have

$$
m(E) = \sum_n m(E \cap I_n) \quad \text{and} \quad \frac{r}{R} \sum_n m(I_n) = \frac{r}{R} m(\mathcal{O}) < m(E)
$$

Applying Corollary 3.6 to $$G(x) \coloneq F(x) - rx$$ on for each $$I_n$$, we have

$$
\{x \in I_n : G(x+h_x) > G(x) \text{ for some } h_x > 0\} = \bigcup_k (a_{k}, b_{k})
$$

and $$G(a_k) \ge G(b_k)$$, that is

$$
F(b_k) - F(a_k) \le r (b_k - a_k)
$$

Applying Corollary 3.6 once again to $$H(x) \coloneq F(x) - Rx$$ on each $$(a_k, b_k)$$, we have

$$
\{x \in I_n : H(x+h_x) > H(x) \text{ for some } h_x > 0\} = \bigcup_j (a_{k,j}, b_{k,j})
$$

and $$H(a_{k,j}) \ge H(b_{k,j})$$, that is

$$
F(b_{k,j}) - F(a_{k,j}) \ge R (b_{k,j} - a_{k,j}).
$$

Let

$$
\mathcal{O}_n = \bigcup_{k,j} (a_{k,j}, b_{k,j}) \subset I_n.
$$

Since $$F$$ is increasing,

$$
\begin{aligned}
m(\mathcal{O}_n) = \sum_{k,j} (b_{k, j} - a_{k, j})
&\le \sum_{k,j} \frac{1}{R} (F(b_{k,j}) - F(a_{k,j})) \\
&\le \frac{1}{R} \sum_k (F(b_k) - F(a_k)) \\
&\le \frac{1}{R} \sum_k r (b_k - a_k) \\
&\le \frac{r}{R} m(I_n).
\end{aligned}
$$

Now, it suffices to show that

$$
E \cap I_n \subset \mathcal{O}_n.
$$

In fact, if $$y \in E \cap I_n$$, then $$D_- F(y) < r$$, and hence

$$
\exists \; h < 0 \text{ such that } \frac{F(y+h) - F(y)}{h} < r,
$$

that is, $$G(y+h) > G(y)$$. Thus,

$$
y \in (a_k, b_k) \text{ for some } k.
$$

Also, $$D^+ F(y) > R$$ implies that there exists $$\tilde{h} > 0$$ such that

$$
\frac{F(y+\tilde{h}) - F(y)}{\tilde{h}} > R
$$

that is, $$H(y+\tilde{h}) > H(y)$$. Thus,

$$
y \in (a_{k,j}, b_{k,j}) \text{ for some } j.
$$

</li>
<li markdown="1">For general case, we will prove this theorem at Section 3.3.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 3.7.**

$$F : [a,b] \to \mathbb{R}$$. If $$F$$ is increasing and continuous, then $$F'$$ exists a.e.. Moreover, $$F'$$ is measurable, nonnegative, $$F' \in L^1[a,b]$$ and

$$
\int_a^b F'(x) dx \le F(b) - F(a)
$$

In particular, if $$F$$ is bounded on $$\mathbb{R}$$, then $$F' \in L^1(\mathbb{R})$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Since

$$
G_n(x) \coloneq \frac{F(x + \frac{1}{n}) - F(x)}{\frac{1}{n}} \to F'(x) \quad \text{a.e.}
$$

by Theorem 3.4, $$F'$$ is measurable and nonnegative. We may assume $$F \in C(\mathbb{R})$$. By Fatou's lemma,

$$
\int_a^b F' dx \le \liminf_{n \to \infty} \int_a^b G_n
$$

But,

$$
\begin{aligned}
\int_a^b G_n
&= \frac{1}{1 / n} \int_a^b F(x + \frac{1}{n}) dx - \frac{1}{1 / n} \int_a^b F(x) dx \\
&= \frac{1}{1 / n} \int_{a + \frac{1}{n}}^{b+\frac{1}{n}} F(x) dx - \frac{1}{1 / n} \int_a^b F(x) dx \\
&= \mathop{\rlap{-}\int}_{b}^{b + \frac{1}{n}} F(x) dx - \mathop{\rlap{-}\int}_{a}^{a + \frac{1}{n}} F(x) dx \to F(b) - F(a) \quad \text{as } n \to \infty.
\end{aligned}
$$

</div>

### The Cantor-Lebesgue function
We construct an increasing function

$$
F \in C[0,1] \text{ with } F(0)=0, F(1)=1 \text{ but } F' = 0 \text{ a.e.}
$$

so that so that $$\int_0^1 F' \neq F(1) - F(0)$$. Let $$C = \bigcap_k C_k$$ be the Cantor set.
Then $$\{F_n\}$$ is sequence of increasing functions in $$C[0,1]$$ such that

$$
\vert F_{n+1} - F_n\vert  < 2^{-n-1} \quad \text{on } [0,1]
$$

Thus, $$F_n \rightrightarrows F \in C[0,1]$$. Note that $$F$$ is increasing, $$F(0)=0$$, $$F(1)=1$$, and $$F$$ is constant on each interval of $$[0,1] \setminus C$$. Since $$m(C)=0$$, $$F' = 0$$ a.e.

### 3.3.2. Absolutely continuous functions
<div class="real-analysis-statement" markdown="1">

**Definition.**
$$F : [a,b] \to \mathbb{R}$$ is called **absolutely continuous** if for all $$\epsilon > 0$$, there exists $$\delta > 0$$ such that

$$
\sum_{k=1}^N \vert F(b_k) - F(a_k)\vert  < \epsilon
$$

whenever

$$
\sum_{k=1}^N (b_k - a_k) < \delta \text{ for disjoint intervals } (a_k, b_k),
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">Absolutely continuous $$\implies$$ uniformly continuous $$\implies$$ continuous.
</li>
<li markdown="1">$$AC \subset BV[a,b]$$.
</li>
<li markdown="1">If $$f \in L^1$$, then

$$
F(x) = \int_a^x f(y) dy
$$

is absolutely continuous by Proposition 1.12 in Chapter 2. This implies absolutely continuous is a necessary condition for $$\int_a^b F' = F(b) - F(a)$$.
<span class="real-analysis-footnote" markdown="span">Note: If $$\int_a^b F' = F(b) - F(a)$$, then $$\int_a^x F' = F(x) - F(a)$$ for all $$x \in [a,b]$$, which implies $$F(x) = \int_a^x F' + F(a)$$ is absolutely continuous.</span>

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.8.**

If $$F$$ is absolutely continuous on $$[a,b]$$, then $$F'$$ exists almost everywhere.
Moreover, if $$F' = 0$$ almost everywhere, then $$F$$ is constant.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $$E \subset \mathbb{R}^d$$. A collection $$\mathcal{B}$$ of balls is a **Vitali covering** of $$E$$ if for all $$x \in E$$ and $$\eta > 0$$, there exists $$B \in \mathcal{B}$$ such that $$x \in B$$ and $$m(B) < \eta$$.

</div>

Following Lemma 3.9 suggests that we can find a finitely many disjoint balls from Vitali covering with error $$\delta$$, which cover almost of $$E$$.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.9.**

Let $$\mathcal{B}$$ be a Vitali covering of $$E$$, where $$m(E) < \infty$$. Then for all $$\delta > 0$$, there exists finitely many disjoint balls $$B_1, \dots, B_N \in \mathcal{B}$$ such that

$$
\sum_{i=1}^N m(B_i) > m(E) - \delta.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We may assume $$\delta < m(E)$$.
<span class="real-analysis-footnote" markdown="span">Note: If $$\delta \ge m(E)$$, then $$m(E) - \delta \le 0$$</span> Take a compact subset $$E'$$ of $$E$$ with $$m(E') \ge \delta$$, and cover $$E'$$ by finitely many balls from $$\mathcal{B}$$.
By Vitali's covering argument, we can select a disjoint subcollection $$\{B_1, \dots, B_{N_1}\} \subset \mathcal{B}$$ such that

$$
\sum_{i=1}^{N_1} m(B_i) \ge 3^{-d} m(E') \ge 3^{-d} \delta.
$$

Note that first inequality comes from Lemma 1.2. If the left-hand side $$\sum_{i=1}^{N_1} m(B_i) > m(E) - \delta$$, then we are done.

Otherwise, that is, $$\sum_{i=1}^{N_1} m(B_i) < m(E) - \delta$$, we have $$m(E_2) > \delta$$, where

$$
E_2 = E \setminus \bigcup_{i=1}^{N_1} \overline{B_i}
$$

Since $$\sum_{i=1}^{N_1} m(B_i) < m(E) - \delta \implies \delta < m(E) - \sum_{i=1}^{N_1} m(B_i) = m(E_2)$$ Note that the balls in $$\mathcal{B}$$ that are disjoint from $$\bigcup_{i=1}^{N_1} \overline{B_i}$$ still cover $$E_2$$:

If $$x \in E_2$$, then
$$\text{dist}(x, \bigcup_{i=1}^{N_1} \overline{B_i}) > 0.$$
Thus, for all $$\eta > 0$$, there exists $$B \in \mathcal{B}$$ such that $$x \in B$$, $$m(B) < \eta$$ and $$B \cap B_i = \emptyset$$. In fact, this gives a Vitali covering for $$E_2$$.

We repeat the previous argument and choose a disjoint subcollection $$\{B_{N_1+1}, \dots, B_{N_2}\} \subset \mathcal{B}$$ such that

$$
\sum_{i=N_1+1}^{N_2} m(B_i) \ge 2 \cdot 3^{-d} \delta.
$$

Continuing this way, we would have selected a collection of disjoint balls $$\{B_1, \dots, B_{N_k}\} \subset \mathcal{B}$$ with
$$\sum_{i=1}^{N_k} m(B_i) \ge k \cdot 3^{-d} \delta$$
at the $$k$$-th stage. Thus, this process must stop after finite steps.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 3.10.**

We can arrange the choice of balls such that
$$m(E \setminus \bigcup_{i=1}^N B_i) < 2\delta.$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$\mathcal{O} \supset E$$ be open with $$m(\mathcal{O} \setminus E) < \delta$$.
Then, we can restrict all of our choices above to balls contained in $$\mathcal{O}$$. Since $$(E \setminus \bigcup B_i) \cup \bigcup B_i = E \subset \mathcal{O},$$ we have

$$
\begin{aligned}
m(E \setminus \bigcup B_i) &\le m(\mathcal{O}) - m(\bigcup B_i) \\
&\le m(E) + \delta - (m(E) - \delta) \\
&= 2\delta.
\end{aligned}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof of Theorem 3.8.*

It is enough to show that $$F(a) = F(b)$$.

Let $$E = \{x \in (a,b) : F'(x) \text{ exists and is zero}\}$$. Then $$m(E) = b - a$$. Fix $$\epsilon > 0$$. By the absolute continuity of $$F$$, there exists $$\delta > 0$$ such that

$$
\sum_{k=1}^M \vert F(b_k) - F(a_k)\vert  < \epsilon
$$

whenever

$$
\sum_{k=1}^M (b_k - a_k) < \delta \text{ for disjoint intervals } (a_k, b_k).
$$

Now, we construct a Vitali covering of $$E$$ as follows:
Let $$x \in E$$ and $$\eta > 0$$. Since

$$
\lim_{h \to 0} \vert \frac{F(x+h) - F(x)}{h}\vert  = 0
$$

there exists an open interval $$(a_x, b_x) \subset [a,b]$$ such that $$x \in (a_x, b_x)$$, $$b_x - a_x < \eta$$, and

$$
\vert F(b_x) - F(a_x)\vert  \le \epsilon(b_x - a_x).
$$

The collection of these intervals forms a Vitali covering of $$E$$. By Lemma 3.9, there exists finitely many disjoint $$I_i = (a_i, b_i)$$, $$1 \le i \le N$$ such that

$$
\sum_{i=1}^N m(I_i) > m(E) - \delta = b - a - \delta.
$$

This implies that
$$[a,b] \setminus \bigcup_{i=1}^N I_i = \bigcup_{k=1}^M [a_k, b_k]$$
has measure $$m(\bigcup_{k=1}^M [a_k, b_k]) \le \delta$$, and hence

$$
\sum_{k=1}^M \vert F(b_k) - F(a_k)\vert  < \epsilon.
$$

Therefore,

$$
\begin{aligned}
\vert F(b) - F(a)\vert  &\le \sum_{i=1}^N \vert F(b_i) - F(a_i)\vert  + \sum_{k=1}^M \vert F(b_k) - F(a_k)\vert  \\
&\le \epsilon \sum_{i=1}^N (b_i - a_i) + \epsilon \\
&\le \epsilon(b - a) + \epsilon,
\end{aligned}
$$

which shows $$F(b) - F(a) = 0$$.

</div>

Following Theorem 3.11, answers our last remaining main question 2.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.11.**

Suppose $$F$$ is absolutely continuous on $$[a,b]$$. Then, $$F' \in L^1[a,b]$$ and

$$
F(x) - F(a) = \int_a^x F'(y) dy \quad \text{for all } x \in [a,b].
$$

Conversely, if $$f \in L^1[a,b]$$, then $$F(x) = \int_a^x f(y) dy$$ is absolutely continuous and $$F' = f$$ almost everywhere.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Since $$F$$ is the difference of two continuous increasing functions, Corollary 3.7 shows that $$F' \in L^1[a,b].$$

Define $$G(x) = \int_a^x F'(y) dy$$. Then, by the Lebesgue's differentiation theorem,

$$
G' = F' \text{ a.e.}
$$

Since $$G - F$$ is absolutely continuous, it follows from Theorem 3.8 that $$G - F$$ is constant.
Therefore, $$G(x) - F(x) = G(a) - F(a) \implies F(x) - F(a) = \int_a^x F'$$.

</div>

### 3.3.3 Differentiability of jump functions
<div class="real-analysis-statement" markdown="1">

**Lemma 3.12.**

A bounded increasing function $$F : [a,b] \to \mathbb{R}$$ has at most countably many discontinuities.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
If $$F$$ is discontinuous at $$x$$, then

$$
\text{there exists } r_x \in \mathbb{Q} \text{ such that } F(x^-) < r_x < F(x^+).
$$

Moreover, if $$F$$ is discontinuous at $$x < z$$, then
$$r_x < F(x^+) \le F(z^-) < r_z.$$

</div>

Let $$\{x_n\}$$ be the set of discontinuities of a bounded increasing function $$F$$.
Let
$$\alpha_n = F(x_n^+) - F(x_n^-).$$
Then $$F(x_n^+) = F(x_n^-) + \alpha_n$$ and $$F(x_n) = F(x_n^-) + \theta_n \alpha_n$$ for some $$\theta_n \in [0,1]$$.
Define

$$
j_n(x) = \begin{cases}
0 & \text{if } x < x_n \
\theta_n & \text{if } x = x_n \
1 & \text{if } x > x_n
\end{cases}
$$

and the jump function associated to $$F$$ by
$$J(x) \coloneq J_F(x) \coloneq \sum_{n=1}^\infty \alpha_n j_n(x).$$

<div class="real-analysis-statement" markdown="1">

**Lemma 3.13.**

If $$F$$ is bounded and increasing on $$[a,b]$$, then

<ol>

<li markdown="1">$$J$$ is discontinuous precisely at $$\{x_n\}$$ and has a jump at $$x_n$$ equal to that of $$F$$.
</li>
<li markdown="1">$$F - J$$ is increasing and continuous.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">If $$x \neq x_n$$ for all $$n$$, then $$J$$ is the uniform limit of functions continuous at $$x$$.
If $$x = x_N$$ for some $$N \in \mathbb{N}$$, then
$$\sum_{n \neq N} \alpha_n j_n$$ is continuous at $$x$$ and $$\alpha_N j_N$$ has a jump discontinuity at $$x_N$$ of size $$\alpha_N$$.
</li>
<li markdown="1">Clearly, $$F - J$$ is continuous. If $$x < y$$, then

$$
\begin{aligned}
J(y) - J(x) &\le \alpha_x (1 - \theta_x) + \sum_{x < x_n < y} \alpha_n + \alpha_y \theta_y \\
&\le F(y) - F(x).
\end{aligned}
$$

Note that $$\alpha_x, \alpha_y, \theta_x, \theta_y$$ correspond to the jump at $$x$$ and $$y$$. They vanish if $$F$$ is continuous at $$x$$ and $$y$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Since $$F = (F - J) + J$$, Theorem 3.4 follows from the following lemma.

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 3.14.**

$$J'$$ exists and vanishes almost everywhere.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$\epsilon > 0$$ and
$$E = \left\{ x : \limsup_{h \to 0} \frac{J(x+h) - J(x)}{h} > \epsilon \right\} \in \mathcal{M}.$$
It is enough to show that
$$\delta \coloneq m(E) = 0.$$

Let $$\eta > 0$$. Since $$\sum \alpha_n < \infty$$, there exists $$N$$ such that
$$\sum_{n > N} \alpha_n < \eta.$$
We write $$J_0 = \sum_{n > N} \alpha_n j_n$$, then
$$J_0(b) - J_0(a) < \eta.$$

Since $$J - J_0 = \sum_{n=1}^N \alpha_n j_n$$ is a finite sum, the set
$$E_0 = \left\{ x : \limsup_{h \to 0} \frac{J_0(x+h) - J_0(x)}{h} > \epsilon \right\}$$
differs from $$E$$ by at most a countable set $$\{x_1, \dots, x_N\}$$. Thus, $$m(E_0) = \delta$$.

We take a compact subset $$K$$ of $$E_0$$ with
$$m(K) \ge \delta / 2.$$
For each $$x \in K$$, we can find $$(a_x, b_x) \ni x$$ such that
$$J_0(b_x) - J_0(a_x) > \epsilon(b_x - a_x).$$
By compactness of $$K$$ and Vitali's covering argument, there exists disjoint $$I_j$$,

$$
I_j = (a_j, b_j), \quad j=1,\dots,M \text{ such that } \sum_{j=1}^M m(I_j) > \frac{m(K)}{3}.
$$

Now,

$$
\begin{aligned}
J_0(b) - J_0(a) &\ge \sum_{j=1}^M (J_0(b_j) - J_0(a_j))  \\
&> \epsilon \sum_{j=1}^M (b_j - a_j) \\
&> \frac{\epsilon}{3} m( K) \ge \frac{\epsilon}{6} \delta.
\end{aligned}
$$

This shows that $$\frac{\epsilon}{6} \delta < \eta$$. Since $$\eta > 0$$ was arbitrary, we conclude $$\delta = 0$$.

</div>

<!-- prettier-ignore-end -->

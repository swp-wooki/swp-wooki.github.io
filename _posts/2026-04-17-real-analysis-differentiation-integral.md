---
layout: post
title: "Real Analysis 8: Lebesgue Differentiation and the Hardy–Littlewood Maximal Function"
date: 2026-04-17 12:00:00 +0900
description: "Hardy–Littlewood 극대함수와 약형 추정, 르베그 미분정리를 정리한다."
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

**Observation for Main Question 1.**

From the definition of differentiation, we can observe:

$$
\begin{aligned}
\text{Main Question 1} \iff F'(x)
&:= \lim_{h \to 0} \frac{F(x+h) - F(x)}{h} \\
&= \lim_{h \to 0} \frac{1}{h} \int_x^{x+h} f(y) dy \\
&= \lim_{\overset{\vert I\vert  \to 0}{x \in I}} \frac{1}{\vert I\vert } \int_I f(y) dy \\
&\overset{?}{=} f
\end{aligned}
$$

where $$I = (x, x+h)$$ for some $$h > 0$$ and $$\vert I\vert $$ denotes the length of $$I$$.
Therefore, the main question 1 is equivalent to whether the last equality

$$
\lim_{\vert I\vert  \to 0} \frac{1}{\vert I\vert } \int_I f(y) dy = f
$$

holds (at least a.e.) for $$f$$. Note that this expression

$$
\frac{1}{\vert I\vert } \int_I f(y) dy
$$

is the average value of $$f$$ over $$I$$, and we expect that its limit tend to $$f(x)$$ as $$\vert I\vert \to 0$$.

Now let us extend this observation to higher dimension. For $$f \in L^1(\mathbb{R}^d)$$,

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \frac{1}{m(B)} \int_B f(y) dy \; \overset{?}{=} \; f(x) \quad \text{a.e. } x
$$

where $$B \subset \mathbb{R}^d$$ is a ball with radius $$r$$. Above question is so called **averaging problem**. Furthermore, we may define average integral of $$f$$ over $$B$$ as

$$
\mathop{\rlap{-}\int}_{B} f(y)dy \coloneq \frac{1}{m(B)} \int_B f(y) dy
$$

Hence, we can rewrite the above question as follows:

</div>

<div class="real-analysis-statement" markdown="1">

**Main Question 1(Revised).**

If $$f \in L^1(\mathbb{R}^d)$$, is it true that

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \frac{1}{m(B)} \int_B f(y) dy \; \overset{?}{=} \; f(x) \quad \text{a.e. } x
$$

that is, the average value of $$f$$ over a ball would tend to $$f(x)$$ as $$m(B) \to 0$$. Equivalently,

$$
\text{Is that true for } \quad \mathop{\rlap{-}\int}_{B} f(y) dy \to f(x) \quad \text{a.e. } x \: ?
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

If $$f$$ is continuous at $$x$$, then for all $$\epsilon > 0$$,

$$
\exists \: \delta > 0 \text{ s.t. } \vert f(x) - f(y)\vert  < \epsilon \text{ whenever } \vert x - y\vert  < \delta.
$$

Note that

$$
\begin{aligned}
\mathop{\rlap{-}\int}_{B} f(x) dy
&= \frac{1}{m(B)} \int_B f(x) dy \\
&= \frac{1}{m(B)} f(x) \int_B dy \\
&= \frac{1}{m(B)} f(x) m(B) = f(x).
\end{aligned}
$$

Now we claim that
if f is continuous, then $$\lim_{m(B) \to 0} \mathop{\rlap{-}\int}_B f(y) dy = f(x)$$.
That is,

$$
\mathop{\rlap{-}\int}_B f(y) dy \to f(x) \; \text { a.e. } x \quad \text{as } m(B) \to 0.
$$

Indeed,

$$
\begin{aligned}
\left\vert  f(x) - \mathop{\rlap{-}\int}_B f(y) dy \right\vert
&= \left\vert  \mathop{\rlap{-}\int}_B f(x)dy - \mathop{\rlap{-}\int}_B f(y)dy \right\vert  \\
&\le \mathop{\rlap{-}\int}_B \vert f(x) - f(y)\vert  dy < \epsilon
\end{aligned}
$$

whenever $$x \in B \subset B(x, \delta)$$. Take $$m(B) \to 0$$, we get the desired result.

</div>

### Hardy-Littlewood maximal function
<div class="real-analysis-statement" markdown="1">

**Hardy-Littlewood maximal function.**

For $$f \in L^1(\mathbb{R}^d)$$, its **maximal function**
$$f^* : \mathbb{R}^d \to \overline{\mathbb{R}}$$ is defined by

$$
f^*(x) = \sup_{x \in B} \mathop{\rlap{-}\int}_B \vert f(y)\vert  dy
$$

where the supremum is taken over all balls $$B$$ containing $$x$$.

</div>

The main properties of the maximal function are summarized in the following theorem.
<div class="real-analysis-statement" markdown="1">

**Theorem 1.1.**

Let $$f \in L^1(\mathbb{R}^d)$$. Then

<ol>

<li markdown="1">$$f^*$$ is measurable
</li>
<li markdown="1">$$f^* < \infty$$ for a.e. $$x$$
</li>
<li markdown="1">$$f^*$$ satisfies

$$
m(\{x \in \mathbb{R}^d : f^*(x) > \alpha\}) \le \frac{3^d}{\alpha} \vert \vert f\vert \vert _{L^1(\mathbb{R}^d)} \quad \forall \; \alpha > 0
$$



</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">(**Tchebychev inequality**) In the previous chapter, we have proved that

$$
\text{for all } g \in L^1(\mathbb{R}^d) \text{ and } \alpha > 0, \quad m(\{ \vert g\vert  > \alpha \}) \le \frac{1}{\alpha} \vert \vert g\vert \vert _{L^1(\mathbb{R}^d)} \quad \text{(weak-type)}
$$

</li>
<li markdown="1">We will see in Theorem 1.3 that

$$
f^{*}(x) \ge \vert f(x)\vert  \quad \text{for a.e. } x.
$$

</li>
<li markdown="1">Nevertheless $$f^* \notin L^1$$ in general. (See Exercise 4 \& 5).

</li>
</ol>

</div>

To prove Theorem 1.1, we need the following lemma.
<div class="real-analysis-statement" markdown="1">

**Lemma 1.2 (Vitali covering lemma).**

Let $$\mathcal{B} = \{B_l\}_{l=1}^N$$ be a collection of open balls with $$B_l = B(x_l, r_l)$$ in $$\mathbb{R}^d$$. Then there exists a disjoint subcollection $$\{B_{i_1}, \dots, B_{i_k}\}$$ of $$\mathcal{B}$$ s.t.

$$
m\left( \bigcup_{l=1}^N B_l \right) \le 3^d \sum_{j=1}^k m(B_{i_j})
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">We pick a ball with maximal radius $$B_{i_{1}}$$. Then we delete all balls in $$\mathcal{B}$$ such that intersecting with $$B_{i_1}$$, including $$B_{i_1}$$ itself. Now denote $$\tilde{B}_{i_1}$$ such that

$$
\tilde{B}_{i_{1}} = B(x_1, 3r_{i_1}).
$$

Thus, every deleted balls are contained in $$\tilde{B}_{i_1}$$.
</li>
<li markdown="1">Since $$\mathcal{B}$$ is finite, after at most $$N$$ steps, we find a collection of disjoint balls

$$
B_{i_1}, \dots, B_{i_k}
$$

Let $$\tilde{B}_{i_j} = B(x_{j}, 3r_{i_j})$$ for $$j = 1, \dots, k$$. Then, for each $$B \in \mathcal{B}$$, there exists $$B_{i_j}$$ such that

$$
B \cap B_{i_j} \neq \emptyset \implies B \subset \tilde{B}_{i_j}.
$$

</li>
<li markdown="1">Therefore,

$$
\bigcup_{l=1}^N B_l \subset \bigcup_{j=1}^k \tilde{B}_{i_j} \implies m\left( \bigcup_{l=1}^N B_l \right) \le m\left( \bigcup_{j=1}^k \tilde{B}_{i_j} \right) \le 3^d \sum_{j=1}^k m(B_{i_j})
$$

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof of Theorem 1.1.*

<ol>

<li markdown="1">Observe that $$E_\alpha = \{x : f^*(x) > \alpha\}$$ is open. Indeed, if $$\overline{x} \in E_\alpha$$, then

$$
f^*(\overline{x}) = \sup_{\overline{x} \in B} \mathop{\rlap{-}\int}_B \vert f(y)\vert  dy > \alpha
$$

holds, we can pick such a ball $$B \subset E_\alpha$$ so that

$$
\overline{x} \in B \quad \text{ and } \quad \mathop{\rlap{-}\int}_B \vert f(y)\vert  dy > \alpha
$$

so any point $$x$$ close enough to $$\overline{x}$$ also belongs to $$B$$. Hence, $$E_\alpha$$ is open.
</li>
<li markdown="1">This follows from (iii) : Indeed, since

$$
\{f^* = \infty\} \subset \{f^* > \alpha\}
$$

we have

$$
m(\{f^* = \infty\}) \le m(\{f^* > \alpha\}) \le \frac{3^d}{\alpha} \vert \vert f\vert \vert _{L^1}.
$$

Letting $$\alpha \to \infty$$ shows that $$m(\{f^* = \infty\}) = 0$$.
</li>
<li markdown="1">For each $$x \in E_\alpha = \{f^* > \alpha\}$$, there exists a ball $$B_x \ni x$$ such that

$$
\mathop{\rlap{-}\int}_{B_x} \vert f\vert  > \alpha, \quad \text{i.e. } m(B_x) < \frac{1}{\alpha} \int_{B_x} \vert f\vert .
$$

Fix any compact $$K \subset E_\alpha$$. Since

$$
K \subset \bigcup_{x \in E_\alpha} B_x
$$

there exists a finite subcover of $$\cup B_x$$, say

$$
K \subset \bigcup_{l=1}^N B_l
$$

By the VCL, there exists a subcollection $$B_{i_1}, \dots, B_{i_k}$$ of disjoint balls such that

$$
m\left(\bigcup_{l=1}^N B_l\right) \le 3^d \sum_{j=1}^k m(B_{i_j}).
$$

Therefore,

$$
\begin{aligned}
m(K) &\le m\left(\bigcup_{l=1}^N B_l\right) \\
&\le 3^d \sum_{j=1}^k m(B_{i_j}) \\
&\le \frac{3^d}{\alpha} \sum_{j=1}^k \int_{B_{i_j}} \vert f\vert  = \frac{3^d}{\alpha} \int_{\bigcup_{j=1}^k B_{i_j}} \vert f\vert  \le \frac{3^d}{\alpha} \int_{\mathbb{R}^d} \vert f\vert
\end{aligned}
$$

for any compact $$K \subset E_\alpha$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3 (Lebesgue differentiation theorem).**

If $$f \in L^1(\mathbb{R}^d)$$, then

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B f(y) dy = f(x) \quad \text{for a.e. } x.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
ETS : $$m(E_\alpha) = 0$$ for all $$\alpha > 0$$
<div class="real-analysis-footnote" markdown="1">

Note: Since if $$m(E_\alpha) = 0 \; \forall \alpha > 0 \implies m(E) = 0$$ where $$E = \bigcup_{n=1}^\infty E_{\frac{1}{n}}$$. Then,

$$
x \notin E \iff x \in E^c = \left(\bigcup_{n=1}^\infty E_{\frac{1}{n}}\right)^c = \bigcap_{n=1}^\infty E_{\frac{1}{n}}^c
$$

this implies that $$x \in E_{\frac{1}{n}}^c$$ for all $$n \in \mathbb{N}$$, where

$$
E_{\frac{1}{n}}^c = \left\{x : \limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B f(y) dy - f(x) \right\vert  \le \frac{2}{n} \right\}
$$

therefore, if $$x \notin E$$, then desired limit holds. Since $$m(E) = 0$$, we conclude that the limit holds for a.e. $$x$$.

</div>
, where

$$
E_\alpha := \left\{x : \underbrace{\limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B f(y) dy - f(x) \right\vert }_{(\ast)} > 2\alpha \right\}
$$

Fix $$\alpha > 0$$ and let $$\epsilon > 0$$. Then

$$
\exists \; g \in C_c^0(\mathbb{R}^d) \text{ such that } \vert \vert f - g\vert \vert _{L^1} < \epsilon  \qquad (\ast)
$$


<div class="real-analysis-footnote" markdown="1">

Note: Theorem 2.4 in chapter 2 states that $$C_c^0(\mathbb{R}^d)$$ is dense in $$L^1(\mathbb{R}^d)$$. Recall that the definition of density on $$L^1$$ space is as follows:
$$\mathcal{F}$$ is dense in $$L^1$$ if for all $$f \in L^1$$ and $$\epsilon > 0$$, there exists $$g \in \mathcal{F}$$ such that $$\vert \vert f - g\vert \vert _{L^1} < \epsilon$$.

</div>

In previous remark, we know that for such continuous function $$g$$, the following holds:

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B g(y) dy = g(x).
$$

Thus bu using simple triangle inequality, we find

$$
\begin{aligned}
(\ast) = &\limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B (f(y) - g(y)) dy + \mathop{\rlap{-}\int}_B g(y) dy - g(x) + g(x) - f(x) \right\vert  \\
&\le \limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B (f(y) - g(y)) dy \right\vert  + \limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B g(y) dy - g(x) \right\vert  + \vert g(x) - f(x)\vert  \\
&\le (f - g)^*(x) + \vert f(x) - g(x)\vert
\end{aligned}
$$

since

$$
\limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B (f(y) - g(y)) dy \right\vert  \le (f - g)^*(x) \quad \text{and} \quad \limsup_{\overset{m(B) \to 0}{x \in B}} \left\vert  \mathop{\rlap{-}\int}_B g(y) dy - g(x) \right\vert  = 0,
$$

where the first inequality follows from the definition of maximal function, and the second equality follows from the continuity of $$g$$. Note that

$$
2\alpha < (\ast) \le (f - g)^*(x) + \vert f(x) - g(x)\vert  \implies 2\alpha < (f - g)^*(x) + \vert f(x) - g(x)\vert
$$

since both are positive, at least one of them is greater than $$\alpha$$. <span class="real-analysis-footnote" markdown="span">Note: If $$a, b > 0$$ and $$a + b > 2\alpha$$, then either $$a > \alpha$$ or $$b > \alpha$$. If not, then $$a \le \alpha$$ and $$b \le \alpha$$, thus $$a + b \le 2\alpha$$, which is a contradiction.</span>

Let

$$
F_\alpha = \{x : (f - g)^*(x) > \alpha\} \quad \text{and} \quad G_\alpha = \{x : \vert f(x) - g(x)\vert  > \alpha\}.
$$

Then, using the above observation, we find

$$
x \in F_\alpha \text{ or } x \in G_\alpha \implies E_\alpha \subset F_\alpha \cup G_\alpha
$$

therfore,

$$
E_\alpha \subset F_\alpha \cup G_\alpha \implies m(E_\alpha) \le m(F_\alpha) + m(G_\alpha).
$$

By Tchebyshev's inequality, we have

$$
m(G_\alpha) \le \frac{1}{\alpha} \vert \vert f - g\vert \vert _{L^1} < \frac{1}{\alpha} \epsilon
$$

and by the weak type estimate for the maximal function, we have

$$
m(F_\alpha) \le \frac{A}{\alpha} \vert \vert f - g\vert \vert _{L^1} < \frac{A}{\alpha} \epsilon
$$

Thus,

$$
m(E_\alpha) < \frac{1 + A}{\alpha} \epsilon
$$

since $$\epsilon$$ was arbitrary, we conclude that $$m(E_\alpha) = 0$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">Theorem 1.3 (which applied to $$\vert f\vert $$) implies that

$$
f^*(x) \ge \vert f(x)\vert  \quad \text{for a.e. } x.
$$

indeed,

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B \vert f(y)\vert  dy = \vert f(x)\vert  \quad \text{for a.e. } x.
$$

then

$$
f^*(x) = \sup_{x \in B} \mathop{\rlap{-}\int}_B \vert f(y)\vert  dy \ge \lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B \vert f(y)\vert  dy = \vert f(x)\vert  \quad \text{for a.e. } x.
$$

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
We say that $$f$$ is **locally integrable** if for every ball $$B$$ the function $$f(x)\chi_B(x)$$ is integrable. We denote the set of locally integrable functions by
$$L_{loc}^1(\mathbb{R}^d) = \{f : f \in L^1(K) \text{ for any compact } K \subset \mathbb{R}^d\}.$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.4.**

Theorem 1.3 is a local property: it holds for

$$
f \in L_{loc}^1(\mathbb{R}^d) \supset L^1(\mathbb{R}^d)
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $$E \in \mathcal{M}$$. We say that $$x \in \mathbb{R}^d$$ is a **point of (Lebesgue) density** of $$E$$ if

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \frac{m(B \cap E)}{m(B)} = 1.
$$

</div>

This definition of a point of density says that small balls around x are almost entirely covered by $$E$$. More precisely, for every $$\alpha < 1$$ close to 1, and every ball of sufficiently small radius containing $$x$$, we have

$$
m(B \cap E) > \alpha m(B).
$$

<div class="real-analysis-statement" markdown="1">

**Corollary 1.5.**

Let $$E \in \mathcal{M}$$. Then

<ol>

<li markdown="1">Almost every point $$x \in E$$ is a point of density of $$E$$.
</li>
<li markdown="1">Almost every point $$x \notin E$$ is not a point of density of $$E$$.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Put $$f = \chi_E$$. Then,

$$
\begin{aligned}
\lim_{\overset{m(B) \to 0}{x \in B}} \frac{1}{m(B)} \int_B \chi_E(y) dy
&= \lim_{\overset{m(B) \to 0}{x \in B}} \frac{1}{m(B)} \left( \int_{B \cap E} \chi_{E}dy + \int_{B \setminus E} \chi_{E}dy \right) \\
&= \lim_{\overset{m(B) \to 0}{x \in B}} \frac{1}{m(B)} \left( \int_{B \cap E} 1 dy + \int_{B \setminus E} 0 dy \right) \\
&= \lim_{\overset{m(B) \to 0}{x \in B}} \frac{m(B \cap E)}{m(B)} = \chi_E(x) \quad \text{for a.e. } x.
\end{aligned}
$$

Therefore,

$$
\chi_E(x) = \lim_{\overset{m(B) \to 0}{x \in B}} \frac{m(B \cap E)}{m(B)} = \begin{cases}
1 & \text{if } x \in E \
0 & \text{if } x \notin E
\end{cases}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $$f \in L_{loc}^1(\mathbb{R}^d)$$. We say that $$\overline{x} \in \mathbb{R}^d$$ is the **Lebesgue point** of $$f$$, if

<ol>

<li markdown="1">$$f(\overline{x}) < \infty$$ and
</li>
<li markdown="1">following holds:

$$
\lim_{\overset{m(B) \to 0}{\overline{x} \in B}} \mathop{\rlap{-}\int}_B \vert f(y) - f(\overline{x})\vert  dy = 0
$$

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">Above definition depends on a choice of representation $$f$$.
</li>
<li markdown="1">Note that $$f \in L_{loc}^1 \implies \lim \mathop{\rlap{-}\int}_B f = f(x)$$ a.e.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.6.**

If $$f \in L_{loc}^1(\mathbb{R}^d)$$, then almost every point is a Lebesgue point of $$f$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We apply Theorem 1.4 to $$\vert f(x) - r\vert \in L^1_{loc}(\mathbb{R}^d)$$: Since $$\vert f(x) - r\vert \in L^1_{loc}$$ for each $$r \in \mathbb{Q}$$, we have

$$
\lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B \vert f(y) - r\vert  dy = \vert f(x) - r\vert  \quad \text{for a.e. } x.
$$

Now let denote $$E_r$$ which contains all points $$x$$ such that the above limit does not hold. That is,

$$
m(E_r) = 0 \quad \text{ and } \quad \lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B \vert f(y) - r\vert  dy = \vert f(x) - r\vert  \quad \forall x \notin E_r.
$$

Let

$$
E = \bigcup_{r \in \mathbb{Q}} E_r
$$

then $$m(E) = 0$$. Therefore, our goal is:

$$
\text{WTS : If } x \notin E, \text{ then } x \text{ is a Lebesgue point. \textit{i.e. }} \lim_{\overset{m(B) \to 0}{x \in B}} \mathop{\rlap{-}\int}_B \vert f(y) - f(x)\vert  dy = 0.
$$

Suppose that $$\overline{x} \notin E$$ and $$f(\overline{x})$$ is finite.<span class="real-analysis-footnote" markdown="span">Note: This additional assumption can be justified that if $$f$$ is locally integrable, then $$f$$ is finite a.e., which have proved in Proposition 1.6 in Chapter 2.</span> Given $$\epsilon > 0$$, since $$\mathbb{Q}$$ is dense in $$\mathbb{R}$$,

$$
\exists \; r \in \mathbb{Q} \; \; \text{ such that } \; \vert f(\overline{x}) - r\vert  < \epsilon
$$

Thus,

$$
\begin{aligned}
\limsup \mathop{\rlap{-}\int}_B \vert f(y) - f(\overline{x})\vert  dy &\le \limsup \mathop{\rlap{-}\int}_B \vert f(y) - r\vert  dy + \vert f(\overline{x}) - r\vert  \\
&= 2\vert f(\overline{x}) - r\vert  < 2\epsilon.
\end{aligned}
$$

Since $$0 \le \liminf \mathop{\rlap{-}\int}_B \vert f(y) - f(\overline{x})\vert dy$$, and $$\epsilon$$ was arbitrary, we conclude that

$$
\lim_{\overset{m(B) \to 0}{\overline{x} \in B}} \mathop{\rlap{-}\int}_B \vert f(y) - f(\overline{x})\vert  dy = 0.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

One can use cubes instead of balls, but **rectangles do not work**. (Problem 8)

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
A collection $$\{U_\alpha\}$$ **shrinks regularly** to $$\overline{x}$$ if there exists $$c > 0$$ such that for each $$U_\alpha$$, we can find a ball $$B$$ with

$$
\overline{x} \in B, \quad U_\alpha \subset B, \quad \text{ and } \quad m(U_\alpha) \ge c m(B).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.7.**

Let $$f \in L_{loc}^1(\mathbb{R}^d)$$. If $$\{U_\alpha\}$$ shrinks regularly to $$\overline{x}$$, then

$$
\lim_{\substack{m(U_\alpha) \to 0 \ \overline{x} \in U_\alpha}} \mathop{\rlap{-}\int}_{U_\alpha} f = f(\overline{x})
$$

for every Lebesgue point of $$f$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$\overline{x}$$ be a Lebesgue point of $$f$$. Since $$\{U_\alpha\}$$ shrinks regularly to $$\overline{x}$$, the following holds for each $$\alpha$$:

$$
0 \le \frac{1}{m(U_\alpha)} \le \frac{1}{c m(B)} \quad \text{and} \quad 0 \le \int_{U_\alpha} \vert f(y) - f(\overline{x})\vert  dy \le \int_B \vert f(y) - f(\overline{x})\vert  dy.
$$

Since both inequalities are positive, we can multiply them to conclude that

$$
\frac{1}{m(U_\alpha)} \int_{U_\alpha} \vert f(y) - f(\overline{x})\vert  dy \le \frac{1}{c m(B)} \int_B \vert f(y) - f(\overline{x})\vert  dy. \qquad (\ast)
$$

Recall that $$\overline{x}$$ is a Lebesgue point of $$f$$, thus the right hand side of $$(\ast)$$ goes to 0 as $$m(B) \to 0$$. Hence, we can finish the proof as follows:

$$
\lim_{\substack{m(U_\alpha) \to 0 \ \overline{x} \in U_\alpha}} \mathop{\rlap{-}\int}_{U_\alpha} \vert f(y) - f(\overline{x})\vert  dy = 0.
$$

</div>

<!-- prettier-ignore-end -->

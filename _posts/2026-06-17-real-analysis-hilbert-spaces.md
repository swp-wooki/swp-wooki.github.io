---
layout: post
title: "Real Analysis 13: Hilbert Spaces—Orthogonality and Unitary Mappings"
date: 2026-06-17 12:00:00 +0900
description: "Hilbert 공간의 기하, 직교성, 정규직교계, unitary 사상과 pre-Hilbert 공간을 다룬다."
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

**Hilbert space.**

An inner product space is called a **Hilbert space** if it is complete and separable.
<div class="real-analysis-footnote" markdown="1">Note: Some textbook defines a Hilbert space *without* the separability condition. Indeed, for advanced and modern mathemathics, this is more usual but quiet difficult to prove its properties. In this course, we will add the separability condition. See the Problem 2 for a non-separable example.</div>

</div>

<div class="real-analysis-statement" markdown="1">

**Example 1.**

Let $$E \in \mathcal{M}$$ be with $$m(E) > 0$$. Define $$L^2(E)$$ by the space of square integrable functions $$f : E \to \mathbb{C}$$ such that

$$
\vert \vert f\vert \vert _{L^2(E)} \coloneq \left(\int_E \vert f\vert ^2\right)^{1/2} < \infty.
$$

Being equipped with the inner product

$$
(f, g) \coloneq \int_E f \overline{g}
$$

$$L^2(E)$$ becomes a Hilbert space.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.**

$$\mathbb{R}^N$$ and $$\mathbb{C}^N$$ with the usual inner product

$$
(a, b) \coloneq \sum_{k=1}^N a_k \overline{b}_k
$$

where $$a = (a_1, \dots, a_N)$$ and $$b = (b_1, \dots, b_N)$$ are Hilbert space.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 3.**

The space

$$
l^2(\mathbb{Z}) \coloneq \left\{ (a_n)_{n \in \mathbb{Z}} : a_n \in \mathbb{C}, \sum_{n \in \mathbb{Z}} \vert a_n\vert ^2 < \infty \right\}
$$

with the inner product

$$
(a, b) \coloneq \sum_{n \in \mathbb{Z}} a_n \overline{b}_n
$$

is a Hilbert space. (See Exercise 4).

Similarly, $$l^2(\mathbb{N})$$ is also a Hilbert space which is given by

$$
l^2(\mathbb{N}) \coloneq \left\{ (a_n)_{n \in \mathbb{N}} : a_n \in \mathbb{C}, \sum_{n \in \mathbb{N}} \vert a_n\vert ^2 < \infty \right\}
$$

with the inner product

$$
(a, b) \coloneq \sum_{n \in \mathbb{N}} a_n \overline{b}_n.
$$

</div>

### 4.2.1 Orthogonality
<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $$H$$ be a Hilbert space.

<ol>

<li markdown="1">$$f, g \in H$$ are **orthogonal** or **perpendicular** and write $$f \perp g$$ if $$(f, g) = 0$$.
</li>
<li markdown="1">At most countable subset $$\{e_k\} \subset H$$ is **orthonormal** if $$(e_i, e_j) = \delta_{ij}$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.1.**

If $$f \perp g$$, then $$\vert \vert f + g\vert \vert ^2 = \vert \vert f\vert \vert ^2 + \vert \vert g\vert \vert ^2$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
$$\vert \vert f + g\vert \vert ^2 = \vert \vert f\vert \vert ^2 + (f, g) + (g, f) + \vert \vert g\vert \vert ^2 = \vert \vert f\vert \vert ^2 + \vert \vert g\vert \vert ^2$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.2.**

If $$\{e_k\}_{k=1}^\infty$$ is orthonormal and $$f = \sum a_k e_k$$ is a finite sum, then

$$
\vert \vert f\vert \vert ^2 = \sum \vert a_k\vert ^2.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
An orthonormal set $$\{e_k\}$$ is called an **orthonormal basis** for $$H$$, if
$$\text{span}\{e_k\}$$ is dense in $$H$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.3.**

Let $$\{e_k\}$$ be orthonormal. The followings are equivalent:

<ol>

<li markdown="1">$$\{e_k\}$$ is an orthonormal basis for $$H$$.
</li>
<li markdown="1">If $$f \in H$$ and $$(f, e_j) = 0$$ for all $$j$$, then $$f = 0$$.
</li>
<li markdown="1">If $$f \in H$$ and $$S_N(f) \coloneq \sum_{k=1}^N a_k e_k$$ where $$a_k = (f, e_k)$$, then $$\lim_{N \to \infty} S_N(f) = f$$.
</li>
<li markdown="1">(Parseval's identity). If $$a_k = (f, e_k)$$, then $$\vert \vert f\vert \vert ^2 = \sum_{k=1}^\infty \vert a_k\vert ^2$$.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
(i) $$\implies$$ (ii). <br>
There exists $$\{g_n\} \subset \text{span}\{e_k\}$$ such that

$$
\vert \vert f - g_n\vert \vert  \to 0 \text{ as } n \to \infty
$$

Since $$(f, e_j) = 0$$ for all $$j$$, we have

$$
(f, g_n) = 0 \quad \text{for all } n.
$$

By Cauchy-Schwarz inequality,

$$
\vert \vert f\vert \vert ^2 = (f, f) = (f, f - g_n) \le \vert \vert f\vert \vert  \vert \vert f - g_n\vert \vert  \to 0 \quad \text{as } n \to \infty.
$$

Thus, $$f = 0$$. <br>
(ii) $$\implies$$ (iii).

<ol>

<li markdown="1">We have

$$
\begin{aligned}
(f - S_N(f), S_N(f))
&= (f, S_N(f)) - \vert \vert S_N(f)\vert \vert ^2 \\
&= \sum_{k=1}^N a_k(f, e_k) - \sum_{k=1}^N \vert a_k\vert ^2 = 0.
\end{aligned}
$$

Thus,

$$
\begin{aligned}
\vert \vert f\vert \vert ^2
&= \vert \vert f - S_N(f)\vert \vert ^2 + \vert \vert S_N(f)\vert \vert ^2 \\
&\ge \sum_{k=1}^N \vert a_k\vert ^2 \qquad (\because Bessel's inequality)
\end{aligned}
$$

since $$\vert \vert f - S_N(f)\vert \vert ^2 \ge 0$$ and $$\vert \vert S_N(f)\vert \vert ^2 = \sum_{k=1}^N \vert a_k\vert ^2$$. This implies that $$\sum_{k=1}^\infty \vert a_k\vert ^2$$ converges. Since

$$
\vert \vert S_N(f) - S_M(f)\vert \vert ^2 = \sum_{k=M+1}^N \vert a_k\vert ^2
$$

whenever $$N > M$$, $$\{S_N(f)\}$$ is Cauchy in $$H$$, and hence $$S_N(f) \to g$$ for some $$g \in H$$.
</li>
<li markdown="1">For a fixed $$j$$, we have

$$
(f - S_N(f), e_j) = a_j - a_j = 0
$$

for $$N \ge j$$. Since $$S_N(f) \to g$$, we can conclude

$$
(f - g, e_j) = 0 \quad \text{for all } j.
$$

By (ii), $$f = g = \sum_{k=1}^\infty a_k e_k$$.

</li>
</ol>

(iii) $$\implies$$ (iv). <br>
Note that

$$
\begin{aligned}
\vert \vert f\vert \vert ^2
&= \vert \vert f - S_N(f)\vert \vert ^2 + \vert \vert S_N(f)\vert \vert ^2 \\
&= \vert \vert f - S_N(f)\vert \vert ^2 + \sum_{k=1}^N \vert a_k\vert ^2. \qquad (\ast)
\end{aligned}
$$

By taking $$N \to \infty$$ in $$(\ast)$$, we obtain $$\vert \vert f\vert \vert ^2 = \sum_{k=1}^\infty \vert a_k\vert ^2.$$

(iv) $$\implies$$ (i). <br>
Again from $$(\ast)$$,

$$
\vert \vert f - S_N(f)\vert \vert  \to 0 \text{ as } N \to \infty,
$$

i.e. $$\text{span}\{e_k\}$$ is dense in $$H$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Linear independence.**

A countable set $$\{e_k\}$$ is **linearly independent** if all finite subsets are linearly independent.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.4.**

Any Hilbert space $$H$$ has an orthonormal basis.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Since $$H$$ is separable, there exists a countable collection of $$\mathcal{F} = \{f_k\}$$ in $$H$$ such that

$$
\text{span}\{\mathcal{F}_k\} \text{ is dense in } H.
$$

We may assume $$\{f_k\}$$ is linearly independent.

<ol>

<li markdown="1">If $$\mathcal{F}$$ is finite, then the Gram-Schmidt process yields an orthonormal basis. In this case, $$H$$ is said to be **finite-dimensional**. Otherwise, it is **infinite-dimensional**.
</li>
<li markdown="1">If $$\mathcal{F}$$ is infinite, we prove by induction that there exists an orthonormal set $$\{e_k\}$$ such that

$$
\text{span}\{e_1, \dots, e_n\} = \text{span}\{f_1, \dots, f_n\} \qquad (\ast\ast)
$$

for all $$n \in \mathbb{N}$$. We first take

$$
e_1 = \frac{f_1}{\vert \vert f_1\vert \vert }
$$

Next, assume that we have found $$e_1, \dots, e_k$$ such that $$(\ast\ast)$$ holds for $$n = k$$. Then,

$$
e_{k+1}' = f_{k+1} - \sum_{j=1}^k a_j e_j
$$

with $$a_j = (f_{k+1}, e_j)$$ is orthogonal to $$\{e_1, \dots, e_k\}$$.
Let

$$
e_{k+1} = \frac{e_{k+1}'}{\vert \vert e_{k+1}'\vert \vert }
$$

Then, $$\{e_1, \dots, e_{k+1}\}$$ is orthonormal and $$(\ast\ast)$$ holds for $$n = k+1$$.

</li>
</ol>

</div>

### 4.2.2 Unitary mappings
<div class="real-analysis-statement" markdown="1">

**Definition.**
A mapping $$U : H \to H'$$ is **unitary** if

<ol>

<li markdown="1">$$U$$ is linear, that is,

$$
U(\alpha f + \beta g) = \alpha U(f) + \beta U(g) \text{ for all } \alpha, \beta \in \mathbb{C} \text{ and } f, g \in H.
$$

</li>
<li markdown="1">$$U$$ is bijection.
</li>
<li markdown="1">$$\vert \vert Uf\vert \vert _{H'} = \vert \vert f\vert \vert _H$$ for all $$f \in H$$.

</li>
</ol>

If such a map exists, we say that $$H$$ and $$H'$$ are **unitary equivalent** or **unitary isomorphic**.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

If $$U$$ is unitary, then

<ol>

<li markdown="1">$$U^{-1}$$ is also unitary.
</li>
<li markdown="1">$$(Uf, Ug)_{H'} = (f, g)_H$$ for all $$f, g \in H$$. Indeed, we observe that

$$
(F, G) = \frac{1}{4} \left[\vert \vert F + G\vert \vert ^2 - \vert \vert F - G\vert \vert ^2 + i\left(\vert \vert  \frac{F}{i} + G \vert \vert ^2 - \vert \vert  \frac{F}{i} - G \vert \vert ^2\right)\right].
$$

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 2.5.**

Any two infinite dimensional Hilbert spaces are unitary equivalent.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$\{e_1, e_2, \dots\} \subset H$$ and $$\{e_1', e_2', \dots\} \subset H'$$ be orthonormal basis respectively. We define

$$
U : H \to H'
$$

as follows: if

$$
f = \sum_{k=1}^\infty a_k e_k \quad \text{ then } \quad U(f) = g \text{ where } g \coloneq \sum_{k=1}^\infty a_k e_k'.
$$

Clearly, $$U$$ is linear and bijection. Moreover, by Parseval's identity,

$$
\vert \vert Uf\vert \vert _{H'}^2 = \vert \vert g\vert \vert _{H'}^2 = \sum_{k=1}^\infty \vert a_k\vert ^2 = \vert \vert f\vert \vert _H^2.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 2.6.**

$$H$$ and $$H'$$ are unitary equivalent if and only if they have the same dimension.

</div>

<div class="real-analysis-statement" markdown="1">

**Example.**

<ol>

<li markdown="1">Finite dimension $$H \approx \mathbb{C}^d$$ or $$\mathbb{R}^d$$
</li>
<li markdown="1">Infinite dimension $$H \approx l^2(\mathbb{N})$$ or $$l^2(\mathbb{Z})$$.

</li>
</ol>

</div>

### 4.2.3 Pre-Hilbert spaces
<div class="real-analysis-statement" markdown="1">

**Definition.**
A separable inner product space is called a **Pre-Hilbert space**.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">$$H$$ is called the **completion** of pre-Hilbert space $$H_0$$.
</li>
<li markdown="1">It is unique up to isomorphism. (See Exercise 14).

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.7.**

Let $$H_0$$ be a pre-Hilbert space with $$(\cdot, \cdot)_0$$. Then there exists a Hilbert space $$H$$ with $$(\cdot, \cdot)_H$$ such that

<ol>

<li markdown="1">$$H_0 \subset H$$.
</li>
<li markdown="1">$$(f, g)_0 = (f, g)_H$$ for all $$f, g \in H_0$$.
</li>
<li markdown="1">$$H_0$$ is dense in $$H$$.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Sketch of proof.*

Consider the collection of Cauchy sequence

$$
\{f_n\} \subset H_0.
$$

Define an equivalence relation

$$
\{f_n\} \sim \{f_n'\} \iff f_n - f_n' \to 0 \text{ as } n \to \infty.
$$

Let $$H$$ be the collection of equivalent classes and define

$$
(f, g) = \lim_{n \to \infty} (f_n, g_n)_0
$$

where $$\{f_n\}$$ and $$\{g_n\}$$ are Cauchy sequence representing $$f, g \in H$$, respectively.<div class="real-analysis-footnote" markdown="1">Note: Please try to check well-definedness of the inner product!</div>

<ol>

<li markdown="1">$$H_0 \subset H$$. <br>
If $$f \in H_0$$, the constant sequence $$\{f\}$$ is the corresponding element in $$H$$.
</li>
<li markdown="1">$$(f, g) = (f, g)_0$$ for all $$f, g \in H_0$$ $$\to$$ Clear!
</li>
<li markdown="1">$$H_0$$ is dense in $$H$$. (Exercise!)

</li>
</ol>

To prove $$H$$ is complete<div class="real-analysis-footnote" markdown="1">Note: Separability of $$H$$ is left as an exercise!</div>, let
$$\{F^k\}$$ be Cauchy in $$H$$.
Each $$F^k$$ is represented by a Cauchy sequence

$$
F^k = \{f_n^k\}_n \subset H_0
$$

Define $$F \in H$$ by the sequence $$\{f_n\}$$ with
$$f_n = f_{N(n)}^n$$ where $$N(n)$$ is chosen
so that

$$
\vert f_{N(n)}^n - f_j^n\vert  < \frac{1}{n} \quad \forall \; j \ge N(n).
$$

Then $$F^k \to F$$ in $$H$$.

</div>

Exercise: 4, 7, 14.

<!-- prettier-ignore-end -->

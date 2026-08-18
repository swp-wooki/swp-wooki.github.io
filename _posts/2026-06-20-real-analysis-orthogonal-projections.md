---
layout: post
title: "Real Analysis 15: Closed Subspaces and Orthogonal Projections"
date: 2026-06-20 12:00:00 +0900
description: "닫힌 부분공간, 직교여공간과 직교사영의 구조를 다룬다."
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

**Definition.**
A subspace $$S$$ of Hilbert space $$H$$ is **closed** if whenever $$\{f_n\} \subset S$$ converges to $$f \in H$$, then $$f$$ also belongs to $$S$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">If $$\vert H\vert < \infty$$, then any subspace is closed.
</li>
<li markdown="1">If $$\vert H\vert = \infty$$, this is not true in general: $$\mathbb{R} \le L^2$$ is not closed.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 4.1.**

Let $$S \le H$$<div class="real-analysis-footnote" markdown="1">Note: We will denote subspace $$S$$ of $$H$$ by $$S \le H$$.</div> be closed and $$f \in H$$.

<ol>

<li markdown="1">There exsits $$g_0 \in S$$ uniquely such that $$\vert \vert f - g_0\vert \vert = \inf_{g \in S} \vert \vert f - g\vert \vert $$
</li>
<li markdown="1">$$f - g_0 \perp S$$, that is, $$(f - g_0 \: , \: g) = 0$$ for all $$g \in S$$

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Let $$d = \inf_{g \in S} \vert \vert f - g\vert \vert $$. Since $$f \notin S$$ and $$S$$ is closed, $$d > 0$$. Then we can choose a sequence $$\{g_n\}$$ such that
$$\vert \vert f - g_n\vert \vert \to d$$ as $$n \to \infty$$.
Then,
ETS : $$\{g_n\}$$ is Cauchy in $$H$$.
We use following equality: for all $$A, B \in H$$,

$$
\vert \vert A + B\vert \vert ^2 + \vert \vert A - B\vert \vert ^2 = 2(\vert \vert A\vert \vert ^2 + \vert \vert B\vert \vert ^2)
$$

Applying it to $$A = f - g_n$$ \& $$B = f - g_m$$, we find

$$
\begin{aligned}
\vert \vert g_n - g_m\vert \vert ^2
&= 2(\vert \vert f - g_n\vert \vert ^2 + \vert \vert f - g_m\vert \vert ^2) - \vert \vert 2f - g_n - g_m\vert \vert ^2 \\
&\le 2(\vert \vert f - g_n\vert \vert ^2 + \vert \vert f - g_m\vert \vert ^2) - (2d)^2 \qquad (\ast)
\end{aligned}
$$

then, $$(\ast)\to 2(d^2 + d^2) - 4d^2 = 0 \quad \text{as } n, m \to \infty$$.

Uniqueness follows from (ii): If $$\tilde{g}_0$$ is another minimizer, then

$$
(f - g_0) \perp (g_0 - \tilde{g}_0)
$$

Hence, $$\vert \vert f - \tilde{g}_0\vert \vert ^2 = \vert \vert f - g_0\vert \vert ^2 + \vert \vert g_0 - \tilde{g}_0\vert \vert ^2$$.
</li>
<li markdown="1">Let $$g \in S$$ and $$\epsilon \in \mathbb{R}$$. Since $$g_0 - \epsilon g \in S$$, we have
<div class="real-analysis-footnote" markdown="1">Note: Following inequality comes from the following calculation:

$$
\begin{aligned}
\vert \vert f - g_0 + \epsilon g\vert \vert ^2
&= \langle f - g_0 + \epsilon g, f - g_0 + \epsilon g \rangle \\
&= \langle f - g_0, f - g_0 \rangle + \langle f - g_0, \epsilon g \rangle + \langle \epsilon g, f - g_0 \rangle + \langle \epsilon g, \epsilon g \rangle \\
&= \vert \vert f - g_0\vert \vert ^2 + \vert \vert \epsilon g\vert \vert ^2 + \langle f - g_0, \epsilon g \rangle + \langle \epsilon g, f - g_0 \rangle,
\end{aligned}
$$


and since

$$
\begin{aligned}
\langle f - g_0, \epsilon g \rangle + \langle \epsilon g, f - g_0 \rangle
&= \epsilon \langle f - g_0, g \rangle + \epsilon \overline{\langle f - g_0, g \rangle} \\
&= 2\epsilon \text{Re} \langle f - g_0, g \rangle \\
\end{aligned}
$$

</div>

$$
\begin{aligned}
\vert \vert f - g_0\vert \vert ^2 &\le \vert \vert f - (g_0 - \epsilon g)\vert \vert ^2 \\
&= \vert \vert f - g_0\vert \vert ^2 + \epsilon^2 \vert \vert g\vert \vert ^2 + 2\epsilon \text{Re}(f - g_0, g) \qquad (\ast)
\end{aligned}
$$

Then, $$\text{Re} \langle f - g_0, g \rangle = 0$$. Indeed,

<ol>

<li markdown="1">if $$\text{Re} \langle f - g_0, g \rangle > 0$$, then we can take sufficiently small $$\epsilon > 0$$ such that
$$\epsilon^2 \vert \vert g\vert \vert ^2 \le 2\epsilon \text{Re} \langle f - g_0, g \rangle,$$ which is a contradiction.
</li>
<li markdown="1">if $$\text{Re} \langle f - g_0, g \rangle < 0$$, again, take small $$\epsilon < 0$$ so that
$$\epsilon^2 \vert \vert g\vert \vert ^2 \le 2\epsilon \text{Re} \langle f - g_0, g \rangle.$$
Thus, $$\text{Re} \langle f - g_0, g \rangle = 0$$.

</li>
</ol>

Similarly, by considering $$g_0 - i\epsilon g$$, we obtain $$\text{Im}(f - g_0, g) = 0$$. Thus, $$(f - g_0, g) = 0$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
The **orthogonal complement** of $$S \le H$$ is defined by

$$
S^\perp = \{f \in H : (f, g) = 0 \text{ for all } g \in S\}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

$$S^\perp \le H$$, $$S \cap S^\perp = \{0\}$$ and $$S^\perp$$ is closed. (Proof is homework).RT

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 4.2.**

If $$S \le H$$ is closed, then
$$H = S \oplus S^\perp \text{ (direct sum)}.$$
That is, $$f \in H$$ can be written uniquely as $$f = g + h$$, where $$g \in S$$ and $$h \in S^\perp$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
For $$f \in H$$, we take $$g_0$$ as in Lemma 4.1, and write
$$f = g_0 + (f - g_0).$$
Then $$g_0 \in S$$ and $$f - g_0 \in S^\perp$$.
For the uniqueness, assume
$$f = g_1 + h_1 = g_2 + h_2$$
where $$g_i \in S$$, $$h_i \in S^\perp$$. Then,
$$g_1 - g_2 = h_2 - h_1 \in S \cap S^\perp = \{0\}.$$
Thus, $$g_1 = g_2$$ and $$h_1 = h_2$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
The map $$P_S(f) = g_0$$ is called the (orthogonal) projection onto $$S$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 1.**

On $$L^2[-\pi, \pi]$$, the partial sum operator
$$S_N(f) \coloneq \sum_{n=-N}^N a_n e^{in\theta}$$
of the Fourier Series is the projection onto the closed subspace
$$\text{span}\{e^{-iN\theta}, \dots, e^{iN\theta}\}.$$
That is, $$S_N : L^2 \to \text{span}\{e^{-iN\theta}, \dots, e^{iN\theta}\}$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.**

Let $$S$$ denote the subspace of $$L^2[-\pi, \pi]$$ that consists of all $$F$$ with
$$F(\theta) \sim \sum_{n=0}^\infty a_n e^{in\theta} \text{ where n < 0 \implies a_n = 0 }$$ By Fatou's theorem, $$S$$ can be identified with the Hardy space $$H^2(\mathbb{D})$$. Then the projection from $$L^2$$ to $$S$$ can be written as

$$
\begin{aligned}
P(f)(z) &= \sum_{n=0}^\infty a_n z^n \\
&= \sum_{n=0}^\infty \left( \frac{1}{2\pi} \int_{-\pi}^\pi f(e^{i\theta}) e^{-in\theta} d\theta \right) z^n
\end{aligned}
$$

Note that for $$f \in L^1$$:

$$
\begin{aligned}
P(f)(z) &= \frac{1}{2\pi} \int_{-\pi}^\pi f(e^{i\theta}) \sum_{n=0}^\infty (e^{-i\theta} z)^n d\theta \qquad (\because f \in L^1, \text{ by DCT})\\
&= \frac{1}{2\pi} \int_{-\pi}^\pi \frac{f(e^{i\theta})}{1 - e^{-i\theta} z} d\theta \\
&= \frac{1}{2\pi i} \int_{-\pi}^\pi \frac{f(e^{i\theta})}{e^{i\theta} - z} i e^{i\theta} d\theta \\
&= \frac{1}{2\pi i} \int_\gamma \frac{f(\zeta)}{\zeta - z} d\zeta \quad (d\zeta = i e^{i\theta} d\theta) \\
&\coloneq \text{Cauchy integral of } f \text{ along } \gamma = \text{unit circle}.
\end{aligned}
$$

</div>

Exercise: 10, 11, 12.

<!-- prettier-ignore-end -->

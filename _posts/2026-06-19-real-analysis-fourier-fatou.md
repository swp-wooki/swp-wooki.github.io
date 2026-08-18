---
layout: post
title: "Real Analysis 14: Fourier Series and Fatou's Theorem"
date: 2026-06-19 12:00:00 +0900
description: "Hilbert 공간 관점의 Fourier 급수와 Fatou 정리를 정리한다."
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
For $$f \in L^1[-\pi, \pi]$$, we define the **Fourier series** of $$f$$ by

$$
f(x) \sim \sum_{n \in \mathbb{Z}} a_n e^{inx}, \quad \text{where} \quad a_n \coloneq \frac{1}{2\pi} \int_{-\pi}^\pi f(x) e^{-inx} dx.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.2.**

Let $$f \in L^2[-\pi, \pi] (\subset L^1[-\pi, \pi])$$. Then

<ol>

<li markdown="1">(Parseval's identity)

$$
\sum_{n \in \mathbb{Z}} \vert a_n\vert ^2 = \frac{1}{2\pi} \int_{-\pi}^\pi \vert f\vert ^2
$$

</li>
<li markdown="1">The mapping $$L^2[-\pi, \pi] \to l^2(\mathbb{Z})$$ which maps $$f \mapsto \{a_n\}_{n \in \mathbb{Z}}$$ is a unitary map.
</li>
<li markdown="1">The Fourier series of $$f$$ converges to $$f$$ in $$L^2$$, that is,

$$
\frac{1}{2\pi} \int_{-\pi}^\pi \vert f(x) - S_N(f)\vert ^2 dx \to 0 \quad \text{as } N \to \infty
$$

where $$S_N(f) = \sum_{\vert n\vert \le N} a_n e^{inx}$$.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Apply Theorem 2.3 to $$H = L^2[-\pi, \pi]$$ with the usual inner product and the orthonormal set $$\{e^{inx}\}_{n \in \mathbb{Z}}$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

For $$L^1$$ function $$f$$, the Fourier series may diverge everywhere.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.1.**

Let $$f \in L^1[-\pi, \pi]$$.

<ol>

<li markdown="1">If $$a_n = 0$$ for all $$n \in \mathbb{Z}$$, then $$f = 0$$ a.e.
</li>
<li markdown="1">$$\sum_{n \in \mathbb{Z}} a_n r^{\vert n\vert } e^{inx} \to f(x)$$ for a.e. $$x$$ as $$r \nearrow 1$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Since

$$
\sum \vert a_n r^{\vert n\vert } e^{inx}\vert  \le \left(\frac{1}{2\pi} \int_{-\pi}^\pi \vert f(x)\vert  dx\right) \sum r^{\vert n\vert }
$$

the series $$\sum a_n r^{\vert n\vert } e^{inx}$$ converges absolutely and uniformly (in $$x$$) for each $$r \in [0, 1)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
ETS : (ii) holds, since (i) follows from (ii).

A straightforward calculation shows that

$$
\sum_{n \in \mathbb{Z}} r^{\vert n\vert } e^{iny} = \frac{1 - r^2}{1 - 2r \cos y + r^2} \eqcolon Pr(y) \qquad \text{(Poisson kernel)}
$$

We extend $$f$$ as the $$2\pi$$-periodic function on $$\mathbb{R}$$. We claim that

$$
\sum_{n \in \mathbb{Z}} a_n r^{\vert n\vert } e^{inx} = \frac{1}{2\pi} \int_{-\pi}^\pi f(x-y) P_r(y) dy.
$$

Indeed, by the DCT,

$$
\begin{aligned}
RHS &= \sum r^{\vert n\vert } \frac{1}{2\pi} \int_{-\pi}^\pi f(x-y) e^{iny} dy \\
&= \sum r^{\vert n\vert } \frac{1}{2\pi} \int_{-\pi+x}^{\pi+x} f(y) e^{in(x-y)} dy \\
&= \sum r^{\vert n\vert } e^{inx} \frac{1}{2\pi} \int_{-\pi}^\pi f(y) e^{-iny} dy = LHS
\end{aligned}
$$

Note that $$RHS \to f(x)$$ at every Lebesgue point of $$f$$ as $$r \nearrow 1$$.

</div>

### 4.3.1 Fatou's theorem
<div class="real-analysis-statement" markdown="1">

**Question.**

Let $$F(z)$$ be holomorphic in

$$
D = \{z \in \mathbb{C} : \vert z\vert  < 1\}
$$


What are conditions on $$F$$ that guarantee that $$F(z)$$ will converge, in an appropriate sense, to boundary values

$$
F(e^{i\theta}) \text{ on } \partial D?
$$

</div>

Please see also Exercise 16.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.3 (Fatou).**

A bounded holomorphic function $$F(re^{i\theta})$$ on $$D$$ has radial limits

$$
\lim_{r \nearrow 1} F(re^{i\theta})
$$

exists for almost every $$\theta$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Recall that $$F(z)$$ has a power series expansion
$$\sum_{n=0}^\infty a_n z^n$$ in $$D$$
that converges absolutely and uniformly in every compact subset of $$D$$. Thus, we have

$$
\begin{aligned}
\frac{1}{2\pi} \int_{-\pi}^\pi F(re^{i\theta}) e^{-ik\theta} d\theta
&= \frac{1}{2\pi} \int_{-\pi}^\pi \sum_{n=0}^\infty a_n (re^{i\theta})^n e^{-ik\theta} d\theta \\
&= \sum_{n=0}^\infty a_n r^n \frac{1}{2\pi} \int_{-\pi}^\pi e^{i(n-k)\theta} d\theta = \begin{cases}
a_k r^k & \text{if } k \ge 0 \\
0 & \text{if } k < 0
\end{cases}
\end{aligned}
$$

Since $$F(re^{i\theta}) \in L^2[-\pi, \pi]$$ for each $$0 \le r < 1$$, we can apply Parseval's identity:

$$
\sum_{n=0}^\infty \vert a_n\vert ^2 r^{2n} = \frac{1}{2\pi} \int_{-\pi}^\pi \vert F(re^{i\theta})\vert ^2 d\theta \quad \text{ for each } r \in (0, 1).
$$

By the boundedness of $$F$$, letting $$r \nearrow 1$$ shows that $$\sum_{n=0}^\infty \vert a_n\vert ^2$$ converges.

Now, we define $$F(e^{i\theta})$$ by the $$L^2$$ function where Fourier coefficients are $$a_n$$ when $$n \ge 0$$, and $$0$$ when $$n < 0$$.<div class="real-analysis-footnote" markdown="1">Note: Existence and uniqueness of such $$L^2$$-function, under the assumption $$\{a_n\} \in l^2$$, by the Riesz-Fischer theorem.</div>
Hence by Theorem 3.1 (ii),

$$
F(re^{i\theta}) \coloneq \sum_{n=0}^\infty a_n r^n e^{in\theta} \to F(e^{i\theta})
$$

for a.e. $$\theta$$ as $$r \nearrow 1$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

What we need in the proof is finiteness of

$$
\sup_{0 \le r < 1} \frac{1}{2\pi} \int_{-\pi}^\pi \vert F(re^{i\theta})\vert ^2 d\theta < \infty
$$

which is weaker than the boundedness. Theorem 3.3 holds for any function in the Hardy space

$$
H^2(\mathbb{D}) = \left\{ F : \mathbb{D} \to \mathbb{C} \text{ holomorphic} : \sup_{0 \le r < 1} \frac{1}{2\pi} \int_{-\pi}^\pi \vert F(re^{i\theta})\vert ^2 d\theta < \infty \right\}.
$$

</div>

<!-- prettier-ignore-end -->

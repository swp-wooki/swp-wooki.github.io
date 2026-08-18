---
layout: post
title: "Real Analysis Appendix: Complex Fourier Series and Holomorphic Functions"
date: 2026-06-27 12:00:00 +0900
description: "복소 삼각계와 복소 Fourier 계수를 정리하고, 정칙함수와 실변수 함수의 차이를 살펴본다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

During the Advanced Calculus course, we have studied Fourier series of the form as following definition.

<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $\{\phi_n\}_{n=1}^{\infty}$ be a sequence of orthogonal functions on $[a, b]$ and let $f \in \mathcal{R}[a, b]$. For each $n \in \mathbb{N}$, the number
    \[
    c_n = \frac{\int_a^b f(x) \phi_n(x) dx}{\int_a^b \phi_n(x)^2 dx}
    \]
    is called the **Fourier coefficient** of $f$ with respect to $\phi_n$. The series
    \[
    f(x) \sim \sum_{n=1}^{\infty} c_n \phi_n(x)
    \]
    is called the **Fourier series** of $f$.

</div>

Note that above definition of Fourier series is defined for any orthogonal system $\{\phi_n\}_{n=1}^{\infty}$. In particular, we usually use trigonometric system
\[
\left\{1, \cos nx, \sin nx \right\}_{n=1}^{\infty},
\]
which is orthogonal on $[-L, L]$. Now consider such trigonometric system on $[-\pi, \pi]$, we have
\[
\int_{-\pi}^\pi \sin^{2} nx dx = \int_{-\pi}^\pi \cos^{2} n x dx = \pi, \quad \int_{-\pi}^\pi 1^{2} dx = 2\pi.
\]
Therefore the Fourier coefficients of $f$ with respect to the trigonometric system are defined as following:

<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $f \in \mathcal{R}[-\pi, \pi]$. The **Fourier coefficients** of $f$ with respect to the trigonometric system $\{1, \cos nx, \sin nx\}$ are defined by
    \begin{align*}
    a_0 &= \frac{1}{\pi} \int_{-\pi}^\pi f(x) dx, \
    a_n &= \frac{1}{\pi} \int_{-\pi}^\pi f(x) \cos nx dx \qquad n = 1, 2, \ldots, \
    b_n &= \frac{1}{\pi} \int_{-\pi}^\pi f(x) \sin nx dx \qquad n = 1, 2, \ldots.
    \end{align*}
    Also, the **Fourier series** of $f$ is given by
    \[
    f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx).
    \]

</div>

For now, we want to extend such Fourier series to the complex form. By using Euler's formula, we can rewrite the sine and cosine functions as
\begin{align*}
    \cos nx &= \frac{e^{inx} + e^{-inx}}{2}, \
    \sin nx &= \frac{e^{inx} - e^{-inx}}{2i}.
\end{align*}
Then, we can express the Fourier series of $f$ with above as
\begin{align*}
    f(x) 
    &\sim \frac{a_0}{2} + \sum_{n=1}^\infty \left( a_n \frac{e^{inx} + e^{-inx}}{2} + b_n \frac{e^{inx} - e^{-inx}}{2i} \right) \
    &= \frac{a_0}{2} + \sum_{n=1}^\infty \left( \frac{a_n - i b_n}{2} e^{inx} + \frac{a_n + i b_n}{2} e^{-inx} \right). \tag{$\ast$}\
\end{align*}
Let define
\[
c_0 \coloneq \frac{a_0}{2}, \quad c_n \coloneq \frac{a_n - i b_n}{2} \; \text{ for } n > 0, \quad \text{ and } \quad c_{-n} \coloneq \frac{a_n + i b_n}{2} \; \text{ for } n > 0.
\]
Then, 
\[
(\ast) = c_0 + \sum_{n=1}^\infty c_n e^{inx} + \sum_{n=1}^\infty c_{-n} e^{-inx} = \sum_{n=-\infty}^\infty c_n e^{inx}.
\]
Therefore, in general, we use the Fourier series of $f$ in the complex form as following definition.
<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $f \in \mathcal{R}[-\pi, \pi]$. The **Fourier coefficients** of $f$ with respect to the complex trigonometric system $\{e^{inx}\}_{n=-\infty}^\infty$ are defined by
    \[
    c_n = \frac{1}{2\pi} \int_{-\pi}^\pi f(x) e^{-inx} dx \quad \text{ for } n \in \mathbb{Z}.
    \]
    Also, the **Fourier series** of $f$ is given by
    \[
    f(x) \sim \sum_{n=-\infty}^\infty c_n e^{inx}.
    \]

</div>

### Holomorphic Functions

In the context of *Complex Analysis*, we are interested in functions of complex variable, which have much stronger properties than functions of a real variable. In particular, a function that is differentiable in the complex sense is infinitely differentiable and admits a power series expansion around every point in its domain. Such results have no direct analogue in real analysis, where many counterexamples arise.

<!-- prettier-ignore-end -->

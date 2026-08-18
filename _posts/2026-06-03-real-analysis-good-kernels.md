---
layout: post
title: "Real Analysis 9: Good Kernels and Approximation"
date: 2026-06-03 12:00:00 +0900
description: "좋은 커널과 항등원 근사, 합성곱을 통한 함수 근사를 다룬다."
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
A family $\{K_\delta\}_{\delta > 0} \subset L^1(\mathbb{R}^d)$ is an **approximation to the identity** if

<ol>

<li markdown="1">$\int_{\mathbb{R}^d} K_\delta = 1 \quad \forall \delta > 0$,
</li>
<li markdown="1">$|K_\delta(x)| \le A \delta \min \left\{ \frac{1}{\delta^{d+1}}, \frac{1}{|x|^{d+1}} \right\}$ for all $\delta > 0$ and for all $x \in \mathbb{R}^d$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Example.**

<ol>

<li markdown="1">Let $\varphi \ge 0$ be bounded, supported on $\overline{B}_1$, and such that $\int \varphi = 1$. Then,
    \[
    K_\delta(x) := \frac{1}{\delta^d} \varphi\left(\frac{x}{\delta}\right)
    \]
    is an approximation to the identity.
</li>
<li markdown="1">The Poisson kernel, heat kernel, Fej\'{e}r kernel, \dots See the textbook!

</li>
</ol>

</div>

Before we seek to following theorem, recall that we have defined the convolution $f * K_\delta$ by
\[
(f * g)(x) \coloneq \int_{\mathbb{R}^d} f(x-y)g(y)dy
\]

<div class="real-analysis-statement" markdown="1">

**Theorem 2.1.**

If $f \in L^1(\mathbb{R}^d)$, then 
\[
(f * K_\delta)(x) \to f(x) \quad \text{as } \delta \to 0
\]
for every Lebesgue point $x$. In particular, the limit holds a.e. <span class="real-analysis-footnote">Note: Note that $\int_{\mathbb{R}^d} f(x-y)K_\delta(y)dy - \int_{\mathbb{R}^d} f(x)K_\delta(y)dy = (f * K_\delta)(x) - f(x)$</span>

</div>

To prove Theorem 2.1, we need the following lemma.

<div class="real-analysis-statement" markdown="1">

**Lemma 2.2.**

Let $f \in L_{loc}^1$ and let $x$ be a Lebesgue point of $f$. Then,
\[
r \mapsto A(r) := \frac{1}{r^d} \int_{|y| \le r} |f(x-y) - f(x)| dy
\]
is continuous, bounded, and $\lim_{r \to 0} A(r) = 0$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Note that continuity of $A$ follows from proposition 1.12 in Chapter 2, and $\lim_{r \to 0} A(r) = 0$ follows from the definition of Lebesgue point. It remains to show that $A$ is bounded on $(1, \infty)$. That is,
\[
\text{ETS : } A \text{ is bounded on } (1, \infty).
\]

If $r > 1$, then
\begin{align*}
A(r) &\le \frac{1}{r^d} \int_{|y| \le r} |f(x-y)| dy + |B_1| |f(x)|  \
&\le ||f||_{L^1} + |B_1| |f(x)| < \infty
\end{align*}
<span class="real-analysis-footnote">Note: Calculation of $\frac{1}{r^d} \int_{|y| \le r} |f(x)| dy$ is given by
$$\frac{1}{r^d} \int_{|y| \le r} |f(x)| dy = \frac{1}{r^d} |B_r| |f(x)| = |B_1| |f(x)|$$</span>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof of Theorem 2.1.*

We write
\begin{align*}
|(f * K_\delta)(x) - f(x)| &\le \int |f(x-y) - f(x)| |K_\delta(y)| dy \
&\le \int_{|y| \le \delta} |f(x-y) - f(x)| \frac{c}{\delta^d} dy \
&+ \sum_{k=0}^{\infty} \int_{2^k \delta < |y| \le 2^{k+1}\delta} |f(x-y) - f(x)| \frac{c\delta}{(2^k \delta)^{d+1}} dy \
&\lesssim A(\delta) + \sum_{k=0}^{\infty} \frac{1}{2^k} A(2^{k+1}\delta) \tag{$\ast$}
\end{align*}
<span class="real-analysis-footnote">Note: If
$k=0 : \delta < |y| \le 2\delta, \quad k=1 : 2\delta < |y| \le 4\delta $</span>

Let $\epsilon > 0$. Then there exists $N \in \mathbb{N}$ such that 
\[
\sum_{k=N}^{\infty} 2^{-k} < \epsilon
\]
By Lemma 2.2, there exists $\delta > 0$ such that 
\[
A(2^k \delta) < \frac{\epsilon}{N} \quad \text{for } k = 0, 1, \dots, N-1.
\]
Recalling that $A$ is bounded, we have
\[
(\ast) \le \frac{\epsilon}{N} + \frac{\epsilon}{N} \sum_{k=0}^{N-1} \frac{1}{2^k} + C \epsilon \lesssim \epsilon
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.3.**

If $f \in L^1$, then $f * K_\delta \in L^1$ and 
\[
||f * K_\delta - f||_{L^1} \to 0 \quad \text{as } \delta \to 0.
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Homework.

</div>

Exercise for this section: Exercise 1

<!-- prettier-ignore-end -->

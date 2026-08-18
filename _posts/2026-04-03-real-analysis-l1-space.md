---
layout: post
title: "Real Analysis 6: The Space L1"
date: 2026-04-03 12:00:00 +0900
description: "적분가능함수의 공간 L1, 완비성, 조밀성, 평행이동과 합성곱의 기본 성질을 정리한다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

<div class="real-analysis-statement" markdown="1">

**Definition.**
For an integrable function $f$, we define
\[
||f|| = ||f||_{L^1} = ||f||_{L^1(\mathbb{R}^d)} = \int_{\mathbb{R}^d} |f(x)| dx
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Note that
    $||f|| = 0 \iff f = 0 \:$ a.e.
Therefore we define the relation
\[
f \sim g \iff f = g \quad \text{a.e.}
\]

</div>

<div class="real-analysis-statement" markdown="1">

**$L^1$ space.**

\begin{align*}
    L^1 &= L^1(\mathbb{R}^d) \
    &= \text{the space of equivalent classes of integrable functions}
\end{align*}
$L^1(E)$ for $E \in \mathcal{M}$ with $0 < m(E) \le \infty$

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.1.**

$||\cdot||$ is a norm on $L^1$. Moreover, 
$$d(f,g) = ||f-g||_{L^1}$$
defines a metric on $L^1$.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.2 (Riesz - Fischer).**

$L^1$ is complete.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $\{f_n\}$ be Cauchy in $L^1$. <span class="real-analysis-footnote">Note: See Exercise 12</span> \\
Then we can take a subsequence $\{f_{n_k}\}_{k=1}^\infty$ of $\{f_n\}$ such that
\[
\int |f_{n_{k+1}} - f_{n_k}| = ||f_{n_{k+1}} - f_{n_k}|| \le 2^{-k} \quad \forall \: k \ge 1. \tag{$\ast$}
\]
Consider the series
\begin{align*}
f &:= f_{n_1} + \sum_{k=1}^\infty (f_{n_{k+1}} - f_{n_k}) \stepcounter{footnote} \
g &:= |f_{n_1}| + \sum_{k=1}^\infty |f_{n_{k+1}} - f_{n_k}|
\end{align*}
\addtocounter{footnote}{-1}
<span class="real-analysis-footnote">Note: Note that partial sum of $f_{n_1} + \sum_{k=1}^\infty (f_{n_{k+1}} - f_{n_k})$ is $s_k = f_{n_{k}}$</span>
\stepcounter{footnote}
<span class="real-analysis-footnote">Note: Let $g_K \coloneq |f_{n_1}| + \sum_{k=1}^K |f_{n_{k+1}} - f_{n_k}| \ge 0$. Then $g_K \nearrow g$ as $K \to \infty$.</span>
Since $g_K \nearrow g$ as $K \to \infty$, the MCT shows that
\begin{align*}
    \lim_{K \to \infty} \int g_K &= \int g \tag{$\because$ MCT}\
    &= \int |f_{n_1}| + \sum_{k=1}^\infty \int |f_{n_{k+1}} - f_{n_k}| \
    &\le \int |f_{n_1}| + \sum_{k=1}^\infty 2^{-k} < \infty \tag{$\because$ ($\ast$)}
\end{align*}
we have $\int g \le \infty$, which implies that $g$ is integrable. *i.e.* $g \in L^1$.
Moreover, since $|f| \le g$, 
\[
|f| \le g \implies \int |f| \le \int g < \infty \implies f \in L^1.
\]
This implies that $f \coloneq f_{n_1} + \sum_{k=1}^\infty (f_{n_{k+1}} - f_{n_k})$ converges a.e., which means that its partial sum is convergent to $f$. Hence, $f_{n_k} \to f$ a.e.

We observe that
\[
f - f_{n_k} = f - s_k = \sum_{j=k}^\infty (f_{n_{j+1}} - f_{n_j})
\]
which implies
\[
|f - f_{n_k}| \le \sum_{j=k}^\infty |f_{n_{j+1}} - f_{n_j}| \le |f_{n_1}| + \sum_{k=1}^\infty |f_{n_{k+1}} - f_{n_k}| = g.
\]
Hence, we have
\[
|f_{n_k} - f| \le g \in L^1
\]
it follows from the DCT that
\[
||f_{n_k} - f||_{L^1} \to 0 \quad \text{as } k \to \infty.
\]
Since $\{f_n\}$ is Cauchy, $\forall \: \epsilon > 0\;, \:\exists \: N_0 \in \mathbb{N}$ such that 
\[
||f_n - f_m|| < \frac{\epsilon}{2} \quad \forall \: n,m \ge N_0.
\]
We take $k$ sufficiently large such that
\[
n_k \ge N_0 \quad \text{and} \quad ||f_{n_k} - f|| < \frac{\epsilon}{2}
\]
Then $\forall \: n > N_0$, we have
\begin{align*}
||f_n - f|| &\le ||f_n - f_{n_k}|| + ||f_{n_k} - f|| \
&< \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
\end{align*}

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 2.3.**

If $f_n \to f$ in $L^1$, then $\exists$ a subsequence $\{f_{n_k}\}$ s.t. 
\[
f_{n_k} \to f \quad \text{a.e.}
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.4.**

The following families of functions $\mathcal{F}$ are dense in $L^1(\mathbb{R}^d)$
<span class="real-analysis-footnote">Note: The family of functions $\mathcal{F}$ is dense in $L^1$ if
    $\forall \: f \in L^1$ and $\forall \: \epsilon > 0$, $\exists \: \: g \in \mathcal{F}$ such that $||f - g||_{L^1} < \epsilon$.</span>:

<ol>

<li markdown="1">The simple functions. 
</li>
<li markdown="1">The step functions.
</li>
<li markdown="1">$C_c^0(\mathbb{R}^d) := \{\text{The continuous functions with compact support }\}$

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We may assume that $f \ge 0$.

<ol>

<li markdown="1">By Theorem 4.1 in Ch 1. $\exists$ simple functions $0 \le \varphi_k \nearrow f$ pointwise. By the BCT (or MCT), we have
    \[
    ||\varphi_k - f||_{L^1} \to 0 \quad \text{as } k \to \infty.
    \]
</li>
<li markdown="1">By (i), it suffices to approximate $\chi_E$ with $m(E) < \infty$ by step functions. Indeed, Theorem 3.4 in Ch 1 shows that 
    \[
    \forall \: \epsilon > 0, \: \exists \text{ almost disjoint rectangles } \{R_j\}_{j=1}^M \text{ such that } m(E \Delta \bigcup_{j=1}^M R_j) \le \epsilon.
    \]
    Thus, 
    \[
    ||\chi_E - \chi_{\cup R_j}||_{L^1} \le \epsilon.
    \]
</li>
<li markdown="1">By (ii), it suffices to approximate $\chi_R = \chi_{[a_1,b_1]} \times \dots \times \chi_{[a_d,b_d]}$ by continuous functions. Indeed, we can approximate $\chi_{[a_j,b_j]}$ by $g_j$ so that
    \[
    || \chi_{[a_j,b_j]} - g_j ||_{L^1} = \epsilon.
    \]
    Thus, 
    \[
    || \chi_R - g_1 \cdots g_d ||_{L^1} = \epsilon^d.
    \]
    Note that $g_1, \dots, g_d \in C_c^0(\mathbb{R}^d)$.

</li>
</ol>

</div>

### Invariance properties
In this section, we will see some invariance properties on $L^1(\mathbb{R}^d)$ space.

If $f \in L^1(\mathbb{R}^d)$, then so is $f_h(x) \coloneq f(x-h)$ and 
\[
||f||_{L^1(\mathbb{R}^d)} = ||f_h||_{L^1(\mathbb{R}^d)}.
\]

If $f \in L^1(\mathbb{R}^d)$ and $\delta > 0$, then so are $f(\delta x)$ and $f(-x)$, and 
\[
\delta^d \int_{\mathbb{R}^d} f(\delta x) dx = \int_{\mathbb{R}^d} f(x) dx, \quad \int_{\mathbb{R}^d} f(-x) dx = \int_{\mathbb{R}^d} f(x) dx.
\]

Suppose that $f$ and $g$ satisfy that $y \mapsto f(x-y)g(y) \in L^1(\mathbb{R}^d)$ for some $x$. Then
\[
\int_{\mathbb{R}^d} f(x-y)g(y) dy = \int_{\mathbb{R}^d} f(y)g(x-y) dy 
\]
by change of variables and invariance properties. Note that we define **covolution** of $f$ and $g$ by
\[
(f * g)(x) = \int_{\mathbb{R}^d} f(x-y)g(y) dy.
\]

### Translations and continuity
<div class="real-analysis-statement" markdown="1">

**Proposition 2.5.**

Let $f \in L^1(\mathbb{R}^d)$. Then 
\[
||f_h - f||_{L^1} \to 0 \quad \text{as } h \to 0
\]
Equivalently, if we define operator $T_h : L^1 \to L^1$ by $f \mapsto T_h f = f_h$, then
\[
||T_h f - f||_{L^1} \to 0 \text{ as } h \to 0
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $\epsilon > 0$. Then $\exists g \in C_c^0(\mathbb{R}^d)$ s.t. $||f - g||_{L^1} < \epsilon$.
Note that 
\begin{align*}
||f_h - f|| &\le ||f_h - g_h|| + ||g_h - g|| + ||g - f|| \
&= 2||f - g|| + ||g_h - g||.
\end{align*}
Since $|g_h - g| \le M$ for some constant $M > 0$ and $g_h - g \in C_c^0(\mathbb{R}^d)$, the BCT or DCT shows that
\[
||g_h - g||_{L^1} = \int_{\mathbb{R}^d} |g(x+h) - g(x)| dx \to 0 \quad \text{as } h \to 0.
\]
Thus, $\exists \: \delta > 0$ such that $||g_h - g|| < \epsilon \quad \forall \: |h| < \delta$.
$\implies ||f_h - f|| < 3\epsilon \quad \forall |h| < \delta$.

</div>

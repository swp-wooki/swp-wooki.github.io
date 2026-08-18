---
layout: post
title: "Real Analysis 11: Rectifiable Curves"
date: 2026-06-10 12:00:00 +0900
description: "수정가능 곡선과 호의 길이 매개화, 등주부등식을 다룬다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

Recall that a parametrized curve 
$$\gamma(t) = (x(t), y(t)) \in C[a,b]$$ 
is rectifiable if and only if $x, y \in BV[a,b]$. In this case, the length of $\gamma(t)$ is defined by 
$$L \coloneq \sup_P \sum_{j=1}^N |z(t_j) - z(t_{j-1})|.$$

<div class="real-analysis-statement" markdown="1">

**Question.**

 $L = \int_a^b \sqrt{x'(t)^2 + y'(t)^2} dt$?

</div>

<div class="real-analysis-proof" markdown="1">

*Answer.*

No! If $x = y = F =$ Cantor-Lebesgue function, which is continuous and of bounded variation, then $\gamma$ is the straight line from $(0,0)$ to $(1,1)$ and has length $\sqrt{2}$, but $x' = y' = F' = 0$ almost everywhere.    

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.1.**

If $x$ and $y$ are absolutely continuous, then $\gamma$ is rectifiable and 
$$L = \int_a^b \sqrt{x'(t)^2 + y'(t)^2} dt.$$

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 4.2.**

If $F : [a,b] \to \mathbb{R}$ is absolutely continuous, then 
$$T_F(a,b) \coloneq \int_a^b |F'(t)| dt.$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($\ge$) By Theorem 3.11 (Fundamental Theorem of Calculus), we have for any partition $\mathcal{P}$,
\begin{align*}
    \sum_{j=1}^N |F(t_j) - F(t_{j-1})|
    &= \sum_{j=1}^N \left| \int_{t_{j-1}}^{t_j} F'(t) dt \right| \
    &\le \sum_{j=1}^N \int_{t_{j-1}}^{t_j} |F'(t)| dt \
    &= \int_a^b |F'(t)| dt.
\end{align*}
Taking the supremum over $\mathcal{P}$ gives the desired result.

($\le$) This inequality is straightforward if $G$ is absolutely continuous and $G'$ is a step function: indeed, if $G'$ is constant on each interval $(t_{j-1}, t_j)$, $j=1,\dots,N$, then
\begin{align*}
    T_G(a,b) 
    &\ge \sum_{j=1}^N |G(t_j) - G(t_{j-1})| \
    &= \sum_{j=1}^N \left| \int_{t_{j-1}}^{t_j} G'(t) dt \right| \
    &= \sum_{j=1}^N \int_{t_{j-1}}^{t_j} |G'(t)| dt \
    &= \int_a^b |G'(t)| dt.
\end{align*}
Now, for the general case, we recall that step functions are dense in $L^1$. Since $F' \in L^1$, for any $\epsilon > 0$, there exists a step function $g$ such that 
$$||F' - g||_{L^1} < \epsilon.$$
Let $h = F' - g$ and define 
\[
G(x) = \int_a^x g(t) dt \quad \text { and } \quad H(x) = \int_a^x h(t) dt
\]
Then, $F = G + H$. Since 
\[
T_F \ge T_G - T_H \quad \text{and} \quad T_H \le \int_a^b |h| < \epsilon,
\]
we have
\begin{align*}
T_F &\ge \int_a^b |g(t)| dt - \epsilon \
&\ge \int_a^b |F'(t)| dt - 2\epsilon.
\end{align*}
Letting $\epsilon \to 0$ yields the desired result.

</div>

### Arc-length parametrization
For a rectifiable curve $\gamma : [a,b] \to \mathbb{R}^2$, let $L(A,B)$, $a \le A \le B \le b$, denote the length function.

<ul>

<li markdown="1">We define arc-length 
    $$S : [a,b] \to [0, L] \text{ by } S(t) = L(a,t).$$
</li>
<li markdown="1">The arc-length parameterization of $\gamma$ is 
    $$\tilde{z}(s) = \tilde{x}(s) + i\tilde{y}(s) \text{ where }\tilde{z}(s) = z(t), s = S(t).$$

</li>
</ul>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.3.**

$\tilde{x}, \tilde{y}$ are absolutely continuous, $|\tilde{z}'(s)| = 1$ for almost everywhere $s \in [0, L]$, and 
$$L = \int_0^L \sqrt{\tilde{x}'(s)^2 + \tilde{y}'(s)^2} ds.$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Note that 
\[
|\tilde{z}(s_1) - \tilde{z}(s_2)| \le |s_1 - s_2| \quad \text{for all } s_1, s_2 \in [0, L].
\]
Thus, $\tilde{z}$ is absolutely continuous and $|\tilde{z}'| \le 1$ almost everywhere.
Moreover, by Theorem 4.2, $L = \int_0^L |\tilde{z}'(s)| ds$. This completes the proof.

</div>

<!-- prettier-ignore-end -->

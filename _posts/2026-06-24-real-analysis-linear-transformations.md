---
layout: post
title: "Real Analysis 16: Linear Transformations and the Riesz Representation Theorem"
date: 2026-06-24 12:00:00 +0900
description: "유계 선형변환, 선형범함수, Riesz 표현정리와 adjoint를 정리한다."
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

<ol>

<li markdown="1">A mapping $T : H_1 \to H_2$ is **linear** if 
    $$T(af + bg) = aT(f) + bT(g)$$
    for all $a, b \in \mathbb{C}$ and $f, g \in H_1$.
</li>
<li markdown="1">A linear operator $T$ is **bounded** if there exists $M < \infty$ such that 
    $$||T(f)||_{H_2} \le M ||f||_{H_1} \text{ for all } f \in H_1.$$
</li>
<li markdown="1">The norm of $T \coloneq ||T|| \coloneq \inf M \ge 0$.
</li>
<li markdown="1">A linear operator $T$ is **continuous** if $T(f_n) \to T(f)$ whenever $f_n \to f$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 5.1.**

$||T|| = \sup \left\{ |(Tf, g)| : ||f||, ||g|| \le 1 \right\} $.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($\ge$) If $||T|| \le M$, the Cauchy-Schwarz inequality gives 
$$|(Tf, g)| \le ||Tf|| ||g|| \le M$$
whenever $||f|| \le 1$ and $||g|| \le 1$. Hence,
\[
||Tf|| ||g|| \le M \implies ||Tf|| ||g|| \le \inf M = ||T||.
\] 
Taking the infimum over $M$ gives the inequality ($\ge$).

($\le$) Suppose the right-hand side $\le M$.
    ETS : $||Tf|| \le M||f||$ for all $f$

<ol>

<li markdown="1">If $f = 0$, there is nothing to prove.
</li>
<li markdown="1">If $f \neq 0$, we take
        \[
        f' = \frac{f}{||f||} \text{ and } g' = \frac{Tf}{||Tf||}.
        \]
        Since $||f'|| = ||g'|| = 1$, we have
        \[
        M \ge |(Tf', g')| = \frac{1}{||f|| ||Tf||} |(Tf, Tf)| = \frac{||Tf||}{||f||}.
        \]

</li>
</ol>
 

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 5.2.**

A linear operator $T : H_1 \to H_2$ is bounded if and only if it is continuous.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($\implies$) is clear since $||Tf - Tf_n|| \le M ||f - f_n||$.

($\impliedby$) If $T$ is continuous, but not bounded, then for each $n$, 
    there exists $f_n \neq 0$ such that $||Tf_n|| \ge n ||f_n||$.
Let 
$$g_n = \frac{f_n}{n ||f_n||}, \text{ then } ||g_n|| = \frac{1}{n} \to 0 \text{ as } n \to \infty.$$ 
Since $T$ is continuous, $T(g_n) \to 0$ which contradicts $||Tg_n|| \ge 1$.<span class="real-analysis-footnote">Note: Since $Tg_n = \frac{Tf_n}{n||f_n||} \implies ||Tg_n|| = \frac{||Tf_n||}{n||f_n||} \ge 1$</span>
</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Any linear operator between finite dimensional Hilbert spaces is continuous.

</div>

### 4.5.1 Linear functionals and the Riesz representation theorem
<div class="real-analysis-statement" markdown="1">

**Definition.**
A linear operator $l : H \to \mathbb{C}$ is called a **linear functional**.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 5.3 (Riesz).**

If $l$ is a continuous linear functional, then there exists $g \in H$ such that 
    $l(f) = (f, g)$ for all $f \in H$.
Moreover, $||l|| = ||g||_{H}$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
The so-called null space 
$$S = \{f \in H : l(f) = 0\}$$ 
of $l$ is a closed subspace of $H$, since $l$ is continuous.

<ol>

<li markdown="1">If $S = H$, then $l = 0$ and we take $g = 0$.
</li>
<li markdown="1">Suppose $S \neq H$. <span class="real-analysis-footnote">Note: Idea of the proof: If $f = f_1 + f_2 \in S \oplus S^\perp$, then 
        $$l(f) = (f, g) \iff l(f_1) + l(f_2) = (f_1, g) + (f_2, g).$$
        Note that $l(f_1) = 0$. Since $l(f_1) + l(f_2)$ is independent of $f_1$, we must have $$(f_1, g) = 0.$$
        That is, we must look for $g$ in $S^\perp$.</span> We take $0 \neq h \in S^\perp$. Since 
    $$u \coloneq l(f)h - l(h)f \in S = \ker l$$ 
    we have 
    $$0 = (u, h) = l(f)(h, h) - l(h)(f, h).$$
    Thus, 
    \[
    g \coloneq \frac{\overline{l(h)}}{||h||^2} h \quad \text{ gives } \quad l(f) = (f, g). 
    \]
    <span class="real-analysis-footnote">Note: $l(f)h - l(h)f \in S = \ker l$ since 
        $$l(l(f)h - l(h)f) = l(f)l(h) - l(h)l(f) = 0.$$
        Last equality comes from 
        \begin{align*}
            l(f)(h,h) - l(h)(f,h) = 0 
            &\implies l(f)||h||^2 = l(h)(f,h) \
            &\implies l(f) = \frac{l(h)}{||h||^2}(f, h) = \left(f, \frac{\overline{l(h)}}{||h||^2} h\right)
        \end{align*}</span>

</li>
</ol>

</div>

### 4.5.2 Adjoints
<div class="real-analysis-statement" markdown="1">

**Proposition 5.4.**

Let $T : H \to H$ be a bounded linear transformation. Then there exists a unique bounded linear transformation $T^*$ on $H$ such that

<ol>

<li markdown="1">$(Tf, g) = (f, T^*g)$
</li>
<li markdown="1">$||T|| = ||T^*||$
</li>
<li markdown="1">$(T^*)^* = T$

</li>
</ol>

$T^*$ is called the adjoint of $T$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
For each fixed $g \in H$, define the linear functional $l : H \to \mathbb{C}$ by 
$$l(f) = (Tf, g).$$
Then,
\begin{align*}
|l(f)| = |(Tf, g)| 
&\le ||Tf|| ||g|| \
&\le (||T|| ||g||) ||f||.
\end{align*}
that is, $l$ is bounded. Thus, by the Riesz representation theorem, 
    there exists a unique $h = h_g \in H$ such that $l(f) = (f, h)$.
We define $T^* : H \to H$ by $T^*g = h$. Hence, (i) is clear.

Also, 
\begin{align*}
||T||
&= \sup \{|(Tf, g)| : ||f||, ||g|| \le 1\} \
&= \sup \{|(f, T^*g)| : ||f||, ||g|| \le 1\} = ||T^*||    
\end{align*}
This gives (ii).
Finally, we have 
$$(T^*f, g) = \overline{(g, T^*f)} = \overline{(Tg, f)} = (f, Tg)$$
This implies $(T^*)^* = T$.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
A linear operator $T$ is **symmetric, hermitian or self-adjoint** if $T = T^*$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

If $T = T^*$, then 
$$||T|| = \sup \{|(Tf, f)| : ||f|| = 1\}.$$
Indeed, by Lemma 5.1, $||T|| = \sup \{|(Tf, g)| : ||f||, ||g|| \le 1\}$. Thus, ($\ge$) is clear.

</div>

<!-- prettier-ignore-end -->

---
layout: post
title: "Real Analysis 5: The Lebesgue Integral"
date: 2026-03-27 12:00:00 +0900
description: "단순함수에서 일반 가측함수까지 르베그 적분을 구성하고 주요 수렴정리를 증명한다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

All functions are assuemd to be measurable from now on.

### Stage 1 : Simple functions
<div class="real-analysis-statement" markdown="1">

**Canonical representation of simple functions.**

    Let $\varphi$ be a simple function. Then, 
    $$\varphi = \sum_{k=1}^{N} a_k \chi_{E_k}$$
    is said to be a canonical representation of $\varphi$, if $E_k$ are disjoint and $a_k$ are distinct.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
Let $\varphi = \sum_{k=1}^{N} a_k \chi_{E_k}$ be a simple function with canonical representation.
The Lebesgue integral of $\varphi$ is defined by
\[
\int_{\mathbb{R}^d} \varphi(x) dx = \sum_{k=1}^{N} a_k m(E_k)
\]<span class="real-analysis-footnote">Note: If $d=1$, $\int_{\mathbb{R}} := \int_{-\infty}^{\infty}$</span>
Equivalently, we write $\int f dm$, $\int_{\mathbb{R}^d} f dm$, $\int_{\mathbb{R}^d} f dx$, $\int_E f$ to denote the Lebesgue integral of $f$.

If $E \in \mathcal{M}$ with $m(E) < \infty$, then 
\[
\int_E \varphi dx := \int_{\mathbb{R}^d} \varphi \cdot \chi_E dx
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

    
<ol>

<li markdown="1">$\int \varphi$ is independent of the representation of $\varphi$;
        <span class="real-analysis-footnote">Note: Thus, the choice of simple functions does not change the Lebesgue integral.</span> i.e. if $\varphi = \sum_{k=1}^{N} a_k \chi_{E_k}$, then
        \[
        \int \varphi = \sum_{k=1}^{N} a_k m(E_k).
        \]

</li>
<li markdown="1">(Linearity) If $\varphi, \psi$ are simple and $a, b \in \mathbb{R}$, then 
        \[
        \int (a\varphi + b\psi) = a\int \varphi + b\int \psi.
        \]

</li>
<li markdown="1">(Additivity) If $E, F \in \mathcal{M}$ with $m(E), m(F) < \infty$ are disjoint, then 
        \[
        \int_{E \cup F} \varphi = \int_E \varphi + \int_F \varphi.
        \]

</li>
<li markdown="1">(Monotonicity) If $\varphi \le \psi$ are simple, then $\int \varphi \le \int \psi$.

</li>
<li markdown="1">(Triangle inequality) $\displaystyle \left|\int \varphi\right| \le \int |\varphi|$.

</li>
<li markdown="1">If $\varphi, \psi$ are simple and $\varphi = \psi$ a.e., then $\int \varphi = \int \psi$.
    
</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Let $\varphi = \sum_{k=1}^{N} a_k \chi_{E_k}$ be any representation of $\varphi$. 
    
    We may assume that $E_k$ are disjoint. <span class="real-analysis-footnote">Note: See Exercise 1 of Chapter 2.</span>
    For each $a \in \{a_k\}$, we define 
    \[
    E_a' = \bigcup_{k : a_k = a} E_k
    \]
    Then the sets $E_a'$ are disjoint, 
    $$m(E_a') = \sum_{k : a_k = a} m(E_k).$$
    Thus, $\varphi = \sum_{a \in A} a \cdot \chi_{E_a'}$ is of canonical form where set $A$ denotes the set of distinct nonzero values of $\{a_k\}$, namely
    \[
    A \coloneq \{a \in \{a_k\} : a \neq 0\}.
    \]
    Hence, we get
    \[
    \int \varphi = \sum_{a \in A} a \cdot m(E_a') = \sum_{k=1}^{N} a_k m(E_k)
    \]

</li>
</ol>

</div>

### Stage 2. Bounded functions supported on a set of finite measure
<div class="real-analysis-statement" markdown="1">

**Definition.**

<ol>

<li markdown="1">Support of $f \coloneq \text{supp } f \coloneq \{x : f(x) \neq 0\}$.
</li>
<li markdown="1">A **function $f$ is supported on $E$** if $f(x) = 0$ whenever $x \notin E$. 
</li>
<li markdown="1">A **function $f$ is supported on $E$ a.e.** if $E' = \{x \in E : f(x) \neq 0\} \implies m(E') = 0$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2.**

Let $f$ be a bounded function supported on a set $E$ of finite measure. If $\{\varphi_n\}_{n=1}^{\infty}$ is any sequence of simple functions bounded by $M$, supported on $E$, and with $\varphi_n(x) \to f(x)$ for a.e. $x$, then

<ol>

<li markdown="1">$\lim_{n \to \infty} \int \varphi_n$ exists,
</li>
<li markdown="1">If $f = 0$ a.e., then $\lim_{n \to \infty} \int \varphi_n = 0$.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">The idea of proof is using completeness of $\mathbb{R}$. This is possible from the fact that sequence $\{\int \varphi_n\}$ is the sequence of real numbers. Thus it is enough to show that $\{\int \varphi_n\}$ is Cauchy.
    ETS : $\left|\int \varphi_n - \int \varphi_m\right| \le \int |\varphi_n - \varphi_m| < \epsilon$
    
    Let $\epsilon > 0$, then by Egorov's theorem, $\exists$ closed set $A_\epsilon \subset E$ such that
    \[
    m(E \setminus A_\epsilon) \le \epsilon \text{ and } \varphi_n \rightrightarrows f \text{ on } A_\epsilon.
    \]
    
    Then $\exists \: n_0 \in \mathbb{N}$ such that
    \[
    |\varphi_n(x) - \varphi_m(x)| < \epsilon \quad \forall \: n, m \ge n_0 \;, \: \forall \: x \in A_\epsilon.
    \]
    Thus, 
    \begin{align*}
    \left|\int \varphi_n - \int \varphi_m\right| &\le \int_E |\varphi_n - \varphi_m| \
    &= \int_{A_\epsilon} |\varphi_n - \varphi_m| + \int_{E \setminus A_\epsilon} |\varphi_n - \varphi_m| \
    &\le \int_{A_\epsilon} \epsilon + \int_{E \setminus A_\epsilon} 2M  \
    &\le \epsilon m(A_\epsilon) + 2M m(E \setminus A_\epsilon) \
    &\le \epsilon m(E) + 2M\epsilon
    \end{align*}
    <span class="real-analysis-footnote">Note: Since $\varphi_n$ is bounded by $M$, we have $|\varphi_n - \varphi_m| \le |\varphi_n| + |\varphi_m| \le 2M$.</span>
    holds for all $n, m \ge n_0$. Thus, $\left\{\int \varphi_n\right\}$ is Cauchy in $\mathbb{R}$.
</li>
<li markdown="1">Similarly,
    ETS : $\left|\int \varphi_n - 0\right| = \left|\int \varphi_n\right| \le \int |\varphi_n| < \epsilon$
    The same proof shows that 
    \begin{align*}
    \left|\int \varphi_n\right| &\le \int_{A_\epsilon} |\varphi_n| + \int_{E \setminus A_\epsilon} |\varphi_n| \
    &\le \epsilon m(E) + M\epsilon
    \end{align*}
    holds for all $n, m \ge n_0$

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
For such a function $f$, the (Lebesgue) integral of $f$ is defined by
\[
\int_{\mathbb{R}^d} f := \lim_{n \to \infty} \int \varphi_n
\]
where $\{\varphi_n\}$ is any sequence of simple functions satisfying:

<ol>

<li markdown="1">$|\varphi_n| \le M$ for some $M > 0$,
</li>
<li markdown="1">each $\varphi_n$ is supported on $\supp f$,
</li>
<li markdown="1">$\varphi_n \to f$ a.e. $x$ as $n \to \infty$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

    We always have to check well-definedness. That is, we must show that $\int f$ is independent of the limiting sequence $\{\varphi_n\}$. 
    
    Suppose that $\{\psi_n\}$ is another sequence as above. 
    Then $\eta_n := \varphi_n - \psi_n$ is a sequence of simple functions such that
    \[
    |\eta_n| \le 2M, \quad m(\supp \eta_n) < \infty \quad \text{and } \eta_n \to 0 \: \text{ a.e. as } n \to \infty.
    \]
    Thus, $\lim_{n \to \infty} \int \eta_n = 0$, which implies that
    \[
    \lim_{n \to \infty} \int \varphi_n = \lim_{n \to \infty} \int \psi_n.
    \]

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
If $m(E) < \infty$ and if $f$ is as above, then 
    \[
    \int_E f := \int f \cdot \chi_E
    \]

</div>

From now on, we face following question:
\bigskip
<div class="real-analysis-statement" markdown="1">

**Question.**

$\lim \int f_n = \int f$ if $f_n \to f$ a.e. on $E$ ?

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Not in general!

</div>

\bigskip
However, with some additional conditions, it is true. This question leads us to study several convergence theorems.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.4 (Bounded Convergence Theorem; BCT).**

Let $\{f_n\}$ be a sequence of measurable functions s.t. $|f_n| \le M$, $\text{supp}(f_n) \subset E \: \: \forall n \in \mathbb{N}$ with $m(E) < \infty$, and $f_n \to f$ a.e. on $E$ as $n \to \infty$.

    Then $f$ is measurable, bounded a.e., supported on $E$ ($\text{supp}(f) \subset E$) a.e., and 
\[
\int |f_n - f| \to 0 \quad \text{as } n \to \infty
\]
In particular, $\int f_n \to \int f$ as $n \to \infty$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We can use same argument as in the proof of Lemma 1.2:
    ETS : $\exists \: n_0 \in \mathbb{N}$ such that for all $n \ge n_0$, 
    $\left|\int |f_n - f| - 0\right| = \left|\int |f_n - f|\right| = \int |f_n - f| < \epsilon$    

Since $m(E) < \infty$ and $f_n \to f \text{ a.e. on } E$, we can apply Egorov's theorem. Let $\epsilon > 0$. Then,
\[
\exists \: A_\epsilon \subset E \text{ such that } m(E \setminus A_\epsilon) \le \epsilon \text{ and } f_n \rightrightarrows f \text{ on } A_\epsilon.
\]
Therefore there exists $n_0 \in \mathbb{N}$ such that for all $n \ge n_0$ and for all $x \in A_\epsilon$,
\[
|f_n(x) - f(x)| < \epsilon.
\]
Furthermore, since $|f_n| \le M$ for all $n$, we have
\[
|f_n(x) - f(x)| \le |f_n(x)| + |f(x)| \le 2M \quad \text{ for all } n \in \mathbb{N}, \: x \in E.
\]
Combining all inequalities above, we get
\begin{align*}
    \int |f_n - f| &= \int_{A_\epsilon} |f_n - f| + \int_{E \setminus A_\epsilon} |f_n - f| \
    &\le \int_{A_\epsilon} \epsilon + \int_{E \setminus A_\epsilon} 2M \
    &\le \epsilon m(E) + 2M m(E \setminus A_\epsilon) \
    &\le \epsilon m(E) + 2M\epsilon
\end{align*}
for all $n \ge n_0$. Since $\epsilon$ was arbitrary, $\int |f_n - f| \to 0$ as $n \to \infty$. Moreover,
\[
\left|\int f_n - \int f\right| \le \int |f_n - f| \to 0 \quad \text{ as } n \to \infty.
\]
which implies that $\int f_n \to \int f$ as $n \to \infty$.

</div>

<div class="real-analysis-statement" markdown="1">

**Cororally of BCT.**

If $0 \le f \le M$, $m(\supp f) < \infty$ and $\int f = 0$, then $f = 0$ a.e.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
The idea of proof is to make the measure of the set $\{x : f(x) > 0\}$ be zero. \\
For each $k \ge 1$, we set
\[
E_k = \{x : f(x) \ge 1/k\}
\]
which is the sequence of sets of points where $f$ is positive. It then follows from
<span class="real-analysis-footnote">Note: If $x \in E_k$, then $f(x) \ge \frac{1}{k} = \frac{1}{k}\chi_{E_k}(x)$. If $x \notin E_k$, then $f(x) \ge 0 = \frac{1}{k}\chi_{E_k}(x)$.</span> 
\[
\frac{1}{k}\chi_{E_k}(x) \le f(x) \quad \text{ for all } x \in E \text{ and for all } k \ge 1
\]
since $\int \chi_{E_k} = m(E_k)$, we have
\[
\frac{1}{k} m(E_k) \le \int f = 0 \quad \forall \: k \ge 1.
\]
Thus, 
\[
m(\{x : f(x) > 0\}) = m\left(\bigcup_{k=1}^\infty E_k\right) \le \sum_{k=1}^\infty m(E_k) = 0
\]

</div>

### Return to Riemann integrable functions
We shall show that every Riemann integrable function is Lebesgue integrable and the two integrals coincide. Furthermore, this led us to following question:

<div class="real-analysis-statement" markdown="1">

**Question.**

$\lim_{n \to \infty} \int f_n = \int f$ ?

</div>

<div class="real-analysis-proof" markdown="1">

*Answer.*

 Not in general, true for some conditions.    

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.5.**

Suppose $f \in R[a,b]$. Then, $f$ is measurable and 
\[
\int_a^b f = \int_{[a,b]} f
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Since $f \in R[a,b]$, $\exists$ sequences of step functions $\{\varphi_k\}$ and $\{\psi_k\}$
<span class="real-analysis-footnote">Note: $\{\varphi_k\}$ and $\{\psi_k\}$ represents the lower and upper sum, respectively in the sence of step functions.</span> such that 
\[
\varphi_1 \le \varphi_2 \le \dots \le f \le \dots \le \psi_2 \le \psi_1 \quad \text{,} \quad |\varphi_k|, |\psi_k| \le M \quad \forall \: k \ge 1 \quad \text{ and }
\]
\[
\lim_{k \to \infty} \int_a^b \varphi_k = \int_a^b f = \lim_{k \to \infty} \int_a^b \psi_k \tag{$\ast$}
\]
Let $\tilde{\varphi} = \lim_{k \to \infty} \varphi_k$ and $\tilde{\psi} = \lim_{k \to \infty} \psi_k$.
Since $\varphi_k$ and $\psi_k$ are step functions, 
\[
\int_a^b \varphi_k = \int_{[a,b]} \varphi_k \quad \text{and} \quad \int_a^b \psi_k = \int_{[a,b]} \psi_k \quad \forall \: k \tag{$\ast\ast$}
\]
Then, $\tilde{\varphi}$ and $\tilde{\psi}$ are measurable
<span class="real-analysis-footnote">Note: In property 4 of measurable function, it says that if $\{f_n\}$ is a sequence of measurable functions and $f_n \to f$ a.e., then $f$ is also measurable. Since each step functions are measurable, $\tilde{\varphi}$ and $\tilde{\psi}$ are also measurable from the fact that $\varphi_k \to \tilde{\varphi}$ and $\psi_k \to \tilde{\psi}$ a.e. as $k \to \infty$.</span> and $\tilde{\varphi} \le f \le \tilde{\psi}$.

Now the Bounded Convergence Theorem shows that
\begin{align*}
\int_{[a,b]} \tilde{\varphi} &= \lim_{k \to \infty} \int_{[a,b]} \varphi_k \tag{$\because$ BCT}\
&= \lim_{k \to \infty} \int_{[a,b]} \psi_k \tag{$\because$ ($\ast$) and ($\ast\ast$)} \
&= \int_{[a,b]} \tilde{\psi} \tag{$\because$ BCT}
\end{align*}
Note that $\tilde{\varphi} \le \tilde{\psi} \implies 0 \le \tilde{\psi} - \tilde{\varphi} \le M$ and
\[
\int_{[a, b]} \tilde{\psi} = \int_{[a, b]} \tilde{\varphi} \implies \left(\int_{[a, b]} \tilde{\psi} - \int_{[a, b]} \tilde{\varphi}\right) = \int_{[a, b]} (\tilde{\psi} - \tilde{\varphi}) = 0.
\]
Thus, $\tilde{\varphi} = \tilde{\psi}$ a.e. by Corollary of BCT. 
Since $f = \tilde{\varphi} = \tilde{\psi}$ a.e. , $f$ is measurable.
<span class="real-analysis-footnote">Note: Property 6 of measurable function says that if $f$ is measurable and $f = g$ a.e., then $g$ is also measurable.</span>

Finally, since $\varphi_k \to f$ a.e. we have by definition
\begin{align*}
\int_{[a,b]} f &= \lim_{k \to \infty} \int_{[a,b]} \varphi_k \
&= \lim_{k \to \infty} \int_a^b \varphi_k \tag{$\because$ ($\ast\ast$)}\ 
&= \int_a^b f.\tag{$\because$ ($\ast$)}
\end{align*}

</div>

### Stage 3. Nonnegative functions
<div class="real-analysis-statement" markdown="1">

**Definition.**
The (Lebesgue) integral of $f: \mathbb{R}^d \to [0,\infty)$ is defined by
\[
\int_{\mathbb{R}^d} f = \sup_g \int_{\mathbb{R}^d} g 
\]
<span class="real-analysis-footnote">Note: Let $G = \{ g : g \text{ is measurable, } 0 \le g \le f, \text{ and } m(\supp g) < \infty \}$. Then, 
    \[
    \int_{\mathbb{R}^d} f = \sup \left\{\int_{\mathbb{R}^d} g : g \in G \right\}
    \]</span>
where the supremum is taken over all bounded functions $g$ supported on a set of finite measure,
\[
\text {s.t. } 0 \le g \le f.
\]
If $\int f < \infty$, we say that $f$ is (Lebesgue) integrable. 

For $E \in \mathcal{M}$, and $f \ge 0$, 
\[
\int_E f := \int f \chi_E
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.6.**

<ol>

<li markdown="1">Linearity: $\int (af + bg) = a\int f + b\int g$
</li>
<li markdown="1">Additivity
</li>
<li markdown="1">Monotonicity
</li>
<li markdown="1">If $g$ is integrable and $0 \le f \le g$, then $f$ is integrable.
</li>
<li markdown="1">If $f \ge 0$ is integrable, then $f(x) < \infty$ for a.e. $x$.
</li>
<li markdown="1">If $\int f = 0$ and $f \ge 0$, then $f = 0$ a.e.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">WTS : $\int (af + bg) = a\int f + b\int g \quad$ if $f, g \ge 0 $ and $ a, b \ge 0$. \\
    ($\ge$) Let $0 \le \varphi \le f$ and $0 \le \psi \le g$ where $\varphi$ and $\psi$ are bounded and supported on a set of finite measure.
    Then 
    \[
    \int(af + bg) \ge \int(a\varphi + b\psi) = a\int \varphi + b\int \psi
    \]
    Taking $\sup_{\varphi}$ and $\sup_{\psi}$ gives the inequality.

    ($\le$) Let $0 \le \eta \le af + bg$ where $\eta$ is bounded and supported on a set of finite measure.
    Since 
    \begin{align*}
    \eta \le af + bg &\iff 0 \le \eta - af \le bg\
    &\iff 0 \le \frac{1}{b}\eta - \frac{a}{b}f \le g
    \end{align*}
    We define 
    \begin{align*}
        \eta_1 &= \min\left\{f, \frac{\eta}{a}\right\} \
        \eta_2 &= \frac{1}{b}\eta - \frac{a}{b}\eta_1
    \end{align*}
    Thereby $\eta_1 \le f$ and
    \[
    \eta_2 = \begin{cases} 
        \frac{\eta}{b} - \frac{a}{b} f \le g & \text{if } f \le \frac{\eta}{a} \ 
        \frac{\eta}{b} - \frac{\eta}{b} = 0 \le g & \text{if } f \ge \frac{\eta}{a} 
    \end{cases} 
    \]
    Hence, 
    \begin{align*}
    \int \eta &= \int(a\eta_1 + b\eta_2) \
    &= a\int \eta_1 + b\int \eta_2 \
    &\le a\int f + b\int g 
    \end{align*}
    Taking $\sup_{\eta}$ completes the proof.
    \addtocounter{enumi}{3}
</li>
<li markdown="1">Let $E_k = \{f \ge k\}$ and $E_\infty = \{f = \infty\}$. 
    Then 
    \begin{align*}
    \int f &\ge \int f \chi_{E_k} \
    &\ge \int k \chi_{E_k} = k m(E_k) \implies m(E_k) \le \frac{1}{k} \int f
    \end{align*}
    and hence $m(E_k) \to 0$ as $k \to \infty$.
    Since $E_k \searrow E_\infty$, 
    \[
    m(E_\infty) = \lim_{k \to \infty} m(E_k) = 0.
    \]
    Therefore, $\{f(x) = \infty\}$ has measure zero, which implies that $f(x) < \infty$ for a.e. $x$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Question.**

If $f_n \ge 0$ and $\lim_{n \to \infty} f_n = f$ a.e., then is $\lim_{n \to \infty} \int f_n = \int f$ true?

</div>

<div class="real-analysis-proof" markdown="1">

*Answer.*

No! Observe that $f_n = n\chi_{(0, \frac{1}{n})} \to 0$ a.e. but $\int f_n = 1$.

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 1.7 (Fatou).**

If $\{f_n\}$ is a sequence of measurable functions with $f_n \ge 0$. \\
If $\: \lim_{n \to \infty} f_n = f$ a.e., then 
\[
\int f \le \liminf_{n \to \infty} \int f_n
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $g$ be bounded function supported on $E$ with $m(E) < \infty$ such that
\[
m(\supp g) < \infty \quad \text{ and } \quad 0 \le g \le f
\]
Let $g_n = \min\{g, f_n\} \le g$, then $g_n$ is bounded, measurable, and supported on E, and $g_n \to g$ a.e. Then by BCT, 
\[
\int g_n \to \int g
\]
By construction of $g_n$,
\[
g_n \le f_n \implies \int g_n \le \int f_n \implies \liminf_{n \to \infty} \int g_n \le \liminf_{n \to \infty} \int f_n
\]
Since $\lim_{n \to \infty} \int g_n = \int g$,
\[
\int g = \lim_{n \to \infty} \int g_n = \liminf_{n \to \infty} \int g_n \le \liminf_{n \to \infty} \int f_n
\]
Taking $\sup_{g}$ finishes the proof.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.9 (Monotone Convergence Theorem).**

Assume that $0 \le f_n \nearrow f$ a.e. Then 
\[
\lim_{n \to \infty} \int f_n = \int f
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Note that $f_n$ is sequence of nonnegative measurable functions. Hence,
\[
f_n \le f \implies \int f_n \le \int f \implies \limsup_{n \to \infty} \int f_n \le \int f
\]
with the Fatou's lemma, we have
\[
\limsup_{n \to \infty} \int f_n \le \int f \le \liminf_{n \to \infty} \int f_n.
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.10.**

If $a_k(x) \ge 0 \quad \forall \: k \ge 1$, then
\[
\int \sum_{k=1}^\infty a_k(x) dx = \sum_{k=1}^\infty \int a_k(x) dx \tag{$*$}
\]
If this value is finite, then the series $\sum a_k(x)$ converges for a.e. $x$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Since 
$$f_n := \sum_{k=1}^n a_k \nearrow \sum_{k=1}^\infty a_k =: f.$$
Then, ($*$) follows from MCT.

</div>

### Stage 4. General case
<div class="real-analysis-statement" markdown="1">

**Definition.**
$f$ is (Lebesgue) integrable if $|f|$ is integrable. Its (Lebesgue) integral is defined by
\[
\int f := \int f_+ - \int f_-
\]
If $E \in \mathcal{M}$ then
\[
\int_E f := \int f \chi_E
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

    Now check well-definedness. \\
    If $f = f_1 - f_2 = g_1 - g_2$ with $f_i, g_i \ge 0$, $i=1,2$ then $f_1 + g_2 = f_2 + g_1 \ge 0$. Thus,
    \[
    \int(f_1 + g_2) = \int(f_2 + g_1)
    \]
    or equivalently,
    \[
    \int f_1 - \int f_2 = \int g_1 - \int g_2
    \]

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.11.**

The integral is linear, additive, monotonic, and satisfies the triangle inequality.

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.12.**

Let $f$ be integrable on $\mathbb{R}^d$. Then $\forall \epsilon > 0$,

<ol>

<li markdown="1">$\exists \: B$: ball $\in \mathcal{M}$ with $m(B) < \infty$ such that 
    $$\int_{B^c} |f| < \epsilon$$
</li>
<li markdown="1">$\exists \: \delta > 0$ such that 
    $$\int_E |f| < \epsilon \quad \text{whenever } m(E) < \delta.$$

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We may assume that $f \ge 0$.

<ol>

<li markdown="1">Define $f_N := f \chi_{B_N}$ so that $\int f_N = \int_{B_N} f$. Since $f_N := f \chi_{B_N} \nearrow f$, the MCT shows that
    \[
    \lim_{N \to \infty} \int f_N = \int f.
    \]
    Thus, $\exists \: N_0 \in \mathbb{N}$ s.t.
    \[
    0 \le \int f - \int f_{N_0} = \int_{B_{N_0}^c} f < \epsilon.
    \]
</li>
<li markdown="1">Let $E_N = \{f \le N\}$, then 
    \[
    f_N := f \chi_{E_N} \nearrow f
    \]
    By the MCT
    <span class="real-analysis-footnote">Note: Since $f$ is integrable, $\int f < \infty$. MCT shows that $\int f_N \to \int f$ as $N \to \infty$. Thus,
        \begin{align*}
            \int f_N \to \int f \text{ as } N \to \infty
            &\implies \int f - \lim_{N \to \infty} \int f_N = 0 \
            &\implies \lim_{N \to \infty}\left(\int f - \int f_N\right) = 0 \
            &\implies \lim_{N \to \infty} \int (f - f_N) = 0
        \end{align*}</span>, $\exists \: N_0 \in \mathbb{N}$ such that
    \[
    \int(f - f_{N_0}) < \epsilon/2
    \]
    Now pick $\delta > 0$ such that $N_0 \delta < \frac{\epsilon}{2}$. If $m(E) < \delta$, then
    \begin{align*}
    \int_E f &= \int_E (f - f_{N_0}) + \int_E f_{N_0} \
    &\le \int (f - f_{N_0}) + \int_E N_0 \tag{$\because$ $f_{N_0} \le N_0$} \
    &\le \int (f - f_{N_0}) + N_0 m(E) \
    &< \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
    \end{align*}

</li>
</ol>

</div>

Note that even though $f$ is integrable, this does not necessarily imply that
\[
f(x) \to 0 \quad \text{as } |x| \to \infty.
\]
To show this, see Exercise 6 of Chapter 2.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.13 (Dominated Convergence Theorem).**

Suppose that $f_n \to f$ a.e.  \\
If $|f_n| \le g$ for some $g$ integrable, then 
\[
\lim_{n \to \infty} \int |f_n - f| = 0, \quad \text{and}
\]
consequently, 
$$\lim_{n \to \infty} \int f_n = \int f$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $E_N = \{x \in B_N : g(x) \le N\}$. Then 
\[
g \chi_{E_N} \to g
\]
By the MCT, we know that $\lim_{N \to \infty} \int_{E_N} g = \int g$, there exists $N_0 \in \mathbb{N}$ such that
\[
0 \le \int g - \int_{E_{N_0}} g \: = \int_{E_{N_0}^c} g \: \le \: \frac{\epsilon}{3}
\]

Now, consider sequence $\{f_n \chi_{E_{N_0}}\}$, which is bounded by $N_0$ and supported on a set of finite measure. 
The BCT shows that
\[
\int |f_n - f| \to 0 \implies \int_{E_{N_0}} |f_n - f| < \frac{\epsilon}{3} \qquad \text{for all large } n.
\]
Thus,
\begin{align*}
\int |f_n - f| &= \int_{E_{N_0}} |f_n - f| + \int_{E_{N_0}^c} |f_n - f| \
&\le \int_{E_{N_0}} |f_n - f| + \int_{E_{N_0}^c} |f_n| + \int_{E_{N_0}^c} |f| \
&\le \int_{E_{N_0}} |f_n - f| + \int_{E_{N_0}^c} g + \int_{E_{N_0}^c} g \
&< \frac{\epsilon}{3} + 2\int_{E_{N_0}^c} g \
&< \frac{\epsilon}{3} + 2 \cdot \frac{\epsilon}{3} = \epsilon
\end{align*}

</div>

### Complex-valued functions
If $f: \mathbb{R}^d \to \mathbb{C}$, then we write $f = u + iv$.

<div class="real-analysis-statement" markdown="1">

**Definition.**
$f$ is (Lebesgue) integrable if 
\[
|f| = (u^2 + v^2)^{1/2} \quad \text{is integrable.}
\]
The (Lebesgue) integral of $f$ is defined by
\[
\int f = \int u + i\int v
\]
For $E \in \mathcal{M}$, 
$$\int_E f := \int f \chi_E$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Note that
f is integrable $\iff$ $u$ and $v$ are integrable.
since $|u|, |v| \le |f|$ and $|f| \le |u| + |v|$.

</div>

<!-- prettier-ignore-end -->

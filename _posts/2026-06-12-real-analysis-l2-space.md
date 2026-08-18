---
layout: post
title: "Real Analysis 12: The Hilbert Space L2"
date: 2026-06-12 12:00:00 +0900
description: "L2 공간의 내적과 노름, 완비성과 분리가능성을 정리한다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

<div class="real-analysis-statement" markdown="1">

**$L^2$ space.**

<ol>

<li markdown="1">The space $L^2$ of square integrable functions is defined by
    \[
    L^2 \coloneq L^2(\mathbb{R}^d) \coloneq \left\{f : \mathbb{R}^d \to \mathbb{C} \text{ measurable} : \int_{\mathbb{R}^d} |f|^2 < \infty \right\}
    \]
    where $|f|^2 = f\overline{f}$.
</li>
<li markdown="1">The $L^2$-norm of $f$ is defined by
    \[
    ||f||_2 \coloneq ||f||_{L^2(\mathbb{R}^d)} = \left(\int_{\mathbb{R}^d} |f|^2\right)^{1/2}
    \]
</li>
<li markdown="1">The $L^2$-inner product of $f$ and $g$ is defined by
    \[
    (f, g) = \int_{\mathbb{R}^d} f \overline{g}
    \]

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">$||f||_2 = 0$ if and only if $f = 0$ a.e. Therefore, $L^2$ is in fact the space of equivalence classes.
</li>
<li markdown="1">$(f, f)^{1/2} = ||f||_2$ 
</li>
<li markdown="1">$||\cdot||_2$ is a norm and $(\cdot, \cdot)$ is an inner product by the following proposition.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

<ol>

<li markdown="1">$L^2$ is a vector space.
</li>
<li markdown="1">(Cauchy-Schwarz inequality) If $f, g \in L^2$, then $f\overline{g}$ is integrable and
    \[
    |(f, g)| \le ||f||_2 ||g||_2
    \]
</li>
<li markdown="1">For $g \in L^2$, the map $f \mapsto (f, g)$ is linear. Also, $(f, g) = \overline{(g, f)}$.
</li>
<li markdown="1">(The triangle inequality)
    \[
    ||f + g||_2 \le ||f||_2 + ||g||_2
    \]

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Clear.
</li>
<li markdown="1">Clearly,
        \[
        \int |f\overline{g}| \le \frac{1}{2}\int (|f|^2 + |g|^2) < \infty.
        \]
        
<ol>

<li markdown="1">If $||f||_2 = 0$ or $||g||_2 = 0$, then $f\overline{g} = 0$ a.e. Thus $(f, g) = 0$. 
</li>
<li markdown="1">If $||f||_2 = ||g||_2 = 1$, then $|(f, g)| \le \int |f\overline{g}| \le 1$. 
</li>
<li markdown="1">Suppose now that $||f||_2 \neq 0$ and $||g||_2 \neq 0$. Then 
            \[
            \tilde{f} = \frac{f}{||f||_2} \quad \text{and} \quad \tilde{g} = \frac{g}{||g||_2}
            \]
            satisfy $||\tilde{f}||_2 = ||\tilde{g}||_2 = 1$.
        
</li>
</ol>

        Hence, $|(\tilde{f}, \tilde{g})| \le 1$. Then, $|(f, g)| \le ||f||_2 ||g||_2$.
</li>
<li markdown="1">Clear.
</li>
<li markdown="1">By (ii) \& (iii),
        \begin{align*}
        ||f + g||_2^2 &= (f + g, f + g) \
        &= ||f||_2^2 + (f, g) + (g, f) + ||g||_2^2 \
        &\le ||f||_2^2 + 2||f||_2 ||g||_2 + ||g||_2^2 \
        &= (||f||_2 + ||g||_2)^2.
        \end{align*}

</li>
</ol>

</div>

Note that $L^2$-norm induces a metric $d(f, g) = ||f - g||_2$. Thus since we have metric on $L^2$ space, then we can do the geometry in $L^2$ space. Moreover, we can talk about the convergence in $L^2$ space. In particular, we will see that $L^2$ is complete and separable.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.2.**

$L^2$ is complete.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $\{f_n\}$ be Cauchy in $L^2$. We choose a subsequence $\{f_{n_k}\}$ of $\{f_n\}$ such that 
\[
||f_{n_{k+1}} - f_{n_k}||_2 < 2^{-k} \quad \forall \; k \ge 1.
\]
Let 
\begin{align*}
f &= f_{n_1} + \sum_{k=1}^{\infty} (f_{n_{k+1}} - f_{n_k}) \text{ and } \
g &= |f_{n_1}| + \sum_{k=1}^{\infty} |f_{n_{k+1}} - f_{n_k}|
\end{align*}
and denote by $S_K(f)$ and $S_K(g)$ their partial sums. Then
\begin{align*}
    ||S_K(g)||_2 
    &\le ||f_{n_1}||_2 + \sum_{k=1}^{K} ||f_{n_{k+1}} - f_{n_k}||_2 \
    &< ||f_{n_1}||_2 + \sum_{k=1}^{\infty} 2^{-k} < \infty.
\end{align*}
By the MCT, letting $K \to \infty$ shows that $$||g||_2 < \infty.$$ 

Since $|f| \le g$, we also have $f \in L^2$. In particular, $g < \infty$ a.e., and hence the series defining $f$ converges a.e. Thus, 
\[
S_{K-1}(f) = f_{n_K} \to f \quad \text{a.e.}
\]
Moreover, since 
\[
|f - S_K(f)| \le (2g)^2 \quad \text{for all } K \in \mathbb{N},
\]
it follows from the DCT that 
\[
f_{n_k} \to f \quad \text{in } L^2.
\]
Finally, recall that $\{f_n\}$ is Cauchy. So for all $\epsilon > 0$, there exists $N \in \mathbb{N}$ such that 
\[
||f_n - f_m||_2 < \frac{\epsilon}{2} \quad \forall \; n, m \ge N.
\]
Choose $k$ so that $n_k > N$. Then 
\[
||f_n - f||_2 \le ||f_n - f_{n_k}||_2 + ||f_{n_k} - f||_2 < \epsilon \quad \forall \; n > N.
\]

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3.**

$L^2$ is separable. i.e. there exists a countable dense subset of $L^2$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We claim that 
\[
\text{span} \{r\chi_R : R \text{ is rectangle with rational coordinates}\}
\]
is dense in $L^2$. Let $f \in L^2$ and $\epsilon > 0$. Consider 
\[
g_n(x) = 
\begin{cases}
f(x) & \text{if } |x| \le n \text{ or } |f(x)| \le n \
0 & \text{otherwise}
\end{cases}
\]
Then
\[
|f - g_n| \le (2|f|)^2 \quad \text{and} \quad g_n \to f \text{ a.e.}
\]
Thus, by DCT, there exists $N$ such that 
\[
||f - g_N||_2 < \frac{\epsilon}{2}.
\]

Let $g \coloneq g_N \in L^1$. Therefore, there exists a step function $\varphi$ such that 
\[
\int |g - \varphi| < \frac{\epsilon^2}{16N}
\]
We may also find a step function $\psi$ with coefficients in $\mathbb{Q} \times i\mathbb{Q}$ and rectangles with rational coordinates, such that
\[
|\psi| \le N \quad \text{ and } \quad \int |g - \psi| < \frac{\epsilon^2}{8N}
\]
Note that 
\[
\int |g - \psi|^2 \le 2N \int |g - \psi| < \frac{\epsilon^2}{4} = \left(\frac{\epsilon}{2}\right)^2.
\]
Consequently, 
\[
||f - \psi||_2 \le ||f - g||_2 + ||g - \psi||_2 < \epsilon.
\]

</div>

Exercise: 5.

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

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

<div class="real-analysis-statement" markdown="1">

**$$L^2$$ space.**

<ol>

<li markdown="1">The space $$L^2$$ of square integrable functions is defined by

$$
L^2 \coloneq L^2(\mathbb{R}^d) \coloneq \left\{f : \mathbb{R}^d \to \mathbb{C} \text{ measurable} : \int_{\mathbb{R}^d} \vert f\vert ^2 < \infty \right\}
$$

where $$\vert f\vert ^2 = f\overline{f}$$.
</li>
<li markdown="1">The $$L^2$$-norm of $$f$$ is defined by

$$
\vert \vert f\vert \vert _2 \coloneq \vert \vert f\vert \vert _{L^2(\mathbb{R}^d)} = \left(\int_{\mathbb{R}^d} \vert f\vert ^2\right)^{1/2}
$$

</li>
<li markdown="1">The $$L^2$$-inner product of $$f$$ and $$g$$ is defined by

$$
(f, g) = \int_{\mathbb{R}^d} f \overline{g}
$$

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">$$\vert \vert f\vert \vert _2 = 0$$ if and only if $$f = 0$$ a.e. Therefore, $$L^2$$ is in fact the space of equivalence classes.
</li>
<li markdown="1">$$(f, f)^{1/2} = \vert \vert f\vert \vert _2$$
</li>
<li markdown="1">$$\vert \vert \cdot\vert \vert _2$$ is a norm and $$(\cdot, \cdot)$$ is an inner product by the following proposition.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

<ol>

<li markdown="1">$$L^2$$ is a vector space.
</li>
<li markdown="1">(Cauchy-Schwarz inequality) If $$f, g \in L^2$$, then $$f\overline{g}$$ is integrable and

$$
\vert (f, g)\vert  \le \vert \vert f\vert \vert _2 \vert \vert g\vert \vert _2
$$

</li>
<li markdown="1">For $$g \in L^2$$, the map $$f \mapsto (f, g)$$ is linear. Also, $$(f, g) = \overline{(g, f)}$$.
</li>
<li markdown="1">(The triangle inequality)

$$
\vert \vert f + g\vert \vert _2 \le \vert \vert f\vert \vert _2 + \vert \vert g\vert \vert _2
$$

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Clear.
</li>
<li markdown="1">Clearly,

$$
\int \vert f\overline{g}\vert  \le \frac{1}{2}\int (\vert f\vert ^2 + \vert g\vert ^2) < \infty.
$$

<ol>

<li markdown="1">If $$\vert \vert f\vert \vert _2 = 0$$ or $$\vert \vert g\vert \vert _2 = 0$$, then $$f\overline{g} = 0$$ a.e. Thus $$(f, g) = 0$$.
</li>
<li markdown="1">If $$\vert \vert f\vert \vert _2 = \vert \vert g\vert \vert _2 = 1$$, then $$\vert (f, g)\vert \le \int \vert f\overline{g}\vert \le 1$$.
</li>
<li markdown="1">Suppose now that $$\vert \vert f\vert \vert _2 \neq 0$$ and $$\vert \vert g\vert \vert _2 \neq 0$$. Then

$$
\tilde{f} = \frac{f}{\vert \vert f\vert \vert _2} \quad \text{and} \quad \tilde{g} = \frac{g}{\vert \vert g\vert \vert _2}
$$

satisfy $$\vert \vert \tilde{f}\vert \vert _2 = \vert \vert \tilde{g}\vert \vert _2 = 1$$.

</li>
</ol>

Hence, $$\vert (\tilde{f}, \tilde{g})\vert \le 1$$. Then, $$\vert (f, g)\vert \le \vert \vert f\vert \vert _2 \vert \vert g\vert \vert _2$$.
</li>
<li markdown="1">Clear.
</li>
<li markdown="1">By (ii) \& (iii),

$$
\begin{aligned}
\vert \vert f + g\vert \vert _2^2 &= (f + g, f + g) \\
&= \vert \vert f\vert \vert _2^2 + (f, g) + (g, f) + \vert \vert g\vert \vert _2^2 \\
&\le \vert \vert f\vert \vert _2^2 + 2\vert \vert f\vert \vert _2 \vert \vert g\vert \vert _2 + \vert \vert g\vert \vert _2^2 \\
&= (\vert \vert f\vert \vert _2 + \vert \vert g\vert \vert _2)^2.
\end{aligned}
$$

</li>
</ol>

</div>

Note that $$L^2$$-norm induces a metric $$d(f, g) = \vert \vert f - g\vert \vert _2$$. Thus since we have metric on $$L^2$$ space, then we can do the geometry in $$L^2$$ space. Moreover, we can talk about the convergence in $$L^2$$ space. In particular, we will see that $$L^2$$ is complete and separable.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.2.**

$$L^2$$ is complete.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$\{f_n\}$$ be Cauchy in $$L^2$$. We choose a subsequence $$\{f_{n_k}\}$$ of $$\{f_n\}$$ such that

$$
\vert \vert f_{n_{k+1}} - f_{n_k}\vert \vert _2 < 2^{-k} \quad \forall \; k \ge 1.
$$

Let

$$
\begin{aligned}
f &= f_{n_1} + \sum_{k=1}^{\infty} (f_{n_{k+1}} - f_{n_k}) \text{ and } \\
g &= \vert f_{n_1}\vert  + \sum_{k=1}^{\infty} \vert f_{n_{k+1}} - f_{n_k}\vert
\end{aligned}
$$

and denote by $$S_K(f)$$ and $$S_K(g)$$ their partial sums. Then

$$
\begin{aligned}
\vert \vert S_K(g)\vert \vert _2
&\le \vert \vert f_{n_1}\vert \vert _2 + \sum_{k=1}^{K} \vert \vert f_{n_{k+1}} - f_{n_k}\vert \vert _2 \\
&< \vert \vert f_{n_1}\vert \vert _2 + \sum_{k=1}^{\infty} 2^{-k} < \infty.
\end{aligned}
$$

By the MCT, letting $$K \to \infty$$ shows that $$\vert \vert g\vert \vert _2 < \infty.$$

Since $$\vert f\vert \le g$$, we also have $$f \in L^2$$. In particular, $$g < \infty$$ a.e., and hence the series defining $$f$$ converges a.e. Thus,

$$
S_{K-1}(f) = f_{n_K} \to f \quad \text{a.e.}
$$

Moreover, since

$$
\vert f - S_K(f)\vert  \le (2g)^2 \quad \text{for all } K \in \mathbb{N},
$$

it follows from the DCT that

$$
f_{n_k} \to f \quad \text{in } L^2.
$$

Finally, recall that $$\{f_n\}$$ is Cauchy. So for all $$\epsilon > 0$$, there exists $$N \in \mathbb{N}$$ such that

$$
\vert \vert f_n - f_m\vert \vert _2 < \frac{\epsilon}{2} \quad \forall \; n, m \ge N.
$$

Choose $$k$$ so that $$n_k > N$$. Then

$$
\vert \vert f_n - f\vert \vert _2 \le \vert \vert f_n - f_{n_k}\vert \vert _2 + \vert \vert f_{n_k} - f\vert \vert _2 < \epsilon \quad \forall \; n > N.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3.**

$$L^2$$ is separable. i.e. there exists a countable dense subset of $$L^2$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We claim that

$$
\text{span} \{r\chi_R : R \text{ is rectangle with rational coordinates}\}
$$

is dense in $$L^2$$. Let $$f \in L^2$$ and $$\epsilon > 0$$. Consider

$$
g_n(x) =
\begin{cases}
f(x) & \text{if } \vert x\vert  \le n \text{ or } \vert f(x)\vert  \le n \
0 & \text{otherwise}
\end{cases}
$$

Then

$$
\vert f - g_n\vert  \le (2\vert f\vert )^2 \quad \text{and} \quad g_n \to f \text{ a.e.}
$$

Thus, by DCT, there exists $$N$$ such that

$$
\vert \vert f - g_N\vert \vert _2 < \frac{\epsilon}{2}.
$$

Let $$g \coloneq g_N \in L^1$$. Therefore, there exists a step function $$\varphi$$ such that

$$
\int \vert g - \varphi\vert  < \frac{\epsilon^2}{16N}
$$

We may also find a step function $$\psi$$ with coefficients in $$\mathbb{Q} \times i\mathbb{Q}$$ and rectangles with rational coordinates, such that

$$
\vert \psi\vert  \le N \quad \text{ and } \quad \int \vert g - \psi\vert  < \frac{\epsilon^2}{8N}
$$

Note that

$$
\int \vert g - \psi\vert ^2 \le 2N \int \vert g - \psi\vert  < \frac{\epsilon^2}{4} = \left(\frac{\epsilon}{2}\right)^2.
$$

Consequently,

$$
\vert \vert f - \psi\vert \vert _2 \le \vert \vert f - g\vert \vert _2 + \vert \vert g - \psi\vert \vert _2 < \epsilon.
$$

</div>

Exercise: 5.

<!-- prettier-ignore-end -->

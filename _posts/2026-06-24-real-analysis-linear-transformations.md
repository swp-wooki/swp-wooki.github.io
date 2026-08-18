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

<li markdown="1">A mapping $$T : H_1 \to H_2$$ is **linear** if
$$T(af + bg) = aT(f) + bT(g)$$
for all $$a, b \in \mathbb{C}$$ and $$f, g \in H_1$$.
</li>
<li markdown="1">A linear operator $$T$$ is **bounded** if there exists $$M < \infty$$ such that
$$\vert \vert T(f)\vert \vert _{H_2} \le M \vert \vert f\vert \vert _{H_1} \text{ for all } f \in H_1.$$
</li>
<li markdown="1">The norm of $$T \coloneq \vert \vert T\vert \vert \coloneq \inf M \ge 0$$.
</li>
<li markdown="1">A linear operator $$T$$ is **continuous** if $$T(f_n) \to T(f)$$ whenever $$f_n \to f$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 5.1.**

$$\vert \vert T\vert \vert = \sup \left\{ \vert (Tf, g)\vert : \vert \vert f\vert \vert , \vert \vert g\vert \vert \le 1 \right\} $$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($$\ge$$) If $$\vert \vert T\vert \vert \le M$$, the Cauchy-Schwarz inequality gives
$$\vert (Tf, g)\vert  \le \vert \vert Tf\vert \vert  \vert \vert g\vert \vert  \le M$$
whenever $$\vert \vert f\vert \vert \le 1$$ and $$\vert \vert g\vert \vert \le 1$$. Hence,

$$
\vert \vert Tf\vert \vert  \vert \vert g\vert \vert  \le M \implies \vert \vert Tf\vert \vert  \vert \vert g\vert \vert  \le \inf M = \vert \vert T\vert \vert .
$$


Taking the infimum over $$M$$ gives the inequality ($$\ge$$).

($$\le$$) Suppose the right-hand side $$\le M$$.
ETS : $$\vert \vert Tf\vert \vert \le M\vert \vert f\vert \vert $$ for all $$f$$

<ol>

<li markdown="1">If $$f = 0$$, there is nothing to prove.
</li>
<li markdown="1">If $$f \neq 0$$, we take

$$
f' = \frac{f}{\vert \vert f\vert \vert } \text{ and } g' = \frac{Tf}{\vert \vert Tf\vert \vert }.
$$

Since $$\vert \vert f'\vert \vert = \vert \vert g'\vert \vert = 1$$, we have

$$
M \ge \vert (Tf', g')\vert  = \frac{1}{\vert \vert f\vert \vert  \vert \vert Tf\vert \vert } \vert (Tf, Tf)\vert  = \frac{\vert \vert Tf\vert \vert }{\vert \vert f\vert \vert }.
$$

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 5.2.**

A linear operator $$T : H_1 \to H_2$$ is bounded if and only if it is continuous.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
($$\implies$$) is clear since $$\vert \vert Tf - Tf_n\vert \vert \le M \vert \vert f - f_n\vert \vert $$.

($$\impliedby$$) If $$T$$ is continuous, but not bounded, then for each $$n$$,
there exists $$f_n \neq 0$$ such that $$\vert \vert Tf_n\vert \vert \ge n \vert \vert f_n\vert \vert $$.
Let
$$g_n = \frac{f_n}{n \vert \vert f_n\vert \vert }, \text{ then } \vert \vert g_n\vert \vert  = \frac{1}{n} \to 0 \text{ as } n \to \infty.$$
Since $$T$$ is continuous, $$T(g_n) \to 0$$ which contradicts $$\vert \vert Tg_n\vert \vert \ge 1$$.<div class="real-analysis-footnote" markdown="1">Note: Since $$Tg_n = \frac{Tf_n}{n\vert \vert f_n\vert \vert } \implies \vert \vert Tg_n\vert \vert = \frac{\vert \vert Tf_n\vert \vert }{n\vert \vert f_n\vert \vert } \ge 1$$</div>
</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Any linear operator between finite dimensional Hilbert spaces is continuous.

</div>

### 4.5.1 Linear functionals and the Riesz representation theorem
<div class="real-analysis-statement" markdown="1">

**Definition.**
A linear operator $$l : H \to \mathbb{C}$$ is called a **linear functional**.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 5.3 (Riesz).**

If $$l$$ is a continuous linear functional, then there exists $$g \in H$$ such that
$$l(f) = (f, g)$$ for all $$f \in H$$.
Moreover, $$\vert \vert l\vert \vert = \vert \vert g\vert \vert _{H}$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
The so-called null space
$$S = \{f \in H : l(f) = 0\}$$
of $$l$$ is a closed subspace of $$H$$, since $$l$$ is continuous.

<ol>

<li markdown="1">If $$S = H$$, then $$l = 0$$ and we take $$g = 0$$.
</li>
<li markdown="1">Suppose $$S \neq H$$. <div class="real-analysis-footnote" markdown="1">Note: Idea of the proof: If $$f = f_1 + f_2 \in S \oplus S^\perp$$, then
$$l(f) = (f, g) \iff l(f_1) + l(f_2) = (f_1, g) + (f_2, g).$$
Note that $$l(f_1) = 0$$. Since $$l(f_1) + l(f_2)$$ is independent of $$f_1$$, we must have $$(f_1, g) = 0.$$
That is, we must look for $$g$$ in $$S^\perp$$.</div> We take $$0 \neq h \in S^\perp$$. Since
$$u \coloneq l(f)h - l(h)f \in S = \ker l$$
we have
$$0 = (u, h) = l(f)(h, h) - l(h)(f, h).$$
Thus,

$$
g \coloneq \frac{\overline{l(h)}}{\vert \vert h\vert \vert ^2} h \quad \text{ gives } \quad l(f) = (f, g).
$$

<div class="real-analysis-footnote" markdown="1">Note: $$l(f)h - l(h)f \in S = \ker l$$ since
$$l(l(f)h - l(h)f) = l(f)l(h) - l(h)l(f) = 0.$$
Last equality comes from

$$
\begin{aligned}
l(f)(h,h) - l(h)(f,h) = 0
&\implies l(f)\vert \vert h\vert \vert ^2 = l(h)(f,h) \\
&\implies l(f) = \frac{l(h)}{\vert \vert h\vert \vert ^2}(f, h) = \left(f, \frac{\overline{l(h)}}{\vert \vert h\vert \vert ^2} h\right)
\end{aligned}
$$

</div>

</li>
</ol>

</div>

### 4.5.2 Adjoints
<div class="real-analysis-statement" markdown="1">

**Proposition 5.4.**

Let $$T : H \to H$$ be a bounded linear transformation. Then there exists a unique bounded linear transformation $$T^*$$ on $$H$$ such that

<ol>

<li markdown="1">$$(Tf, g) = (f, T^*g)$$
</li>
<li markdown="1">$$\vert \vert T\vert \vert = \vert \vert T^*\vert \vert $$
</li>
<li markdown="1">$$(T^*)^* = T$$

</li>
</ol>

$$T^*$$ is called the adjoint of $$T$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
For each fixed $$g \in H$$, define the linear functional $$l : H \to \mathbb{C}$$ by
$$l(f) = (Tf, g).$$
Then,

$$
\begin{aligned}
\vert l(f)\vert  = \vert (Tf, g)\vert
&\le \vert \vert Tf\vert \vert  \vert \vert g\vert \vert  \\
&\le (\vert \vert T\vert \vert  \vert \vert g\vert \vert ) \vert \vert f\vert \vert .
\end{aligned}
$$

that is, $$l$$ is bounded. Thus, by the Riesz representation theorem,
there exists a unique $$h = h_g \in H$$ such that $$l(f) = (f, h)$$.
We define $$T^* : H \to H$$ by $$T^*g = h$$. Hence, (i) is clear.

Also,

$$
\begin{aligned}
\vert \vert T\vert \vert
&= \sup \{\vert (Tf, g)\vert  : \vert \vert f\vert \vert , \vert \vert g\vert \vert  \le 1\} \\
&= \sup \{\vert (f, T^*g)\vert  : \vert \vert f\vert \vert , \vert \vert g\vert \vert  \le 1\} = \vert \vert T^*\vert \vert
\end{aligned}
$$

This gives (ii).
Finally, we have
$$(T^*f, g) = \overline{(g, T^*f)} = \overline{(Tg, f)} = (f, Tg)$$
This implies $$(T^*)^* = T$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
A linear operator $$T$$ is **symmetric, hermitian or self-adjoint** if $$T = T^*$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

If $$T = T^*$$, then
$$\vert \vert T\vert \vert  = \sup \{\vert (Tf, f)\vert  : \vert \vert f\vert \vert  = 1\}.$$
Indeed, by Lemma 5.1, $$\vert \vert T\vert \vert = \sup \{\vert (Tf, g)\vert : \vert \vert f\vert \vert , \vert \vert g\vert \vert \le 1\}$$. Thus, ($$\ge$$) is clear.

</div>

<!-- prettier-ignore-end -->

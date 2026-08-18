---
layout: post
title: "Real Analysis 4: Measurable Functions"
date: 2026-03-20 12:00:00 +0900
description: "가측함수의 기본 성질과 거의 모든 곳에서의 성질, 단순함수와 계단함수 근사를 다룬다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

### Definition and basic properties
<div class="real-analysis-statement" markdown="1">

**Measurable function.**

Let $$E \in \mathcal{M}$$. A function $$f: E \rightarrow \overline{\mathbb{R}} = [-\infty, \infty]$$ is measurable if
$$\forall \: a \in \mathbb{R}, \quad f^{-1}([-\infty, a)) \in \mathcal{M}$$
where
$$f^{-1}((-\infty, a)) = \{x \in E : f(x) < a\} = \{f < a\}.$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

One can define measurability of $$f$$ in various ways.

<ol>

<li markdown="1">$$f$$ is measurable $$\iff \{f \le a\} \in \mathcal{M} \: \: \forall \: a \in \mathbb{R}$$.
<div class="real-analysis-footnote" markdown="1">Note: Since $$(\Rightarrow)$$ $$\{f \le a\} = \bigcap_k \{f < a + \frac{1}{k}\}$$ and $$(\Leftarrow)$$ $$\{f < a\} = \bigcup_k \{f \le a - \frac{1}{k}\}$$.</div>

</li>
<li markdown="1">$$f$$ is measurable $$\iff \{f \ge a\} \in \mathcal{M} \: \: \forall \: a \in \mathbb{R}$$.
</li>
<li markdown="1">$$f$$ is measurable $$\iff \{f > a\} \in \mathcal{M} \: \: \forall \: a \in \mathbb{R}$$.
</li>
<li markdown="1">$$\begin{aligned}[t]
f \text{ is measurable} &\iff \{a < f < b\} \in \mathcal{M} \: \: \forall \: a, b \in \mathbb{R} \\
&\iff f^{-1}(I) \in \mathcal{M} \quad \forall \: I \subset \mathbb{R} \text{ where } I =(a, b) \text{ is open interval}.
\end{aligned}$$
<div class="real-analysis-footnote" markdown="1">Note: Note that $$\{a < f < b\} = \{x \in E : a < f(x) < b\} = f^{-1}((a, b))$$.</div>

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Property 1.**

$$\begin{aligned}[t]
f: E \rightarrow \mathbb{R} \text{ is measurable}
&\iff f^{-1}(O) \in \mathcal{M} \quad \forall \: \text{open } O \\
&\iff f^{-1}(F) \in \mathcal{M} \quad \forall \: \text{closed } F
\end{aligned}$$
<div class="real-analysis-footnote" markdown="1">Note: for $$f: E \rightarrow \overline{\mathbb{R}}$$, $$f^{-1}(\pm\infty) \in \mathcal{M}$$ is needed</div>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">For the first statement, recall that every open set $$O \subset \mathbb{R}$$ can be wrriten as

$$
O = \bigcup_{j=1}^{\infty} I_j \quad \text{ where } I_j \text{ is an open interval in } \mathbb{R}.
$$

Since we know that $$f$$ is measurable on each open intervals $$I_j$$, and countable union of measurable set is measurable again, we get desired results.
</li>
<li markdown="1">For every open set $$O$$, note that $$O^{c}$$ is closed and complement of measurable set is measurable again.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Property 2.**

<ol>

<li markdown="1">If $$f \in C(\mathbb{R}^d)$$, then $$f$$ is measurable.
</li>
<li markdown="1">If $$f: E \rightarrow \mathbb{R}$$ is measurable and $$\Phi$$ is continuous, then $$\Phi \circ f$$ is measurable.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Suppose that $$f \in C(\mathbb{R}^d)$$ and $$O$$ is an open set in $$\mathbb{R}$$. Then $$f^{-1}(O)$$ is open again by continuity of $$f$$, so $$f^{-1}(O) \in \mathcal{M}$$.
</li>
<li markdown="1">$$(\Phi \circ f)^{-1}((-\infty, a)) = f^{-1}(\underbrace{\Phi^{-1}((-\infty, a))}_{\text{open }\forall \: a \in \mathbb{R}}) \in \mathcal{M}$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

$$f \circ \Phi$$ is not measurable in general. (Exercise 35)

</div>

<div class="real-analysis-statement" markdown="1">

**Property 3.**

If $$\{f_n\}$$ is a sequence of measurable functions, then

$$
\sup_n f_n, \quad \inf_n f_n, \quad \limsup_n f_n \quad \text{and} \quad \liminf_n f_n
$$

<div class="real-analysis-footnote" markdown="1">Note: Note that $$\sup_n f_n(x)$$ is defined by for each fixed $$x \in E$$, $$\sup_n f_n(x) = \sup\{f_n(x) : n \in \mathbb{N}\}$$,</div>
are measurable.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Note that $$\{\sup_n f_n > a\} = \bigcup_{n=1}^{\infty} \{f_n > a\}$$
<div class="real-analysis-footnote" markdown="1">Note: $$\bigcup_{n=1}^{\infty} \{f_n > a\} = \bigcup_{n=1}^{\infty} \{x \in E : f_n(x) > a\}$$)</div>, and we know that each $$f_n$$  is measurable,

$$
\{f_n > a\} \in \mathcal{M} \quad \text{for each } n \in \mathbb{N} \implies \bigcup_{n=1}^{\infty} \{f_n > a\} = \{\sup_n f_n > a\} \in \mathcal{M}
$$

holds since $$\mathcal{M}$$ is closed under countable unions.
</li>
<li markdown="1">Since $$\inf_n f_n = -\sup_n(-f_n)$$, we get immediately from (i).
</li>
<li markdown="1">$$\limsup_n f_n = \inf_k \sup_{n \ge k} f_n$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Property 4.**

If $$\{f_n\}$$ is a collection of measurable functions, and

$$
\lim_{n \to \infty} f_n(x) = f(x)
$$

then $$f$$ is measurable.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Since $$f(x) = \liminf_{n \to \infty} f_n(x) = \limsup_{n \to \infty} f_n(x)$$, $$f$$ is measurable by Property 3.

</div>

<div class="real-analysis-statement" markdown="1">

**Property 5.**

If $$f, g: E \rightarrow \overline{\mathbb{R}}$$ are measurable, then

<ol>

<li markdown="1">$$f^k$$ is measurable $$\forall \: k \in \mathbb{N}$$,
</li>
<li markdown="1">$$f+g$$ and $$fg$$ are measurable if $$f$$ and $$g$$ are finite-valued functions.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Let $$\Phi = x^k$$ which is continuous, hence $$\Phi \circ f = f^k$$ is measurable.
</li>
<li markdown="1">Note that $$f + g > a \iff g > a - f$$ and since $$\mathbb{Q}$$ is dense in $$\mathbb{R}$$,

$$
\exists \: r \in \mathbb{Q} \text{ such that } g > r > a - f \iff f > a - r \text{ and } g > r.
$$

we have

$$
\{f+g > a\} = \bigcup_{r \in \mathbb{Q}} \{f > a-r\} \cap \{g > r\}.
$$

Since $$f$$ and $$g$$ are measurable, $$\{f > a-r\} \text { and } \{g > r\} \in \mathcal{M}$$ and $$\mathcal{M}$$ is closed under countable unions and intersections, hence $$f+g$$ is measurable.

To show that $$fg$$ is measurable, consider
$$fg = \frac{1}{4}[(f+g)^2 - (f-g)^2]$$
which is measurable by (i) and the measurability of $$f+g$$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Alomost everywhere.**

A property or statement is said to hold **almost everywhere (a.e.)** if it is true except on a set of measure zero.

</div>

<div class="real-analysis-statement" markdown="1">

**Example.**

$$f(x) = g(x)$$ a.e. $$x \in E$$ if $$\{x \in E : f(x) \neq g(x)\}$$ has measure zero.

</div>

<div class="real-analysis-statement" markdown="1">

**Property 6.**

If $$f$$ is measurable and $$f(x) = g(x)$$ a.e. $$x$$, then $$g$$ is measurable.

</div>

### Approximation by simple or step functions
<div class="real-analysis-statement" markdown="1">

**Characteristic function.**

Characteristic function of $$E$$ is defined by

$$
\chi_E(x) = \begin{cases}
1 & \text{if } x \in E \
0 & \text{if } x \notin E
\end{cases}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Simple function.**

$$\sum_{k=1}^N a_k \chi_{E_k}(x)$$ where $$a_k \in \mathbb{R}$$ and $$E_k \in \mathcal{M}$$ with $$m(E_k) < \infty$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Step function.**

$$\sum_{k=1}^N a_k \chi_{R_k}(x)$$ where $$a_k \in \mathbb{R}$$ and $$R_k$$: rectangle.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.1.**

Let $$f$$ be a nonnegative measurable function on $$\mathbb{R}^d$$. Then there exists a sequence of simple functions $$\{\varphi_k\}$$,

$$
\text{ s.t. } 0 \le \varphi_k \le \varphi_{k+1} \text{ and } \lim_{k\to\infty} \varphi_k = f.
$$



</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$Q_k$$ be a side length with $$k$$, and each step size be $$\frac{1}{2^k}$$.

For each $$k \in \mathbb{N}$$ and $$j \in \{1, 2, \dots, k2^k\}$$, let

$$
\begin{aligned}
E_{j,k} &= \left\{x \in Q_k : \frac{j-1}{2^k} \le f(x) < \frac{j}{2^k}\right\} \\
E_k &= \{x \in Q_k : f(x) \ge k\}
\end{aligned}
$$

 <div class="real-analysis-footnote" markdown="1">Note: Note that $$E_{j,k} \text{ and } E_k \in \mathcal{M}$$</div>
Then

$$
\varphi_k(x) = \sum_{j=1}^{ 2^k} \frac{j-1}{2^k} \chi_{E_{j,k}}(x) + k\chi_{E_k}(x)
$$

is monotone increasing and converges to $$f$$ pointwise.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.2.**

Let $$f$$ be measurable. Then $$\exists$$ a sequence of simple functions $$\{\varphi_k\}$$ such that

$$
\vert \varphi_k\vert  \le \vert f\vert  \quad \text{and} \quad \lim_{k \to \infty} \varphi_k = f.
$$

In particular, $$\vert \varphi_k\vert \le \vert f\vert \: \: \forall \: k$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let us write $$f = f^+ - f^-$$ where

$$
f^+ = \max\{f(x), 0\}, \quad f^- = \max\{-f(x), 0\}.
$$

Then there exists increasing sequences of nonnegative simple functions $$\{\varphi_k^{(1)}\}$$ and $$\{\varphi_k^{(2)}\}$$ converging to $$f^+$$ and $$f^-$$ respectively. Then

$$
\varphi_k = \varphi_k^{(1)} - \varphi_k^{(2)}
$$

satisfies the desired properties. Indeed, by construction of $$\varphi_k$$,

$$
\vert \varphi_{k}\vert  = \vert \varphi_k^{(1)} - \varphi_k^{(2)}\vert  = \varphi_k^{(1)} + \varphi_k^{(2)} \le f^+ + f^- = \vert f^+ - f^-\vert  = \vert f\vert  \quad \text{for all } k \in \mathbb{N}
$$

Moreover, since $$\varphi_k^{(1)} \to f^+$$ and $$\varphi_k^{(2)} \to f^-$$ as $$k \to \infty$$, we have

$$
\lim_{k \to \infty} \varphi_k = \lim_{k \to \infty} (\varphi_k^{(1)} - \varphi_k^{(2)}) = f^+ - f^- = f.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.3.**

If $$f$$ is measurable, then there exists a sequence of step functions $$\{\psi_k\}$$ converging to $$f$$ a.e. in $$\mathbb{R}^d$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
By the result `thm:4.2`, we may assume that $$f = \chi_E$$ for some $$E \in \mathcal{M}$$ with $$m(E) < \infty$$.
<div class="real-analysis-footnote" markdown="1">Note: Note that the result `thm:4.2` says that we can approximate measurable function $$f$$ by sequence of simple functions. Since simple function is a finite linear combination of characteristic functions, we may approximate characteristic function $$\chi_E$$ by step functions. Therefore to show every measurable function can be approximated by step functions, it suffices to approximate characteristic function $$\chi_E$$ by step functions.</div>
Then the result `thm:3.4` (iv) shows that $$\forall \: \epsilon > 0,$$ there exists cubes $$Q_1, \dots, Q_N$$ s.t.

$$
m\left(E \Delta \bigcup_{j=1}^N Q_j\right) \le \epsilon.
$$

Note that there exists almost disjoint rectangles $$\tilde{R}_1, \dots, \tilde{R}_M$$ such that
$$\bigcup_{j=1}^N Q_j = \bigcup_{j=1}^M \tilde{R}_j$$
Also, we can find disjoint rectangles $$R_1, \dots, R_M$$
<div class="real-analysis-footnote" markdown="1">Note: We make $$R_j$$ be smaller then $$\tilde{R}_j$$ to avoid the possible overlaps in $$\bigcup_{j=1}^M R_j$$.</div> such that
$$m(E \Delta \bigcup_{j=1}^M R_j) \le 2\epsilon$$
Therefore,

$$
f(x) = \sum_{j=1}^M \chi_{R_j}(x)
$$

except possibly a set of measure $$\le 2\epsilon$$.
<div class="real-analysis-footnote" markdown="1">Note: Since $$\chi_{R_j}(x)$$ is defined on $$R_j$$, which is differ by a set of measure $$\le 2\epsilon$$.</div>
Indeed, above equality may be written as

$$
f(x) = \psi(x) = \sum_{j=1}^M \chi_{R_j}(x) \quad \text{ for all } x \in \left(E \Delta \bigcup_{j=1}^M R_j\right)^c
$$

<div class="real-analysis-footnote" markdown="1">Note: That is, $$f(x) = \psi(x)$$ for all $$x$$ at the outside of $$E \Delta \bigcup_{j=1}^M R_j$$.</div>
thus we can conclude that

$$
m(\{x : f(x) \neq \psi(x)\}) = m\left(E \Delta \bigcup_{j=1}^M R_j\right) \le 2\epsilon.
$$

Therefore, since $$\epsilon$$ was arbitrary, $$\forall \: k \in \mathbb{N}, \exists$$ a step function $$\psi_k$$ s.t.

$$
m(\underbrace{\{x : f(x) \neq \psi_k(x)\}}_{=: E_k}) \le 2^{-k}.
$$

Let

$$
F_k = \bigcup_{j=k+1}^\infty E_j \quad \text{ and } \quad F = \bigcap_{k=1}^\infty F_k
$$

so that

$$
F = \{x : f(x) \neq \psi_k(x) \text{ for all } k \in \mathbb{N}\} \implies F^c = \{x : f(x) = \psi_k(x) \text{ for some } k \in \mathbb{N}\}.
$$

Then

$$
m(F) \le m(F_k) \le \sum_{j=k+1}^\infty m(E_j) \le 2^{-k} \quad \forall \: k \ge 1.
$$

So $$m(F) = 0$$. Moreover,
$$\psi_k(x) \to f(x) \: \: \text{ for all } x \in F^c$$
Indeed, if $$x \in F^c$$, then $$x \notin F_{k_0}$$ for some $$k_0$$, and hence $$x \notin E_j \: \: \forall j > k_0$$. This implies that

$$
\psi_j(x) = f(x) \: \: \forall \: j > k_0
$$

</div>

### Littlewood's three principles

<ol>

<li markdown="1">Every measurable set is nearly a finite union of intervals (rectangles, or cubes). (the result `thm:3.4`(iv))
</li>
<li markdown="1">Every measurable function is nearly continuous. (Theorem 4.5)
</li>
<li markdown="1">Every convergent sequence is nearly uniformly convergent. (Theorem 4.4)

</li>
</ol>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.4 (Egorov).**

Let $$E \in \mathcal{M}$$, $$m(E) < \infty$$. <br>
Suppose that $$f_k : E \to \overline{\mathbb{R}}$$ is measurable and that $$f_k \to f$$ a.e. on $$E$$.

Given $$\epsilon > 0$$, $$\exists$$ a closed set $$A_\epsilon \subset E$$ such that

$$
m(E \setminus A_\epsilon) \le \epsilon \text{ and } f_k \to f \text{ uniformly on } A_\epsilon.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
We first assume that $$f_k \to f$$ on $$E$$. <br>
For each $$k, n \ge 1$$, let

$$
E_k^n = \left\{ x \in E : \vert f_j(x) - f(x)\vert  < \frac{1}{n} \quad \forall j > k \right\}.
$$

<div class="real-analysis-footnote" markdown="1">Note: *i.e.* the set $$E_k^n$$ is set of all $$x \in E$$ such that every $$f_j$$ with $$j \ge k$$ satisfies $$\vert f_j(x) - f(x)\vert < \frac{1}{n}$$. Hence,

<ol>

<li markdown="1">If $$k = 1$$, then $$x \in E_{1}^n$$ must satisfy $$\vert f_j(x) - f(x)\vert < \frac{1}{n}$$ for all $$j = 2, 3, 4, 5, \dots $$
</li>
<li markdown="1">If $$k = 2$$, then $$x \in E_{2}^n$$ must satisfy $$\vert f_j(x) - f(x)\vert < \frac{1}{n}$$ for all $$j = 3, 4, 5, \dots $$

</li>
</ol>

Therefore, as $$k$$ increases, the condition for $$x$$ to be in $$E_k^n$$ becomes weaker, and hence $$E_k^n$$ becomes larger. Thereby, for fixed $$n$$, the set $$E_k^n$$ is monotone increasing with respect to $$k$$.</div>
Note that for fixed $$n$$, $$E_k^n \subset E_{k+1}^n \nearrow E$$ as $$k \to \infty$$.
Thus, by the result `cor:3.3`<div class="real-analysis-footnote" markdown="1">Note: Note that Corollary 3.3 says that if $$E_{k+1}^n \nearrow E$$, then $$m(E) = \lim_{k \to \infty} m(E_k^n)$$.</div>,

$$
\exists \: k_n \text{ such that } m(E \setminus E_{k_n}^n) < 2^{-n}.
$$

We now take $$N$$ such that $$\sum_{n=N}^\infty 2^{-n} < \epsilon/2$$ and let $$\tilde{A}_\epsilon = \bigcap_{n \ge N} E_{k_n}^n$$. Then,

$$
\begin{aligned}
E \setminus \tilde{A}_\epsilon  = E \cap \tilde{A}_\epsilon^c
&= E \setminus \left( \bigcap_{n \ge N} E_{k_n}^n \right)^c \\
&= E \setminus \bigcup_{n \ge N} (E_{k_n}^n)^c \\
&= E \cap \bigcup_{n \ge N} (E_{k_n}^n)^c \\
&= \bigcup_{n \ge N} E \cap (E_{k_n}^n)^c \qquad (\because De Morgan's Law) \\
&= \bigcup_{n \ge N} E \setminus E_{k_n}^n
\end{aligned}
$$

we have $$E \setminus \tilde{A}_\epsilon = \bigcup_{n \ge N} E \setminus E_{k_n}^n$$. Now apply subadditivity of measure, we get

$$
m(E \setminus \tilde{A}_\epsilon) = \bigcup_{n \ge N} E \setminus E_{k_n}^n \le \sum_{n \ge N} m(E \setminus E_{k_n}^n) < \sum_{n=N}^\infty 2^{-n} <  \frac{\epsilon}{2}.
$$

Next, if $$\delta > 0$$, we choose $$n \ge N$$ such that $$\frac{1}{n} < \delta$$.

Then, if $$x \in \tilde{A}_\epsilon$$

$$
\vert f_j(x) - f(x)\vert  < \frac{1}{n} < \delta \quad \forall \: j > k_n.
$$

which is $$f_k \rightrightarrows f$$ on $$\tilde{A}_\epsilon$$.

Finally, we take a closed subset $$A_\epsilon \subset \tilde{A}_\epsilon$$ with $$m(\tilde{A}_\epsilon \setminus A_\epsilon) \le \epsilon/2$$. Indeed, Since $$A_\epsilon \subset \tilde{A}_\epsilon \subset E$$, one can observe that

$$
(E \setminus \tilde{A}_\epsilon) \cup (\tilde{A}_\epsilon \setminus A_\epsilon) = E \setminus A_\epsilon \quad \text{ and } \quad (E \setminus \tilde{A}_\epsilon) \cap (\tilde{A}_\epsilon \setminus A_\epsilon) = \emptyset
$$

Therefore, by additivity of measure, we have

$$
m(E\setminus A_\epsilon) = m((E \setminus \tilde{A}_\epsilon) \cup (\tilde{A}_\epsilon \setminus A_\epsilon)) = m(E \setminus \tilde{A}_\epsilon) + m(\tilde{A}_\epsilon \setminus A_\epsilon) < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.5 (Lusin).**

Let $$E \in \mathcal{M}$$, $$m(E) < \infty$$.

Suppose that $$f: E \to \mathbb{R}$$ be measurable.
Then $$\: \forall \: \epsilon > 0$$, $$\exists$$ a closed set $$F_\epsilon \subset E$$ such that

$$
m(E \setminus F_\epsilon) \le \epsilon \quad \text{ and } \quad f\vert _{F_\epsilon} \text{ is continuous.}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Let $$f_n$$ be a sequence of step functions s.t. $$f_n \to f$$ a.e.. Then there exists sets $$E_n$$
<div class="real-analysis-footnote" markdown="1">Note: Therefore, $$E_n$$ contains discontinuity points of $$f_n$$.</div> with

$$
m(E_n) < 2^{-n} \quad \text{such that f_n is continuous outside E_n}.
$$

By Egorov's theorem, there exists a set $$A_{\epsilon/3}$$ such that

$$
m(E \setminus A_{\epsilon/3}) \le \epsilon/3 \quad \text{ and } \quad f_n \rightrightarrows f \text{ on } A_{\epsilon/3}.
$$

Consider
$$F' = A_{\epsilon/3} \setminus \bigcup_{n \ge N} E_n$$
for $$N$$ large enough so that $$\sum_{n \ge N} 2^{-n} < \epsilon/3$$.

Then $$f_n$$ is continuous on $$F'$$ and so is $$f$$. Finally, we take a closed set

$$
F_\epsilon \subset F' \quad \text{such that} \quad m(F' \setminus F_\epsilon) \le \epsilon/3.
$$

Note that with basic set theory, we have

$$
\begin{aligned}
&E \setminus F' = E \setminus ( A_{\epsilon/3} \setminus \bigcup_{n \ge N} E_n ) = (E \setminus A_{\epsilon/3}) \cup (E \cap \bigcup_{n \ge N} E_n) \subset (E \setminus A_{\epsilon/3}) \cup \bigcup_{n \ge N} E_n \\
&\implies E \setminus F' \subset (E \setminus A_{\epsilon/3}) \cup \bigcup_{n \ge N} E_n
\end{aligned}
$$

therefore, we have

$$
E \setminus F_\epsilon = (E \setminus F') \cup (F' \setminus F_\epsilon) \subset (E \setminus A_{\epsilon/3}) \cup (\bigcup_{n \ge N} E_n) \cup (F' \setminus F_\epsilon).
$$

Now we can compute $$m(E \setminus F_\epsilon)$$ as follows:

$$
\begin{aligned}
m(E \setminus F_\epsilon) &\le m(E \setminus A_{\epsilon/3}) + m(\bigcup_{n \ge N} E_n) + m(F' \setminus F_\epsilon) \\
&< \frac{\epsilon}{3} + \frac{\epsilon}{3} + \frac{\epsilon}{3} = \epsilon
\end{aligned}
$$

since

$$
m(\bigcup_{n \ge N} E_n) \le \sum_{n \ge N} m(E_n) < \sum_{n \ge N} 2^{-n} < \frac{\epsilon}{3}
$$

</div>

<!-- prettier-ignore-end -->

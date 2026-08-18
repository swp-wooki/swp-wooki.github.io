---
layout: post
title: "Real Analysis 7: Fubini's Theorem"
date: 2026-04-08 12:00:00 +0900
description: "곱공간의 단면과 Fubini·Tonelli 정리, 대표적인 응용을 다룬다."
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
Let $f: \mathbb{R}^{d_1} \times \mathbb{R}^{d_2} \to \overline{\mathbb{R}}$.
The slice
\begin{align*}
&f^y : \mathbb{R}^{d1} \to \overline{\mathbb{R}} \text{ of } f \
&f_x : \mathbb{R}^{d2} \to \overline{\mathbb{R}} \text{ of } f
\end{align*}
corresponding to $y \in \mathbb{R}^{d_2}$ and $x \in \mathbb{R}^{d_1}$ respectively, and are given by 
\begin{align*}
&f^y(x) = f(x,y) \
&f_x(y) = f(x,y)
\end{align*}
For $E \subset \mathbb{R}^d = \mathbb{R}^{d_1} \times \mathbb{R}^{d_2}$ we define its slices
\begin{align*}
E^y &:= \{x \in \mathbb{R}^{d_1} : (x,y) \in E\} \
E_x &:= \{y \in \mathbb{R}^{d_2} : (x,y) \in E\}.
\end{align*}

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

    
    
<ol>

<li markdown="1">For $f$, which is measurable on $\mathbb{R}^d$, it is **NOT** necessarily true that $f^y$ (or $f_x$) is measurable for each $y \in \mathbb{R}^{d_2}$ (or $x \in \mathbb{R}^{d_1}$).
</li>
<li markdown="1">For $E \in \mathcal{M}(\mathbb{R}^d)$, the slice $E^y$ may not be measurable for each $y \in \mathbb{R}^{d_2}$. <span class="real-analysis-footnote">Note: Consider $E$ with $m_d(E) = 0$, but $E^y \notin \mathcal{M}_{d_1} := \mathcal{M}(\mathbb{R}^{d_1})$)</span>

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.1 (Fubini).**

Let $f \in L^1(\mathbb{R}^{d_1} \times \mathbb{R}^{d_2})$. Then

<ol>

<li markdown="1">$f^y \in L^1(\mathbb{R}^{d_1})$ for a.e. $y \in \mathbb{R}^{d_2}$
</li>
<li markdown="1">$y \mapsto \int_{\mathbb{R}^{d_1}} f^y(x) dx \in L^1(\mathbb{R}^{d_2})$
</li>
<li markdown="1">$\int_{\mathbb{R}^{d_2}} \left( \int_{\mathbb{R}^{d_1}} f(x,y) dx \right) dy = \int_{\mathbb{R}^d} f$

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
**Sketch of proof.** \\
Let $\mathcal{F} \subset L^1$ denote the set of functions satisfying (i)-(iii), and prove that $L^1 \subset \mathcal{F}$.

<ul>

<li markdown="1">**Step 1:** $\mathcal{F}$ is closed under the linear combinations.
    
    Let $f_k \in \mathcal{F}$ and $a_{k}\in \mathbb{R}$. For each $k$, $\exists A_{k}\subset \mathbb{R}^{d_{2}}$ with $m_{d_{2}}(A_{k})=0$ s.t. 
    \[
    f_{k}^{y}\in L^{1}(\mathbb{R}^{d_{1}}) \quad \forall y \notin A_{k}.
    \]
    Let $A=\bigcup_{k=1}^{n}A_{k}$, then $m_{d_{2}}(A)=0$.
    
<ol>

<li markdown="1">$(\sum_{k=1}^{n}a_{k}f_{k})^{y}\in L^{1}(\mathbb{R}^{d_{1}}) \quad \forall y \notin A$.
</li>
<li markdown="1">\& (iii) are obvious.
    
</li>
</ol>

</li>
<li markdown="1">**Step 2:** $\mathcal{F}$ is closed under the monotone limits.
    If $f_k \in \mathcal{F}$, $0 \le f_{k} \nearrow f \in L^{1}$ then $f\in\mathcal{F}$. \\
    We may assume that $f_{k}\ge0$ by considering $f_{k}-f_{1}$.
    By MCT, we have
    \begin{equation} \tag{1}
    \lim_{k\rightarrow\infty}\int_{\mathbb{R}^{d}}f_{k}(x,y) dx dy = \int_{\mathbb{R}^{d}}f(x,y) dx dy.
    \end{equation}
    For each $k$, $\exists A_{k}\subset\mathbb{R}^{d_{2}}$ with $m_{d_{2}}(A_{k})=0$ s.t. $f_{k}^{y}\in L^{1}(\mathbb{R}^{d_{1}})$ for $y\notin A_{k}$. \\
    Then $A=\bigcup_{k=1}^{\infty}A_{k}$ has $m_{d_{2}}(A)=0$.

    Let $g_{k}(y):=\int_{\mathbb{R}^{d_{1}}}f_{k}^{y}(x) dx$. By MCT, we have for $y\notin A$,
    \[
    \int_{\mathbb{R}^{d_{1}}}f^{y}(x)dx = g(y) \quad \text{as } k\rightarrow\infty.
    \]
    Moreover, by MCT again,
    \[
    \int_{\mathbb{R}^{d_{2}}} f_k = \int_{\mathbb{R}^{d_{2}}} g_k(y) dy
    \]
    따라서 (1)과 같은 극한으로 수렴한다.
    Therefore, we have
    \[
    \int_{\mathbb{R}^{d_{2}}} g(y) dy = \int_{\mathbb{R}^{d}} f
    \]
    This shows that $g(y)<\infty$ for a.e. $y$. i.e. $f^{y}\in L^{1}(\mathbb{R}^{d_{1}})$ for a.e. $y$.
</li>
<li markdown="1">**Step 3:** If $E$ is $G_\delta$ and $m(E)<\infty$, then $\chi_{E}\in\mathcal{F}$.
    
    (a) If $E=Q_{1}\times Q_{2}$, where $Q_{i}\subset \mathbb{R}^{d_{i}}$ are open cubes. \\
    Then $\chi_{E}^{y}\in L^{1}(\mathbb{R}^{d_{1}})$ for all $y$, and
    \[
    g(y):=\int_{\mathbb{R}^{d_{1}}}\chi_{E}(x,y)dx = |Q_{1}|\chi_{Q_{2}}(y) \in L^{1}(\mathbb{R}^{d_{2}})
    \]
    \[
    \int_{\mathbb{R}^{d_{2}}} g(y) dy = |Q_{1}||Q_{2}| = \int_{\mathbb{R}^{d}}\chi_{E}
    \]
    Thus, $\chi_{E}\in\mathcal{F}$.

    \vspace{0.5em}
    \noindent (b) If $E\subset \partial Q$ for some $Q\subset \mathbb{R}^{d}$ then $m(E)=0$. \\
    Since $m(\partial Q)=0$. Therefore, $m_{d_{1}}(E^{y})=0$ and thus
    \[
    g(y):=\int_{\mathbb{R}^{d_{1}}}\chi_{E}(x,y)dx = 0 \quad \text{a.e. } y.
    \]
    On the other hand, for a.e. $y$,
    \[
    \int_{\mathbb{R}^{d_{2}}} g(y) dy = 0 = \int_{\mathbb{R}^{d}}\chi_{E} \implies \chi_{E}\in\mathcal{F}.
    \]

    \vspace{0.5em}
    \noindent (c) Let $E=\bigcup_{k=1}^{n}Q_{k}$ be finite union of almost disjoint closed cubes. \\
    Then $\chi_{E} = \sum_{k=1}^{n}(\chi_{\text{int } Q_{k}} + \chi_{A_{k}})$ for some $A_{k}\subset \partial Q_{k}$, thus $\chi_{E}\in\mathcal{F}$.

    \vspace{0.5em}
    \noindent (d) If $E$ is open and $m(E)<\infty$. \\
    Let $E=\bigcup_{j=1}^{\infty}Q_{j}$: almost disjoint closed cubes.
    If $E_{k}=\bigcup_{j=1}^{k}Q_{j}$ then $\chi_{E_{k}} \nearrow \chi_{E}$ as $k\rightarrow\infty$.
    Since $\chi_{E_{k}}\in\mathcal{F}$, we have $\chi_{E}\in\mathcal{F}$ by Step 2.

    \vspace{0.5em}
    \noindent (e) Finally, if $E$ is $G_{\delta}$ \& $m(E)<\infty$, then $E=\bigcap_{k=1}^{\infty}\tilde{O}_{k}$ for some open sets $\tilde{O}_{k}$. \\
    Fix an open set $\tilde{O}_{0}\supset E$ with $m(\tilde{O}_{0})<\infty$, and let $O_{k}=\tilde{O}_{0}\cap\dots\cap\tilde{O}_{k}$ so that
    $m(O_{k})<\infty$ and $O_{1}\supset O_{2}\supset \dots$ with $E=\bigcap_{k=1}^{\infty}O_{k}$.
    Since $\chi_{O_{k}} \searrow \chi_{E}$, finally $\chi_{E}\in\mathcal{F}$.
</li>
<li markdown="1">**Step 4:** If $m(E)=0$, then $\chi_{E}\in\mathcal{F}$.
    Note that $\exists G_{\delta}$ set $G\supset E$ with $m(G)=0$. \\
    Since $\chi_{G} \in \mathcal{F}$ by Step 3, we have
    \begin{align*}
        & \int_{\mathbb{R}^{d_{2}}} \left( \int_{\mathbb{R}^{d_{1}}} \chi_{G}(x,y) \,dx \right) dy = \int_{\mathbb{R}^{d}} \chi_{G} = 0 \
        \implies& \int_{\mathbb{R}^{d_{1}}} \chi_{G}(x,y) \,dx = 0 \quad \text{a.e. } y \quad (\text{integrable on } y) \
        \implies& m_{d_{1}}(G^{y}) = 0 \quad \text{a.e. } y \
        \implies& m_{d_{1}}(E^{y}) = 0 \quad \text{a.e. } y \quad (\because E^{y} \subset G^{y}) \
        \implies& \int_{\mathbb{R}^{d_{1}}} \chi_{E}(x,y) \,dx = 0 \quad \text{a.e. } y \
        \implies& \int_{\mathbb{R}^{d_{2}}} \left( \int_{\mathbb{R}^{d_{1}}} \chi_{E} \,dx \right) dy = 0 = \int_{\mathbb{R}^{d}} \chi_{E} \
        \implies& \chi_{E} \in \mathcal{F}.
    \end{align*}
</li>
<li markdown="1">**Step 5:** If $m(E)<\infty$, then $\chi_{E}\in\mathcal{F}$.
    
    Note that $\exists G_{\delta}$ set $G\supset E$ s.t. $m(G\setminus E)=0$. \\
    Then, $\chi_{E}=\chi_{G}-\chi_{G\setminus E}\in\mathcal{F}$.
</li>
<li markdown="1">**Step 6:** If $f\in L^{1}$, then $f\in\mathcal{F}$. \\
    We may assume that $f\ge0$.
    $\exists$ simple functions $\varphi_{k}$ s.t. $\varphi_{k} \nearrow f$.
    Since $\varphi_{k}\in\mathcal{F}$ by Step 1 \& 5, we have $f\in\mathcal{F}$ by Step 2.

</li>
</ul>

</div>

### Applications of Fubini's theorem
<div class="real-analysis-statement" markdown="1">

**Thm 3.2 (Tonelli).**

Let $f \ge 0$ be measurable. Then,

<ol>

<li markdown="1">$f^{y}$ is measurable a.e. $y\in \mathbb{R}^{d_{2}}$
</li>
<li markdown="1">$y\mapsto\int_{\mathbb{R}^{d_{1}}}f^{y}(x)dx$ is measurable
</li>
<li markdown="1">$\int_{\mathbb{R}^{d_{2}}}\left(\int_{\mathbb{R}^{d_{1}}}f dx\right)dy = \int_{\mathbb{R}^{d}}f$ in the extended sense.

</li>
</ol>

</div>

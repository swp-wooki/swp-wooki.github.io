---
layout: post
title: "Real Analysis 17: Compact Operators"
date: 2026-06-26 12:00:00 +0900
description: "콤팩트 연산자와 대칭 콤팩트 연산자의 스펙트럼 정리를 다룬다."
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
A set $X \subset H$ is **compact** if every sequence $\{f_n\}$ in $X$, there exists a subsequence $\{f_{n_k}\}$ that converges in $X$.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol>

<li markdown="1">The closed ball 
    $$B = \{f \in H : ||f|| \le r\} \subset H$$ 
    is compact if and only if $\dim H < \infty$.
</li>
<li markdown="1">In an infinite dimensional space, the orthonormal set $\{e_n\}$ has no converging subsequence because $||e_n - e_m|| = \sqrt{2}$ for all $n \neq m$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**
A linear operator $T : H \to H$ is **compact** if the closure of $T(B) = \{T(f) : f \in B\}$ is compact.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Equivalently, $T$ is compact if every bounded sequence $\{f_n\}$ in $H$ has a subsequence $\{f_{n_k}\}$ such that $\{Tf_{n_k}\}$ converges.

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 6.1.**

Let $T$ be a bounded linear operator on $H$.

<ol>

<li markdown="1">If $S$ is compact on $H$, then so are $ST$ and $TS$.
</li>
<li markdown="1">If $\{T_n\}$ is a sequence of compact operators with 
        $||T_n - T|| \to 0$ as $n \to \infty$,
</li>
<li markdown="1">If $T$ is compact, then there exists a sequence of operators of finite rank such that 
    $$\lim_{n \to \infty} ||T_n - T|| = 0.$$
</li>
<li markdown="1">$T$ is compact if and only if $T^*$ is compact.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Obvious.
</li>
<li markdown="1">Let $\{f_k\}$ be a bounded sequence in $H$.
            Since $T_1$ is compact, 
                there exists a subsequence $\{f_{1,k}\}$ of $\{f_k\}$ such that $\{T_1(f_{1,k})\}$ converges.
            We can find a further subsequence 
                $\{f_{2,k}\}$ such that $\{T_2(f_{2,k})\}$ converges.    
            Repeat this process. Let $g_k = f_{k,k}$. Then, we find
            \begin{align*}
            ||T(g_k) - T(g_l)|| &\le ||T(g_k) - T_m(g_k)|| + ||T_m(g_k) - T_m(g_l)|| + ||T_m(g_l) - T(g_l)|| \
            &= I_1 + I_2 + I_3
            \end{align*}
            Since $T_m \to T$ and $\{g_k\}$ is bounded, we find
                $m$ large such that $I_1, I_3 < \frac{\epsilon}{3}$.
            With this fixed $m$, we have $I_2 < \frac{\epsilon}{3}$ for sufficiently large $k, l$.
            This implies $\{T(g_k)\}$ is Cauchy in $H$, and hence converges.
</li>
<li markdown="1">Let $\{e_k\}$ be a basis of $H$.
        Let $I = P_n + Q_n$, where $P_n$ and $Q_n$ are orthogonal projections onto $\text{span}\{e_1, \dots, e_n\}$ and $\text{span}\{e_{n+1}, \dots\}$ respectively.
        We claim that 
        $$||Q_n T|| \to 0 \quad \text{as } n \to \infty.$$
        If not, then there exists $c > 0$ such that 
        $$||Q_n T|| \ge c \quad \text{ for all } n \in \mathbb{N},$$
        since $||Q_n g|| \searrow 0 $ as $n \to \infty$ for all $g \in H$.

        Hence, for each $n$,
            there exists $f_n$ with $||f_n|| = 1$ such that $||Q_n T f_n|| \ge c$.    
        Since $T$ is compact, there exists a subsequence such that 
        $$Tf_{n_k} \to g \quad \text{for some } g.$$
        But, since 
        $$Q_{n_k}(g) = Q_{n_k} Tf_{n_k} - Q_{n_k}(Tf_{n_k} - g),$$
        we obtain
        \[
        ||Q_{n_k}(g)|| > \frac{c}{2} \quad \text{for large } k. 
        \]
        which is a contradiction. 

</li>
<li markdown="1">If $T$ is compact, then 
    $$||T^* P_n - T^*|| = ||P_n T - T|| \to 0.$$
    Since $T^* P_n$ is of finite rank, $T^*$ is compact by (ii).

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Example (Hilbert-Schmidt process).**

Let $H = L^2(\mathbb{R}^d)$ and define $T : H \to H$ by
\[
T(f)(x) = \int_{\mathbb{R}^d} K(x,y) f(y) dy
\]
for some kernel $K$.
If $K \in L^2(\mathbb{R}^d \times \mathbb{R}^d)$, $T$ is called a Hilbert-Schmidt operator.

Note that $||T|| \le ||K||_{L^2(\mathbb{R}^d \times \mathbb{R}^d)}$, since
\[
|T(f)(x)| \le \int_{\mathbb{R}^d} |K(x,y)| |f(y)| dy \le \left(\int_{\mathbb{R}^d} |K(x,y)|^2 dy\right)^{1/2} ||f||_{L^2},
\]
we obtain
\[
||Tf||^2 \le \int \left(\int |K(x,y)|^2 dy\right) ||f||^2 dx = ||K||_{L^2}^2 ||f||^2.
\]

Now, consider an orthonormal basis $\{\varphi_k\}$ for $L^2(\mathbb{R}^d)$.
Then $\{\varphi_k(x) \varphi_l(y)\}_{k,l \ge 1}$ is an orthonormal basis for $L^2(\mathbb{R}^d \times \mathbb{R}^d)$.
Thus,
\[
K(x,y) \sim \sum_{k,l} a_{kl} \varphi_k(x) \varphi_l(y) \quad \text{with } \sum_{k,l} |a_{kl}|^2 < \infty.
\]
We define
\[
T_n(f)(x) \coloneq \int_{\mathbb{R}^d} K_n(x,y) f(y) dy
\]
where 
$$K_n(x,y) \coloneq \sum_{k,l}^n a_{k,l} \varphi_k(x) \varphi_l(y).$$
Then each $T_n$ is compact. Moreover, since
\[
||K - K_n||_{L^2(\mathbb{R}^d \times \mathbb{R}^d)}^2 = \sum_{\overset{k \ge n}{\text{or} \; l \ge n}} |a_{k,l}|^2 \to 0,
\]
we have 
$$||T - T_n|| \le ||K - K_n|| \to 0.$$
Thus, $T$ is compact by Proposition 6.1.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 6.2 (Spectral theorem).**

Let $T$ be a compact symmetric operator on $H$. Then there exists an orthonormal basis $\{\varphi_k\}$ of $H$ that consists of eigenvectors of $T$. That is,
\[
T\varphi_k = \lambda_k \varphi_k
\]
for some eigenvalue $\lambda_k \in \mathbb{C}$.

Moreover, $\lambda_k \in \mathbb{R}$ and $\lambda_k \to 0$ as $k \to \infty$.
Conversely, every operator of this form is compact and symmetric.

</div>

Note that $\{\lambda_k\}$ is called the spectrum of $T$.

<div class="real-analysis-statement" markdown="1">

**Lemma 6.3.**

Let $T$ be a bounded symmetric operator on $H$.

<ol>

<li markdown="1">Every eigenvalue of $T$ is real.
</li>
<li markdown="1">If $Tf_i = \lambda_i f_i$, $i=1,2$ and $\lambda_1 \neq \lambda_2$, then $f_1 \perp f_2$.

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol>

<li markdown="1">Let $f$ be an eigenvector corresponding to $\lambda$, then
            \begin{align*}
            \lambda(f, f) &= (\lambda f, f) \
            &= (Tf, f) \
            &= (f, T^*f) \
            &= (f, Tf) = (f, \lambda f) = \overline{\lambda}(f, f).
            \end{align*}
            This implies that $\lambda = \overline{\lambda} \implies \lambda \in \mathbb{R}$.

</li>
<li markdown="1">Note that
    \begin{align*}
        \lambda_1(f_1, f_2) &= (\lambda_1 f_1, f_2) \
        &= (Tf_1, f_2) \
        &= (f_1, T^*f_2) \
        &= (f_1, Tf_2) \
        &= (f_1, \lambda_2 f_2) = \lambda_2(f_1, f_2).
        \end{align*}
        Since $\lambda_1 \neq \lambda_2$, we have $(f_1, f_2) = 0$.

</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 6.4.**

Let $T$ be a compact symmetric operator on $H$.

<ol>

<li markdown="1">If $\lambda \neq 0$, the dimension of the null space of $T - \lambda I$ is finite.
</li>
<li markdown="1">There exists at most countable eigenvalues
        $\{\lambda_k\}$ such that $\lambda_k \to 0$ as $k \to \infty$. <span class="real-analysis-footnote">Note: Equivalently, for all $\mu > 0$, there exists $N$ such that $|\lambda_k| < \mu$ for all $k \ge N$</span>    

</li>
</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

    
<ol>

<li markdown="1">Let $V_\lambda = \ker(T - \lambda I)$. If $\dim V_\lambda = \infty$, then there exists a sequence $\{\varphi_n\}$ of orthonormal vectors in $V_\lambda$.
        
        Since $T$ is compact, there exists a subsequence $\{\varphi_{n_k}\}$ such that $T\varphi_{n_k}$ converges.
        This implies $\lambda \varphi_{n_k}$ converges, which contradicts to 
        $$||\varphi_{n_k} - \varphi_{n_l}|| = \sqrt{2} \quad \text{for all } k \neq l.$$
</li>
<li markdown="1">Suppose to the contrary that for each $\mu > 0$, there exists a sequence $\{\lambda_n\}$ of distinct eigenvalues such that $|\lambda_n| > \mu$.
        
        Let $\varphi_n$ be corresponding eigenvector. By Lemma 6.3, $\{\varphi_n\}$ is orthogonal. We may assume that $\{\varphi_n\}$ is orthonormal.
        Since $T$ is compact, there exists $\{\varphi_{n_k}\}$ such that 
        $$\{T\varphi_{n_k}\} = \{\lambda_{n_k}\varphi_{n_k}\} \text{ converges}.$$
        Then
        \[
        ||\lambda_{n_k}\varphi_{n_k} - \lambda_{n_l}\varphi_{n_l}||^2 = \lambda_{n_k}^2 + \lambda_{n_l}^2 > 2\mu^2 > 0,
        \]
        a contradiction.
    
</li>
</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 6.5.**

Suppose $T \neq 0$ is compact and symmetric. Then either $||T||$ or $-||T||$ is an eigenvalue of $T$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
Recall that 
$$||T|| = \sup \{|(Tf, f)| : ||f|| = 1\}.$$

Since $T$ is symmetric, we have either 
\[
||T|| = \sup \{(Tf, f) : ||f|| = 1\} \text{ or } -||T|| = \inf \{(Tf, f) : ||f|| = 1\}
\]
Assume the first case, and $\lambda = ||T||$. Then there exists $\{f_n\} \subset H$ such that 
    $||f_n|| = 1$ and $(Tf_n, f_n) \to \lambda$.
Since $T$ is compact, there exists $\{f_{n_k}\}$ such that
    $Tf_{n_k} \to g \in H$ as $k \to \infty$.
Then
\begin{align*}
||Tf_{n_k} - \lambda f_{n_k}||^2 &= ||Tf_{n_k}||^2 - 2\lambda(Tf_{n_k}, f_{n_k}) + \lambda^2 ||f_{n_k}||^2 \
&\le \lambda^2 - 2\lambda(Tf_{n_k}, f_{n_k}) + \lambda^2 \to 0 \quad \text{as } k \to \infty.
\end{align*}
Thus, $\lambda f_{n_k} \to g$. Since $T$ is continuous, we have 

$$T(\lambda f_{n_k}) = \lambda T(f_{n_k}) \longrightarrow Tg = \lambda g.$$

If $g = 0$, we get 
$$\lambda = \lim_{k \to \infty} (Tf_{n_k}, f_{n_k}) = 0$$ which implies that $||T|| = 0 \implies T = 0$, a contradiction to $T \neq 0$.

Therefore, $\lambda$ is an eigenvalue of $T$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof of Theorem 6.2.*

Let $S = \overline{\text{span} \{ \text{eigenvectors of } T \}}$. Then $S \neq \{0\}$, by Lemma 6.5.

If $S = H$, then we are done.

Otherwise, $H = S \oplus S^\perp$ with $S^\perp \neq \{0\}$.
Note that 
$f \in S \implies Tf \in S$ and $g \in S^\perp \implies Tg \in S^\perp$     
since 
    $(Tg, h) = (g, Th) = 0$ for all $h \in S$.

Now consider the projection $T_1 : S^\perp \to S^\perp$. It is straightforward to check that $T_1$ is compact and symmetric.

Since $T_1 \neq 0$, it follows from Lemma 6.5 that $T_1$ has a nonzero eigenvector in $S^\perp$. This is also an eigenvector of $T$.

</div>

Exercise: 25, 28, 29, 32, 33

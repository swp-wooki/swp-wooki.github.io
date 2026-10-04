---
layout: post
title: "PDEs and Applications 3: Wave and Diffusion Equations"
date: 2026-10-04 12:03:00 +0900
description: "Wave equation의 해와 diffusion equation의 maximum principle, 유일성을 다룬다."
tags: partial-differential-equations lecture-notes
categories: [partial-differential-equations, analysis]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의에서 직접 작성한 원본 필기이다. (Lecture 3)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_3.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

The formula yields a classcial solution. That is, $$u$$ satisfies the equation pointwise. If $$\phi, \psi \in C^2$$, then $$u$$ is continuously twice differentiable with respect to $$x$$ and $$t$$. Hence,

$$
u \in C^2([0, T] \times \mathbb{R}) \quad \text{for any } T > 0.
$$

</li>

<li markdown="1">

(Causality) Fix $$a \in \mathbb{R}$$, that is,

$$
\phi, \psi \neq 0 \text{ on } u(x, t) \ll 1 \text{ and } 0 \text{ otherwise.}
$$

Then after time $$t$$,

$$
u(x, t) \neq 0 \text{ if } a \in [x - ct, x + ct]
$$

Note that

$$
a \in [x - ct, x + ct] \iff |x - a| \leq ct \iff x \in [a - ct, a + ct].
$$

thus the information of the initial data at $$x = a$$ affects the solution on $$[a - ct, a + ct]$$ which we call the **domain of influence** of the point $$(0, a)$$. Conversely, fix $$x, t$$. Then $$u(x, t)$$ is determined by the initial data on $$[x - ct, x + ct]$$ which we call the **domain of dependence** of the point $$(x, t)$$.

</li>

<li markdown="1">

Replace $$\phi$$ and $$\psi$$ by $$u(x, t')$$ and $$u_t(x, t')$$. Then

$$
\begin{aligned}
            u(x, t)
            &= \frac{1}{2} \left[ u(x - c(t - t'), t') + u(x + c(t - t'), t') \right] + \frac{1}{2c} \int_{x - c(t - t')}^{x + c(t - t')} u_t(s, t') \, ds \\
            &= \frac{1}{2} \left[ u(x - c \Delta t, t') + u(x + c \Delta t, t') \right] + \frac{1}{2c} \int_{x - c \Delta t}^{x + c \Delta t} u_t(s, t') \, ds
        \end{aligned}
$$

Then $$u(x, t)$$ is determined by $$[x - ct, x + ct]$$.

</li>

<li markdown="1">

(Energy conservation) Let define the kinetic energy by

$$
KE = \frac{1}{2} \int_{-\infty}^{\infty} |u_t(x, t)|^2 \, dx.
$$

If $$u$$ is smooth and decay s sufficiently fast as $$\vert x\vert  \to \infty$$, then

$$
\begin{aligned}
            \frac{d}{dt} KE
            &= \int_{-\infty}^{\infty} u_t u_{tt} \, dx \\
            &= c^2 \int_{-\infty}^{\infty} u_t u_{xx} \, dx \\
            &= - c^2 \int_{-\infty}^{\infty} u_{xt} u_x \, dx \\
            &= - \frac{c^2}{2} \frac{d}{dt} \int_{-\infty}^{\infty} |u_x|^2 \, dx \\
            &\implies \frac{d}{dt} \left( \frac{1}{2} \int_{-\infty}^{\infty} |u_t|^2 + c^2 |u_x|^2 \, dx \right) = 0.
        \end{aligned}
$$

Then, the total energy is defined by

$$
\frac{1}{2} \int_{-\infty}^{\infty} |u_t|^2 + c^2 |u_x|^2 \, dx
$$

and we can conclude that

$$
\frac{d}{dt} \left( \frac{1}{2} \int_{-\infty}^{\infty} |u_t|^2 + c^2 |u_x|^2 \, dx \right) = 0.
$$

Therefore, the total energy is constant and independent to time $$t$$.

</li>

</ol>

</div>

### 2.3 The Diffusion Equation

Consider the following diffusion equation

$$
u_t = k u_{xx}, \quad 0 \ge x \ge l, \quad t > 0.
$$

Then the following theorem holds.

<div class="real-analysis-statement" markdown="1">

**Theorem (Weak Maximum Principle).**

If a continuous function $$u(s, t)$$[^1] satisfies the diffusion equation in a rectangle defined by

$$
R \coloneq \{(x, t) : 0 \ge x \ge l, 0 \ge t \ge T\},
$$

then the maximum value of $$u(s, t)$$ in the rectangle is assumed either initially ($$t = 0$$) or on the lateral boundary ($$x = 0$$ or $$x = l$$).

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Let $$M$$ be the maximum value of $$u(x, t)$$ on three sides

$$
t = 0, \quad x = 0, \quad x = l.
$$

Claim : $$u(x, t) \le M$$ for all $$(x, t) \in [0, l] \times [0, T]$$

Let $$\epsilon > 0$$ be an arbitrary positive constant and set

$$
v(x, t) \coloneq u(x, t) + \epsilon^2 t.
$$

Then,

WTS : $$v(x, t) \le M + \epsilon l^2$$ on $$R$$.

Indeed, if so,

$$
u(x, t) \le M + \epsilon^2 (l^2 - x^2) \text{ on } R \quad \forall \: \epsilon > 0 \implies u(x, t) \le M \text{ on } R.
$$

By the definition of $$v(x, t)$$, we have

$$
v(x, t) \le M + \epsilon l^2 \text{ on } t = 0, x = 0, x = l.
$$

Inside the rectangle,

$$
\begin{aligned}
        v_t - kv_{xx}
        &= u_t - k(u + \epsilon x^2)_{xx} \\
        &= u_t - ku_{xx} - 2\epsilon k \\
        &= - 2\epsilon k < 0.
    \end{aligned}
$$

Now, assume $$v(x, t)$$ attains its maximum inside the rectangle, which means that there exists

$$
(x_0, t_0) \in (0, l) \times (0, T) \text{ such that } v(x, t) \le v(x_0, t_0) \text{ for all } (x, t) \in R.
$$

However, from the calculus, one knows that

$$
v_t(x_0, t_0) = 0, \quad v_x(x_0, t_0) = 0, \quad \text{and} \quad v_{xx}(x_0, t_0) \le 0.
$$

Then,

$$
(v_t - kv_{xx})(x_0, t_0) \ge 0,
$$

which contradicts the fact that $$(v_t - kv_{xx})(x_0, t_0) < 0$$.

If $$v(x, t)$$ attains its maximum on the top edge,

$$
0 \ge x_0 \ge l, \quad t_0 = T,
$$

still we have

$$
v_x(x_0, t_0) = 0, \quad v_{xx}(x_0, t_0) \le 0.
$$

Furthermore,

$$
v(x_0, t_0) \ge v(x_0, t_0 - \delta) \quad \text{ for all } \delta \text{ with } 0 < \delta \le t_0.
$$

This implies that

$$
v_t(x_0, t_0) = \lim_{\delta \to 0^+} \frac{v(x_0, t_0) - v(x_0, t_0 - \delta)}{\delta} \ge 0,
$$

we have

$$
(v_t - kv_{xx})(x_0, t_0) \ge 0,
$$

and which is contradiction again. Therefore, $$v(x, t)$$ attains its maximum on the lateral boundary or initially. Hence, we have

$$
v \le M + \epsilon l^2 \text{ on } R.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

In general dimension, let $$\Omega$$ be bounded, open, and connected. We write

$$
\Omega_T \coloneq \Omega \times (0, T], \quad \Gamma_T \coloneq \overline{\Omega_T} \setminus \Omega_T.
$$

which denotes $$\Omega$$ the parabolic cylinder and $$\Gamma_T$$ the parabolic boundary.

Then, if $$u \in C_1^2(\Omega_T) \cap C(\overline{\Omega_T})$$ satisfies

$$
u_t = k \Delta u \text{ in } \Omega_T,
$$

then

$$
\max_{\overline{\Omega_T}} u = \max_{\Gamma_T} u.
$$

</li>

<li markdown="1">

(Strong Maximum Principle) If $$u(x, t)$$ attains a maximum at $$(x_0, t_0) \in \Omega_T$$, then $$u$$ is constant in $$\Omega_{t_0}$$. That is, it is constant up to time $$t_0$$.

</li>

</ol>

</div>

Weak maximum principle gives us the uniquenss of the solution of the diffusion equation. We will prove it on the next corollary. Note that it does not guarantee the existence of the solution.

<div class="real-analysis-statement" markdown="1">

**Corollary (Uniqueness of the solution).**

Consider the following diffusion equation

$$
\begin{aligned}
        &u_t - k u_xx = f(x, t) \\
        &u(x, 0) = \phi(x) \\
        &u(0, t) = g(t), \; u(l, t) = h(t), \quad g, h \in C^1, \; \phi \in C^2
    \end{aligned}
$$

If $$u_1, u_2 \in C_1^2(\Omega_T) \cap C(\overline{\Omega_T})$$ are two solutions to above IBVP, then

$$
u_1 \equiv u_2 \quad \text{on } \; \overline{\Omega_T}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Let $$w \coloneq u_1 - u_2$$. Then,

$$
w_t - kw_{xx} \equiv 0, \quad w(x, 0) = 0, \quad w(0, t) = 0, \quad w(l, t) = 0.
$$

By the weak maximum principle, we have

$$
w \le 0 \text{ on } \overline{\Omega_T}.
$$

Apply the same argument to $$-w$$, we are done.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

(Proof by energy method) We can prove the uniqueness of the solution by energy method. Let $$w \coloneq u_1 - u_2$$, consider

$$
\begin{aligned}
            \frac{1}{2} \frac{d}{dt} \int_0^l w^2 \, dx
            &= k \int_0^l w w_{xx} \, dx \\
            &= k w w_x \big|_{x = 0}^{x = l} - k \int_0^l w_x^2 \, dx \le 0
        \end{aligned}
$$

then

$$
\int_0^l w^2 \, dx \le \int_0^l w^2(x, 0) \, dx \tag{$\ast$}.
$$

Thus, if $$w(x, 0) \equiv 0$$, then

$$
\int_0^l w(x, t)^2 \, dx = 0 \quad \text{ for all } \: t \in [0, T] \: \text{ and } \: w \in C(\overline{\Omega_T})
$$

which implies that $$w \equiv 0$$ on $$\overline{\Omega_T}$$. Furthermore, note that $$(\ast)$$ shows that the $$L^2$$-stability estimates with respect to the initial data.

</li>

<li markdown="1">

(Minimum principle) Under the same assumptions, if $$u$$ has positive minimum on $$\overline{\Omega_T}$$, then

$$
\min_{\overline{\Omega_T}} u = \min_{\Gamma_T} u.
$$

which can be proved by applying the weak maximum principle to $$\frac{1}{u}$$.

</li>

</ol>

</div>

[^1]: Note that $$u \in C^1$$ in $$t$$ and $$C^2$$ in $$x$$ is sufficient for the theorem.

{% endraw %}

<!-- prettier-ignore-end -->

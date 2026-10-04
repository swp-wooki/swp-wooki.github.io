---
layout: post
title: "PDEs and Applications 4: Heat Kernel and Reflection"
date: 2026-10-04 12:04:00 +0900
description: "전 실수선에서의 diffusion equation과 heat kernel, 반직선에서의 reflection method를 다룬다."
tags: partial-differential-equations lecture-notes
categories: [partial-differential-equations, analysis]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의에서 직접 작성한 원본 필기이다. (Lecture 4)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_4.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

### 2.4 Diffusion on the whole line

Cosider the following diffusion equation

$$
\begin{aligned}
    u_t &= k u_{xx}, \quad (x \in \mathbb{R}, t > 0) \\
    u(x, 0) &= \phi(x).
\end{aligned}
$$

To construct a solution, one needs to investigate its *invariance properties*.

<ol type="a" markdown="1">

<li markdown="1">

A translation $$u_y(x, t) \coloneq u(x - y, t)$$ of any solution $$u(x, t)$$ is another solution.[^1] for any fixed $$y \in \mathbb{R}$$.

</li>

<li markdown="1">

Any derivative of a solution is again a solution.

</li>

<li markdown="1">

A linear combination of solutions is again a solution.

</li>

<li markdown="1">

An integral of a solution[^2], is again a solution.

</li>

<li markdown="1">

If $$u(x, t)$$ is a solution, so is the dilated function $$u(\sqrt{a}x, at)$$ for any $$a > 0$$.

</li>

</ol>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

(a) + (d) : If $$S(x, t)$$ solves the equation, so does $$S(x-y, t)$$ and

$$
v(x, t) \coloneq \int_{-\infty}^{\infty} S(x-y, t) g(y) \, dy
$$

as long as the integral is justified.

</li>

<li markdown="1">

Note that for (e), we seek a special solution $$Q(x, t)$$ which is dilation-invariant. Choose an initial data for $$Q$$ as

$$
Q = \begin{cases}
            Q(x, 0) = 0, & x < 0 \\
            Q(x, 0) = 1, & x > 0
        \end{cases}
$$

</li>

</ol>

</div>

<ol type="1" markdown="1">

<li markdown="1">

We even look for $$Q(x, t)$$ if the special form

$$
Q(x, t) = g(p), \quad p = \frac{x}{\sqrt{4kt}}. \tag{$\ast$}
$$

so that we can obtain a simpler formula for $$Q$$.

</li>

<li markdown="1">

Put $$(\ast)$$ into the diffusion equation. Then we have

$$
\begin{aligned}
        Q_t &= \frac{dg}{dp} \cdot \frac{dp}{dt} = g'(p) \cdot p_t = g'(p) \cdot \left( - \frac{x}{2\sqrt{4kt^3}} \right) = - \frac{p}{2t} g'(p), \\
        Q_{xx} &= \frac{dg}{dp} \cdot \frac{dp}{dx} = g'(p) \cdot p_x = g'(p) \cdot \frac{1}{\sqrt{4kt}} = g''(p) \cdot p_x^2 = g''(p) \cdot \frac{1}{4kt}.
    \end{aligned}
$$

Thus, the diffusion equation becomes

$$
0 = Q_t - k Q_{xx} = \frac{1}{t} \left( - \frac{p}{2} g'(p) - \frac{1}{4} g''(p) \right)
$$

which is equivalent to

$$
\frac{1}{4} g''(p) + \frac{1}{2} p g'(p) = 0 \iff g''(p) + 2 p g'(p) = 0 \iff (e^{p^2} g'(p))' = 0.
$$

Hence, we have

$$
g(p) = c_1 \int_{0}^{p} e^{-s^2} ds + c_2.
$$

So we set

$$
Q(x, t) = c_1 \int_{0}^{\frac{x}{\sqrt{4kt}}} e^{-p^2} dp + c_2.
$$

</li>

<li markdown="1">

Due to the initial condition, if $$x > 0$$,

$$
1 = \lim_{t \searrow 0} Q(x, t) = \lim_{t \searrow 0} \left( c_1 \int_{0}^{\frac{x}{\sqrt{4kt}}} e^{-p^2} dp + c_2 \right) = c_1 \int_{0}^{\infty} e^{-p^2} dp + c_2 = c_1 \frac{\sqrt{\pi}}{2} + c_2
$$

and if $$x < 0$$,

$$
0 = \lim_{t \searrow 0} Q(x, t) = \lim_{t \searrow 0} \left( c_1 \int_{0}^{\frac{x}{\sqrt{4kt}}} e^{-p^2} dp + c_2 \right) = c_1 \int_{0}^{-\infty} e^{-p^2} dp + c_2 = - c_1 \frac{\sqrt{\pi}}{2} + c_2.
$$

Thus, we can find that

$$
c_1 = \frac{1}{\sqrt{\pi}}, \quad c_2 = \frac{1}{2}.
$$

Hence, if we set

$$
Q(x, t) \coloneq \frac{1}{2} + \frac{1}{\sqrt{\pi}} \int_{0}^{\frac{x}{\sqrt{4kt}}} e^{-p^2}dp
$$

then, we set

$$
u(x, t) \coloneq \int_{-\infty}^{\infty} S(x-y, t) \phi(y) dy
$$

where

$$
S(x, t) \coloneq Q_x(x, t) = \frac{1}{\sqrt{4 \pi k t}} e^{- \frac{x^2}{4kt}}
$$

and $$\phi(x)$$ is the initial data. Since $$\frac{\partial Q}{\partial x}$$ solves the equation, $$u$$ satisfies

$$
u_t = ku_{xx}.
$$

To check $$\lim_{t \searrow 0} u(x, t) = \phi(x)$$, we assume that

$$
\lim_{|y| \to \infty} \phi(y) = 0, \quad \phi: \text{ is differentiable}\quad \text{and}\quad \int_{-\infty}^{\infty} |\phi'(y)| dy < \infty.
$$

Then one can check that

$$
\begin{aligned}
        u(x, t)
        &= - \int_{-\infty}^{\infty} S(x-y, t) \phi(y) dy \\
        &= - \int_{-\infty}^{\infty} \frac{\partial}\partial{y}\{Q(x-y, t)\} \phi(y) dy \\
        &= - \big[ Q(x-y, t) \phi(y) \big]_{y=-\infty}^{y=\infty} + \int_{-\infty}^{\infty} Q(x-y, t) \phi'(y) dy \\
        &= \int_{-\infty}^{\infty} Q(x-y, t) \phi'(y) dy.
    \end{aligned}
$$

Therefore, we have

$$
\begin{align*}
        \lim_{t \searrow 0} u(x, t)
        &= \lim_{t \searrow 0} \int_{-\infty}^{\infty} Q(x-y, t) \phi'(y) dy \tag{$\ast\ast$}\\
        &= \int_{-\infty}^{\infty} \lim_{t \searrow 0} Q(x-y, t) \phi'(y) dy \\
        &= \int_{-\infty}^{x} \phi'(y) dy \\
        &= \phi(x).
    \end{align*}
$$

Note that we used the dominated convergence theorem in $$(\ast\ast)$$, and we get the pointwise convergence of the solution to the initial data.

</li>

</ol>

Now we have the following formula:

$$
u(x, t) = \int_{-\infty}^{\infty} S(x-y, t) \phi(y) dy = S(\cdot, t) * \phi(x)
$$

Such function $$S$$ is called the source function, Green's function, fundamental solution, or the heat kernel.

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

The source function, if rearded as a family of functions parametrized by $$t$$,[^3]forms a family of good kernelsas $$t \searrow 0$$, that is, it satisfies the following properties:

<ol type="i" markdown="1">

<li markdown="1">

$$\int_{-\infty}^{\infty} S(x, t) dx = 1$$ for all $$t > 0$$.

</li>

<li markdown="1">

$$\sup_{t > 0} \int_{-\infty}^{\infty} \vert S(x, t)\vert  dx < \infty$$.

</li>

<li markdown="1">

$$\int_{\vert x\vert  > \delta} S(x, t)dx \to 0$$ as $$t \searrow 0$$ for each $$\delta > 0$$.

</li>

</ol>

Moreover,

$$
\int_{-\infty}^{\infty} |\phi(x)|dx < \infty \implies \int_{-\infty}^{\infty} |S(\cdot, t)*\phi - \phi|dx \to 0 \text{ as } t \searrow 0
$$

which means the $$L^1$$ convergence of the solution formula to the initial data.

</li>

<li markdown="1">

As $$t \to \infty$$,

$$
S(x, t) = \frac{1}{\sqrt{4 \pi k t}} e^{- \frac{x^2}{4kt}} \to 0 \quad \text{uniformly in } x \in \mathbb{R}.
$$

since $$\vert S(x, t)\vert  \leq \frac{1}{\sqrt{4 \pi k t}}$$. Thus, once $$\phi$$ is merely integrable, then

$$
u \coloneq S(\cdot, t) * \phi
$$

satisfies the heat equation on $$(-\infty, \infty) \times (0, \infty)$$ and becomes a smooth function.

</li>

</ol>

</div>

## 3. Reflections and Sources

### Diffusion on the half line (Sec. 3.1 and 3.3)

Now we consider the homogeneous diffusion equation with homogeneous Dirichlet boundary condition on the half line:

$$
\begin{aligned}
    v_t &= k v_{xx}, \quad (x > 0, t > 0) \\
    v(x, 0) &= \phi(x), \quad (x > 0) \\
    v(0, t) &= 0, \quad (t > 0)
\end{aligned}
$$

Our strategy is to extend our problem to the whole real line and restrict the solution on $$\mathbb{R}$$ to $$[0, \infty)$$. For this, we consider the odd extension $$\phi_{\text{odd}}$$ of the initial data $$\phi$$;

$$
\phi_{\text{odd}}(x) \coloneq \begin{cases}
    \phi(x), & x > 0 \\
    0, & x = 0 \\
    -\phi(-x), & x < 0
\end{cases}
$$

Let $$u(x, t)$$ be the solution of

$$
\begin{aligned}
    u_t &= k u_{xx}, \quad (x \in \mathbb{R}, t > 0) \\
    u(x, 0) &= \phi_{\text{odd}}(x), \quad (x \in \mathbb{R})
\end{aligned}
$$

then we have

$$
u(x, t) = S(\cdot, t) * \phi_{\text{odd}}(x) = \int_{-\infty}^{\infty} S(x-y, t) \phi_{\text{odd}}(y) dy
$$

solves the equation.

Our choice is to take

$$
v(x, t) \coloneq u(x, t) \big|_{x \geq 0}.
$$

One needs to check $$u(0, t) = 0$$; First, $$u$$ is smooth once $$\phi$$ is integrable.[^4]
Furthermore,

$$
\begin{aligned}
    u(-x, t) &= \int_{-\infty}^{\infty} S(-x-y, t) \phi_{\text{odd}}(y) dy \\
    &= \int_{-\infty}^{\infty} S(x+y, t) \phi_{\text{odd}}(y) dy \\
    &= \int_{-\infty}^{\infty} S(x-y, t) \phi_{\text{odd}}(-y) dy \\
    &= - \int_{-\infty}^{\infty} S(x-y, t) \phi_{\text{odd}}(y) dy \\
    &= - u(x, t)
\end{aligned}
$$

recall that $$S$$ is an even function. Thus, $$v(0, t) = u(0, t) = 0$$ for all $$t > 0$$.

If $$\phi$$ satisfies good properties, then

$$
\lim_{t \searrow 0} v(x, t) = \phi(x)
$$

and we can see

$$
\begin{aligned}
    v(x, t) &= \int_{-\infty}^{\infty} S(x-y, t) \phi_{\text{odd}}(y) dy \\
    &= \int_{0}^{\infty} S(x-y, t) \phi(y) dy - \int_{-\infty}^{0} S(x-y, t) \phi(y) dy \\
    &= \int_{0}^{\infty} \left( S(x-y, t) - S(x+y, t) \right) \phi(y) dy.
\end{aligned}
$$

This kind of method is called the **method of odd extensions** or the **reflection method**.

[^1]: We disregard the initial condition for now.

[^2]: For example, $$\int_{0}^{x} u(y, t)dy$$

[^3]: Not as $$S(x, t)$$, but as $$\{S(\cdot, t)\}_{t > 0}$$.

[^4]: This is basic assumption for initial data of the diffusion equation.

{% endraw %}

<!-- prettier-ignore-end -->

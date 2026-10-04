---
layout: post
title: "PDEs and Applications 2: Models, Boundary Conditions, and Waves"
date: 2026-10-04 12:02:00 +0900
description: "파동 및 확산 모형, initial condition과 boundary condition, well-posedness와 wave equation을 다룬다."
tags: partial-differential-equations lecture-notes
categories: [partial-differential-equations, analysis]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의에서 직접 작성한 원본 필기이다. (Lecture 2)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_2.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

### 1.3 Other equations

#### Wave equation

Consider a flexible, elastic, homogenous string of length $$l$$ which undergoes relatively small transverse vibrations. Set:

<ol type="1" markdown="1">

<li markdown="1">

$$u(x, t)$$: displacement from equilibrium at time $$t$$ and position $$x$$.

</li>

<li markdown="1">

$$\rho$$ : desnsity of the string, which is assumed to be constant.

</li>

<li markdown="1">

$$T$$ : the magnitude of the tension vector.

</li>

</ol>

We may assume:

<ol type="1" markdown="1">

<li markdown="1">

The motion is assumed to be purely transverse.

</li>

<li markdown="1">

The string is flexible; the tension is directed tangentially along the string.

</li>

</ol>

Consider the part of the string between $$x = x_0$$ and $$x = x_1$$. By Newton's law,

$$
F = ma
$$

we have the longitudinal and transverse components of the force:

$$
\begin{aligned}
    \text{ (longitudinal)} \qquad \frac{T}{\sqrt{1 + u_x^2}} \Big|_{x_0}^{x_1} &= 0, \\
    \text{ (transverse)} \qquad \frac{T u_x}{\sqrt{1 + u_x^2}} \Big|_{x_0}^{x_1} &= \int_{x_0}^{x_1} \rho u_{tt} \, dx.
\end{aligned}
$$

We also assume that the motion is small;

$$
| u_x | \ll 1 \implies \sqrt{1 + u_x^2} \approx 1.
$$

Thus,

$$
T u_x \Big|_{x_0}^{x_1} \approx \int_{x_0}^{x_1} \rho u_{tt} \, dx.
$$

and taking the limit as $$x_1 \to x_0$$ yields

$$
(Tu_x)_x = \rho u_{tt}.
$$

If $$T$$ is constant,

$$
u_{tt} = c^2 u_{xx}, \quad c^2 = \sqrt{\frac{T}{\rho}}.
$$

where $$c$$ is called the wave speed.

#### Diffusion / Heat equation

Imagine a motionless liquid filling a straight pipe and a chemical substance diffusing through the liquid. Let

$$u(x, t) : $$ the concentration of the chemical at time $$t$$ and position $$x$$.

The mass of the chemical in the interval $$[x_0, x_1]$$ is given by

$$
M \coloneq \int_{x_0}^{x_1} \rho u \, dx.
$$

which implies

$$
\begin{aligned}
\frac{d}{dt}u
&= \int_{x_0}^{x_1} \rho u_t \, dx \\
&= \text{(flow in)} - \text{(flow out) at t} \\
\end{aligned}
$$

By Fick's law,

$$
\begin{aligned}
\text{(flow in)} &= -k u(x_0, t) \\
\text{(flow out)} &= -k u(x_1, t)
\end{aligned}
$$

Taking the limit as $$x_1 \to x_0$$ yields

$$
u_t = k (u_x)_x = k u_{xx}.
$$

### 1.4 Initial and Boundary Conditions

In general, PDEs can have infinitely many solutions. Hence, to single out one solution, one needs to impose auxiliary conditions which motivated by physical and practical reasons. Such conditions are called **initial condition** and **boundary condition**.

Note that in each physical or real-world problem, there is domain $$D$$ in which the PDE is valid. Let us consider the following example.

<div class="real-analysis-statement" markdown="1">

**Example (Vibrating String).**

For the vibrating string,

$$
D = [0, l] \implies \partial D = \{0, l\}
$$

where $$\partial D$$ denotes the boundary of $$D$$. Needless to say, at the boundary, the string is fixed. Hereby we obtain the following boundary conditions:

$$
u(0, t) = c_1 \quad \text{and} \quad u(l, t) = c_2
$$

Even if we do not know $$c_1$$ and $$c_2$$ exactly, we can guess that there must be some constants $$c_1$$ and $$c_2$$ such that the above boundary conditions hold.

</div>

#### 3 Kinds of boundary conditions

There are three kinds of boundary conditions:

<ol type="1" markdown="1">

<li markdown="1">

**Dirichlet condition** : $$u$$ is specified on the boundary $$\partial D$$.

</li>

<li markdown="1">

**Neumann condition** : Normal derivative is specified as

$$
\frac{\partial u}{\partial n} \coloneq \nabla u \cdot \mathbf{n}
$$

where $$\mathbf{n}$$ is outward normal vector to the boundary $$\partial D$$.

</li>

<li markdown="1">

**Robin condition** :

$$
\frac{\partial u}{\partial n} + \alpha u \text{ is specified}
$$

</li>

</ol>

<div class="real-analysis-statement" markdown="1">

**Example of boundary conditions.**

<ol type="1" markdown="1">

<li markdown="1">

**(Vibrating String)** As we have seen in the previous example, the boundary conditions are given by

$$
u(0, t) = c_1 \quad \text{and} \quad u(l, t) = c_2
$$

which is an example of Dirichlet condition.

</li>

<li markdown="1">

**(Heat Conduction)** The object $$D$$ is perfectly insulated and the heat is flowing through $$D$$. Then, no heat flows across the boundary $$\partial D$$. This is an example of Neumann condition since

$$
\frac{\partial u}{\partial n} = 0 \quad \text{on } \partial D
$$

and it is homogeneous.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

In case, the domain $$D$$ is unbounded, one might provide continuity conditions at infinity. For example,

$$
\lim_{|x| \to \infty} \rho (x, t) = \rho_{\infty} \ge 0 \quad \text{and} \quad \int_{\mathbb{R}^{d}} \rho (x, t) \, dx = 1, \dots
$$

</div>

### 1.5 Well-posedness Problems

For a physical or real-world problem, scientists and engineers impose physcially realistic conditions. For example, initial and boundary conditions or regularity of solutions. Then the mathematicians need to check:

<ol type="1" markdown="1">

<li markdown="1">

**Existence** : Whether there exists at least a solution satisfying all the conditions.

</li>

<li markdown="1">

**Uniqueness** : There is at most one solution.

</li>

<li markdown="1">

**Stability** : Closely related to uniqueness, the unique solution depends in a stable manners on the initial and boundary data of the problem.

</li>

</ol>

If the PDE problem, which composed with the equation and conditions, with given conditions satisfies all the above three conditions, we say it is **well-posed** or **in the sense of Hadamard**. Otherwise, it is **ill-posed**.

<div class="real-analysis-statement" markdown="1">

**Example of well-posedness.**

<ol type="1" markdown="1">

<li markdown="1">

Consider

$$
u_{tx} + cu_{xx} = 0, \quad \text{and } \quad u(x, 0) = u_0(x)
$$

that is, the initial distribution of $$u(x, t)$$ at time $$t = 0$$ is specified with $$u_0(x)$$. Note that

$$
u(x, t) = u_0(x - ct) + f(t)
$$

is a solution which implies that the solution is not unique.

</li>

<li markdown="1">

Consider

$$
u_{xx} + u_{yy} = 0, \quad \text{where } \quad D = \{-\infty < x < \infty, 0 < y < \infty\}
$$

For each $$n \in \mathbb{N}$$, impose boundary conditions

$$
u_n(x, 0) = 0 \quad \text{and} \quad \frac{\partial u_n}{\partial y} (x, 0) = e^{-\sqrt{n}} \sin(nx)
$$

then, the solution is given by

$$
u_n(x, y) \coloneq \frac{1}{n} e^{-\sqrt{n}} \sin(nx) \sinh(ny).
$$

The boundary data converges to zero pointwise as $$n \to \infty$$, but the solution, if $$y \to 0$$ is fixed, $$u_n$$ does not tend to zero as $$n \to \infty$$. Hence, the solution is not stable.

</li>

</ol>

</div>

## Chapter 2. Wave and Diffusions

### 2.1 The wave equation

Consider the following problem:

$$
\begin{aligned}
    &u_{tt} - c^2 u_{xx} = 0, \quad -\infty < x < \infty, \quad t > 0, \\
    &u(x, 0) = \phi(x), \quad u_t(x, 0) = \psi(x).
\end{aligned}
$$

One may factorize the equation as[^1]

$$
(\partial_t - c \partial_x)(\partial_t + c \partial_x) u = 0 \quad \text{: factorization of the differential operator}
$$

#### General solution

We need to introduce *characteristic coordinates*:

$$
\xi = x + ct, \quad \eta = x - ct \implies \quad \partial_x = \partial_\xi + \partial_\eta, \quad \partial_t = c\partial_\xi - c\partial_\eta.
$$

Then we get

$$
\partial_t - c \partial_x = -2c \partial_\eta, \quad \partial_t + c \partial_x = 2c \partial_\xi
$$

so that we can rewrite the wave equation as

$$
u_{tt} - c^2 u_{xx} = 0 \iff - \Delta c^{2} \partial_{\eta} \partial_\xi u = 0.
$$

Therefore, we have

$$
u = f(\xi) + g(\eta) = f(x + ct) + g(x - ct)
$$

#### Solution to the initial value problem

Note that following approach is called Duhamel's principle for linear transport equations. Let $$u$$ be a solution to the wave equation and set

$$
v \coloneq (\partial_t + c \partial_x) u.
$$

then

$$
\begin{aligned}
    v(x, 0)
    &= \partial_t u(x, 0) + c \partial_x u(x, 0) \\
    &= \psi(x) + c \phi'(x)
\end{aligned}
$$

we get

$$
v_t - c v_x = 0, \quad \therefore \frac{dx}{dt} = -c.
$$

Now, method of characteristics imply

$$
v(x - ct, t) = v(x, 0) \quad \text{or, } \quad v(x, t) = v(x + ct, 0) = \psi(x + ct) + c \phi'(x + ct).
$$

From $$u_t + cu_x = v$$, consider the charactertistic flow

$$
\frac{dx(t)}{dt} = c, \quad x(0) = x
$$

implies that

$$
\begin{aligned}
    \frac{d}{dt} (u(x(t), t))
    &= (u_t + \frac{dx}{dt} u_x)(x(t), t) \\
    &= v(x(t), t) \\
    &\implies u(x(t), t) = u(x, 0) + \int_0^t v(x(s), s) \, ds \\
    &\iff v(x + ct, t) = \phi(x) + \int_0^t v(x + cs, s) \, ds
\end{aligned}
$$

since $$x \longleftrightarrow x + ct$$. Then we obtain

$$
\begin{align*}
    u(x, t)
    &= u(x - ct, 0) + \int_0^t v(x - c(t - s), s) \, ds \\
    &= \phi(x - ct) + \int_0^t v(x - ct + 2cs, 0)ds\\
    &= \phi(x - ct) + \int_0^t \psi(x - ct + 2cs) + c \phi'(x - ct + 2cs) \, ds \\
    &= \phi(x - ct) + \int_{x-ct}^{x+ct} \psi(\tau) + c \phi'(\tau) \, \frac{d\tau}{2c} \tag{$\ast$}\\
    &= \frac{1}{2} \left[ \phi(x - ct) + \phi(x + ct) \right] + \frac{1}{2c} \int_{x - ct}^{x + ct} \psi(s) \, ds \tag{: d'Alembert's formula}
\end{align*}
$$

where ($$\ast$$) we used the change of variable $$x - ct + 2cs = \tau \implies ds = \frac{d\tau}{2c}$$

[^1]: In a higher dimension,

    $$
    \begin{aligned}
            0
            &= u_{tt} - c^2 \Delta u \\
            &= (\partial_t - i c \sqrt{-\Delta})(\partial_t + i c \sqrt{-\Delta}) u.
        \end{aligned}
    $$

{% endraw %}

<!-- prettier-ignore-end -->

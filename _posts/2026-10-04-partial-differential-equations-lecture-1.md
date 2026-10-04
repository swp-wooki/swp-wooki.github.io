---
layout: post
title: "PDEs and Applications 1: First-Order Equations"
date: 2026-10-04 12:01:00 +0900
description: "편미분방정식의 기본 개념과 일계 방정식의 해법을 다룬다."
tags: partial-differential-equations lecture-notes
categories: [partial-differential-equations, analysis]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의에서 직접 작성한 원본 필기이다. (Lecture 1)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_1.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

## 1. Where PDEs Come From

### 1.1 What is a PDE?

General representation of PDEs is of form

$$
F(x, u(x), \partial_{x_i}u(x), \partial_{x_i x_j}u(x), \cdots) = 0
$$

which is a relation that function $$u = u(x)$$ depending on n-dimensional variable $$x = (x_1, \cdots, x_n)$$ satisfies.
If $$x$$ is one-dimensional, then it is called an **Ordinary Differential Equation (ODE)**.

Many of the principles or laws underlying the behavior of the nature, such as Nweton's law, are statements of relations inolving rules at which things happen. In this case, the rules are expressed in terms of derivatives, and the relations are expressed in terms of differential equations.

<div class="real-analysis-statement" markdown="1">

**Examples of PDEs.**

<ol type="1" markdown="1">

<li markdown="1">

(Linear Transport Equation)

$$
\frac{\partial u}{\partial t} + c \frac{\partial u}{\partial x}
        = u_t + cu_x
        = 0 \quad \text{for } c \in \mathbb{R} \text{ and } u = u(x, t).
$$

</li>

<li markdown="1">

(Conservation Law)

$$
\frac{\partial u}{\partial t} + \frac{\partial}{\partial x} \left[ F(u) \right]
        = u_t + F(u)_x
        = 0
$$

</li>

<li markdown="1">

(Diffusion or Heat Equation)

$$
\frac{\partial u}{\partial t} - k\frac{\partial^{2} u}{\partial x^{2}}
        = u_t - k u_{xx}
        = 0
$$

</li>

<li markdown="1">

(Wave Equation)

$$
\frac{\partial^{2} u}{\partial t^{2}} - c^{2} \frac{\partial^{2} u}{\partial x^{2}}
        = u_{tt} - c^2 u_{xx}
        = 0
$$

</li>

<li markdown="1">

(Soliton or KdV Equation)

$$
\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + \frac{\partial^{3} u}{\partial x^{3}}
        = u_{t} + uu_{x} + u_{xxx}
        = 0
$$

</li>

<li markdown="1">

(Linear Schrödinger Equation)

$$
\frac{\partial u}{\partial t} + i \frac{\partial^{2} u}{\partial x^{2}}
        = u_{t} + i u_{xx}
        = 0
$$

</li>

</ol>

</div>

Note that there exist many different types of PDEs. On the above examples, some equations are mentioned to be linear. Which makes a PDE to be linear? Let us define the linearity of a PDE in the following definition.

<div class="real-analysis-statement" markdown="1">

**Definition (Linearity).**

Let $$\mathcal{L}$$ be a differential operator.

<ol type="1" markdown="1">

<li markdown="1">

If $$\mathcal{L}$$ satisfies

$$
\mathcal{L}(a u + b v) = a \mathcal{L}(u) + b \mathcal{L}(v)
$$

for any (smooth) functions $$u, v$$ and any constants $$a, b$$, then $$\mathcal{L}$$ is called a **linear**.

</li>

<li markdown="1">

Equations of the form

$$
\mathcal{L}u = 0
$$

is called a **homogeneous linear equation**.

</li>

<li markdown="1">

Equations of the form

$$
\mathcal{L}u = g \quad \text{with } g \neq 0
$$

is called a **inhomogeneous linear equation**.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Examples of Linearity.**

<ol type="1" markdown="1">

<li markdown="1">

(Example of Linear Differential Operator)

$$
\mathcal{L} = \frac{\partial}{\partial t} + c \frac{\partial}{\partial x}
$$

</li>

<li markdown="1">

(Example of Homogeneous Linear Equation)

$$
\mathcal{L} = \frac{\partial}{\partial t} + c \frac{\partial}{\partial x}, \quad
        \mathcal{L} = \frac{\partial}{\partial t} - k\frac{\partial^{2}}{\partial x^{2}}, \quad
        \mathcal{L} = \frac{\partial^{2}}{\partial t^{2}} - c^{2} \frac{\partial^{2}}{\partial x^{2}}
$$

</li>

</ol>

</div>

Now we talk about the solutions of PDEs. A **solution** of a PDE is a function $$u(x_1, \cdots, x_n)$$ that satisfies the equation identically, at least some region of the $$x_1, \ldots, x_n$$ variables. The following remark is important technique to solve the equation.

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

(The Superposition Principle) For $$\mathcal{L}u = 0$$, if

$$
u_1, u_2, \cdots, u_n
$$

are solutions, then their arbitrary linear combination

$$
\sum_{i=1}^{n} c_i u_i(x)
$$

is also a solution.

</li>

<li markdown="1">

For $$\mathcal{L}u = g$$, suppose $$u$$ is a solution and $$v$$ is the solution to $$\mathcal{L}v = 0$$. Then $$u + v$$ is also a solution to $$\mathcal{L}u = g$$. That is,

general solution to $$\mathcal{L}u = g$$ $$\iff$$ particular solution + general solution to $$\mathcal{L}u = 0$$

which we already know from the theory of ODEs.

</li>

</ol>

</div>

### 1.2 First-order Equations

#### Derivation of linear transport equation

Consider a motion of an object among with constant velocity $$c$$. Let $$x(t)$$ be the position of the object at time $$t$$. Then we have

$$
\frac{dx}{dt} = c \quad (\text{which is equivalent to }\dot{x} = c)
$$

and with simple calculation, we have

$$
x(t) = x(0) + ct \quad \text{for some constant } x_0.
$$

Note that for this case, we only consider *single* object. What if we have more than one object? Furthermore, if the number of objects is quite large, then we only know about their distribution. This leads us to the following question:

<div class="real-analysis-statement" markdown="1">

**Question.**

What if we have a distribution $$u_0(x)$$ of $$x(0)$$'s? How can we describe the motion of the distribution $$u(x, t)$$ of $$x(t)$$'s?

</div>

To answer this question, let us derive the linear transport equation. Remeber that our goal is to expand the description of the motion from a single object to a distribution. Let $$u(\cdot, t)$$ be the distribution
[^1] of $$x(t)$$. Then, the objects in $$[a, b]$$ at time $$t$$ will move to $$[a + ch, b + ch]$$ after time $$h$$. That is,

$$
\int_a^b u(x, t) \, dx = \int_{a+ch}^{b+ch} u(x, t+h) \, dx \quad \text{for all } a, b \in \mathbb{R} \text{ and } h > 0.
$$

The idea of above equality is the number of objects would be conserved. If the distribution of objects moves constantly with $$c$$, then the overall distribution of $$[a, b]$$ will equal the distribution of $$[a + ch, b + ch]$$ after time $$h$$. Now, to see the average density of the objects in $$[a, b]$$, we divide both sides by $$b-a$$:

$$
\frac{1}{b-a} \int_a^b u(x, t) \, dx = \frac{1}{b-a} \int_{a+ch}^{b+ch} u(x, t+h) \, dx
$$

Letting $$b \to a$$, by FTC[^2],

$$
\begin{aligned}
    &\lim_{b \to a} \frac{1}{b-a} \int_a^b u(x, t) \, dx = \lim_{b \to a} \frac{F(b) - F(a)}{b - a} = F'(a) = u(a, t) \\
    &\lim_{b \to a} \frac{1}{b-a} \int_{a+ch}^{b+ch} u(x, t+h) \, dx = u(a + ch, t+h)
\end{aligned}
$$

we have

$$
u(a, t) = u(a + ch, t+h) \quad \text{for all } a \in \mathbb{R} \text{ and } h > 0.
$$

Then,

$$
\frac{u(a + ch, t+h) - u(a, t)}{h} = 0 \implies \frac{u(a + ch, t+h) - u(a, t+h)}{h} + \frac{u(a, t+h) - u(a, t)}{h} = 0
$$

Letting $$h \to 0$$, we have[^3]

$$
u_t(a, t) + c u_x(a, t) = 0 \quad \text{for all } a \in \mathbb{R}.
$$

Here, an object initially at $$x$$ goes to $$x + ct$$ after time $$t$$. Which is same as an object at position $$x$$ at time $$t$$ have moved from $$x - ct$$ at time $$0$$. Therefore, we have

$$
\begin{aligned}
    u(x, t) = u(x - ct, 0)
    &\iff u(x +ct, t) = u(x, 0) \\
    &\iff u(x(t), t) = u(x, 0) \quad \text{where } \frac{dx}{dt} = c \text{ and } x(0) = x.
\end{aligned}
$$

#### Method of characteristics

In general, if the velocity is not constant but depends on $$x$$ and $$t$$, then we have

$$
u_{t} + f(x, t)u_x = 0
$$

where $$f(x, t)$$ is the velocity function. Now consider

$$
\frac{d}{dt}x(t) = f(x(t), t) \quad \text{with } x(0) = x \implies u(x(t), t) = u(x, 0).
$$

Then,

$$
\begin{aligned}
    \frac{d}{dt} \left[ u(x(t), t) \right]
    &= (u_t + \frac{d}{dt}x(t)u_x)(x(t), t) \\
    &= u_t + f(x, t)u_x \Big|_{(x, t) = (x(t), t)} = 0
\end{aligned}
$$

That is, $$u(x(t), t) = u(x, 0)$$. Hence, if we can write

$$
x(0) = g(x(t), t)
$$

then

$$
u(x, t) = u(g(x, t), 0).
$$

Note that

$$
u(t) + cu(x) = 0 \quad \text{and} \quad x = x + ct - ct = x(t) - ct.
$$

This is called the **method of characteristics** and characteristic equation is given by

$$
\frac{dx}{dt} = f(x, t).
$$

Each $$x(t)$$ with $$x(0)$$ given is called a **characteristic curve**.

<div class="real-analysis-statement" markdown="1">

**Example 1.**

$$
\begin{equation}
    4u_x - 3u_y = 0
\end{equation}
$$

$$
\begin{equation}
    u(y, 0) = y^3
\end{equation}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof (Solution).*

Regard $$(x, y)$$ as $$(x, t)$$, then we have

$$
\begin{equation}
        4u_x - 3u_t = 0 \implies u_x - \frac{3}{4}u_t = 0
    \end{equation}
$$

$$
\begin{equation}
        u(t, 0) = t^3
    \end{equation}
$$

Since the characteristic equation is given by

$$
\begin{align}
        \frac{dt}{dx} = -\frac{3}{4}
        &\implies x(t) = x(0) - \frac{4}{3}t \\
        &\implies x(0) = x(t) + \frac{4}{3}t
    \end{align}
$$

Therefore, we have

$$
\begin{align}
        u(x, t)
        &= u(x + \frac{4}{3}t, 0) \\
        &= (x + \frac{4}{3}t)^3
    \end{align}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.**

$$
\begin{equation}
    u_x + yu_y = 0
\end{equation}
$$

$$
\begin{equation}
    u(y, 0) = f(y)
\end{equation}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof (Solution).*

Regard $$(x, y) \longleftrightarrow (t, x)$$, then we get

$$
\begin{equation}
        u_t + xu_x = 0
    \end{equation}
$$

$$
\begin{equation}
        u(x, 0) = f(x).
    \end{equation}
$$

Then characteristic equation is given by

$$
\begin{align}
        \frac{dx}{dt} = x
        &\implies x(t) = x(0)e^t
        &\implies x(0) = x(t)e^{-t}
    \end{align}
$$

Therefore, we have

$$
u(x, t) = u(xe^{-t}, 0) = f(xe^{-t})
$$

</div>

[^1]: This means that $$u(x, t)$$ is the density of objects at position $$x$$ at time $$t$$. That is, the number of objects in $$[a, b]$$ at time $$t$$ is given by

    $$
    \int_a^b u(x, t) \, dx.
    $$

[^2]: We may assume that $$F(b) = \int_a^b u(x, t) \, dx$$.

[^3]: Indeed, the calculation is as follows:

    $$
    \begin{aligned}
            &\lim_{h \to 0} \frac{u(a + ch, t+h) - u(a, t+h)}{h}
            = \lim_{h \to 0} \frac{u(a + ch, t+h) - u(a, t+h)}{ch} \cdot c = c u_x(a, t) \\
            & \lim_{h \to 0} \frac{u(a, t+h) - u(a, t)}{h} = u_t(a, t)
        \end{aligned}
    $$

{% endraw %}

<!-- prettier-ignore-end -->

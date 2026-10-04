---
layout: post
title: "Probability Theory 7: Martingales and Games of Chance"
date: 2026-10-04 12:07:00 +0900
description: "Martingale의 정의와 성질, 도박 모형과의 관계를 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 7)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_7.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

### 3.3 Martingales

<div class="real-analysis-statement" markdown="1">

**Definition (Martingale).**

A sequence $$\xi_n$$ is a **martingale** with respect to a filtration $$(\mathcal{F}_n)$$ if

<ol type="1" markdown="1">

<li markdown="1">

$$\xi_n \in L^1$$.

</li>

<li markdown="1">

$$(\xi_n)$$ is adapted to $$(\mathcal{F}_n)$$.

</li>

<li markdown="1">

$$E(\xi_{n+1} \vert  \mathcal{F}_n) = \xi_n$$ a.s.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Example 3.3.**

Let $$(\eta_n)$$ be independent random variables with $$E(\eta_n) = 0$$ for every $$n \geq 1$$. Define

$$
\xi_n = \sum_{k=1}^{n} \eta_k, \quad \mathcal{F}_n = \sigma(\eta_1, \ldots, \eta_n).
$$

Then $$(\xi_n)$$ is a martingale with respect to $$(\mathcal{F}_n)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

The sum $$\xi_n$$ is $$\mathcal{F}_n$$-measurable and integrable, since

$$
E(|\xi_n|) \leq \sum_{k=1}^{n} E(|\eta_k|) < \infty.
$$

Since $$\eta_{n+1}$$ is independent of $$\mathcal{F}_n$$, we have

$$
\begin{aligned}
        E(\xi_{n+1} | \mathcal{F}_n) &= E(\xi_n + \eta_{n+1} | \mathcal{F}_n) \\
        &= E(\xi_n | \mathcal{F}_n) + E(\eta_{n+1} | \mathcal{F}_n) \\
        &= \xi_n + E(\eta_{n+1}) = \xi_n.
    \end{aligned}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Example 3.4.**

Let $$\xi \in L^1$$, and let $$(\mathcal{F}_n)$$ be a filtration. Then the sequence defined by

$$
\xi_n = E(\xi | \mathcal{F}_n)
$$

is a martingale with respect to $$(\mathcal{F}_n)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\xi_n$$ is integrable, $$\mathcal{F}_n$$ measurable by definition of conditional expectation. Furthermore, since $$\mathcal{F}_n \subset \mathcal{F}_{n+1}$$, we have

$$
E(\xi_{n+1} | \mathcal{F}_n) = E(E(\xi | \mathcal{F}_{n+1}) | \mathcal{F}_n) = E(\xi | \mathcal{F}_n) = \xi_n.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.3.**

Show that a martingale $$(\xi_n)$$ has constant expectation:

$$
E(\xi_n) = E(\xi_1) \quad \text{for all } n \geq 1.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

By definition of martingale and conditional expectation, we have

$$
E(\xi_{n+1}) = E(E(\xi_{n+1} | \mathcal{F}_n)) = E(\xi_n).
$$

By induction, we have $$E(\xi_n) = E(\xi_1)$$ for all $$n \geq 1$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.4.**

Suppose $$(\xi_n)$$ is a martingale with respect to $$(\mathcal{F}_n)$$. Show that it is also martingale with respect to its natural filtration $$(\mathcal{G}_n)$$ defined by

$$
\mathcal{G}_n = \sigma(\xi_1, \ldots, \xi_n).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Since $$\mathcal{G}_n \subset \mathcal{F}_n$$, we have

$$
\begin{aligned}
        E(\xi_{n+1} | \mathcal{G}_n) &= E(E(\xi_{n+1} | \mathcal{F}_n) | \mathcal{G}_n) \\
        &= E(\xi_n | \mathcal{G}_n) = \xi_n.
    \end{aligned}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.5 (Symmetric Random Walk).**

Let $$(\eta_n)$$ be independent random variables with

$$
P\{\eta_n = 1\} = P\{\eta_n = -1\} = \frac{1}{2},
$$

and define the symmetric random walk by

$$
\xi_0 = 0, \quad \xi_n = \sum_{k=1}^{n} \eta_k, \quad n \geq 1.
$$

Show that $$\xi_n^2 - n$$ is a martingale for the filtration

$$
\mathcal{F}_n = \sigma(\eta_1, \ldots, \eta_n), \quad \mathcal{F}_0 = \{\emptyset, \Omega\}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Since $$\vert \xi_n\vert  \leq n$$, the variable $$\xi_n^2 - n$$ is integrable, and it is $$\mathcal{F}_n$$-measurable.
The new step is independent of $$\mathcal{F}_n$$ and satisfies

$$
E(\eta_{n+1}) = 0 \quad \text{and} \quad E(\eta_{n+1}^2) = 1.
$$

Thus,

$$
\begin{aligned}
        E(\xi_{n+1}^2 - (n+1) | \mathcal{F}_n) &= E((\xi_n + \eta_{n+1})^2 - (n+1) | \mathcal{F}_n) \\
        &= E(\xi_n^2 + 2\xi_n\eta_{n+1} + \eta_{n+1}^2| \mathcal{F}_n) - (n+1)\\
        &= \xi_n^2 + 2\xi_n E(\eta_{n+1}) + \eta_{n+1}^2 - (n+1) \\
        &= \xi_n^2 - n.
    \end{aligned}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.6.**

$$\zeta_n = (-1)^n \cos(\pi \xi_n)$$ is a martingale.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Homework.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

A sequence $$(\xi_n)$$ is a **submartingale** with respect to a filtration $$(\mathcal{F}_n)$$ if

<ol type="1" markdown="1">

<li markdown="1">

$$\xi_n \in L^1$$.

</li>

<li markdown="1">

$$(\xi_n)$$ is adapted to $$(\mathcal{F}_n)$$.

</li>

<li markdown="1">

$$E(\xi_{n+1} \vert  \mathcal{F}_n) \geq \xi_n$$ a.s.

</li>

</ol>

Similarly, $$(\xi_n)$$ is a **supermartingale** with respect to $$(\mathcal{F}_n)$$ if

<ol type="1" markdown="1">

<li markdown="1">

$$\xi_n \in L^1$$.

</li>

<li markdown="1">

$$(\xi_n)$$ is adapted to $$(\mathcal{F}_n)$$.

</li>

<li markdown="1">

$$E(\xi_{n+1} \vert  \mathcal{F}_n) \leq \xi_n$$ a.s.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.7.**

Suppose $$(\xi_n)$$ is a martingale[^1] with $$\xi_1 \in L^2$$. Show that $$(\xi_n^2)$$ is a submartingale with respect to the same filtration.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Since $$\xi_n \in L^2$$, its square is integrable. It is clear that

$$\xi_n^2$$ is $$\mathcal{F}_n$$-measurable for every $$n \geq 1$$.

Conditional Jensen, applied to $$x \mapsto x^2$$, gives

$$
E(\xi_{n+1}^2 | \mathcal{F}_n) \geq (E(\xi_{n+1} | \mathcal{F}_n))^2 = \xi_n^2.
$$

</div>

Indeed, the result of Exercise 3.7 can be generalized to any convex function $$\varphi$$. That, is, if $$\varphi(\xi_n) \in L^1$$, then $$(\varphi(\xi_n))$$ is a submartingale.

### 3.4 Games of Chance

<div class="real-analysis-statement" markdown="1">

**Definition.**

A sequence $$(\alpha_n)$$ is **previsible** with respect to a filtration $$(\mathcal{F}_n)$$ if $$\alpha_n$$ is $$\mathcal{F}_{n-1}$$-measurable for every $$n \geq 1$$.

</div>

In gambling, $$\alpha_n$$ is the stake for round $$n$$, and $$(\alpha_n)$$ is called a **gambling strategy**. Let us consider following example:

<ol type="1" markdown="1">

<li markdown="1">

$$(\eta_n)$$ : winnings per unit stake in game $$n$$.

</li>

<li markdown="1">

$$\xi_n = \eta_1 + \cdots + \eta_n$$ : total winnings after $$n$$ games with $$\xi_0 = 0$$.

</li>

<li markdown="1">

$$\mathcal{F}_n \coloneq \sigma(\eta_1, \ldots, \eta_n)$$, with $$\mathcal{F}_0 = \{\emptyset, \Omega\}$$.

</li>

</ol>

The game is said to be $$\cdots$$

<ol type="1" markdown="1">

<li markdown="1">

**fair** if $$E(\xi_n \vert  \mathcal{F}_{n-1}) = \xi_{n-1}$$ a.s.

</li>

<li markdown="1">

**favorable** if $$E(\xi_n \vert  \mathcal{F}_{n-1}) \geq \xi_{n-1}$$ a.s.

</li>

<li markdown="1">

**unfavorable** if $$E(\xi_n \vert  \mathcal{F}_{n-1}) \leq \xi_{n-1}$$ a.s.

</li>

</ol>

Suppose you may vary your stake from game to game. Under a strategy $$(\alpha_n)$$, your total winnings are

$$
\zeta_0 = 0, \quad \zeta_n = \sum_{k=1}^n \alpha_k (\xi_k - \xi_{k-1}).
$$

<div class="real-analysis-statement" markdown="1">

**Proposition 3.1.**

Let $$(\alpha_n)$$ be previsible strategy such that each $$\alpha_n$$ is bounded and let $$(\zeta_n)$$ be the winnings defined above.  If $$(\xi_n)$$ is a martingale, then $$(\zeta_n)$$ is a martingale for the same filtration. If also $$\alpha \geq 0$$ for every $$n$$, then a supermartingale $$(\xi_n)$$ yields supermartingale $$(\zeta_n)$$, and a submartingale $$(\xi_n)$$ yields a submartingale $$(\zeta_n)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Each term in $$\zeta_n$$ is $$\mathcal{F}_n$$-measurable. Boundedness of the stakes also gives

$$
E(|\alpha_k(\xi_k - \xi_{k-1})|) \leq \left\lVert \alpha_k \right\rVert_\infty E(|\xi_k - \xi_{k-1}|) < \infty.
$$

So every $$\zeta_n$$ is integrable.

Since $$\alpha_n$$ and $$\zeta_{n-1}$$ are $$\mathcal{F}_{n-1}$$-measurable, the identity

$$
\zeta_n = \zeta_{n-1} + \alpha_n (\xi_n - \xi_{n-1})
$$

implies

$$
\begin{aligned}
        E(\zeta_n | \mathcal{F}_{n-1})
        &= \zeta_{n-1} + \alpha_n (E(\xi_n | \mathcal{F}_{n-1}) - \xi_{n-1}) \\
        &= \zeta_{n-1}.
    \end{aligned}
$$

</div>

[^1]: From now on, we consider that martinagle $$(\xi_n)$$ is adapted to its natural filtration $$(\mathcal{F}_n)$$.

{% endraw %}

<!-- prettier-ignore-end -->

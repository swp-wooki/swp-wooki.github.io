---
layout: post
title: "Probability Theory 6: Conditional Inequalities and Filtrations"
date: 2026-10-04 12:06:00 +0900
description: "Conditional expectation의 부등식, 확률변수열과 filtration을 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 6)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_6.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

So far, we have seen that

$$
\big| \int \xi dP \big| \leq \int | \xi | dP
$$

our next question is whether following holds:

$$
| E(\xi | \mathcal{G}) | \leq E(|\xi| | \mathcal{G}) \quad \text{a.s.}
$$

The notion of convexity will play a key role to prove above inequality.

<div class="real-analysis-statement" markdown="1">

**Definition (Convexity).**

A function $$\varphi: \mathbb{R} \to \mathbb{R}$$ is said to be convex if for all $$x, y \in \mathbb{R}$$ and $$\lambda \in [0, 1]$$,

$$
\varphi(\lambda x + (1-\lambda)y) \leq \lambda\varphi(x) + (1-\lambda)\varphi(y).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.2 (Jensen's inequality).**

Let $$\varphi : \mathbb{R} \to \mathbb{R}$$ be convex. If $$\xi$$ and $$\varphi(\xi)$$ are integrable, then

$$
\varphi(E(\xi | \mathcal{G})) \leq E(\varphi(\xi) | \mathcal{G}) \quad \text{a.s.}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Choose a supporting affine function such that

$$
a_k x + b_k \leq \varphi(x)
$$

at each rational point so that

$$
\varphi(x) = \sup_{k \geq 1} (a_k x + b_k).
$$

For each fixed $$k \geq 1$$, the inequality

$$
a_k \xi + b_k \leq \varphi(\xi)
$$

shows that

$$
a_k E(\xi | \mathcal{G}) + b_k = E(a_k \xi + b_k | \mathcal{G}) \leq E(\varphi(\xi) | \mathcal{G}) \quad \text{a.s.}
$$

There are countably many rational $$k$$, so these inequalities hold simultaneously on a set of probability one, which is equivalent to holding simultaneously outside one null set. Taking their supremum over $$k$$ gives

$$
\varphi(E(\xi | \mathcal{G})) = \sup_{k \geq 1} (a_k E(\xi | \mathcal{G}) + b_k) \leq E(\varphi(\xi) | \mathcal{G}) \quad \text{a.s.}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

Since $$\vert \cdot\vert $$ is convex, we have

$$
| E(\xi | \mathcal{G}) | \leq E(|\xi| | \mathcal{G}) \quad \text{a.s.}
$$

which we wanted to prove.

</li>

<li markdown="1">

If $$p \geq 1$$ and $$\xi \in L^{p}$$, then

$$
| E(\xi | \mathcal{G}) |^p \leq E(|\xi|^p | \mathcal{G}) \quad \text{a.s.}
$$

which implies that

$$
E(|E(\xi | \mathcal{G})|^p) \leq E(|\xi|^p).
$$

</li>

</ol>

</div>

## 3. Martingales in Discrete Time

### 3.1 Sequences of Random Varaibles

From now on, we consider $$\xi_n$$ as

$$
\xi_n : \Omega \to \mathbb{R}, \quad n \in \mathbb{N}.
$$

<div class="real-analysis-statement" markdown="1">

**Definition.**

Let $$(\xi_n)$$ be a sequence of random variables. For a fixed outcome $$\omega \in \Omega$$, the sequence

$$
\xi_1(\omega), \; \xi_2(\omega), \; \cdots
$$

is called a **sample path** of $$(\xi_n)$$.

</div>

### 3.2 Filtrations

<div class="real-analysis-statement" markdown="1">

**Definition.**

A **filtration** is a sequence of $$\sigma$$-fields $$(\mathcal{F}_n)$$ such that

$$
\mathcal{F}_1 \subset \mathcal{F}_2 \subset \cdots \subset \mathcal{F}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Example 3.1.**

Let $$\xi_n = 1$$ for heads and $$\xi_n = 0$$ for tails on toss $$n$$, and put

$$
\mathcal{F}_n = \sigma(\xi_1, \ldots, \xi_n).
$$

Let

$$
A = \{\text{the first 5 tosses produce at least 2 heads}\}
$$

At $$n = 5$$, we can decide whether $$A$$ has occurred or not. But at $$n = 4$$, if the outcomes of the first four tosses are $$TTHT$$, then $$A$$ remains undecided. Therefore,

$$
A \in \mathcal{F}_5, \quad A \notin \mathcal{F}_4.
$$

If the first four tosses are $$THTH$$, then it is possible to tell that $$A$$ has occurred alread at $$n = 4$$. However, it does not mean $$A \in \mathcal{F}_4$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.1.**

Find the smallest $$n \geq 1$$, if noe exists, for which each of the following events belongs to $$\mathcal{F}_n$$.

<ol type="1" markdown="1">

<li markdown="1">

$$A = \{\text{the first occurrence of heads in preceeded by no more than 10 tails}\}$$

</li>

<li markdown="1">

$$B = \{\text{there is at least 1 head in the sequence } \xi_1, \xi_2, \ldots\}$$

</li>

<li markdown="1">

$$C = \{\text{the first 100 tosses produce the same outcome}\}$$

</li>

<li markdown="1">

$$D = \{\text{there are no more than 2 heads and 2 tails among the first 5 tosses}\}$$

</li>

</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol type="1" markdown="1">

<li markdown="1">

The event $$A$$ occurs when at least one head appears among the first 11 tosses. Hence,

$$
A = \bigcup_{k=1}^{11} \{\xi_k = 1\} \in \mathcal{F}_{11}.
$$

After ten tails, a head on toss 11 makes $$A$$ occur, whereas a tail makes it fails. Hence, $$A \notin \mathcal{F}_{10}$$ and the smallest $$n$$ is 11.

</li>

<li markdown="1">

After any finite string of $$n$$ tails, a head may occur later or all subsequent tosses may be tails. Therefore, no finite $$n$$ satisfies

$$
B \in \mathcal{F}_n.
$$

</li>

<li markdown="1">

Note that

$$
C = \{ \xi_1 = \xi_2 = \cdots = \xi_{100} = 1 \} \cup \{ \xi_1 = \xi_2 = \cdots = \xi_{100} = -1 \} \in \mathcal{F}_{100}.
$$

After 99 heads, its occurrence still depends on toss 100. So $$C \notin \mathcal{F}_{99}$$.

</li>

<li markdown="1">

$$D = \emptyset \in \mathcal{F}_1$$

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

A sequence $$(\xi_n)$$ is **adapted to a filtration** $$(\mathcal{F}_n)$$ if

$$\xi_n$$ is $$\mathcal{F}_n$$-measurable for every $$n \geq 1$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 3.2.**

Every sequence $$(\xi_n)$$ is adapted to its natural filtration $$(\mathcal{F}_n)$$ defined by

$$
\mathcal{F}_n = \sigma(\xi_1, \ldots, \xi_n).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.2.**

Show that

$$
\mathcal{F}_n = \sigma(\xi_1, \ldots, \xi_n)
$$

is the smallest filtration to which $$(\xi_n)$$ is adapted.

More precisely, if $$(\xi_n)$$ is adapted to another filtration $$(\mathcal{G}_n)$$, then

$$
\mathcal{F}_n \subset \mathcal{G}_n \quad \text{for all } n \in \mathbb{N}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Since $$(\xi_n)$$ is $$\mathcal{G}_n$$-measurable, and

$$
\mathcal{G}_1 \subset \mathcal{G}_2 \subset \cdots \subset \mathcal{G},
$$

all of $$\xi_1, \ldots, \xi_n$$ are $$\mathcal{G}_n$$-measurable. Therefore,

$$
\mathcal{F}_n = \sigma(\xi_1, \ldots, \xi_n) \subset \mathcal{G}_n.
$$

</div>

{% endraw %}

<!-- prettier-ignore-end -->

---
layout: post
title: "Probability Theory 3: Independence and Conditional Expectation"
date: 2026-10-04 12:03:00 +0900
description: "Sigma-field의 독립성과 사건 및 이산 확률변수에 대한 conditional expectation을 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 3)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_3.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

<div class="real-analysis-statement" markdown="1">

**Definition.**

Two $$\sigma$$-fields $$\mathcal{G}, \mathcal{H} \in \mathcal{F}$$ are independent if for every $$A \in \mathcal{G}, B \in \mathcal{H}$$,

$$
P(A \cap B) = P(A) P(B).
$$

Similarly, $$\mathcal{G}_1, \cdots, \mathcal{G}_n$$ are independent if $$A_1, \cdots, A_n$$ are independent whenever $$A_i \in \mathcal{G}_i$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Excercise 1.12.**

Random variables $$\eta, \xi$$ are independent if and only if the $$\sigma$$-fields $$\sigma(\eta), \sigma(\xi)$$ are independent.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Every event $$A \in \sigma(\xi)$$ has the form

$$
A = \{ \xi \in C \} \quad \text{for some } C \in \mathcal{B}(\mathbb{R}).
$$

and $$B \in \sigma(\eta)$$ has the form

$$
B = \{ \eta \in D \} \quad \text{for some } D \in \mathcal{B}(\mathbb{R}).
$$

Hence independence of two $$\sigma$$-fields means

$$
P(\xi \in C, \eta \in D) = P(\xi \in C) P(\eta \in D)
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

A random variable $$\xi$$ is independent of a $$\sigma$$-field $$\mathcal{G}$$ if

$$
\sigma(\xi) \text{ and } \mathcal{G} \text{ are independent.}
$$

A mixed family of random variables and $$\sigma$$-fields are independent if replacing each random variable by its generated $$\sigma$$-field produces an independent family of $$\sigma$$-fields.

</div>

## 2. Conditional Expectation

### 2.1 Conditioning on a Event

<div class="real-analysis-statement" markdown="1">

**Definition.**

Let $$\xi \in L^{1}$$ and let $$B \in \mathcal{F}$$ with $$P(B) > 0$$. Then the conditional expectation of $$\xi$$ given $$B$$ is defined by

$$
E(\xi | B) = \frac{1}{P(B)} \int_{B} \xi dP.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.1.**

Fair 10p, 20p, and 50p coins are tossed. Let $$\xi$$ be the value of the coins showing heads, and let $$B$$ be the event that exactly two coins show heads. Then

$$
B = \{HHT, HTH, THH\}, \quad \text{and} \quad E(\xi | B) = \frac{1}{\frac{3}{8}} \big(\frac{30}{8} + \frac{60}{8} + \frac{70}{8}\big) = \frac{160}{3}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.1.**

$$
E(\xi | \Omega) = E(\xi)
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$
E(\xi | \Omega) = \frac{1}{P(\Omega)} \int_{\Omega} \xi dP = E(\xi)
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.2.**

Show that if

$$
\mathbb{1}_{A}(\omega) = \begin{cases}
            1, & \omega \in A \\
            0, & \omega \notin A
        \end{cases}
$$

then

$$
E(\mathbb{1}_{A} | B) = P(A | B) \quad \text{where} \quad P(A | B) = \frac{P(A \cap B)}{P(B)}.
$$

</div>

### 2.2 Conditioning on a discrete random variable

<div class="real-analysis-statement" markdown="1">

**Definition.**

Let $$\xi \in L^{1}$$, and let $$\eta$$ be a discrete random variable, that is $$\eta$$ takes distinct values

$$
y_1, \cdots, y_n \quad \text{with} \quad P(\eta = y_i) > 0 \quad \text{for } i = 1, \cdots, n.
$$

Define

$$
E(\xi | \eta) (\omega) \coloneq E(\xi | \{\eta = y_n\}) \quad \text{if} \quad \eta(\omega) = y_n.
$$

Equivalently,

$$
E(\xi | \eta)(\omega) = \sum_{n \geq 1} E(\xi | \{\eta = y_n\})\mathbb{1}_{\{\eta = y_n\}}(\omega).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.2.**

Consider the coin tossing example as in Example 2.1.Let $$\xi$$ be the total value of the coins showing heads and let $$\eta$$ be the contribution from to 10p and 20p coins.

If $$\eta = 0$$, only the 50p coin remains unknown, so

$$
E(\xi | \{\eta = 0\}) = \frac{1}{\frac{1}{4}} \big(\frac{50}{8} + \frac{0}{8}\big) = 25.
$$

Keep calculating for $$\eta = 10, 20, 30$$, we have

$$
\begin{array}{c|cccc}
    \eta & 0 & 10 & 20 & 30 \\ \hline
    E(\xi \mid \eta) & 25 & 35 & 45 & 55
    \end{array}
$$

which implies that $$E(\xi \vert  \eta) = \eta + 25$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.3.**

Take $$\Omega = [0, 1]$$, $$\mathcal{F} = \mathcal{B}([0, 1])$$, and $$P$$ be the Lebesgue measure $$m(\cdot)$$. Let $$\xi(x) = 2x^2$$ and

$$
\eta(x) = \begin{cases}
            0, & 0 \leq x \leq \frac{1}{3} \\
            1, & \frac{1}{3} < x \leq \frac{2}{3} \\
            2, & \frac{2}{3} < x \leq 1
        \end{cases}
$$

For $$x \in [0, \frac{1}{3}]$$,

$$
E(\xi | \eta)(x) = \frac{1}{\frac{1}{3}} \int_{0}^{\frac{1}{3}} 2t^2 dt = \frac{2}{3} \cdot \frac{1}{3} \cdot \frac{1}{3} = \frac{2}{27}.
$$

The result is,

$$
E(\xi | \eta)(x) = \begin{cases}
            \frac{2}{27}, & 0 \leq x \leq \frac{1}{3} \\
            \frac{14}{27}, & \frac{1}{3} < x \leq \frac{2}{3} \\
            \frac{38}{27}, & \frac{2}{3} < x \leq 1
        \end{cases}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.3.**

If $$\eta$$ is constant, then

$$
E(\xi | \eta) = E(\xi).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

If $$\eta \equiv C$$, then the only nonempty observation event is

$$
\{\eta = C\} = \Omega \implies E(\xi | \eta) = E(\xi | \Omega)\mathbb{1}_{\Omega} = E(\xi).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.4.**

If $$0 < P(B) < 1$$, then

$$
E(\mathbb{1}_{A} | \mathbb{1}_{B}) = P(A | B) \mathbb{1}_{B} + P(A | \Omega \setminus B) \mathbb{1}_{\Omega \setminus B}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.1.**

Let $$\xi \in L^{1}$$ and let $$\eta$$ be discrete. Then $$E(\xi \vert  \eta)$$ is integrable and has the following properties:

<ol type="1" markdown="1">

<li markdown="1">

If is $$\sigma{\eta}$$-measurable.

</li>

<li markdown="1">

For every $$A \in \sigma(\eta)$$, it satisfies

$$
\int_{A} E(\xi | \eta) dP = \int_{A} \xi dP.
$$

</li>

</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol type="1" markdown="1">

<li markdown="1">

We write $$A_n = \{\eta = y_n\}$$ and set

$$
c_n = \frac{\int_{A_n} \xi dP}{P(A_n)} \quad \text{and} \quad Z = \sum_{n \geq 1} c_n \mathbb{1}_{A_n} = E(\xi | \eta).
$$

Each $$A_n$$ belongs to $$\sigma(\eta)$$, so $$Z$$ is $$\sigma(\eta)$$-measurable.

</li>

<li markdown="1">

It is integrable, since

$$
\begin{aligned}
            E(|Z|) = \sum |c_n| P(A_n)
            &\leq \sum \int_{A_n} |\xi| dP \\
            &= E(|\xi|) < \infty.
        \end{aligned}
$$

</li>

<li markdown="1">

Every $$A \in \sigma(\eta)$$ is a union $$A = \bigcup_{n \in \mathcal{J}} A_n$$, which implies

$$
\begin{aligned}
            \int_{A} Z dp
            &= \sum_{n \in \mathcal{J}} c_n P(A_n) \\
            &= \sum_{n \in \mathcal{J}} \int_{A_n} \xi dP \\
            &= \int_{A} \xi dP.
        \end{aligned}
$$

</li>

</ol>

</div>

{% endraw %}

<!-- prettier-ignore-end -->

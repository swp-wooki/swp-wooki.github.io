---
layout: post
title: "Probability Theory 4: Conditioning on a Random Variable"
date: 2026-10-04 12:04:00 +0900
description: "일반 확률변수에 대한 conditional expectation의 정의와 성질을 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 4)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_4.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

### 2.3 Conditioning on an arbitrary random variable

<div class="real-analysis-statement" markdown="1">

**Definition.**

Let $$\xi \in L^{1}$$, and let $$\eta$$ be any random variable. A conditional expectation of $$\xi$$ given $$\eta$$ is an integrable random variable, denoted by $$E(\xi \vert  \eta)$$, with the following properties:

<ol type="1" markdown="1">

<li markdown="1">

$$E(\xi \vert  \eta)$$ is $$\sigma(\eta)$$-measurable.

</li>

<li markdown="1">

For every $$A \in \sigma(\eta)$$, it satisfies

$$
\int_{A} E(\xi | \eta) dP = \int_{A} \xi dP.
$$

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Conditional Probability.**

For $$A \in \mathcal{F}$$, the conditional probability of $$A$$ given $$\eta$$ is defined by

$$
P(A | \eta) = E(\mathbb{1}_{A} | \eta).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 2.1.**

Let $$\mathcal{G} \subset \mathcal{F}$$ be a $$\sigma$$-field, and let $$\xi$$ be an integrable, and $$\mathcal{G}$$-measurable random variable. If

$$
\int_{B} \xi dP = 0 \quad \text{for all } B \in \mathcal{G},
$$

then

$$
\xi = 0 \quad \text{a.s.} \iff P(\xi \neq 0) = 0.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Note that

$$
\{ \xi \neq 0 \} = \bigcup_{n \geq 1} \{ |\xi| > \frac{1}{n} \} \cup \bigcup_{n \geq 1} \{ |\xi| < -\frac{1}{n} \}.
$$

For $$\epsilon > 0$$, the set $$B_{+} = \{ \xi \geq \epsilon\}$$ belongs to $$\mathcal{G}$$. By assumption,

$$
0 = \int_{B_{+}} \xi dP \geq \int_{B_{+}} \epsilon dP = \epsilon P(B_{+}).
$$

So, we have $$P\{\xi \geq \epsilon\} = 0$$. Taking $$\epsilon = \frac{1}{n}$$, we obtain

$$
P\{ \xi \neq 0\} \leq \sum_{n \geq 1} \big( P\{ |\xi| > \frac{1}{n} \} + P\{\xi < -\frac{1}{n}\} \big) = 0.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Any two random variable satisfying the definition of conditional expectation are equal a.s. In particular,

$$
\xi = \xi' \quad \text{a.s.} \implies E(\xi | \eta) = E(\xi' | \eta) \quad \text{a.s.}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Let $$Z, Z'$$ satisfy the definition of conditional expectation.[^1]
Then, Lemma 2.1 gives $$Z = Z'$$ a.s. If $$\xi = \xi'$$ a.s. their integral over $$A$$ agree, so the same argument gives

$$
E(\xi | \eta) = E(\xi' | \eta) \quad \text{a.s.}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.4.**

Take $$\Omega = [0, 1]$$, $$\mathcal{F} = \mathcal{B}([0, 1])$$, and $$P$$ be the Lebesgue measure $$m(\cdot)$$. Define $$\xi(x) = 2x^2$$ and

$$
\eta(x) = \begin{cases}
            2, & 0 \leq x < \frac{1}{2} \\
            x, & \frac{1}{2} \leq x \leq 1
        \end{cases}
$$

Find $$E(\xi \vert  \eta)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Since it is $$\sigma(\eta)$$-measurable, Doob-Dynkin lemma shows that

$$
E(\xi | \eta) = h(\eta) \quad \text{for some Borel function } h.
$$

Since $$\{\eta = 2\} = [0, \frac{1}{2})$$, condition 2 gives

$$
\int_{\{\eta = 2\}} h(\eta)dP = \int_{\{\eta = 2\}} \xi dP
$$

 where

$$
\int_{\{\eta = 2\}} h(\eta)dP = \int_{0}^{\frac{1}{2}} h(2) dP = \frac{1}{2} h(2) \quad \text{and} \quad \int_{\{\eta = 2\}} \xi dP = \int_{0}^{\frac{1}{2}} 2x^2 dP = \frac{1}{12}.
$$

Hence, $$h(2) = \frac{1}{6}$$. Next, let $$B \in \mathcal{B}[\frac{1}{2}, 1]$$, then $$\{\eta \in B\} = B$$ and condition 2 gives

$$
\big(\int_{B} h(\eta)dP = \big) \int_{B} h(x)dP = \int_{B} 2x^2 dP \big( = \int_{B} \xi dP\big).
$$

Since $$B$$ is arbitrary, we have $$h(x) = 2x^2$$ a.e. in $$[\frac{1}{2}, 1]$$. Define

$$
h(x) = \begin{cases}
            \frac{1}{6}, & x = 2 \\
            2x^2, & \frac{1}{2} \leq x \leq 1 \\
            0, & \text{otherwise}
        \end{cases}
        \quad \text{and} \quad Z = \begin{cases}
            h(\eta) = \frac{1}{6}, & 0 \leq x < \frac{1}{2} \\
            h(\eta) = 2x^2, & \frac{1}{2} \leq x \leq 1
        \end{cases}
$$

We now verify that $$Z = E(\xi \vert  \eta)$$ a.s. :

<ol type="1" markdown="1">

<li markdown="1">

Since $$h$$ is Borel, $$Z = h(\eta)$$ is $$\sigma(\eta)$$-measurable.

</li>

<li markdown="1">

Moreover, $$Z$$ is bounded, so it is integrable.

</li>

<li markdown="1">

We have already seen that

$$
\int_{[0, \frac{1}{2})} Z dP = \int_{[0, \frac{1}{2})} \xi dP \quad \text{and} \quad \int_{B} Z dP = \int_{B} \xi dP \quad \text{for all } B \in \mathcal{B}[\frac{1}{2}, 1].
$$

</li>

<li markdown="1">

Every event in $$\sigma(\eta)$$ is either $$B$$ or $$[0, \frac{1}{2})\cup B$$.

</li>

</ol>

Hence, by additivity of the integral, we have

$$
\int_{A} Z dP = \int_{A} \xi dP \quad \text{for all } A \in \sigma(\eta).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.6.**

On $$[0, 1]$$ with the Lebesgue measure, let $$\xi(x) = 2x^2$$ and $$\eta(x) = 1 - \vert 2x-1\vert $$. Find $$E(\xi \vert  \eta)$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.7.**

Let $$f_{\xi, \eta}(x, y) = x + y$$ on $$[0, 1]^2$$. Find $$E(\xi \vert  \eta)$$.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

We write $$Z = h(\eta)$$ for some Borel function $$h$$. For any $$B \in \mathbb{B}$$,

$$
\int_{\{\eta \in B\}} Z dP = \int_{\{\eta \in B\}} \xi dP.
$$

Indeed,

$$
\begin{aligned}
        \int_{\{\eta \in B\}} Z dP
        &= \int_{B}\int_{\mathbb{R}} h(y) f_{\xi, \eta}(x, y) dx dy \\
        &= \int_{B} h(y) \int_{0}^{1}(x + y) dx dy \\
        &= \int_{B} h(y) \left( \frac{1}{2} + y \right) dy
    \end{aligned}
$$

and

$$
\begin{aligned}
        \int_{\{\eta \in B\}} \xi dP
        &= \int_{B}\int_{\mathbb{R}} x f_{\xi, \eta}(x, y) dx dy \\
        &= \int_{B} \int_{0}^{1} x(x + y) dx dy \\
        &= \int_{B} \left( \frac{1}{3} + \frac{1}{2}y \right) dy.
    \end{aligned}
$$

Hence, we have

$$
h(y) = \frac{\frac{1}{3} + \frac{1}{2}y}{\frac{1}{2} + y} = \frac{2 + 3y}{3(1 + 2y)} \quad \text{a.e. on } [0, 1].
$$

We redefine

$$
h(y) = \begin{cases}
        \frac{2 + 3y}{3(1 + 2y)}, & 0 \leq y \leq 1 \\
        0, & \text{otherwise}
    \end{cases}
$$

</div>

[^1]: Note that their difference is integrable and $$\sigma(\eta)$$-measurable by Proposition 1. Moreover, for all $$A \in \sigma(\eta)$$, we have

    $$
    \int_{A} (Z - Z') dP = \int_{A} Z dP - \int_{A} Z' dP = \int_{A} \xi dP - \int_{A} \xi dP = 0.
    $$

{% endraw %}

<!-- prettier-ignore-end -->

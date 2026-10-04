---
layout: post
title: "Probability Theory 2: Expectation and Independence"
date: 2026-10-04 12:02:00 +0900
description: "기댓값의 성질과 부등식, 조건부확률과 독립성을 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 2)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_2.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

<div class="real-analysis-proof" markdown="1">

*Proof.*

The disjoint atoms in $$(s, t]$$ give

$$
F_{\xi}(t) - F_{\xi}(s) = P\{ s < \xi \leq t \} = \sum_{s < x \leq t} P\{ \xi = x \}.
$$

Thus, the increment is zero if there is no atom in $$(s, t]$$, and

$$
F_{\xi}(x_i) - F_{\xi}(x_i -) = P\{ \xi = x_i \}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

The joint distribution of

$$
\xi_1, \xi_2, \cdots, \xi_n
$$

is a probability measure defined by

$$
P_{\xi_1, \xi_2, \cdots, \xi_n}(B) = P\{ (\xi_1, \xi_2, \cdots, \xi_n) \in B \}, \quad B \in \mathcal{B}(\mathbb{R}^n).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

$$\xi \in L^{1}(\Omega, \mathcal{F}, P)$$ if

$$
\int_{\Omega} |\xi| dP < \infty.
$$

Then

$$
E(\xi) = \int_{\Omega} \xi dP
$$

exists and is called the expectation of $$\xi$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Example of computing expectation.**

<ol type="1" markdown="1">

<li markdown="1">

For $$A \in \mathcal{F}$$, $$E(\mathbb{1}_A) = P(A)$$.

</li>

<li markdown="1">

If $$\eta$$ is a step function, that is,

$$
\eta = \sum_{i=1}^{n} a_i \mathbb{1}_{A_i}
$$

with pairwise disjoint $$A_i \in \mathcal{F}$$, then

$$
E(\eta) = \sum_{i=1}^{n} a_i P(A_i).
$$

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Excercise 1.7 (Law of the Unconscious Statistician(LOTUS)).**

If $$h : \mathbb{R} \to \mathbb{R}$$ is a Borel measurable function and $$h(\xi)$$ is integrable, then

$$
E(h(\xi)) = \int_{\mathbb{R}} h(x) dP_{\xi}(x).
$$

Hence,

<ol type="1" markdown="1">

<li markdown="1">

$$E(h(\xi)) = \int_{\mathbb{R}} h(x) dP_{\xi}(x)$$ for a continuous law

</li>

<li markdown="1">

$$E(h(\xi)) = \sum_{i=1}^{\infty} h(x_i) P\{ \xi = x_i \}$$ for a discrete law.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition (Variance).**

$$\xi \in L^{2}(\Omega, \mathcal{F}, P) \subset L^{1}$$ if

$$
E(|\xi|^2) = \int_{\Omega} |\xi|^2 dP < \infty.
$$

Its variance is

$$
\text{var}(\xi) = E((\xi - E(\xi))^2) = E(\xi^2) - (E(\xi))^2.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Excercise 1.8 (Cauchy-Schwarz inequality).**

$$
|E(\xi \eta)|^2 \leq E(\xi^2) E(\eta^2).
$$

Consequently, $$L^{2} \subset L^{1}$$, and

$$
E(|\xi|) \leq \sqrt{E(\xi^2)}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Let $$\xi, \eta \in L^{2}$$. Then

$$
\xi \eta \in L^{1} \quad \text{since} \quad 2|\xi \eta| \leq \xi^2 + \eta^2.
$$

The quadratic function

$$
t \mapsto E((\xi - t\eta)^2) = E(\xi^2) - 2tE(\xi \eta) + t^2 E(\eta^2) \quad \text{ is non negative. }
$$

So its discriminant is non positive:

$$
E(\xi \eta)^2 - E(\xi^2) E(\eta^2) \leq 0 \implies E(\xi \eta)^2 \leq E(\xi^2) E(\eta^2).
$$

Apply this to $$\xi$$ and $$\mathbb{1}$$ to

$$
E(|\xi|) \leq \sqrt{E(\xi^2)}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Excercise 1.9 (Coarea formula).**

If $$\eta \geq 0$$, then

$$
E(\eta^2) = 2 \int_{0}^{\infty} t P\{ \eta > t \} dt.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

We have[^1]

$$
\eta^2 = \int_{0}^{\infty} 2t \mathbb{1}_{\{ \eta > t \}} dt.
$$

Tonelli's theorem gives

$$
\begin{aligned}
        E(\eta^2)
        &= \int_{\Omega} \int_{0}^{\infty} 2t \mathbb{1}_{\{ \eta > t \}} dt dP \\
        &= \int_{0}^{\infty} 2t E(\mathbb{1}_{\{ \eta > t \}})dt \\
        &= \int_{0}^{\infty} 2t P\{ \eta > t \} dt.
    \end{aligned}
$$

</div>

### 1.3 Conditional Probability and Independence

<div class="real-analysis-statement" markdown="1">

**Definition.**

Let $$A, B \in \mathcal{F}$$ be such that $$P(B) > 0$$. The conditional probability of $$A$$ given $$B$$ is defined by

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Excercise 1.10.**

If $$B_1, \cdots$$ are pairwise disjoint, $$\bigcup_{n \geq 1} B_n = \Omega$$, and $$P(B_n) > 0$$, then

$$
P(A) = \sum_{n \geq 1} P(A|B_n) P(B_n).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Since $$A = \bigcup_{n \geq 1} (A \cap B_n)$$, we have

$$
P(A) = \sum_{n \geq 1} P(A \cap B_n) = \sum_{n \geq 1} P(A|B_n) P(B_n).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Remark (Bayes' rule).**

If $$P(A) > 0$$, then

$$
P(B_j | A) = \frac{P(A|B_j) P(B_j)}{\sum_{n \geq 1} P(A|B_n) P(B_n)}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

Events $$A$$ and $$B$$ are independent if

$$
P(A \cap B) = P(A) P(B).
$$

Events $$A_1, \cdots, A_n$$ are independent if for every subfamily,

$$
P(A_{i_{1}} \cap \cdots \cap A_{i_{k}}) = P(A_{i_1}) \cdots P(A_{i_k}).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Excercise 1.11.**

If $$P(B)> 0$$, then

$$
A \text{ and } B \text{ are independent } \iff P(A|B) = P(A).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

Random variables $$\eta, \xi$$ are independent if

$$
P(\eta \in A, \xi \in B) = P(\eta \in A) P(\xi \in B)
$$

for all $$A, B \in \mathcal{B}(\mathbb{R})$$. An arbitrary family is independent if every finite subfamily is independent.

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

If $$\xi_1, \cdots, \xi_n$$ are independent, then

$$
E(\xi_1 \cdots \xi_n) = \prod_{i=1}^n E(\xi_i).
$$

In particular, independent $$\xi, \eta \in L^2$$ are uncorrelated:

$$
E(\eta \xi) = E(\eta) E(\xi)
$$

</div>

[^1]: Note that $$\int_{0}^{\eta}2t \mathbb{1}_{\{ \eta > t \}} dt \to \eta^2$$ and $$\int_{\eta}^{\infty}2t \mathbb{1}_{\{ \eta > t \}} dt \to 0$$ since $$\mathbb{1}_{\{ \eta > t \}}$$ is 1 when $$\eta > t$$ and 0 otherwise.

{% endraw %}

<!-- prettier-ignore-end -->

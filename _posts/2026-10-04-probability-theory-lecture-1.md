---
layout: post
title: "Probability Theory 1: Events and Random Variables"
date: 2026-10-04 12:01:00 +0900
description: "사건과 확률, 확률공간, 확률변수와 분포함수를 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 1)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_1.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

## Chapter 1. Review of Probability

### 1.1 Events and Probability

In this course, we study the probabiliy in the sense of real analysis, which relies on the measure theory. Hence, we will translate the notions of real analysis to the language of probability theory. Now we start with some definitions.

<div class="real-analysis-statement" markdown="1">

**Definition 1.1.**

Let $$\Omega \neq \emptyset$$. A family of

$$
\mathcal{F} \subset 2^{\Omega} = \mathcal{P}(\Omega)
$$

is a $$\sigma$$-field if it satisfies the following properties:

<ol type="1" markdown="1">

<li markdown="1">

$$\emptyset \in \mathcal{F}$$.

</li>

<li markdown="1">

If $$A \in \mathcal{F}$$, then $$\Omega \setminus A \in \mathcal{F}$$.

</li>

<li markdown="1">

If $$A_1, A_2, A_3, \ldots \in \mathcal{F}$$, then $$\bigcup_{n=1}^{\infty} A_n \in \mathcal{F}$$.

</li>

</ol>

</div>

Note that $$\sigma$$-field is nothing but a collection of subsets[^1] that is closed under the complement and countable union, which contains the empty set. From now on, we will denote $$\mathcal{F}$$ as a $$\sigma$$-field on $$\Omega$$. Based on the above definition, we can easily observe the following remarks.

<div class="real-analysis-statement" markdown="1">

**Remark.**

$$\Omega$$ and $$\mathcal{F}$$ are defined as above.

<ol type="1" markdown="1">

<li markdown="1">

$$\Omega \in \mathcal{F}$$. Use the first two properties to show this.

</li>

<li markdown="1">

$$\bigcap_{n=1}^{\infty} A_n \in \mathcal{F}$$. Use the second and third properties to show this.

</li>

<li markdown="1">

If $$A, B \in \mathcal{F}$$, then $$A \setminus B \in \mathcal{F}$$.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Example.**

The example of $$\sigma$$-fields are as follows.

<ol type="1" markdown="1">

<li markdown="1">

$$2^{\mathbb{R}}$$ is a $$\sigma$$-field.

</li>

<li markdown="1">

(Borel $$\sigma$$-field) Recall that we have defined the Borel $$\sigma$$-field $$\mathcal{B}(\mathbb{R})$$ in the real analysis class. We say that $$\mathcal{B}(\mathbb{R})$$ is **Borel $$\sigma$$-field** which is the smallest $$\sigma$$-field containing all open sets[^2] in $$\mathbb{R}$$. Its elements are called **Borel sets**.

</li>

<li markdown="1">

The family of (Lebesgue) measurable sets $$\mathcal{M}(\mathbb{R})$$ is a $$\sigma$$-field.

</li>

<li markdown="1">

(Coin Tossing) To see more practical examples, consider the following example. For two coin tosses, take

$$
\Omega = \{HH, HT, TH, TT\}.
$$

If only the first coin toss is observed, let

$$
A = \{HH, HT\}, \quad B = \{HH, TH\}.
$$

Then the available information is described by the $$\sigma$$-field,

$$
\mathcal{F} = \{\emptyset, A, \Omega \setminus A, \Omega\}.
$$

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition 1.2.**

A **probability measure** is a map

$$
P: \mathcal{F} \to [0, 1]
$$

such that

<ol type="1" markdown="1">

<li markdown="1">

$$P(\Omega) = 1$$.

</li>

<li markdown="1">

(Countable Additivity) For pairwise disjoint sets $$A_n \in \mathcal{F}$$,

$$
P\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} P(A_n).
$$

</li>

</ol>

We call $$\Omega$$ the **sample space**, $$\mathcal{F}$$ the **event space**, and $$A \in \mathcal{F}$$ the **event**. The triple $$(\Omega, \mathcal{F}, P)$$ is called a **probability space**. An event $$A$$ is said to be hold **almost surely (a.s.)** if $$P(A) = 1$$.

</div>

Note that $$P(A) = 1$$ does not imply that $$A = \Omega$$.

<div class="real-analysis-statement" markdown="1">

**Example.**

Take $$\Omega = [0, 1]$$, $$\mathcal{F} = \mathcal{B}([0, 1])$$ and $$P = \text{Leb}([0, 1])$$[^3]. Indeed,

$$
P(\Omega) = P([0, 1]) = \text{Leb}([0, 1]) = 1
$$

and more generally, for $$[a, b] \subset [0, 1]$$,

$$
P([a, b]) = \text{Leb}([a, b]) = b - a.
$$

Therefore we can observe that such $$(\Omega, \mathcal{F}, P)$$ is a probability space.

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

Let $$(\Omega, \mathcal{F}, P)$$ be a probability space.

<ol type="1" markdown="1">

<li markdown="1">

$$P(\Omega) = 1$$.

</li>

<li markdown="1">

$$P(\Omega \setminus A) = 1 - P(A)$$ for any $$A \in \mathcal{F}$$.

</li>

<li markdown="1">

$$A \subset B \implies P(A) \leq P(B)$$.

</li>

<li markdown="1">

(Countable subadditivity) $$P\left(\bigcup_{n=1}^{\infty} A_n\right) \leq \sum_{n=1}^{\infty} P(A_n)$$.

</li>

</ol>

The countable *sub*additivity shows that even though we do not have *pairwise* disjoint sets, we still get *inequality*.

</div>

Let us define some notations about limit of sets.

If $$E_j \subset E_{j+1}$$ and $$\bigcup_{j=1}^{\infty} E_j = E$$, we write $$E_j \nearrow E$$. <br>

If $$E_j \supset E_{j+1}$$ and $$\bigcap_{j=1}^{\infty} E_j = E$$, we write $$E_j \searrow E$$.

For the measurable sets, we studied that the following corollary holds. Note that $$m(\cdot)$$ denotes the Lebesgue measure on $$\mathbb{R}$$ for this moment.

<div class="real-analysis-statement" markdown="1">

**Corollary 3.3 (From Stein's book).**

Let $$E_j \in \mathcal{M}$$ for all $$j \in \mathbb{N}$$.

<ol type="1" markdown="1">

<li markdown="1">

If $$E_j \nearrow E$$, then $$\lim_{j \to \infty} m(E_j) = m(E)$$.

</li>

<li markdown="1">

If $$E_j \searrow E$$ and $$m(E_k) < \infty$$ for some $$k$$, then $$\lim_{j \to \infty} m(E_j) = m(E)$$.

</li>

</ol>

</div>

Similarly, we can obtain the followings for the probability measure $$P$$ but see the difference with the Lebesgue measure.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.1 (Continuity of Probability).**

Let $$A_i \in \mathcal{F}$$.

<ol type="1" markdown="1">

<li markdown="1">

If $$A_n \nearrow A$$, then $$\lim_{n \to \infty} P(A_n) = P(A)$$.

</li>

<li markdown="1">

If $$A_n \searrow A$$, then $$\lim_{n \to \infty} P(A_n) = P(A)$$.

</li>

</ol>

Remarkably, we can drop the finite condition in the second part, which is different from the Lebesgue measure since $$P(\Omega) = 1 < \infty$$.

</div>

Again, let us compare the Borel-Cantelli lemma for the Lebesgue measure and the probability measure. In the case of the Lebesgue measure, this lemma implies that if we sum up countably many sets, and if its sum is finite, then the *tail* of the sets have measure zero. Similar happens for the probability measure, which is stated as follows.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.6.16 (The Borel-Cantelli Lemma From Stein's book).**

Suppose $$\{E_k\}_{k=1}^{\infty}$$ is a countable family of measurable subsets of $$\mathbb{R}^d$$ and that

$$
\sum_{k=1}^{\infty} m(E_k) < \infty.
$$

Let

$$
E = \{x \in \mathbb{R}^d : x \in E_k \text{ for infinitely many } k\} = \limsup_{k \to \infty} E_k.
$$

Then, $$E \in \mathcal{M}$$ and $$m(E) = 0$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 1.1 (Borel-Cantelli).**

If $$\sum_{n=1}^{\infty} P(A_n) < \infty$$ and $$B_n = \bigcup_{k \geq n} A_k$$, then

$$
P(\bigcap_{n \geq 1} B_n) = 0.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Note that

$$
P(B_n) \leq \sum_{k \leq n} P(A_k) \to 0 \quad \text{as } n \to \infty.
$$

Since $$B_n \searrow \bigcap_{n \geq 1} B_n$$, we have

$$
P(\bigcap_{n \geq 1} B_n) = \lim_{n \to \infty} P(B_n) = 0.
$$

</div>

### 1.2 Random Variables

Start with the definition of random variables.

<div class="real-analysis-statement" markdown="1">

**Definition 1.3.**

A fuction $$\xi: \Omega \to \mathbb{R}$$ is **$$\mathcal{F}$$-measurable**[^4] if for all Borel sets $$B \in \mathcal{B}(\mathbb{R})$$,

$$
\{\xi \in B\} \coloneq \{ \omega \in \Omega : \xi(\omega) \in B \} = \xi^{-1}(B) \in \mathcal{F}.
$$

If $$(\Omega, \mathcal{F}, P)$$ is a probability space, then such a map $$\xi$$ is a **random variable**.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition 1.4.**

The $$\sigma$$-field generated by random variable $$\xi$$ is defined by

$$
\sigma(\xi) \coloneq \{\{\xi \in B\} : B \in \mathcal{B}(\mathbb{R})\}.
$$

Note that $$\sigma(\xi)$$ contains all the information from observing $$\xi$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Definition 1.5.**

For a family $$\{\xi_i : i \in \mathcal{I}\}$$,

$$
\sigma(\xi_i : i \in \mathcal{I})
$$

is the smallest $$\sigma$$-field containing every event $$\{\xi_i \in B\}$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.3.**

If $$f : \mathbb{R} \to \mathbb{R}$$ is Borel (measurable)[^5], then $$f(\xi)$$ is $$\sigma(\xi)$$-measurable.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Trivial.

</div>

Surprisingly, the converse of the Exercise 1.3. is also true. This work is done by Doob and Dynkin, the great mathematicians who contributed to the development of probability theory.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2 (Doob-Dynkin).**

If $$\eta$$ is $$\sigma(\xi)$$-measurable, then

$$
\eta = f(\xi) \text{ for some Borel function } f : \mathbb{R} \to \mathbb{R}.
$$

</div>

To prove this lemma, we have to construct a such Borel function $$f$$. The construction of such $$f$$ is highly non-trivial, thereby we omit the proof of this lemma. It is enough to see the statement for this time.

<div class="real-analysis-statement" markdown="1">

**Definition 1.6.**

Every random variable $$\xi$$ gives rise to a probability measure

$$
P_{\xi}(B) = P(\{\xi \in B\}) \quad \text{for } B \in \mathcal{B}(\mathbb{R}).
$$

$$P_{\xi}$$ is called the **distribution** of $$\xi$$. The function $$F_{\xi}(x) : \mathbb{R} \to [0, 1]$$ defined by

$$
F_{\xi}(x) = P_{\xi}((-\infty, x]) = P(\{\xi \leq x\})
$$

is called the **distribution function** of $$\xi$$.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.4.**

$$F_{\xi}$$ is non-decreasing, right-continuous, and satisfies

$$
\lim_{x \to -\infty} F_{\xi}(x) = 0, \quad \text{and} \quad \lim_{x \to \infty} F_{\xi}(x) = 1.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<ol type="1" markdown="1">

<li markdown="1">

Monotonicity is immediate.

</li>

<li markdown="1">

If $$x_n \searrow x$$, then $$\{\xi \leq x_n\} \searrow \{\xi \leq x\}$$ hence $$F_{x_n} \to F_{\xi}(x)$$.

</li>

<li markdown="1">

For the limits, use

$$
\{\xi \leq -n\} \searrow \emptyset \quad \text{and} \quad \{\xi \leq n\} \nearrow \Omega.
$$

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Definition 1.7.**

The law of $$\xi$$ is **absolutely continuous**[^6]  if there is a Borel function $$f_{\xi} : \mathbb{R} \to \mathbb{R}$$ such that for any Borel set $$B \in \mathcal{B}(\mathbb{R})$$,

$$
P_{\xi}(B) = P(\xi \in B) = \int_B f_{\xi}(x) dx
$$

and $$f_{\xi}$$ is called the **density** of $$\xi$$. The law is **discrete** if there exists at most countable pairwise distinct values $$\{x_i\}_{i \in \mathcal{I}}$$ such that

$$
P(\xi \in B) = \sum_{x_i \in B} P(\xi = x_i) \quad \text{for all } B \in \mathcal{B}(\mathbb{R}).
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.5 and 1.6.**

For a continuous density $$f_{\xi}$$, we have

$$
F_{\xi}'(x) = f_{\xi}(x).
$$

For a discrete law,

$$F_{\xi}$$ jumps by $$P(\xi = x_i)$$ at each $$x_i$$

</div>

[^1]: That is, the power set of underlying set $$\Omega$$.

[^2]: For the real line $$\mathbb{R}$$, all open sets mean all open intervals of $$\mathbb{R}$$.

[^3]: Here, $$\text{Leb}([0, 1])$$ denotes the Lebesgue measure on $$[0, 1]$$.

[^4]: Note : Let $$E \subset \mathbb{R}^{d}. $$A function $$f : E \to \mathbb{R}^d$$ is measurable if for all $$a \in \mathbb{R}$$, the set

    $$
    \{f < a\} = f^{-1}(\{x \in \mathbb{R} : x < a\}) = \{x \in E : f(x) < a\} \in \mathcal{M}.
    $$

    Thus the measurability is closely related to the inverse image of the function.

[^5]: Our textbook defines **Borel function** as follows. A function $$f : \mathbb{R} \to \mathbb{R}$$ is Borel if the inverse image $$f^{-1}(B)$$ of any Borel set $$B$$ is a Borel set. In other words, $$f$$ is Borel if it is measurable with respect to the Borel $$\sigma$$-field.

[^6]: That is, the distribution of $$\xi$$ is absolutely continuous.

{% endraw %}

<!-- prettier-ignore-end -->

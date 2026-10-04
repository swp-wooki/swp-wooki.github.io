---
layout: post
title: "Probability Theory 5: Conditioning on a Sigma-Field"
date: 2026-10-04 12:05:00 +0900
description: "Sigma-field에 대한 conditional expectation과 그 일반적인 성질을 다룬다."
tags: probability-theory lecture-notes
categories: [probability-theory, statistics]
giscus_comments: true
related_posts: true
toc:
  sidebar: left
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의에서 직접 작성한 원본 필기이다. (Lecture 5)

[이번 회차 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_5.pdf' | relative_url }}) · [전체 원본 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

### 2.4 Conditioning on a $$\sigma$$-field

<div class="real-analysis-statement" markdown="1">

**Proposition 2.2.**

If $$\sigma(\eta) = \sigma(\eta')$$, then for all $$\xi \in L^1$$,

$$
E(\xi | \eta) = E(\xi | \eta') \quad \text{a.s.}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Use Lemma 2.1

</div>

<div class="real-analysis-statement" markdown="1">

**Definition.**

Let $$\xi \in L^1$$ and let $$\mathcal{G}, \mathcal{F}$$ be a $$\sigma$$-field. A conditional expectation of $$\xi$$ given $$\mathcal{G}$$ is a random variable, denoted by $$E(\xi \vert  \mathcal{G})$$, with the following properties:

<ol type="1" markdown="1">

<li markdown="1">

$$E(\xi \vert  \mathcal{G})$$ is $$\mathcal{G}$$-measurable.

</li>

<li markdown="1">

For every $$A \in \mathcal{G}$$, it satisfies

$$
\int_{A} E(\xi | \mathcal{G}) dP = \int_{A} \xi dP.
$$

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Remark.**

For $$A \in \mathcal{F}$$, define the conditional probability

$$
P(A | \mathcal{G}) = E(\mathbb{1}_{A} | \mathcal{G}).
$$

Conciditioning on a random variable agrees with conditioning on its generated $$\sigma$$-field:

$$
E(\xi | \eta) = E(\xi | \sigma(\eta)) \quad \text{a.s.}
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.1 (Radon-Nikodym).**

Let $$\mathcal{G} \subset \mathcal{F}$$ be a $$\sigma$$-field. Then for every $$\xi \in L^1$$, there exists an integrable, $$\mathcal{G}$$-measurable random variable $$\zeta$$ such that

$$
\int_{A} \zeta dP = \int_{A} \xi dP \quad \text{for all } A \in \mathcal{G}.
$$

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.3.**

For every $$\xi in L^1$$ and $$\mathcal{G} \subset \mathcal{F}$$,

$$
E(\xi | \mathcal{G}) \quad \text{exists }
$$

and unique up to a.s. equality.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.10.**

Show that

$$
E(\xi | \{\emptyset, \Omega\}) = E(\xi) \quad \text{a.s.}
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Let $$c = E(\xi)$$ and $$\mathcal{G} = \{\emptyset, \Omega\}$$. Then $$c \in L^1$$ and it is $$\mathcal{G}$$-measurable. Moreover,

$$
\int_{\emptyset}c dP = 0 = \int_{\emptyset} \xi dP, \quad \int_{\Omega} c dP = c = E(\xi) = \int_{\Omega} \xi dP.
$$

which implies that $$E(\xi \vert  \mathcal{G}) = c$$ a.s.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.11.**

If $$\xi$$ is $$\mathcal{G}$$-measurable, then $$E(\xi \vert  \mathcal{G}) = \xi$$ a.s.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

By assumption, $$\xi$$ itself is integrable and $$\mathcal{G}$$-measurable. It also satisfies

$$
\int_{A} \xi dP = \int_{A} \xi dP \quad \text{for all } A \in \mathcal{G}.
$$

which implies that $$E(\xi \vert  \mathcal{G}) = \xi$$ a.s.

</div>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.12.**

If $$B \in \mathcal{G}$$, $$P(B) > 0$$, then

$$
E(E(\xi | \mathcal{G}) | B) = E(\xi | B).
$$

</div>

### 2.5 General Properties

<div class="real-analysis-statement" markdown="1">

**Proposition 2.4.**

Let $$\xi, \zeta \in L^1$$, let $$a, b \in \mathbb{R}$$ and $$\mathcal{H} \subset \mathcal{G} \subset \mathcal{F}$$.

<ol type="1" markdown="1">

<li markdown="1">

(Linearity) $$E(a\xi + b\zeta \vert  \mathcal{G}) = a E(\xi \vert  \mathcal{G}) + b E(\zeta \vert  \mathcal{G})$$ a.s.

</li>

<li markdown="1">

$$E(E(\xi \vert  \mathcal{G})) = E(\xi)$$ a.s.

</li>

<li markdown="1">

If $$\xi$$ is $$\mathcal{G}$$-measurable, and $$\xi \zeta \in L^1$$, then

$$
E(\xi \zeta | \mathcal{G}) = \xi E(\zeta | \mathcal{G}) \quad \text{a.s.}
$$

</li>

<li markdown="1">

If $$\xi$$ is independent of $$\mathcal{G}$$, then

$$
E(\xi | \mathcal{G}) = E(\xi) \quad \text{a.s.}
$$

</li>

<li markdown="1">

(Tower Property) $$E(E(\xi \vert  \mathcal{G}) \vert  \mathcal{H}) = E(\xi \vert  \mathcal{H})$$ a.s.

</li>

<li markdown="1">

If $$\xi \geq 0$$ a.s., then $$E(\xi \vert  \mathcal{G}) \geq 0$$ a.s.

</li>

</ol>

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Wirte

$$
X = E(\xi | \mathcal{G}), \quad Z = E(\zeta | \mathcal{G}).
$$

<ol type="1" markdown="1">

<li value="1" markdown="1">

$$aX + bZ$$ is integrable and $$\mathcal{G}$$-measurable. For all $$A \in \mathcal{G}$$, we have

$$
\begin{aligned}
    \int_{A} (aX + bZ) dP
    &= a \int_{A} X dP + b \int_{A} Z dP \\
    &= a \int_{A} \xi dP + b \int_{A} \zeta dP \\
    &= \int_{A} (a\xi + b\zeta) dP.
  \end{aligned}
$$

</li>

<li value="2" markdown="1">

Taking $$A = \Omega$$ in the defining identity gives

$$
E(X) = \int_{\Omega} X dP = \int_{\Omega} \xi dP = E(\xi).
$$

</li>

<li value="6" markdown="1">

Suppose $$\xi \geq 0$$ a.s. For

$$
A_n = \{ X \leq - \frac{1}{n} \} \in \mathcal{G},
$$

the defining identity yields

$$
0 \leq \int_{A_n} \xi dP = \int_{A_n} X dP \leq -\frac{1}{n} P(A_n).
$$

Hence $$P(A_n) = 0$$ for all $$n \geq 1$$. Since

$$
\{X < 0\} = \bigcup_{n \geq 1} A_n,
$$

we have $$X \geq 0$$ a.e.

</li>

<li value="3" markdown="1">

First assume

$$
\xi \in \mathbb{1}_{A} \quad \text{where } A \in \mathcal{G}.
$$

For every $$B \in \mathcal{G}$$,

$$
\begin{aligned}
    \int_{B} \mathbb{1}_{A} Z dP
    &= \int_{B \cap A} Z dP \\
    &= \int_{B \cap A} \zeta dP \\
    &= \int_{B} \mathbb{1}_{A} \zeta dP.
  \end{aligned}
$$

Now using linearity implies the result for simple $$\mathcal{G}$$-measurable $$\xi$$. Then, use Dominated Convergence Theorem to extend the result to bounded $$\mathcal{G}$$-measurable $$\xi$$. To consider the general case, that is, to show $$\xi Z \in L^1$$, let us define

$$
H_n = \big(|\xi| \land n \big)\text{sgn}(Z)
$$

The bounded case and result in 2 give

$$
\begin{aligned}
    E((|\xi| \land n) |Z|)
    &= E(H_n Z) \\
    &= E(E(H_n \zeta | \mathcal{G})) \\
    &= E(H_n \zeta) \\
    &\leq E(|\xi\zeta|) < \infty.
  \end{aligned}
$$

By Monotone Convergence Theorem, we have

$$
E(|xi Z|) \leq E(|\xi \zeta|) < \infty.
$$

Now put

$$
\xi_n = (-n) \lor (\xi \land n).
$$

For every $$B \in \mathcal{G}$$, the bounded case gives

$$
\int_{B} \xi_n Z dP = \int_{B} \xi_n \zeta dP.
$$

Since $$\xi_n \to \xi$$ and

$$
|\xi_n Z| \leq | \xi Z| \in L^1 \quad \text{and} \quad |\xi_n \zeta| \leq |\xi \zeta| \in L^1,
$$

Dominated Convergence Theorem gives

$$
\int_{B} \xi Z dP = \int_{B} \xi \zeta dP.
$$

</li>

<li value="4" markdown="1">

For $$A \in \mathcal{G}$$, independence gives

$$
\begin{aligned}
    \int_{A} E(\xi) dP
    &= E(\xi) P(A) \\
    &= E(\xi \mathbb{1}_{A}) \\
    &= \int_{A} \xi dP.
  \end{aligned}
$$

</li>

<li value="5" markdown="1">

$$E(E(\xi \vert  \mathcal{G}) \vert  \mathcal{H}) = E(\xi \vert  \mathcal{H})$$ is integrable and $$\mathcal{H}$$-measurable. For every $$A \in \mathcal{H} \subset \mathcal{G}$$, we have

$$
\int_{A} E(E(\xi | \mathcal{G}) | \mathcal{H}) dP = \int_{A} E(\xi | \mathcal{G}) dP = \int_{A} \xi dP
$$

</li>

</ol>

</div>

{% endraw %}

<!-- prettier-ignore-end -->

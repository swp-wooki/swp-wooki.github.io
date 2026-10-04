---
layout: post
title: "Probability Theory 6: Conditional Inequalities and Filtrations"
date: 2026-10-04 12:06:00 +0900
description: "Conditional expectation의 부등식, 확률변수열과 filtration을 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 6)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_6.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

#### conditional expectation과 nonlinear 함수

<span id="l6:t01"></span>

지난 시간에는 conditional expectation의 linearity와 tower property 등을 보았다. 이번에는 nonlinear 함수를 적용하면 어떤 일이 생기는지 보자. integrable한 $$\xi$$에 대해서는

$$
\left|\int\xi\,dP\right|\leq\int|\xi|\,dP
$$

가 성립한다. 그렇다면 적분 대신 conditional expectation을 넣어도

$$
|E(\xi\mid\mathcal G)|\leq E(|\xi|\mid\mathcal G)\quad\text{a.s.}
$$

가 성립할까? 여기서 $$\mathcal G\subseteq\mathcal F$$는 주어진 정보를 나타내는 sigma-field이다.

보통의 expectation을 계산하면 수 하나가 나온다. 하지만 conditional expectation을 계산하면 여전히 random variable이 남는다. 따라서 지금 비교하려는 것은 두 수가 아니라 두 함수이고, 부등식도 almost surely 성립한다는 형태로 써야 한다. 더욱이 conditional expectation은 명시적인 계산식이 아니라 사건별 적분 조건으로 정의했다. 두 함수를 직접 계산해서 비교하기보다는, 이미 알고 있는 linearity와 monotonicity를 사용할 방법을 찾아야 한다. 그 연결을 해 주는 것이 convexity이다.

<div class="real-analysis-statement" markdown="1">

**Definition (convex function).**

함수 $$\varphi:\mathbb R\to\mathbb R$$가 모든 $$x,y\in\mathbb R$$와 $$\lambda\in[0,1]$$에 대해

$$
\varphi(\lambda x+(1-\lambda)y)
\leq\lambda\varphi(x)+(1-\lambda)\varphi(y)
$$

를 만족하면 convex function이라고 한다.

</div>

$$x$$와 $$y$$ 사이의 점 $$\lambda x+(1-\lambda)y$$를 생각해 보자. 왼쪽은 그 점에서의 함수값이고, 오른쪽은 그래프 위의 두 점을 연결한 선분의 높이이다. convex하다는 것은 그래프가 이 선분보다 위로 올라가지 않는다는 뜻이다. $$x\mapsto\vert x\vert $$의 V자 모양 그래프가 한 예이다.

#### conditional Jensen's inequality: 곡선을 직선들로 바꾸기

<span id="l6:t02"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.2 (conditional Jensen's inequality).**

$$\varphi:\mathbb R\to\mathbb R$$가 convex하고 $$\xi,\varphi(\xi)\in L^1$$이면

$$
\varphi(E(\xi\mid\mathcal G))
\leq E(\varphi(\xi)\mid\mathcal G)\quad\text{a.s.}
$$

이다.

</div>

두 integrability 조건의 역할을 구별하자. 왼쪽의 $$E(\xi\mid\mathcal G)$$를 정의하려면 $$\xi\in L^1$$이 필요하다. 오른쪽의 conditional expectation을 정의하려면 $$\varphi(\xi)\in L^1$$도 필요하다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

핵심은 convex function을 그 아래의 affine function들로 표현하는 것이다. affine function은 $$ax+b$$ 꼴의 함수이다. 그래프의 한 점을 지나면서 전체 그래프 아래에 놓이는 직선을 supporting line이라고 하자. 매끄러운 convex function이라면 접선을 떠올리면 되지만, 이 논의에 미분가능성을 가정하지는 않는다.

유리수를 $$q_1,q_2,\ldots$$로 나열하고, 각 $$q_k$$에서 supporting line $$a_kx+b_k$$를 하나씩 택한다. 그러면

$$
a_kx+b_k\leq\varphi(x),\qquad
 a_kq_k+b_k=\varphi(q_k),\qquad
\varphi(x)=\sup_{k\geq1}(a_kx+b_k).
$$

마지막 식은 모든 점에서 지지하는 직선을 다 고를 필요가 없다는 뜻이다. 유리수 지점의 supporting line만 택해도 그 상한으로 원래 그래프를 회복한다. 이렇게 선택한 직선들의 모임은 countable하다.

이 표현의 이유를 조금 살펴보자. 유한값 convex function은 실수축의 내부에서 연속이고, 한 점의 왼쪽 할선 기울기들과 오른쪽 할선 기울기들 사이에서 supporting line의 기울기를 택할 수 있다. 고정된 $$x$$로 유리수 $$q_k$$를 가까이 보내면, 주변의 두 고정된 점으로 만든 할선 기울기가 그 supporting line들의 기울기를 위아래에서 제한한다. 따라서

$$
a_kx+b_k=\varphi(q_k)+a_k(x-q_k)\longrightarrow\varphi(x)
$$

가 되도록 유리수들을 택할 수 있다. 모든 supporting line은 원래 함수보다 아래에 있으므로 그 상한은 정확히 $$\varphi(x)$$이다.

이제 nonlinear 함수를 한 번에 다루지 말고 $$k$$를 하나 고정하자. $$a_k\xi+b_k\leq\varphi(\xi)$$이고, $$\xi\in L^1$$이므로 이 affine function도 integrable하다. conditional expectation의 linearity와 monotonicity를 차례로 적용하면

$$
a_kE(\xi\mid\mathcal G)+b_k
=E(a_k\xi+b_k\mid\mathcal G)
\leq E(\varphi(\xi)\mid\mathcal G)\quad\text{a.s.}
$$

이다. nonlinear 문제를 이미 알고 있는 두 성질로 바꾼 셈이다.

<span id="l6:t03"></span>

여기서 곧바로 상한을 취하기 전에 “almost surely”라는 말을 확인해야 한다. 각 $$k$$의 부등식에는 실패할 수 있는 null set $$N_k$$가 있다. 선택한 supporting line들의 모임이 countable하므로

$$
N=\bigcup_{k=1}^{\infty}N_k,\qquad
P(N)\leq\sum_{k=1}^{\infty}P(N_k)=0.
$$

$$N$$ 밖에서는 모든 $$k$$의 부등식이 동시에 성립한다. 유리수들을 택한 것이 바로 이 단계에 쓰인다. uncountable한 모임을 이루는 null set들의 합집합까지 확률이 0이라고 할 수는 없다.

그 공통의 확률 1인 집합 위에서 상한을 취하면

$$
\begin{aligned}
\varphi(E(\xi\mid\mathcal G))
&=\sup_{k\geq1}\{a_kE(\xi\mid\mathcal G)+b_k\}\\
&\leq E(\varphi(\xi)\mid\mathcal G).
\end{aligned}
$$

오른쪽은 $$k$$에 의존하지 않으므로 모든 affine function의 공통 상계로 남는다. 이것으로 증명이 끝난다. 이 과정에서 상한을 conditional expectation 안으로 옮긴 것은 아니다.

</div>

#### 절댓값과 $$p$$제곱에 적용하기

<span id="l6:t04"></span>

먼저 $$\varphi(x)=\vert x\vert $$를 넣으면 처음의 질문에 답을 얻는다.

$$
|E(\xi\mid\mathcal G)|\leq E(|\xi|\mid\mathcal G)\quad\text{a.s.}
$$

$$\xi\in L^1$$이면 $$\vert \xi\vert $$도 integrable하므로 정리의 두 조건이 모두 충족된다.

또 $$1\leq p<\infty$$이고 $$\xi\in L^p$$, 즉 $$E\vert \xi\vert ^p<\infty$$라고 하자. probability space에서는 $$\vert \xi\vert \leq1+\vert \xi\vert ^p$$이므로 $$\xi\in L^1$$도 따른다. convex function $$\varphi(x)=\vert x\vert ^p$$에 Jensen's inequality를 적용하면

$$
|E(\xi\mid\mathcal G)|^p\leq E(|\xi|^p\mid\mathcal G)\quad\text{a.s.}
$$

이다. 두 변이 아직 random variable이라는 점을 기억하자. 여기에 expectation을 한 번 더 취하면

$$
E\bigl(|E(\xi\mid\mathcal G)|^p\bigr)
\leq E\bigl(E(|\xi|^p\mid\mathcal G)\bigr)=E|\xi|^p.
$$

오른쪽이 유한하므로 왼쪽의 integrability도 이 부등식에서 함께 얻는다. 마지막 등식은 전체 expectation 보존 성질이다. conditional expectation을 취한 뒤에도 $$p$$제곱 적분이 커지지 않는다는 결론이다.

## 3. discrete time martingale

<span id="l6:t05"></span>

conditional expectation의 성질은 여기까지 보고, 2.6절의 연습문제로 계산에 익숙해지면 좋다. 이제 discrete time stochastic process를 다룬다. 나중에 6장에서는 continuous time stochastic process를 다루지만, 지금의 시간은 $$1,2,3,\ldots$$처럼 한 단계씩 진행한다.

동전 던지기 같은 게임을 여러 번 반복한다고 생각해 보자. 어떤 때는 돈을 얻고 어떤 때는 잃는다. martingale은 이런 과정에서 공정한 게임을 수학적으로 표현하는 모형이다. 공정하다는 말은 매번 실제 수익이 0이라는 뜻이 아니라, 현재 정보에 비추어 예상하는 다음 수익에 관한 말이다. 앞으로는 이 의미를 정의하고, 판마다 돈을 다르게 거는 전략도 살펴보자.

### 3.1 random variable들의 열과 sample path

한 번의 게임을 random variable 하나로 나타냈다면, 반복되는 게임은 같은 probability space $$(\Omega,\mathcal F,P)$$ 위에 정의된 random variable들의 열

$$
\xi_n:\Omega\to\mathbb R,\qquad n\geq1
$$

로 나타낼 수 있다.

<div class="real-analysis-statement" markdown="1">

**Definition (sample path).**

결과 $$\omega\in\Omega$$ 하나를 고정했을 때 얻는 실수열

$$
\xi_1(\omega),\xi_2(\omega),\ldots
$$

을 $$(\xi_n)$$의 sample path라고 한다.

</div>

$$\xi_n$$은 함수이고 $$\xi_n(\omega)$$는 그 함수의 실현값이다. 반복되는 동전 던지기의 전체 결과 하나를 고정하고 앞면을 1, 뒷면을 0으로 표시하면, 그 결과에 대응하는 0과 1의 수열이 sample path이다. 이번 절에서는 이 구별을 먼저 기억하면 된다.

### 3.2 filtration과 지금까지의 정보

<span id="l6:t06"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (filtration).**

sigma-field들의 열 $$(\mathcal F_n)$$이

$$
\mathcal F_1\subseteq\mathcal F_2\subseteq\cdots\subseteq\mathcal F
$$

를 만족하면 filtration이라고 한다.

</div>

각 $$\mathcal F_n$$은 전체 사건들의 sigma-field $$\mathcal F$$ 안에 있다. 시간이 지날수록 관측이 쌓이고, 이미 얻은 정보는 잃지 않는다는 모습을 포함관계로 나타낸다.

<div class="real-analysis-statement" markdown="1">

**Example 3.1.**

무한 동전열 $$\Omega=\{H,T\}^{\mathbb N}$$에서 $$n$$번째 앞면을 $$\xi_n=1$$, 뒷면을 $$\xi_n=0$$으로 표시하고

$$
\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)
$$

으로 두자. $$A$$를 처음 다섯 번 중 앞면이 적어도 두 번 나오는 사건이라 하면

$$
A\in\mathcal F_5,\qquad A\notin\mathcal F_4.
$$

</div>

다섯 번을 모두 관측하면 $$A$$의 발생 여부를 판단할 수 있으므로 $$A\in\mathcal F_5$$이고, 포함관계에 의해 $$\mathcal F_6,\mathcal F_7,\ldots$$에도 속한다. 하지만 네 번의 결과가 $$TTHT$$라면 어떤가? 다섯 번째가 $$H$$일 때는 $$A$$가 발생하고 $$T$$일 때는 발생하지 않는다. 첫 네 관측만 같은 두 결과를 구별해야 하므로 $$A\notin\mathcal F_4$$이다.

반대로 처음 네 번이 $$THTH$$이면 이미 앞면이 두 번 나왔다. 그 경로에서는 다섯 번째 결과와 관계없이 $$A$$가 발생한다는 것을 안다. 그런데 이것만으로 $$A\in\mathcal F_4$$라고 할 수는 없다. sigma-field에 속한다는 것은 특정한 경로에서 우연히 답을 알 수 있다는 뜻이 아니라, 첫 네 관측이 주어지면 모든 경우에 발생 여부를 판별할 수 있다는 뜻이다. 이 예의 $$\mathcal F_n$$의 사건들은 첫 $$n$$번 결과가 같은 무한 동전열들을 구별하지 못한다.

#### 사건을 판별할 수 있는 가장 이른 시점

<span id="l6:t07"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.1.**

위 동전열에서 다음 사건이 $$\mathcal F_n$$에 속하는 가장 작은 $$n\geq1$$을 구하여라. 그런 유한한 $$n$$이 없을 수도 있다.

<ol type="1" markdown="1">

<li markdown="1">

$$A$$: 첫 앞면 전에 뒷면이 열 번 이하 나온다.

</li>

<li markdown="1">

$$B$$: 무한한 동전열 어딘가에서 앞면이 한 번 이상 나온다.

</li>

<li markdown="1">

$$C$$: 처음 백 번의 결과가 모두 같다.

</li>

<li markdown="1">

$$D$$: 처음 다섯 번에서 앞면이 두 번 이하이고 뒷면도 두 번 이하이다.

</li>

</ol>

</div>

먼저 각 답을 생각해 보자. 어떤 시점에 사건이 속한다는 것과 그 시점이 가장 이르다는 것은 별도로 확인해야 한다.

$$A$$의 조건은 처음 열한 번 중 앞면이 적어도 한 번 있다는 뜻이므로

$$
A=\bigcup_{k=1}^{11}\{\xi_k=1\}\in\mathcal F_{11}.
$$

각 사건은 $$\mathcal F_k$$에 속하고 $$k\leq11$$이면 $$\mathcal F_k\subseteq\mathcal F_{11}$$이므로 합집합도 $$\mathcal F_{11}$$에 속한다.

이 식이 바로 와닿지 않으면 첫 앞면의 위치를 나열해 보자. $$H\ldots$$, $$TH\ldots$$, $$TTH\ldots$$, 그리고 마지막으로 $$T^{10}H\ldots$$가 가능하다. 각 접두부 뒤의 점들은 이후의 결과가 무엇이든 상관없다는 뜻이다. 따라서 접두부 하나는 단일한 결과가 아니라 수많은 무한 동전열을 나타낸다. 이 경우들을 합친 것이 위의 간단한 합집합이다.

열 번 연속 $$T$$가 나왔을 때는 아직 결론을 내릴 수 없다. 열한 번째 $$H$$는 $$A$$를 성립시키고, $$T$$는 실패하게 한다. 따라서 $$A\notin\mathcal F_{10}$$이며 최소 시점은 11이다. 더 이전의 sigma-field는 모두 $$\mathcal F_{10}$$ 안에 있으므로 그때도 속하지 않는다.

$$B$$에서는 어떤 유한한 $$n$$을 택해도 처음 $$n$$번이 모두 $$T$$인 경우를 생각할 수 있다. 그 뒤에 $$H$$가 나오는 결과와 영원히 $$T$$만 나오는 결과는 첫 $$n$$번 관측이 같지만 $$B$$의 발생 여부는 다르다. 그러므로

$$
B\notin\mathcal F_n\qquad\text{모든 유한한 }n.
$$

이미 앞면을 본 경로에서는 답을 알지만, 모든 경로의 답을 유한한 한 시점에 결정할 수는 없다. 이는 사건의 정확한 집합 소속에 관한 논의이다.

<span id="l6:t08"></span>

$$C$$는 앞면만 백 번 또는 뒷면만 백 번 나오는 경우이다.

$$
C=\{\xi_1=\cdots=\xi_{100}=1\}
\cup\{\xi_1=\cdots=\xi_{100}=0\}\in\mathcal F_{100}.
$$

하지만 앞면이 아흔아홉 번 나온 뒤에는 마지막 한 번에 따라 결론이 달라진다. 그래서 $$C\notin\mathcal F_{99}$$이고 최소 시점은 100이다.

$$D$$는 발생할 수 없다. 앞면 수와 뒷면 수를 더하면 반드시 5인데, 둘 다 2 이하이면 합이 4 이하가 되기 때문이다. 따라서 $$D=\emptyset$$이고 모든 sigma-field에 속한다. 문제의 범위가 $$n\geq1$$이므로 최소값은 1이다.

#### adaptedness: random variable과 filtration의 관계

<span id="l6:t09"></span>

지금까지 random variable들의 열과 filtration을 각각 정의했다. filtration의 정의만 보면 특정 random variable들의 열이 등장하지 않는다. 두 대상을 연결하려면 별도의 조건이 필요하다.

<div class="real-analysis-statement" markdown="1">

**Definition (adaptedness).**

모든 $$n\geq1$$에서 $$\xi_n$$이 $$\mathcal F_n$$-measurable이면 $$(\xi_n)$$이 $$(\mathcal F_n)$$에 adapted라고 한다.

</div>

이는 시점 $$n$$의 정보로 그 시점의 값 $$\xi_n$$을 알 수 있어야 한다는 조건이다.

<div class="real-analysis-statement" markdown="1">

**Example 3.2.**

모든 random variable들의 열 $$(\xi_n)$$은 자신의 natural filtration

$$
\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)
$$

에 adapted이다.

</div>

생성 sigma-field의 정의에 의해 $$\xi_n$$은 $$\mathcal F_n$$-measurable이다. 또 생성에 사용한 변수가 늘어나므로 $$(\mathcal F_n)$$은 실제로 filtration이다.

#### natural filtration이 가장 작다는 뜻

<span id="l6:t10"></span>

natural filtration만이 가능한 filtration은 아니다. 더 많은 정보를 넣은 filtration에도 같은 random variable들의 열이 adapted일 수 있다. natural filtration은 그중 필요한 정보만 담은 가장 작은 filtration이다.

<div class="real-analysis-statement" markdown="1">

**Exercise 3.2.**

$$(\xi_n)$$이 filtration $$(\mathcal G_n)$$에 adapted이면

$$
\sigma(\xi_1,\ldots,\xi_n)\subseteq\mathcal G_n
\qquad\text{모든 }n\geq1
$$

임을 보여라.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$n$$을 고정하고 $$k\leq n$$을 택하자. adaptedness에 의해 $$\xi_k$$는 $$\mathcal G_k$$-measurable이다. filtration의 포함관계 $$\mathcal G_k\subseteq\mathcal G_n$$에 의해 $$\xi_k$$는 $$\mathcal G_n$$-measurable이기도 하다. 구체적으로 모든 Borel set $$B$$에 대해

$$
\{\xi_k\in B\}\in\mathcal G_k\subseteq\mathcal G_n.
$$

따라서 $$\mathcal G_n$$은 $$\xi_1,\ldots,\xi_n$$을 모두 measurable하게 만든다. 이 변수들을 measurable하게 만드는 가장 작은 sigma-field가 $$\sigma(\xi_1,\ldots,\xi_n)$$이므로 원하는 포함관계가 따른다.

</div>

#### 공정한 게임의 정의로 이어가기

<span id="l6:t11"></span>

다음에 공부할 martingale의 조건을 먼저 살펴보자. 각 $$\xi_n$$이 integrable하고, 열이 주어진 filtration에 adapted이며,

$$
E(\xi_{n+1}\mid\mathcal F_n)=\xi_n\quad\text{a.s.}
$$

이면 martingale이라고 한다. integrability는 conditional expectation을 정의하기 위해, adaptedness는 현재 값과 현재 정보를 연결하기 위해 필요하다. 마지막 등식은 지금까지의 정보를 모두 사용해 다음 값을 예상해도 현재 값과 같다는 공정성의 조건이다. filtration은 꼭 natural filtration일 필요는 없다. 다음에는 예제를 통해 이 세 조건을 확인하고, 등식을 부등식으로 바꾼 경우도 살펴보자.

{% endraw %}

<!-- prettier-ignore-end -->

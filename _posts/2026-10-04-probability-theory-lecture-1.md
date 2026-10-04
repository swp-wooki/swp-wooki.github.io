---
layout: post
title: "Probability Theory 1: Events and Random Variables"
date: 2026-10-04 12:01:00 +0900
description: "사건과 확률, 확률공간, 확률변수와 분포함수를 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 1)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_1.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

## Chapter 1. 확률의 언어

<span id="l1:t01"></span>

이 강의에서는 해석학에서 익힌 생각을 바탕으로 확률론의 언어를 배워 나간다. 앞으로 sigma-field, probability space, random variable, distribution, expectation, variance, conditional probability, independence가 차례로 등장한다. 처음에는 이름이 많아 어렵게 느껴질 수 있다. 이럴 때는 정의를 따로 외우기보다, 어떤 질문에 답하려고 그 정의를 도입하는지 따라가 보자. 그러면 앞의 개념이 다음 개념으로 이어지는 이유를 볼 수 있다.

가령 random variable은 이름과 달리 하나의 함수이다. 가능한 결과를 입력하면 우리가 관측하려는 수치를 돌려준다. 여기에 조건 하나가 더 필요하다. 그 수치에 관한 질문을 확률로 계산할 수 있어야 한다는 것이다. 오늘은 바로 이 조건이 무엇인지까지 살펴본다. measure에 관한 용어도 그때그때 필요한 만큼 뜻을 짚어 가자.

교재는 일곱 장으로 이루어져 있고, 마지막 장에서는 Itô calculus를 다룬다. 그 내용까지 살펴보는 것이 목표이다. 지금은 먼저 이후의 논의를 가능하게 해 주는 기본 언어를 마련하자.

### 1.1 사건과 확률

#### 어떤 집합에 확률을 물을 수 있을까?

<span id="l1:t02"></span>

먼저 가능한 결과들을 모은 비어 있지 않은 집합 $$\Omega$$를 고정하자. 그 안의 한 원소 $$\omega$$는 개별 결과이고, 부분집합 $$A\subset\Omega$$는 어떤 조건을 만족하는 결과들의 모임이다. 예를 들어 동전을 던졌을 때 앞면이 나오는 결과들만 모을 수 있다.

여기서 집합을 한 단계 더 모아야 한다. $$\mathcal P(\Omega)=2^\Omega$$는 $$\Omega$$의 모든 부분집합을 원소로 갖는 **power set**이다. 그중에서 우리가 다룰 부분집합들을 골라 모은 것이 $$\mathcal F$$이다. 따라서

$$
\omega\in\Omega,\qquad A\subset\Omega,\qquad
A\in\mathcal F,\qquad \mathcal F\subset\mathcal P(\Omega)
$$

는 서로 다른 관계를 표현한다. $$\mathcal F$$의 원소는 개별 결과가 아니라 결과들의 집합이라는 점을 먼저 구별해 두자.

<div class="real-analysis-statement" markdown="1">

**Definition 1.1: sigma-field.**

비어 있지 않은 집합 $$\Omega$$에 대하여, 집합들의 모임 $$\mathcal F\subset\mathcal P(\Omega)$$가 다음 세 조건을 만족하면 **sigma-field** 또는 **sigma-algebra**라고 한다.

<ol type="1" markdown="1">

<li markdown="1">

$$\varnothing\in\mathcal F$$.

</li>

<li markdown="1">

$$A\in\mathcal F$$이면 $$\Omega\setminus A\in\mathcal F$$.

</li>

<li markdown="1">

$$A_n\in\mathcal F$$가 모든 $$n\geq1$$에 대해 성립하면 $$\bigcup_{n=1}^{\infty}A_n\in\mathcal F$$.

</li>

</ol>

</div>

첫 조건은 단순히 $$\mathcal F$$가 비어 있지 않다는 말보다 구체적이다. 빈집합 자체가 $$\mathcal F$$의 원소여야 한다. 둘째 조건은 여집합을 취해도 $$\mathcal F$$ 안에 남아야 한다는 뜻이다. 셋째 조건에서는 집합들을 $$A_1,A_2,\ldots$$처럼 자연수로 나열한 뒤 모두 합친다. 이렇게 자연수로 나열할 수 있다는 것을 countable이라고 한다. 유한 개의 합집합도 나머지 항을 빈집합으로 두면 이 조건에 포함된다.

#### 세 조건에서 따라오는 집합 연산

<span id="l1:t03"></span>

정의가 길어 보이지만, 이 세 조건을 가지고 실제로 무엇을 할 수 있는지 보자.

<div class="real-analysis-statement" markdown="1">

**Remark.**

<ol type="1" markdown="1">

<li markdown="1">

$$\Omega=\Omega\setminus\varnothing$$이므로 $$\Omega\in\mathcal F$$이다.

</li>

<li markdown="1">

$$A_n\in\mathcal F$$이면 De Morgan's laws에 의해

$$
\bigcap_{n=1}^{\infty}A_n
=\Omega\setminus\bigcup_{n=1}^{\infty}(\Omega\setminus A_n)\in\mathcal F.
$$

각 여집합이 $$\mathcal F$$에 속하고, 그 countable union도 속하며, 마지막으로 다시 여집합을 취할 수 있기 때문이다.

</li>

<li markdown="1">

$$A,B\in\mathcal F$$이면

$$
A\setminus B=A\cap(\Omega\setminus B)\in\mathcal F.
$$

</li>

</ol>

</div>

즉, sigma-field는 여집합, countable union, countable intersection 같은 기본 집합 연산을 해도 닫혀 있는 집합들의 모임이다. 다만 모든 부분집합을 반드시 포함해야 하는 것은 아니다. 바로 이 점이 다음 예에서 중요하다.

#### 실수 위에서 만나는 sigma-field

<span id="l1:t04"></span>

<div class="real-analysis-statement" markdown="1">

**Example: 실수 위의 세 가지 집합들의 모임.**

가장 쉬운 예는 power set $$\mathcal P(\mathbb R)$$이다. 실수의 부분집합들을 어떤 식으로 합치거나 여집합을 취해도 결과는 실수의 부분집합이므로 sigma-field의 조건을 만족한다.

두 번째는 **Borel sigma-field** $$\mathcal B(\mathbb R)$$이다. 이는 실수의 모든 열린집합을 포함하는 가장 작은 sigma-field이며, 그 원소를 **Borel set**이라고 한다. 여기서 “가장 작다”는 말은, 열린집합들을 포함하는 다른 어떤 sigma-field 안에도 $$\mathcal B(\mathbb R)$$가 포함된다는 뜻이다.

모든 열린구간을 포함하는 가장 작은 sigma-field라고 정의해도 같다. 실수의 열린집합은 열린구간들의 countable union으로 쓸 수 있기 때문이다. 그렇다고 열린집합 하나하나가 모두 구간이라는 뜻은 아니다. 예를 들어 $$(0,1)\cup(2,3)$$도 열린집합이다.

세 번째는 Lebesgue measurable set 전체의 모임 $$\mathcal M(\mathbb R)$$이다. 이것도 sigma-field이며, Lebesgue measure가 정의되는 집합들을 모은 것이다.

</div>

Lebesgue measure는 구간의 길이를 더 일반적인 집합으로 확장한 measure이다. 익숙한 식으로는 $$\operatorname{Leb}([a,b])=b-a$$이다. 그런데 그 measure를 실수의 모든 부분집합에 그대로 정의할 수는 없다. 그래서 전체 power set보다 작은, measure를 정의할 수 있는 집합들의 모임을 사용한다. 여기서는 그러한 집합을 구성하는 이론까지 들어가기보다

$$
\mathcal B(\mathbb R)\subset\mathcal M(\mathbb R)\subset\mathcal P(\mathbb R)
$$

라는 관계와, 어떤 집합들의 모임을 measure의 정의역으로 선택하는지에 주목하자.

#### 동전 두 번 던지기: 같은 결과 공간, 다른 정보

<span id="l1:t05"></span>

<div class="real-analysis-statement" markdown="1">

**Example: 첫 번째 동전만 관측하는 경우.**

두 동전을 던지거나 동전 하나를 두 번 던진 결과를

$$
\Omega=\{HH,HT,TH,TT\}
$$

로 나타내자. $$H$$는 앞면, $$T$$는 뒷면이고 순서도 구별한다. 예를 들어 $$HT$$는 첫 번째가 앞면이고 두 번째가 뒷면인 결과이다.

이제 첫 번째 동전만 볼 수 있다고 하자. 첫 번째가 앞면인 사건은

$$
A=\{HH,HT\},
$$

뒷면인 사건은 $$A^c=\{TH,TT\}$$이다. 첫 번째 동전을 관측하면 어느 쪽에 속하는지는 알 수 있지만, $$HH$$와 $$HT$$ 중 어느 결과인지는 구별하지 못한다. 따라서 이 관측으로 얻는 정보는

$$
\mathcal F=\{\varnothing,A,A^c,\Omega\}
$$

로 나타낼 수 있다. 여집합을 취하면 $$A$$와 $$A^c$$가 바뀌고, 둘을 합치면 $$\Omega$$가 되므로 sigma-field의 조건도 확인된다.

반면 두 번째 동전이 앞면인 사건

$$
B=\{HH,TH\}
$$

는 이 $$\mathcal F$$에 속하지 않는다. 첫 번째 동전만 보아서는 그 사건이 일어났는지 판단할 수 없기 때문이다.

</div>

같은 $$\Omega$$에서도 전체 power set을 선택할 수도 있고, 이처럼 더 작은 sigma-field를 선택할 수도 있다. 네 원소를 가진 $$\Omega$$의 power set에는 $$2^4=16$$개의 원소가 있지만, 위의 $$\mathcal F$$에는 네 개만 있다. sigma-field를 선택하는 일은 우리가 어떤 정보를 다룰 것인지와 연결된다. 이 관점은 뒤에서 random variable이 만들어 내는 정보와 conditional expectation을 이해할 때 다시 쓰인다.

#### 사건에 수치를 붙이는 probability measure

<span id="l1:t06"></span>

이제 어떤 부분집합들을 사건으로 다룰지 정했다. 다음에는 그 사건에 확률이라는 수치를 붙여야 한다.

<div class="real-analysis-statement" markdown="1">

**Definition 1.2: probability measure와 probability space.**

sigma-field $$\mathcal F$$ 위의 함수

$$
P:\mathcal F\longrightarrow[0,1]
$$

가 다음 조건을 만족하면 **probability measure**라고 한다.

<ol type="1" markdown="1">

<li markdown="1">

$$P(\Omega)=1$$.

</li>

<li markdown="1">

서로소인 사건들 $$A_1,A_2,\ldots\in\mathcal F$$에 대하여

$$
P\left(\bigcup_{n=1}^{\infty}A_n\right)
=\sum_{n=1}^{\infty}P(A_n).
$$

</li>

</ol>

둘째 성질을 **countable additivity**라고 한다. $$\Omega$$를 **sample space**, $$\mathcal F$$를 **event space**, 그 원소 $$A\in\mathcal F$$를 **사건**이라고 한다. 세 가지를 함께 모은 $$(\Omega,\mathcal F,P)$$를 **probability space**라고 한다.

</div>

서로소라는 조건은 서로 다른 $$m,n$$에 대해 $$A_m\cap A_n=\varnothing$$이라는 뜻이다. 동시에 일어날 수 없는 사건들을 합칠 때는 확률을 그대로 더한다. 겹치는 부분이 있다면 같은 결과를 중복해서 세므로 이 등식을 그대로 사용할 수 없다.

일반적인 measure는 집합에 음이 아닌 크기를 부여하며 countable additivity를 만족하는 함수이다. probability measure는 그중에서도 전체 공간의 크기가 정확히 $$1$$인 경우이다. Lebesgue measure가 길이를 준다면, probability measure는 사건의 확률을 준다. $$P$$가 받아들이는 것은 결과 $$\omega$$가 아니라 사건 $$A$$라는 점도 구별해 두자.

#### 확률이 1이라는 말과 모든 결과에서 성립한다는 말

<span id="l1:t07"></span>

<div class="real-analysis-statement" markdown="1">

**Example: 단위구간 위의 확률.**

$$
\Omega=[0,1],\qquad \mathcal F=\mathcal B([0,1]),\qquad
P(A)=\operatorname{Leb}(A)\quad(A\in\mathcal F)
$$

로 두자. $$\mathcal B([0,1])$$는 Borel set을 단위구간에 제한한 집합들의 모임이다. Lebesgue measure를 이 집합들의 모임에 제한해도 countable additivity가 유지되고,

$$
P(\Omega)=\operatorname{Leb}([0,1])=1
$$

이므로 probability space가 된다. 구간 $$[a,b]\subset[0,1]$$에 대해서는

$$
P([a,b])=b-a
$$

이다. 이 예에서는 길이가 곧 확률이다.

</div>

단위구간에서 한 점을 빼면 어떻게 될까? 한 점의 Lebesgue measure는 $$0$$이므로

$$
A=[0,1]\setminus\{1/2\}
\quad\Longrightarrow\quad P(A)=1,
\qquad A\neq\Omega.
$$

실제로 제외된 결과가 있지만, 그 예외들의 확률은 $$0$$이다.

<div class="real-analysis-statement" markdown="1">

**Definition (almost sure 성립).**

사건 $$A$$가 $$P(A)=1$$을 만족하면 $$A$$가 **almost surely** 성립한다고 하고, almost surely를 줄여 a.s.라고 쓴다.

</div>

따라서 “모든 $$\omega\in\Omega$$에서 성립한다”와 “almost surely 성립한다”는 다른 말이다. 후자는 예외가 있더라도 그 예외의 확률이 $$0$$이면 된다. 확률 $$1$$을 집합 자체가 $$\Omega$$라는 말로 바꾸어 읽지 말자.

#### probability measure의 기본 계산 규칙

<span id="l1:t08"></span>

<div class="real-analysis-statement" markdown="1">

**Remark: 여사건, monotonicity, countable subadditivity.**

probability space에서 다음이 성립한다.

<ol type="1" markdown="1">

<li markdown="1">

$$P(\Omega)=1$$, $$P(\varnothing)=0$$.

</li>

<li markdown="1">

$$P(A^c)=1-P(A)$$.

</li>

<li markdown="1">

$$A\subset B$$이면 $$P(A)\leq P(B)$$.

</li>

<li markdown="1">

임의의 사건열에 대해

$$
P\left(\bigcup_{n=1}^{\infty}A_n\right)
\leq\sum_{n=1}^{\infty}P(A_n).
$$

마지막 성질을 **countable subadditivity**라고 한다.

</li>

</ol>

</div>

이 성질들이 정의와 어떻게 연결되는지 짚어 보자. $$\Omega$$와 빈집합들을 서로소 합집합으로 놓고 countable additivity를 적용하면 빈집합의 확률은 $$0$$이어야 한다. 또 $$\Omega=A\cup A^c$$는 서로소 합집합이므로 $$1=P(A)+P(A^c)$$이다.

$$A\subset B$$일 때는 $$B=A\cup(B\setminus A)$$로 나눌 수 있다. 따라서

$$
P(B)=P(A)+P(B\setminus A)\geq P(A)
$$

이어서 monotonicity를 얻는다.

마지막 부등식에서는 겹치는 부분을 제거해 보면 된다. $$C_1=A_1$$,

$$
C_n=A_n\setminus\bigcup_{k<n}A_k\quad(n\geq2)
$$

로 두면 $$C_n$$들은 서로소이고, 전체 합집합은 원래와 같다. 이미 앞에서 센 부분을 다음 집합에서 빼는 것이다. 그러므로

$$
P\left(\bigcup_n A_n\right)
=P\left(\bigcup_n C_n\right)
=\sum_nP(C_n)\leq\sum_nP(A_n).
$$

additivity는 서로소라는 조건 아래의 등식이고, subadditivity는 그 조건 없이 쓸 수 있는 부등식이다.

#### 집합의 극한을 확률의 극한으로 옮기기

<span id="l1:t09"></span>

실수열의 극한은 익숙하지만, 집합열의 극한이라는 말은 어떤 뜻인가? 여기서는 다음 두 경우를 사용한다.

$$
A_n\nearrow A
\quad\Longleftrightarrow\quad
A_n\subset A_{n+1},\quad \bigcup_{n=1}^{\infty}A_n=A,
$$

$$
A_n\searrow A
\quad\Longleftrightarrow\quad
A_n\supset A_{n+1},\quad \bigcap_{n=1}^{\infty}A_n=A.
$$

첫째는 집합들이 커지면서 $$A$$를 채워 가는 경우이고, 둘째는 작아지면서 최종적으로 남는 부분이 $$A$$인 경우이다.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.1: 확률의 연속성.**

모든 $$n$$에 대해 $$A_n\in\mathcal F$$라 하자.

<ol type="1" markdown="1">

<li markdown="1">

$$A_n\nearrow A$$이면 $$P(A_n)\nearrow P(A)$$.

</li>

<li markdown="1">

$$A_n\searrow A$$이면 $$P(A_n)\searrow P(A)$$.

</li>

</ol>

</div>

왼쪽은 집합의 포함관계와 합집합 또는 교집합에 관한 말이다. 오른쪽은 $$[0,1]$$ 안의 실수열에 관한 말이다. 이 성질이 두 종류의 극한을 이어 준다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

증가하는 경우, 처음부터 있던 부분과 매 단계 새로 들어오는 부분으로 나누자.

$$
D_1=A_1,\qquad D_n=A_n\setminus A_{n-1}\quad(n\geq2).
$$

이들은 서로소이고 $$A_n=\bigcup_{k=1}^nD_k$$, $$A=\bigcup_{k=1}^{\infty}D_k$$이므로

$$
P(A_n)=\sum_{k=1}^nP(D_k)
\longrightarrow\sum_{k=1}^{\infty}P(D_k)=P(A).
$$

무한합으로 넘어가는 근거는 countable additivity이다.

감소하는 경우에는 $$A_n^c\nearrow A^c$$에 방금 얻은 결과를 적용한다. 그러면 $$P(A_n^c)\to P(A^c)$$이고,

$$
P(A_n)=1-P(A_n^c)\longrightarrow1-P(A^c)=P(A)
$$

이다. 각각의 monotonicity도 집합의 포함관계에서 따라온다.

</div>

해석학에서 Lebesgue measure $$m$$에 대해 만나는 대응 명제는 다음과 같다.

<div class="real-analysis-statement" markdown="1">

**Corollary 3.3: measure의 연속성.**

measurable set의 열 $$E_n$$에 대해 $$E_n\nearrow E$$이면 $$m(E_n)\to m(E)$$이다. $$E_n\searrow E$$인 경우에는 어떤 $$k$$에 대해 $$m(E_k)<\infty$$라는 조건 아래 $$m(E_n)\to m(E)$$이다.

</div>

확률에서는 왜 감소하는 경우에 유한성 조건을 따로 쓰지 않을까? 모든 사건에 대해 $$P(A_n)\leq P(\Omega)=1$$이므로 이미 만족되기 때문이다. countable additivity에서 위 증명을 직접 다시 만들어 보는 것이 좋은 연습이다. 먼저 스스로 시도하고, 막히면 교재의 장 끝에 있는 해답과 비교해 보자.

#### Borel--Cantelli: 합이 유한하면 무한히 자주 일어나지 않는다

<span id="l1:t10"></span>

다음 lemma는 확률들의 합에 관한 정보를 almost sure 성립에 관한 정보로 바꾸어 준다. 먼저 사건열 $$A_1,A_2,\ldots$$에 대해

$$
B_n=\bigcup_{k\geq n}A_k
$$

로 두자. $$B_n$$은 $$n$$번째 이후의 사건 중 *적어도 하나*가 일어나는 사건이다. $$n$$이 커지면 합칠 사건이 줄어드므로 $$B_{n+1}\subset B_n$$이다.

그렇다면 모든 $$B_n$$에 속한다는 말은 무엇인가? 어느 $$n$$을 정하더라도 그 이후에 일어나는 $$A_k$$가 하나는 있다는 뜻이다. 이것은 $$A_k$$가 무한히 많이 일어난다는 뜻과 같다. 따라서

$$
\limsup_{k\to\infty}A_k
=\bigcap_{n=1}^{\infty}\bigcup_{k\geq n}A_k
=\{\omega:\omega\in A_k\text{인 }k\text{가 무한히 많음}\}.
$$

countable union과 countable intersection으로 만들었으므로 이 집합도 사건이다.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.1: Borel--Cantelli.**

사건열 $$A_n\in\mathcal F$$가

$$
\sum_{n=1}^{\infty}P(A_n)<\infty
$$

를 만족하면

$$
P\left(\bigcap_{n=1}^{\infty}B_n\right)
=P\left(\limsup_{n\to\infty}A_n\right)=0.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

목표는 모든 꼬리 사건 $$B_n$$에 남는 결과들의 확률이 $$0$$임을 보이는 것이다. countable subadditivity로

$$
0\leq P(B_n)\leq\sum_{k\geq n}P(A_k).
$$

오른쪽은 수렴하는 음이 아닌 급수의 꼬리합이다. 전체 합이 유한하다는 가정 때문에 $$n\to\infty$$일 때 이 꼬리합이 $$0$$으로 간다. 따라서 $$P(B_n)\to0$$이다.

이제 $$B_n\searrow\bigcap_{n\geq1}B_n$$이고, 확률의 연속성에 의해

$$
P\left(\bigcap_{n\geq1}B_n\right)
=\lim_{n\to\infty}P(B_n)=0
$$

을 얻는다.

</div>

여기서 합의 첨자가 $$k\geq n$$이라는 점이 중요하다. 처음부터 $$n$$까지 더한 부분합이 아니라, $$n$$부터 끝까지 더한 꼬리합이 작아지는 것이다. 또 각 $$B_n$$의 확률이 곧바로 $$0$$이라는 말도 아니다. 그 확률들이 $$0$$으로 수렴하고, 모든 꼬리에 공통으로 남는 사건의 확률이 $$0$$이라는 결론이다.

almost surely $$A_n$$이 유한 번만 일어난다고 읽어도 같다. 다만 마지막으로 일어나는 시점은 결과 $$\omega$$마다 다를 수 있다. 이 lemma에는 사건들의 independence를 가정하지 않았다. 증명에서도 countable subadditivity와 확률의 연속성만 사용했다.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.6.16: Lebesgue measure에서의 Borel--Cantelli.**

<br>

$$\mathbb R^d$$의 measurable set의 열 $$E_k$$에 대하여 $$\sum_km(E_k)<\infty$$이면,

$$
E=\{x:x\in E_k\text{인 }k\text{가 무한히 많음}\}
=\limsup_{k\to\infty}E_k
$$

는 measurable set이고 $$m(E)=0$$이다.

</div>

집합의 꼬리합을 추정한다는 생각은 여기서도 같다. 확률론에서는 그 결론을 “almost surely 유한 번만 일어난다”는 언어로 읽는 것이다. 증명은 짧지만 이후에도 반복해서 사용할 중요한 연결이다. 여기까지 집합과 확률의 관계가 정리되었다면, 이제 그 공간 위에서 무엇을 관측할지 생각해 보자.

### 1.2 random variable

#### 관측값을 함수로 나타내기

<span id="l1:t11"></span>

가능한 결과가 $$\omega$$로 주어졌을 때, 우리가 관심을 갖는 수치를 $$\xi(\omega)$$로 나타내자. 그러면 관측량은 함수

$$
\xi:\Omega\longrightarrow\mathbb R
$$

가 된다. 이 강의에서는 주로 실수값을 갖는 함수를 다룬다. 함수 $$\xi$$ 자체와 그 함수가 한 결과에서 갖는 실현값 $$\xi(\omega)$$를 구별해 두자.

이제 관측값이 어떤 Borel set $$B\subset\mathbb R$$에 속할 확률을 묻고 싶다. 하지만 $$P$$는 $$\Omega$$의 사건에만 적용할 수 있다. 그래서 관측값에 관한 질문을 원래 공간의 사건으로 되돌려야 한다.

<div class="real-analysis-statement" markdown="1">

**Definition 1.3: measurable function과 random variable.**

함수 $$\xi:\Omega\to\mathbb R$$가 모든 $$B\in\mathcal B(\mathbb R)$$에 대해

$$
\{\xi\in B\}
\coloneq\{\omega\in\Omega:\xi(\omega)\in B\}
=\xi^{-1}(B)\in\mathcal F
$$

를 만족하면 **$$\mathcal F$$-measurable**이라고 한다. probability space $$(\Omega,\mathcal F,P)$$ 위의 이러한 함수를 **random variable**이라고 한다.

</div>

measurability가 있어야 $$P(\{\xi\in B\})$$가 정의된다. 따라서 measurability는 관측값에 관한 질문을 우리가 확률을 붙일 수 있는 사건으로 바꾸어 준다는 조건이다.

$$\xi^{-1}(B)$$는 역함숫값이 아니라 **역상**이다. $$\xi$$가 일대일일 필요도 없다. $$B$$ 안으로 보내지는 모든 결과 $$\omega$$를 모으는 연산이다. 예를 들어 $$\{\xi\leq x\}$$는 숫자들의 집합이 아니라, 관측값이 $$x$$ 이하인 결과들을 모은 $$\Omega$$의 부분집합이다.

연속함수의 정의와도 비교해 볼 수 있다. 연속성에서는 공역의 열린집합의 역상이 열린집합인지 확인한다. 여기서는 공역의 Borel set의 역상이 지정된 sigma-field에 들어가는지를 확인한다. 조건은 다르지만, 공역의 집합을 역상으로 가져와 함수를 조사한다는 생각은 같다. 실수값 함수의 measurability를 $$\{\xi<a\}$$ 같은 집합들로 검사하는 해석학의 정의도 이 관점과 연결된다.

#### random variable을 관측하면 어떤 정보를 얻게 될까?

<span id="l1:t12"></span>

random variable $$\xi$$가 주어졌다는 것은 이미 $$(\Omega,\mathcal F,P)$$가 있다는 뜻이다. 그런데 그 random variable 하나를 관측해서 얻는 정보가 $$\mathcal F$$ 전체와 같을 필요는 없다. 첫 번째 동전만 보았을 때 전체 결과를 알 수 없었던 예를 떠올려 보자.

<div class="real-analysis-statement" markdown="1">

**Definition 1.4: random variable이 생성하는 sigma-field.**

$$
\sigma(\xi)=\{\{\xi\in B\}:B\in\mathcal B(\mathbb R)\}
$$

를 $$\xi$$가 생성하는 sigma-field라고 한다.

</div>

여기서는 실수의 Borel set들을 모으는 것이 아니라, 그 집합들의 *역상*을 모으고 있다. 그래서 $$\sigma(\xi)$$는 $$\Omega$$ 위의 집합들의 모임이다. $$\xi$$의 measurability 때문에 $$\sigma(\xi)\subset\mathcal F$$이다.

이 집합들의 모임이 정말 sigma-field인지 확인해 보자. $$\xi^{-1}(\varnothing)=\varnothing$$이고,

$$
\Omega\setminus\xi^{-1}(B)=\xi^{-1}(\mathbb R\setminus B),
\qquad
\bigcup_n\xi^{-1}(B_n)=\xi^{-1}\left(\bigcup_n B_n\right).
$$

Borel set들이 여집합과 countable union에 대해 닫혀 있으므로 역상들의 모임도 같은 성질을 가진다. 또 $$\xi$$를 measurable하게 만드는 어떤 sigma-field라도 이 역상들을 모두 포함해야 한다. 따라서 $$\sigma(\xi)$$는 $$\xi$$를 measurable하게 만드는 가장 작은 sigma-field이다.

정보의 관점에서는 $$\sigma(\xi)$$를 “$$\xi$$를 관측해서 알 수 있는 모든 사건”으로 해석한다. 함수값이 어느 $$B$$에 들어갔는지를 알면 $$\{\xi\in B\}$$가 일어났는지를 알 수 있기 때문이다.

<div class="real-analysis-statement" markdown="1">

**Definition 1.5: 여러 random variable이 생성하는 sigma-field.**

같은 probability space 위의 random variable들의 모임 $$\{\xi_i:i\in\mathcal I\}$$에 대하여

$$
\sigma(\xi_i:i\in\mathcal I)
$$

는 모든 $$i\in\mathcal I$$와 모든 $$B\in\mathcal B(\mathbb R)$$에 대한 사건 $$\{\xi_i\in B\}$$를 포함하는 가장 작은 sigma-field이다. 첨자집합 $$\mathcal I$$는 유한할 수도, countably infinite일 수도, uncountable일 수도 있다.

</div>

여러 관측을 함께 사용하면 각 관측에 관한 질문들을 함께 다룰 수 있어야 한다. 이 경우에는 각 random variable의 역상들을 단순히 모은 집합들의 모임이 이미 sigma-field라고 가정하지 않는다. 그 사건들을 모두 포함하면서 필요한 집합 연산에 닫히도록 만든 가장 작은 sigma-field를 취한다.

#### 관측한 값으로 만든 함수와 Doob--Dynkin lemma

<span id="l1:t13"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.3.**

$$f:\mathbb R\to\mathbb R$$가 Borel measurable function이면 $$f(\xi)$$는 $$\sigma(\xi)$$-measurable이다.

</div>

여기서 $$f$$가 Borel measurable이라는 말은 모든 Borel set $$B$$에 대해 $$f^{-1}(B)$$도 Borel set이라는 뜻이다. $$f(\xi)$$는 $$f\circ\xi$$를 줄여 쓴 것이며, $$\omega$$에서의 값은 $$f(\xi(\omega))$$이다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

Borel set $$B$$를 하나 잡으면

$$
\{f(\xi)\in B\}
=\{\xi\in f^{-1}(B)\}
=\xi^{-1}(f^{-1}(B)).
$$

$$f^{-1}(B)$$가 Borel set이므로 마지막 집합은 $$\sigma(\xi)$$에 속한다. 이것이 필요한 measurability이다.

</div>

역상을 두 번 취하면 되는 짧은 증명이다. 정보의 언어로 읽으면, $$\xi$$의 값을 알고 있을 때 그 값에 정해진 함수 $$f$$를 적용한 결과도 알 수 있다는 뜻이다.

놀랍게도 그 역도 성립한다.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2: Doob--Dynkin.**

실수값 함수 $$\eta$$가 $$\sigma(\xi)$$-measurable이면 어떤 Borel function $$f:\mathbb R\to\mathbb R$$가 존재하여

$$
\eta=f(\xi)
$$

가 성립한다.

</div>

확률론에 큰 공헌을 한 Doob와 Dynkin의 이름을 딴 lemma이다. 앞의 연습문제에서는 $$\xi$$와 $$f$$가 이미 주어져 있었다. 여기서는 $$\xi$$와 $$\eta$$만 주어져 있고, $$\eta$$가 $$\xi$$의 정보로 measurable이라는 사실에서 함수 $$f$$의 존재를 얻는다. 즉, $$\xi$$를 관측해 알 수 있는 실수값 함수는 실제로 $$\xi$$의 값에 어떤 Borel function을 적용한 형태로 표현된다.

어려운 점은 그 $$f$$를 구성하는 것이다. 지금은 그 구성의 증명까지 들어가지 않고 명제를 사용하자. 이 명제는 주어진 $$\sigma(\xi)$$에 대한 measurability를 가정한 함수의 표현이며, 위 등식은 함수의 등식으로 제시되어 있다. 단순히 두 함수의 평균이나 distribution이 같다는 뜻은 아니다.

#### sample space에서 실수축으로: distribution과 distribution function

<span id="l1:t14"></span>

지금까지는 random variable이 어떤 sigma-field를 만드는지 보았다. 이번에는 random variable이 새로운 probability measure를 만든다는 것을 보자. 이름이 비슷해도 생성하는 대상이 다르다.

<div class="real-analysis-statement" markdown="1">

**Definition 1.6: distribution과 distribution function.**

random variable $$\xi$$의 **distribution**은

$$
P_\xi(B)=P(\{\xi\in B\}),\qquad B\in\mathcal B(\mathbb R)
$$

로 정의되는 $$\mathbb R$$ 위의 probability measure이다. **distribution function**은

$$
F_\xi:\mathbb R\longrightarrow[0,1],\qquad
F_\xi(x)=P_\xi((-\infty,x])=P(\xi\leq x)
$$

이다. distribution function은 cumulative distribution function이라고도 부른다.

</div>

원래 $$P$$는 $$\Omega$$의 사건을 입력받지만, $$P_\xi$$는 실수의 Borel set을 입력받는다. 그 집합을 $$\xi$$의 역상으로 가져와 원래 확률 $$P$$를 적용하는 것이다. 그래서 관측값에 관한 확률을 계산할 때는 복잡할 수 있는 sample space를 잠시 뒤로 두고 익숙한 실수축 위에서 일할 수 있다.

이것이 probability measure라는 사실도 정의와 연결해 볼 수 있다. $$P_\xi(\mathbb R)=P(\Omega)=1$$이고, 서로소인 Borel set들의 역상도 서로소이므로 원래 $$P$$의 countable additivity가 $$P_\xi$$에 그대로 전달된다.

대상들을 나란히 놓아 보면 차이가 분명하다.

$$
\begin{array}{c|c|c}
\text{대상}&\text{입력}&\text{출력}\\ \hline
\xi&\omega\in\Omega&\xi(\omega)\in\mathbb R\\
P&A\in\mathcal F&P(A)\in[0,1]\\
P_\xi&B\in\mathcal B(\mathbb R)&P(\xi\in B)\in[0,1]\\
F_\xi&x\in\mathbb R&P(\xi\leq x)\in[0,1]
\end{array}
$$

특히 distribution은 *집합*에 확률을 주는 measure이고, distribution function은 *실수* $$x$$까지 쌓인 확률을 주는 함수이다. $$x$$는 여기서 누적할 범위를 정하는 문턱값이며, random variable $$\xi$$ 자체와도 다르다.

#### distribution function은 왜 오른쪽에서 연속일까?

<span id="l1:t15"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.4.**

distribution function $$F_\xi$$는 감소하지 않고 오른쪽에서 연속이며,

$$
\lim_{x\to-\infty}F_\xi(x)=0,
\qquad
\lim_{x\to\infty}F_\xi(x)=1
$$

을 만족한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 $$x\leq y$$이면 $$\{\xi\leq x\}\subset\{\xi\leq y\}$$이므로 확률의 monotonicity에 의해 $$F_\xi(x)\leq F_\xi(y)$$이다. 문턱값을 오른쪽으로 옮기면 더 많은 관측값을 포함하므로 누적확률은 줄어들지 않는다.

오른쪽 연속성을 보이려면 $$x_n\searrow x$$를 잡는다. 실수축에서 $$x_n$$이 $$x$$의 오른쪽에서 내려오는 모습을 생각해 보자. 그러면

$$
\{\xi\leq x_n\}\searrow\{\xi\leq x\}.
$$

실제로 $$\xi(\omega)\leq x$$이면 모든 $$x_n$$ 이하이다. 반대로 $$\xi(\omega)>x$$이면 충분히 큰 $$n$$에서는 $$x_n<\xi(\omega)$$가 되어 그 사건에서 빠진다. 따라서 교집합은 정확히 $$\{\xi\leq x\}$$이다. 이제 감소하는 사건열에 대한 확률의 연속성을 쓰면

$$
F_\xi(x_n)=P(\xi\leq x_n)\longrightarrow P(\xi\leq x)=F_\xi(x)
$$

이다.

마지막으로 $$\xi$$는 유한한 실수값을 갖는 함수이므로, 각각의 $$\omega$$에 대해 $$\xi(\omega)$$는 충분히 큰 양의 정수보다 작고, 충분히 작은 음의 정수보다는 크다. 따라서

$$
\{\xi\leq-n\}\searrow\varnothing,
\qquad
\{\xi\leq n\}\nearrow\Omega.
$$

확률의 연속성에 의해 $$F_\xi(-n)\to0$$, $$F_\xi(n)\to1$$이다. $$F_\xi$$의 monotonicity를 함께 쓰면 정수열뿐 아니라 실수 $$x\to\pm\infty$$에 대해서도 원하는 극한을 얻는다.

</div>

여기서 얻은 것은 오른쪽 연속성이다. 모든 distribution function이 양쪽에서 연속이라는 결론은 아니다. 잠시 뒤 discrete distribution에서는 함수가 뛰는 모습을 만나게 된다. 오늘 정의가 많으므로, random variable에서 distribution으로, distribution에서 distribution function으로 넘어오는 관계를 한 번 정리하고 다음 정의를 보자.

#### density로 적분하는 distribution과 point probability를 더하는 distribution

<span id="l1:t16"></span>

같은 distribution을 law라고 부르기도 한다. 따라서 두 표현은 여기서 같은 대상을 가리킨다. 이제 계산에서 자주 만나는 두 경우를 보자. 하나는 density를 적분하는 경우이고, 다른 하나는 discrete distribution에서 각 값의 확률을 더하는 경우이다.

<div class="real-analysis-statement" markdown="1">

**Definition 1.7: absolutely continuous distribution과 discrete distribution.**

음이 아닌 Borel function $$f_\xi:\mathbb R\to[0,\infty)$$가 존재하여 모든 Borel set $$B$$에 대해

$$
P_\xi(B)=P(\xi\in B)=\int_B f_\xi(x)\,dx
$$

를 만족하면 $$\xi$$의 distribution이 **absolutely continuous**하다고 한다. $$f_\xi$$를 **probability density function**이라고 한다. 여기서 $$dx$$는 실수축의 Lebesgue measure에 대한 적분을 뜻한다.

서로 다른 값들의 집합 $$\{x_i:i\in\mathcal I\}$$가 유한하거나 countably infinite이고, 모든 Borel set $$B$$에 대해

$$
P(\xi\in B)=\sum_{i:x_i\in B}P(\xi=x_i)
$$

이면 $$\xi$$의 distribution을 **discrete distribution**이라고 한다.

</div>

density가 있으면 $$B=\mathbb R$$를 대입하여

$$
\int_{\mathbb R}f_\xi(x)\,dx=1
$$

을 얻는다. discrete distribution에서는 마찬가지로

$$
\sum_{i\in\mathcal I}P(\xi=x_i)=1
$$

이므로 이 값들이 전체 확률을 담고 있다. discrete라고 해서 가능한 값이 유한 개일 필요는 없다. $$x_1,x_2,\ldots$$처럼 나열할 수 있는 무한한 경우도 허용한다.

두 모형은 확률을 계산하는 방식이 다르다. absolutely continuous인 경우에는 density를 적분하고, discrete인 경우에는 해당하는 점들의 확률을 더한다. 이들은 대표적인 두 경우이며, 여기서 모든 distribution이 반드시 둘 중 하나라고 가정하는 것은 아니다.

특히 density와 distribution function을 구별하자. density가 있을 때는

$$
F_\xi(x)=\int_{-\infty}^{x}f_\xi(t)\,dt.
$$

작은 $$f_\xi$$를 왼쪽부터 $$x$$까지 적분한 것이 큰 $$F_\xi$$이다. density의 한 점에서의 높이 $$f_\xi(x)$$를 그 점이 나올 확률 $$P(\xi=x)$$로 읽어서는 안 된다. density로 표현되는 distribution에서는 한 점 위의 적분이 $$0$$이므로 point probability는 $$0$$이다.

#### density의 연속성이라는 추가 조건과 distribution function의 점프

<span id="l1:t17"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.5 and 1.6.**

density $$f_\xi$$가 연속이면 모든 $$x\in\mathbb R$$에서

$$
F_\xi'(x)=f_\xi(x)
$$

이다. discrete distribution의 경우에는 각 $$x_i$$에서 distribution function의 점프 크기가

$$
F_\xi(x_i)-F_\xi(x_i-)=P(\xi=x_i)
$$

이다. 여기서 $$F_\xi(x_i-)=\lim_{t\uparrow x_i}F_\xi(t)$$는 왼쪽 극한이다.

</div>

첫 문장에 붙은 추가 조건을 꼭 보자. absolutely continuous distribution의 정의는 density가 Borel measurable이고 음이 아니며 확률을 적분으로 표현한다는 조건이지, density가 연속이라는 조건이 아니다. density가 연속일 때는 해석학에서 배운 적분과 미분의 관계를 이용하여 위 등식을 모든 점에서 말할 수 있다. 그 추가 조건을 빼고 모든 점에서의 미분 등식을 그대로 주장할 수는 없다.

discrete distribution에서는 $$x_i$$ 직전까지 누적한 확률에 $$\xi=x_i$$인 사건의 확률이 더해진다. 그만큼 distribution function이 뛰는 것이다. 질량 $$P(\xi=x_i)$$가 양수인 곳에서는 실제로 점프가 생긴다. distribution function의 값 $$F_\xi(x_i)$$에는 바로 그 점의 확률까지 포함되어 있으므로, 이러한 점프는 앞에서 증명한 오른쪽 연속성과 모순되지 않는다.

두 성질의 증명은 여기서 길게 전개하지는 않는다. 지금 기억할 것은, density가 연속인 경우 distribution function을 미분하면 density를 얻고, discrete distribution에서는 distribution function의 점프가 point probability를 나타낸다는 관계이다. 이후의 정의로 넘어가기 전에 오늘 등장한 대상들의 역할을 충분히 익혀 두자.

{% endraw %}

<!-- prettier-ignore-end -->

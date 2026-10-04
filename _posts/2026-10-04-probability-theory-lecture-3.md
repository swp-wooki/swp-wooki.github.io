---
layout: post
title: "Probability Theory 3: Independence and Conditional Expectation"
date: 2026-10-04 12:03:00 +0900
description: "Sigma-field의 독립성과 사건 및 이산 확률변수에 대한 conditional expectation을 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 3)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_3.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

#### independence를 다시 확인하고 정보 전체로 넓히기

<span id="l3:t01"></span>

두 사건의 independence는 $$P(A\cap B)=P(A)P(B)$$라는 등식이었다. 두 random variable의 independence는 모든 Borel set $$C,D$$에 대해

$$
P(\xi\in C,\eta\in D)=P(\xi\in C)P(\eta\in D)
$$

가 성립한다는 뜻이었다. 모임이 커지면 모든 유한 부분모임에 대해 대응하는 조건을 확인한다.

곱의 expectation을 분리하는 명제에서는 integrability도 함께 보아야 한다. 각 변수와 곱이 integrable하다는 조건 아래 independence가 있으면

$$
E(\xi_1\cdots\xi_n)=\prod_iE(\xi_i)
$$

이다. 특히 두 $$L^2$$ 변수 $$\xi,\eta$$가 $$E(\xi\eta)=E(\xi)E(\eta)$$를 만족하면 두 변수가 uncorrelated라고 한다. independent이면 이 등식이 성립하지만, 등식 하나가 성립한다고 independence까지 얻는 것은 아니다. uncorrelated라는 조건은 expectation의 등식 하나를 확인한다. 반면 independence는 모든 Borel set을 선택해서 만든 사건들의 확률을 확인한다. 두 조건이 요구하는 정보의 양이 다르다.

오늘은 independence를 sigma-field로 넓힌 뒤, 새 정보를 얻었을 때 평균을 어떻게 바꾸는지 살펴보자.

#### sigma-field들의 independence

<span id="l3:t02"></span>

사건 하나와 사건 하나를 비교하는 대신 정보의 묶음 전체를 비교하고 싶을 때가 있다. sigma-field의 independence는 두 정보 묶음에서 사건을 어떻게 하나씩 꺼내도 independent라는 조건이다.

<div class="real-analysis-statement" markdown="1">

**Definition (sigma-field의 independence).**

$$\mathcal G,\mathcal H\subset\mathcal F$$가 sigma-field라 하자. 모든 $$A\in\mathcal G$$, $$B\in\mathcal H$$에 대해

$$
P(A\cap B)=P(A)P(B)
$$

이면 $$\mathcal G$$와 $$\mathcal H$$가 independent라고 한다.

$$\mathcal G_1,\ldots,\mathcal G_n$$이 independent라는 것은 $$A_i\in\mathcal G_i$$를 어떻게 선택해도 사건들의 모임 $$A_1,\ldots,A_n$$이 independent라는 뜻이다. 무한 모임의 independence는 모든 유한 부분모임의 independence로 정의한다.

</div>

$$\mathcal G,\mathcal H$$는 $$\mathcal F$$의 원소인 사건들이 아니라, $$\mathcal F$$에 포함되는 작은 sigma-field들이다. 사건끼리의 independence를 이렇게 집합들의 모임 전체의 조건으로 확장했다.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.12.**

random variable $$\xi,\eta$$가 independent일 필요충분조건은 $$\sigma(\xi)$$와 $$\sigma(\eta)$$가 independent인 것이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

생성 sigma-field의 정의에 따라 모든 $$A\in\sigma(\xi)$$, $$B\in\sigma(\eta)$$는 각각

$$
A=\{\xi\in C\},\qquad B=\{\eta\in D\}
$$

로 쓸 수 있다. 여기서 $$C,D$$는 Borel set이며 같을 필요가 없다. 따라서 두 sigma-field의 independence에서 확인할 등식은

$$
P(\xi\in C,\eta\in D)=P(\xi\in C)P(\eta\in D)
$$

와 정확히 같다. 이것이 모든 $$C,D$$에 대해 성립한다는 것이 두 random variable의 independence이므로 양방향을 모두 얻는다.

</div>

#### random variable과 이미 주어진 정보의 independence

<span id="l3:t03"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (random variable과 sigma-field의 independence).**

random variable $$\xi$$가 sigma-field $$\mathcal G$$와 independent라는 것은 $$\sigma(\xi)$$와 $$\mathcal G$$가 independent라는 뜻이다. random variable과 sigma-field가 함께 주어진 경우에도 같은 원리를 쓴다. 각 random variable을 그 변수가 생성하는 sigma-field로 바꾼 뒤, 이렇게 얻은 sigma-field들이 independent인지 확인한다.

</div>

정의를 새로 외우기보다, random variable에서 그 변수를 관측해 얻는 정보 $$\sigma(\xi)$$를 만든 뒤 비교한다고 생각해 보자. 그러면 서로 종류가 달라 보이던 대상들을 모두 sigma-field의 수준에서 다룰 수 있다. 여기까지가 이후 논의에 필요한 1장의 기본 언어이다.

## 2. conditional expectation

### 2.1 사건을 조건으로 하는 경우

<span id="l3:t04"></span>

새 정보가 들어오면 예측도 바뀐다. 앞으로 stochastic process를 다룰 때에는 시간이 지나면서 관측 정보가 쌓이고, 그 정보에 따라 평균적인 예측을 갱신하게 된다. conditional expectation은 바로 이런 일을 표현하는 언어이다.

정의를 한 번에 가장 일반적인 형태로 쓰기보다, 계산할 수 있는 경우에서 출발하자. 먼저 사건을 조건으로 평균을 구하고, 그다음 discrete random variable, 일반 random variable, 마지막으로 sigma-field 자체를 조건으로 주는 경우로 넓혀 간다.

<div class="real-analysis-statement" markdown="1">

**Definition (사건에 대한 conditional expectation).**

$$\xi\in L^1$$이고 $$B\in\mathcal F$$, $$P(B)>0$$일 때

$$
E(\xi\mid B)=\frac{1}{P(B)}\int_B\xi\,dP
$$

를 사건 $$B$$가 주어졌을 때 $$\xi$$의 conditional expectation이라고 한다.

</div>

$$B$$가 일어났다고 알았으므로 전체 $$\Omega$$가 아니라 $$B$$에서 평균을 낸다. 다만 원래 확률로 적분한 값을 $$P(B)$$로 나누어, 현재 고려하는 사건 안에서의 평균으로 정규화한다. $$\int_B\vert \xi\vert \,dP\leq E(\vert \xi\vert )<\infty$$이고 분모가 양수이므로 유한한 값이다.

$$P(B)=0$$을 제외하는 이유는 이 비율을 정의할 수 없기 때문이다. 확률이 $$0$$인 사건은 아예 일어날 수 없다는 뜻으로 해석해서는 안 된다.

또 결과의 종류를 확인하자. 적분한 뒤 확률로 나누었으므로 $$E(\xi\mid B)$$는 **실수**이다. 잠시 뒤 random variable을 조건으로 하면 결과도 random variable이 된다. 같은 expectation 기호를 쓰더라도 무엇이 조건으로 들어가는지 보아야 한다.

#### 세 동전의 합을 알고 싶은 경우

<span id="l3:t05"></span>

<div class="real-analysis-statement" markdown="1">

**Example 2.1.**

10p, 20p, 50p의 공정한 동전 세 개를 서로 independent하게 던진다. 앞면인 동전들의 금액 합을 $$\xi$$라 하고, 정확히 두 동전이 앞면인 사건을 $$B$$라 하자. 결과의 순서는 10p, 20p, 50p이다.

$$
B=\{HHT,HTH,THH\}.
$$

공정성과 independence 때문에 여덟 결과의 확률은 각각 $$1/8$$이다. 따라서 $$P(B)=3/8$$이고,

$$
\begin{array}{c|ccc}
\omega&HHT&HTH&THH\\\hline
\xi(\omega)&30&60&70
\end{array}
$$

이다. 예를 들어 $$HTH$$에서는 $$10+0+50=60$$이다. 그러므로

$$
E(\xi\mid B)
=\frac{30/8+60/8+70/8}{3/8}
=\frac{160}{3}.
$$

</div>

계산에서 $$3/8$$을 곱하는 것이 아니라 나눈다는 점에 주의하자. 원래 확률로 계산한 합을 $$B$$ 안에서의 평균으로 바꾸는 것이다. 조건을 알게 된 뒤에는 세 결과의 conditional probability가 각각 $$1/3$$이므로 $$(30+60+70)/3$$으로 보아도 같다.

<div class="real-analysis-statement" markdown="1">

**Exercise 2.1.**

$$
E(\xi\mid\Omega)=E(\xi).
$$

</div>

전체 sample space에 속했다는 것은 새로운 정보를 주지 않는다. 실제로

$$
E(\xi\mid\Omega)=\frac{1}{P(\Omega)}\int_\Omega\xi\,dP
=\int_\Omega\xi\,dP=E(\xi)
$$

이다.

<div class="real-analysis-statement" markdown="1">

**Exercise 2.2.**

$$A,B\in\mathcal F$$, $$P(B)>0$$이면

$$
E(\mathbb1_A\mid B)=P(A\mid B).
$$

</div>

indicator function을 $$B$$에서 적분하면 $$A\cap B$$의 확률이므로

$$
E(\mathbb1_A\mid B)
=\frac{\int_B\mathbb1_A\,dP}{P(B)}
=\frac{P(A\cap B)}{P(B)}.
$$

따라서 conditional probability는 indicator function의 conditional expectation이라는 특수한 경우이다. 새로운 정의가 이전 정의를 포함한다는 점을 확인한 셈이다.

### 2.2 discrete random variable을 조건으로 하는 경우

#### 여러 사건별 평균을 하나의 함수로 모으기

<span id="l3:t06"></span>

이번에는 사건 $$B$$ 하나 대신 다른 random variable $$\eta$$를 관측한다고 하자. $$\eta$$가 어떤 값을 나타내는지에 따라 알게 되는 사건이 달라진다. 한 사건의 평균을 미리 고정하는 대신, 관측값마다 사용할 평균을 정해 두어야 한다. 그래서 $$E(\xi\mid\eta)$$는 하나의 숫자가 아니라 관측에 따라 값이 달라지는 **random variable**로 정의한다.

<div class="real-analysis-statement" markdown="1">

**Definition (discrete random variable에 대한 conditional expectation).**

$$\xi\in L^1$$이고 $$\eta$$가 discrete distribution을 갖는다고 하자. 양의 확률을 갖는 서로 다른 값들의 집합은 유한하거나 countably infinite이다. 이 값들을 $$y_n$$으로 나열하고

$$
A_n=\{\eta=y_n\},\qquad
c_n=E(\xi\mid A_n)=\frac{\int_{A_n}\xi\,dP}{P(A_n)}
$$

로 둔다. $$\eta(\omega)=y_n$$일 때

$$
E(\xi\mid\eta)(\omega)=c_n
$$

으로 정의한다. 동등하게

$$
E(\xi\mid\eta)=\sum_n c_n\mathbb1_{A_n}.
$$

양의 확률을 갖는 값들 밖의 사건 $$N=\{\eta\notin\{y_n:n\geq1\}\}$$은 확률이 $$0$$이며, 이 식은 그 위의 값을 $$0$$으로 정한 형태이다. 가능한 값이 유한하면 합도 그 유한한 범위에서 취한다.

</div>

먼저 $$\omega$$를 하나 정하고, $$\eta(\omega)$$를 계산하고, 그 관측값의 사건 $$A_n$$에서 평균을 구하는 순서이다. $$\eta(\omega)=y_n$$이면 $$\omega$$를 대입한 합에서 $$n$$번째 indicator function만 $$1$$이고 나머지는 $$0$$이다. 따라서 합의 표현과 사건별 정의가 같다.

여러 결과 $$\omega$$가 같은 관측값을 낼 수 있다. 그 결과들은 모두 같은 사건 $$A_n$$에 들어가므로 conditional expectation도 같은 값 $$c_n$$을 받는다. 관측으로 구별할 수 없는 결과들에 대해 다른 값을 주지 않는 것이다.

$$E(\xi\mid\{\eta=y_n\})$$는 특정 사건에서 계산한 실수이고, $$E(\xi\mid\eta)$$는 그런 실수들을 관측에 맞추어 배치한 함수이다. 확률 $$0$$인 사건으로 나누어 계산하는 일은 하지 않았다.

#### 두 동전의 금액만 관측하면 무엇이 남을까?

<span id="l3:t07"></span>

<div class="real-analysis-statement" markdown="1">

**Example 2.2.**

앞의 independent이고 공정한 세 동전으로 돌아가자. $$\xi$$는 앞면인 동전들의 전체 금액이고, $$\eta$$는 10p와 20p 동전에서 온 금액만 센다. 따라서

$$
\eta\in\{0,10,20,30\}.
$$

두 작은 동전이 모두 뒷면이면 $$0$$, 10p만 앞면이면 $$10$$, 20p만 앞면이면 $$20$$, 둘 다 앞면이면 $$30$$이다.

먼저 $$\eta=0$$을 관측했다고 하자. 첫 두 동전은 뒷면이고, 마지막 동전만 모른다. 가능한 결과는 $$TTH$$와 $$TTT$$이며, 각각 $$\xi=50$$과 $$\xi=0$$이다. 두 결과의 원래 확률은 각각 $$1/8$$이므로

$$
E(\xi\mid\{\eta=0\})
=\frac{50/8+0/8}{1/4}=25.
$$

같은 계산을 나머지 관측값에 적용하면

$$
\begin{array}{c|cccc}
\eta&0&10&20&30\\\hline
E(\xi\mid\eta)&25&35&45&55
\end{array}
$$

를 얻는다. 따라서 이 예에서

$$
E(\xi\mid\eta)=\eta+25.
$$

</div>

식의 의미를 먼저 예상할 수도 있다. $$\eta$$를 알면 두 작은 동전에서 온 금액은 이미 확정된다. 아직 모르는 부분은 50p 동전의 기여뿐이고, 그 평균은 $$50\cdot\tfrac12=25$$이다. independence 때문에 앞의 두 동전 정보를 얻어도 마지막 동전의 앞면 확률은 여전히 $$1/2$$이다. 그래서 관측한 금액에 $$25$$를 더한다. 표에서 보듯 conditional expectation의 값은 관측에 따라 달라진다.

#### 연속적인 함수를 거친 관측으로 평균내기

<span id="l3:t08"></span>

discrete인 것은 조건으로 주는 $$\eta$$이다. 평균내려는 $$\xi$$까지 discrete일 필요는 없다. 이를 단위구간의 예로 보자.

<div class="real-analysis-statement" markdown="1">

**Example 2.3.**

$$
\Omega=[0,1],\quad\mathcal F=\mathcal B([0,1]),\quad
P(A)=\operatorname{Leb}(A)
$$

로 두고 $$\xi(x)=2x^2$$라 하자. 관측량은

$$
\eta(x)=\begin{cases}
0,&0\leq x\leq\frac13,\\
1,&\frac13<x\leq\frac23,\\
2,&\frac23<x\leq1.
\end{cases}
$$

이다. $$\xi$$의 그래프는 이차함수이지만 $$\eta$$의 그래프는 각 삼등분 구간에서 일정한 세 층으로 이루어진다.

첫 구간의 점 $$x$$에서는 $$\eta(x)=0$$이므로

$$
E(\xi\mid\eta)(x)
=\frac{1}{1/3}\int_0^{1/3}2t^2\,dt
=3\cdot\frac23\left(\frac13\right)^3
=\frac{2}{27}.
$$

적분변수 $$t$$와 결과를 평가하는 점 $$x$$를 구별해 두자. $$x$$가 첫 구간 어디에 있든 적분하는 범위는 첫 구간 전체이다.

나머지도 각 구간에서 적분하고 길이 $$1/3$$으로 나눈다.

$$
3\int_{1/3}^{2/3}2t^2\,dt
=2\left[\left(\frac23\right)^3-\left(\frac13\right)^3\right]
=\frac{14}{27},
$$

$$
3\int_{2/3}^{1}2t^2\,dt
=2\left[1-\left(\frac23\right)^3\right]
=\frac{38}{27}.
$$

따라서

$$
E(\xi\mid\eta)(x)=\begin{cases}
\frac{2}{27},&0\leq x\leq\frac13,\\
\frac{14}{27},&\frac13<x\leq\frac23,\\
\frac{38}{27},&\frac23<x\leq1.
\end{cases}
$$

</div>

관측한 것은 $$x$$의 정확한 위치가 아니라 어느 삼등분 구간에 속하는지이다. 따라서 같은 구간 안에서는 다른 점들을 구별할 수 없고, 그 구간의 평균 하나를 준다. 동전 예에서는 합으로 계산했고 지금은 적분으로 계산했지만, 관측이 정하는 사건마다 평균을 낸다는 원리는 같다.

#### 상수 관측과 두 가지 값의 관측

<span id="l3:t09"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.3.**

$$\eta\equiv C$$가 상수이면 $$E(\xi\mid\eta)=E(\xi)$$이다.

</div>

유일한 비어 있지 않은 관측 사건은 $$\{\eta=C\}=\Omega$$이다. 그러므로

$$
E(\xi\mid\eta)=E(\xi\mid\Omega)\mathbb1_\Omega=E(\xi).
$$

왼쪽은 random variable이고 오른쪽은 그 상숫값이다. 즉, 모든 결과에서 전체 평균을 반환하는 상수함수이다. 항상 같은 관측값이 나온다면 결과를 구별하는 정보가 없다는 해석과 일치한다.

<div class="real-analysis-statement" markdown="1">

**Exercise 2.4.**

$$A,B\in\mathcal F$$이고 $$0<P(B)<1$$이면

$$
E(\mathbb1_A\mid\mathbb1_B)
=P(A\mid B)\mathbb1_B+P(A\mid B^c)\mathbb1_{B^c}.
$$

</div>

상수 관측에서는 사건이 하나였는데, 여기서는 어떤 두 사건으로 나뉠까? $$\mathbb1_B=1$$이면 $$B$$이고 $$\mathbb1_B=0$$이면 $$B^c$$이다. 두 사건의 확률이 모두 양수이므로 각각에서 평균을 계산할 수 있다. 그리고 Exercise 2.2에 따라 그 평균들은 $$P(A\mid B)$$와 $$P(A\mid B^c)$$이다. 이것을 두 사건의 indicator function에 붙이면 위 식이 된다.

#### 계산식에서 공통 성질을 찾아내기

<span id="l3:t10"></span>

지금까지는 각 관측값에 맞춰 직접 함숫값을 정했다. 그런데 이렇게 만든 함수가 integrable한지, 그리고 원래 함수와 어떤 관계를 유지하는지는 아직 확인해야 한다. 다음 성질들이 일반적인 conditional expectation으로 넘어가는 출발점이 된다.

<div class="real-analysis-statement" markdown="1">

**Proposition 2.1.**

$$\xi\in L^1$$이고 $$\eta$$가 discrete distribution을 가지면 $$Z=E(\xi\mid\eta)$$는 integrable하며 다음을 만족한다.

<ol type="1" markdown="1">

<li markdown="1">

$$Z$$는 $$\sigma(\eta)$$-measurable이다.

</li>

<li markdown="1">

모든 $$A\in\sigma(\eta)$$에 대해

$$
\int_A Z\,dP=\int_A\xi\,dP.
$$

</li>

</ol>

</div>

첫째 조건은 단순한 $$\mathcal F$$-measurability보다 강하다. 전체 정보가 아니라 $$\eta$$를 관측해서 얻는 정보만으로 $$Z$$를 알 수 있다는 뜻이다. 둘째 조건은 그 정보로 식별할 수 있는 어떤 사건에서든 적분이 보존된다는 뜻이다. 함수 자체는 달라졌어도 관측 가능한 사건마다 합산한 값은 같게 유지된다.

#### measurability, integrability, 적분 보존을 각각 확인하기

<span id="l3:t11"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

정의에 사용한 기호를 다시 쓰자.

$$
A_n=\{\eta=y_n\},\qquad
c_n=\frac{\int_{A_n}\xi\,dP}{P(A_n)},\qquad
Z=\sum_n c_n\mathbb1_{A_n}.
$$

먼저 $$A_n$$은 $$\eta$$에 의한 Borel set $$\{y_n\}$$의 역상이므로 $$\sigma(\eta)$$에 속한다. 따라서 각 indicator function도 $$\sigma(\eta)$$-measurable이다. 유한 합은 measurable이고, 항들을 자연수로 나열하여 무한히 더하는 경우 부분합이 점별로 $$Z$$에 수렴하므로 그 극한도 measurable이다. 한 결과에서는 많아야 한 항만 남기 때문에 이 극한도 명확하다. $$N$$ 위에서는 모든 항이 $$0$$이다.

다음은 integrability이다. 서로소인 $$A_n$$들 위에서는

$$
|Z|=\sum_n|c_n|\mathbb1_{A_n}.
$$

음이 아닌 항들의 합이므로 monotone convergence로 적분과 합을 바꿀 수 있고,

$$
\begin{align*}
E(|Z|)
&=\sum_n|c_n|P(A_n)\\
&=\sum_n\left|\int_{A_n}\xi\,dP\right|\\
&\leq\sum_n\int_{A_n}|\xi|\,dP
=E(|\xi|)<\infty.
\end{align*}
$$

분모 $$P(A_n)$$가 약분된 뒤, 적분의 절댓값을 절댓값의 적분으로 추정했다. $$A_n$$들이 덮지 못하는 $$N$$은 확률이 $$0$$이어서 마지막 적분에 영향을 주지 않는다. $$\xi$$의 integrability가 $$Z$$의 integrability를 보장하는 지점이 여기이다.

마지막으로 임의의 $$A\in\sigma(\eta)$$를 잡는다. 어떤 Borel set $$D$$에 대해 $$A=\{\eta\in D\}$$이므로, $$N$$ 밖에서는

$$
A\setminus N=\bigcup_{n:y_n\in D}A_n.
$$

가능한 관측값 중 어느 것들을 허용하는지 고르면 그 관측값의 사건들을 합치는 것이다. $$\mathcal J=\{n:y_n\in D\}$$라 쓰면

$$
\begin{align*}
\int_A Z\,dP
&=\sum_{n\in\mathcal J}c_nP(A_n)\\
&=\sum_{n\in\mathcal J}\int_{A_n}\xi\,dP
=\int_A\xi\,dP.
\end{align*}
$$

이미 $$Z$$와 $$\xi$$가 absolutely integrable하므로 서로소 countable union에 대한 적분을 이처럼 나누어도 된다. $$A\cap N$$의 적분은 양쪽 모두 $$0$$이다. 가능한 값들이 모든 결과를 덮는 경우에는 $$N$$이 빈집합이어서 단순히 $$A=\bigcup_{n\in\mathcal J}A_n$$이다.

</div>

이제 사건 하나를 조건으로 하는 평균에서 출발해 discrete 관측 전체에 대한 함수까지 만들었다. 다음에는 $$\eta$$가 discrete이 아닐 때로 넘어간다. 그때도 관측 정보에 대한 measurability와 각 관측 가능한 사건에서의 적분 보존이라는 두 성질을 계속 보게 된다.

{% endraw %}

<!-- prettier-ignore-end -->

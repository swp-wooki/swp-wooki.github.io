---
layout: post
title: "Probability Theory 5: Conditioning on a Sigma-Field"
date: 2026-10-04 12:05:00 +0900
description: "Sigma-field에 대한 conditional expectation과 그 일반적인 성질을 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 5)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_5.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

### 2.4 sigma-field를 조건으로 하는 경우

<span id="l5:t01"></span>

지금까지는 사건이나 random variable 하나를 조건으로 주었다. 실제로는 여러 번의 측정으로 얻은 정보를 함께 사용하거나 지금까지의 관측 이력 전체를 사용하고 싶을 수 있다. 그런 정보의 묶음을 표현하는 것이 sigma-field이다.

앞의 정의를 다시 보면, 조건으로 쓴 $$\eta$$에서 실제로 사용한 것은 $$\sigma(\eta)$$였다. 후보 함수의 measurability를 판단할 때도, 적분을 비교할 사건을 고를 때도 이 sigma-field를 썼다. 그렇다면 이제 관측변수의 이름을 거치지 않고 정보 자체를 조건으로 주어도 되지 않을까?

<div class="real-analysis-statement" markdown="1">

**Proposition 2.2.**

$$\sigma(\eta)=\sigma(\eta')$$이면 모든 $$\xi\in L^1$$에 대해

$$
E(\xi\mid\eta)=E(\xi\mid\eta')\quad\text{a.s.}
$$

이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

두 conditional expectation을 $$Z,Z'$$라 하고 공통의 sigma-field를 $$\mathcal G$$라 쓰자. 둘은 integrable하고 $$\mathcal G$$-measurable이며, 모든 $$A\in\mathcal G$$에 대해

$$
\int_A(Z-Z')\,dP=\int_A\xi\,dP-\int_A\xi\,dP=0.
$$

Lemma 2.1에 의해 $$Z=Z'$$ a.s.이다.

</div>

관측값을 표현하는 방식이 달라도 생성하는 정보가 같으면 conditional expectation은 almost surely 같다. 이제 그 정보 자체를 정의에 넣자.

#### 주어진 정보에 대한 conditional expectation의 정의

<span id="l5:t02"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (sigma-field에 대한 conditional expectation).**

$$\xi\in L^1(\Omega,\mathcal F,P)$$이고 $$\mathcal G\subset\mathcal F$$가 sigma-field라 하자. integrable한 random variable $$Z$$가 다음 조건을 만족하면 $$E(\xi\mid\mathcal G)$$라고 쓴다.

<ol type="1" markdown="1">

<li markdown="1">

$$Z$$는 $$\mathcal G$$-measurable이다.

</li>

<li markdown="1">

모든 $$A\in\mathcal G$$에 대해

$$
\int_AZ\,dP=\int_A\xi\,dP.
$$

</li>

</ol>

</div>

앞의 $$\sigma(\eta)$$를 주어진 $$\mathcal G$$로 바꾼 것뿐이다. 첫째 조건은 현재 정보로 결과를 알 수 있어야 한다는 조건이고, 둘째 조건은 그 정보에 속하는 사건마다 적분이 보존되어야 한다는 조건이다.

<div class="real-analysis-statement" markdown="1">

**Remark: conditional probability와 이전 정의와의 일치.**

$$A\in\mathcal F$$에 대해

$$
P(A\mid\mathcal G)=E(\mathbb1_A\mid\mathcal G)
$$

로 정의한다. 또한

$$
E(\xi\mid\eta)=E(\xi\mid\sigma(\eta))\quad\text{a.s.}
$$

이다.

</div>

마지막 등식의 양변은 표기만 다르고 만족해야 하는 정의가 동일하다. 그래서 새 정의는 이전 정의와 일치하는 확장이다. conditional probability 역시 indicator function을 대입하는 같은 방식으로 확장되었다.

#### 존재정리와 almost sure 유일성

<span id="l5:t03"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.1: Radon--Nikodym theorem의 적용.**

sigma-field $$\mathcal G\subset\mathcal F$$와 $$\xi\in L^1$$에 대해, integrable하고 $$\mathcal G$$-measurable인 random variable $$\zeta$$가 존재하여

$$
\int_A\zeta\,dP=\int_A\xi\,dP
\qquad\text{모든 }A\in\mathcal G
$$

를 만족한다.

</div>

이것이 conditional expectation의 존재를 보장하는 결과이다. Radon--Nikodym theorem은 더 일반적인 measure에 관한 정리이지만, 여기서는 위의 형태로 사용하고 증명은 하지 않겠다.

일반적인 맥락을 잠깐 연결해 보자. 보통 measure는 음이 아닌 값을 주지만, signed measure는 음수도 허용한다. 지금 $$\mathcal G$$의 사건에 대해

$$
\nu(A)=\int_A\xi\,dP
$$

로 두면 $$\xi$$가 integrable하므로 유한 signed measure를 얻는다. 또 $$P(A)=0$$이면 $$\nu(A)=0$$이다. 이 성질을 $$\nu$$가 $$P$$에 대해 absolutely continuous하다고 한다. 이 상황에서 Radon--Nikodym theorem은 $$\nu$$를 $$\mathcal G$$-measurable인 함수의 적분으로 표현해 주며, 그 함수가 바로 위의 $$\zeta$$이다. 임의의 두 measure에 대해 아무 조건 없이 그런 표현이 존재한다는 말은 아니다.

<div class="real-analysis-statement" markdown="1">

**Proposition 2.3.**

모든 $$\xi\in L^1$$과 sigma-field $$\mathcal G\subset\mathcal F$$에 대해 $$E(\xi\mid\mathcal G)$$가 존재하고, a.s. 같다는 의미에서 유일하다.

</div>

존재는 방금 정리에서, 유일성은 두 후보의 차이에 Lemma 2.1을 적용하여 얻는다. 따라서 앞으로는 정의를 만족하는 후보 하나를 찾으면 그것이 conditional expectation의 한 대표라고 결론낼 수 있다.

#### 정보가 없을 때와 이미 값을 알 때

<span id="l5:t04"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.10.**

$$
E(\xi\mid\{\varnothing,\Omega\})=E(\xi)\quad\text{a.s.}
$$

</div>

가장 작은 sigma-field는 서로 다른 결과들을 구별하는 정보를 주지 않는다. 따라서 전체 평균이라는 상수가 나오는 것이 자연스럽다. 실제로 $$c=E(\xi)$$를 상수함수로 생각하면 integrable하고 $$\{\varnothing,\Omega\}$$-measurable이다. 시험할 사건은 둘뿐이며,

$$
\int_\varnothing c\,dP=0=\int_\varnothing\xi\,dP,
\qquad
\int_\Omega c\,dP=c=E(\xi)=\int_\Omega\xi\,dP.
$$

따라서 $$c$$가 정의를 만족한다. 오른쪽은 수치이지만 왼쪽의 random variable은 그 값을 갖는 상수함수라는 뜻이다.

<div class="real-analysis-statement" markdown="1">

**Exercise 2.11.**

$$\xi\in L^1$$이 $$\mathcal G$$-measurable이면

$$
E(\xi\mid\mathcal G)=\xi\quad\text{a.s.}
$$

이다.

</div>

이번에는 현재 정보로 $$\xi$$를 이미 알 수 있다. 후보를 $$\xi$$ 자체로 놓으면 integrability와 $$\mathcal G$$-measurability가 가정에 들어 있고, 모든 $$A\in\mathcal G$$에서

$$
\int_A\xi\,dP=\int_A\xi\,dP
$$

이므로 적분 조건도 만족한다. 정보를 전혀 주지 않는 경우의 상수 평균과, 이미 모든 필요한 정보를 주는 경우의 원래 변수를 비교해 보자.

#### conditional expectation을 다시 한 사건에서 평균내기

<span id="l5:t05"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.12.**

$$B\in\mathcal G$$이고 $$P(B)>0$$이면

$$
E\bigl(E(\xi\mid\mathcal G)\mid B\bigr)=E(\xi\mid B).
$$

</div>

먼저 $$\mathcal G$$로 조건을 준 결과는 random variable이므로 다시 $$B$$에서 평균낼 수 있다. 계산은

$$
E\bigl(E(\xi\mid\mathcal G)\mid B\bigr)
=\frac{1}{P(B)}\int_B E(\xi\mid\mathcal G)\,dP
=\frac{1}{P(B)}\int_B\xi\,dP
$$

이다. 두 번째 등식을 사용할 수 있는 이유는 $$B$$가 바로 $$\mathcal G$$의 사건이기 때문이다. 마지막 결과는 $$E(\xi\mid B)$$이다.

최종적으로 $$B$$에서 평균낸 수치는 처음부터 $$\xi$$를 그 사건에서 평균낸 것과 같다. 여기서 $$B$$는 sigma-field가 아니라 사건이고 최종 결과는 실수이다. sigma-field로 연달아 조건을 주는 경우는 다음의 tower property에서 정확히 다루자. 이런 반복 조건화는 뒤의 martingale과 stochastic process에서 자주 만나게 된다.

### 2.5 일반 성질

<span id="l5:t06"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.4.**

$$\xi,\zeta\in L^1$$, $$a,b\in\mathbb R$$이고 $$\mathcal H\subset\mathcal G\subset\mathcal F$$가 sigma-field들이라 하자.

<ol type="1" markdown="1">

<li markdown="1">

linearity:

$$
E(a\xi+b\zeta\mid\mathcal G)
=aE(\xi\mid\mathcal G)+bE(\zeta\mid\mathcal G)\quad\text{a.s.}
$$

</li>

<li markdown="1">

전체 expectation 보존:

$$
E(E(\xi\mid\mathcal G))=E(\xi).
$$

</li>

<li markdown="1">

$$\xi$$가 $$\mathcal G$$-measurable이고 $$\xi\zeta\in L^1$$이면

$$
E(\xi\zeta\mid\mathcal G)=\xi E(\zeta\mid\mathcal G)\quad\text{a.s.}
$$

</li>

<li markdown="1">

$$\xi$$가 $$\mathcal G$$와 independent이면

$$
E(\xi\mid\mathcal G)=E(\xi)\quad\text{a.s.}
$$

</li>

<li markdown="1">

tower property:

$$
E(E(\xi\mid\mathcal G)\mid\mathcal H)
=E(\xi\mid\mathcal H)\quad\text{a.s.}
$$

</li>

<li markdown="1">

$$\xi\geq0$$ a.s.이면 $$E(\xi\mid\mathcal G)\geq0$$ a.s.이다.

</li>

</ol>

</div>

random variable들 사이의 등식은 almost sure 등식이다. 반면 둘째 항은 적분을 끝낸 실수끼리의 등식이므로 a.s.라는 단서를 붙일 대상이 아니다.

셋째 항은 현재 정보로 알고 있는 인자를 conditional expectation 밖으로 꺼낼 수 있다는 성질이다. 그렇지만 두 변수가 각각 integrable하다고 곱도 자동으로 integrable한 것은 아니므로 곱에 대한 가정을 확인해야 한다. 넷째 항은 independent인 정보로는 평균을 바꾸지 않는다는 뜻이다. tower property에서는 큰 정보로 조건을 준 뒤 작은 정보로 다시 평균내면 작은 정보에 대한 결과가 남는다.

마지막 비음성 성질과 linearity를 결합하면 monotonicity도 얻는다. $$\xi_1\geq\xi_2$$ a.s.이면 차이 $$\xi_1-\xi_2$$에 적용하여

$$
E(\xi_1\mid\mathcal G)\geq E(\xi_2\mid\mathcal G)\quad\text{a.s.}
$$

이다. 이제 각 성질을 정의로 확인하자.

#### linearity와 전체 expectation의 보존

<span id="l5:t07"></span>

증명에서

$$
X=E(\xi\mid\mathcal G),\qquad Z=E(\zeta\mid\mathcal G)
$$

로 쓰자. 첫째 성질에서는 $$aX+bZ$$가 $$a\xi+b\zeta$$의 conditional expectation인지 확인한다. 이 후보는 integrable하고 $$\mathcal G$$-measurable이다. 모든 $$A\in\mathcal G$$에 대해

$$
\begin{align*}
\int_A(aX+bZ)\,dP
&=a\int_AX\,dP+b\int_AZ\,dP\\
&=a\int_A\xi\,dP+b\int_A\zeta\,dP\\
&=\int_A(a\xi+b\zeta)\,dP.
\end{align*}
$$

첫 줄과 마지막 줄은 적분의 linearity이고, 가운데 줄에서 $$X,Z$$의 정의를 각각 사용했다. 따라서 후보가 두 조건을 만족하며 a.s. 유일성에 의해 첫째 성질이 성립한다.

둘째 성질은 시험 사건으로 $$A=\Omega$$를 고르면 된다.

$$
E(X)=\int_\Omega X\,dP=\int_\Omega\xi\,dP=E(\xi).
$$

conditional expectation을 취하면 함숫값은 바뀔 수 있지만, 전체 공간에서 평균낸 수치는 바뀌지 않는다.

#### 음이 아닌 변수를 조건화해도 음이 되지 않는다

<span id="l5:t08"></span>

셋째 성질은 근사 과정이 필요하므로, 먼저 여섯째 성질부터 확인하자. $$\xi\geq0$$ a.s.라고 가정하고 $$X\geq0$$ a.s.를 보이려면 $$P(X<0)=0$$임을 보이면 된다.

$$
A_n=\{X\leq-1/n\}\in\mathcal G
$$

로 두자. $$X$$의 $$\mathcal G$$-measurability 덕분에 정의의 적분 등식에 이 사건을 넣을 수 있다. 그러면

$$
0\leq\int_{A_n}\xi\,dP
=\int_{A_n}X\,dP
\leq-\frac1nP(A_n).
$$

왼쪽의 비음성은 $$\xi\geq0$$ a.s.에서, 오른쪽의 상계는 $$A_n$$의 정의에서 왔다. 끝의 표현은 음이 아니면서 동시에 $$0$$ 이하이므로 $$P(A_n)=0$$이다.

마지막으로

$$
\{X<0\}=\bigcup_{n\geq1}A_n
$$

이므로 countable subadditivity를 적용하면 $$P(X<0)=0$$이다. 앞서 유일성을 증명할 때처럼 level set마다 적분을 시험하고 countable union으로 almost sure 결론을 얻었다.

#### 알고 있는 인자를 꺼내기: 쉬운 함수부터

<span id="l5:t09"></span>

이제 $$\xi$$가 $$\mathcal G$$-measurable이고 $$\xi\zeta\in L^1$$일 때

$$
E(\xi\zeta\mid\mathcal G)=\xi Z\quad\text{a.s.}
$$

임을 보이자. indicator function, simple function, bounded function, 일반적인 함수의 순서로 간다.

먼저 $$\xi=\mathbb1_A$$, $$A\in\mathcal G$$라 하자. $$\mathbb1_AZ$$는 $$\mathcal G$$-measurable이고 $$\vert \mathbb1_AZ\vert \leq\vert Z\vert $$이므로 integrable하다. 모든 $$B\in\mathcal G$$에 대해

$$
\begin{align*}
\int_B\mathbb1_AZ\,dP
&=\int_{B\cap A}Z\,dP\\
&=\int_{B\cap A}\zeta\,dP\\
&=\int_B\mathbb1_A\zeta\,dP.
\end{align*}
$$

가운데 등식에서 $$B\cap A\in\mathcal G$$가 필요하다. 단순히 $$A\in\mathcal F$$라는 사실만으로는 사용할 수 없다. 따라서 indicator function인 경우 정의의 조건들을 확인했다.

$$\mathcal G$$-measurable인 simple function은 이러한 indicator function들의 유한 linear combination으로 쓸 수 있다. 이미 증명한 linearity를 적용하면 simple function인 경우도 얻는다.

다음으로 $$\vert \xi\vert \leq M$$인 $$\mathcal G$$-measurable function을 생각하자. $$\xi$$를 점별로 근사하는 simple function $$s_m$$을 $$\vert s_m\vert \leq M$$이 되도록 잡을 수 있다. simple function의 경우에서

$$
\int_Bs_mZ\,dP=\int_Bs_m\zeta\,dP
$$

를 알고 있다. 양쪽 적분함수는 각각 $$M\vert Z\vert $$와 $$M\vert \zeta\vert $$로 지배되며, 이 함수들은 integrable하다.

여기서 **dominated convergence theorem**을 사용한다. 함수열이 점별로 수렴하고 절댓값이 하나의 integrable한 함수로 공통으로 지배되면, 적분과 극한을 교환할 수 있다는 정리이다. 따라서

$$
\int_B\xi Z\,dP=\int_B\xi\zeta\,dP
$$

를 얻는다. $$\xi Z$$의 measurability와 integrability도 boundedness에서 따라오므로 bounded function인 경우까지 증명했다. conditional expectation 기호 안에서 극한을 임의로 옮긴 것이 아니라, 정의를 이루는 적분들에서 dominated convergence를 적용한 것이다.

#### 일반적인 인자: integrability를 먼저 확보하기

<span id="l5:t10"></span>

이제 $$\xi$$가 bounded라고 가정하지 않겠다. 여전히 $$\xi$$는 $$\mathcal G$$-measurable이고 $$\xi\zeta\in L^1$$이다. 목표인 $$\xi Z$$의 measurability는 알 수 있지만 integrability는 아직 확인하지 않았다. 그것부터 확보해야 conditional expectation의 후보가 된다.

다음 보조함수를 만들자.

$$
H_n=(|\xi|\wedge n)\operatorname{sgn}(Z).
$$

$$u\wedge v$$는 두 값의 최솟값이다. $$\operatorname{sgn}(z)$$는 $$z>0$$일 때 $$1$$, $$z<0$$일 때 $$-1$$, $$z=0$$일 때 $$0$$이다. 따라서 $$H_n$$은 $$\mathcal G$$-measurable이며 $$\vert H_n\vert \leq n$$인 bounded function이다.

부호함수를 곱한 이유는 $$\operatorname{sgn}(Z)Z=\vert Z\vert $$를 만들기 위해서이다. bounded function에 대해 방금 증명한 성질과 전체 expectation 보존을 순서대로 적용하면

$$
\begin{align*}
E((|\xi|\wedge n)|Z|)
&=E(H_nZ)\\
&=E(E(H_n\zeta\mid\mathcal G))\\
&=E(H_n\zeta)\\
&\leq E(|\xi\zeta|)<\infty.
\end{align*}
$$

마지막 부등식은 $$\vert H_n\zeta\vert \leq\vert \xi\zeta\vert $$에서 나온다. $$H_n$$이 bounded이므로 중간의 $$H_n\zeta$$도 integrable하여 각 expectation이 정의된다.

왼쪽의 음이 아닌 함수 $$(\vert \xi\vert \wedge n)\vert Z\vert $$는 $$n$$이 증가하면 $$\vert \xi Z\vert $$로 증가한다. 음이 아닌 증가 함수열의 적분과 극한을 교환하는 monotone convergence theorem에 의해

$$
E(|\xi Z|)
=\lim_{n\to\infty}E((|\xi|\wedge n)|Z|)
\leq E(|\xi\zeta|)<\infty.
$$

이렇게 $$\xi Z$$의 integrability를 얻었다. 오른쪽 상계가 $$n$$에 의존하지 않는다는 것이 핵심이다.

이제 적분 보존 조건을 증명하자. 이번에는 양쪽에서 자른 함수

$$
\xi_n=(-n)\vee(\xi\wedge n)
$$

를 사용한다. $$u\vee v$$는 최댓값이다. $$\xi_n$$은 $$[-n,n]$$ 안에 있고, $$\xi_n\to\xi$$가 점별로 성립한다. bounded function의 경우를 적용하면 모든 $$B\in\mathcal G$$에서

$$
\int_B\xi_nZ\,dP=\int_B\xi_n\zeta\,dP.
$$

극한을 취하기 전에 dominating function을 확인해야 한다.

$$
|\xi_nZ|\leq|\xi Z|\in L^1,
\qquad |\xi_n\zeta|\leq|\xi\zeta|\in L^1.
$$

첫 integrability는 방금 증명했고, 둘째는 원래의 가정이다. 따라서 양쪽에 dominated convergence theorem을 적용하여

$$
\int_B\xi Z\,dP=\int_B\xi\zeta\,dP
$$

를 얻는다. $$\xi Z$$는 measurable이고 integrable하며 모든 시험 사건에서 이 등식을 만족하므로, a.s. 유일성에 의해 셋째 성질이 증명되었다.

두 번 자른 이유를 구별해 두자. 첫 절단에서는 부호함수를 함께 사용하여 후보 $$\xi Z$$의 absolute integrability를 먼저 확보했다. 둘째 절단에서는 그 결과로 얻은 integrable한 상계를 이용해 적분 등식에서 극한을 통과시켰다. 곱의 integrability를 확인하기 전에 둘째 계산부터 시작하면 이 연결이 빠진다.

#### independent인 정보와 tower property

<span id="l5:t11"></span>

넷째 성질에서 $$\xi$$는 $$\mathcal G$$와 independent이다. 후보를 상수 $$E(\xi)$$로 놓자. 이 함수는 integrable하고 $$\mathcal G$$-measurable이다. $$A\in\mathcal G$$이면 $$\xi$$와 $$\mathbb1_A$$가 independent이며, $$\vert \xi\mathbb1_A\vert \leq\vert \xi\vert $$이므로 곱도 integrable하다. 따라서

$$
\int_AE(\xi)\,dP
=E(\xi)P(A)
=E(\xi\mathbb1_A)
=\int_A\xi\,dP.
$$

모든 조건이 확인되었으므로 $$E(\xi\mid\mathcal G)=E(\xi)$$ a.s.이다. $$\mathcal G$$가 $$\xi$$에 관한 추가 정보를 주지 않으므로 원래 평균을 그대로 사용한다. $$\xi$$가 이미 $$\mathcal G$$-measurable인 경우의 결과 $$\xi$$와 혼동하지 말자.

마지막으로 tower property를 보자. $$\mathcal H\subset\mathcal G$$이고

$$
W=E(E(\xi\mid\mathcal G)\mid\mathcal H)
$$

라 두면 $$W$$는 integrable하고 $$\mathcal H$$-measurable이다. 임의의 $$A\in\mathcal H$$는 $$\mathcal G$$에도 속하므로

$$
\int_AW\,dP
=\int_AE(\xi\mid\mathcal G)\,dP
=\int_A\xi\,dP.
$$

첫 등식은 $$\mathcal H$$에 대한 conditional expectation의 정의, 둘째는 $$\mathcal G$$에 대한 정의이다. 같은 사건을 두 정의에 모두 넣을 수 있게 해 주는 것이 포함관계 $$\mathcal H\subset\mathcal G$$이다. 따라서 $$W$$가 $$E(\xi\mid\mathcal H)$$의 정의를 만족하여

$$
E(E(\xi\mid\mathcal G)\mid\mathcal H)
=E(\xi\mid\mathcal H)\quad\text{a.s.}
$$

를 얻는다.

순서를 바꾸어도 작은 정보에 대한 결과가 남는다.

$$
E(E(\xi\mid\mathcal H)\mid\mathcal G)
=E(\xi\mid\mathcal H)\quad\text{a.s.}
$$

이번에는 안쪽의 변수가 이미 $$\mathcal H$$-measurable이므로 $$\mathcal G$$-measurable이기도 하다는 사실과 Exercise 2.11을 사용한다. 두 방향의 결론은 같지만 증명에서 사용하는 이유는 구별된다.

#### 선형 성질 다음에 볼 것

<span id="l5:t12"></span>

이번 성질들은 주로 linear combination, 적분의 보존, 이미 알고 있는 인자의 분리처럼 선형적인 연산을 다뤘다. nonlinear 함수를 적용하면 등식이 그대로 유지되지는 않지만, 부등식의 형태로 얻을 수 있는 성질들이 있다. 다음에는 convex function과 conditional expectation의 관계를 살펴보자. 구체적인 conditional expectation을 구하는 교재의 연습문제들도 정의를 사용하는 연습으로 이어 가자.

{% endraw %}

<!-- prettier-ignore-end -->

---
layout: post
title: "Probability Theory 7: Martingales and Games of Chance"
date: 2026-10-04 12:07:00 +0900
description: "Martingale의 정의와 성질, 도박 모형과의 관계를 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 7)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_7.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

### 3.3 martingale

<span id="l7:t01"></span>

먼저 지난 시간 끝에 본 정의를 다시 정리하자. random variable들의 열 $$(\xi_n)$$과 filtration $$(\mathcal F_n)$$이 주어져 있다. filtration은 시간이 흐르면서 증가하는 정보이고, 이 정보에 비추어 공정한 게임을 나타내려는 것이 우리의 목표이다.

<div class="real-analysis-statement" markdown="1">

**Definition (martingale).**

$$(\xi_n)$$이 filtration $$(\mathcal F_n)$$에 대한 martingale이라는 것은 모든 $$n\geq1$$에 대해 다음 세 조건을 만족한다는 뜻이다.

<ol type="1" markdown="1">

<li markdown="1">

$$\xi_n\in L^1$$이다.

</li>

<li markdown="1">

$$\xi_n$$은 $$\mathcal F_n$$-measurable이다. 즉 열이 filtration에 adapted이다.

</li>

<li markdown="1">

$$E(\xi_{n+1}\mid\mathcal F_n)=\xi_n$$ a.s.이다.

</li>

</ol>

시간을 0부터 시작하면 같은 조건을 $$n\geq0$$에 대해 적용한다.

</div>

핵심은 세 번째 조건이다. 현재까지 관측한 정보를 모두 사용해서 다음 값을 예상해도, 그 conditional expectation이 현재 값과 같다는 뜻이다. 실제 다음 값은 달라질 수 있다. 이제 예제마다 먼저 integrability와 adaptedness를 확인하고, 마지막으로 이 등식을 계산해 보자.

#### independent인 평균 0의 변화량을 더하기

<span id="l7:t02"></span>

<div class="real-analysis-statement" markdown="1">

**Example 3.3.**

$$(\eta_n)$$이 independent인 integrable한 random variable들의 열이고 모든 $$n$$에 대해 $$E\eta_n=0$$이라고 하자. 이때

$$
\xi_n=\sum_{k=1}^n\eta_k,\qquad
\mathcal F_n=\sigma(\eta_1,\ldots,\eta_n)
$$

으로 정의한 $$(\xi_n)$$은 $$(\mathcal F_n)$$에 대한 martingale이다.

</div>

각 $$\eta_n$$은 한 번의 게임에서 생기는 수익이고, $$\xi_n$$은 지금까지의 누적 수익이라고 생각하면 된다. 새로운 게임의 결과가 이전 결과들과 independent이며 평균 수익은 0이다. 여기서는 모든 $$\eta_n$$의 distribution이 같다고 가정할 필요는 없다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$k\leq n$$인 $$\eta_k$$들은 모두 $$\mathcal F_n$$-measurable이므로 그 합 $$\xi_n$$도 $$\mathcal F_n$$-measurable이다. 또 삼각부등식에 의해

$$
E|\xi_n|\leq\sum_{k=1}^nE|\eta_k|<\infty.
$$

$$n$$을 고정하면 integrable한 변수의 유한합이므로 integrability가 확보된다.

마지막 조건을 위해 합의 마지막 항을 떼어 내자.

$$
\xi_{n+1}=\xi_n+\eta_{n+1}.
$$

conditional expectation의 linearity를 쓰면

$$
E(\xi_{n+1}\mid\mathcal F_n)
=E(\xi_n\mid\mathcal F_n)+E(\eta_{n+1}\mid\mathcal F_n).
$$

첫 항은 이미 관측된 $$\xi_n$$이므로 그대로 $$\xi_n$$이다. 둘째 항은 어떻게 될까? $$\eta_{n+1}$$은 과거 변수들이 생성하는 $$\mathcal F_n$$과 independent이므로

$$
E(\eta_{n+1}\mid\mathcal F_n)=E\eta_{n+1}=0.
$$

따라서 conditional expectation은 $$\xi_n+0=\xi_n$$ a.s.이다. independence는 과거를 조건으로 준 expectation을 보통 expectation으로 바꾸는 단계에, 평균 0은 그 나머지 항을 없애는 단계에 쓰였다.

</div>

#### 관측이 늘어날 때의 예측값

<span id="l7:t03"></span>

이번에는 independent인 증가량을 직접 주지 않고, 같은 random variable에 대한 예측을 갱신해 보자.

<div class="real-analysis-statement" markdown="1">

**Example 3.4.**

$$\xi\in L^1$$이고 $$(\mathcal F_n)$$이 filtration이면

$$
\xi_n=E(\xi\mid\mathcal F_n)
$$

은 $$(\mathcal F_n)$$에 대한 martingale이다.

</div>

시점 $$n$$에는 $$\mathcal F_n$$만큼의 정보를 알고 있다. 새로운 관측이 생기면 $$\xi$$에 대한 예측도 달라질 수 있다. 하지만 현재 정보로 다음 예측값을 평균 내면 지금의 예측값으로 돌아온다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

conditional expectation의 정의에 의해 $$\xi_n$$은 integrable하고 $$\mathcal F_n$$-measurable이다. 남은 조건에서는 먼저 $$\xi_{n+1}$$의 정의를 대입하고 tower property를 쓴다.

$$
\begin{aligned}
E(\xi_{n+1}\mid\mathcal F_n)
&=E\bigl(E(\xi\mid\mathcal F_{n+1})\mid\mathcal F_n\bigr)\\
&=E(\xi\mid\mathcal F_n)=\xi_n\quad\text{a.s.}
\end{aligned}
$$

$$\mathcal F_n\subseteq\mathcal F_{n+1}$$이므로 두 번 조건을 주면 더 작은 sigma-field에 대한 conditional expectation이 남는다. 이 예에서는 independence를 쓰지 않았다.

</div>

#### martingale의 expectation은 일정하다

<span id="l7:t04"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.3.**

martingale $$(\xi_n)$$에 대해

$$
E\xi_n=E\xi_1\qquad\text{모든 }n\geq1
$$

임을 보여라.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

martingale 등식에 expectation을 취하고 전체 expectation 보존 성질을 쓰면

$$
E\xi_n=E\bigl(E(\xi_{n+1}\mid\mathcal F_n)\bigr)=E\xi_{n+1}.
$$

마지막 성질은 conditional expectation 정의에서 시험 사건을 $$\Omega$$로 택한 적분 등식이다. 한 단계마다 expectation이 같으므로 귀납적으로 모든 시점에서 $$E\xi_1$$과 같다.

</div>

random variable의 실현값은 시간에 따라 변해도 expectation은 일정하다. 그 상수는 양수일 수도, 음수일 수도, 0일 수도 있다. 초기 누적 수익이 0인 공정한 게임은 매 고정 시점에서 기대수익이 0이다. 초기 자산까지 포함한 과정이라면 expectation은 그 초기값으로 유지된다. 이것이 매 경로의 자산이 일정하다는 주장은 아니다.

#### natural filtration으로 정보를 줄여도 되는가

<span id="l7:t05"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.4.**

$$(\xi_n)$$이 $$(\mathcal F_n)$$에 대한 martingale이면 자신의 natural filtration

$$
\mathcal G_n=\sigma(\xi_1,\ldots,\xi_n)
$$

에 대해서도 martingale임을 보여라.

</div>

여기에는 filtration이 두 개 있다. 주어진 $$\mathcal F_n$$과 관측값들 자체가 생성한 $$\mathcal G_n$$은 같을 필요가 없다. 하지만 지난 시간의 최소성에 의해 $$\mathcal G_n\subseteq\mathcal F_n$$이다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

변수 자체를 바꾸지 않았으므로 integrability는 그대로이다. natural filtration의 정의에 의해 $$\xi_n$$은 $$\mathcal G_n$$-measurable이다. 포함관계와 tower property로

$$
\begin{aligned}
E(\xi_{n+1}\mid\mathcal G_n)
&=E\bigl(E(\xi_{n+1}\mid\mathcal F_n)\mid\mathcal G_n\bigr)\\
&=E(\xi_n\mid\mathcal G_n)=\xi_n\quad\text{a.s.}
\end{aligned}
$$

를 얻는다. 두 번째 줄의 첫 등식에는 원래 filtration에 대한 martingale 성질을, 마지막 등식에는 $$\mathcal G_n$$-measurability를 사용했다.

</div>

앞으로 filtration을 생략해 말할 때는 natural filtration을 기본으로 생각할 수 있다. filtration을 명시한 명제에서는 그 filtration을 계속 사용하자.

#### symmetric random walk: 제곱에서 시간을 빼기

<span id="l7:t06"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.5 (Symmetric Random Walk).**

independent인 random variable $$(\eta_n)$$이

$$
P\{\eta_n=1\}=P\{\eta_n=-1\}=\frac12
$$

를 만족한다고 하자. symmetric random walk를

$$
\xi_0=0,\qquad \xi_n=\sum_{k=1}^n\eta_k
$$

로 정의한다. 이때 $$\xi_n^2-n$$이 filtration

$$
\mathcal F_0=\{\emptyset,\Omega\},\qquad
\mathcal F_n=\sigma(\eta_1,\ldots,\eta_n)\quad(n\geq1)
$$

에 대한 martingale임을 보여라.

</div>

실수축의 원점에서 시작하여 매번 오른쪽 또는 왼쪽으로 한 칸씩 움직이는 모습을 생각하면 된다. 오른쪽과 왼쪽의 확률이 각각 $$1/2$$이고, 새로운 방향은 이전 걸음들과 independent이다. $$\eta_n$$은 한 걸음의 변화량이고 $$\xi_n$$은 $$n$$번 움직인 뒤의 위치이다. 시점 $$n$$의 위치는 $$-n$$과 $$n$$ 사이에 있다.

위치 자체는 Example 3.3의 martingale이다. 이제 제곱한 위치를 살펴보면 매 단계에 평균적으로 1만큼의 증가분이 생기고, 그만큼인 $$n$$을 빼면 다시 martingale이 된다. 이 말을 계산으로 확인하자.

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 $$\eta_k$$는 almost surely $$\pm1$$이므로

$$
|\xi_n|\leq n,\qquad |\xi_n^2-n|\leq n^2+n\quad\text{a.s.}
$$

이다. $$n$$마다 유한한 상계가 있으므로 integrable하고, $$\mathcal F_n$$-measurability도 정의에서 따른다. 모든 $$n$$에 공통인 하나의 유한 상계를 주장하는 것은 아니다.

새 걸음 $$\eta_{n+1}$$은 $$\mathcal F_n$$과 independent이다. 또

$$
E\eta_{n+1}=\tfrac12\cdot1+\tfrac12\cdot(-1)=0,
\qquad \eta_{n+1}^2=1\quad\text{a.s.}
$$

이므로 $$E(\eta_{n+1}\mid\mathcal F_n)=0$$, $$E(\eta_{n+1}^2\mid\mathcal F_n)=1$$ a.s.이다. 이제 제곱을 전개하면

$$
\begin{aligned}
E(\xi_{n+1}^2-(n+1)\mid\mathcal F_n)
&=E((\xi_n+\eta_{n+1})^2\mid\mathcal F_n)-(n+1)\\
&=\xi_n^2+2\xi_nE(\eta_{n+1}\mid\mathcal F_n)
  +E(\eta_{n+1}^2\mid\mathcal F_n)-(n+1)\\
&=\xi_n^2+2\xi_n\cdot0+1-(n+1)\\
&=\xi_n^2-n\quad\text{a.s.}
\end{aligned}
$$

$$\xi_n$$과 $$\xi_n^2$$는 현재 정보로 아는 값이다. 특히 교차항에서 $$\xi_n$$을 밖으로 꺼낼 수 있고, 이 예에서는 bounded이므로 곱의 integrability도 확보된다. 새 걸음의 제곱을 밖으로 꺼낸 것이 아니라 그 conditional expectation을 1로 계산한 것이다. 교차항은 평균 0 때문에 사라지고, 제곱항의 1은 시간 증가분 1과 상쇄된다.

</div>

이 보정항 $$n$$은 이후에 중요한 의미를 갖는다. 방금 증명한 과정은 시점 0에서 0이므로 expectation 보존에 의해

$$
E(\xi_n^2-n)=0,\qquad E\xi_n^2=n.
$$

따라서 제곱평균의 제곱근은 $$\sqrt n$$이다. random walk의 규모를 이야기할 때 $$\sqrt n$$이 등장하는 이유를 여기서 볼 수 있다. 이것이 모든 경로가 매번 $$\sqrt n$$만큼 떨어져 있다는 뜻은 아니다.

#### 같은 보행으로 연습하기

<span id="l7:t07"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 3.6.**

위 symmetric random walk에 대해

$$
\zeta_n=(-1)^n\cos(\pi\xi_n),\qquad n\geq0
$$

가 같은 filtration에 대한 martingale임을 보여라.

</div>

여러 예제에서 세 조건을 확인해 보았으니, 이 증명은 직접 해 보자. 이제 공정성의 등식을 부등식으로 바꾼 정의로 넘어가자.

#### conditional expectation이 증가하거나 감소하는 경우

<span id="l7:t08"></span>

현실의 게임이 모두 공정한 것은 아니다. 현재 정보로 예상하는 다음 값이 지금보다 클 수도 있고 작을 수도 있다. integrability와 adaptedness는 그대로 두고 세 번째 조건을 바꾼다.

<div class="real-analysis-statement" markdown="1">

**Definition (submartingale과 supermartingale).**

$$(\xi_n)$$이 integrable한 random variable들로 이루어지고 $$(\mathcal F_n)$$에 adapted라고 하자. 모든 $$n$$에 대해

$$
E(\xi_{n+1}\mid\mathcal F_n)\geq\xi_n\quad\text{a.s.}
$$

이면 submartingale,

$$
E(\xi_{n+1}\mid\mathcal F_n)\leq\xi_n\quad\text{a.s.}
$$

이면 supermartingale이라고 한다.

</div>

이름의 느낌만으로 방향을 외우면 헷갈릴 수 있다. Supermartingale의 “super”가 돈을 더 번다는 뜻은 아니다. 이름보다 부등식을 먼저 보자. 현재 값이 다음 값의 conditional expectation보다 위에 놓인다. 수익 과정으로 해석하면 불리한 방향이다. Submartingale은 반대로 다음 conditional expectation이 현재 값 이상인 유리한 방향이다. 이 명명에는 superharmonic function의 부호 관례와의 관련도 있지만, 여기서는 위의 부등식을 정의로 사용하면 된다.

두 경우 모두 실제 경로가 늘 감소하거나 늘 증가할 필요는 없다. 비교하는 대상은 다음 실현값 자체가 아니라 현재 정보에 대한 다음 값의 conditional expectation이다.

#### convex function을 적용하면 submartingale이 된다

<span id="l7:t09"></span>

앞 장에서 conditional expectation에 convex function을 적용하면 등식 대신 Jensen's inequality를 얻었다. martingale에도 같은 방법을 써 보자.

<div class="real-analysis-statement" markdown="1">

**Exercise 3.7.**

$$(\xi_n)$$이 $$(\mathcal F_n)$$에 대한 martingale이고 모든 $$n$$에 대해 $$\xi_n\in L^2$$라고 하자. 그러면 $$(\xi_n^2)$$은 같은 filtration에 대한 submartingale이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\xi_n\in L^2$$는 $$E\xi_n^2<\infty$$라는 뜻이므로 제곱한 변수의 integrability를 확보한다. 또한 $$x\mapsto x^2$$는 연속인 Borel function이므로 $$\xi_n^2$$도 $$\mathcal F_n$$-measurable이다.

마지막으로 convex function $$x^2$$에 대한 conditional Jensen's inequality를 쓴다.

$$
E(\xi_{n+1}^2\mid\mathcal F_n)
\geq\bigl(E(\xi_{n+1}\mid\mathcal F_n)\bigr)^2
=\xi_n^2\quad\text{a.s.}
$$

Jensen에 필요한 $$\xi_{n+1}$$의 integrability는 martingale 조건에서, 그 제곱의 integrability는 추가한 $$L^2$$ 조건에서 나온다. 마지막 등식은 원래 과정의 martingale 성질이다.

</div>

제곱만 가능한 것은 아니다. 유한값 convex function $$\varphi:\mathbb R\to\mathbb R$$에 대해 모든 $$n$$에서 $$\varphi(\xi_n)\in L^1$$이면 같은 계산으로

$$
E(\varphi(\xi_{n+1})\mid\mathcal F_n)
\geq\varphi(E(\xi_{n+1}\mid\mathcal F_n))
=\varphi(\xi_n)\quad\text{a.s.}
$$

이다. 유한값 convex function은 연속이므로 합성의 measurability도 성립한다. 따라서 $$(\varphi(\xi_n))$$은 같은 filtration에 대한 submartingale이다.

### 3.4 우연에 따른 게임과 전략

<span id="l7:t10"></span>

지금까지는 게임 자체가 공정한지, 유리한지, 불리한지를 나타내는 모형을 정의했다. 이제 판마다 거는 금액을 바꾸는 전략을 생각해 보자. 공정한 게임에서도 이전 결과를 보고 금액을 잘 바꾸면 기대수익을 얻을 수 있을까?

곧 볼 명제는 일정한 조건 아래에서, 과거 정보를 사용해 베팅 금액을 바꾸어도 매 고정된 유한 시점의 기대수익은 0이라는 결과이다. 한편 횟수를 제한하지 않고 신용도 무제한으로 허용하면 어떤 전략이 가능한지도 이후에 살펴보자. 여기서는 먼저 각 유한 시점에서 성립하는 명제를 정확히 세우자.

#### 결과를 보기 전에 금액을 정한다

<span id="l7:t11"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (previsible인 열).**

filtration $$(\mathcal F_n)_{n\geq0}$$에 대해, 모든 $$n\geq1$$에서 $$\alpha_n$$이 $$\mathcal F_{n-1}$$-measurable이면 $$(\alpha_n)$$이 previsible하다고 한다.

</div>

$$\alpha_n$$은 $$n$$번째 판에 거는 금액이고, $$(\alpha_n)$$을 gambling strategy라고 부른다. 룰렛이나 주사위 게임을 여러 번 한다고 생각해 보자. 어떤 판에는 많은 돈을 걸고, 어떤 판에는 아예 참여하지 않을 수 있다. $$\alpha_n=0$$은 그 판을 건너뛴다는 뜻이다. 수학적 모형에서는 음수 금액도 허용할 수 있다.

왜 $$\mathcal F_n$$이 아니라 $$\mathcal F_{n-1}$$일까? $$n$$번째 금액을 정할 때는 앞의 $$n-1$$번 결과만 보았다. 이번 결과가 나온 다음에 그 결과를 이용해 금액을 정할 수는 없다. previsible이라는 조건은 바로 이 시간 순서를 표현한다. adapted라는 조건에서는 현재 정보로 현재 값을 알면 됐다. 지금은 더 이른 정보가 필요하다. 한 단계 전의 정보만으로 이번 금액을 정할 수 있어야 한다.

단위 금액을 걸었을 때 $$n$$번째 순수익을 $$\eta_n$$이라고 쓰고

$$
\xi_0=0,\qquad \xi_n=\sum_{k=1}^n\eta_k,
\qquad \mathcal F_n=\sigma(\eta_1,\ldots,\eta_n),\quad
\mathcal F_0=\{\emptyset,\Omega\}
$$

으로 두자. $$\xi_n$$은 단위 금액으로 계속 참여했을 때의 누적 수익이다. $$\xi_0=0$$은 시작 시 누적 수익을 0으로 잡았다는 뜻이다. 각 $$\xi_n$$은 integrable하다고 하고, conditional expectation에 따라 다음과 같이 부른다.

$$
\begin{array}{lll}
E(\xi_n\mid\mathcal F_{n-1})=\xi_{n-1}&\text{a.s.}&\text{공정한 게임 (fair)},\\
E(\xi_n\mid\mathcal F_{n-1})\geq\xi_{n-1}&\text{a.s.}&\text{유리한 게임 (favorable)},\\
E(\xi_n\mid\mathcal F_{n-1})\leq\xi_{n-1}&\text{a.s.}&\text{불리한 게임 (unfavorable)}.
\end{array}
$$

각각 martingale, submartingale, supermartingale에 대응한다.

전략 $$(\alpha_n)$$을 사용했을 때의 실제 누적 수익을 $$\zeta_n$$으로 구별해 쓰면

$$
\zeta_0=0,\qquad
\zeta_n=\sum_{k=1}^n\alpha_k(\xi_k-\xi_{k-1}).
$$

$$\xi_k-\xi_{k-1}=\eta_k$$가 그 판의 단위 금액당 수익이다. 여기에 $$\alpha_k$$를 곱하면 선택한 금액의 수익이고, 이를 더한 것이 전체 수익이다. $$\zeta_n$$ 자체는 기대수익이 아니라 아직 무작위인 누적 수익이다.

#### bounded인 previsible 전략은 공정성을 보존한다

<span id="l7:t12"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 3.1.**

$$(\alpha_n)$$이 previsible하고 각 $$\alpha_n$$이 bounded라고 하자. 위에서 정의한 $$(\zeta_n)$$에 대해 다음이 성립한다.

<ol type="1" markdown="1">

<li markdown="1">

$$(\xi_n)$$이 martingale이면 $$(\zeta_n)$$도 같은 filtration에 대한 martingale이다.

</li>

<li markdown="1">

추가로 모든 $$n$$에 대해 $$\alpha_n\geq0$$ a.s.이면, $$(\xi_n)$$이 supermartingale일 때 $$(\zeta_n)$$도 supermartingale이고, $$(\xi_n)$$이 submartingale일 때 $$(\zeta_n)$$도 submartingale이다.

</li>

</ol>

</div>

공정한 게임에서는 이런 전략을 사용해도 결과가 martingale로 남는다. 따라서 $$\zeta_0=0$$이면 매 고정된 유한 $$n$$에서 $$E\zeta_n=0$$이다. 전략으로 게임을 이길 수 없다는 말을 이 명제에서는 이 의미로 이해하면 된다. 개별 경로에서 돈을 버는 일이 없다는 말은 아니다.

왜 각 금액이 bounded여야 할까? 곧 볼 증명에서는 이 조건을 사용해 전략을 적용한 수익도 integrable하다는 것을 보인다. 여기서는 각 $$n$$에 대해 유한한 상계가 있으면 되고, 모든 $$n$$에 공통인 하나의 상계를 요구하지 않는다. 따라서 이 가정을 곧바로 전체 기간에 걸친 총 신용 한도와 동일시하지 말자. 비음성은 두 번째 결론의 부등식 방향을 보존하는 데 필요하다.

<span id="l7:t13"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 adaptedness를 확인하자. $$k\leq n$$이면 $$\alpha_k$$는 $$\mathcal F_{k-1}$$-measurable이고, $$\xi_k-\xi_{k-1}$$는 $$\mathcal F_k$$-measurable이다. 이 sigma-field들은 모두 $$\mathcal F_n$$에 포함되므로 각 곱과 그 유한합 $$\zeta_n$$은 $$\mathcal F_n$$-measurable이다.

다음으로 integrability이다. $$\|\alpha_k\|_\infty$$를 $$\vert \alpha_k\vert $$의 almost sure 상계 중 가장 작은 값으로 쓰면

$$
\begin{aligned}
E|\alpha_k(\xi_k-\xi_{k-1})|
&\leq\|\alpha_k\|_\infty E|\xi_k-\xi_{k-1}|\\
&\leq\|\alpha_k\|_\infty(E|\xi_k|+E|\xi_{k-1}|)<\infty.
\end{aligned}
$$

각 항이 integrable하므로 그 유한합 $$\zeta_n$$도 integrable하다.

마지막 한 판의 수익을 분리하면

$$
\zeta_n=\zeta_{n-1}+\alpha_n(\xi_n-\xi_{n-1}).
$$

$$\zeta_{n-1}$$, $$\alpha_n$$, $$\xi_{n-1}$$은 모두 $$\mathcal F_{n-1}$$-measurable이다. bounded 인자를 밖으로 꺼내는 성질과 linearity를 적용하면

$$
E(\zeta_n\mid\mathcal F_{n-1})
=\zeta_{n-1}+\alpha_n\bigl(E(\xi_n\mid\mathcal F_{n-1})-\xi_{n-1}\bigr)
\quad\text{a.s.}
$$

martingale인 경우 괄호가 0이므로 결과는 $$\zeta_{n-1}$$이다. 이것으로 세 조건을 모두 확인했다.

supermartingale이면 괄호가 0 이하이다. $$\alpha_n\geq0$$이므로 곱도 0 이하이고

$$
E(\zeta_n\mid\mathcal F_{n-1})\leq\zeta_{n-1}\quad\text{a.s.}
$$

이다. submartingale이면 괄호가 0 이상이므로 같은 논리로 반대 부등식을 얻는다. 만약 금액의 부호를 제한하지 않으면 음수를 곱할 때 방향이 뒤집힐 수 있어 이 두 결론을 그대로 주장할 수 없다.

</div>

공정성의 보존에는 이전 정보로 금액을 정한다는 조건이 정확히 사용되었다. 다음에는 무제한 신용과 계속되는 시행을 생각했을 때 흥미로운 전략이 어떻게 나타나는지 살펴보자. 지금까지 얻은 결론은 어디까지나 각각의 유한 시점에 대한 것이다.

{% endraw %}

<!-- prettier-ignore-end -->

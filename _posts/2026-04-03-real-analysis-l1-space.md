---
layout: post
title: "Real Analysis 6: The Space L1"
date: 2026-04-03 12:00:00 +0900
description: "적분가능함수의 공간 L1, 완비성, 조밀성, 평행이동과 합성곱의 기본 성질을 정리한다."
tags: real-analysis measure-theory lecture-notes
categories: real-analysis
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 봄학기 실변수함수론 강의노트이다.

[전체 강의노트 PDF]({{ '/assets/pdf/2026-spring/real-analysis/main.pdf' | relative_url }})

{% raw %}

**네 번째 단계: 일반 함수의 적분**

<span id="l09:signed"></span>

비음수 함수의 적분이 준비되었으므로 이제 부호가 바뀌는 measurable 함수를 다룰 수 있다. 실수값 함수 $$f$$에 대하여

$$
f_+=\max\{f,0\},\qquad f_-=\max\{-f,0\}
$$

라 두면 두 함수는 모두 비음수이고 $$f=f_+-f_-$$, $$\vert f\vert =f_++f_-$$다. Negative part인 $$f_-$$ 자체의 값은 음수가 아니라는 점에 주의하자. 음의 기여는 $$f_-$$를 빼면서 나타난다.

<div class="real-analysis-statement" markdown="1">

**Definition (적분가능 함수).**

$$\int\vert f\vert <\infty$$이면 $$f$$가 Lebesgue 적분가능하다고 하고,

$$
\int f:=\int f_+-\int f_-
$$

로 정의한다. Measurable 집합 $$E$$에서는 $$\int_Ef:=\int f\rchi_E$$로 정의한다.

</div>

$$\vert f\vert $$는 measurable 함수와 continuous 함수 $$t\mapsto\vert t\vert $$의 합성이므로 measurable하다. 따라서 비음수 적분의 정의를 적용할 수 있다. 또 $$0\le f_+,f_-\le\vert f\vert $$이므로 두 적분이 각각 유한하다. 정의에 $$\infty-\infty$$ 같은 불확정 표현이 들어가지 않는 이유다. A.e. 유한한 확장실수값 함수를 다룰 때도 영집합의 값을 0으로 정하여 같은 정의를 사용한다.

<span id="l09:decomposition"></span>

분해의 모양을 바꾸면 적분이 바뀌지 않을까? 예를 들어 0은 $$0-0$$이지만 $$h-h$$이기도 하다. 여기서 다른 분해를 쓸 때도 각 성분의 적분이 유한해야 한다. 전체 공간에서 $$1-1$$로 쓰면 두 상수함수의 적분이 무한할 수 있으므로 그 적분을 빼는 방식은 허용되지 않는다.

비음수 적분가능 함수들로 $$f=f_1-f_2=g_1-g_2$$라고 썼다고 하자. 그러면 $$f_1+g_2=f_2+g_1$$이고, 비음수 적분의 선형성에 따라

$$
\int f_1+\int g_2=\int f_2+\int g_1.
$$

네 수가 유한하므로 이항하여

$$
\int f_1-\int f_2=\int g_1-\int g_2
$$

를 얻는다. 따라서 positive part와 negative part 이외의 적분가능한 비음수 분해를 사용해도 결과가 같다.

<div class="real-analysis-statement" markdown="1">

**Proposition 1.11.**

적분가능 함수의 적분은 선형이고, 서로소 영역에 대해 additive하며, monotone하다. 또한

$$
\left|\int f\right|\le\int|f|
$$

가 성립한다.

</div>

선형결합 $$af+bg$$의 절댓값은 $$\vert a\vert \vert f\vert +\vert b\vert \vert g\vert $$ 이하이므로 여전히 적분가능하다. 비음수 성분들을 묶고 위의 분해 독립성을 쓰면 임의의 실수 계수에 대한 선형성을 얻는다. $$f\le g$$이면 $$g-f\ge0$$이므로 monotonicity가 나오며, $$-\vert f\vert \le f\le\vert f\vert $$에서 triangle inequality가 나온다. 영역의 additivity는 characteristic functions의 합에 선형성을 적용한 것이다.

**큰 영역의 바깥과 작은 집합의 적분**

<span id="l09:mass"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.12.**

$$f$$가 $$\mathbb R^d$$에서 적분가능하면 임의의 $$\epsilon>0$$에 대하여 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

원점 중심의 충분히 큰 공 $$B$$를 잡으면 $$\int_{B^c}\vert f\vert <\epsilon$$이다.

</li>

<li markdown="1">

어떤 $$\delta>0$$이 있어서 measurable 집합 $$E$$가 $$m(E)<\delta$$를 만족하면 $$\int_E\vert f\vert <\epsilon$$이다.

</li>

</ol>

</div>

첫 결론은 적분의 대부분을 큰 공 안에 담을 수 있다는 말이다. 함수가 무한대에서 점별로 0으로 가야 한다는 말은 아니다. 예를 들어 $$\mathbb R$$의 정수에서만 1이고 나머지에서 0인 함수는 적분이 0이지만 $$x\to\infty$$일 때 극한이 없다. 영집합 위의 값은 적분으로 제어되지 않는다.

두 번째 결론에서는 $$E$$가 어디에 있는지나 어떤 모양인지가 중요하지 않다. Measure가 충분히 작으면 그 위에 놓인 적분도 작다. 이를 적분의 absolute continuity라고 한다. $$f$$ 자체의 continuity와는 다른 성질이다. 훗날 $$\int_a^xf(t)\,dt$$ 같은 함수를 다룰 때 이 조건이 자연스럽게 등장한다.

<span id="l09:mass-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$u=\vert f\vert \ge0$$에 대해 증명하면 충분하다. $$B_N=\{x:\vert x\vert <N\}$$라 하면 $$u\rchi_{B_N}\nearrow u$$이므로 MCT로

$$
\int_{B_N}u\longrightarrow\int u<\infty.
$$

따라서 충분히 큰 $$N_0$$에서

$$
\int_{B_{N_0}^c}u=\int u-\int_{B_{N_0}}u<\epsilon.
$$

두 유한한 적분을 빼고 있다는 점이 중요하다.

두 번째 결론에서는 공간 대신 함수의 높이를 자른다. $$A_N=\{u\le N\}$$, $$u_N=u\rchi_{A_N}$$이라 두자. $$u$$가 유한한 거의 모든 점에서 $$u_N\nearrow u$$이므로 MCT에 따라 $$\int(u-u_N)\to0$$이다. 따라서 $$N_0\ge1$$을 택하여

$$
\int(u-u_{N_0})<\epsilon/2
$$

가 되게 하고, $$N_0\delta<\epsilon/2$$가 되도록 $$\delta>0$$을 택한다. $$m(E)<\delta$$이면

$$
\begin{align*}
 \int_Eu
 &=\int_E(u-u_{N_0})+\int_Eu_{N_0}\\
 &\le\int(u-u_{N_0})+N_0m(E)<\epsilon.
\end{align*}
$$

높이가 큰 부분의 전체 적분은 $$N_0$$의 선택으로 작게 하고, 남은 유계 부분의 적분은 집합의 measure를 작게 하여 제어했다.

</div>

**Dominated convergence theorem**

<span id="l09:dct"></span>

BCT의 상수 bound는 편리하지만 제한적이다. 적분가능한 함수는 유계일 필요가 없으므로, 여러 함수가 하나의 적분가능한 곡선 아래에 놓인 상황을 다루고 싶다. 핵심은 bound가 상수인지가 아니라 수열 전체에 공통이며 그 적분이 유한한지다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.13. Dominated convergence theorem (DCT).**

Measurable 함수 $$f_n$$에 대해 $$f_n\to f$$ a.e.이고, 하나의 비음수 적분가능 함수 $$g$$가 있어서 모든 $$n$$에 대하여 $$\vert f_n\vert \le g$$ a.e.라고 하자. 그러면 $$f,f_n$$은 적분가능하고

$$
\int|f_n-f|\longrightarrow0,
 \qquad\int f_n\longrightarrow\int f.
$$

</div>

$$g$$는 $$n$$에 의존하면 안 된다. BCT에서는 $$g=M\rchi_E$$로 놓을 수 있으므로 그 정리는 DCT의 특별한 경우가 된다. MCT와는 가정의 종류가 다르다. DCT는 수열의 monotonicity를 요구하지 않는다.

<span id="l09:dct-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

가산 개의 예외 영집합을 합친 뒤 그 밖에서 극한을 취하면 $$\vert f\vert \le g$$다. 따라서 $$f_n,f$$는 모두 적분가능하다. 이제 $$g$$가 거의 모든 점에서 유한하다는 사실을 이용하여

$$
E_N=\{x\in B_N:g(x)\le N\}
$$

로 두자. $$E_N$$은 증가하고 $$g\rchi_{E_N}\nearrow g$$ a.e.이므로 MCT에 의해 충분히 큰 $$N_0$$에서

$$
\int_{E_{N_0}^c}g<\epsilon/3
$$

이 된다. 이 집합을 고정한다. 원래 수열의 첨자 $$n$$과 절단을 정하는 $$N_0$$를 혼동하지 말자.

$$E_{N_0}\subset B_{N_0}$$는 유한 measure이고, 그 안에서 $$\vert f_n\vert \le g\le N_0$$다. 따라서 $$f_n\rchi_{E_{N_0}}$$에 BCT를 적용하면 충분히 큰 $$n$$에 대해

$$
\int_{E_{N_0}}|f_n-f|<\epsilon/3.
$$

전체 공간을 이 집합과 그 여집합으로 나누면

$$
\begin{align*}
 \int|f_n-f|
 &\le\int_{E_{N_0}}|f_n-f|+
       \int_{E_{N_0}^c}(|f_n|+|f|)\\
 &\le\epsilon/3+2\int_{E_{N_0}^c}g<\epsilon.
\end{align*}
$$

첫 부분은 BCT로, 바깥 부분은 공통 지배함수의 작은 적분으로 제어했다. 마지막으로 적분의 triangle inequality를 적용하면 $$\int f_n\to\int f$$다.

</div>

**복소수값 함수의 적분**

<span id="l09:complex"></span>

$$f:\mathbb R^d\to\mathbb C$$를 $$f=u+iv$$로 쓰자. $$f$$가 measurable하다는 것은 실수값 함수 $$u,v$$가 모두 measurable하다는 것과 동치다. 복소수의 modulus

$$
|f|=\sqrt{u^2+v^2}
$$

가 적분가능하면 $$f$$도 적분가능하다고 하고

$$
\int f:=\int u+i\int v,
 \qquad\int_Ef:=\int f\rchi_E
$$

로 정의한다. 이때 적분값은 복소수다. 부등식

$$
|u|,|v|\le|f|\le|u|+|v|
$$

에 의해 $$f$$의 적분가능성과 $$u,v$$의 적분가능성은 동치다. 복소수 적분에서도 $$\vert \int f\vert \le\int\vert f\vert $$가 성립한다. $$\int f\ne0$$이면 어떤 $$\vert c\vert =1$$에 대하여 $$c\int f=\vert \int f\vert $$로 만들 수 있고,

$$
\left|\int f\right|=\int\operatorname{Re}(cf)\le\int|f|
$$

이기 때문이다. 영인 경우는 바로 성립한다.

### 2.2. The space $$L^1$$ of integrable functions

**$$L^1$$은 왜 equivalence classes의 공간인가?**

<span id="l09:l1"></span>

지금까지는 개별 함수와 수열의 적분을 보았다. 이제 적분가능 함수들을 하나의 공간으로 보고 그 구조를 생각한다. 두 적분가능 함수의 선형결합도 적분가능하므로 vector space를 이루며, 적분으로 함수의 크기를 측정할 수 있다.

$$
\|f\|_1=\|f\|_{L^1(\mathbb R^d)}:=\int_{\mathbb R^d}|f(x)|\,dx.
$$

하지만 이 식을 곧바로 함수들의 norm이라고 부를 수는 없다.

<span id="l09:classes"></span>

실제로 $$\|f\|_1=0$$은 $$f$$가 모든 점에서 0이라는 뜻이 아니라 $$f=0$$ a.e.라는 뜻이다. 적분이 영집합 위의 값들을 구별하지 않기 때문이다. 따라서

$$
f\sim g\quad\Longleftrightarrow\quad f=g\text{ a.e.}
$$

라는 equivalence relation으로 함수들을 묶는다.

<div class="real-analysis-statement" markdown="1">

**Definition ($$L^1$$).**

$$L^1(\mathbb R^d)$$는 적분가능 함수들의 a.e. equivalence classes로 이루어진 공간이다. 보통 equivalence class를 대표 함수와 같은 기호 $$f$$로 표시한다. Measurable $$E$$에 대한 $$L^1(E)$$도 $$E$$에서의 적분과 a.e. 관계로 정의한다.

</div>

영집합의 값을 바꾸어도 적분과 선형연산의 equivalence class는 변하지 않는다. 그러므로 위 식이 $$L^1$$ 위에서 well-defined다. $$L^1(E)$$의 함수는 $$E^c$$에서 0으로 확장하여 전체 공간의 함수처럼 다룰 수도 있다.

<span id="l09:norm"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.1.**

$$\|\cdot\|_1$$은 $$L^1$$의 norm이며,

$$
d(f,g)=\|f-g\|_1
$$

는 metric이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Norm은 비음수이고, norm이 0인 equivalence class는 영함수의 class뿐이다. $$\vert af\vert =\vert a\vert \vert f\vert $$에서 $$\|af\|_1=\vert a\vert \|f\|_1$$을 얻고, $$\vert f+g\vert \le\vert f\vert +\vert g\vert $$를 적분하면 triangle inequality가 나온다. 이 성질들을 함수의 차이에 적용하면 metric의 양의 성질, 대칭성, triangle inequality가 성립한다.

</div>

**Riesz--Fischer 정리**

<span id="l09:complete"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.2. Riesz--Fischer.**

$$L^1$$은 complete하다. 즉 $$L^1$$ norm에 대한 모든 Cauchy 수열은 $$L^1$$의 한 원소로 수렴한다.

</div>

증명을 시작하기 전에 어려운 점을 보자. 실수 수열의 Cauchy 조건은 각 항의 차이를 제어하지만, 여기서는 함수 차이의 적분만 작다. 작은 집합에서 함수값이 크게 달라도 $$L^1$$ 차이는 작을 수 있다. 따라서 $$L^1$$ Cauchy 수열이라고 해서 각 점에서 Cauchy인 것은 아니다. 단순히 실수의 completeness를 점마다 적용하여 극한을 만드는 전략은 통하지 않는다. 수열 공간에서 좌표별 극한을 만드는 방식과 구별해야 한다.

예를 들어 $$[0,1)$$을 $$2^j$$개의 dyadic 구간으로 나누고 그 characteristic functions를 왼쪽부터 차례로 나열한 뒤 $$j$$를 늘리는 수열을 생각할 수 있다. 각 함수의 적분은 $$2^{-j}$$로 0에 가까워져 $$L^1$$에서 0으로 수렴하지만, 각 점은 매 단계 어떤 한 구간에 들어가므로 함수값 1을 무한히 자주 만난다. 점별수렴은 결론이 아니다. 필요한 것은 충분히 빨리 가까워지는 부분수열이다.

<span id="l09:riesz-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\{f_n\}$$이 $$L^1$$ Cauchy라고 하자. Cauchy 조건으로 첨자 $$n_k$$를 증가하도록 선택하여

$$
\|f_{n_{k+1}}-f_{n_k}\|_1\le2^{-k}\qquad(k\ge1)
$$

가 되게 할 수 있다. 각 단계에서 $$2^{-k}$$를 오차로 주고 그 조건을 만족하는 충분히 뒤의 첨자를 선택하면 된다. $$2^{-k}$$의 특별한 값보다 중요한 것은 이 bound들의 합이 유한하다는 사실이다.

이제 비음수 함수

$$
g=|f_{n_1}|+\sum_{k=1}^{\infty}|f_{n_{k+1}}-f_{n_k}|
$$

를 생각한다. 부분합은 증가하므로 MCT 또는 비음수 급수의 적분 성질에 의해

$$
\begin{align*}
 \int g
 &=\|f_{n_1}\|_1+\sum_{k=1}^{\infty}\|f_{n_{k+1}}-f_{n_k}\|_1\\
 &\le\|f_{n_1}\|_1+\sum_{k=1}^{\infty}2^{-k}<\infty.
\end{align*}
$$

따라서 $$g$$는 a.e. 유한하다. 그런 점에서는 다음 급수가 절대수렴하므로

$$
f=f_{n_1}+\sum_{k=1}^{\infty}(f_{n_{k+1}}-f_{n_k})
$$

로 정의할 수 있다. 나머지 영집합에서는 $$f=0$$으로 정한다. 먼저 $$g$$의 유한성을 확보한 뒤 $$f$$의 급수 수렴을 얻는 순서가 중요하다. $$\vert f\vert \le g$$ a.e.이므로 $$f\in L^1$$다.

위 급수에서 $$k-1$$번째 차이까지 더하면

$$
f_{n_1}+\sum_{j=1}^{k-1}(f_{n_{j+1}}-f_{n_j})=f_{n_k}
$$

라는 telescoping이 일어난다. 따라서 $$f_{n_k}\to f$$ a.e.이고,

$$
|f-f_{n_k}|\le\sum_{j=k}^{\infty}|f_{n_{j+1}}-f_{n_j}|\le g
$$

다. DCT를 적용하여 $$\|f_{n_k}-f\|_1\to0$$을 얻는다. A.e. 수렴만이 아니라 원하는 norm 수렴까지 얻었다.

<span id="l09:riesz-final"></span>

아직 부분수열만 수렴시켰으므로 증명이 끝난 것은 아니다. 원래 수열이 Cauchy라는 가정을 다시 사용한다. 주어진 $$\epsilon>0$$에 대하여

$$
\|f_n-f_m\|_1<\epsilon/2\quad(n,m\ge N_0)
$$

가 되도록 $$N_0$$를 잡는다. $$n_k\ge N_0$$이면서 $$\|f_{n_k}-f\|_1<\epsilon/2$$가 되게 $$k$$를 고정하면 모든 $$n\ge N_0$$에 대하여

$$
\|f_n-f\|_1\le\|f_n-f_{n_k}\|_1+\|f_{n_k}-f\|_1<\epsilon.
$$

따라서 원래 수열도 $$f$$로 수렴하고 $$L^1$$의 completeness가 증명된다.

</div>

이 증명은 빠른 부분수열, 합이 유한한 차이들의 급수, DCT, 마지막 Cauchy 비교라는 네 연결로 이루어진다. 다음에는 이 공간에서 단순하고 다루기 쉬운 함수들이 얼마나 많은 함수를 근사할 수 있는지 살펴본다.

**$$L^1$$ 수렴과 a.e. 수렴**

<span id="l10:subsequence"></span>

Riesz--Fischer 정리에서 원래 수열 전체가 점별로 수렴한다고 가정하지 않았다. 대신 적분한 차이가 충분히 빠르게 작아지는 부분수열을 선택했고, 그 부분수열은 a.e. 수렴했다. 이 관찰은 다음 결과를 준다.

<div class="real-analysis-statement" markdown="1">

**Corollary 2.3.**

$$f_n\to f$$ in $$L^1$$이면 어떤 부분수열 $$f_{n_k}$$가 있어서 $$f_{n_k}\to f$$ a.e.다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\|f_{n_k}-f\|_1\le2^{-k}$$가 되도록 부분수열을 선택한다. 비음수 급수의 적분 성질로

$$
\int\sum_{k=1}^{\infty}|f_{n_k}-f|
 =\sum_{k=1}^{\infty}\|f_{n_k}-f\|_1\le1.
$$

따라서 급수가 a.e. 유한하며, 수렴하는 급수의 항은 0으로 가므로 $$\vert f_{n_k}-f\vert \to0$$ a.e.다.

</div>

이 결과는 전체 수열의 점별수렴을 주장하지 않는다. $$L^1$$ norm이 측정하는 것은 점별 차이가 아니라 전체 절대오차의 적분이다.

**근사하기 좋은 함수들이 dense하다**

<span id="l10:density"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Density in $$L^1$$).**

적분가능 함수들의 모임 $$\mathcal F$$가 $$L^1$$에서 dense하다는 것은 모든 $$f\in L^1$$와 모든 $$\epsilon>0$$에 대하여 $$g\in\mathcal F$$를 찾아

$$
\|f-g\|_1<\epsilon
$$

이 되게 할 수 있다는 뜻이다.

</div>

Metric의 관점에서 보면 임의의 점 $$f$$ 주위의 작은 공마다 $$\mathcal F$$의 원소가 있다는 뜻이다. 집합이나 함수를 거의 같게 만드는 것이 아니라, 지정한 $$L^1$$ 거리로 가까워져야 한다.

<div class="real-analysis-statement" markdown="1">

**Theorem 2.4.**

다음 세 모임은 $$L^1(\mathbb R^d)$$에서 dense하다.

<ol type="i" markdown="1">

<li markdown="1">

적분가능한 simple functions.

</li>

<li markdown="1">

Step functions, 즉 유계 직육면체의 characteristic functions의 유한 선형결합.

</li>

<li markdown="1">

$$C_c^0(\mathbb R^d)$$, 즉 어떤 compact 집합에 지지된 continuous 함수들.

</li>

</ol>

</div>

여기서 compact support라는 관용적 표현은 $$\{f\ne0\}$$의 closure가 compact하다는 뜻, 즉 어떤 compact 집합 밖에서 $$f=0$$이라는 뜻이다. 앞에서 $$\operatorname{supp} f=\{f\ne0\}$$로 정한 표기와 혼동하지 말자.

Step functions는 simple functions보다 제한된 모임인데도 모든 $$L^1$$ 함수를 근사한다. 더 나아가 불연속인 함수를 continuous 함수로도 $$L^1$$에서 근사할 수 있다. 이는 원래 함수가 continuous하다는 말과 다르다. Smooth compactly supported 함수의 density로도 나아갈 수 있지만, 여기서는 위 세 모임을 다룬다.

<span id="l10:simple"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$f=f_+-f_-$$로 나누고 필요하면 실수부와 허수부도 나누면 되므로 먼저 $$f\ge0$$라 하자. 각 성분을 충분히 작은 오차로 근사하고 다시 합하면 원래 함수의 근사를 얻는다.

첫째, measurable 함수의 simple approximation으로 $$0\le\varphi_k\nearrow f$$인 simple functions를 고른다. 점별수렴만으로는 density가 증명되지 않는다. 필요한 norm 수렴은 MCT와 $$\int f<\infty$$에서 나온다.

$$
\|f-\varphi_k\|_1=\int(f-\varphi_k)=\int f-\int\varphi_k\longrightarrow0.
$$

또는 $$\vert f-\varphi_k\vert \le f\in L^1$$이므로 DCT를 적용할 수도 있다. 일반적인 $$f$$가 유계라는 가정은 없으므로 이 단계에서는 BCT를 그대로 적용할 수 없다.

<span id="l10:step"></span>

둘째, 첫 결과에 의해 simple function만 step function으로 근사하면 된다. Simple function은 유한 선형결합이므로, $$m(E)<\infty$$인 하나의 $$\rchi_E$$를 근사하는 문제로 줄어든다. Measure의 근사 성질에 따라 유한 개의 거의 서로소인 유계 직육면체 $$R_1,\ldots,R_M$$를 찾아

$$
m\left(E\mathbin\triangle\bigcup_{j=1}^{M}R_j\right)<\epsilon
$$

이 되게 할 수 있다. $$U=\bigcup_jR_j$$라 하면

$$
|\rchi_E-\rchi_U|=\rchi_{E\triangle U},
 \qquad\|\rchi_E-\rchi_U\|_1=m(E\triangle U)<\epsilon.
$$

두 characteristic functions는 교집합에서는 모두 1, 합집합 바깥에서는 모두 0이므로 차이는 symmetric difference에서만 보인다. 거의 서로소인 직육면체의 경계 겹침은 영집합이어서 $$\rchi_U$$는 $$\sum_j\rchi_{R_j}$$와 $$L^1$$에서 같다. 따라서 원하는 step approximation을 얻는다. 유한 선형결합의 각 항을 계수까지 고려하여 충분히 작은 오차로 근사하면 simple function 전체도 근사된다.

<span id="l10:continuous"></span>

셋째, 이제 하나의 직육면체

$$
R=\prod_{j=1}^{d}[a_j,b_j]
$$

의 characteristic function만 continuous 함수로 근사하면 된다. 먼저 일차원 구간 $$[a_j,b_j]$$에서 1이고, $$[a_j-\delta,b_j+\delta]$$ 밖에서 0이며, 양쪽 길이 $$\delta$$ 구간에서는 선형으로 이어지는 함수 $$g_{j,\delta}$$를 잡는다. $$0\le g_{j,\delta}\le1$$이고 그 차이의 적분은 양 끝의 작은 삼각형 두 개의 넓이다. 따라서 $$\|g_{j,\delta}-\rchi_{[a_j,b_j]}\|_1\to0$$이다.

여러 변수에서는

$$
G_\delta(x)=\prod_{j=1}^{d}g_{j,\delta}(x_j)
$$

로 둔다. 이 함수는 continuous이고 compact 집합에 지지되며 $$R$$에서는 1이다. 차이는 바깥의 얇은 직육면체 영역에만 있고 높이가 1 이하이므로

$$
\begin{align*}
 \|G_\delta-\rchi_R\|_1
 &\le m\left(\prod_{j=1}^{d}[a_j-\delta,b_j+\delta]\right)-m(R)\\
 &=\prod_{j=1}^{d}(b_j-a_j+2\delta)-\prod_{j=1}^{d}(b_j-a_j)
 \longrightarrow0.
\end{align*}
$$

이 추정은 각 변수의 오차를 곱하는 것이 아니라, 함수가 달라지는 전체 영역의 measure를 제어한다. 유한 선형결합을 취하면 step function에 대한 근사를 얻고, 앞의 두 근사와 triangle inequality를 결합하면 일반 $$f$$에 대한 결과가 나온다.

</div>

어려운 함수에 관한 명제를 먼저 좋은 함수에서 증명하고, norm 오차를 제어하여 일반 함수로 옮기는 것이 density의 주요 용도다.

**Translation, dilation, reflection**

<span id="l10:invariance"></span>

$$f\in L^1(\mathbb R^d)$$이고 $$h\in\mathbb R^d$$이면 translation을

$$
f_h(x)=f(x-h)
$$

로 정의한다. 함수의 모양을 옮길 뿐 높이나 전체 부피를 바꾸지 않으므로

$$
\int f_h=\int f,\qquad\|f_h\|_1=\|f\|_1
$$

이다. 이 성질은 characteristic function에서 $$m(E+h)=m(E)$$로 확인되고, simple approximation과 비음수 부분의 분해로 일반 적분가능 함수에 확장된다.

마찬가지로 $$\delta>0$$일 때 measure의 dilation 성질과 reflection 성질로

$$
\delta^d\int_{\mathbb R^d}f(\delta x)\,dx=\int_{\mathbb R^d}f(x)\,dx,
 \qquad\int_{\mathbb R^d}f(-x)\,dx=\int_{\mathbb R^d}f(x)\,dx.
$$

두 변환으로 얻은 함수도 적분가능하다. Dilation에서는 각 방향의 길이가 바뀌므로 $$d$$차원 부피의 계수 $$\delta^d$$가 생긴다. Reflection은 전체 적분을 바꾸지 않는다.

<span id="l10:convolution"></span>

이 성질은 convolution에서 바로 쓰인다. 고정된 $$x$$에 대해 $$y\mapsto f(x-y)g(y)$$가 적분가능하다고 하자. $$z=x-y$$로 바꾸는 것은 reflection과 translation의 결합이므로

$$
\int_{\mathbb R^d}f(x-y)g(y)\,dy
 =\int_{\mathbb R^d}f(z)g(x-z)\,dz.
$$

이때

$$
(f*g)(x):=\int_{\mathbb R^d}f(x-y)g(y)\,dy
$$

를 convolution이라 한다. 위 식은 적분이 정의되는 점에서 $$(f*g)(x)=(g*f)(x)$$임을 보여 준다. 여기서는 우선 고정된 $$x$$에서 적분가능하다는 조건 아래 이 대칭성을 확인한 것이다.

**Translation의 $$L^1$$ 연속성**

<span id="l10:translation"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.5.**

$$f\in L^1(\mathbb R^d)$$이면

$$
\|f_h-f\|_1\longrightarrow0\qquad(h\to0).
$$

즉 $$T_hf=f_h$$라 하면 고정된 $$f$$에 대해 $$h\mapsto T_hf$$가 $$h=0$$에서 $$L^1$$ norm으로 continuous하다.

</div>

$$f$$ 자체는 discontinuous일 수 있으며, translation한 함수도 그런 불연속성을 그대로 가질 수 있다. 여기서 연속성은 함수값 $$f(x)$$의 연속성이 아니라, $$h$$를 조금 움직였을 때 함수 전체가 $$L^1$$ 거리로 조금 변한다는 뜻이다. 또한 각 고정된 $$h$$에 대해 $$T_h$$는 $$L^1$$의 isometry라는 사실과도 구별하자.

<span id="l10:translation-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\epsilon>0$$을 고정하고 density에 의해 $$g\in C_c^0$$를 택하여 $$\|f-g\|_1<\epsilon$$이 되게 한다. $$f$$와 그 translation을 직접 비교하기 어렵다면 $$g$$를 거쳐 가면 된다.

$$
\begin{align*}
 \|f_h-f\|_1
 &\le\|f_h-g_h\|_1+\|g_h-g\|_1+\|g-f\|_1\\
 &=2\|f-g\|_1+\|g_h-g\|_1.
\end{align*}
$$

첫째와 셋째 항이 같아지는 것은 translation invariance 때문이다.

이제 continuous 함수 $$g$$에 대한 가운데 항을 보자. $$g$$의 support를 포함하는 compact 집합 $$K$$를 고정하면, $$\vert h\vert \le1$$에서 $$g_h-g$$는 하나의 유계집합 $$K+\overline{B_1}$$에 지지된다. 또한

$$
|g(x-h)-g(x)|\le2\|g\|_\infty,
 \qquad g(x-h)\to g(x).
$$

따라서 $$h\to0$$인 임의의 수열에 BCT를 적용하면 $$\|g_h-g\|_1\to0$$이다. 공통 support가 유한 measure라는 조건을 여기서 확인했다. 같은 결론은 $$g$$의 uniform continuity와 공통 support의 유한 measure를 곱하여 직접 얻을 수도 있다. Monotonicity는 없으므로 MCT를 사용하는 상황은 아니다.

충분히 작은 $$\vert h\vert $$에서 가운데 항이 $$\epsilon$$보다 작아져 $$\|f_h-f\|_1<3\epsilon$$이다. $$\epsilon$$이 임의이므로 결론이 성립한다.

</div>

{% endraw %}

<!-- prettier-ignore-end -->

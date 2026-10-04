---
layout: post
title: "Real Analysis 5: The Lebesgue Integral"
date: 2026-03-27 12:00:00 +0900
description: "단순함수에서 일반 가측함수까지 르베그 적분을 구성하고 주요 수렴정리를 증명한다."
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

## 2. Integration Theory

### 2.1. The Lebesgue integral: basic properties and convergence theorems

<span id="l07:roadmap"></span>

집합의 크기를 재는 measure를 만들었으니 이제 함수의 적분을 정의할 차례다. 높이가 일정한 함수의 적분은 높이와 밑면의 measure를 곱하면 된다. 일반 함수는 이런 함수들로 근사하여 다룬다. 이 장에서는 Lebesgue 적분을 정의하고, 극한과 적분을 바꾸는 조건을 알아본 다음, 적분가능 함수들의 공간 $$L^1$$과 Fubini 정리를 공부한다. 이 장에서 다루는 함수는 별도의 언급이 없으면 모두 measurable하다.

정의는 네 단계로 진행한다. 먼저 유한 measure를 갖는 집합들의 characteristic function으로 이루어진 simple function을 다룬다. 다음에는 유한 measure인 집합 위에 지지된 유계함수로 확장한다. 세 번째로 비음수 함수를, 마지막으로 양수와 음수 값을 모두 가질 수 있는 적분가능 함수를 다룬다. 두 번째 단계의 집합은 compact일 필요가 없다. 유한 measure라는 조건과 유계집합이라는 조건도 서로 다르다.

**Simple functions와 canonical representation**

<span id="l07:simple"></span>

이 단계에서 simple function은

$$
\varphi=\sum_{k=1}^{N}a_k\rchi_{E_k},\qquad m(E_k)<\infty,
$$

와 같이 쓴다. $$\rchi_E$$는 $$E$$에서 $$1$$, 그 밖에서 $$0$$인 함수다. 같은 함수에도 여러 표현이 가능하다. 예를 들어 $$\rchi_A+\rchi_B$$는 $$A\setminus B$$와 $$B\setminus A$$에서 높이가 $$1$$이고, $$A\cap B$$에서는 높이가 $$2$$다. 겹치는 두 집합을 쓰는 표현과 겹치지 않는 세 집합을 쓰는 표현은 같은 함수를 나타낸다.

<div class="real-analysis-statement" markdown="1">

**Definition (Canonical representation과 적분).**

$$E_k$$들이 서로소이고, $$a_k$$들이 서로 다른 0이 아닌 값이면 위 표현을 canonical representation이라 한다. 이때

$$
\int_{\mathbb R^d}\varphi(x)\,dx:=\sum_{k=1}^{N}a_km(E_k)
$$

로 정의한다. 값이 $$0$$인 부분은 적분에 기여하지 않으므로 합에서 제외한다.

</div>

이 식은 높이와 밑면의 크기를 곱해서 더한다는 뜻이다. $$d=1$$에서도 적분 영역을 집합으로 표시하여 $$\int_{\mathbb R}\varphi$$라고 쓴다. $$\int\varphi\,dm$$, $$\int\varphi(x)\,dx$$, $$\int\varphi$$는 여기서 모두 Lebesgue measure에 대한 같은 적분이다. 영역을 생략하면 전체 공간에서 적분한다.

영역을 $$E$$로 제한하고 싶으면 함수에 $$\rchi_E$$를 곱한다.

$$
\int_E\varphi:=\int_{\mathbb R^d}\varphi\rchi_E.
$$

곱도 simple function이므로 이미 정의한 적분으로 해석할 수 있다. 특히 이 단계에서 $$m(E)<\infty$$인 영역을 적분할 수 있고, $$\varphi$$ 자체의 support가 유한 measure이므로 임의의 measurable $$E$$로 제한해도 같은 정의가 유효하다.

**표현에 의존하지 않는 적분과 기본 성질**

<span id="l07:properties"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

Simple functions $$\varphi,\psi$$와 실수 $$a,b$$에 대하여 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

어떤 표현 $$\varphi=\sum a_k\rchi_{E_k}$$을 사용해도 $$\int\varphi=\sum a_km(E_k)$$다.

</li>

<li markdown="1">

$$\int(a\varphi+b\psi)=a\int\varphi+b\int\psi$$다.

</li>

<li markdown="1">

$$E,F$$가 서로소이면 $$\int_{E\cup F}\varphi=\int_E\varphi+\int_F\varphi$$다.

</li>

<li markdown="1">

$$\varphi\le\psi$$이면 $$\int\varphi\le\int\psi$$다.

</li>

<li markdown="1">

$$\left\vert \int\varphi\right\vert \le\int\vert \varphi\vert $$다.

</li>

<li markdown="1">

$$\varphi=\psi$$ a.e.이면 $$\int\varphi=\int\psi$$다.

</li>

</ol>

</div>

<span id="l07:representation"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 첫 성질을 확인하자. 집합들이 겹치면 $$E_1\setminus E_2$$, $$E_1\cap E_2$$, $$E_2\setminus E_1$$로 나누듯, 각 집합에 속하는지 아닌지를 기준으로 $$\bigcup E_k$$를 유한 개의 서로소 measurable 집합으로 나눈다. 각 조각 $$D$$에서 함수값은 $$c_D=\sum_{k:D\subset E_k}a_k$$다. 유한 additivity에 의해

$$
\sum_k a_km(E_k)=\sum_D\Bigl(\sum_{k:D\subset E_k}a_k\Bigr)m(D)
 =\sum_Dc_Dm(D).
$$

따라서 집합들이 서로소인 표현으로 바꾸어도 이 합은 유지된다.

이제 서로소인 조각들 중 높이가 같은 조각들을 합친다. 서로 다른 0이 아닌 값들의 집합을 $$A$$라 하고

$$
E'_a=\bigcup_{k:a_k=a}E_k\quad(a\in A)
$$

라 두면 $$m(E'_a)=\sum_{k:a_k=a}m(E_k)$$다. $$\varphi=\sum_{a\in A}a\rchi_{E'_a}$$는 canonical representation이므로

$$
\int\varphi=\sum_{a\in A}a\,m(E'_a)=\sum_ka_km(E_k).
$$

이것이 표현 독립성이다. 함수의 표현을 바꾸었다고 그 아래의 부호 있는 부피가 바뀌어서는 안 된다는 요구를 확인한 셈이다.

두 simple function에 공통으로 적용되는 서로소 분할을 취하면 각 조각에서는 두 함수가 상수다. 따라서 유한합의 선형성으로 (ii)가 나오고, $$\rchi_{E\cup F}=\rchi_E+\rchi_F$$로 (iii)가 나온다. $$\psi-\varphi\ge0$$이면 그 적분은 비음수이므로 (iv)가 성립한다. 또 $$-\vert \varphi\vert \le\varphi\le\vert \varphi\vert $$에 (iv)를 적용하면 (v)를 얻는다. 마지막으로 $$\varphi-\psi$$가 0이 아닌 집합의 measure가 0이면 그 simple function을 적분할 때 모든 항이 0이므로 (vi)가 성립한다.

</div>

**유한 measure인 집합에 지지된 유계함수**

<span id="l07:support"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Support).**

이 강의에서는 $$\operatorname{supp} f=\{x:f(x)\ne0\}$$라 한다. $$f$$가 $$E$$에 지지되어 있다는 것은 $$x\notin E$$에서 $$f(x)=0$$이라는 뜻이다. $$E$$에 a.e. 지지되어 있다는 것은

$$
m\bigl(\{x\notin E:f(x)\ne0\}\bigr)=0
$$

이라는 뜻이다.

</div>

여기서는 $$\{f\ne0\}$$의 closure를 취하지 않는다. 다른 문맥에서 support를 closed set으로 정의하기도 하므로 어느 정의를 쓰는지 구별해야 한다. 지금 필요한 것은 topology보다 $$m(E)<\infty$$라는 조건이다. 멀리 떨어진 작은 집합들의 합처럼, 유계가 아니면서 유한 measure를 갖는 집합도 허용한다.

<span id="l07:approximation"></span>

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2.**

$$f$$가 유계이고 $$m(E)<\infty$$인 measurable 집합 $$E$$에 지지되어 있다고 하자. Simple functions $$\varphi_n$$이 모두 $$E$$에 지지되고, 하나의 상수 $$M$$에 대하여 $$\vert \varphi_n\vert \le M$$이며, $$\varphi_n\to f$$ a.e.라고 하자. 그러면 $$\lim_n\int\varphi_n$$이 유한한 실수로 존재한다. 특히 $$f=0$$ a.e.이면 이 극한은 0이다.

</div>

왜 이 보조정리가 필요한가? 아직 $$f$$의 적분은 정의하지 않았지만 각 $$\varphi_n$$의 적분은 알고 있다. 이 적분값들의 극한이 존재하면 그 극한을 $$f$$의 적분으로 삼을 수 있다. 먼저 실수의 completeness를 이용하여 극한의 존재를 증명한다.

<span id="l07:lemma-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\{\int\varphi_n\}$$이 Cauchy임을 보이면 충분하다. $$\eta>0$$을 고정하자. Egorov 정리에 의해 measurable 집합 $$A\subset E$$를 택하여

$$
m(E\setminus A)<\eta,\qquad \varphi_n\rightrightarrows f\quad\text{on }A
$$

가 되게 할 수 있다. Uniform convergence는 uniform Cauchy 조건을 주므로 충분히 큰 $$n,m$$에 대하여 $$A$$ 전체에서 $$\vert \varphi_n-\varphi_m\vert <\eta$$다. 이에 따라

$$
\begin{align*}
 \left|\int\varphi_n-\int\varphi_m\right|
 &\le\int_E|\varphi_n-\varphi_m|\\
 &=\int_A|\varphi_n-\varphi_m|+\int_{E\setminus A}|\varphi_n-\varphi_m|\\
 &\le\eta m(E)+2M\eta.
\end{align*}
$$

좋은 집합 $$A$$에서는 함수 차이 자체가 작고, 나머지 집합에서는 함수 차이가 $$2M$$ 이하이며 집합의 measure가 작다. 두 조건이 서로 다른 부분을 담당한다. $$m(E)+2M$$은 $$n,m,\eta$$에 무관한 유한 상수이므로, 주어진 오차 $$\epsilon$$보다 작아지도록 $$\eta$$를 정할 수 있다. 따라서 적분값들은 Cauchy다.

<span id="l07:lemma-zero"></span>

$$f=0$$ a.e.인 경우에는 같은 $$A$$에서 충분히 큰 $$n$$에 대하여 $$\vert \varphi_n\vert <\eta$$다. 따라서

$$
\left|\int\varphi_n\right|\le\int_A|\varphi_n|+\int_{E\setminus A}|\varphi_n|
 \le\eta m(E)+M\eta\longrightarrow0
$$

라는 오차 추정을 얻는다. 여기서 마지막 의미는 $$\eta$$를 임의로 작게 잡을 수 있다는 것이다.

</div>

<span id="l07:bounded-integral"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (두 번째 단계의 적분).**

$$f$$가 유계이고 유한 measure인 집합에 지지되어 있으면, 위 조건을 만족하는 simple functions $$\varphi_n\to f$$를 택하여

$$
\int f:=\lim_{n\to\infty}\int\varphi_n
$$

로 정의한다.

</div>

이런 근사수열은 measurable 함수의 simple approximation에서 얻는다. 유계함수의 값들을 잘게 나누면 동일한 유계성과 support 조건을 유지할 수 있다.

극한이 존재한다는 것과 정의가 well-defined라는 것은 다른 문제다. 다른 근사 $$\psi_n\to f$$를 택했을 때 같은 값이 나오는지도 확인해야 한다. 두 수열의 bound를 $$M_1,M_2$$라 하면 $$\eta_n=\varphi_n-\psi_n$$은 $$M_1+M_2$$로 유계이고 동일한 유한 measure 집합에 지지되며 0으로 a.e. 수렴한다. 보조정리의 두 번째 결론에 따라

$$
0=\lim_n\int\eta_n=\lim_n\int\varphi_n-\lim_n\int\psi_n.
$$

따라서 적분은 근사수열에 의존하지 않는다.

<span id="l07:bounded-properties"></span>

영역 적분도 $$\int_Ef:=\int f\rchi_E$$로 정의한다. Simple functions에서 증명한 선형성, 영역의 additivity, monotonicity, triangle inequality와 a.e. 불변성은 이 단계에서도 성립한다. 실제로 두 함수를 동시에 simple functions로 근사하고 이미 증명한 식에 극한을 취하면 된다. 비음수 함수는 비음수 simple functions로 근사할 수 있으므로 적분도 비음수이고, 이를 함수의 차이에 적용하여 monotonicity를 얻는다.

**Bounded convergence theorem**

<span id="l07:bct"></span>

이제 $$f_n\to f$$ a.e.이면 $$\int f_n\to\int f$$라고 말할 수 있을까? 각 적분이 정의되어 있다는 사실만으로 적분값들의 극한이 존재하는 것은 아니다. 예를 들어 $$m(E)>0$$일 때 $$n\rchi_E$$의 적분은 $$nm(E)$$로 증가한다. 이는 유한한 함수로 수렴하는 예도 아니지만, 적분값의 존재와 수렴은 별도로 확인해야 함을 보여 준다. 점별극한이 존재하더라도 적분과의 교환에는 추가 조건이 필요하다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.4. Bounded convergence theorem (BCT).**

$$m(E)<\infty$$이고 모든 $$f_n$$이 $$E$$에 지지되어 있으며, $$n$$에 무관한 $$M<\infty$$에 대하여 $$\vert f_n\vert \le M$$이라고 하자. $$f_n\to f$$ a.e.이면 $$f$$는 measurable하고 $$\vert f\vert \le M$$ a.e.이며 $$E$$에 a.e. 지지된다. 또한

$$
\int|f_n-f|\longrightarrow0,
 \qquad \int f_n\longrightarrow\int f.
$$

</div>

$$f$$는 예외적인 영집합 위에서 값을 0으로 정하여 이 단계의 유계함수로 볼 수 있다. A.e. 불변성에 의해 적분값은 바뀌지 않는다. 하나의 상수 $$M$$과 하나의 집합 $$E$$가 모든 $$n$$에 동시에 적용된다는 점이 핵심이다.

<span id="l07:bct-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Measurability는 measurable 함수의 a.e. 극한 성질에서, bound와 support는 극한이 존재하는 점에서 바로 얻는다. Egorov 정리로 $$m(E\setminus A)<\eta$$이고 $$A$$에서 uniform convergence가 성립하도록 잡으면, 충분히 큰 $$n$$에서

$$
\int|f_n-f|\le\eta m(E)+2M\eta.
$$

보조정리와 같은 두 부분의 추정이다. $$\eta$$를 임의로 작게 할 수 있으므로 첫 극한이 성립한다. 그리고

$$
\left|\int f_n-\int f\right|\le\int|f_n-f|
$$

이므로 두 번째 극한도 성립한다. 절댓값을 먼저 취한 적분의 수렴이 부호 있는 적분값의 수렴보다 강한 결론이다.

</div>

<span id="l07:zero"></span>

<div class="real-analysis-statement" markdown="1">

**적분이 0인 비음수 함수.**

$$0\le f\le M$$, $$m(\operatorname{supp} f)<\infty$$이고 $$\int f=0$$이면 $$f=0$$ a.e.다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E_k=\{x:f(x)\ge1/k\}$$라 두자. 모든 점에서 $$k^{-1}\rchi_{E_k}\le f$$이므로

$$
0\le\frac1k m(E_k)\le\int f=0.
$$

따라서 모든 $$E_k$$가 영집합이다. 양수 $$f(x)$$가 아무리 작아도 충분히 큰 $$k$$에 대하여 $$1/k\le f(x)$$이므로

$$
\{f>0\}=\bigcup_{k=1}^{\infty}E_k,
 \qquad m(\{f>0\})\le\sum_{k=1}^{\infty}m(E_k)=0.
$$

</div>

비음수 continuous 함수가 열린 영역의 한 점에서 양수이면 주변에서도 양수이므로 적분이 양수가 된다. Lebesgue 적분에서는 영집합 위의 값이 보이지 않기 때문에 일반 measurable 함수의 결론은 어디서나 0이라는 말보다 약한 a.e. 결론이다.

<span id="l07:next"></span>

이제 simple functions에서 출발한 적분을 유계함수까지 확장했다. 다음 단계에서는 함수가 위로 유계일 필요도, support의 measure가 유한할 필요도 없도록 비음수 함수를 다룬다.

<span id="l08:review"></span>

적분과 극한을 언제 바꿀 수 있는가라는 질문을 계속 생각하자. BCT에서는 유한 measure인 하나의 집합에 모든 함수가 지지되어 있고, 모든 함수를 동시에 제어하는 유한 상수가 있다는 조건이 중요했다. 이번에는 먼저 Lebesgue 적분이 Riemann 적분을 실제로 확장한다는 것을 확인하고, 비음수 함수로 정의를 넓힌다. 조건이 약해지면 어떤 결론이 남는지도 살펴본다.

**Riemann 적분과의 일치**

<span id="l08:riemann"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.5.**

$$f$$가 $$[a,b]$$에서 Riemann 적분가능하면 $$f$$는 measurable하고 Lebesgue 적분가능하며,

$$
\int_a^b f(x)\,dx=\int_{[a,b]}f(x)\,dx
$$

다. 왼쪽은 Riemann 적분, 오른쪽은 Lebesgue 적분이다.

</div>

유계구간의 Riemann 적분가능 함수는 정의상 유계다. 그러나 아직 measurability를 가정할 수는 없다. 먼저 step functions로 위와 아래에서 끼우고 두 극한이 a.e. 같음을 보임으로써 measurability와 적분의 일치를 함께 얻는다.

<span id="l08:riemann-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Upper sum과 lower sum의 차이가 0으로 가도록 분할을 잡고, 분할들을 차례로 공통 세분하면 step functions $$\varphi_k,\psi_k$$를 얻는다. 분할점의 값은 부등식이 유지되도록 정할 수 있고 적분값에는 영향을 주지 않는다. 이때

$$
\varphi_1\le\varphi_2\le\cdots\le f\le\cdots\le\psi_2\le\psi_1,
 \qquad |\varphi_k|,|\psi_k|\le M,
$$

$$
\lim_k\int_a^b\varphi_k=\int_a^bf=\lim_k\int_a^b\psi_k.
$$

Lower sum은 아래에서, upper sum은 위에서 같은 면적으로 접근한다. 높이가 무한히 커지는 근사를 쓸 이유가 없으므로 원래 함수의 bound $$M$$을 공통으로 사용할 수 있다.

Monotone하고 유계인 실수 수열은 수렴하므로

$$
\widetilde\varphi=\lim_k\varphi_k,
 \qquad\widetilde\psi=\lim_k\psi_k
$$

가 모든 점에서 존재하며 $$\widetilde\varphi\le f\le\widetilde\psi$$다. 두 극한은 measurable하다. Step function은 두 적분에서 같은 직사각형들의 합을 적분하므로

$$
\int_a^b\varphi_k=\int_{[a,b]}\varphi_k,
 \qquad\int_a^b\psi_k=\int_{[a,b]}\psi_k.
$$

이것은 일반 $$f$$에 대한 결론을 미리 쓰는 것이 아니라, 적분의 기본 재료에 대한 직접 확인이다.

BCT를 각각 적용하면

$$
\int_{[a,b]}\widetilde\varphi
 =\lim_k\int_{[a,b]}\varphi_k
 =\lim_k\int_{[a,b]}\psi_k
 =\int_{[a,b]}\widetilde\psi.
$$

따라서 $$\widetilde\psi-\widetilde\varphi\ge0$$의 적분이 0이다. 이 차이는 $$2M$$으로 유계이고 $$[a,b]$$에 지지되므로 앞의 결과에 따라 두 극한이 a.e. 같다. 사이에 있는 $$f$$도 그들과 a.e. 같고, Lebesgue measurability는 영집합에서 값을 바꾸어도 유지되므로 $$f$$가 measurable임을 얻는다. 이제 $$\varphi_k\to f$$ a.e.이므로 두 번째 단계의 정의에 의해

$$
\int_{[a,b]}f
 =\lim_k\int_{[a,b]}\varphi_k
 =\lim_k\int_a^b\varphi_k
 =\int_a^bf.
$$

</div>

핵심은 같은 step functions가 두 적분을 연결한다는 것이다. 역으로 모든 Lebesgue 적분가능 함수가 Riemann 적분가능한 것은 아니다. 예를 들어 $$[a,b]$$에서 유리수의 characteristic function은 Lebesgue 적분이 0이지만 모든 작은 구간에서 upper sum과 lower sum이 서로 달라 Riemann 적분가능하지 않다.

**세 번째 단계: 비음수 함수**

<span id="l08:nonnegative"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (비음수 함수의 Lebesgue 적분).**

Measurable 함수 $$f:\mathbb R^d\to[0,\infty]$$에 대하여

$$
\int f:=\sup\left\{\int g:0\le g\le f,\ g\text{가 유계 measurable 함수이며 }
 m(\operatorname{supp} g)<\infty\right\}
$$

로 정의한다. $$\int f<\infty$$이면 $$f$$가 적분가능하다고 한다. Measurable 집합 $$E$$에 대해서는

$$
\int_Ef:=\int f\rchi_E
$$

로 정의한다. $$f\rchi_E$$는 $$E$$ 위에서 $$f$$, 그 밖에서 0인 함수를 뜻하므로 $$f=\infty$$인 점에서도 모호하지 않다.

</div>

Supremum 안의 적분은 이미 두 번째 단계에서 정의되었다. 가능한 모든 아래쪽 근사 $$g$$의 적분을 계산하고 그 상한을 취한다. 이제 $$f$$는 유계일 필요가 없고 $$m(E)$$도 무한할 수 있다. 따라서 적분값도 $$+\infty$$일 수 있다. 비음수 함수의 적분이 정의되어 있다는 말과 그 함수가 적분가능하다는 말을 구별해야 한다. 전자는 확장실수 값까지 허용하고, 후자는 유한한 적분값을 요구한다. 정의할 때 $$g=0$$을 항상 허용하므로 supremum을 취하는 집합은 비어 있지 않다.

**비음수 적분의 성질**

<span id="l08:properties"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.6.**

비음수 measurable 함수 $$f,g$$에 대해 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

$$a,b\ge0$$이면 $$\int(af+bg)=a\int f+b\int g$$다. 0인 계수의 항은 0으로 해석한다.

</li>

<li markdown="1">

서로소 measurable 집합 $$E,F$$에 대해 $$\int_{E\cup F}f=\int_Ef+\int_Ff$$다.

</li>

<li markdown="1">

$$f\le g$$이면 $$\int f\le\int g$$다.

</li>

<li markdown="1">

$$g$$가 적분가능하고 $$0\le f\le g$$이면 $$f$$도 적분가능하다.

</li>

<li markdown="1">

$$\int f<\infty$$이면 $$f(x)<\infty$$ a.e.다.

</li>

<li markdown="1">

$$\int f=0$$이면 $$f=0$$ a.e.다.

</li>

</ol>

</div>

첫 두 단계에서는 유한합이나 극한의 선형성을 사용했다. 이번에는 supremum으로 정의했으므로, 선형성이 자동으로 따라온다고 생각해서는 안 된다. 서로 다른 두 아래쪽 근사를 더하는 방향과, 하나의 아래쪽 근사를 두 부분으로 나누는 방향을 따로 확인한다.

<span id="l08:linearity"></span>

<div class="real-analysis-proof" markdown="1">

*Proof (선형성의 증명).*

먼저 $$a,b>0$$이라 하자. 허용되는 근사 $$0\le\varphi\le f$$, $$0\le\psi\le g$$를 잡으면 $$a\varphi+b\psi$$도 유계이고 유한 measure 집합에 지지되므로

$$
\int(af+bg)\ge\int(a\varphi+b\psi)=a\int\varphi+b\int\psi.
$$

$$\varphi$$와 $$\psi$$ 각각에 대해 supremum을 취하면 $$\ge$$ 방향을 얻는다.

반대 방향에서는 $$0\le\eta\le af+bg$$인 허용 근사 하나를 잡는다. 이를 $$f$$ 아래의 부분과 $$g$$ 아래의 부분으로 나누려면

$$
\eta_1=\min\{f,\eta/a\},\qquad
 \eta_2=\frac{\eta-a\eta_1}{b}
$$

로 두면 된다. $$\eta_1\le\eta/a$$이므로 $$\eta_2\ge0$$다. $$f\le\eta/a$$인 점에서는 $$\eta_1=f$$이고 $$\eta_2=(\eta-af)/b\le g$$이며, $$f>\eta/a$$인 점에서는 $$\eta_1=\eta/a$$이고 $$\eta_2=0$$이다. 따라서

$$
0\le\eta_1\le f,\quad0\le\eta_2\le g,
 \quad\eta=a\eta_1+b\eta_2.
$$

또 $$\eta_1\le\eta/a$$, $$\eta_2\le\eta/b$$이므로 두 함수 모두 유계이고 $$\eta$$의 support에 지지된다. 이미 정의된 단계의 선형성을 적용하여

$$
\int\eta=a\int\eta_1+b\int\eta_2\le a\int f+b\int g.
$$

$$\eta$$에 대해 supremum을 취하면 $$\le$$ 방향을 얻는다. $$a=0$$ 또는 $$b=0$$인 경우에는 0인 항을 제거한다. 남은 양의 상수에 대한 $$\int(af)=a\int f$$는 허용 근사를 $$a$$배 하는 일대일 대응으로 확인한다.

</div>

Monotonicity는 $$f$$ 아래의 모든 허용 근사가 $$g$$ 아래의 근사이기도 하다는 데서 나온다. Additivity는 characteristic function의 합과 선형성에서, (iv)는 monotonicity에서 따른다.

<span id="l08:finite"></span>

<div class="real-analysis-proof" markdown="1">

*Proof (유한성 a.e.와 영적분의 증명).*

$$E_k=\{f\ge k\}$$라 두면

$$
k m(E_k)=\int k\rchi_{E_k}\le\int f<\infty.
$$

따라서 $$m(E_k)\le k^{-1}\int f\to0$$이다. $$E_k\searrow\{f=\infty\}$$이고 각 $$E_k$$는 유한 measure이므로 measure의 continuity from above에 의해

$$
m(\{f=\infty\})=\lim_km(E_k)=0.
$$

유한 적분을 가진 함수가 모든 점에서 유한할 필요는 없다. 예를 들어 $$(-1,1)$$에서 $$f(x)=\vert x\vert ^{-1/2}$$이고 $$f(0)=\infty$$라 두어도 적분은 유한하다. 예외적인 한 점은 적분값을 바꾸지 않는다.

한편 $$\int f=0$$이면 $$A_k=\{f\ge1/k\}$$에 대해 $$k^{-1}m(A_k)\le\int f=0$$이다. $$\{f>0\}=\bigcup_kA_k$$이므로 앞과 같은 countable subadditivity로 $$f=0$$ a.e.를 얻는다.

</div>

**점별수렴만으로 적분을 교환할 수 없는 이유**

<span id="l08:spike"></span>

비음수 조건은 모든 $$f_n$$에 공통인 아래쪽 bound를 준다. 이것만으로 $$f_n\to f$$ a.e.일 때 $$\int f_n\to\int f$$가 될까? 다음 함수를 보자.

$$
f_n=n\rchi_{(0,1/n)}.
$$

$$n=1$$일 때 폭과 높이가 각각 1이고, $$n$$이 커지면 폭은 $$1/n$$로 줄지만 높이는 $$n$$으로 커진다. 고정된 $$x>0$$에서는 결국 $$x>1/n$$이므로 $$f_n(x)=0$$이다. $$x\le0$$에서도 항상 0이므로 $$f_n\to0$$은 모든 점에서 성립한다. 그러나

$$
\int f_n=n\cdot\frac1n=1,
 \qquad \int\lim_nf_n=0.
$$

면적이 좁은 곳에 집중되면서 점별극한에서는 사라진다. BCT의 공통 상계가 없다는 점이 바로 드러난다.

**Fatou lemma**

<span id="l08:fatou"></span>

<div class="real-analysis-statement" markdown="1">

**Lemma 1.7. Fatou.**

$$f_n\ge0$$이고 $$f_n\to f$$ a.e.이면

$$
\int f\le\liminf_{n\to\infty}\int f_n.
$$

</div>

앞의 예에서는 왼쪽이 0, 오른쪽이 1이다. 등호는 실패했지만 이 방향의 부등식은 유지된다. 적분값 수열의 보통 극한은 존재하지 않을 수 있으므로 $$\lim$$ 대신 항상 확장실수로 정의되는 $$\liminf$$를 쓴다. 비음수라는 약한 조건만으로 적용할 수 있다는 점이 Fatou lemma의 장점이다.

<span id="l08:fatou-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$0\le g\le f$$인 유계 measurable 함수 $$g$$를 택하고 $$g$$가 유한 measure인 $$E$$에 지지된다고 하자. 목표는 $$\int g\le\liminf_n\int f_n$$을 보인 뒤 $$g$$에 대해 supremum을 취하는 것이다. 이를 위해

$$
g_n=\min\{g,f_n\}
$$

로 둔다. $$0\le g_n\le g$$이므로 공통 bound와 support가 있고, $$f_n\to f$$ 및 $$g\le f$$에 의해 $$g_n\to g$$ a.e.다. 따라서 BCT로 $$\int g_n\to\int g$$이다. 또 $$g_n\le f_n$$이므로

$$
\int g=\lim_n\int g_n=\liminf_n\int g_n
 \le\liminf_n\int f_n.
$$

모든 허용 $$g$$에 대해 성립하므로 supremum을 취하여 결론을 얻는다. 원래 수열에는 BCT를 적용하지 못했지만, 고정된 유계함수로 잘라낸 수열에는 적용할 수 있었다.

</div>

**Monotone convergence theorem과 비음수 급수**

<span id="l08:mct"></span>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.9. Monotone convergence theorem (MCT).**

$$0\le f_n\nearrow f$$ a.e.이면

$$
\lim_n\int f_n=\int f
$$

가 확장실수 의미에서 성립한다.

</div>

Fatou lemma의 조건에 monotonicity를 더하면 부등식이 등식으로 강해진다. 함수가 아래에서 증가하기 때문에 앞의 집중 예처럼 질량이 사라질 수 없다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

Measurability는 a.e. 극한 성질로 보장된다. $$f_n\le f$$이므로

$$
\limsup_n\int f_n\le\int f\le\liminf_n\int f_n,
$$

여기서 마지막 부등식은 Fatou lemma다. 항상 $$\liminf\le\limsup$$이므로 세 값이 같고 극한이 존재한다. 이 논증은 공통값이 무한인 경우도 포함한다.

</div>

<span id="l08:series"></span>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.10.**

모든 $$k$$에 대하여 $$a_k\ge0$$가 measurable이면

$$
\int\sum_{k=1}^{\infty}a_k(x)\,dx
 =\sum_{k=1}^{\infty}\int a_k(x)\,dx.
$$

공통값이 유한하면 $$\sum_ka_k(x)$$는 a.e. 수렴한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

부분합 $$s_n=\sum_{k=1}^{n}a_k$$는 비음수이고 $$s_n\nearrow s:=\sum_ka_k$$다. 유한합의 선형성과 MCT를 차례로 적용하면

$$
\int s=\lim_n\int s_n=\lim_n\sum_{k=1}^{n}\int a_k
 =\sum_{k=1}^{\infty}\int a_k.
$$

공통값이 유한하면 $$s$$가 적분가능하므로 $$s(x)<\infty$$ a.e.다. 비음수 항의 급수에서 이것은 바로 급수의 수렴이다.

</div>

이 등식도 한쪽이 무한이면 다른 쪽도 무한이라는 뜻을 포함한다. 이제 비음수 함수에 대한 정의와 극한 정리가 준비되었으므로, 다음에는 양수와 음수 부분을 분리하여 일반 함수의 적분을 정의한다.

{% endraw %}

<!-- prettier-ignore-end -->

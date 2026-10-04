---
layout: post
title: "Real Analysis 16: Linear Transformations and the Riesz Representation Theorem"
date: 2026-06-24 12:00:00 +0900
description: "유계 선형변환, 선형범함수, Riesz 표현정리와 adjoint를 정리한다."
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

### 4.5. Linear transformations

<span id="l23:bounded"></span>

Hilbert space 사이에서 $$T(af+bg)=aTf+bTg$$를 만족하는 사상을 linear operator라 한다. 무한 차원에서는 선형성만으로 연속성이 보장되지 않으므로 별도의 크기 조건이 필요하다.

<div class="real-analysis-statement" markdown="1">

**Definition (Bounded operator와 operator norm).**

$$T:H_1\to H_2$$에 대해 어떤 $$M<\infty$$가 존재하여 모든 $$f\in H_1$$에 대해 $$\|Tf\|_{H_2}\le M\|f\|_{H_1}$$이면 $$T$$는 **bounded**이다. 이때

$$
\|T\|=\inf\{M:\|Tf\|\le M\|f\|\text{ for all }f\}
=\sup_{\|f\|\le1}\|Tf\|
$$

를 operator norm이라 한다. $$H_1\ne\{0\}$$이면 이는 $$\sup_{f\ne0}\|Tf\|/\|f\|$$와 같다.

</div>

벡터의 norm과 연산자의 norm은 대상이 다르다. 앞의 norm은 벡터의 크기이고, 뒤의 norm은 단위 크기의 입력을 얼마나 크게 늘릴 수 있는지를 측정한다.

<div class="real-analysis-statement" markdown="1">

**Lemma 5.1.**

<span id="l23:operator-norm"></span>

Bounded linear operator에 대해

$$
\|T\|=\sup\{|(Tf,g)|:f\in H_1,\ g\in H_2,\ \|f\|,\|g\|\le1\}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Cauchy--Schwarz로 $$\vert (Tf,g)\vert \le\|T\|\|f\|\|g\|$$이므로 오른쪽은 $$\|T\|$$ 이하이다. 반대로 $$f\ne0$$이고 $$Tf\ne0$$이면 $$f'=f/\|f\|$$, $$g'=Tf/\|Tf\|$$를 넣어

$$
|(Tf',g')|=\frac{\|Tf\|}{\|f\|}
$$

를 얻는다. Supremum을 취하면 반대 부등식이 나온다. $$Tf=0$$인 경우의 비율은 0이므로 따로 나눌 필요가 없다.

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 5.2.**

<span id="l23:continuity"></span>

Linear operator는 bounded일 필요충분조건으로 continuous이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Bounded이면 $$\|Tf_n-Tf\|\le\|T\|\|f_n-f\|$$이므로 연속이다. 반대로 연속인데 bounded가 아니라고 하자. 각 $$n$$에 대해 $$f_n\ne0$$을 골라 $$\|Tf_n\|\ge n\|f_n\|$$로 만들 수 있다. 그러면

$$
u_n=\frac{f_n}{n\|f_n\|},\qquad \|u_n\|=1/n\longrightarrow0,
\quad \|Tu_n\|\ge1.
$$

이는 0에서의 연속성에 모순이다. 선형성에 의해 0에서의 연속성이 모든 점에서의 연속성과 동치이다.

</div>

유한 차원에서는 모든 linear operator가 연속이다. 무한 차원에서 이 성질을 유지하려면 boundedness를 확인해야 한다. 이하에서는 명시적으로 달리 말하지 않는 한 bounded linear operator를 다룬다.

#### 4.5.1. Linear functionals and the Riesz representation theorem

<span id="l23:riesz"></span>

스칼라 값을 내는 linear operator $$\ell:H\to\mathbb C$$를 **linear functional**이라 한다. 고정한 $$g$$에 대한 $$f\mapsto(f,g)$$는 그 예이며 Cauchy--Schwarz로 bounded이다. Riesz representation theorem은 이것이 모든 continuous linear functional을 설명한다고 말한다.

<div class="real-analysis-statement" markdown="1">

**Theorem 5.3: Riesz.**

Continuous linear functional $$\ell$$에 대해 유일한 $$g\in H$$가 존재하여

$$
\ell(f)=(f,g)\quad\text{for all }f\in H,
\qquad \|\ell\|=\|g\|
$$

이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$S=\ker\ell$$은 $$\ell$$의 연속성에 의해 closed subspace이다. $$\ell=0$$이면 $$g=0$$으로 된다. 그렇지 않으면 $$S\ne H$$이므로 $$S^\perp$$에서 $$h\ne0$$을 고를 수 있다. $$h\in\ker\ell$$까지 만족하면 $$h\in S\cap S^\perp$$가 되므로 $$\ell(h)\ne0$$이다.

왜 $$S^\perp$$를 보는가? $$S$$ 방향으로 입력을 움직여도 $$\ell$$의 값은 바뀌지 않으므로, 이를 inner product로 표현하는 벡터는 $$S$$와 orthogonal이어야 한다. 이를 계산으로 구현하기 위해 임의의 $$f$$에 대해

$$
u=\ell(f)h-\ell(h)f
$$

를 만든다. 선형성으로 $$\ell(u)=0$$, 즉 $$u\in S$$이므로 $$(u,h)=0$$이다. 따라서

$$
\ell(f)\|h\|^2=\ell(h)(f,h),
\qquad g=\frac{\overline{\ell(h)}}{\|h\|^2}h
$$

로 놓으면 $$\ell(f)=(f,g)$$이다. 두 번째 인자가 conjugate-linear이므로 $$g$$의 계수에 conjugate가 붙는다.

두 벡터 $$g,\widetilde g$$가 같은 functional을 나타내면 $$(f,g-\widetilde g)=0$$ for all $$f$$이다. $$f=g-\widetilde g$$를 넣어 유일성을 얻는다. Cauchy--Schwarz로 $$\|\ell\|\le\|g\|$$이고, $$g\ne0$$이면 $$f=g/\|g\|$$를 넣어 등호를 얻는다. $$g=0$$일 때도 등호가 성립한다.

</div>

#### 4.5.2. Adjoints

<span id="l23:adjoint"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 5.4.**

Bounded linear operator $$T:H\to H$$에 대해 유일한 bounded linear operator $$T^*$$가 존재하여

$$
(Tf,g)=(f,T^*g),\qquad \|T^*\|=\|T\|,\qquad (T^*)^*=T
$$

를 만족한다. $$T^*$$를 $$T$$의 **adjoint**라 한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$g$$를 고정하면 $$\ell_g(f)=(Tf,g)$$는 $$\vert \ell_g(f)\vert \le\|T\|\|g\|\|f\|$$를 만족한다. Riesz 정리로 유일한 $$h_g$$가 존재하여 $$\ell_g(f)=(f,h_g)$$이다. $$T^*g=h_g$$로 정의한다. Riesz 정리의 norm 등식은 $$\|T^*g\|\le\|T\|\|g\|$$도 준다.

선형성을 확인할 때 두 번째 인자의 conjugate를 주의하자.

$$
(f,T^*(ag+bh))=(Tf,ag+bh)
=\overline a(Tf,g)+\overline b(Tf,h)
=(f,aT^*g+bT^*h).
$$

모든 $$f$$에 대해 같으므로 $$T^*(ag+bh)=aT^*g+bT^*h$$이다. 같은 논리로 adjoint의 유일성도 얻는다. Lemma 5.1을 두 번 사용하면

$$
\|T\|=\sup_{\|f\|,\|g\|\le1}|(Tf,g)|
=\sup_{\|f\|,\|g\|\le1}|(f,T^*g)|=\|T^*\|.
$$

마지막으로 $$(T^*f,g)=\overline{(g,T^*f)}=\overline{(Tg,f)}=(f,Tg)$$이므로 $$(T^*)^*=T$$이다.

</div>

같은 항등식으로 $$(ST)^*=T^*S^*$$를 얻는다. Composition의 순서가 뒤집힌다는 점이 뒤에서 finite-rank 근사를 adjoint로 옮길 때 쓰인다.

<div class="real-analysis-statement" markdown="1">

**Definition (Self-adjoint operator).**

$$T=T^*$$이면 $$T$$를 **symmetric**, **Hermitian**, 또는 **self-adjoint**라 한다.

</div>

여기서는 전 공간에 정의된 bounded operator를 다루므로 이 용어들을 같은 뜻으로 사용한다.

<div class="real-analysis-statement" markdown="1">

**Self-adjoint operator의 norm.**

<span id="l23:quadratic-norm"></span>

$$T=T^*$$이고 $$H\ne\{0\}$$이면

$$
\|T\|=\sup_{\|f\|=1}|(Tf,f)|.
$$

</div>

오른쪽을 $$M$$이라 하자. $$M\le\|T\|$$은 Cauchy--Schwarz로 나온다. 반대 방향이 핵심이다. $$q(h)=(Th,h)$$는 실수이고 $$\vert q(h)\vert \le M\|h\|^2$$이다. 직접 전개하면

$$
4\operatorname{Re}(Tf,g)=q(f+g)-q(f-g).
$$

$$\|f\|,\|g\|\le1$$일 때 parallelogram law를 사용하여

$$
|\operatorname{Re}(Tf,g)|\le\frac M4(\|f+g\|^2+\|f-g\|^2)\le M.
$$

$$g$$에 절댓값 1인 복소수를 곱하여 $$(Tf,g)$$가 음이 아닌 실수가 되게 할 수 있다. 그러면 $$\vert (Tf,g)\vert \le M$$이고 Lemma 5.1에 의해 $$\|T\|\le M$$이다. 이 결과가 spectral theorem의 eigenvalue를 찾는 출발점이다.

#### 4.5.3. Examples

**Hilbert--Schmidt operators**

<span id="l23:hilbert-schmidt"></span>

구체적인 integral operator를 보자. $$H=L^2(\mathbb R^d)$$에서 kernel $$K$$를 사용하여

$$
Tf(x)=\int_{\mathbb R^d}K(x,y)f(y)\,dy
$$

로 정의한다. 적분은 $$y$$에 대해 취하므로 결과는 $$x$$의 함수이다. Convolution은 kernel이 $$x-y$$에 의존하는 특별한 형태이고, 여기서는 두 변수에 일반적으로 의존하는 kernel을 생각한다. Kernel에 조건이 없으면 적분이 존재하는지조차 알 수 없다.

$$K\in L^2(\mathbb R^d\times\mathbb R^d)$$이면 이를 **Hilbert--Schmidt operator**라 한다. $$x,y$$가 각각 $$d$$차원 변수이므로 kernel의 정의역은 $$2d$$차원이다. Tonelli에 의해 거의 모든 $$x$$에서 $$K(x,\cdot)\in L^2$$이고 Cauchy--Schwarz로

$$
|Tf(x)|\le\left(\int|K(x,y)|^2\,dy\right)^{1/2}\|f\|_2.
$$

이 식을 제곱한 뒤 $$x$$에 대해 적분하면

$$
\|Tf\|_2^2\le\left(\iint|K(x,y)|^2\,dy\,dx\right)\|f\|_2^2,
\qquad \|T\|\le\|K\|_{L^2(\mathbb R^{2d})}.
$$

동시에 $$Tf$$가 a.e. 정의되고 $$L^2$$에 속한다는 사실도 얻는다. 적분의 measurability는 product-measurable integrand의 적분 성질로 따른다.

{% endraw %}

<!-- prettier-ignore-end -->

---
layout: post
title: "Real Analysis 9: Good Kernels and Approximation"
date: 2026-06-03 12:00:00 +0900
description: "좋은 커널과 항등원 근사, 합성곱을 통한 함수 근사를 다룬다."
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

### 3.2. Good kernels and approximations to the identity

<span id="l15:kernels"></span>

**가중 평균으로 함수를 복원하기**

공 위의 평균은 공 안의 모든 점에 같은 가중치를 주었다. 이제 원점 가까이에서 큰 가중치를 주고 멀리에서는 작은 가중치를 주는 kernel을 사용한다. 함수 $$f$$는 고정하고 kernel의 폭을 줄여 가면 원래 함수값을 복원할 수 있을까?

<div class="real-analysis-statement" markdown="1">

**Definition (Approximation to the identity).**

$$\{K_\delta\}_{\delta>0}\subset L^1(\mathbb R^d)$$가

$$
\int_{\mathbb R^d}K_\delta(x)\,dx=1,
 \qquad
 |K_\delta(x)|\le A\delta
 \min\left\{\delta^{-d-1},|x|^{-d-1}\right\}
$$

을 만족하면 approximation to the identity라 한다. $$A$$는 $$\delta,x$$에 무관하다. $$x=0$$에서는 첫 번째 상계 $$A\delta^{-d}$$를 사용한다.

</div>

첫 조건은 평균의 전체 가중치를 1로 맞춘다. 두 번째는 원점 근처에서는 높이를 $$A\delta^{-d}$$로 제한하고, 원점에서 멀어지면 $$A\delta\vert x\vert ^{-d-1}$$보다 빠르게 작아지도록 한다. $$\delta\downarrow0$$이면 이 상계의 중앙 부분은 높고 좁아지고, 고정된 $$x\ne0$$에서의 상계는 0으로 간다. 이 모양은 질량이 원점에 모이는 Dirac mass의 직관을 준다. 다만 이 직관을 보통의 적분 가능한 함수가 원점에서만 무한하다는 정의로 바꾸어 사용하지는 않는다. 위 조건만으로 $$K_\delta(0)$$ 자체가 반드시 발산한다고 말할 수도 없다.

이 조건이 이전의 good kernel 조건을 어떻게 포함하는지 보자. $$v_d=m(B(0,1))$$라 하면

$$
\int_{|x|\le\delta}|K_\delta|\le Av_d,
 \qquad
 \int_{|x|>\delta}|K_\delta|
 \le A\delta\int_{|x|>\delta}|x|^{-d-1}\,dx\le C.
$$

마지막 적분은 반지름별 annuli로 나누면 $$C/\delta$$ 이하이다. 따라서 $$\sup_\delta\|K_\delta\|_1<\infty$$이다. 또한 고정된 $$\eta>0$$에 대해

$$
\int_{|x|>\eta}|K_\delta(x)|\,dx\le C\delta/\eta\longrightarrow0.
$$

전체 질량은 일정하게 유지되면서 원점에서 떨어진 부분의 절대질량이 사라진다. 이것이 평균이 점별 값에 가까워지는 이유이다.

<div class="real-analysis-statement" markdown="1">

**Kernel의 예.**

<span id="l15:kernel-examples"></span>

<ol type="1" markdown="1">

<li markdown="1">

$$\varphi\ge0$$가 bounded이고 $$\overline{B(0,1)}$$에 support를 가지며 $$\int\varphi=1$$이면

$$
K_\delta(x)=\delta^{-d}\varphi(x/\delta)
$$

는 approximation to the identity이다. 변수변환 $$u=x/\delta$$로 적분이 1임을 확인한다. $$\vert x\vert \le\delta$$에서는 $$\delta^{-d}\|\varphi\|_\infty$$로 제어하고 그 밖에서는 0이다.

</li>

<li markdown="1">

일차원 Poisson kernel은

$$
P_\delta(x)=\frac1\pi\frac{\delta}{x^2+\delta^2}.
$$

분모를 각각 $$\delta^2$$와 $$x^2$$로 아래에서 제어하면 필요한 두 상계가 나온다. 적분은 $$x=\delta u$$로 치환하여 1임을 확인한다.

</li>

<li markdown="1">

Heat kernel은

$$
H_t(x)=(4\pi t)^{-d/2}e^{-|x|^2/(4t)},\qquad \delta=\sqrt t
$$

이다. Gaussian 적분으로 normalization을 얻고, $$u^{d+1}e^{-u^2/4}$$의 boundedness로 먼 곳에서의 상계를 얻는다.

</li>

<li markdown="1">

Fejér kernel을 $$[-\pi,\pi]$$ 밖에서 0으로 연장하면

$$
K_{1/N}(x)=\frac1{2\pi N}\frac{\sin^2(Nx/2)}{\sin^2(x/2)}
 \quad (|x|\le\pi)
$$

이다. $$x=0$$에서는 연속 연장값을 취한다. 이 kernel도 normalization과 $$C\min\{N,(Nx^2)^{-1}\}$$라는 상계를 가진다.

</li>

</ol>

</div>

Convolution은

$$
(f*K_\delta)(x)=\int_{\mathbb R^d}f(x-y)K_\delta(y)\,dy
$$

로 정의한다. $$\delta$$가 작아지면 $$y=0$$ 근처의 $$f(x-y)$$가 주로 기여하므로 $$f(x)$$에 가까워질 것이라고 예상한다. 그래서 함수에 작용하는 연산 $$f\mapsto f*K_\delta$$가 identity 연산 $$f\mapsto f$$를 근사한다는 이름을 쓴다.

**Lebesgue point에서의 convolution 수렴**

<span id="l15:kernel-convergence"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.1.**

$$f\in L^1(\mathbb R^d)$$이고 $$\{K_\delta\}$$가 approximation to the identity이면

$$
(f*K_\delta)(x)\longrightarrow f(x)\qquad(\delta\downarrow0)
$$

가 모든 Lebesgue point $$x$$에서 성립한다. 특히 거의 모든 점에서 성립한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 2.2.**

$$f\in L^1(\mathbb R^d)$$이고 $$x$$가 Lebesgue point이면

$$
A_x(r)=\frac1{r^d}\int_{|y|\le r}|f(x-y)-f(x)|\,dy\qquad(r>0)
$$

는 연속이고 bounded이며 $$r\downarrow0$$일 때 0으로 수렴한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

고정된 양의 반지름 근처에서는 적분 영역의 차이가 얇은 shell이고 그 measure는 0으로 간다. 적분의 absolute continuity로 분자의 연속성을 얻는다. 분모 $$r^d$$도 0이 아닌 연속 함수이므로 $$A_x$$가 연속이다. 또한 $$m(B(0,r))=v_dr^d$$이므로 Lebesgue point의 정의가 $$A_x(r)\to0$$을 준다. 따라서 작은 반지름에서 bounded이다. $$r\ge1$$에서는

$$
A_x(r)\le r^{-d}\|f\|_1+v_d|f(x)|\le\|f\|_1+v_d|f(x)|.
$$

이 부분에서 전 공간의 $$L^1$$ 가정이 쓰인다. Local integrability만으로는 큰 $$r$$에서의 boundedness를 얻을 수 없다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof (Theorem 2.1의 증명).*

$$\int K_\delta=1$$을 이용하면

$$
|(f*K_\delta)(x)-f(x)|
 \le\int|f(x-y)-f(x)|\,|K_\delta(y)|\,dy.
$$

가까운 부분 $$\vert y\vert \le\delta$$와 annuli $$2^k\delta<\vert y\vert \le2^{k+1}\delta$$로 나눈다. 가까운 부분에는 $$\vert K_\delta\vert \le A\delta^{-d}$$를 적용하여 $$AA_x(\delta)$$를 얻는다. $$k$$번째 annulus에서는

$$
\begin{align*}
 &\int_{2^k\delta<|y|\le2^{k+1}\delta}|f(x-y)-f(x)|\,|K_\delta(y)|\,dy\\
 &\quad\le\frac{A\delta}{(2^k\delta)^{d+1}}
 \int_{|y|\le2^{k+1}\delta}|f(x-y)-f(x)|\,dy
 =A2^d2^{-k}A_x(2^{k+1}\delta).
\end{align*}
$$

음이 아닌 적분을 disjoint한 영역으로 나눈 것이므로 countable additivity를 사용할 수 있다. 따라서

$$
|(f*K_\delta)(x)-f(x)|
 \le AA_x(\delta)+A2^d\sum_{k=0}^\infty2^{-k}A_x(2^{k+1}\delta).
$$

$$M=\sup_{r>0}A_x(r)<\infty$$라 하자. 먼저 $$N$$을 크게 잡아 $$M\sum_{k\ge N}2^{-k}$$를 작게 만든다. 이제 $$N$$은 고정되어 있으므로 $$\delta$$를 작게 하여 $$A_x(\delta),A_x(2\delta),\dots,A_x(2^N\delta)$$를 모두 작게 할 수 있다. 유한한 앞부분과 균일하게 작은 꼬리 부분을 합하면 전체가 0으로 수렴한다. $$k$$마다 극한이 0이라는 이유만으로 무한합과 극한을 바꾼 것이 아니라, boundedness와 summable한 $$2^{-k}$$가 그 교환을 정당화한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.3.**

<span id="l15:kernel-lone"></span>

$$f\in L^1$$이면 $$f*K_\delta\in L^1$$이고 $$\|f*K_\delta-f\|_1\to0$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Tonelli 정리로

$$
\int\!\int|f(x-y)K_\delta(y)|\,dy\,dx
 =\|f\|_1\|K_\delta\|_1<\infty
$$

이므로 convolution은 거의 모든 곳에서 정의되며 $$L^1$$에 속한다. 또한 normalization과 삼각부등식으로

$$
\|f*K_\delta-f\|_1
 \le\int|K_\delta(y)|\,\|f(\,\cdot-y)-f\|_1\,dy.
$$

$$L^1$$에서 translation은 연속이다. 이는 $$f$$를 $$C_c$$ 함수로 근사하고 그 함수의 uniform continuity와 bounded support를 사용하면 증명된다. 따라서 $$\vert y\vert <\eta$$에서는 오른쪽의 norm을 임의로 작게 할 수 있다. 이 부분은 $$\sup_\delta\|K_\delta\|_1<\infty$$로 제어된다. $$\vert y\vert \ge\eta$$에서는 그 norm이 $$2\|f\|_1$$ 이하이고 kernel의 꼬리 적분이 0으로 간다. 두 부분을 합하면 결론을 얻는다.

</div>

{% endraw %}

<!-- prettier-ignore-end -->

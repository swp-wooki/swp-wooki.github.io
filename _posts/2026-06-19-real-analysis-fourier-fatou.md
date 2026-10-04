---
layout: post
title: "Real Analysis 14: Fourier Series and Fatou's Theorem"
date: 2026-06-19 12:00:00 +0900
description: "Hilbert 공간 관점의 Fourier 급수와 Fatou 정리를 정리한다."
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

### 4.3. Fourier series and Fatou's theorem

<span id="l21:fourier"></span>

이제 추상적인 Hilbert space 이론을 Fourier series에 적용한다. Riemann 적분가능한 함수에 대해 사용했던 정의를 Lebesgue 적분가능한 함수로 넓힌다. Fourier coefficient 자체를 정의하려면 우선 $$f$$가 적분가능해야 한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Fourier coefficients와 Fourier series).**

$$f\in L^1[-\pi,\pi]$$에 대해

$$
a_n=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx\quad(n\in\mathbb Z),
\qquad f(x)\sim\sum_{n\in\mathbb Z}a_ne^{inx}
$$

로 정의한다.

</div>

$$e^{inx}=\cos nx+i\sin nx$$이므로 이 표현은 sine series와 cosine series를 한 식에 묶은 것이다. 그 변환은 Appendix의 [Fourier series 절](/blog/2026/real-analysis-complex-fourier-series/#app:fourier)에서 직접 계산한다. 기호 $$\sim$$는 coefficient로 만든 형식적 급수의 대응을 나타내며 아직 점별 수렴을 주장하지 않는다.

**$$L^2$$에서의 Fourier 정리**

<span id="l21:fourier-l2"></span>

유한 measure인 집합에서는 Cauchy--Schwarz에 의해 $$L^2\subset L^1$$이다. 특히

$$
\int_{-\pi}^{\pi}|f|\le(2\pi)^{1/2}\left(\int_{-\pi}^{\pi}|f|^2\right)^{1/2}.
$$

따라서 모든 $$L^2[-\pi,\pi]$$ 함수의 Fourier coefficients가 정의된다. 이 포함은 $$\mathbb R$$ 전체처럼 measure가 무한한 영역에서는 일반적으로 성립하지 않는다.

여기서는 inner product를

$$
(f,g)_{\mathbb T}=\frac1{2\pi}\int_{-\pi}^{\pi}f\overline g
$$

로 정규화한다. 그러면 $$e_n(x)=e^{inx}$$에 대해 $$(e_n,e_m)_{\mathbb T}=\delta_{nm}$$이다. 정규화하지 않은 적분을 쓴다면 $$e_n$$의 norm은 $$\sqrt{2\pi}$$이므로 이 계수를 빠뜨리면 안 된다.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.2.**

$$f\in L^2[-\pi,\pi]$$와 위 Fourier coefficients에 대해

$$
\sum_{n\in\mathbb Z}|a_n|^2=\frac1{2\pi}\int_{-\pi}^{\pi}|f|^2,
\qquad
\frac1{2\pi}\int_{-\pi}^{\pi}|f-S_Nf|^2\longrightarrow0,
\quad S_Nf=\sum_{|n|\le N}a_ne^{inx}.
$$

또한 $$f\mapsto(a_n)_{n\in\mathbb Z}$$는 이 정규화된 $$L^2$$와 $$\ell^2(\mathbb Z)$$ 사이의 unitary mapping이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

추상적인 basis 정리를 적용하려면 orthogonality뿐 아니라 completeness of the system도 필요하다. 다음 강의의 [Theorem 3.1](/blog/2026/real-analysis-fourier-fatou/#l22:uniqueness)에서 모든 Fourier coefficients가 0인 $$L^1$$ 함수는 a.e. 0임을 증명한다. 그 증명은 Poisson kernel과 Lebesgue point를 사용하며 지금 정리에 의존하지 않는다.

이를 $$L^2\subset L^1$$에 적용하면 $$(f,e_n)_{\mathbb T}=0$$ for all $$n$$일 때 $$f=0$$이다. 따라서 Theorem 2.3으로 $$\{e_n\}_{n\in\mathbb Z}$$는 orthonormal basis이다. 같은 정리로 Parseval's identity와 $$L^2$$ 수렴이 나온다. 임의의 $$\ell^2$$ 좌표 수열에서 Cauchy인 부분합을 만들면 대응하는 $$L^2$$ 함수가 존재하므로 coefficient map은 onto이며, Parseval로 norm도 보존한다.

</div>

Bounded한 Riemann 적분가능 함수는 이 구간에서 $$L^2$$에 속한다. 따라서 이 결과는 익숙한 Fourier 정리를 더 큰 함수 공간으로 확장한다. 그러나 $$L^1$$은 $$L^2$$보다 더 크므로 이 정리만으로 모든 $$L^1$$ 함수를 다룰 수는 없다. $$L^1$$ 함수의 Fourier series가 모든 점에서 발산하는 예도 있다. 다음에는 급수에 $$r^{\vert n\vert }$$이라는 감쇠 인자를 넣어 수렴을 복원하는 Abel means를 살펴본다. 이 과정이 뒤의 Fatou's theorem과 연결된다. 여기서 Fatou's theorem은 앞서 사용한 Fatou's lemma와 서로 다른 명제이다.

**$$L^1$$ Fourier series와 Abel means**

<span id="l22:abel"></span>

$$L^2$$에서는 Fourier series의 norm 수렴과 Parseval's identity를 얻었다. 하지만 $$L^1$$ 함수의 $$L^2$$ norm은 무한할 수 있다. 같은 결론을 그대로 요구할 수 없는 이유이다. 대신 coefficient의 유일성과, 급수의 각 항을 조금 감쇠했을 때의 a.e. 수렴을 증명한다.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.1.**

<span id="l22:uniqueness"></span>

$$f\in L^1[-\pi,\pi]$$이고 $$a_n=(2\pi)^{-1}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx$$라 하자.

<ol type="i" markdown="1">

<li markdown="1">

모든 $$n\in\mathbb Z$$에 대해 $$a_n=0$$이면 $$f=0$$ a.e.이다.

</li>

<li markdown="1">

$$0\le r<1$$에 대해 정의한 Abel mean

$$
A_rf(x)=\sum_{n\in\mathbb Z}a_nr^{|n|}e^{inx}
$$

은 $$r\nearrow1$$일 때 $$f(x)$$로 a.e. 수렴한다.

</li>

</ol>

</div>

$$r^{\vert n\vert }$$은 높은 주파수의 항을 빠르게 작게 만든다. 먼저 $$r<1$$에서 급수를 수렴시키고, 나중에 $$r$$을 1로 보내 감쇠를 제거한다. 이는 Fourier 부분합의 $$N\to\infty$$ 극한과 다른 절차이다. (ii)를 증명하면 모든 $$a_n$$이 0인 경우 $$A_rf=0$$이므로 (i)는 즉시 따른다.

**고정한 $$r$$에서 급수는 잘 정의된다**

<span id="l22:series"></span>

$$\vert e^{-inx}\vert =1$$이므로

$$
|a_n|\le C_f:=\frac1{2\pi}\int_{-\pi}^{\pi}|f|.
$$

이 bound는 $$n$$에 무관하다. 따라서 고정한 $$r<1$$에 대해

$$
\sum_{n\in\mathbb Z}|a_nr^{|n|}e^{inx}|
\le C_f\sum_{n\in\mathbb Z}r^{|n|}
=C_f\frac{1+r}{1-r}<\infty.
$$

오른쪽이 $$x$$에도 무관하므로 급수는 $$x$$에 관하여 절대·균등수렴한다. 다만 이 추정은 $$r\nearrow1$$에 관해서는 uniform하지 않다. 따라서 이 계산만으로 경계에서의 균등수렴을 결론 내릴 수 없다.

**Poisson kernel과 convolution**

<span id="l22:poisson"></span>

계수 $$a_n$$을 잠시 빼고 기하급수부터 계산하자.

$$
\begin{align*}
P_r(y)&=\sum_{n\in\mathbb Z}r^{|n|}e^{iny}
=1+\frac{re^{iy}}{1-re^{iy}}+\frac{re^{-iy}}{1-re^{-iy}}\\
&=\frac{1-r^2}{1-2r\cos y+r^2}.
\end{align*}
$$

이것이 **Poisson kernel**이다. $$P_r\ge0$$이고 $$(2\pi)^{-1}\int_{-\pi}^{\pi}P_r=1$$이다. 마지막 등식은 균등수렴하는 급수를 항별 적분하면 상수항만 남는다는 사실로 확인한다.

$$f$$를 $$2\pi$$-periodic하게 연장하자. 양 끝점의 값은 필요하면 한 점에서 바꾸어도 적분에 영향이 없다. 목표는 Abel mean을 convolution으로 바꾸는 것이다.
<span id="l22:convolution"></span>

$$
\begin{equation}\tag{2}
A_rf(x)=\frac1{2\pi}\int_{-\pi}^{\pi}f(x-y)P_r(y)\,dy.
\end{equation}
$$

실제로 $$P_r$$의 급수를 대입하고 적분과 합을 교환한다. 고정한 $$r$$과 $$x$$에서 integrand의 부분합은

$$
|f(x-y)|\sum_{n\in\mathbb Z}r^{|n|}
$$

으로 지배된다. 주기성 때문에 $$f(x-\cdot)$$는 길이 $$2\pi$$인 구간에서 적분가능하므로 DCT를 적용할 수 있다. 각 항에서는 변수변환 $$t=x-y$$와 주기성을 사용하여

$$
\begin{align*}
\frac1{2\pi}\int_{-\pi}^{\pi}f(x-y)e^{iny}\,dy
&=\frac{e^{inx}}{2\pi}\int_{x-\pi}^{x+\pi}f(t)e^{-int}\,dt\\
&=a_ne^{inx}
\end{align*}
$$

를 얻는다. 적분 구간을 되돌릴 수 있는 이유는 integrand가 $$2\pi$$-periodic이기 때문이다. 이로써 식 [(2)](/blog/2026/real-analysis-fourier-fatou/#l22:convolution)이 증명된다.

**왜 원래 함수로 돌아오는가?**

<span id="l22:poisson-limit"></span>

$$\delta=1-r$$로 놓으면

$$
1-2r\cos y+r^2=\delta^2+2r(1-\cos y).
$$

$$\vert y\vert \le\pi$$에서는 $$1-\cos y$$가 상수배의 $$y^2$$와 비교되므로, $$r\ge1/2$$일 때

$$
0\le P_r(y)\le C\frac{\delta}{\delta^2+y^2}.
$$

전체 질량은 항상 $$2\pi$$이고, 원점에서 떨어진 곳의 값은 $$\delta\to0$$이면 0으로 간다. 질량이 원점으로 모이면서 주변 함수값의 평균을 취한다는 것이 approximation to the identity의 구조이다.

주기적으로 연장한 $$f$$는 보통 $$L^1(\mathbb R)$$에 속하지 않는다. 따라서 실수 전체에서의 convolution 정리를 그대로 적용하기 전에 이 점을 처리해야 한다. $$f$$의 주기적 연장을 $$[-2\pi,2\pi]$$ 밖에서 0으로 자른 함수를 $$\widetilde f$$라 하고,

$$
K_\delta(y)=\frac1{2\pi}P_{1-\delta}(y)\rchi_{[-\pi,\pi]}(y)
$$

로 놓는다. $$K_\delta$$는 적분이 1이고 위의 good-kernel bound를 만족한다. $$x\in(-\pi,\pi)$$에서는 $$\vert y\vert \le\pi$$일 때 $$x-y\in[-2\pi,2\pi]$$이므로 식 [(2)](/blog/2026/real-analysis-fourier-fatou/#l22:convolution)은 $$(\widetilde f*K_\delta)(x)$$와 같다. 또한 그 $$x$$ 부근에서 $$\widetilde f=f$$이므로 Lebesgue point도 같다.

Chapter 3의 approximation-to-the-identity 정리에 의해 이 convolution은 $$f$$의 각 Lebesgue point에서 $$f(x)$$로 수렴한다. 거의 모든 점이 Lebesgue point이므로 Theorem 3.1(ii)가 증명된다. 이 정리는 앞 강의에서 필요했던 trigonometric system의 completeness도 제공한다.

#### 4.3.1. Fatou's theorem

<span id="l22:fatou"></span>

이제 Fourier series와 미분 이론을 complex analysis의 경계 문제에 사용한다. $$\mathbb D=\{z\in\mathbb C:\vert z\vert <1\}$$에서 holomorphic인 $$F$$를 생각하자. Holomorphic function은 내부에서 power series로 표현될 만큼 매끄럽다. 그러나 정의역은 열린 원판이므로 내부의 매끄러움만으로 경계에서의 극한을 보장할 수 없다. 경계로 갈수록 진동하거나 크기가 커질 가능성을 따로 통제해야 한다. Exercise 16은 이런 경계 거동과 관련된다.

복소수 함수는 정의역과 공역이 각각 두 실수 차원이므로 보통의 높이 그래프 하나로 전부 나타내기 어렵다. 그래도 원판 안에서 경계로 접근할 때 값이 어떻게 움직이는지 생각하는 직관은 유용하다. 여기서는 접근 방향을 하나의 반지름으로 고정한다.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.3: Fatou.**

$$\mathbb D$$에서 bounded holomorphic인 함수 $$F$$는 거의 모든 $$\theta\in[-\pi,\pi]$$에서 radial limit

$$
\lim_{r\nearrow1}F(re^{i\theta})
$$

을 갖는다.

</div>

Radial limit는 $$\theta$$를 고정하고 원점에서 경계점 $$e^{i\theta}$$로 향하는 반지름을 따라가는 극한이다. 임의의 경로에서의 극한이나 모든 경계점에서의 연속성을 주장하지 않는다. Boundedness는 단순히 발산을 막는 조건처럼 보이지만 holomorphic 구조와 결합하면 a.e. 진동까지 통제한다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

<span id="l22:fatou-proof"></span>

Holomorphic function의 power series 표현을 사용한다.

$$
F(z)=\sum_{n=0}^\infty a_nz^n\quad(|z|<1).
$$

이 급수는 원판 안의 각 compact subset에서 절대·균등수렴한다. 특히 하나의 $$r<1$$을 고정하면 $$F(re^{i\theta})$$는 $$\theta$$의 연속함수이고 항별 적분이 가능하다. 그 $$k$$번째 Fourier coefficient는

$$
\begin{align*}
\frac1{2\pi}\int_{-\pi}^{\pi}F(re^{i\theta})e^{-ik\theta}\,d\theta
&=\sum_{n=0}^\infty a_nr^n\frac1{2\pi}\int_{-\pi}^{\pi}e^{i(n-k)\theta}\,d\theta\\
&=\begin{cases}a_kr^k&k\ge0,\\0&k<0.\end{cases}
\end{align*}
$$

Power series에는 음의 지수가 없으므로 음의 Fourier coefficients는 0이다.

$$\vert F(z)\vert \le M$$이라 하자. 고정한 원 위의 함수에 Parseval's identity를 적용하면

$$
\sum_{n=0}^\infty |a_n|^2r^{2n}
=\frac1{2\pi}\int_{-\pi}^{\pi}|F(re^{i\theta})|^2\,d\theta\le M^2.
$$

Boundedness는 여기서 $$r$$에 무관한 상계를 주는 데 사용된다. $$r\nearrow1$$을 보내고 음이 아닌 급수에 MCT를 적용하여 $$\sum_{n\ge0}\vert a_n\vert ^2\le M^2$$를 얻는다.

이제 경계 함수를 먼저 만들어야 한다. $$F$$는 아직 열린 원판 안에서만 정의되어 있으므로 $$F(e^{i\theta})$$를 이미 존재하는 값처럼 사용하면 안 된다. Theorem 3.2의 coefficient map이 onto라는 사실에 의해 Fourier coefficients가

$$
b_n=\begin{cases}a_n&n\ge0,\\0&n<0\end{cases}
$$

인 $$h\in L^2[-\pi,\pi]$$가 존재한다. 이는 Fourier 맥락의 Riesz--Fischer 존재 정리이며 앞의 completeness와 basis 논리로 얻은 결과이다. $$h\in L^1$$이므로 Theorem 3.1을 적용하면

$$
F(re^{i\theta})=\sum_{n=0}^\infty a_nr^ne^{in\theta}
=\sum_{n\in\mathbb Z}b_nr^{|n|}e^{in\theta}
\longrightarrow h(\theta)
$$

가 a.e. 성립한다. 이 $$h$$가 radial boundary value이고, 이 단계가 끝난 뒤에야 $$F(e^{i\theta})$$라고 표기할 수 있다.

</div>

약해 보였던 $$L^1$$의 Abel convergence가 바로 이 경계 극한을 만드는 데 충분했다. 정리의 문장에는 measure theory나 Hilbert space가 드러나지 않지만 증명에는 앞에서 배운 이론들이 연결된다.

**실제로 필요한 bound와 Hardy space**

<span id="l22:hardy"></span>

증명에서 사용한 것은 점별 bound 그 자체가 아니라

$$
\sup_{0\le r<1}\frac1{2\pi}\int_{-\pi}^{\pi}|F(re^{i\theta})|^2\,d\theta<\infty
$$

이다. 이 조건을 만족하는 holomorphic function들의 공간을 $$H^2(\mathbb D)$$라 한다. 각 $$r$$마다 적분이 유한한 것과 그 supremum이 유한한 것은 다르다. 후자가 있어야 coefficient의 제곱합을 통제할 수 있다. 같은 증명이 $$H^2(\mathbb D)$$에도 a.e. radial limit를 준다. 여기서는 이 연결까지만 사용한다.

{% endraw %}

<!-- prettier-ignore-end -->

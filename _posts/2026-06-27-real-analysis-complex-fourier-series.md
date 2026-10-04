---
layout: post
title: "Real Analysis Appendix: Complex Fourier Series and Holomorphic Functions"
date: 2026-06-27 12:00:00 +0900
description: "복소 삼각계와 복소 Fourier 계수를 정리하고, 정칙함수와 실변수 함수의 차이를 살펴본다."
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

## A. Complex Fourier series와 holomorphic functions

### A.1. Complex Fourier series

<span id="app:fourier"></span>

먼저 Riemann 적분에서 사용했던 Fourier coefficient를 떠올려 보자. $$[a,b]$$에서 서로 orthogonal인 실수 함수들 $$\{\phi_n\}$$에 대해 $$\phi_n$$의 제곱이 적분가능하고 그 적분이 양수라 하자. $$f\phi_n$$도 적분가능하면

$$
c_n=\frac{\int_a^bf(x)\phi_n(x)\,dx}{\int_a^b\phi_n(x)^2\,dx}
$$

를 $$\phi_n$$ 방향의 Fourier coefficient라 한다. $$f\sim\sum_nc_n\phi_n$$은 이 coefficient들로 만든 Fourier series를 나타낸다. 복소수 값의 orthogonal system에서는 분자에 $$\overline{\phi_n}$$, 분모에 $$\vert \phi_n\vert ^2$$를 사용한다. 수렴은 coefficient의 정의와 별도로 확인해야 한다.

일반적인 $$[-L,L]$$에서는

$$
1,\quad\cos\frac{n\pi x}{L},\quad\sin\frac{n\pi x}{L}\qquad(n\ge1)
$$

이 orthogonal system이다. $$L=\pi$$로 고정하면 $$1,\cos nx,\sin nx$$가 되고

$$
\int_{-\pi}^{\pi}\cos^2nx\,dx=\int_{-\pi}^{\pi}\sin^2nx\,dx=\pi,
\qquad\int_{-\pi}^{\pi}1\,dx=2\pi.
$$

따라서 $$f$$가 이 구간에서 Riemann 적분가능하면

$$
a_0=\frac1\pi\int_{-\pi}^{\pi}f(x)\,dx,\quad
 a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\quad
 b_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx
$$

로 놓고

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)
$$

로 쓴다. 상수항에 $$1/2$$이 붙는 이유는 상수 함수 1의 norm 제곱이 다른 함수들의 두 배이기 때문이다.

복소수 표기를 쓰면 sine과 cosine의 두 급수를 하나로 묶을 수 있다. Euler's formula로

$$
\cos nx=\frac{e^{inx}+e^{-inx}}2,\qquad
\sin nx=\frac{e^{inx}-e^{-inx}}{2i}
$$

이므로 각 $$n\ge1$$에 대해

$$
a_n\cos nx+b_n\sin nx
=\frac{a_n-ib_n}{2}e^{inx}+\frac{a_n+ib_n}{2}e^{-inx}.
$$

따라서 $$c_0=a_0/2$$, $$c_n=(a_n-ib_n)/2$$, $$c_{-n}=(a_n+ib_n)/2$$로 놓으면

$$
f(x)\sim\sum_{n\in\mathbb Z}c_ne^{inx}.
$$

이것은 먼저 유한한 대칭 부분합에서 성립하는 항등식이므로, 아직 수렴을 모르는 두 무한급수를 임의로 재배열할 필요가 없다. 적분 정의를 대입하면 양수·0·음수 지표를 모두 포함한 하나의 식

$$
c_n=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx\qquad(n\in\mathbb Z)
$$

을 얻는다. 본문에서는 이 coefficient를 $$a_n$$으로 썼다. 본문의 $$a_n$$과 이 절의 실수형 cosine coefficient $$a_n$$는 역할이 다르므로 문맥을 구별한다. 적분가능성만 있으면 같은 정의를 Lebesgue 적분으로 확장할 수 있다.

### A.2. Holomorphic functions

<span id="app:holomorphic"></span>

복소수 변수의 미분은 실수 변수의 미분보다 강한 조건이다. 열린 집합 $$D\subset\mathbb C$$에서

$$
F'(z)=\lim_{h\to0,\ h\in\mathbb C}\frac{F(z+h)-F(z)}h
$$

가 존재하려면 실수 방향뿐 아니라 모든 복소수 방향으로 접근해도 같은 극한을 얻어야 한다. 모든 $$z\in D$$에서 이 미분이 존재하면 $$F$$를 $$D$$에서 **holomorphic**이라 한다.

Complex analysis의 기본 정리에 따르면 holomorphic function은 각 점 부근에서 power series로 표현된다. 특히 unit disk에서 holomorphic이면

$$
F(z)=\sum_{n=0}^\infty a_nz^n\quad(|z|<1)
$$

이고, 이 급수는 원판 안의 각 compact subset에서 절대·균등수렴한다. 그래서 고정한 $$r<1$$에서 $$F(re^{i\theta})$$의 급수를 항별 적분할 수 있다. 이 성질이 Fatou's theorem 증명에서 사용되었다.

실수 함수에서는 한 번 미분가능하다고 해서 무한 번 미분가능하거나 power series와 같아지는 것이 아니다. Holomorphic이라는 조건의 강함은 이 차이에 있다. 다만 원판 내부의 power series 표현은 경계에서의 수렴을 자동으로 보장하지 않는다. $$r\nearrow1$$일 때의 radial limit는 본문에서 boundedness 또는 $$H^2$$ 조건을 사용하여 별도로 증명했다.

{% endraw %}

<!-- prettier-ignore-end -->

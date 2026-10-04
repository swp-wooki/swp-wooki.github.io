---
layout: post
title: "PDEs and Applications 1: First-Order Equations"
date: 2026-10-04 12:01:00 +0900
description: "편미분방정식의 기본 개념과 일계 방정식의 해법을 다룬다."
tags: partial-differential-equations lecture-notes
categories: partial-differential-equations
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의노트이다. (Lecture 1)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_1.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

## 1. Where PDEs Come From

### 1.1 What is a PDE?

먼저 partial differential equation (PDE)가 어떤 식인지, 왜 이런 방정식을
공부하는지부터 이야기해 보자.
자연 법칙을 살펴보면 어떤 양이 얼마나 빨리 변하는지, 즉 **변화율 사이의 관계**로
주어지는 경우가 많다.
Newton의 운동 법칙과 Faraday의 전자기 유도 법칙이 그 예이다.
위치가 $$x(t)$$인 질량 $$m$$의 물체에 대해 힘과 가속도의 관계는 $$F=mx''(t)$$이다.
여기서 속도와 가속도를 어떻게 쓰는가? 위치를 시간으로 한 번 미분하면 속도,
두 번 미분하면 가속도가 된다. 이렇게 변화율을 미분으로 쓰고 그 사이의 관계를
적으면 differential equation이 된다. 시간에 대한 변화만 있는 것은 아니다. 공간에 따른
변화도 함께 고려하면 편미분이 등장하게 된다.

PDE의 일반적인 표기는

$$
F\bigl(x,u(x),\partial_{x_i}u(x),\partial_{x_i x_j}u(x),\ldots\bigr)=0,
 \qquad x=(x_1,\ldots,x_n)
$$

이다. 여기서 $$F$$가 무엇을 입력받는지 보자. 위치 $$x$$뿐 아니라 함수의 값 $$u(x)$$,
각 좌표에 대한 일차미분, 이차미분 등이 들어간다. 우리가 찾으려는 미지수는
**함수 $$u$$**이고, 이 식은 그 함수와 미분 사이에 성립해야 하는 관계이다.
이때 독립변수가 하나인 differential equation을 ordinary differential equation (ODE)라고 한다.
PDE에서는 보통 공간과 시간 등 둘 이상의 독립변수를 다룬다.
미지함수는 벡터값일 수도 있으나, 여기서는 주로 실수값 함수를 다룬다.
아래 Schrödinger equation은 복소수값 함수를 사용하는 예외이다.

$$u_t=\partial u/\partial t$$, $$u_x=\partial u/\partial x$$,
$$u_{xx}=\partial^2u/\partial x^2$$이며, 아래첨자는 함수값이 아니라 미분을 뜻한다.
영역 $$\Omega$$에서 필요한 차수까지 미분 가능한 함수 $$u$$를 대입했을 때
모든 점에서 등식이 성립하면 그 영역에서의 해다. 여기서는 미분을 실제로 계산하여
각 점에서 방정식을 만족하는 해, 즉 classical solution을 다룬다.

<div class="real-analysis-statement" markdown="1">

**Examples of PDEs.**

이제 실제로 어떤 식들이 있는지 보자. 우선 공간은 일차원으로 두고
$$u=u(x,t)$$로 쓰자. 계수 $$c,k$$는 상수이다.

<ol type="1" markdown="1">

<li markdown="1">

**Linear transport equation:**

$$
u_t+cu_x=0,\qquad c\in\mathbb R.
$$

</li>

<li markdown="1">

**Conservation law:**

$$
u_t+\partial_x[F(u)]=0.
$$

</li>

<li markdown="1">

**Diffusion / heat equation:**

$$
u_t-ku_{xx}=0,\qquad k>0.
$$

</li>

<li markdown="1">

**Wave equation:**

$$
u_{tt}-c^2u_{xx}=0.
$$

</li>

<li markdown="1">

**Soliton / KdV equation:**

$$
u_t+uu_x+u_{xxx}=0.
$$

</li>

<li markdown="1">

**Linear Schrödinger equation:**

$$
u_t+i u_{xx}=0,\qquad i^2=-1
$$

는 양자역학에 등장하는 linear equation이다.

</li>

</ol>

</div>

transport equation이라는 이름은 무엇이 이동한다는 뜻일까? 잠시 뒤 입자의 분포가
시간에 따라 이동하는 모습을 생각하면서 이 식을 유도한다.
diffusion equation과 heat equation은 같은 식을 가리키는 두 이름이다.
물질이 퍼지는 현상과 열이 퍼지는 현상을 같은 식으로 기술하므로 두 이름을 함께 쓴다.
교재에서는 주로 diffusion equation이라고 부른다. conservation law와 KdV equation은 교재 14장에서
다시 다루고, 그 전에는 주로 linear equation에 집중한다.

지금까지 여러 식을 linear equation이라고 불렀다. 그렇다면 무엇이 linear하다는 뜻인가?
이를 정의하려면 함수를 상수배하고 더할 때 어떤 일이 일어나는지 보아야 한다. transport equation의 왼쪽을 만드는 규칙
$$\mathcal L=\partial_t+c\partial_x$$부터 생각해 보자. 함수를 넣으면
그 함수의 시간미분과 공간미분의 합이 나온다. 이 규칙이 다음 성질을 만족하는지가 핵심이다.

<div class="real-analysis-statement" markdown="1">

**Definition (Linearity).**

differential operator를 적용하려면 함수가 미분 가능해야 하므로, $$u,v$$는 필요한 만큼
매끄럽다고 하자. differential operator $$\mathcal L$$이 이러한 $$u,v$$와 상수 $$a,b$$에 대해

$$
\mathcal L(au+bv)=a\mathcal L u+b\mathcal L v
$$

를 만족하면 **linear operator**라고 한다. 함수를 먼저 상수배하여 더한 뒤
operator를 적용하든, 각각에 적용한 뒤 같은 상수배를 하여 더하든 결과가 같다는 뜻이다. 이때

$$
\mathcal L u=0
$$

은 **homogeneous linear equation**, 주어진 함수 $$g\not\equiv0$$에 대해

$$
\mathcal L u=g
$$

는 **inhomogeneous linear equation**이다. 왼쪽 operator의 linearity는 같고,
우변이 $$0$$인지 주어진 함수 $$g$$인지에 따라 구별하는 것이다.

</div>

<div class="real-analysis-statement" markdown="1">

**Examples of Linearity.**

$$
\mathcal L=\partial_t+c\partial_x,\qquad
 \mathcal L=\partial_t-k\partial_x^2,\qquad
 \mathcal L=\partial_t^2-c^2\partial_x^2
$$

는 차례로 transport equation, diffusion equation, wave equation에 해당하는
linear operator이다. 각각 $$\mathcal L u=0$$으로 쓰면 homogeneous linear equation이 된다.

Schrödinger operator도 같은 의미에서 linear하다.

</div>

operator는 함수를 입력받아 다른 함수를 만드는 규칙이다.
예를 들어 $$(\partial_t+c\partial_x)u=u_t+cu_x$$이다.
반면 KdV의 $$uu_x$$는 미지함수끼리의 곱이므로 nonlinear 항이다.
conservation law의 linearity는 $$F$$의 형태에 달려 있다.
계수가 $$x,t$$에 의존하더라도 미지함수 $$u$$에 의존하지 않으면
$$\partial_t+f(x,t)\partial_x$$는 여전히 linear하다.

우리의 목표는 식을 만족하는 함수를 찾는 것, 그리고 그런 함수가 몇 개나 있는지
알아보는 것이다. 일단 해를 여러 개 찾았다고 가정해 보자. linearity를 이용하면
그 해들로부터 어떤 다른 해를 만들 수 있을까?

<div class="real-analysis-statement" markdown="1">

**Superposition principle and inhomogeneous equations.**

<ol type="1" markdown="1">

<li markdown="1">

$$\mathcal L u_j=0$$인 해 $$u_1,\ldots,u_n$$이 있으면 상수 $$c_j$$에 대해

$$
\mathcal L\left(\sum_{j=1}^n c_j u_j\right)
 =\sum_{j=1}^n c_j\mathcal L u_j=0.
$$

즉, 여러 해를 각각 상수배하여 더한 linear combination도 다시 해다. 이것이 **superposition principle**이며,
앞에서 정의한 linearity를 그대로 적용한 결과이다. superposition principle은 나중에 다시
등장하므로, 이름만 기억하지 말고 왜 이 계산이 성립하는지 이해해 두자.

</li>

<li markdown="1">

$$\mathcal L u_p=g$$인 특정한 해 하나와 $$\mathcal L v=0$$인 해가 있으면
$$\mathcal L(u_p+v)=g$$이다. 따라서 inhomogeneous equation의 모든 해는

$$
u_p+v,\qquad \mathcal L u_p=g,\quad \mathcal L v=0
$$

로 나타난다. 여기서 $$u_p$$는 원래 방정식을 만족하는 해 하나, 즉 particular solution이다.
$$v$$에는 homogeneous equation의 general solution을 넣는다. 먼저 원래 방정식의
해를 하나 구하고, 그 뒤에 어떤 자유가 남는지 살펴보는 순서이다.
그다음 homogeneous equation의 해를 더하면 우변 $$g$$는 바뀌지 않는다. linear algebra에서
inhomogeneous linear system의 해를 구할 때 보았던 구조와 연결해서 생각하면 좋다.

</li>

</ol>

</div>

위 표현이 *모든* inhomogeneous equation의 해를 포함하는 이유는
임의의 다른 해 $$w$$에 대해 $$\mathcal L(w-u_p)=g-g=0$$이기 때문이다.
particular solution은 조건을 만족하는 해 하나이고, general solution은 가능한 해 전체를
나타내는 표현이다.
이 결론에는 differential equation의 구체적인 형태가 아니라 linearity만 필요하다.
여기서는 방정식 자체의 해를 말하며, 처음 상태를 지정하는 initial condition이나 공간 경계에서 주는 boundary condition은
따로 확인해야 한다.

### 1.2 First-order Equations

#### Derivation of linear transport equation

마찰 등을 무시하고 물체 하나가 일정한 속도 $$c$$로 움직인다고 하자.
시간 $$t$$의 위치를 $$x(t)$$라 하면

$$
\frac{dx}{dt}=c\quad(\dot x=c),\qquad
 x(t)=x(0)+ct.
$$

이 ODE는 시간에 대해 적분하면 된다. 현재 위치와 처음 위치의 차이가
속도 곱하기 시간이라는, 익숙한 식이다. 물체 하나의 위치는 이렇게 쉽게 예측할 수 있다.

<div class="real-analysis-statement" markdown="1">

**Question.**

입자가 너무 많아 하나씩 추적할 수 없고 초기 위치의 분포 $$u_0(x)$$만 안다면,
시간이 지난 뒤의 분포 $$u(x,t)$$를 어떻게 기술할까?

</div>

이제 초기 분포의 그래프에서 봉우리 하나를 골라 생각해 보자. 모든 입자가
같은 속도 $$c$$로 움직이니, 시간이 $$t$$만큼 지나면 그 봉우리도 $$ct$$만큼 옮겨간다.
봉우리만 옮겨가는 것이 아니라 다른 부분도 똑같이 이동한다. 따라서
**분포 전체의 모양이 그대로 $$ct$$만큼 이동할 것**이라고 예상할 수 있다.
이 그림을 어떻게 방정식으로 옮길까? 입자의 수가 보존된다는 사실을 이용하자.
여기서 분포를 적분한다는 것이 무슨 뜻인지 짚고 가자. $$u$$를 입자 수의 밀도로 해석하면

$$
\int_a^b u(x,t)\,dx
$$

는 시간 $$t$$에 $$[a,b]$$에 있는 입자 수이다.
정규화된 분포를 쓰는 경우에는 전체 중의 비율이며, 이하의 계산은 같다.

모든 입자가 같은 $$c$$로 이동하고 생성되거나 사라지지 않으므로, $$a<b$$와 $$h>0$$에 대해

$$
\int_a^b u(x,t)\,dx
 =\int_{a+ch}^{b+ch}u(x,t+h)\,dx.
$$

이 식에서는 아직 구간 전체의 입자 수를 비교하고 있다. 이제 한 점에서
성립하는 관계로 바꿔야 한다. 우선 $$u$$가 매끄럽다고 가정하고,
양변을 $$b-a$$로 나누고 $$b\downarrow a$$로 보내면,
연속성과 fundamental theorem of calculus에 의해 구간 평균이 점에서의 값으로 수렴하여

$$
u(a,t)=u(a+ch,t+h)
$$

를 얻는다. 다음에는 시간 간격 $$h$$를 줄여 미분을 만들자. 공간과 시간이
동시에 바뀌므로 중간 값을 하나 더하고 빼서, 공간의 변화와 시간의 변화를 나눠 보자.

$$
\begin{align*}
0&=\frac{u(a+ch,t+h)-u(a,t)}{h}\\
 &=\frac{u(a+ch,t+h)-u(a,t+h)}{h}
   +\frac{u(a,t+h)-u(a,t)}{h}
 \longrightarrow cu_x(a,t)+u_t(a,t).
\end{align*}
$$

따라서 linear transport equation은

$$
u_t+cu_x=0
$$

이다.
$$c=0$$일 때는 첫 번째 차분이 바로 $$0$$이므로 $$c$$로 나누지 않아도 된다.
$$C^1$$인 $$u$$에 chain rule을 적용하여
$$\frac{d}{dh}u(a+ch,t+h)\vert _{h=0}=cu_x+u_t$$로 계산해도 같다.

방정식은 얻었지만 처음에 하려던 일은 아직 남아 있다. 초기 분포를 알 때
나중의 분포를 구하려고 했다. $$u(x,0)=u_0(x)$$라고 하자.
처음 $$x_0$$에 있던 입자는 $$x_0+ct$$로 간다. 이번에는 거꾸로 물어보자.
현재 위치 $$x$$에 있는 입자는 어디에서 왔을까? 처음에는 $$x-ct$$에 있었다.
그러므로

$$
u(x,t)=u_0(x-ct),\qquad
 u(x_0+ct,t)=u_0(x_0).
$$

같은 식이지만, 첫 표현은 *현재 위치에서 출발점을 찾는 관점*,
둘째는 *입자를 따라가며 값이 보존됨을 보는 관점*이다.

#### Method of characteristics

상수 속도에서 사용한 방법을 좀 더 일반화해 보자. $$u_x$$ 앞의 계수가
$$x,t$$에 의존할 수 있지만 미지함수 $$u$$에는 의존하지 않는다고 하자. 그러면 여전히
linear equation이다. 주어진 함수 $$f$$에 대해

$$
u_t+f(x,t)u_x=0
$$

을 생각하자. 다음 ODE의 해를 따라 $$u$$의 변화를 살펴보자.

$$
\frac{dx(t)}{dt}=f(x(t),t),\qquad x(0)=x_0.
$$

이를 **characteristic equation**이라 하며, 초기 위치 $$x_0$$마다 얻는
$$(x(t),t)$$를 **characteristic curve**라고 한다. chain rule로

$$
\begin{align*}
 \frac{d}{dt}u(x(t),t)
 &=u_t(x(t),t)+x'(t)u_x(x(t),t)\\
 &=(u_t+fu_x)(x(t),t)=0.
\end{align*}
$$

여기서는 원래 두 변수의 함수였던 $$u$$에 $$x(t)$$를 넣었으므로,
$$u(x(t),t)$$는 시간 하나의 함수가 되었다. 그 미분이 $$0$$이라는 뜻은 무엇인가?
곡선을 따라 값이 바뀌지 않는다는 뜻이다. 따라서 $$u(x(t),t)=u(x_0,0)$$이다.

여기서 멈추면 식에 여전히 $$x(t)$$가 남는다. 우리가 원하는 것은 임의의
현재 위치 $$x$$에서의 $$u(x,t)$$이다. 그래서 한 단계가 더 필요하다.
이를 위해 출발점을 현재 위치와 시간으로

$$
x_0=g(x(t),t)
$$

처럼 표현할 수 있으면

$$
u(x,t)=u_0(g(x,t))
$$

를 얻는다. 즉, **초기 위치를 현재 위치와 시간으로 나타낸 뒤 초기함수에 대입한다.**
상수 속도에서는 $$g(x,t)=x-ct$$이다.

이 계산은 characteristic curve가 존재하고 해당 영역에서 출발점을 유일하게 되찾을 수 있으며,
$$u$$가 $$C^1$$인 경우에 적용한다.

<div class="real-analysis-statement" markdown="1">

**Example 1.**

이제 같은 절차를 예제에 적용해 보자. 방정식과 처음 상태를 함께 주는 다음
initial value problem을 푸는 것이다.

$$
4u_x-3u_y=0,\qquad u(x,0)=x^3.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof (Solution).*

변수 이름이 $$x,y$$라서 앞의 식과 달라 보이지만, 이름을 바꾸면 익숙한 transport equation이 된다.
initial condition이 $$y=0$$에 주어졌으므로 $$y$$를 시간변수 $$t$$로 두자.
$$w(x,t)=u(x,t)$$로 쓰면

$$
w_t-\frac43w_x=0,\qquad w(x,0)=x^3.
$$

characteristic equation은

$$
x'(t)=-\frac43,\qquad x(t)=x_0-\frac43t
$$

이므로 출발점은 $$x_0=x(t)+\frac43t$$이다. 따라서

$$
w(x,t)=\left(x+\frac43t\right)^3,\qquad
 u(x,y)=\left(x+\frac43y\right)^3.
$$

실제로 $$q=x+\frac43y$$라 두면 $$u_x=3q^2$$, $$u_y=4q^2$$이므로
$$4u_x-3u_y=0$$이고, $$y=0$$에서 $$u(x,0)=x^3$$이다.

</div>

<div class="real-analysis-statement" markdown="1">

**Example 2.**

이번에는 초기함수가 구체적인 다항식이 아니라 임의의 함수라고 하자.
$$f\in C^1(\mathbb R)$$에 대하여 다음 initial value problem을 풀어 보자.

$$
u_x+yu_y=0,\qquad u(0,y)=f(y).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof (Solution).*

이번 initial condition은 $$x=0$$에 있으므로 $$x$$를 시간변수로 사용한다.
두 예제에서 같은 글자를 무조건 시간으로 읽지 말고, initial condition을 준 축을 먼저 보자.
$$w(z,t)=u(t,z)$$로 두면

$$
w_t+zw_z=0,\qquad w(z,0)=f(z).
$$

이제 공간미분 앞의 계수를 읽으면 characteristic equation은 $$z'(t)=z(t)$$이다.
이 간단한 ODE의 계산을 확인해 보자.

$$
\frac{d}{dt}\bigl(e^{-t}z(t)\bigr)=e^{-t}\bigl(z'(t)-z(t)\bigr)=0
$$

이므로 $$z(t)=z_0e^t$$이다. 따라서 $$z_0=z(t)e^{-t}$$를 초기함수에 대입하면

$$
w(z,t)=f(ze^{-t}),\qquad u(x,y)=f(ye^{-x}).
$$

$$q=ye^{-x}$$라 두면 $$u_x=-qf'(q)$$, $$u_y=e^{-x}f'(q)$$이므로
$$u_x+yu_y=0$$이다. 또한 $$u(0,y)=f(y)$$이므로 initial condition도 만족한다.

</div>

transport equation은 이렇게 characteristic curve를 구하고, 출발점을 현재 위치로 표현한 다음, 초기함수에
대입하여 풀 수 있다. 다음에는 wave equation과 diffusion equation이 어디에서 나오는지 살펴보고,
방정식에 함께 주어야 하는 initial condition과 boundary condition을 이야기한다.

{% endraw %}

<!-- prettier-ignore-end -->

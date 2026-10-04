---
layout: post
title: "PDEs and Applications 4: Heat Kernel and Reflection"
date: 2026-10-04 12:04:00 +0900
description: "전 실수선에서의 diffusion equation과 heat kernel, 반직선에서의 reflection method를 다룬다."
tags: partial-differential-equations lecture-notes
categories: partial-differential-equations
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의노트이다. (Lecture 4)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_4.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

### 2.4 Diffusion on the whole line

지난번에는 wave equation의 해 공식으로부터 domain of influence와 domain of dependence를 읽었고,
운동에 해당하는 kinetic energy와 변형에 해당하는 potential energy의 합이
시간에 따라 일정하다는 것을 보았다. diffusion equation에서는
아직 해를 만들지 않고, 유한 구간에서 maximum principle과 uniqueness, $$L^2$$ stability를 먼저
살펴보았다. 이번에는 실제로 해를 구성한다. 우선 경계가 없는 전공간에서
공식을 구한 다음, 그 공식을 경계가 있는 문제에 이용해 보자.

풀려는 initial value problem은

$$
\begin{align*}
 u_t&=ku_{xx},&&x\in\mathbb R,\quad t>0,\qquad k>0,\\
 u(x,0)&=\phi(x),&&x\in\mathbb R
\end{align*}
$$

이다. wave equation에서는 operator를 두 transport operator로 나누었는데, 여기서는 시간미분이
일차이므로 같은 인수분해를 그대로 사용할 수는 없다. 다른 출발점이 필요하다.
어떤 변환을 해도 방정식이 유지되는지, 즉 *invariance*부터 조사해 보자.

#### Invariance and scaling

일단 충분히 매끄러운 해 $$u$$가 하나 있다고 가정하자.
다음 변환을 하면 다시 diffusion equation의 해가 된다.

<ol type="a" markdown="1">

<li markdown="1">

**평행이동.** 고정된 $$y\in\mathbb R$$에 대해

$$
u_y(x,t)\coloneq u(x-y,t)
$$

도 해다. 여기의 아래첨자 $$y$$는 이동량을 표시하며 미분 기호가 아니다.
$$y$$는 $$x,t$$에 따라 달라지는 함수가 아니라 상수라는 점이 중요하다.

</li>

<li markdown="1">

**미분.** 필요한 만큼 미분 가능하면 $$u_x$$, $$u_t$$를 비롯한
미분들도 해다. 예를 들어
$$(u_x)_t=k(u_x)_{xx}$$는 원래 식을 $$x$$로 미분해서 얻는다.

</li>

<li markdown="1">

**linear combination.** 해들의 상수계수 linear combination은 다시 해다.
이는 linearity에서 곧바로 나온다.

</li>

<li markdown="1">

**적분에 의한 superposition.** 해의 모음을 매개변수에 대해 적분할 때,
그 적분이 수렴하고 미분과 적분을 교환할 수 있으면 적분한 함수도 해가 된다.
특히 $$S$$가 해이면

$$
v(x,t)=\int_{\mathbb R}S(x-y,t)h(y)\,dy
$$

도 해다. 각 $$y$$마다 $$S(x-y,t)$$가 해라는 평행이동 성질과 superposition을
함께 사용한 것이다. $$y$$를 적분했으므로 결과는 $$x,t$$의 함수이다.

</li>

<li markdown="1">

**scaling.** 상수 $$a>0$$에 대해

$$
u_a(x,t)=u(\sqrt a\,x,at)
$$

도 해다. 실제로

$$
(u_a)_t=a u_t(\sqrt a\,x,at),\qquad
 (u_a)_{xx}=a u_{xx}(\sqrt a\,x,at)
$$

이므로 양쪽에 같은 계수 $$a$$가 생긴다.

</li>

</ol>

여기서 “해”라는 말을 주의해서 들어야 한다. 지금 확인한 것은
*방정식 자체*를 만족한다는 것이지, 처음과 같은 initial condition까지 만족한다는
것은 아니다. 평행이동하면 초기함수도 이동하고, 미분하면 초기함수도 바뀐다.
initial condition은 나중에 따로 확인하자.

적분 공식의 $$h$$ 자리에 결국 초기함수 $$\phi$$를 넣을 생각이다.
그러면 어떤 특별한 해 $$S$$ 하나만 잘 찾으면 여러 initial condition을 다룰 수 있다.
그 특별한 해를 찾는 데 마지막 scaling을 사용한다. 이처럼 방정식이
허용하는 scale을 알아보고 특별한 형태를 찾는 방법은 다른 PDE에서도 자주 쓰인다.

#### A scaling-invariant solution

먼저 다음 계단 모양의 초기값을 생각하자.

$$
Q(x,0)=\begin{cases}
 0,&x<0,\\
 1,&x>0.
 \end{cases}
$$

공간변수에 양수를 곱해도 양쪽의 부호는 바뀌지 않으므로 이 초기 모양은
scale을 바꿔도 그대로이다. 이에 맞추어
$$Q(\sqrt a\,x,at)=Q(x,t)$$인 특별한 해를 찾아보자.
이 성질을 갖는다면 $$a=1/t$$를 선택했을 때

$$
Q(x,t)=Q\left(\frac{x}{\sqrt t},1\right)
$$

이므로 두 변수 대신 $$x/\sqrt t$$라는 조합 하나로 쓸 수 있다.

이것은 모든 해가 그런 형태라는 주장이 아니다. 또한 $$a$$가 상수일 때의 invariance를
알았다고 해서 임의의 해에 $$a=1/t$$를 넣은 함수가 자동으로 해가 되는 것도 아니다.
지금은 scale에 불변인 *특별한 해의 후보*를 정한 것이다.
후보를 방정식에 넣어서 정말 그런 해가 존재하는지 확인해야 한다.

<ol type="1" markdown="1">

<li markdown="1">

**한 변수의 함수로 표현하기.**
계산의 상수를 편하게 만들기 위해

$$
Q(x,t)=g(p),\qquad p=\frac{x}{\sqrt{4kt}}
$$

로 놓자. 핵심은 $$x/\sqrt t$$이고, $$4k$$는 뒤의 계산을 간단하게 하는
정규화이다. 이제 미지함수는 한 변수 $$p$$의 함수 $$g$$가 된다.

</li>

<li markdown="1">

**PDE를 ODE로 바꾸기.**
chain rule을 적용해 보자. 먼저

$$
p_t=-\frac{p}{2t},\qquad p_x=\frac1{\sqrt{4kt}},\qquad p_{xx}=0
$$

이므로

$$
Q_t=-\frac{p}{2t}g'(p),\qquad
 Q_x=\frac{g'(p)}{\sqrt{4kt}},\qquad
 Q_{xx}=\frac{g''(p)}{4kt}.
$$

따라서 $$Q_t=kQ_{xx}$$라는 조건은

$$
\begin{align*}
 0&=\frac1t\left(-\frac p2g'(p)-\frac14g''(p)\right),\\
 g''(p)+2pg'(p)&=0
\end{align*}
$$

이 된다. 원했던 대로 한 변수의 differential equation이 나왔다.

ODE를 따로 배웠다고 생각하지 말고 곱의 미분을 직접 확인해 보자.

$$
\frac{d}{dp}\bigl(e^{p^2}g'(p)\bigr)
 =e^{p^2}\bigl(g''(p)+2pg'(p)\bigr)=0.
$$

즉 $$e^{p^2}g'(p)$$가 상수이므로

$$
g'(p)=c_1e^{-p^2},\qquad
 g(p)=c_1\int_0^p e^{-s^2}\,ds+c_2.
$$

여기의 $$e^{p^2}$$를 *integrating factor*라고 부른다. 이름보다 중요한 것은
왼쪽을 곱의 미분으로 묶어서 적분할 수 있게 만들었다는 점이다.

</li>

<li markdown="1">

**initial condition으로 상수 정하기.**
아직 $$c_1,c_2$$가 남았다. 처음에 준 계단 모양을 사용해야 한다.
$$x$$를 고정하고 $$t\downarrow0$$으로 보내면, $$x>0$$에서는 적분 상한이
$$+\infty$$로, $$x<0$$에서는 $$-\infty$$로 간다. 상한의 $$x$$가 $$x^2$$가
아니라는 점을 보자. 이 부호 차이로 두 초기값을 구별한다.

Gaussian 적분

$$
\int_0^\infty e^{-s^2}\,ds=\frac{\sqrt\pi}{2}
$$

을 사용하면 두 조건은

$$
1=c_1\frac{\sqrt\pi}{2}+c_2,\qquad
 0=-c_1\frac{\sqrt\pi}{2}+c_2
$$

이다. 두 식을 더하고 빼서

$$
c_1=\frac1{\sqrt\pi},\qquad c_2=\frac12
$$

를 얻는다. 따라서

$$
Q(x,t)=\frac12+\frac1{\sqrt\pi}
          \int_0^{x/\sqrt{4kt}}e^{-s^2}\,ds
$$

이다. $$t>0$$에서 방정식을 만족하고, $$x\ne0$$를 고정한 초기 극한은
원하는 계단값이 된다. 원점에서는 $$Q(0,t)=1/2$$이다.
불연속인 초기 계단을 원점까지 연속적으로 회복한다고 주장하는 것은 아니다.

</li>

</ol>

#### The heat kernel and recovery of the initial data

이제 $$Q$$를 공간변수로 미분하여

$$
S(x,t)\coloneq Q_x(x,t)
 =\frac1{\sqrt{4\pi kt}}\exp\left(-\frac{x^2}{4kt}\right)
$$

로 놓자. 미분해도 해라는 성질 때문에 $$S$$도 diffusion equation을 만족한다.
평행이동과 적분 superposition을 적용하면 다음 후보를 얻게 된다.

$$
u(x,t)=\int_{\mathbb R}S(x-y,t)\phi(y)\,dy.
$$

왜 $$Q$$ 자체가 아니라 미분한 $$S$$를 쓰는지 아직 자연스럽지 않을 수 있다.
지금까지는 후보가 방정식을 만족하는 것만 확인했다. 이제 initial condition이 실제로
돌아오는지 살펴보면 이 선택의 역할이 드러난다. 먼저 계산을 정당화하기 쉬운
조건으로

$$
\phi\in C^1(\mathbb R),\qquad
 \lim_{|y|\to\infty}\phi(y)=0,\qquad
 \int_{\mathbb R}|\phi'(y)|\,dy<\infty
$$

를 가정하자. 이 가정에서 $$\phi$$는 유계이므로 $$S$$와의 적분도 정의된다.

$$S(x-y,t)=Q_x(x-y,t)$$이지만, $$y$$로 미분할 때는 부호가 바뀌므로

$$
S(x-y,t)=-\partial_yQ(x-y,t)
$$

이다. 이를 넣고 부분적분하면

$$
\begin{align*}
 u(x,t)
 &=-\int_{\mathbb R}\partial_yQ(x-y,t)\phi(y)\,dy\\
 &=-[Q(x-y,t)\phi(y)]_{y=-\infty}^{y=\infty}
   +\int_{\mathbb R}Q(x-y,t)\phi'(y)\,dy\\
 &=\int_{\mathbb R}Q(x-y,t)\phi'(y)\,dy.
\end{align*}
$$

엄밀히는 유한 구간에서 먼저 부분적분하고 양 끝을 무한대로 보내면 된다.
$$0\le Q\le1$$이고 $$\phi$$는 양쪽 무한대에서 $$0$$으로 가므로 경계항이 사라진다.
이것이 초기함수의 감쇠를 가정한 이유이다.

이제 적분 안에 $$t\downarrow0$$ 극한을 넣고 싶다. 그냥 순서를 바꾸면 안 되고,
왜 가능한지 확인해야 한다. 여기서는

$$
|Q(x-y,t)\phi'(y)|\le|\phi'(y)|
$$

이고 오른쪽은 $$t$$에 무관한 적분가능 함수이다. 따라서 *dominated convergence theorem*을
사용할 수 있다. 적분함수가 거의 모든 점에서 수렴하고, 그 절댓값이 하나의
적분가능 함수로 지배되면 극한과 적분을 교환할 수 있다는 정리이다.

고정한 $$x$$에 대해 $$y<x$$이면 $$x-y>0$$이므로 $$Q(x-y,t)\to1$$이고,
$$y>x$$이면 $$Q(x-y,t)\to0$$이다. $$y=x$$ 한 점의 값은 적분에 영향을 주지 않는다.
결국

$$
\begin{align*}
 \lim_{t\downarrow0}u(x,t)
 &=\int_{\mathbb R}\lim_{t\downarrow0}Q(x-y,t)\phi'(y)\,dy\\
 &=\int_{-\infty}^x\phi'(y)\,dy
 =\phi(x)
\end{align*}
$$

이다. 마지막에는 $$\phi(-\infty)=0$$을 사용했다.
미분한 $$Q$$를 사용했더니 부분적분 뒤에 $$\phi'$$가 나오고, 계단의 극한으로 적분
구간이 $$(-\infty,x)$$가 되어 원래 함수가 돌아온 것이다.
여기서 확인한 초기값 회복은 각 $$x$$를 고정한 *pointwise convergence*이다.

이 적분은 공간변수에 대한 *convolution*으로도 쓴다.

$$
u(x,t)=(S(\cdot,t)*\phi)(x)
       =\int_{\mathbb R}S(x-y,t)\phi(y)\,dy.
$$

시간을 적분한 것이 아니라는 점을 표시하기 위해 $$S(\cdot,t)$$라고 적었다.
$$S$$는 **source function**, **Green's function**,
**fundamental solution**, 또는 **heat kernel**이라고 부른다.

<div class="real-analysis-statement" markdown="1">

**Good kernels and different meanings of convergence.**

이번에는 $$S$$를 두 변수의 함수 하나로만 보지 말고,

$$
\{S(\cdot,t)\}_{t>0}
$$

라는 함수들의 모음으로 보자. $$t$$ 하나를 정하면 공간변수의 함수 하나가 나오고,
$$t\downarrow0$$일 때 그 모음이 다음 성질을 갖는다.

<ol type="i" markdown="1">

<li markdown="1">

$$\displaystyle\int_{\mathbb R}S(x,t)\,dx=1$$이다.

</li>

<li markdown="1">

$$\displaystyle\sup_{t>0}\int_{\mathbb R}\vert S(x,t)\vert \,dx<\infty$$이다.

</li>

<li markdown="1">

임의의 고정된 $$\delta>0$$에 대해

$$
\int_{|x|>\delta}S(x,t)\,dx\longrightarrow0\qquad(t\downarrow0)
$$

이다.

</li>

</ol>

첫 번째는 전체 적분량이 항상 $$1$$이라는 뜻이다. 여기서는 $$S\ge0$$이므로
두 번째도 바로 따른다. 부호가 바뀌는 일반적인 kernel이라면 절댓값 적분은
별도로 확인해야 한다. 세 번째는 원점 주변의 아무리 작은 구간을 고정해도,
그 구간 밖에 남는 양이 $$0$$으로 간다는 뜻이다.
실제로 $$z=x/\sqrt{4kt}$$로 치환하면

$$
\int_{|x|>\delta}S(x,t)\,dx
 =\frac1{\sqrt\pi}\int_{|z|>\delta/\sqrt{4kt}}e^{-z^2}\,dz\longrightarrow0
$$

이므로 Gaussian의 꼬리 적분으로 확인할 수 있다.

이런 모음을 family of good kernels라고 하며, approximation to the identity로
사용한다. 여기서는 일반 정리의 증명 대신 그 결과를 쓰자. 초기함수가
그저 적분가능하기만 해도, 즉 $$\phi\in L^1(\mathbb R)$$이면

$$
\int_{\mathbb R}|(S(\cdot,t)*\phi)(x)-\phi(x)|\,dx\longrightarrow0.
$$

이를 $$L^1$$ convergence라고 한다. $$L^1$$은 $$\int\vert \phi\vert <\infty$$인 함수들의 공간이고,
위 식에서는 두 함수의 차이에 절댓값을 취해 적분한 값으로 오차를 잰다.

앞의 pointwise convergence 증명과 가정을 비교해 보자. 거기서는 $$\phi$$의 미분가능성과
$$\phi'$$의 적분가능성까지 요구했다. 지금은 $$\phi$$ 자체의 적분가능성만으로
초기값을 *적분의 의미에서* 회복한다. 가정이 약해진 대신 수렴의 의미를
구별해야 한다. 임의의 $$L^1$$ 함수에 대해 모든 점에서 주어진 값을 회복한다고
말하는 것은 아니다.

</div>

<div class="real-analysis-statement" markdown="1">

**Large-time decay and smoothing.**

이번에는 반대로 $$t\to\infty$$를 보자. 지수함수 부분은 $$1$$ 이하이므로

$$
0\le S(x,t)\le\frac1{\sqrt{4\pi kt}}\longrightarrow0
$$

이며 이 상계는 $$x$$에 의존하지 않는다. 따라서 $$x$$ 전체에 대한 uniform convergence이다. $$\phi\in L^1(\mathbb R)$$이면

$$
|u(x,t)|\le\int_{\mathbb R}S(x-y,t)|\phi(y)|\,dy
 \le\frac{\|\phi\|_{L^1(\mathbb R)}}{\sqrt{4\pi kt}}.
$$

즉 일차원에서는 $$t^{-1/2}$$의 비율로 줄어드는 상계를 얻는다.
처음 한 곳에 집중된 열이나 물질이 공간으로 퍼지면서 높이가 낮아지는 현상과
연결해서 볼 수 있다. 다차원에서는 이에 대응하는 지수가 $$-d/2$$이지만,
지금 계산은 일차원에서 하고 있다.

이번에는 smoothing이라는 성질을 보자. 처음 함수가 매끄럽지 않아도
양의 시간이 지나면 해는 매끄러워진다. 구체적으로 초기함수는 적분가능하기만 해도

$$
u\in C^\infty(\mathbb R\times(0,\infty)),\qquad u_t=ku_{xx}
$$

이다. 시간과 공간으로 얼마든지 미분할 수 있다는 뜻이다.
왜 거친 초기함수에서 매끄러운 해가 나올까? convolution에서 미분을 $$\phi$$에 하지
않고 매끄러운 Gaussian kernel $$S$$에 할 수 있기 때문이다. 임의의 양의 시각 주변에
$$0$$을 포함하지 않는 작은 시간 구간을 고정하면 heat kernel의 각 미분에 적절한 상계를 잡을 수 있어
적분 안으로 미분을 옮기는 것이 정당화된다.

여기서 $$t=0$$을 제외했다는 점을 꼭 보자. 초기함수 자체가 매끄러워졌다고
주장하는 것은 아니다. 상세 미분 추정은 여기서 전개하지 않고,
양의 시간에서의 매끄러움과 초기값 회복의 의미를 구별해 두자.

</div>

## 3. Reflections and Sources

### Diffusion on the half line (Sec. 3.1 and 3.3)

전공간의 공식은 얻었다. 그런데 공간에 경계가 있으면 어떻게 해야 할까?
유한 구간이나 반직선에서는 boundary condition까지 만족시켜야 한다.
이제 $$x>0$$인 반직선에서 homogeneous Dirichlet condition을 갖는 문제를 보자.

$$
\begin{align*}
 v_t&=kv_{xx},&&x>0,\quad t>0,\\
 v(x,0)&=\phi(x),&&x>0,\\
 v(0,t)&=0,&&t>0.
\end{align*}
$$

여기서는 경계점이 $$0$$ 하나뿐이다. 방정식의 우변도 $$0$$이고 경계값도 $$0$$이므로
둘 다 homogeneous이다. 우선 $$\phi\in L^1(0,\infty)$$를 가정하자.

우리가 지금 풀 줄 아는 것은 전공간 문제이다. 그러니 초기함수를 전공간으로
확장한 뒤, 이미 아는 공식을 쓰고, 다시 양의 반직선으로 제한해 보자.
다만 확장하는 방법은 여러 가지이다. 아무렇게나 확장해서는 시간이 지난 뒤에도
원점의 값이 $$0$$이라는 보장이 없다. 이 boundary condition에 맞는 선택은 *odd extension*이다.

$$
\phi_{\mathrm{odd}}(x)=
 \begin{cases}
 \phi(x),&x>0,\\
 0,&x=0,\\
 -\phi(-x),&x<0.
 \end{cases}
$$

양의 쪽 그래프를 원점에 대해 반사하여 음의 쪽에 붙인 것이다.
초기 시각의 모서리까지 연속인 해를 요구한다면 $$\phi(0)=0$$도 필요하다.
적분만 생각할 때는 원점 한 점의 값이 convolution을 바꾸지는 않는다.

전공간에서

$$
u(x,t)=\int_{\mathbb R}S(x-y,t)\phi_{\mathrm{odd}}(y)\,dy
$$

로 놓고, $$v(x,t)=u(x,t)$$를 $$x\ge0$$에 제한하자.
$$\phi_{\mathrm{odd}}\in L^1(\mathbb R)$$이므로 $$t>0$$에서 매끄럽고 방정식을 만족한다.
이제 남은 핵심은 $$u(0,t)=0$$이다. 처음에 원점 값을 $$0$$으로 정의한 것만으로는
충분하지 않다. 시간이 흐른 뒤에도 그 값을 유지하는지 확인해야 한다.

heat kernel은 공간변수에 대해 even 함수이다. 즉 $$S(-x,t)=S(x,t)$$이다. 이를 먼저 쓰고 $$y\mapsto-y$$로 치환하면

$$
\begin{align*}
 u(-x,t)
 &=\int_{\mathbb R}S(-x-y,t)\phi_{\mathrm{odd}}(y)\,dy\\
 &=\int_{\mathbb R}S(x+y,t)\phi_{\mathrm{odd}}(y)\,dy\\
 &=\int_{\mathbb R}S(x-y,t)\phi_{\mathrm{odd}}(-y)\,dy\\
 &=-\int_{\mathbb R}S(x-y,t)\phi_{\mathrm{odd}}(y)\,dy=-u(x,t).
\end{align*}
$$

마지막 부호는 초기함수의 odd라는 성질에서 나온다. 따라서 양의 시간에도 해는
odd 함수이고, $$u(0,t)=-u(0,t)$$이므로 $$v(0,t)=0$$이다.
이것이 odd extension을 고른 이유이다.

초기값은 우선 $$L^1(0,\infty)$$의 의미에서 회복된다.
각 점에서 initial data를 회복하려면 앞에서 확인한 것과 같은 충분조건을 줄 수 있다.
예를 들어 $$\phi\in C^1([0,\infty))$$, $$\phi(0)=0$$,
$$\phi(x)\to0$$ ($$x\to\infty$$), $$\phi'\in L^1(0,\infty)$$를 추가하면,
odd extension에도 앞의 부분적분 논증을 적용할 수 있어

$$
\lim_{t\downarrow0}v(x,t)=\phi(x)\qquad(x>0)
$$

를 얻는다.

마지막으로 원래의 양의 반직선 데이터만으로 공식을 정리해 보자.
적분을 $$y>0$$과 $$y<0$$으로 나누면

$$
\begin{align*}
 v(x,t)
 &=\int_0^\infty S(x-y,t)\phi(y)\,dy
   -\int_{-\infty}^0S(x-y,t)\phi(-y)\,dy\\
 &=\int_0^\infty S(x-y,t)\phi(y)\,dy
   -\int_0^\infty S(x+y,t)\phi(y)\,dy\\
 &=\int_0^\infty\bigl[S(x-y,t)-S(x+y,t)\bigr]\phi(y)\,dy.
\end{align*}
$$

두 번째 적분에서만 변수를 반사했다. $$x=0$$을 넣으면 두 kernel이 같아져
서로 지워지므로, 최종 공식에서도 boundary condition이 보인다.

이 방법을 **method of odd extensions** 또는 **reflection method**라고
한다. 전공간으로 확장하고, 대칭성을 이용해 원하는 boundary condition을 만든 뒤, 원래
영역으로 제한한 것이다. 부호를 바꾸어 반사하는 odd extension을 보았으니, 부호를 그대로 두고 반사하는
even extension도 생각할 수 있다.
homogeneous Neumann condition에는 그 방법이 쓰이며, 다음에 이어서 살펴보자.

{% endraw %}

<!-- prettier-ignore-end -->

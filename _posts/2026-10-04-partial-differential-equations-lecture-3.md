---
layout: post
title: "PDEs and Applications 3: Wave and Diffusion Equations"
date: 2026-10-04 12:03:00 +0900
description: "Wave equation의 해와 diffusion equation의 maximum principle, 유일성을 다룬다."
tags: partial-differential-equations lecture-notes
categories: partial-differential-equations
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 편미분방정식과 응용 강의노트이다. (Lecture 3)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/lecture_3.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/partial-differential-equations/main.pdf' | relative_url }})

{% raw %}

#### Causality and energy conservation

먼저 지난 내용을 잠깐 연결해 보자. 현의 작은 transverse 진동에서는 wave equation을,
정지한 액체 속 물질의 흐름에서는 Fick's law를 이용해 diffusion equation을 얻었다.
방정식에 현재 상태와 경계 상태를 주고 나면, 해가 있는지, 하나인지, 데이터의 변화에
안정적인지를 확인해야 했다. 조건을 어떻게 주는지도 문제의 일부이다.

지난번 wave equation을 풀 때는 differential operator를 transport operator 두 개로 나누었다. 먼저
homogeneous transport equation을 풀고, 그 값을 우변으로 넣어 inhomogeneous transport equation을 풀었다. 오늘은
그 결과인 공식을 다시 가져와서, 공식이 해에 대해 무엇을 말해주는지 읽어 보자.
공간 전체에서의 wave equation

$$
u_{tt}=c^2u_{xx},\qquad u(x,0)=\phi(x),\qquad u_t(x,0)=\psi(x),
 \qquad c>0
$$

의 해는 다음 d'Alembert's formula로 주어진다.

$$
u(x,t)=\frac{\phi(x-ct)+\phi(x+ct)}2
       +\frac1{2c}\int_{x-ct}^{x+ct}\psi(s)\,ds
$$

이 공식을 한 번 얻고 나면 끝일까? 식을 미분하면 각 점에서 방정식을 만족하는
classical solution임을 확인할 수 있고, 함수의 인수와 적분 구간을 보면 초기 정보가 어디로
전달되는지도 알 수 있다. 이 두 가지를 차례대로 보자.

<div class="real-analysis-statement" markdown="1">

**Classical solution.**

$$C^2$$라는 것은 두 번 미분할 수 있고 그 미분들이 연속이라는 뜻이다.
초기함수 $$\phi,\psi$$가 이 성질을 가지면 공식의 각 항을 직접 미분할 수 있다.
따라서 위 공식으로 정의한 $$u$$는 임의의 $$T>0$$에 대해

$$
u\in C^2(\mathbb R\times[0,T])
$$

이며, 방정식과 initial condition을 각 점에서 만족한다. 이러한 해를
**classical solution**이라고 한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Causality: domain of influence and domain of dependence.**

<ol type="1" markdown="1">

<li markdown="1">

**domain of influence.**
이제 $$a$$라는 위치를 하나 고정하자. initial data가 $$a$$ 근처에만 모여 있고,
멀리 떨어진 곳에서는 $$0$$이라고 생각해 보자. 처음에는 그 근처에만 있던 정보가
시간이 지난 뒤 어디에 나타날 수 있을까? 우선 상쇄를 피하려면 양의 데이터로
그림을 생각해도 좋다. 이제 d'Alembert's formula의 양 끝점과 적분 구간을 보자.
공식에 나타나는 구간에 $$a$$가 포함되는 조건은

$$
a\in[x-ct,x+ct]\iff |x-a|\le ct\iff x\in[a-ct,a+ct]
$$

이다. 즉 처음 위치 $$a$$의 정보가 갈 수 있는 범위가 좌우로 $$ct$$만큼 열린다.
따라서 시간 $$t$$에서의 domain of influence는 $$[a-ct,a+ct]$$이며,
이를 모든 시간에 걸쳐 모으면 시공간의 영역

$$
\{(x,t):t\ge0,\ |x-a|\le ct\}
$$

을 얻는다. $$x$$--$$t$$ 평면에서 시간을 하나 정하고 수평선을 그어 보자.
그 선 위에 $$a-ct$$부터 $$a+ct$$까지의 구간이 생긴다. 더 나중 시각으로 올라가면
구간이 더 넓어진다. 이 구간들을 모두 모은 것이 앞쪽으로 열리는 원뿔이다.
정보가 처음부터 공간 전체에 퍼져 있는 것이 아니라 속도 $$c$$로 전파되는 것이다.

initial data가 한 점 근처에 집중된 경우를 구체적으로 쓰면,
$$\phi,\psi$$가 $$[a-r,a+r]$$ 밖에서 $$0$$일 때 ($$r>0$$)

$$
x\notin[a-r-ct,a+r+ct]\quad\Longrightarrow\quad u(x,t)=0.
$$

해당 영역 안에서는 initial data의 영향을 받을 수 있지만, 함수값의 상쇄 등에 의해
해가 $$0$$이 될 수도 있다.

</li>

<li markdown="1">

**domain of dependence.**
이번에는 질문을 반대로 해 보자. 관측점 $$(x,t)$$를 고정하고, 그곳의 값이
초기의 어느 부분에서 왔는지 거슬러 올라가 보자. 그곳의 해를 구하는 데 필요한 initial data는
$$[x-ct,x+ct]$$ 위의 데이터이다.
더 정확히는 $$\phi$$의 두 끝점 값과 $$\psi$$의 구간 적분으로 $$u(x,t)$$가 결정된다.
따라서 두 initial data 쌍이 이 구간에서 같으면 두 해의 $$(x,t)$$에서의 값도 같다.
이 구간을 $$(x,t)$$의 초기 시각에서의 domain of dependence라고 한다.

</li>

<li markdown="1">

**중간 시각에서의 데이터.**
좀 더 정확하게 보려면 처음부터 시간 $$0$$을 고집할 필요가 없다.
중간 시각 $$t'$$에서의 displacement와 속도를 안다고 하자. 그때까지 해는 이미
한 번 진화해 왔지만, 그 상태를 새로운 initial data로 쓸 수 있다.
$$0\le t'<t$$와 $$\Delta t=t-t'$$에 대해, 앞의 유도에서 시간 적분을
$$0$$부터가 아니라 $$t'$$부터 시작하면

$$
\begin{align*}
 u(x,t)
 &=\frac12\bigl[u(x-c\Delta t,t')+u(x+c\Delta t,t')\bigr]\\
 &\quad+\frac1{2c}\int_{x-c\Delta t}^{x+c\Delta t}u_t(s,t')\,ds.
\end{align*}
$$

즉 $$u(x,t)$$는 시각 $$t'$$에서 구간 $$[x-c\Delta t,x+c\Delta t]$$ 위의
displacement와 속도로 결정된다. 모든 중간 시각을 모으면 뒤로 향한 삼각형

$$
\{(y,s):0\le s\le t,\ |y-x|\le c(t-s)\}
$$

을 얻는다. 시각 $$0$$의 넓은 구간에서 출발해서 관측 시각 쪽으로 올라갈수록
구간이 좁아지고, 끝에서는 $$(x,t)$$ 한 점이 된다. 이 삼각형이 시공간에서의
domain of dependence이다. 중간 시각을 초기 시각으로 바꾸는 이 공식은 나중에 반직선 위의
wave equation을 다룰 때 다시 쓰게 된다.

</li>

</ol>

</div>

<div class="real-analysis-statement" markdown="1">

**Energy conservation.**

이번에는 energy를 보자. $$u$$는 현이 평형 위치에서 얼마나 벗어났는지를 나타내는
displacement였으므로 $$u_t$$는 속도이다. 운동에 해당하는 kinetic energy에
속도의 제곱이 들어가는 것을 떠올려 보자.
실수값 해 $$u$$가 충분히 매끄럽고, 무한대에서 충분히 빠르게 감쇠한다고 하자.
구체적으로 아래 적분과 시간미분이 가능하고 부분적분에서 나오는 경계항
$$u_tu_x$$가 $$x\to\pm\infty$$에서 $$0$$이 된다고 가정한다.
밀도 계수를 정규화한 kinetic energy는

$$
KE(t)=\frac12\int_{\mathbb R}|u_t(x,t)|^2\,dx
$$

이다.
이 적분을 시간에 대해 미분해 보자. 미분을 적분 안으로 넣은 다음,
바로 여기서 방정식 $$u_{tt}=c^2u_{xx}$$를 사용한다. 그다음에는 공간미분을
부분적분으로 다른 항에 옮기자. 경계항을 버릴 수 있도록 감쇠를 가정한 것이다.

$$
\begin{align*}
 \frac{d}{dt}KE(t)
 &=\int_{\mathbb R}u_tu_{tt}\,dx
 =c^2\int_{\mathbb R}u_tu_{xx}\,dx\\
 &=-c^2\int_{\mathbb R}u_{xt}u_x\,dx
 =-\frac{c^2}{2}\frac{d}{dt}\int_{\mathbb R}|u_x|^2\,dx.
\end{align*}
$$

따라서 total energy를

$$
E(t)=\frac12\int_{\mathbb R}
       \bigl(|u_t(x,t)|^2+c^2|u_x(x,t)|^2\bigr)\,dx
$$

로 정의하면 위 계산의 오른쪽을 왼쪽으로 옮겨

$$
E'(t)=0,\qquad E(t)=E(0).
$$

즉 시간으로 미분했더니 $$0$$이므로 합은 시간에 무관하다. 외부에서 힘을 더하지 않는
현재 모형에서 기대한 energy conservation이다. kinetic energy 자체가 항상 일정한 것은 아니지만,
변형에 해당하는 항까지 더한 total energy는 일정하다.

</div>

### 2.3 The Diffusion Equation

유한한 구간에서의 diffusion equation

$$
u_t=ku_{xx},\qquad 0<x<l,\quad t>0,\qquad k>0,\quad l>0
$$

을 생각해 보자. 이번에는 관의 길이가 유한하다. 해를 정하려면 양 끝의 조건이
있어야 하지만, 지금은 그 값을 구체적으로 정하지 않는다. 먼저 어떤 해든
만족해야 하는 성질을 보려는 것이다. 바로 maximum principle이다.
온도를 예로 들면, 내부의 온도는 초기 온도와 양 끝에서 주어진 온도의 최대값을
넘을 수 없다는 원리이다.

<div class="real-analysis-statement" markdown="1">

**Theorem (Weak Maximum Principle).**

$$T>0$$에 대해 $$R=[0,l]\times[0,T]$$라 하자.
$$u\in C(R)$$이고, $$(0,l)\times(0,T]$$에서 시간에 대해 한 번,
공간에 대해 두 번 연속 미분 가능하며

$$
u_t=ku_{xx}
$$

를 만족한다고 하자. $$t=T$$에서의 시간미분은 왼쪽에서 해석한다.
이때

$$
\Gamma=([0,l]\times\{0\})\cup(\{0,l\}\times[0,T])
$$

에 대해

$$
\max_R u=\max_\Gamma u.
$$

즉 최대값은 초기 시각 또는 양쪽 공간 경계에서도 달성된다.

</div>

그림으로는 시간 $$0$$인 아랫변과 공간의 양 끝에 해당하는 두 옆변을 보고 있다.
위쪽 변 $$t=T$$는 이 세 변에 넣지 않는다는 점에 주의하자. 왜 위쪽을 따로
다뤄야 하는지는 곧 증명에서 드러난다.
이 명제는 내부에서 최대값을 가질 수 없다는 뜻은 아니다. 예를 들어 상수함수는
모든 점에서 최대값을 갖는다. 핵심은 전체의 최대값을 위쪽 변 $$t=T$$를 제외한
세 변의 데이터만으로 정할 수 있다는 것이다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 세 변에서 최대값 $$M=\max_\Gamma u$$를 구했다고 하자.
$$R$$이 compact이고 $$u$$가 연속이므로 최대값은 존재한다. 목표는 세 변에서만
알고 있는 $$u\le M$$을 직사각형 전체로 확장하는 것이다.
이제 작은 양을 더해서 부등식을 엄격하게 만들어 보자. 임의의 $$\epsilon>0$$에 대해

$$
v(x,t)=u(x,t)+\epsilon x^2
$$

로 두면, $$\Gamma$$에서 $$0\le x^2\le l^2$$이므로

$$
v\le M+\epsilon l^2.
$$

한편 $$(0,l)\times(0,T]$$에서

$$
v_t-kv_{xx}=u_t-ku_{xx}-2\epsilon k=-2\epsilon k<0.
$$

$$u$$를 그대로 썼다면 여기서 $$0$$이 나왔을 것이다. $$\epsilon x^2$$를 더한 덕분에
엄격하게 음수가 되었다. 이것이 보조함수 $$v$$를 도입한 이유이다.
이제 최대점에서 미분의 부호를 살펴보면 모순을 얻을 수 있다.

먼저 최대점 $$(x_0,t_0)$$가 $$(0,l)\times(0,T)$$ 안에 있다고 가정하자.
미분가능한 함수의 내부 최대점에서

$$
v_t(x_0,t_0)=0,\qquad v_x(x_0,t_0)=0,\qquad v_{xx}(x_0,t_0)\le0
$$

이므로 $$(v_t-kv_{xx})(x_0,t_0)\ge0$$이다. 이는 위 부등식과 모순이다.

그런데 여기서 증명을 끝내면 한 경우를 빠뜨린다. 위쪽 변에서 최대가 될 수도
있지 않은가? 그 점은 두 변수의 내부점이 아니므로 앞의 미분 조건을 모두 쓸 수는
없다. $$0<x_0<l$$, $$t_0=T$$라고 두고 다시 보자.
공간변수에 대해서는 여전히

$$
v_x(x_0,T)=0,\qquad v_{xx}(x_0,T)\le0
$$

이다. 공간변수만 보면 여전히 수평 구간의 내부 최대점이다. 반면 시간은 끝점이라
$$v_t=0$$이라고 할 수 없다. 대신 과거의 값과 비교하면 된다. $$0<\delta\le T$$일 때
$$v(x_0,T)\ge v(x_0,T-\delta)$$이므로

$$
v_t(x_0,T)=\lim_{\delta\downarrow0}
 \frac{v(x_0,T)-v(x_0,T-\delta)}{\delta}\ge0.
$$

따라서 이 경우에도 $$(v_t-kv_{xx})(x_0,T)\ge0$$으로 모순이다.
위쪽 양 끝점은 이미 $$\Gamma$$에 포함된다.

결국 $$v$$의 최대값은 $$\Gamma$$에서 달성되므로 $$R$$ 전체에서

$$
v\le M+\epsilon l^2,\qquad
 u(x,t)\le M+\epsilon(l^2-x^2).
$$

여기서 $$u$$는 우리가 선택한 $$\epsilon$$과 관계없는 원래 함수이다.
그러므로 $$\epsilon$$을 마음대로 작게 보내도 되고, $$\epsilon\downarrow0$$으로 보내면
원하던 $$u\le M$$을 얻는다.
$$\Gamma\subset R$$이므로 $$\max_Ru=M$$이다.

</div>

이제 왜 이 결과를 weak maximum principle이라고 부르는지 생각해 보자. 더 강한 결론이 있기
때문이다. 먼저 다차원에서도 같은 내용을 쓸 수 있도록 영역의 이름을 정리하자.

<div class="real-analysis-statement" markdown="1">

**Maximum principles in higher dimensions.**

<ol type="1" markdown="1">

<li markdown="1">

$$\Omega\subset\mathbb R^d$$가 유계인 열린 연결집합일 때

$$
\Omega_T=\Omega\times(0,T],\qquad
 \Gamma_T=\overline{\Omega_T}\setminus\Omega_T
$$

로 쓴다. $$\Omega_T$$를 **parabolic cylinder**,
$$\Gamma_T$$를 **parabolic boundary**라고 한다.
구체적으로

$$
\Gamma_T=(\overline\Omega\times\{0\})
          \cup(\partial\Omega\times[0,T])
$$

이다. 공간 영역 위에 시간축을 세운 모양을 생각하면 원통이라는 이름을
이해할 수 있다. 다만 위쪽 면 $$\Omega\times\{T\}$$는 parabolic boundary가 아니라
$$\Omega_T$$에 들어간다. 일차원 증명에서 위쪽 변을 따로 처리한 것과 연결된다.

$$C_1^2(\Omega_T)$$는 시간에 대해 한 번, 공간에 대해 두 번 연속 미분 가능한
함수들의 공간을 뜻한다. $$u\in C_1^2(\Omega_T)\cap C(\overline{\Omega_T})$$가

$$
u_t=k\Delta u\quad\text{in }\Omega_T
$$

를 만족하면 다차원의 weak maximum principle은

$$
\max_{\overline{\Omega_T}}u=\max_{\Gamma_T}u
$$

로 표현된다.

</li>

<li markdown="1">

**Strong maximum principle.**
위 가정 아래에서 $$u$$가 $$\overline{\Omega_T}$$ 전체의 최대값을
$$(x_0,t_0)\in\Omega_T$$에서 달성하면,

$$
u(x,t)=u(x_0,t_0)\qquad\text{for }(x,t)\in\Omega\times(0,t_0].
$$

즉 시각 $$t_0$$까지는 공간과 시간에 대해 상수이다.
여기서 결론이 성립하는 시간의 방향에 주의하자. 상수라고 말할 수 있는 것은
$$t_0$$까지이다. 그 시각보다 뒤에도 계속
상수인지는 이 정리로 알 수 없다. 다차원의 weak maximum principle과 strong maximum principle은
여기서는 진술만 하고 증명은 전개하지 않는다.

</li>

</ol>

</div>

maximum principle이 해를 구하는 데 어떤 도움을 줄까? 적어도 해가 하나뿐이라는 것을
보일 수 있다. 이번에는 우변이 있는 inhomogeneous equation도 허용하자.

<div class="real-analysis-statement" markdown="1">

**Corollary (Uniqueness of the solution).**

$$\Omega=(0,l)$$에서 다음 initial-boundary value problem (IBVP)를 생각하자.

$$
\begin{align*}
 u_t-ku_{xx}&=f(x,t),&&0<x<l,\quad 0<t\le T,\\
 u(x,0)&=\phi(x),&&0\le x\le l,\\
 u(0,t)&=g(t),\qquad u(l,t)=h(t),&&0\le t\le T,
\end{align*}
$$

여기서 $$g,h\in C^1([0,T])$$, $$\phi\in C^2([0,l])$$이다.
$$u_1,u_2\in C_1^2(\Omega_T)\cap C(\overline{\Omega_T})$$가 이 문제의 두 해이면

$$
u_1\equiv u_2\quad\text{on }\overline{\Omega_T}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

해가 두 개 있다고 가정하고 서로 빼 보자. $$w=u_1-u_2$$라 두면
우변도 같고 initial and boundary data도 같으므로 모두 없어진다. 따라서

$$
w_t-kw_{xx}=0,\qquad w(x,0)=0,\qquad w(0,t)=w(l,t)=0.
$$

세 변의 최대값이 $$0$$이므로 weak maximum principle에 의해 $$w\le0$$이다.
한쪽 부등식만 얻었으니 아직 $$w=0$$이라고 할 수는 없다. $$-w$$도 같은 homogeneous equation과 영 데이터를
만족하므로 다시 maximum principle을 적용하면 $$-w\le0$$이다. 따라서 $$w=0$$이다.

</div>

이는 해가 존재한다면 많아야 하나라는 결론이다. 해의 existence까지 보인 것은 아니다.
연속인 해가 존재하려면 모서리에서 $$\phi(0)=g(0)$$, $$\phi(l)=h(0)$$이어야 하지만,
이 조건만으로 existence를 결론내릴 수는 없다.

<div class="real-analysis-statement" markdown="1">

**Energy method and stability.**

같은 uniqueness를 다른 방법으로도 증명해 보자. 이번에는 해에서 만든 적분량의
변화를 추적하는 energy method를 사용한다. PDE에서 energy라고
부르는 양이 언제나 하나로 정해져 있는 것은 아니다. 함수의 제곱적분이나 미분의
제곱적분을 문제에 맞게 사용한다. 파동에서는 두 미분의 제곱합을 썼지만,
여기서는 두 해의 차이 $$w$$ 자체의 제곱적분을 보자.
아래에서는 적분의 시간미분과 경계까지의 부분적분이 가능한 regularity를 가정한다.
즉 아래의 미분과 부분적분이 정당할 만큼 해가 매끄럽다고 두는 것이다.
두 해의 차이 $$w$$에 대해

$$
\begin{align*}
 \frac12\frac{d}{dt}\int_0^l w^2\,dx
 &=\int_0^l ww_t\,dx
 =k\int_0^l ww_{xx}\,dx\\
 &=k[ww_x]_0^l-k\int_0^l w_x^2\,dx
 =-k\int_0^l w_x^2\,dx\le0.
\end{align*}
$$

왜 경계항이 사라졌는지 확인해 보자. 두 해의 경계값이 같아서 차이는
$$w(0,t)=w(l,t)=0$$이기 때문이다. 남은 항은 제곱적분에 $$-k$$를 곱한 것이므로
음수이거나 $$0$$이다. 시간에 따라 이 양이 증가하지 않으므로

$$
0\le\int_0^l w(x,t)^2\,dx\le\int_0^l w(x,0)^2\,dx.
$$

같은 initial condition이면 우변이 $$0$$이므로 왼쪽 적분도 $$0$$이다.
$$w$$가 연속이므로 어느 점에서도 $$w\ne0$$일 수 없고, 따라서 $$w\equiv0$$이다.

더 일반적으로 우변 $$f$$와 양 끝의 데이터 $$g,h$$는 같고 initial condition만
$$\phi_1,\phi_2$$로 다른 두 해를 생각하면

$$
\int_0^l|u_1(x,t)-u_2(x,t)|^2\,dx
 \le\int_0^l|\phi_1(x)-\phi_2(x)|^2\,dx.
$$

$$\|q\|_{L^2(0,l)}=(\int_0^l\vert q\vert ^2\,dx)^{1/2}$$로 쓰면

$$
\|u_1(\cdot,t)-u_2(\cdot,t)\|_{L^2(0,l)}
 \le\|\phi_1-\phi_2\|_{L^2(0,l)}.
$$

이 부등식은 uniqueness보다 더 많은 것을 말해준다. initial data 하나가 $$0$$이고
다른 하나가 작은 함수 $$\epsilon\phi$$라고 생각해 보자. 처음의 차이가 작으면
이후의 차이도 이 제곱적분 기준에서 작게 유지된다. 그래서 initial data에 대한
$$L^2$$ stability estimate라고 부른다.
여기의 제곱적분은 해의 차이를 측정하는 양이며, wave equation의 total energy와는
달리 시간에 따라 증가하지 않는 부등식을 만족한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Minimum principle.**

weak maximum principle과 같은 가정 아래에서

$$
\min_{\overline{\Omega_T}}u=\min_{\Gamma_T}u.
$$

실제로 $$-u$$도 diffusion equation을 만족하므로

$$
\max_{\overline{\Omega_T}}(-u)=\max_{\Gamma_T}(-u)
$$

에 부호를 바꾸면 된다. 특히 양의 최소값을 갖는 해에도 적용되며,
minimum principle 자체에는 양수라는 가정이 필요하지 않다.

</div>

지금까지는 해가 있다면 어떤 성질을 가져야 하는지, 그리고 해가 둘일 수 없는지를
보았다. 이것만으로 해를 만들어낸 것은 아니다. 유한 구간의 diffusion equation은 나중에
separation of variables를 배운 뒤 다시 풀고, 다음에는 먼저 전공간에서 diffusion equation의 해를 구성한다.

{% endraw %}

<!-- prettier-ignore-end -->

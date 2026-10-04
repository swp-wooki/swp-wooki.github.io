---
layout: post
title: "Real Analysis 10: Functions of Bounded Variation and Absolute Continuity"
date: 2026-06-04 12:00:00 +0900
description: "유계변동함수, 절대연속함수, 점프함수의 미분가능성을 정리한다."
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

### 3.3. Differentiability of functions

#### 3.3.1. Functions of bounded variation

**미분을 먼저 하는 방향과 rectifiable curve**

<span id="l15:bv"></span>

이제 $$F$$에서 출발하여 미분한 뒤 적분하는 방향으로 돌아가자. 연속이라는 조건만으로는 도함수가 거의 모든 점에서 존재한다고 할 수 없다. 도함수가 존재해도 적분 가능성이 별도 문제이다. 먼저 거의 모든 점에서의 미분 가능성을 보장하는 bounded variation을 살펴본다.

연속 함수 $$z(t)=(x(t),y(t))$$, $$a\le t\le b$$로 주어진 곡선을 생각하자. 분할 $$P:a=t_0<\cdots<t_N=b$$에 따라 곡선 위의 점을 직선으로 연결하면 다각선의 길이는

$$
L_P=\sum_{j=1}^N|z(t_j)-z(t_{j-1})|
$$

이다. 분할을 세분하면 삼각부등식에 의해 이 길이가 줄어들지 않는다.

<div class="real-analysis-statement" markdown="1">

**Definition (Rectifiable curve와 bounded variation).**

모든 분할에서 $$L_P$$가 같은 유한 상수로 제어되면 곡선을 rectifiable이라 하고 $$L(\gamma)=\sup_PL_P$$를 길이라 한다.

함수 $$F:[a,b]\to\mathbb C$$에 대해 모든 분할에서

$$
\sum_{j=1}^N|F(t_j)-F(t_{j-1})|\le M<\infty
$$

이면 $$F$$는 bounded variation이며 $$F\in BV[a,b]$$로 쓴다. 이 함수에는 연속성을 가정하지 않는다.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.1.**

연속 곡선 $$z=(x,y)$$가 rectifiable일 필요충분조건은 $$x,y\in BV[a,b]$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

실수 $$u,v$$에 대해 $$\vert u\vert ,\vert v\vert \le\vert u+iv\vert \le\vert u\vert +\vert v\vert $$이다. 각 분할 증분에 적용하여 더하면 곡선의 variation이 유한할 때 각 좌표의 variation도 유한하고, 역으로 각 좌표의 variation이 유한하면 곡선의 variation도 유한하다.

</div>

<div class="real-analysis-statement" markdown="1">

**Bounded variation의 예.**

<span id="l15:bv-examples"></span>

<ol type="1" markdown="1">

<li markdown="1">

증가함수 $$F:[a,b]\to\mathbb R$$이면 모든 분할에서 합이 telescoping하여

$$
\sum_j|F(t_j)-F(t_{j-1})|=F(b)-F(a)<\infty.
$$

Jump가 있어도 성립한다. 따라서 bounded variation은 연속성을 함의하지 않는다.

</li>

<li markdown="1">

$$F$$가 $$[a,b]$$에서 연속이고 $$(a,b)$$에서 미분 가능하며 $$\vert F'\vert \le M$$이면 mean value theorem으로 variation이 $$M(b-a)$$ 이하이다. 복소수값 함수는 실수부와 허수부에 이 논리를 적용한다.

</li>

<li markdown="1">

$$p,q>0$$이고 $$F(0)=0$$, $$F(x)=x^p\sin(x^{-q})$$이면 $$F\in BV[0,1]$$일 필요충분조건은 $$p>q$$이다. 실제로

$$
F'(x)=px^{p-1}\sin(x^{-q})-qx^{p-q-1}\cos(x^{-q})
$$

이고 $$p>q$$이면 절댓값을 적분하여 variation을 유한하게 제어한다. $$p\le q$$이면 $$x_n=(\pi/2+n\pi)^{-1/q}$$에서 함수값이 번갈아 $$\pm x_n^p$$가 된다. 이 점들을 포함한 분할의 variation에는 $$x_n^p+x_{n+1}^p$$들의 합이 들어간다. 이는 $$\sum n^{-p/q}$$와 같은 수렴 성질을 가져 발산한다. 진폭은 작아져도 진동이 너무 빠르면 total variation은 무한할 수 있다.

</li>

</ol>

</div>

**Positive와 negative variation으로 분해하기**

<span id="l15:variation"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (세 가지 variation).**

$$[a,x]$$의 모든 분할 $$P$$에 대하여 $$\Delta_jF=F(t_j)-F(t_{j-1})$$라 쓰고

$$
T_F(a,x)=\sup_P\sum_j|\Delta_jF|
$$

를 total variation이라 한다. $$F$$가 실수값이면

$$
P_F(a,x)=\sup_P\sum_j(\Delta_jF)_+,
 \qquad N_F(a,x)=\sup_P\sum_j(-\Delta_jF)_+
$$

를 positive variation과 negative variation이라 한다. 여기서 $$u_+=\max(u,0)$$이다.

</div>

Negative variation도 음수가 아니라 내려간 양의 총합이다. $$x$$가 바뀌면 분할하는 구간 자체가 $$[a,x]$$로 바뀐다. 더 큰 구간에는 기존 분할을 그대로 포함시킬 수 있으므로 세 함수는 모두 $$x$$에 대해 증가한다. Positive와 negative의 구별은 순서가 있는 실수값 함수에서만 정의하고, total variation은 복소수값에도 정의한다.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.2.**

실수값 $$F\in BV[a,b]$$에 대하여

$$
F(x)-F(a)=P_F(a,x)-N_F(a,x),\qquad
 T_F(a,x)=P_F(a,x)+N_F(a,x).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

한 분할을 고정하면 두 식은 증분을 양수와 음수로 나누고 더하는 계산이다. 문제는 각 supremum을 서로 다른 분할에서 근사할 수 있다는 점이다.

$$\varepsilon>0$$에 대해 $$P_F$$를 $$\varepsilon$$ 이내로 근사하는 분할과 $$N_F$$를 $$\varepsilon$$ 이내로 근사하는 분할을 각각 고른다. 두 분할점의 합집합으로 common refinement $$P$$를 만든다. $$(u+v)_+\le u_++v_+$$이므로 refinement는 positive variation의 합을 감소시키지 않는다. Negative variation도 같다. 따라서 이 하나의 분할에서

$$
0\le P_F-\sum_j(\Delta_jF)_+<\varepsilon,
 \qquad0\le N_F-\sum_j(-\Delta_jF)_+<\varepsilon.
$$

Telescoping sum으로

$$
F(x)-F(a)=\sum_j(\Delta_jF)_+-\sum_j(-\Delta_jF)_+
$$

이므로 첫 등식의 두 변 차이는 $$2\varepsilon$$ 미만이다. $$\varepsilon\downarrow0$$으로 보내면 첫 등식이 나온다.

모든 분할에서 $$\sum\vert \Delta_jF\vert \le P_F+N_F$$이므로 $$T_F\le P_F+N_F$$이다. 반대로 방금 고른 common refinement에서

$$
P_F+N_F<\sum_j|\Delta_jF|+2\varepsilon\le T_F+2\varepsilon.
$$

다시 $$\varepsilon\downarrow0$$으로 보내면 두 번째 등식을 얻는다.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.3.**

<span id="l15:jordan"></span>

실수값 $$F$$가 bounded variation일 필요충분조건은 두 bounded increasing 함수의 차로 표현되는 것이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$F=F_1-F_2$$이고 각 $$F_j$$가 bounded increasing이면 삼각부등식과 telescoping sum으로 $$T_F(a,b)\le F_1(b)-F_1(a)+F_2(b)-F_2(a)<\infty$$이다. 역으로 Lemma 3.2에서

$$
F(x)=\bigl(F(a)+P_F(a,x)\bigr)-N_F(a,x)
$$

로 쓴다. 두 항은 증가하며 전체 variation에 의해 bounded이다.

</div>

이 분해는 일반 BV 함수의 문제를 증가함수의 문제로 줄여 준다. 복소수값 함수는 실수부와 허수부에 각각 적용하여 네 개의 bounded increasing 실수값 함수의 복소수 선형결합으로 나타낸다.

**Rising sun lemma**

<span id="l15:rising"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.4.**

$$F\in BV[a,b]$$이면 $$F'$$가 거의 모든 점에서 존재한다.

</div>

먼저 증가하고 연속인 $$F$$를 다룬다. 연속성은 다음 lemma에서 쓰인다. 일반 증가함수의 jump 부분은 뒤에서 분리하여 다룬다.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.5: Rising sun lemma.**

$$G:\mathbb R\to\mathbb R$$가 연속이고

$$
E=\{x:G(x+h)>G(x)\text{인 }h>0\text{가 존재한다}\}
$$

이면 $$E$$는 열린집합이다. 따라서 disjoint한 열린구간의 countable union으로 쓸 수 있고, 그중 유한한 component $$(a_k,b_k)$$에서는 $$G(a_k)=G(b_k)$$이다.

</div>

오른쪽에서 수평으로 햇빛이 들어온다고 상상하자. 오른쪽에 자신보다 높은 그래프 점이 있으면 그 점은 그늘에 놓인다. $$E$$는 바로 그 점들의 가로좌표이다. $$G$$가 감소하면 $$E$$는 비어 있다. 그늘의 한 component에서는 양 끝의 높이가 같다는 것이 lemma의 기하학적 의미이다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$x\in E$$에서 $$G(x+h)>G(x)$$인 $$h>0$$을 고정한다. 연속성 때문에 $$y$$가 $$x$$에 충분히 가까우면 $$G(y+h)>G(y)$$가 유지된다. 따라서 $$E$$는 열려 있다.

유한한 component $$(u,v)$$를 잡자. $$u\notin E$$이므로 $$G(v)\le G(u)$$이다. 만일 엄격히 작다면 intermediate value theorem으로 높이 $$c_0=(G(u)+G(v))/2$$를 취하는 점이 존재한다. 이 높이를 취하는 점들 중 가장 오른쪽 것을 $$c\in(u,v)$$라 하자. 해당 level set은 compact이며 양 끝에서 그 높이를 취하지 않으므로 이런 $$c$$가 존재한다.

$$c\in E$$이므로 $$d>c$$이면서 $$G(d)>G(c)$$인 점이 있다. $$v\notin E$$이므로 $$t\ge v$$에서 $$G(t)\le G(v)<G(c)$$이다. 따라서 $$d<v$$이다. 이제 $$G(d)>G(c)>G(v)$$이므로 intermediate value theorem을 $$(d,v)$$에 적용하여 $$G(c')=G(c)$$인 $$c'>d$$를 얻는다. 이는 $$c$$를 가장 오른쪽 점으로 고른 것과 모순이다.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 3.6: 유한 구간과 양쪽 방향.**

$$G\in C[a,b]$$이고 $$x+h\in[a,b]$$인 $$h>0$$을 허용하면, 위의 $$E\subset(a,b)$$는 열린집합이며 각 component $$(u,v)$$에서 $$G(u)=G(v)$$이다. 다만 $$u=a$$일 때는 $$G(u)\le G(v)$$만 보장한다. 따라서 모든 component에서 $$G(v)-G(u)\ge0$$이다.

반대로 $$h<0$$을 허용하는 left-looking set에서는 $$G(u)=G(v)$$이고, $$v=b$$인 component에서만 $$G(u)\ge G(v)$$일 수 있다. 따라서 모든 component에서 $$G(v)-G(u)\le0$$이다.

</div>

유한 구간에서는 햇빛을 가릴 수 있는 점도 구간 안에서만 찾는다. 그래서 한쪽 끝에 붙은 그늘에는 양 끝 높이의 등식 대신 한 방향의 부등식만 남는다. Left-looking version은 $$x\mapsto G(-x)$$로 좌우를 바꾸어 얻는다.

**Dini numbers로 미분 가능성을 나누어 보기**

<span id="l15:dini"></span>

$$F$$를 증가하고 연속인 실수값 함수라 하자. 내부점에서

$$
\Delta_hF(x)=\frac{F(x+h)-F(x)}h,
 \quad D^\pm F(x)=\limsup_{\substack{h\to0\\\pm h>0}}\Delta_hF(x),
 \quad D_\pm F(x)=\liminf_{\substack{h\to0\\\pm h>0}}\Delta_hF(x)
$$

로 둔다. Superscript는 limsup, subscript는 liminf를 나타내고, $$+$$와 $$-$$는 접근 방향을 나타낸다. 네 수가 유한한 같은 값이면 양쪽 차분몫의 극한이 존재한다. 증가성으로 모든 차분몫은 음이 아니다.

다음 두 가지를 보이면 충분하다.

$$
D^+F<\infty\quad\text{거의 모든 곳에서},\qquad
 D^+F\le D_-F\quad\text{거의 모든 곳에서}.
$$

실제로 $$H(t)=-F(-t)$$도 증가하고 연속이며

$$
\Delta_hH(t)=\Delta_{-h}F(-t).
$$

따라서 두 번째 부등식을 $$H$$에 적용하면 $$D^-F\le D_+F$$를 얻는다. 이를 모으면

$$
D^+F\le D_-F\le D^-F\le D_+F\le D^+F<\infty
$$

가 거의 모든 곳에서 성립하여 네 수가 같아진다. 차분몫의 식에서 두 번의 부호 변화가 상쇄되므로 reflection이 limsup을 liminf로 바꾸지는 않는다.

이 집합들의 measure를 쓰기 전에 measurability도 확인할 수 있다. 연속인 $$F$$에 대해 $$h\ne0$$인 차분몫은 $$h$$에 연속이므로 작은 $$h$$들에 대한 supremum과 infimum을 유리수 $$h$$로 제한해도 값이 같다. 이후 반지름 $$1/n$$에 대해 극한을 취하면 Dini numbers를 measurable 함수들의 countable 연산으로 나타낼 수 있다.

**첫 단계: 오른쪽 limsup은 거의 모든 점에서 유한하다**

<span id="l15:dini-finite"></span>

$$\gamma>0$$에 대해 $$E_\gamma=\{x\in(a,b):D^+F(x)>\gamma\}$$라 하자. $$x\in E_\gamma$$이면 양의 $$h$$를 임의로 작게 택하여 $$\Delta_hF(x)>\gamma$$가 되게 할 수 있다. 이는 $$G=F-\gamma x$$에 대해 $$G(x+h)>G(x)$$라는 뜻이다. 따라서 $$E_\gamma$$는 $$G$$의 right-looking set 안에 들어간다. 그 component들을 $$(a_k,b_k)$$라 하면 rising sun corollary로

$$
F(b_k)-F(a_k)\ge\gamma(b_k-a_k).
$$

증가함수의 disjoint한 구간들에서의 증분 합은 전체 증분 이하이므로

$$
m(E_\gamma)\le\sum_k(b_k-a_k)
 \le\frac1\gamma\sum_k(F(b_k)-F(a_k))
 \le\frac{F(b)-F(a)}\gamma.
$$

$$\{D^+F=\infty\}\subset E_\gamma$$이고 $$\gamma\to\infty$$에서 오른쪽은 0이다. 따라서 첫 단계가 증명된다.

**두 번째 단계: 왼쪽과 오른쪽의 차이를 없애기**

<span id="l15:dini-comparison"></span>

$$D^+F>D_-F$$인 점에서는 두 수 사이에 유리수 $$0<r<R$$을 넣을 수 있다. 그러므로 각 고정된 유리수 쌍에 대해

$$
E=\{x\in(a,b):D^+F(x)>R,\ D_-F(x)<r\}
$$

의 measure가 0임을 보이면 충분하다. 마지막에 countably many 유리수 쌍에 따른 예외집합을 합치면 된다.

모순을 위해 $$m(E)>0$$이라 하자. $$R/r>1$$이므로 outer regularity로

$$
E\subset\mathcal O\subset(a,b),\qquad
 m(\mathcal O)<\frac Rr m(E)
$$

인 열린집합을 고를 수 있다. 이를 disjoint한 열린구간 $$I_n$$들의 합집합으로 쓴다. 목표는 각 $$I_n$$ 안에서 $$E$$를 덮으면서 measure가 $$(r/R)m(I_n)$$ 이하인 집합을 만드는 것이다. 그러면 $$m(E)<m(E)$$라는 모순을 얻게 된다.

$$I_n$$ 하나를 고정한다. 먼저 $$G(x)=F(x)-rx$$에 left-looking version을 적용한다. 그 열린집합의 component들을 $$(a_k,b_k)$$라 하면

$$
F(b_k)-F(a_k)\le r(b_k-a_k).
$$

각 $$[a_k,b_k]$$에서 다시 $$H(x)=F(x)-Rx$$에 right-looking version을 적용한다. 새 component들을 $$(a_{k,j},b_{k,j})$$라 하면

$$
F(b_{k,j})-F(a_{k,j})\ge R(b_{k,j}-a_{k,j}).
$$

이 두 번의 사용은 서로 다른 역할을 한다. 첫 번째는 작은 기울기 $$r$$로 전체 증분을 위에서 제어하고, 두 번째는 큰 기울기 $$R$$로 선택된 작은 구간의 길이를 증분으로 제어한다.

$$\mathcal O_n=\bigcup_{k,j}(a_{k,j},b_{k,j})$$라 두면 증가성과 disjoint성으로

$$
\begin{align*}
 m(\mathcal O_n)
 &\le\frac1R\sum_{k,j}\bigl(F(b_{k,j})-F(a_{k,j})\bigr)\\
 &\le\frac1R\sum_k\bigl(F(b_k)-F(a_k)\bigr)
 \le\frac rR\sum_k(b_k-a_k)
 \le\frac rR m(I_n).
\end{align*}
$$

이제 $$E\cap I_n\subset\mathcal O_n$$을 확인하자. $$y\in E\cap I_n$$이면 $$D_-F(y)<r$$이므로 충분히 작은 $$h<0$$에서 $$\Delta_hF(y)<r$$이다. 음수 $$h$$를 곱하면 방향이 바뀌어 $$G(y+h)>G(y)$$가 된다. 따라서 $$y$$는 어느 $$(a_k,b_k)$$ 안에 들어간다. 그 안에서 $$D^+F(y)>R$$을 사용하여 충분히 작은 $$\widetilde h>0$$을 고르면 $$H(y+\widetilde h)>H(y)$$이므로 어느 $$(a_{k,j},b_{k,j})$$ 안에 들어간다. 두 번 모두 $$h$$를 임의로 작게 고를 수 있어 해당 구간 밖으로 나갈 염려가 없다.

따라서

$$
m(E)=\sum_nm(E\cap I_n)
 \le\sum_nm(\mathcal O_n)
 \le\frac rR m(\mathcal O)<m(E),
$$

라는 모순을 얻는다. 이로써 증가하고 연속인 함수의 거의 모든 점에서의 미분 가능성이 증명된다. BV 함수가 연속이면 그 total variation도 연속이고, 따라서 positive와 negative variation으로 이루어진 두 증가함수도 연속이다. 일반 BV 함수에서 남은 불연속성은 jump function을 분리하여 처리한다.

**도함수의 적분과 absolute continuity**

<span id="l16:integrability"></span>

증가하고 연속인 함수는 거의 모든 점에서 미분 가능하다는 것을 보였다. 그러나 도함수가 존재한다는 사실만으로 적분 가능성이 따라오지는 않는다. 더구나 도함수를 적분했을 때 함수의 전체 증분을 복원하는지는 다시 별개의 질문이다. 이 두 단계를 차례로 살펴보자.

<div class="real-analysis-statement" markdown="1">

**Corollary 3.7.**

$$F:[a,b]\to\mathbb R$$가 증가하고 연속이면 $$F'$$는 거의 모든 점에서 존재한다. 존재하지 않는 영집합에서 값을 0으로 정하면 $$F'$$는 measurable이고 음이 아니며 $$L^1([a,b])$$에 속한다. 또한

$$
\int_a^bF'(x)\,dx\le F(b)-F(a).
$$

$$F$$가 $$\mathbb R$$에서 증가하고 연속이며 bounded이면 $$F'\in L^1(\mathbb R)$$이다.

</div>

$$[a,b]$$에서는 연속성만으로 boundedness가 따라오지만 $$\mathbb R$$에서는 그렇지 않다. 예를 들어 $$F(x)=x$$는 증가하고 연속이지만 bounded가 아니다. 전 공간에 대한 마지막 결론에서는 boundedness를 별도로 요구한다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

<span id="l16:fatou"></span>

$$F$$가 $$[a,b]$$에만 정의되었으면 왼쪽에서 $$F(a)$$, 오른쪽에서 $$F(b)$$로 상수 연장한다. 이렇게 하면 전 공간에서 연속성과 증가성이 유지된다. 차분몫

$$
G_n(x)=\frac{F(x+1/n)-F(x)}{1/n}
$$

은 연속이고 음이 아니며 거의 모든 점에서 $$F'(x)$$로 수렴한다. 따라서 도함수의 measurability와 non-negativity를 얻는다.

이제 Fatou's lemma를 적용하면

$$
\int_a^bF'(x)\,dx\le\liminf_{n\to\infty}\int_a^bG_n(x)\,dx.
$$

오른쪽을 직접 계산하자. $$h=1/n$$으로 쓰면

$$
\begin{align*}
 \int_a^bG_n(x)\,dx
 &=\frac1h\left(\int_{a+h}^{b+h}F(u)\,du-\int_a^bF(u)\,du\right)\\
 &=\frac1h\int_b^{b+h}F(u)\,du-\frac1h\int_a^{a+h}F(u)\,du.
\end{align*}
$$

두 이동된 구간에서 겹치는 가운데 부분은 상쇄되고 양 끝의 짧은 구간만 남는다. 각 항은 그 짧은 구간에서의 평균이다. $$F$$가 $$a,b$$에서 연속이므로 각각 $$F(b),F(a)$$로 수렴한다. 따라서 원하는 부등식이 나오며, 오른쪽이 유한하므로 $$F'$$의 적분 가능성도 함께 증명된다.

전 공간에서 $$F$$가 bounded이면 유한한 증가 극한 $$F(-\infty),F(+\infty)$$가 존재한다. $$[-R,R]$$에서의 결과를 적용하고 $$R\to\infty$$로 보내면 monotone convergence로

$$
\int_{\mathbb R}F'\le F(+\infty)-F(-\infty)<\infty
$$

를 얻는다.

</div>

여기서 왜 등식이 아니라 부등식인가? Fatou's lemma는 일반적으로 한 방향의 부등식만 준다. 그 뒤의 평균 계산은 정확한 극한을 주지만, 앞에서 생긴 부등식을 없애 주지는 않는다. 다음 예는 이것이 증명상의 약점이 아니라 실제 현상임을 보여 준다.

**Cantor--Lebesgue function**

<span id="l16:cantor"></span>

목표는 증가하고 연속인 $$F:[0,1]\to[0,1]$$을 만들어

$$
F(0)=0,\qquad F(1)=1,\qquad F'=0\quad\text{거의 모든 곳에서}
$$

가 되게 하는 것이다. 그러면 $$\int_0^1F'=0$$이지만 $$F(1)-F(0)=1$$이므로 도함수의 적분이 전체 증가량을 놓친다.

Cantor 집합 $$C=\bigcap_{n\ge0}C_n$$을 떠올리자. $$C_1=[0,1/3]\cup[2/3,1]$$이고 각 단계에서 남아 있는 구간의 가운데 삼분의 일을 제거한다. $$C_n$$은 $$2^n$$개의 닫힌구간으로 이루어지고 그 전체 길이는 $$(2/3)^n$$이다. 따라서 $$m(C)=0$$이다.

첫 함수 $$F_1$$은 $$[1/3,2/3]$$에서 $$1/2$$로 일정하게 두고, $$(0,0)$$에서 $$(1/3,1/2)$$, 그리고 $$(2/3,1/2)$$에서 $$(1,1)$$을 직선으로 연결한다. 다음 함수 $$F_2$$는 기존의 가운데 평평한 부분을 유지하고 새로 제거한 구간에서

$$
F_2(x)=\frac14\quad(1/9\le x\le2/9),
 \qquad F_2(x)=\frac34\quad(7/9\le x\le8/9)
$$

로 둔다. 나머지 구간에서는 끝점을 직선으로 연결한다.

일반적으로 $$F_n$$은 $$C_n$$의 각 남은 구간에서 선형이고, 이미 제거한 모든 구간에서는 이후에도 같은 상수값을 유지한다. $$F_{n+1}$$을 만들 때 남아 있는 각 선형 구간의 가운데 삼분의 일에서 높이를 그 구간의 두 끝값의 평균으로 평평하게 만들고, 양옆을 다시 선형으로 잇는다. 각 단계에서 증가성과 연속성, 양 끝의 값 0과 1이 유지된다. 한 남은 구간의 전체 증가량은 $$2^{-n}$$이므로

$$
\|F_{n+1}-F_n\|_\infty\le2^{-n-1}.
$$

중요한 점은 이 상계가 $$x$$와 무관하고 $$n$$에 대해 summable하다는 것이다. $$m>n$$이면

$$
\|F_m-F_n\|_\infty
 \le\sum_{k=n}^{m-1}2^{-k-1}\le2^{-n}.
$$

따라서 $$F_n$$은 uniformly Cauchy이고 어떤 연속 함수 $$F$$로 uniformly 수렴한다. 단지 이웃한 두 항의 차이가 0으로 간다는 사실만으로 이 결론을 얻는 것은 아니다.

점별 부등식 $$F_n(x)\le F_n(y)$$는 극한에서도 유지되므로 $$F$$는 증가한다. 양 끝값도 그대로 남는다. 한편 $$x\notin C$$이면 어느 단계에서 제거한 열린구간 안에 있고, 그 구간에서는 이후의 모든 $$F_n$$과 $$F$$가 같은 상수이다. 따라서 그 점 근처에서 $$F$$는 상수이고 $$F'(x)=0$$이다. $$m(C)=0$$이므로 $$F'=0$$이 거의 모든 곳에서 성립한다.

이 함수는 전체적으로 상수인 함수가 아니다. 서로 다른 제거 구간에서는 서로 다른 상수값을 가지며, 그 사이의 증가가 measure가 0인 Cantor 집합에 집중된다. 그래서 연속성이나 bounded variation만으로는 적분에 의한 복원 공식을 보장할 수 없다.

#### 3.3.2. Absolutely continuous functions

<span id="l16:ac"></span>

우리는 짧은 구간 하나에서의 변화만 아니라, 총길이가 작은 여러 구간에서의 변화량 전체를 동시에 제어해야 한다. 이것이 Cantor--Lebesgue 함수의 현상을 배제하는 조건이다.

<div class="real-analysis-statement" markdown="1">

**Definition (Absolutely continuous 함수).**

$$F:[a,b]\to\mathbb C$$가 absolutely continuous라는 것은, 모든 $$\varepsilon>0$$에 대하여 어떤 $$\delta>0$$이 존재하여 $$[a,b]$$ 안의 유한 개의 disjoint한 열린구간 $$(a_k,b_k)$$에 대해

$$
\sum_{k=1}^N(b_k-a_k)<\delta
 \quad\Longrightarrow\quad
 \sum_{k=1}^N|F(b_k)-F(a_k)|<\varepsilon
$$

가 성립한다는 뜻이다.

</div>

$$\delta$$는 구간의 개수나 위치와 무관하다. Uniform continuity는 한 구간이 짧으면 그 구간의 증분이 작다고 말한다. Absolute continuity는 여러 구간의 총길이가 작으면 증분의 절댓값 합도 작다고 말한다. 구간 수가 늘어나면 작은 오차들이 많이 쌓일 수 있으므로 후자의 조건이 더 강하다.

<div class="real-analysis-statement" markdown="1">

**Absolute continuity의 기본 성질.**

<span id="l16:ac-properties"></span>

Absolutely continuous 함수는 uniformly continuous이고 bounded variation이다. 그 total variation 함수 $$x\mapsto T_F(a,x)$$도 absolutely continuous이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

정의에서 구간을 하나만 고르면 $$\vert x-y\vert <\delta$$일 때 $$\vert F(x)-F(y)\vert <\varepsilon$$이므로 uniform continuity를 얻는다.

Bounded variation을 보이기 위해 $$\varepsilon=1$$에 대한 $$\delta$$를 고르고, $$[a,b]$$를 길이가 $$\delta$$보다 작은 유한 개의 고정된 구간 $$J_1,\dots,J_M$$으로 나눈다. 임의의 분할에 이 경계점들을 더하면 variation의 합은 감소하지 않는다. 각 $$J_j$$ 안의 작은 분할 구간들의 총길이는 $$\vert J_j\vert <\delta$$이므로 그 증분 절댓값의 합은 1보다 작다. 따라서 전체 분할의 variation은 $$M$$ 이하이다.

Variation은 인접 구간에 대해 additive하다.

$$
T_F(a,v)-T_F(a,u)=T_F(u,v)\qquad(a\le u\le v\le b).
$$

한 방향은 분할에 $$u$$를 추가하여, 다른 방향은 양쪽 supremum을 각각 근사하는 분할을 합쳐 얻는다. 총길이가 작은 disjoint 구간들 $$(a_k,b_k)$$ 안에서 각 variation을 유한 분할로 근사하자. 그 모든 작은 분할 구간은 여전히 disjoint하고 총길이도 변하지 않는다. $$F$$의 absolute continuity를 적용한 뒤 근사 오차를 0으로 보내면 $$\sum_kT_F(a_k,b_k)$$도 작아진다. 위 additivity로 이것이 total variation 함수의 absolute continuity이다.

</div>

실수값 함수에서는

$$
P_F(a,x)=\frac{T_F(a,x)+F(x)-F(a)}2,
 \qquad N_F(a,x)=\frac{T_F(a,x)-F(x)+F(a)}2.
$$

따라서 absolutely continuous $$F$$를 분해하는 두 증가함수도 연속이다. 앞서 연속 증가함수에 대해 증명한 미분 가능성과 도함수의 적분 가능성을 여기에 적용할 수 있다.

Cantor--Lebesgue 함수가 absolutely continuous가 아니라는 사실도 정의에서 직접 보인다. $$C_n$$을 이루는 $$2^n$$개 구간들의 총길이는 $$(2/3)^n\to0$$이지만, 이 구간들 양 끝에서의 증가량 합은 언제나 1이다. 아무리 $$\delta$$를 작게 잡아도 $$\varepsilon=1/2$$에 대한 조건을 만족시킬 수 없다.

**적분으로 정의된 함수는 absolutely continuous이다**

<span id="l16:indefinite"></span>

$$f\in L^1([a,b])$$이고 $$F(x)=\int_a^xf$$라 하자. 서로 disjoint한 구간들에 대해

$$
\sum_k|F(b_k)-F(a_k)|
 \le\sum_k\int_{a_k}^{b_k}|f|
 =\int_{\bigcup_k(a_k,b_k)}|f|.
$$

Lebesgue 적분의 absolute continuity는 적분 영역의 measure가 작으면 마지막 적분이 작다는 사실이다. 따라서 $$F$$는 absolutely continuous이다. 앞서 적분을 공부하며 얻은 이 성질이 함수의 absolute continuity라는 정의로 나타난 것이다.

이제 목표가 분명해진다. $$F'\in L^1$$이고

$$
F(x)-F(a)=\int_a^xF'(y)\,dy\qquad\text{모든 }x\in[a,b]
$$

가 성립하려면 $$F$$는 반드시 absolutely continuous여야 한다. 오른쪽이 그렇게 정의된 함수이기 때문이다. 다음에는 이 조건이 충분하기도 함을 보인다. 핵심은 absolutely continuous 함수의 도함수가 거의 모든 점에서 0이면 함수가 상수라는 명제이다. Cantor--Lebesgue 함수에서 실패했던 바로 그 명제이다.

**도함수가 0인 absolutely continuous 함수**

<span id="l17:ac-zero"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.8.**

$$F$$가 $$[a,b]$$에서 absolutely continuous이면 거의 모든 점에서 미분 가능하다. 또한 $$F'=0$$이 거의 모든 곳에서 성립하면 $$F$$는 상수이다.

</div>

미분 가능성은 $$F$$를 두 연속 증가함수의 차로 분해하여 얻는다. 복소수값이면 실수부와 허수부를 따로 다룬다. 두 번째 결론은 더 섬세하다. 도함수가 0인 점 근처의 작은 변화량들을 합쳐 전체 변화량을 제어해야 한다. 예외집합 때문에 모든 점에서 mean value theorem을 적용할 수는 없으므로 covering을 사용한다.

**Vitali covering으로 거의 전부를 선택하기**

<span id="l17:vitali"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Vitali covering).**

열린 공들의 모임 $$\mathcal B$$가 집합 $$E\subset\mathbb R^d$$의 Vitali covering이라는 것은, 모든 $$x\in E$$와 $$\eta>0$$에 대해 $$x\in B$$, $$m(B)<\eta$$인 공 $$B\in\mathcal B$$가 존재한다는 뜻이다.

</div>

단순히 덮는 것뿐 아니라 각 점에서 임의로 작은 공을 고를 수 있어야 한다. 이 조건 덕분에 이미 선택한 공들을 피하면서 남은 부분을 계속 덮을 수 있다.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.9.**

$$E$$가 measurable이고 $$m(E)<\infty$$이며 $$\mathcal B$$가 Vitali covering이면, 모든 $$\eta>0$$에 대하여 유한 개의 disjoint한 공 $$B_1,\dots,B_N\in\mathcal B$$를 골라

$$
\sum_{i=1}^Nm(B_i)\ge m(E)-\eta
$$

가 되게 할 수 있다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$0<\eta<m(E)$$인 경우만 생각하면 된다. Inner regularity로 $$m(K)\ge\eta$$인 compact $$K\subset E$$를 고른다. 이를 유한 개의 공으로 덮고 유한 Vitali covering lemma를 적용하면, disjoint한 공들을 골라 그 부피 합을 적어도 $$3^{-d}\eta$$로 만들 수 있다.

이미 고른 공들의 부피 합이 $$m(E)-\eta$$ 이상이면 끝난다. 그렇지 않으면

$$
E_2=E\setminus\bigcup_i\overline{B_i}
$$

는 measure가 $$\eta$$보다 크다. 실제로 공의 경계는 영집합이므로 $$m(E_2)\ge m(E)-\sum_i m(B_i)>\eta$$이다. 선택한 공들이 $$E$$ 밖으로 나갈 수도 있어 이 관계는 일반적으로 등식이 아니다.

$$x\in E_2$$는 유한 개의 닫힌 공의 합집합으로부터 양의 거리에 있다. Vitali covering의 공을 충분히 작게 고르면 그 닫힌 공들을 만나지 않게 할 수 있다. 따라서 이런 공들만으로도 $$E_2$$의 Vitali covering을 얻는다. 다시 compact 부분집합을 덮고 유한 lemma를 적용하면 기존 공들과도 disjoint하면서 부피 합이 적어도 $$3^{-d}\eta$$인 공들을 추가한다.

계속 선택하면 $$k$$번째 단계까지 부피 합은 적어도 $$k3^{-d}\eta$$이다. 아직 끝나지 않았다면 이 합이 $$m(E)-\eta$$보다 작아야 하므로 유한 번 뒤에 반드시 목표에 도달한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 3.10.**

공들을 선택할 때 추가로 $$m(E\setminus\bigcup_iB_i)<2\eta$$가 되게 할 수 있다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E\subset\mathcal O$$이고 $$m(\mathcal O\setminus E)<\eta$$인 열린집합을 고른다. 각 점에서 임의로 작은 공을 선택할 수 있으므로 $$\mathcal O$$ 안에 있는 공들만 사용해도 Vitali covering이다. 그러면

$$
m\left(E\setminus\bigcup_iB_i\right)
 \le m(\mathcal O)-\sum_i m(B_i)
 <m(E)+\eta-(m(E)-\eta)=2\eta.
$$

왼쪽의 남은 집합과 선택된 공들의 합집합은 서로 disjoint하며 모두 $$\mathcal O$$ 안에 있다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof (Theorem 3.8의 두 번째 결론).*

$$E=\{x\in(a,b):F'(x)=0\}$$라 두면 $$m(E)=b-a$$이다. $$\varepsilon>0$$을 고정하고 absolute continuity에 대응하는 $$\delta>0$$을 고른다.

각 $$x\in E$$에서는 충분히 작은 양쪽 증분에 대해 $$\vert F(x+h)-F(x)\vert \le\varepsilon\vert h\vert $$이다. 따라서 임의로 작은 $$r>0$$을 골라 $$I_x=(x-r,x+r)\subset(a,b)$$이고

$$
|F(x+r)-F(x-r)|
 \le|F(x+r)-F(x)|+|F(x)-F(x-r)|
 \le\varepsilon(2r)
$$

가 되게 할 수 있다. 이 구간들은 $$E$$의 Vitali covering이다.

Lemma 3.9를 오차 $$\delta/2$$로 적용하여 disjoint한 $$I_i=(a_i,b_i)$$들을 골라 그 총길이가 $$b-a-\delta/2$$ 이상이 되게 한다. $$[a,b]$$에서 이 유한 개의 구간을 뺀 부분은 유한 개의 닫힌구간 $$[\alpha_k,\beta_k]$$으로 이루어지며 총길이는 $$\delta/2<\delta$$ 이하이다. 따라서

$$
\sum_k|F(\beta_k)-F(\alpha_k)|<\varepsilon.
$$

선택한 구간과 남은 구간을 순서대로 연결하면

$$
\begin{align*}
 |F(b)-F(a)|
 &\le\sum_i|F(b_i)-F(a_i)|+
 \sum_k|F(\beta_k)-F(\alpha_k)|\\
 &\le\varepsilon\sum_i(b_i-a_i)+\varepsilon
 \le\varepsilon(b-a)+\varepsilon.
\end{align*}
$$

$$\varepsilon\downarrow0$$으로 보내면 $$F(a)=F(b)$$이다. 같은 논리를 임의의 부분구간에 적용할 수 있으므로 $$F$$는 상수이다.

</div>

**미분과 적분의 정확한 역관계**

<span id="l17:ftc"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.11: Fundamental theorem of calculus.**

$$F$$가 $$[a,b]$$에서 absolutely continuous이면 $$F'$$는 거의 모든 점에서 존재하고 $$L^1([a,b])$$에 속하며

$$
F(x)-F(a)=\int_a^xF'(y)\,dy\qquad(a\le x\le b)
$$

이다. 역으로 $$f\in L^1([a,b])$$에 대해 $$F(x)=\int_a^xf$$로 두면 $$F$$는 absolutely continuous이고 $$F'=f$$가 거의 모든 곳에서 성립한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

실수값 $$F$$를 두 연속 증가함수의 차로 분해하면 각각의 도함수가 $$L^1$$에 속하므로 $$F'\in L^1$$이다. $$G(x)=\int_a^xF'$$로 두자. 적분으로 정의한 함수의 absolute continuity와 Lebesgue differentiation theorem으로 $$G$$는 absolutely continuous이고 $$G'=F'$$가 거의 모든 곳에서 성립한다.

$$F-G$$도 absolutely continuous이며 도함수가 거의 모든 곳에서 0이다. Theorem 3.8로 $$F-G$$는 상수이다. $$x=a$$에서 $$G(a)=0$$을 사용하면 그 상수는 $$F(a)$$이며 원하는 등식을 얻는다. 역방향은 적분의 absolute continuity와 Lebesgue differentiation theorem을 함께 적용하면 된다. 복소수값 함수는 실수부와 허수부에 각각 적용한다.

</div>

이로써 두 질문이 연결된다. 적분 가능한 함수를 적분하면 absolutely continuous 함수가 되고, absolutely continuous 함수를 미분하면 적분 가능한 함수가 된다. 미분을 통한 복원은 거의 모든 점에서 성립하고, 적분을 통한 복원은 모든 $$x$$에서 성립한다.

#### 3.3.3. Differentiability of jump functions

<span id="l17:jumps"></span>

이제 bounded variation 함수의 미분 가능성에서 남겨 두었던 연속성 가정을 없애자. 증가하고 bounded인 함수에서는 좌우 극한

$$
F(x^-)=\lim_{y\uparrow x}F(y),\qquad F(x^+)=\lim_{y\downarrow x}F(y)
$$

이 존재하고 $$F(x^-)\le F(x)\le F(x^+)$$이다. 양쪽 극한이 같으면 연속이고, 다르면 jump가 있다.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.12.**

증가하고 bounded인 $$F:[a,b]\to\mathbb R$$의 불연속점은 많아야 countable하다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 내부 불연속점 $$x$$에 대해 $$F(x^-)<r_x<F(x^+)$$인 유리수 하나를 고른다. $$x<z$$이면 $$F(x^+)\le F(z^-)$$이므로 $$r_x<r_z$$이다. 따라서 서로 다른 불연속점은 서로 다른 유리수에 대응한다. 양 끝점은 두 개뿐이므로 이를 포함해도 countability는 유지된다.

</div>

불연속점들을 $$\{x_n\}$$이라 하자. 양 끝도 함께 다루려면 $$F(a^-)=F(a)$$, $$F(b^+)=F(b)$$로 둔다. Jump의 크기와 jump 중간에서의 실제 함수값을

$$
\alpha_n=F(x_n^+)-F(x_n^-)>0,
 \qquad F(x_n)=F(x_n^-)+\theta_n\alpha_n,
 \quad0\le\theta_n\le1
$$

로 나타낸다. 그리고

$$
j_n(x)=\begin{cases}0&x<x_n,\\\theta_n&x=x_n,\\1&x>x_n,\end{cases}
 \qquad J(x)=\sum_{n=1}^\infty\alpha_nj_n(x)
$$

로 둔다. 증가함수의 전체 증가량이 유한하므로

$$
\sum_n\alpha_n\le F(b)-F(a)<\infty.
$$

따라서 $$0\le j_n\le1$$에 의해 이 급수는 absolutely 그리고 uniformly 수렴한다. $$\theta_n$$을 포함한 이유는 좌우 jump 크기만 아니라 그 점 자체에서의 값도 맞추기 위해서이다.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.13.**

$$J$$는 $$F$$와 정확히 같은 점에서 불연속이고 각 점에서 좌우 jump와 점별 값을 같은 방식으로 가진다. $$F-J$$는 증가하고 연속이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$x\ne x_n$$이면 각 $$j_n$$이 $$x$$에서 연속이며 uniform convergence에 의해 $$J$$도 연속이다. $$x=x_N$$이면

$$
J=\alpha_Nj_N+\sum_{n\ne N}\alpha_nj_n
$$

로 나눈다. 두 번째 함수는 $$x_N$$에서 연속이고 첫 번째 항은 정확히 필요한 jump를 가진다. 따라서 $$F-J$$의 양쪽 극한과 그 점의 값이 일치한다.

또 $$x<y$$이면 $$J(y)-J(x)$$는 내부점 $$x<x_n<y$$의 jump들과, $$x$$에서 남은 jump 부분 및 $$y$$에서 이미 올라간 jump 부분의 합이다. 즉 해당 점이 불연속일 때의 항만 쓰면

$$
J(y)-J(x)
 =\alpha_x(1-\theta_x)+\sum_{x<x_n<y}\alpha_n+\alpha_y\theta_y
 \le F(y)-F(x).
$$

마지막 부등식은 증가함수의 전체 증분이 그 사이의 jump 증분들을 모두 포함하기 때문이다. 따라서 $$(F-J)(y)\ge(F-J)(x)$$이다.

</div>

연속 증가함수 $$F-J$$의 미분 가능성은 이미 보였다. 이제 $$J$$만 다루면 된다.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.14.**

<span id="l17:jump-derivative"></span>

Jump function $$J$$는 거의 모든 점에서 미분 가능하고 $$J'=0$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\varepsilon>0$$에 대해

$$
E=\left\{x\in(a,b):\limsup_{h\to0}\frac{J(x+h)-J(x)}h>\varepsilon\right\}
$$

의 measure가 0임을 보인다. 단조함수의 차분몫에 관한 limsup은 measurable이다. 예를 들어 $$h$$를 양쪽에서 유리수로 근사하여 증가성으로 차분몫을 끼우면 countable한 supremum과 극한으로 같은 limsup을 얻을 수 있다.

$$\eta>0$$을 고정하고 $$N$$을 크게 잡아 $$\sum_{n>N}\alpha_n<\eta$$로 만든다. 꼬리 함수 $$J_0=\sum_{n>N}\alpha_nj_n$$은 증가하며 $$J_0(b)-J_0(a)<\eta$$이다. $$J-J_0$$는 유한 개의 step function의 합이므로 $$x_1,\dots,x_N$$ 밖의 각 점 근처에서 상수이다. 따라서 $$J$$를 $$J_0$$로 바꾼 exceptional set $$E_0$$는 $$E$$와 유한 개의 점에서만 다르고 measure는 같다.

$$\mu=m(E)>0$$이라고 가정하고 compact $$K\subset E_0$$를 골라 $$m(K)\ge\mu/2$$로 만든다. 각 $$x\in K$$에는 차분몫이 $$\varepsilon$$보다 큰 아주 작은 증분이 있다. 그 두 끝점을 약간 바깥쪽으로 넓히면 증가성 때문에 함수 증분은 줄어들지 않고, 길이는 임의로 조금만 늘릴 수 있다. 엄격한 부등식의 여유를 이용하면 $$x$$를 내부에 포함하면서

$$
J_0(b_x)-J_0(a_x)>\varepsilon(b_x-a_x)
$$

인 열린구간을 얻는다. $$K$$의 compactness로 유한 subcover를 고르고 유한 Vitali covering lemma를 적용하면 disjoint한 구간 $$I_j=(a_j,b_j)$$에 대해 $$\sum_j\vert I_j\vert \ge m(K)/3$$이다. 따라서

$$
\eta>J_0(b)-J_0(a)
 \ge\sum_j(J_0(b_j)-J_0(a_j))
 >\varepsilon\sum_j|I_j|
 \ge\frac\varepsilon3m(K)\ge\frac{\varepsilon\mu}6.
$$

$$\eta$$는 임의로 작게 선택할 수 있으므로 $$\mu=0$$이다. 마지막으로 $$\varepsilon=1/n$$에 대한 영집합들을 합친다. 그 밖에서는 음이 아닌 모든 차분몫의 limsup이 0이므로 양쪽 극한이 0이고 $$J'=0$$이다.

</div>

이제 $$F=(F-J)+J$$로부터 임의의 bounded increasing 함수가 거의 모든 점에서 미분 가능함을 얻는다. 두 증가함수의 차로 분해하면 모든 실수값 BV 함수에, 네 증가함수의 선형결합으로 쓰면 복소수값 BV 함수에도 같은 결론이 성립한다.

{% endraw %}

<!-- prettier-ignore-end -->

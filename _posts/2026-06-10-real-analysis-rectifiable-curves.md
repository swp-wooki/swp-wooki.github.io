---
layout: post
title: "Real Analysis 11: Rectifiable Curves"
date: 2026-06-10 12:00:00 +0900
description: "수정가능 곡선과 호의 길이 매개화, 등주부등식을 다룬다."
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

### 3.4. Rectifiable curves and the isoperimetric inequality

**곡선의 길이를 도함수로 계산하기**

<span id="l17:curves"></span>

연속 곡선 $$z(t)=x(t)+iy(t)$$가 rectifiable일 조건은 두 좌표가 bounded variation이라는 것이었다. 그러면 항상

$$
L=\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt
$$

인가? Cantor--Lebesgue 함수 $$F$$를 사용하여 $$z(t)=F(t)+iF(t)$$로 두면 곡선은 $$(0,0)$$에서 $$(1,1)$$까지의 선분을 따라간다. 증가성 때문에 어떤 분할에서도 길이의 합은 $$\sqrt2(F(1)-F(0))=\sqrt2$$이다. 그러나 $$x'=y'=0$$이 거의 모든 곳에서 성립하므로 오른쪽 적분은 0이다. 길이 공식에도 absolute continuity가 필요하다.

<div class="real-analysis-statement" markdown="1">

**Proposition 4.2.**

<span id="l17:variation-integral"></span>

복소수값 absolutely continuous 함수 $$F:[a,b]\to\mathbb C$$에 대하여

$$
T_F(a,b)=\int_a^b|F'(t)|\,dt.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 임의의 분할 $$P$$에 대해 fundamental theorem으로

$$
\sum_j|F(t_j)-F(t_{j-1})|
 =\sum_j\left|\int_{t_{j-1}}^{t_j}F'\right|
 \le\int_a^b|F'|.
$$

Supremum을 취하면 $$T_F\le\int\vert F'\vert $$이다.

반대 부등식을 위해 $$F'$$를 $$L^1$$에서 step function $$g$$로 근사하여 $$\|F'-g\|_1<\varepsilon$$로 만든다. $$h=F'-g$$라 두고

$$
G(x)=\int_a^xg(t)\,dt,\qquad H(x)=\int_a^xh(t)\,dt
$$

로 쓰면 $$F(x)=F(a)+G(x)+H(x)$$이다. 상수는 variation에 영향을 주지 않는다. Variation의 삼각부등식과 앞서 증명한 방향으로

$$
T_F\ge T_G-T_H,\qquad T_H\le\int_a^b|h|<\varepsilon.
$$

$$g$$가 각 구간에서 상수가 되는 분할을 고르면 그 구간 안에서는 적분과 절댓값 사이의 손실이 없다. 따라서

$$
T_G\ge\sum_j\left|\int_{t_{j-1}}^{t_j}g\right|
 =\int_a^b|g|
 \ge\int_a^b|F'|-\varepsilon.
$$

이를 합하면 $$T_F\ge\int\vert F'\vert -2\varepsilon$$이다. $$\varepsilon\downarrow0$$으로 보내면 등식을 얻는다.

</div>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.1.**

좌표함수 $$x,y$$가 absolutely continuous이면 곡선 $$z=x+iy$$는 rectifiable이고

$$
L=\int_a^b|z'(t)|\,dt
 =\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$z$$도 absolutely continuous이므로 bounded variation이다. 곡선의 길이가 $$T_z(a,b)$$라는 정의에 Proposition 4.2를 적용한다.

</div>

**Arc-length parametrization**

<span id="l17:arclength"></span>

같은 곡선을 여러 속도로 따라갈 수 있다. 원래 parameter가 Cantor--Lebesgue 함수처럼 특이하게 움직일 수도 있다. Rectifiable curve에는 지금까지 이동한 길이 자체를 parameter로 쓰는 자연스러운 방법이 있다.

$$L(A,B)$$를 $$A\le t\le B$$에서의 곡선 길이라 하고 $$S(t)=L(a,t)$$라 두자. 길이는 인접 구간에 대해 additive하므로

$$
L(A,C)+L(C,B)=L(A,B),\qquad S(v)-S(u)=L(u,v).
$$

$$S$$는 증가하며 연속이다. 이 연속성을 확인하려면 먼저 $$L(a,t)$$를 거의 실현하는 유한 분할을 고른다. $$u<t$$를 마지막 분할점과 $$t$$ 사이에서 충분히 가깝게 고르면 $$z$$의 연속성으로 마지막 선분의 길이가 거의 변하지 않는다. 따라서 $$L(a,u)\to L(a,t)$$를 얻는다. 오른쪽에서도 $$L(t,b)$$를 근사하는 분할의 첫 구간에 같은 논리를 적용하고 additivity를 사용하면 $$L(t,u)\to0$$이다. 따라서 $$S$$는 $$[a,b]$$를 $$[0,L]$$ 위로 연속적으로 보낸다.

$$s=S(t)$$일 때 $$\widetilde z(s)=z(t)$$로 정의하자. $$S$$가 strictly increasing일 필요는 없으므로 이 정의가 모호하지 않은지 확인해야 한다. $$S(t_1)=S(t_2)$$이고 $$t_1<t_2$$이면 $$L(t_1,t_2)=0$$이므로 그 구간에서 곡선은 움직이지 않는다. 따라서 $$z(t_1)=z(t_2)$$이며 정의는 well-defined이다.

두 점 사이의 직선거리는 그 사이를 따라간 길이 이하이므로

$$
|\widetilde z(s_2)-\widetilde z(s_1)|\le|s_2-s_1|.
$$

따라서 $$\widetilde z$$는 Lipschitz이며 absolutely continuous이다. 원래 곡선과 같은 점들을 같은 순서로 지나므로 전체 길이는 여전히 $$L$$이다.

<div class="real-analysis-statement" markdown="1">

**Theorem 4.3.**

Arc-length parametrization $$\widetilde z=\widetilde x+i\widetilde y$$의 두 좌표는 absolutely continuous이며

$$
|\widetilde z'(s)|=1\quad\text{거의 모든 }s\in[0,L],
 \qquad
 L=\int_0^L\sqrt{\widetilde x'(s)^2+\widetilde y'(s)^2}\,ds.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Lipschitz 부등식에서 미분 가능한 점의 속도는 $$\vert \widetilde z'\vert \le1$$이다. 한편 길이 공식을 새 parametrization에 적용하면 $$L=\int_0^L\vert \widetilde z'\vert $$이다. 그러므로 $$1-\vert \widetilde z'\vert $$는 음이 아니며 적분이 0이어서 거의 모든 점에서 0이다. $$L=0$$이면 곡선은 상수이고 영길이 구간에 대한 결론은 그대로 성립한다.

</div>

길이를 parameter로 사용하면 거의 모든 순간의 속도가 정확히 1이 된다. 같은 기하학적 곡선도 parameter의 선택에 따라 원래의 도함수가 이동 길이를 제대로 기록하지 못할 수 있다는 점과, absolute continuity가 그 문제를 해결한다는 점이 여기서 연결된다.

{% endraw %}

<!-- prettier-ignore-end -->

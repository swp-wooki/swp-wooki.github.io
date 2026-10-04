---
layout: post
title: "Real Analysis 8: Lebesgue Differentiation and the Hardy–Littlewood Maximal Function"
date: 2026-04-17 12:00:00 +0900
description: "Hardy–Littlewood 극대함수와 약형 추정, 르베그 미분정리를 정리한다."
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

## 3. Differentiation and Integration

<span id="l13:goals"></span>

적분의 정의를 Lebesgue 적분으로 넓혔다. 그렇다면 미분과 적분이 서로 역연산이라는 명제도 다시 확인해야 한다. 연속 함수에 대해 알고 있던 fundamental theorem of calculus가 단순히 적분 가능한 함수에도 그대로 성립하는가? 적분을 먼저 하는 방향과 미분을 먼저 하는 방향은 서로 다른 조건을 요구하므로 나누어 생각하자.

<div class="real-analysis-statement" markdown="1">

**적분한 함수를 다시 미분할 수 있는가?.**

$$f\in L^1([a,b])$$에 대하여

$$
F(x)=\int_a^x f(y)\,dy
$$

로 두면 $$F'$$가 거의 모든 점에서 존재하고 $$F'=f$$인가?

</div>

모든 점에서의 미분 가능성은 기대하기 어렵다. 불연속인 적분 가능 함수에서 출발할 수 있고, $$L^1$$의 원소 자체도 영집합에서의 값은 구별하지 않는 equivalence class이다. 따라서 적절한 결론은 거의 모든 점에서의 등식이다. 이 질문에는 미분계수가 존재하는가와 그 값이 원래 함수와 같은가라는 두 문제가 들어 있다.

<div class="real-analysis-statement" markdown="1">

**미분한 함수를 다시 적분할 수 있는가?.**

어떤 조건을 $$F$$에 부과하면 $$F'$$가 거의 모든 점에서 존재하고, $$F'\in L^1([a,b])$$이며,

$$
F(x)-F(a)=\int_a^x F'(y)\,dy\qquad(a\le x\le b)
$$

가 성립하는가?

</div>

여기서는 도함수의 존재, 도함수의 적분 가능성, 적분에 의한 함수의 복원이라는 세 단계를 구별해야 한다. 하나가 성립한다고 다음 단계가 자동으로 성립하지는 않는다. 먼저 첫 번째 질문을 다룬다. 핵심 도구는 Hardy--Littlewood maximal function과 Lebesgue differentiation theorem이다. Maximal function은 harmonic analysis에서도 중요한 도구이며, 여러 형태의 평균을 제어하기 위해 서로 다른 maximal function을 사용할 수 있다.

### 3.1. Differentiation of the integral

**차분몫을 평균으로 읽기**

<span id="l13:averages"></span>

$$h>0$$이고 $$x,x+h\in[a,b]$$이면

$$
\frac{F(x+h)-F(x)}h=\frac1h\int_x^{x+h}f(y)\,dy.
$$

오른쪽은 길이가 $$h$$인 구간에서의 평균이다. $$h<0$$일 때도 적분의 방향과 분모의 부호를 함께 바꾸면 $$(x+h,x)$$ 위의 평균이 된다. 그러므로 작은 구간에서의 평균이 $$f(x)$$로 수렴함을 보이면 $$F'(x)=f(x)$$를 얻는다.

이 형태는 고차원으로 옮길 수 있다. 벡터 $$h$$로 스칼라를 나누는 차분몫을 쓰는 대신, $$x$$를 포함하는 공 $$B\subset\mathbb R^d$$ 위의 평균

$$
\mint_B f(y)\,dy:=\frac1{m(B)}\int_B f(y)\,dy
$$

를 생각한다. 질문은

$$
\lim_{\substack{x\in B\;\text{인 공}\\m(B)\to0}}
 \mint_B f(y)\,dy=f(x)
$$

가 거의 모든 $$x$$에서 성립하는가이다. $$x$$는 공의 중심일 필요가 없다. $$x$$를 포함하는 모든 공을 허용하며, 그 부피가 작아질 때의 극한을 묻는다. 이는 고차원에서의 평균에 관한 명제이지, 벡터로 나누어 미분을 정의한다는 뜻은 아니다.

왜 공인가? 일차원에서는 공과 구간이 같지만, 고차원에서는 공, 정육면체, 직사각형을 구별해야 한다. 정육면체의 모양은 크기만 달라지는 반면 직사각형은 매우 가늘고 길어질 수 있다. 어느 집합족으로 평균을 내는지가 결론에 영향을 준다. 우선 공을 사용한다.

<div class="real-analysis-statement" markdown="1">

**연속인 점에서의 평균.**

<span id="l13:continuous"></span>

$$f$$가 $$x$$에서 연속이면 위의 평균은 $$f(x)$$로 수렴한다. 실제로 $$\varepsilon>0$$에 대하여 $$\vert y-x\vert <\delta$$이면 $$\vert f(y)-f(x)\vert <\varepsilon$$이 되도록 $$\delta>0$$을 잡는다. $$x\in B\subset B(x,\delta)$$이면

$$
\left|\mint_B f(y)\,dy-f(x)\right|
 =\left|\mint_B(f(y)-f(x))\,dy\right|
 \le\mint_B|f(y)-f(x)|\,dy<\varepsilon.
$$

$$y$$에 관해 $$f(x)$$는 상수이므로 평균을 내도 $$f(x)$$라는 점을 사용했다. 반지름이 $$r$$인 공이 $$x$$를 포함하면 그 공은 $$B(x,2r)$$ 안에 있으므로, 부피가 작아질 때 필요한 포함 관계가 성립한다.

</div>

이 계산에는 $$x$$에서의 연속성만 필요하다. 그러나 $$L^1$$ 함수에는 이런 점별 제어가 없다. 연속 함수에 대한 결과를 일반 함수로 옮기려면, 평균의 오차가 큰 점들이 얼마나 많은지 제어할 도구가 필요하다.

#### 3.1.1. The Hardy--Littlewood maximal function

<span id="l13:maximal"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Hardy--Littlewood maximal function).**

$$f\in L^1(\mathbb R^d)$$에 대하여

$$
f^*(x)=\sup_{\substack{B\text{는 열린 공}\\x\in B}}
 \mint_B|f(y)|\,dy\in[0,\infty]
$$

로 정의한다. 작은 공뿐 아니라 $$x$$를 포함하는 모든 크기의 공을 사용한다.

</div>

개별 공에서의 평균은 정의되어 있어도, 공이 줄어들 때의 극한이 존재하는지는 아직 모른다. Supremum은 극한의 존재를 먼저 증명하지 않고도 모든 평균을 위에서 제어한다. 절댓값을 먼저 취하므로 부호가 다른 값들이 상쇄되어 크기를 숨기는 일도 없다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.1.**

<span id="l13:weak"></span>

$$f\in L^1(\mathbb R^d)$$이면 $$f^*$$는 measurable이고 거의 모든 점에서 유한하다. 또한 모든 $$\alpha>0$$에 대하여

$$
m\{x:f^*(x)>\alpha\}\le\frac{3^d}{\alpha}\|f\|_{L^1(\mathbb R^d)}.
$$

</div>

이 부등식은 weak type $$(1,1)$$ estimate이다. 큰 $$\alpha$$에 대해 $$f^*>\alpha$$인 점들이 차지하는 부피가 작아진다는 뜻이다. 여기서 $$3^d$$는 공간의 차원에만 의존한다.

<div class="real-analysis-statement" markdown="1">

**Chebyshev 부등식과의 비교.**

<span id="l13:chebyshev"></span>

$$g\in L^1$$이면

$$
\alpha m\{|g|>\alpha\}\le\int_{\{|g|>\alpha\}}|g|\le\|g\|_1.
$$

높이가 $$\alpha$$이고 밑면이 $$\{\vert g\vert >\alpha\}$$인 영역은 $$\vert g\vert $$의 그래프 아래 영역에 들어간다. 이 그림이 Chebyshev 부등식의 의미이다. Maximal estimate에서는 왼쪽에 $$f^*$$를 쓰면서 오른쪽에는 여전히 원래 함수 $$f$$의 적분만 쓴다. 이것이 추가로 증명해야 하는 부분이다.

뒤에서 $$f^*(x)\ge\vert f(x)\vert $$가 거의 모든 점에서 성립함을 보인다. 그렇다면 더 강하게 $$\|f^*\|_1\le C\|f\|_1$$도 성립할까? 일반적으로 그렇지 않다. 일차원에서 $$f=\rchi_{[0,1]}$$이면 $$x>1$$에 대하여 $$[0,1]$$과 $$x$$를 포함하는 열린 구간을 사용하여 $$f^*(x)\ge1/x$$를 얻는다. 따라서 $$\int_1^\infty f^*(x)\,dx=\infty$$이다. Weak estimate는 $$f^*$$ 자체의 적분 가능성을 주장하지 않는다.

</div>

**겹치는 공에서 disjoint한 공을 고르기**

<span id="l13:covering"></span>

Superlevel set을 공으로 덮은 뒤 각 공에서의 적분을 더하려 한다. 공들이 겹치면 같은 부분의 적분이 여러 번 계산된다. 그래서 disjoint한 공을 골라야 한다. 다만 고른 공들 자체가 원래의 모든 공을 덮을 수는 없다. 서로 겹치는 두 공만 생각해도 하나만 남기면 다른 공의 일부가 빠진다. 대신 반지름을 세 배로 늘린 공으로 덮는다.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2: 유한 Vitali covering lemma.**

유한 개의 열린 공 $$B_1,\dots,B_N\subset\mathbb R^d$$에서 서로 disjoint한 공 $$B_{i_1},\dots,B_{i_k}$$를 골라

$$
\bigcup_{l=1}^N B_l\subset\bigcup_{j=1}^k 3B_{i_j},
 \qquad m\left(\bigcup_{l=1}^N B_l\right)
 \le3^d\sum_{j=1}^k m(B_{i_j})
$$

가 되게 할 수 있다. $$3B$$는 중심은 같고 반지름만 세 배인 공이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

남아 있는 공 중 반지름이 가장 큰 공을 고른다. 이 공과 만나는 모든 공을 목록에서 지우고, 고른 공 자체도 지운다. 남은 목록에 같은 작업을 반복한다. 매번 적어도 하나의 공을 지우므로 유한 번 뒤에 끝나며, 이후에 고른 공은 이전에 고른 공과 만나지 않는다.

반지름 $$r$$인 선택된 공 $$B(c,r)$$과, 이 공 때문에 지운 $$B(c',r')$$를 생각하자. $$r'\le r$$이고 두 공이 만나므로 $$\vert c-c'\vert <r+r'$$이다. 따라서 $$y\in B(c',r')$$이면

$$
|y-c|\le|y-c'|+|c'-c|<r'+r+r'\le3r.
$$

즉 지운 공 전체가 $$B(c,3r)$$ 안에 있다. 모든 원래 공은 어느 단계에서 지워졌으므로 포함 관계가 성립한다. 마지막으로 measure의 subadditivity와 $$m(3B)=3^dm(B)$$를 적용한다.

</div>

**Maximal estimate의 증명**

<span id="l13:proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof (Theorem 1.1의 증명).*

먼저 $$E_\alpha=\{x:f^*(x)>\alpha\}$$가 열려 있음을 보인다. $$x\in E_\alpha$$이면 supremum의 정의에 따라 $$x\in B$$이고 $$\mint_B\vert f\vert >\alpha$$인 열린 공이 하나 존재한다. 같은 공 $$B$$는 모든 $$y\in B$$에 대해 $$f^*(y)>\alpha$$라는 증거가 된다. 따라서 $$B\subset E_\alpha$$이고 $$E_\alpha$$는 열린집합이다. 모든 superlevel set이 measurable이므로 $$f^*$$도 measurable이다.

이제 각 $$x\in E_\alpha$$에 대해 위와 같은 공 $$B_x$$를 고른다. 이 공에서는

$$
m(B_x)<\frac1\alpha\int_{B_x}|f|
$$

가 성립한다. $$E_\alpha$$ 전체는 compact일 필요가 없으므로 임의의 compact 집합 $$K\subset E_\alpha$$부터 다룬다. $$K$$를 덮는 $$B_x$$들에서 유한 subcover를 고른 뒤, Lemma 1.2로 disjoint한 공 $$B_{i_j}$$들을 고르면

$$
\begin{align*}
 m(K)&\le3^d\sum_jm(B_{i_j})
 \le\frac{3^d}{\alpha}\sum_j\int_{B_{i_j}}|f|\\
 &=\frac{3^d}{\alpha}\int_{\bigcup_jB_{i_j}}|f|
 \le\frac{3^d}{\alpha}\|f\|_1.
\end{align*}
$$

합을 하나의 적분으로 바꾸는 곳에서 disjoint성이 쓰인다. 이 상계는 $$K$$에 무관하다. Lebesgue measure의 inner regularity로 모든 compact $$K\subset E_\alpha$$에 대한 supremum을 취하면 원하는 estimate를 얻는다.

마지막으로 모든 $$\alpha>0$$에 대해

$$
\{f^*=\infty\}\subset E_\alpha,
 \qquad m\{f^*=\infty\}\le\frac{3^d}{\alpha}\|f\|_1.
$$

$$\alpha\to\infty$$로 보내면 왼쪽은 0이다. 따라서 $$f^*$$는 거의 모든 점에서 유한하다.

</div>

이제 평균이 큰 점들의 크기를 원래 함수의 $$L^1$$ 크기로 제어할 수 있다. 다음 단계에서는 $$f$$를 연속 함수로 근사하고, 그 근사 오차의 maximal function에 이 estimate를 적용한다.

#### 3.1.2. The Lebesgue differentiation theorem

<span id="l14:differentiation"></span>

연속 함수에서는 작은 공 위의 평균이 그 점의 함수값으로 수렴한다. 일반 $$L^1$$ 함수에는 연속성이 없지만, $$L^1$$ norm으로 연속 함수에 가깝게 만들 수 있다. 남은 문제는 적분 평균에서의 작은 오차를 거의 모든 점에서의 결론으로 옮기는 것이다. Maximal estimate가 바로 이 연결을 제공한다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3: Lebesgue differentiation theorem.**

$$f\in L^1(\mathbb R^d)$$이면

$$
\lim_{\substack{x\in B\;\text{인 공}\\m(B)\to0}}
 \mint_B f(y)\,dy=f(x)\qquad\text{거의 모든 }x
$$

가 성립한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

<span id="l14:proof"></span>

아직 극한의 존재를 모르므로 먼저 항상 정의되는 limsup을 사용한다. 유한한 $$f(x)$$에 대해

$$
\Omega f(x)=\limsup_{\substack{x\in B\\m(B)\to0}}
 \left|\mint_B f(y)\,dy-f(x)\right|,
 \qquad E_\alpha=\{x:\Omega f(x)>2\alpha\}
$$

로 둔다. $$\vert f\vert =\infty$$인 영집합은 미리 제외한다. $$\Omega f=0$$을 보이면 음이 아닌 오차의 limsup과 liminf가 모두 0이므로 원하는 극한도 존재한다.

$$\alpha>0$$을 고정한다. 임의의 $$\varepsilon>0$$에 대해 $$C_c(\mathbb R^d)$$의 $$L^1$$ density로

$$
g\in C_c(\mathbb R^d),\qquad \|f-g\|_1<\varepsilon
$$

을 고른다. 평균과 점별 값에 각각 $$g$$를 더하고 빼면

$$
\begin{align*}
 \left|\mint_Bf-f(x)\right|
 &\le\mint_B|f-g|
 +\left|\mint_Bg-g(x)\right|+|g(x)-f(x)|.
\end{align*}
$$

가운데 항은 $$g$$의 연속성으로 0에 수렴한다. 첫 항은 $$(f-g)^*(x)$$ 이하이고 마지막 항은 공과 무관하다. 따라서

$$
\Omega f(x)\le(f-g)^*(x)+|f(x)-g(x)|.
$$

이 계산은 평균의 오차를 평균에서 생긴 오차와 점별 값의 오차로 나눈다.

두 음이 아닌 수의 합이 $$2\alpha$$보다 크면 적어도 하나는 $$\alpha$$보다 크다. 그러므로

$$
E_\alpha\subset F_\alpha\cup G_\alpha,
 \quad F_\alpha=\{(f-g)^*>\alpha\},
 \quad G_\alpha=\{|f-g|>\alpha\}.
$$

첫 집합에는 maximal estimate를, 두 번째에는 Chebyshev 부등식을 적용하여

$$
m^*(E_\alpha)\le m(F_\alpha)+m(G_\alpha)
 \le\frac{3^d+1}{\alpha}\|f-g\|_1
 <\frac{3^d+1}{\alpha}\varepsilon
$$

을 얻는다. Exterior measure $$m^*$$로 써도 이 estimate가 성립하므로 $$E_\alpha$$의 measurability를 따로 증명할 필요가 없다. $$\alpha$$를 고정한 채 $$\varepsilon\to0$$으로 보내면 $$E_\alpha$$는 영집합이다. 고정된 근사함수 $$g$$에 대해 $$F_\alpha,G_\alpha$$ 각각이 영집합이라는 주장은 하지 않는다.

이제 $$E=\bigcup_{n\ge1}E_{1/n}$$으로 두면 $$m(E)=0$$이다. $$x\notin E$$에서는 모든 $$n$$에 대해 $$0\le\Omega f(x)\le2/n$$이므로 $$\Omega f(x)=0$$이다. 예외집합을 합칠 때 countable union을 사용한 것이 핵심이다.

</div>

<div class="real-analysis-statement" markdown="1">

**적분을 미분하여 원래 함수를 복원하기.**

<span id="l14:ftcfirst"></span>

$$f\in L^1([a,b])$$이고 $$F(x)=\int_a^xf$$이면 $$F'(x)=f(x)$$가 거의 모든 $$x\in(a,b)$$에서 성립한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$f$$를 구간 밖에서 0으로 연장한다. $$f$$의 Lebesgue point에서 $$h>0$$인 차분몫은 $$(x,x+h)$$ 위의 평균이고, $$h<0$$일 때는 $$(x+h,x)$$ 위의 평균이다. 끝점이 $$x$$인 구간은 $$x$$를 포함하는 길이 $$2\vert h\vert $$인 구간 안에 넣어 평균 절댓값 오차를 두 배로 제어할 수 있다. 따라서 양쪽 차분몫 모두 $$f(x)$$로 수렴한다. 거의 모든 점이 Lebesgue point라는 사실은 아래에서 증명한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Maximal function은 원래 함수보다 크다.**

위 정리를 $$\vert f\vert $$에 적용하면

$$
f^*(x)=\sup_{B\ni x}\mint_B|f|
 \ge\lim_{\substack{B\ni x\\m(B)\to0}}\mint_B|f|
 =|f(x)|\qquad\text{거의 모든 }x.
$$

Supremum이 작은 공들의 평균 극한보다 크다는 사실을 사용했다.

</div>

**왜 local integrability면 충분한가?**

<span id="l14:local"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Locally integrable 함수).**

Measurable 함수 $$f$$가 모든 compact $$K\subset\mathbb R^d$$에 대해 $$\int_K\vert f\vert <\infty$$를 만족하면 locally integrable이라 하고 $$f\in L^1_{\mathrm{loc}}(\mathbb R^d)$$로 쓴다.

</div>

$$L^1\subset L^1_{\mathrm{loc}}$$이지만 역포함은 성립하지 않는다. 상수함수 1은 bounded 집합에서는 적분 가능하지만 $$\mathbb R^d$$ 전체에서는 적분 가능하지 않다. 작은 공에서의 극한은 먼 곳에서의 값에 영향을 받지 않으므로 이보다 넓은 함수족에서도 정리가 성립할 것이라고 예상할 수 있다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.4.**

Lebesgue differentiation theorem은 $$f\in L^1_{\mathrm{loc}}(\mathbb R^d)$$에도 성립한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 양의 정수 $$n$$에 대해 $$f_n=f\rchi_{B(0,n+1)}\in L^1$$로 둔다. $$x\in B(0,n)$$이고 $$x$$를 포함하는 공이 충분히 작으면 그 공에서 $$f=f_n$$이다. 따라서 $$f_n$$에 대한 정리는 $$B(0,n)$$에서 $$f$$에 대한 정리를 준다. $$n$$에 따른 영집합을 countable union으로 모으면 전 공간에서의 결론을 얻는다.

</div>

**Measurable 집합의 density**

<span id="l14:density"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Point of Lebesgue density).**

Measurable 집합 $$E$$에 대하여

$$
\lim_{\substack{x\in B\\m(B)\to0}}\frac{m(B\cap E)}{m(B)}=1
$$

이면 $$x$$를 $$E$$의 point of density라 한다.

</div>

이는 충분히 작은 공의 거의 전부가 $$E$$로 채워진다는 뜻이다. 더 정확히는 $$0<\alpha<1$$을 1에 가깝게 잡아도 충분히 작은 모든 공에서 $$m(B\cap E)>\alpha m(B)$$가 된다. $$E$$가 열린집합일 필요는 없다. 경계가 복잡한 measurable 집합도 거의 모든 점에서 이 성질을 가진다는 점이 중요하다.

<div class="real-analysis-statement" markdown="1">

**Corollary 1.5.**

거의 모든 $$x\in E$$는 $$E$$의 point of density이고, 거의 모든 $$x\notin E$$에서는 같은 비율이 0으로 수렴한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\rchi_E\in L^1_{\mathrm{loc}}$$이고

$$
\mint_B\rchi_E(y)\,dy=\frac{m(B\cap E)}{m(B)}.
$$

Theorem 1.4를 적용하면 극한은 거의 모든 점에서 $$\rchi_E(x)$$이다. $$E$$의 measure가 무한이어도 local integrability는 성립한다.

</div>

**Lebesgue point: 평균에서의 연속성**

<span id="l14:points"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Lebesgue point).**

$$f\in L^1_{\mathrm{loc}}$$의 한 representative를 고정한다. $$\vert f(x)\vert <\infty$$이고

$$
\lim_{\substack{x\in B\\m(B)\to0}}\mint_B|f(y)-f(x)|\,dy=0
$$

이면 $$x$$를 $$f$$의 Lebesgue point라 한다.

</div>

이 조건은 평균이 $$f(x)$$로 수렴한다는 것보다 강하다. 절댓값을 적분 안에 넣으므로 양과 음의 오차가 상쇄되지 않는다. 연속인 점은 Lebesgue point이고, Lebesgue point이면 삼각부등식에 의해 평균도 $$f(x)$$로 수렴한다.

Representative의 선택에도 주의하자. 영집합에서 함수값을 바꾸어도 모든 공 위의 적분과 평균 극한은 변하지 않는다. 그러나 지정한 점의 값 $$f(x)$$는 바뀔 수 있다. 예를 들어 거의 모든 곳에서 0인 함수의 한 점 값을 1로 바꾸면 그 점은 더 이상 Lebesgue point가 아니다. 따라서 Lebesgue point의 집합은 representative에 의존하지만, 거의 모든 점에 대한 결론은 유지된다.

<div class="real-analysis-statement" markdown="1">

**Corollary 1.6.**

$$f\in L^1_{\mathrm{loc}}(\mathbb R^d)$$이면 거의 모든 점이 Lebesgue point이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 실수값 함수에 대해 증명한다. 각 $$r\in\mathbb Q$$에 대해 $$\vert f-r\vert \in L^1_{\mathrm{loc}}$$이므로 어떤 영집합 $$E_r$$ 밖에서

$$
\lim_{\substack{x\in B\\m(B)\to0}}\mint_B|f(y)-r|\,dy=|f(x)-r|
$$

이다. 상수를 뺀 함수는 전 공간에서 적분 가능하지 않을 수 있으므로 여기서는 local version을 사용하는 것이 필요하다.

$$E=\bigcup_{r\in\mathbb Q}E_r\cup\{\vert f\vert =\infty\}$$는 영집합이다. $$x\notin E$$를 고정하고 $$\varepsilon>0$$에 대해 $$\vert f(x)-r\vert <\varepsilon$$인 유리수 $$r$$을 고른다. 그러면

$$
\begin{align*}
 \limsup_{\substack{x\in B\\m(B)\to0}}\mint_B|f(y)-f(x)|\,dy
 &\le\lim_{\substack{x\in B\\m(B)\to0}}\mint_B|f(y)-r|\,dy+|r-f(x)|\\
 &=2|f(x)-r|<2\varepsilon.
\end{align*}
$$

$$\varepsilon$$이 임의적이므로 극한은 0이다. 유리수를 사용한 이유는 approximation뿐 아니라 예외집합을 countable union으로 묶기 위해서이다. 복소수값 함수는 실수부와 허수부에 각각 적용하거나 $$\mathbb Q+i\mathbb Q$$를 사용하면 된다.

</div>

**공을 다른 집합으로 바꿀 수 있는 조건**

<span id="l14:regular"></span>

공이나 정육면체는 크기가 바뀌어도 형태가 일정하다. 반면 고차원의 직사각형은 매우 길고 얇게 만들 수 있다. 이런 직사각형을 포함하는 공은 직사각형에 비해 부피가 지나치게 커지므로 평균을 일정한 상수로 비교할 수 없다. 실제로 $$d\ge2$$에서 모든 직사각형을 허용하면 일반 $$L^1$$ 함수에 대한 weak type $$(1,1)$$ estimate와 differentiation 결론이 실패할 수 있다.

<div class="real-analysis-statement" markdown="1">

**Definition (Regular shrinking).**

양의 유한 measure를 갖는 measurable 집합족 $$\{U_\alpha\}$$에 대해, 고정된 $$c>0$$이 존재하여 각 $$U_\alpha$$를 어떤 공 $$B_\alpha$$에 넣을 수 있고

$$
x\in B_\alpha,\qquad U_\alpha\subset B_\alpha,
 \qquad m(U_\alpha)\ge c\,m(B_\alpha)
$$

이면 이 집합족은 $$x$$로 regularly shrink한다고 한다. 극한에서는 $$m(U_\alpha)\to0$$을 요구한다.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 1.7.**

$$f\in L^1_{\mathrm{loc}}$$이고 $$x$$가 Lebesgue point이면, $$x$$로 regularly shrinking하는 집합족에 대해

$$
\mint_{U_\alpha}f\longrightarrow f(x)
 \qquad(m(U_\alpha)\to0)
$$

이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

정의에서 주어진 비교 공을 사용하면

$$
\left|\mint_{U_\alpha}f-f(x)\right|
 \le\frac1{m(U_\alpha)}\int_{U_\alpha}|f(y)-f(x)|\,dy
 \le\frac1c\mint_{B_\alpha}|f(y)-f(x)|\,dy.
$$

$$m(B_\alpha)\le m(U_\alpha)/c\to0$$이므로 오른쪽이 0으로 간다. $$c$$가 집합마다 바뀌지 않는다는 점이 핵심이다. 이 조건은 공뿐 아니라 정육면체에도 적용된다.

</div>

Lebesgue point에서는 이렇게 다양한 집합 평균으로 함수값을 복원할 수 있다. 다음에는 집합의 지시함수 대신 가중치를 주는 kernel로 평균을 내는 방법을 다룬다.

{% endraw %}

<!-- prettier-ignore-end -->

---
layout: post
title: "Real Analysis 7: Fubini's Theorem"
date: 2026-04-08 12:00:00 +0900
description: "곱공간의 단면과 Fubini·Tonelli 정리, 대표적인 응용을 다룬다."
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

### 2.3. Fubini's theorem

**Fubini 정리를 위한 slices**

<span id="l10:slices"></span>

이제 $$\mathbb R^d=\mathbb R^{d_1}\times\mathbb R^{d_2}$$, $$d=d_1+d_2$$로 공간을 나누고 한 변수씩 적분하는 문제를 생각한다. $$x\in\mathbb R^{d_1}$$, $$y\in\mathbb R^{d_2}$$다. Riemann 적분에서 익숙한 반복적분도 Lebesgue 적분에서는 먼저 measurability와 적분가능성을 확인해야 한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Slices).**

$$f:\mathbb R^{d_1}\times\mathbb R^{d_2}\to\overline{\mathbb R}$$에 대해

$$
f^y(x)=f(x,y),\qquad f_x(y)=f(x,y)
$$

로 정의한다. $$f^y$$는 $$y$$를 고정한 $$x$$의 함수이고, $$f_x$$는 $$x$$를 고정한 $$y$$의 함수다. 집합 $$E\subset\mathbb R^{d_1}\times\mathbb R^{d_2}$$의 slices는

$$
E^y=\{x:(x,y)\in E\},\qquad E_x=\{y:(x,y)\in E\}
$$

다. 특히 $$(\rchi_E)^y=\rchi_{E^y}$$다.

</div>

그림에서는 수평 또는 수직으로 잘라 얻는 단면을 생각하면 된다. 높은 차원에서는 선 대신 한 좌표 묶음을 고정한 affine subspace에서의 제한이다.

#### 2.3.1. Statement and proof of the theorem

<span id="l10:slice-warning"></span>

<div class="real-analysis-statement" markdown="1">

**Measurable한 전체와 measurable한 slice.**

$$f$$가 $$\mathbb R^d$$에서 measurable하다고 해서 모든 $$y$$에서 $$f^y$$가 measurable한 것은 아니다. Measurable 집합의 모든 slice가 measurable한 것도 아니다.

</div>

이를 보려면 nonmeasurable 집합 $$N\subset[0,1]$$를 잡고 $$E=N\times\{0\}\subset\mathbb R^2$$라 하자. $$E$$는 수평선의 일부이므로 이차원 outer measure가 0이고 Lebesgue measurable하다. 그러나 $$E^0=N$$은 일차원에서 measurable하지 않다. 따라서 $$\rchi_E$$는 이차원에서 measurable하지만 $$y=0$$의 slice는 그렇지 않다.

같은 집합이라도 어느 공간의 measure와 measurability를 말하는지 명시해야 하는 이유다. $$m_d(E)=0$$이라는 조건이 모든 $$y$$에서 $$m_{d_1}(E^y)=0$$이라는 결론을 즉시 주지는 않는다. Fubini 정리는 이런 예외가 영집합에 모인다는 사실과, 그 밖에서는 반복적분이 가능하다는 사실을 함께 보장한다.

**정리가 실제로 보장하는 세 가지**

<span id="l11:fubini"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.1. Fubini.**

$$f\in L^1(\mathbb R^{d_1}\times\mathbb R^{d_2})$$라 하자. 그러면 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

거의 모든 $$y\in\mathbb R^{d_2}$$에 대하여 $$f^y\in L^1(\mathbb R^{d_1})$$다.

</li>

<li markdown="1">

$$g(y)=\int_{\mathbb R^{d_1}}f^y(x)\,dx$$는 $$\mathbb R^{d_2}$$에서 적분가능하다. 정의되지 않은 예외 영집합에서는 $$g=0$$으로 정한다.

</li>

<li markdown="1">

다음 등식이 성립한다.

$$
\int_{\mathbb R^{d_2}}\left(\int_{\mathbb R^{d_1}}f(x,y)\,dx\right)dy
 =\int_{\mathbb R^{d_1}\times\mathbb R^{d_2}}f.
$$

</li>

</ol>

$$x,y$$의 역할을 바꾸어도 같은 결론이 성립하므로 두 반복적분은 모두 존재하며 서로 같다.

</div>

첫 조건에서 가정하는 것은 $$\int\vert f\vert <\infty$$다. 단순히 두 반복적분 중 하나를 계산할 수 있다는 가정이 아니다. 첫 결론은 $$x$$의 함수인 slice의 적분가능성이고, 두 번째는 그 적분값들을 모은 $$y$$의 함수의 적분가능성이다. 이 둘을 확인한 뒤에야 마지막 반복적분을 적을 수 있다. 예외적인 $$y$$에서는 slice의 measurability 자체가 실패할 수 있지만, 그 값들이 최종 적분에는 영향을 주지 않는다.

**증명의 전체 구조**

<span id="l11:strategy"></span>

위 세 성질을 만족하는 적분가능 함수들의 모임을 $$\mathcal F$$라 하자. 정의상 $$\mathcal F\subset L^1$$이므로, 목표는 $$L^1\subset\mathcal F$$를 보이는 것이다. 처음부터 일반 함수를 다루지 않고 다음 순서로 넓혀 간다.

<ol type="1" markdown="1">

<li markdown="1">

$$\mathcal F$$가 유한 선형결합에 대해 닫혀 있음을 보인다.

</li>

<li markdown="1">

적분가능한 monotone limit에 대해서도 닫혀 있음을 보인다.

</li>

<li markdown="1">

유한 measure인 $$G_\delta$$ 집합의 characteristic function이 들어감을 보인다.

</li>

<li markdown="1">

영집합의 characteristic function을 다룬다.

</li>

<li markdown="1">

유한 measure인 임의의 measurable 집합으로 확장한다.

</li>

<li markdown="1">

Simple functions의 근사를 사용하여 모든 적분가능 함수로 확장한다.

</li>

</ol>

앞의 두 단계는 이미 있는 원소에서 새 원소를 만드는 규칙이다. 그러나 규칙만으로는 충분하지 않다. 세 번째 단계에서 cube처럼 직접 계산할 수 있는 원소를 넣고, 열린집합과 $$G_\delta$$ 집합까지 확장한다. Measurable 집합은 $$G_\delta$$ 집합과 영집합의 차이로 표현되므로, 다음 두 단계가 연결된다. 긴 증명의 중심 아이디어는 이 근사 순서다.

**Step 1. 유한 선형결합**

<span id="l11:step1"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$f_1,\ldots,f_N\in\mathcal F$$이고 $$a_1,\ldots,a_N$$이 실수라고 하자. 각 $$k$$에 대해 영집합 $$A_k\subset\mathbb R^{d_2}$$를 제외하면 $$(f_k)^y$$가 적분가능하다. $$A=\bigcup_{k=1}^{N}A_k$$도 영집합이므로 $$y\notin A$$에서

$$
\left(\sum_{k=1}^{N}a_kf_k\right)^y
 =\sum_{k=1}^{N}a_k(f_k)^y
$$

가 적분가능하다. Slice를 적분하면

$$
\int\sum_ka_k(f_k)^y=\sum_ka_k\int(f_k)^y.
$$

오른쪽은 적분가능한 $$y$$의 함수들의 유한 선형결합이므로 적분가능하다. 다시 $$y$$에 대해 적분하고 각 $$f_k$$의 반복적분 등식을 사용하면

$$
\int\left(\int\sum_ka_kf_k(x,y)\,dx\right)dy
 =\sum_ka_k\int f_k=\int\sum_ka_kf_k.
$$

따라서 선형결합도 세 성질을 모두 만족한다.

</div>

**Step 2. 적분가능한 monotone limit**

<span id="l11:step2"></span>

$$f_k\in\mathcal F$$이고 $$f_k\nearrow f$$ 또는 $$f_k\searrow f$$이며 $$f\in L^1$$이라고 하자. 그러면 $$f\in\mathcal F$$임을 보인다. 이 단계에서 monotonicity와 수렴은 점별로 성립하는 근사에 대해 사용한다. 이후 구성하는 집합의 characteristic functions와 simple approximation은 이 조건을 만족한다. 극한이 적분가능하다는 가정도 필수다. 무한한 적분값을 가진 극한은 $$\mathcal F\subset L^1$$의 원소가 될 수 없다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

감소수열은 부호를 바꾸면 증가수열이 된다. 증가수열에서는 $$f_k-f_1\ge0$$이고 $$f-f_1\in L^1$$이므로 Step 1을 이용하여 비음수 증가수열의 경우로 줄인다. 이제 $$0\le f_k\nearrow f$$라 하자.

먼저 전체 공간에서 MCT를 적용하면

$$
\lim_k\int_{\mathbb R^{d_1+d_2}}f_k=\int_{\mathbb R^{d_1+d_2}}f.
$$

각 $$k$$에서 slice의 적분가능성이 실패할 수 있는 영집합을 $$A_k$$라 하자. 이번에는 수열 전체를 동시에 다루므로 $$A=\bigcup_{k=1}^{\infty}A_k$$를 취한다. Countable subadditivity에 의해 여전히 $$m_{d_2}(A)=0$$이다. $$y\notin A$$이면 모든 $$(f_k)^y$$가 measurable하고,

$$
(f_k)^y\nearrow f^y.
$$

따라서 그 극한 $$f^y$$도 measurable하며 slice 위에서 MCT를 적용할 수 있다.

$$
g_k(y):=\int_{\mathbb R^{d_1}}(f_k)^y(x)\,dx
 \nearrow g(y):=\int_{\mathbb R^{d_1}}f^y(x)\,dx.
$$

$$A$$에서는 이 함수들을 모두 0으로 정한다. 각 $$g_k$$는 $$f_k\in\mathcal F$$라는 가정에 의해 measurable하고 적분가능하다. 따라서 $$g$$도 measurable하며, $$y$$ 공간에서 다시 MCT를 적용하면

$$
\begin{align*}
 \int_{\mathbb R^{d_2}}g
 &=\lim_k\int_{\mathbb R^{d_2}}g_k
 =\lim_k\int_{\mathbb R^{d_1+d_2}}f_k
 =\int_{\mathbb R^{d_1+d_2}}f<\infty.
\end{align*}
$$

가운데 등식은 각각의 $$f_k$$에 대해 이미 알고 있는 Fubini 성질이다. 이 식으로 $$g$$의 적분가능성과 반복적분 등식을 얻는다. 또 비음수 적분가능 함수는 a.e. 유한하므로 $$g(y)<\infty$$ a.e.다. $$g(y)$$는 바로 $$\int f^y$$이므로 그 점들에서 $$f^y$$가 적분가능하다. 이것으로 첫 결론까지 얻어 $$f\in\mathcal F$$가 된다.

</div>

MCT는 전체 공간, 각 slice, 바깥 변수 공간의 세 곳에서 쓰였다. 각 적용의 함수와 변수를 구별하면 계산의 연결이 분명해진다.

**Step 3. 유한 measure인 $$G_\delta$$ 집합**

<span id="l11:step3"></span>

$$G_\delta$$ 집합은 열린집합들의 가산 교집합이다. 이를 직접 다루기 전에 쉽게 적분할 수 있는 직육면체에서 시작하여 다섯 단계로 접근한다.

**(a) Open cube의 곱.**

<span id="l11:step3a"></span>

$$E=Q_1\times Q_2$$이고 각 $$Q_i\subset\mathbb R^{d_i}$$가 유계 open cube라고 하자. 모든 $$y$$에서

$$
(\rchi_E)^y(x)=\rchi_{Q_1}(x)\rchi_{Q_2}(y),
$$

이므로 slice가 적분가능하고

$$
g(y)=\int_{\mathbb R^{d_1}}\rchi_E(x,y)\,dx
 =|Q_1|\rchi_{Q_2}(y).
$$

이는 $$y$$에 대해 적분가능하며

$$
\int_{\mathbb R^{d_2}}g(y)\,dy
 =|Q_1||Q_2|=m_d(E)=\int_{\mathbb R^d}\rchi_E.
$$

이 경우에는 모든 slice를 직접 알 수 있어서 a.e.보다 강한 결론을 얻었다.

**(b) Cube 경계의 부분집합.**

<span id="l11:step3b"></span>

$$Q=Q_1\times Q_2$$가 closed cube이고 $$E\subset\partial Q$$라고 하자. $$m_d(\partial Q)=0$$이므로 $$E$$도 measurable하고 $$\int\rchi_E=0$$이다. 그러나 이것만으로 모든 slice가 영집합이라고 말할 수는 없다. 경계의 기하를 한 번 더 살펴야 한다.

$$y\notin\partial Q_2$$라 하자. $$y$$가 $$Q_2$$ 밖에 있으면 $$E^y$$는 비어 있고, $$y$$가 $$Q_2$$의 내부에 있으면 $$E^y\subset\partial Q_1$$이다. 따라서 이런 $$y$$에서 $$E^y$$는 $$\mathbb R^{d_1}$$의 영집합이다. 예외가 될 수 있는 $$\partial Q_2$$는 $$\mathbb R^{d_2}$$의 영집합이다. 삼차원 그림에서 위아래 면처럼 단면의 차원이 커질 수 있는 높이를 제외하고 나면, 단면에는 더 낮은 차원의 경계만 남는다는 설명을 일반 차원으로 쓴 것이다.

결국 $$g(y)=\int\rchi_{E^y}=0$$ a.e.이며 $$\int g=0=\int\rchi_E$$다. 따라서 $$\rchi_E\in\mathcal F$$다. 영집합의 임의의 부분집합이 measurable하다는 Lebesgue measure의 completeness가 slice에서도 사용되었다.

**(c) 유한 개의 거의 서로소인 closed cubes.**

<span id="l11:step3c"></span>

$$E=\bigcup_{k=1}^{N}Q_k$$이고 cube들의 내부가 서로소라고 하자. 내부들의 합을 먼저 취하고, 남는 경계점들은 처음 등장하는 cube에 한 번씩만 배정한다. 그러면 서로 중복되지 않는 $$A_k\subset\partial Q_k$$를 택하여

$$
\rchi_E=\sum_{k=1}^{N}\bigl(\rchi_{\operatorname{int}Q_k}+\rchi_{A_k}\bigr)
$$

로 쓸 수 있다. 경계가 겹칠 수 있으므로 단순히 모든 closed cubes의 characteristic functions를 더하면 그 점들을 중복 계산할 수 있다. 이 분해는 그 문제를 피한다. 각 항은 (a), (b)에 의해 $$\mathcal F$$에 속하고 Step 1로 합도 속한다.

**(d) 유한 measure인 열린집합.**

<span id="l11:step3d"></span>

$$E$$가 열려 있고 $$m(E)<\infty$$이면 countable한 거의 서로소 closed cubes로

$$
E=\bigcup_{j=1}^{\infty}Q_j
$$

라고 쓸 수 있다. $$E_k=\bigcup_{j=1}^{k}Q_j$$라 하면 $$\rchi_{E_k}\in\mathcal F$$이고

$$
\rchi_{E_k}\nearrow\rchi_E.
$$

극한은 $$m(E)<\infty$$에 의해 적분가능하므로 Step 2를 적용하여 $$\rchi_E\in\mathcal F$$를 얻는다. 여기서는 합집합의 characteristic function을 사용하여 경계 중복을 피하면서 점별증가를 유지한다.

**(e) 유한 measure인 $$G_\delta$$ 집합.**

<span id="l11:step3e"></span>

$$E=\bigcap_{k=1}^{\infty}\widetilde O_k$$이고 $$\widetilde O_k$$들이 열려 있다고 하자. $$E$$의 measure가 유한하다고 각 $$\widetilde O_k$$의 measure까지 유한한 것은 아니다. Outer approximation으로 열린집합 $$\widetilde O_0\supset E$$를 골라 $$m(\widetilde O_0)<\infty$$가 되게 한 뒤

$$
O_k=\widetilde O_0\cap\widetilde O_1\cap\cdots\cap\widetilde O_k
$$

로 둔다. 유한 교집합이므로 각 $$O_k$$는 열려 있고, $$m(O_k)<\infty$$이며

$$
O_1\supset O_2\supset\cdots,
 \qquad\bigcap_{k=1}^{\infty}O_k=E.
$$

따라서 (d)로 $$\rchi_{O_k}\in\mathcal F$$이고 $$\rchi_{O_k}\searrow\rchi_E$$다. Step 2의 감소수열 경우를 적용하면 $$\rchi_E\in\mathcal F$$다. $$O_0$$를 넣은 목적은 열린 근사를 유지하면서 유한한 적분 bound도 확보하는 것이었다.

**Step 4. 영집합**

<span id="l11:step4"></span>

$$m_d(E)=0$$이라 하자. Measure의 근사 성질로 $$E\subset G$$, $$m_d(G)=0$$인 $$G_\delta$$ 집합 $$G$$를 잡을 수 있다. Step 3에 의해 $$\rchi_G\in\mathcal F$$이므로

$$
\int_{\mathbb R^{d_2}}\left(\int_{\mathbb R^{d_1}}\rchi_G(x,y)\,dx\right)dy
 =\int_{\mathbb R^d}\rchi_G=0.
$$

안쪽 적분은 비음수이므로 거의 모든 $$y$$에서 0이다. 이는 $$m_{d_1}(G^y)=0$$이라는 뜻이다. $$E^y\subset G^y$$이므로 그런 $$y$$에서 $$E^y$$도 measurable한 영집합이다. 따라서

$$
\int_{\mathbb R^{d_1}}\rchi_E(x,y)\,dx=0\quad\text{a.e. }y,
$$

이고 다시 적분해도 0이다. 원래 전체 적분 역시 0이므로 $$\rchi_E\in\mathcal F$$다. 이 단계에서 비로소 일반 영집합의 거의 모든 slice가 영집합이라는 사실을 얻는다.

**Step 5. 유한 measure인 measurable 집합**

<span id="l11:step5"></span>

이제 $$E$$가 measurable하고 $$m(E)<\infty$$라고 하자. $$E\subset G$$이고 $$m(G\setminus E)=0$$인 $$G_\delta$$ 집합 $$G$$를 잡으면 $$m(G)=m(E)<\infty$$다. 따라서

$$
\rchi_E=\rchi_G-\rchi_{G\setminus E}
$$

에서 첫 항은 Step 3에 의해, 두 번째 항은 Step 4에 의해 $$\mathcal F$$에 속한다. Step 1을 적용하여 $$\rchi_E\in\mathcal F$$를 얻는다. Topology가 좋은 집합으로 근사한 뒤 measure가 0인 차이를 제거하는 방식이다.

**Step 6. 모든 적분가능 함수**

<span id="l11:step6"></span>

마지막으로 $$f\in L^1$$라 하자. Positive part와 negative part로 나누면 되므로 Step 1에 의해 $$f\ge0$$인 경우만 증명하면 충분하다. Simple approximation을 택하여

$$
0\le\varphi_k\nearrow f
$$

가 되게 한다. 각 $$\varphi_k$$는 적분가능한 simple function이며, 그 비영 level set의 measure는 유한하다. 실제로 높이가 $$a>0$$인 level set $$E$$에 대해 $$a\,m(E)\le\int\varphi_k\le\int f<\infty$$이기 때문이다. 따라서 Step 5와 Step 1로 $$\varphi_k\in\mathcal F$$다. Step 2를 적용하면 $$f\in\mathcal F$$를 얻고 증명이 끝난다. 복소수값 함수는 실수부와 허수부를 각각 처리하면 된다.

증명이 길어진 이유는 일반 함수의 근사 자체보다, 그 근사 과정에서 slices의 measurability와 적분가능성이 함께 유지되는지를 확인해야 했기 때문이다. 직육면체에서 직접 계산하고, 집합의 근사를 거쳐, 함수의 근사로 확장한다는 구조를 기억하면 각 단계의 역할을 놓치지 않는다. 다음에는 전체 적분가능성을 미리 모르는 비음수 함수에도 반복적분을 적용하는 방법을 다룬다.

#### 2.3.2. Applications of Fubini's theorem

**적분가능성을 미리 모르더라도**

<span id="l12:tonelli"></span>

Fubini 정리를 쓰려면 먼저 $$\int\vert f\vert <\infty$$를 알아야 한다. 그런데 이 적분을 계산하려고 반복적분을 쓰는 상황이라면, 가정을 확인하는 과정부터 막힐 수 있다. 비음수 함수에서는 부호의 상쇄가 없으므로 이 문제를 해결할 수 있다. 전체 적분이 무한할 가능성까지 허용하여 반복적분 등식을 얻는 것이 Tonelli 정리다.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.2. Tonelli.**

$$f:\mathbb R^{d_1}\times\mathbb R^{d_2}\to[0,\infty]$$가 measurable이라고 하자. 그러면 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

거의 모든 $$y\in\mathbb R^{d_2}$$에서 $$f^y$$는 $$\mathbb R^{d_1}$$ 위의 measurable 함수다.

</li>

<li markdown="1">

$$g(y)=\int_{\mathbb R^{d_1}}f^y(x)\,dx$$는 $$[0,\infty]$$ 값의 measurable 함수다. 예외 영집합에서는 $$g=0$$으로 정한다.

</li>

<li markdown="1">

다음 등식이 확장실수 의미에서 성립한다.

$$
\int_{\mathbb R^{d_2}}\left(\int_{\mathbb R^{d_1}}f(x,y)\,dx\right)dy
 =\int_{\mathbb R^{d_1+d_2}}f(x,y)\,dx\,dy.
$$

</li>

</ol>

$$x,y$$를 바꾸어도 같은 결론이 성립한다.

</div>

<span id="l12:extended"></span>

가정이 약해진 만큼 결론도 달라진다. Fubini에서는 slice와 그 적분값의 함수가 적분가능했지만, 여기서는 우선 measurable하다는 결론만 얻는다. 그러나 비음수 measurable 함수의 적분은 $$+\infty$$까지 허용하여 이미 정의했으므로, slice가 적분가능하지 않아도 그 적분 자체가 무의미한 것은 아니다. 유한하지 않을 수 있다는 뜻이다.

등식의 한쪽이 유한하면 다른 쪽도 같은 유한값이다. 한쪽이 $$+\infty$$이면 다른 쪽도 $$+\infty$$다. 여기서는 $$\infty-\infty$$를 계산하지 않고 비음수량들만 더하므로 이 확장실수 등식이 의미를 갖는다. 정리를 적용하기 전에 여전히 필요한 가정은 전체 함수의 measurability와 nonnegativity다.

**Truncation과 세 번의 MCT**

<span id="l12:proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$z=(x,y)\in\mathbb R^{d_1+d_2}$$라 쓰고

$$
f_k(z)=\min\{f(z),k\}\rchi_{\{|z|<k\}}(z)
$$

로 정의한다. $$f=\infty$$인 점에서도 $$\min\{f,k\}=k$$로 해석한다. 각 $$f_k$$는 유계이고 유한 measure 집합에 지지되므로 적분가능하며

$$
0\le f_k\nearrow f
$$

가 모든 점에서 성립한다. 함수의 높이와 공간의 크기를 함께 자른 것이다.

각 $$k$$에 Fubini 정리를 적용하자. 어떤 영집합 $$A_k\subset\mathbb R^{d_2}$$를 제외하면 $$(f_k)^y$$가 적분가능하고, 그 적분값

$$
g_k(y)=\int_{\mathbb R^{d_1}}f_k(x,y)\,dx
$$

는 measurable하며

$$
\int_{\mathbb R^{d_2}}g_k(y)\,dy
 =\int_{\mathbb R^{d_1+d_2}}f_k(z)\,dz
$$

다. $$A=\bigcup_kA_k$$도 영집합이다. $$y\notin A$$에서는 $$(f_k)^y\nearrow f^y$$이므로 $$f^y$$가 measurable하고, slice 위의 MCT로

$$
g_k(y)\nearrow g(y)=\int_{\mathbb R^{d_1}}f(x,y)\,dx.
$$

$$A$$에서는 모든 $$g_k,g$$를 0으로 정하면 $$g$$가 measurable임을 얻는다. 이제 바깥 변수 $$y$$에 MCT를 적용하고, 전체 공간의 $$f_k$$에도 MCT를 적용하면

$$
\begin{align*}
 \int_{\mathbb R^{d_2}}g
 &=\lim_k\int_{\mathbb R^{d_2}}g_k
 =\lim_k\int_{\mathbb R^{d_1+d_2}}f_k
 =\int_{\mathbb R^{d_1+d_2}}f.
\end{align*}
$$

MCT는 유한 적분값을 가정하지 않으므로 이 계산은 공통값이 $$+\infty$$인 경우도 포함한다.

</div>

**Tonelli로 가정을 확인하고 Fubini로 계산하기**

<span id="l12:use"></span>

실제 계산에서는 두 정리를 다음 순서로 함께 사용한다. 먼저 부호가 있을 수 있는 measurable 함수 $$f$$에 대해 $$\vert f\vert \ge0$$에 Tonelli를 적용한다. 이 단계에서는 전체 공간에서 $$\vert f\vert $$의 적분가능성을 아직 몰라도 된다.

$$
\int_{\mathbb R^{d_1+d_2}}|f|
 =\int_{\mathbb R^{d_2}}\left(\int_{\mathbb R^{d_1}}|f(x,y)|\,dx\right)dy.
$$

오른쪽을 계산하거나 상계하여 유한하다는 사실을 얻으면 $$f\in L^1$$가 확인된다. 그 다음에 Fubini를 $$f$$ 자체에 적용하여

$$
\int\left(\int f(x,y)\,dx\right)dy
 =\int f
 =\int\left(\int f(x,y)\,dy\right)dx
$$

라고 계산한다. 적분 순서를 바꾸면서 먼저 확인해야 할 것은 절댓값을 적분한 값의 유한성이다. $$f$$ 자체가 비음수이면 Tonelli만으로 순서를 바꿀 수 있고, 결과가 무한할 수도 있다는 점만 유지하면 된다.

{% endraw %}

<!-- prettier-ignore-end -->

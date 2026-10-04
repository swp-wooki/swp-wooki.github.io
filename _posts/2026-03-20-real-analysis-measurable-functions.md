---
layout: post
title: "Real Analysis 4: Measurable Functions"
date: 2026-03-20 12:00:00 +0900
description: "가측함수의 기본 성질과 거의 모든 곳에서의 성질, 단순함수와 계단함수 근사를 다룬다."
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

**유리수 translation으로 non-measurable set을 만든다**

<span id="l05:vitali"></span>

Measurable set들은 매우 많다. 모든 Borel set이 들어가고 그 밖에도 null set 위에서 바꾼 집합들이 들어간다. 그래도 모든 부분집합이 measurable일 수는 없다. 목표는 같은 집합을 countable하게 많이 평행이동하여, 그 합집합의 measure가 양수이면서 유한해야 하는 모순을 만드는 것이다.

실수축에서

$$
x\sim y\quad\Longleftrightarrow\quad x-y\in\mathbb Q
$$

로 정의한다. $$0\in\mathbb Q$$, 유리수의 음수도 유리수이고 유리수의 합도 유리수이므로 이 관계는 reflexive, symmetric, transitive이다. 따라서 equivalence relation이다. 이를 $$[0,1]$$에 제한하면

$$
[0,1]=\bigcup_\alpha E_\alpha
$$

라는 disjoint equivalence class 분해를 얻는다. 예를 들어 한 동치류에 $$1/\sqrt2$$가 들어가면, $$1/\sqrt2+q$$ 중 $$q\in\mathbb Q$$이고 $$[0,1]$$에 남는 점들이 같은 동치류에 들어간다.

각 $$E_\alpha$$는 어떤 $$x$$에 대한 $$(x+\mathbb Q)\cap[0,1]$$이므로 countable이다. 그런데 $$[0,1]$$은 uncountable이므로 동치류의 모임은 uncountable이어야 한다. 그렇지 않으면 countable한 countable set들의 합집합이 되어 $$[0,1]$$도 countable이기 때문이다. 각 동치류에서 정확히 한 점 $$x_\alpha\in E_\alpha$$를 선택하고

$$
N=\{x_\alpha\}_\alpha\subset[0,1]
$$

으로 놓는다. 이 선택에는 axiom of choice를 사용한다. $$\alpha$$는 자연수로 나열하는 지표가 아니며 $$N$$은 수열의 값들을 모은 countable set이 아니다.

<div class="real-analysis-statement" markdown="1">

**Theorem 3.6.**

위에서 선택한 대표점 집합 $$N$$은 Lebesgue measurable이 아니다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\mathbb Q\cap[-1,1]$$의 원소들을 중복 없이 $$\{r_k\}_{k=1}^{\infty}$$로 나열하고 $$N_k=N+r_k$$로 놓는다. 먼저 measure와 무관한 두 가지 집합론적 사실을 보인다.

*첫째, $$N_k$$들은 서로 disjoint다.* $$x_\alpha+r_k=x_\beta+r_\ell$$이라고 가정하면

$$
x_\alpha-x_\beta=r_\ell-r_k\in\mathbb Q.
$$

따라서 $$x_\alpha\sim x_\beta$$이다. 같은 동치류에서 대표점을 하나만 골랐으므로 $$x_\alpha=x_\beta$$이고, 따라서 $$r_k=r_\ell$$이다. 나열에 중복이 없으므로 $$k=\ell$$이다. 결국 다른 translation 둘이 만날 수 없다.

*둘째, $$[0,1]\subset\bigcup_kN_k\subset[-1,2]$$이다.* 오른쪽 포함은 $$N\subset[0,1]$$과 $$r_k\in[-1,1]$$에서 나온다. 왼쪽 포함을 보이기 위해 임의의 $$x\in[0,1]$$을 택한다. $$x$$가 속한 동치류의 대표 $$x_\alpha$$에 대해 $$x-x_\alpha\in\mathbb Q$$이며 두 점이 $$[0,1]$$에 있으므로 $$x-x_\alpha\in[-1,1]$$이다. 따라서 어떤 $$k$$에 대해 $$x-x_\alpha=r_k$$이고 $$x\in N_k$$이다.

이제 귀류법으로 $$N$$이 measurable이라고 가정하자. Translation invariance에 의해 모든 $$N_k$$도 measurable이고 $$m(N_k)=m(N)$$이다. 이들의 disjointness와 countable additivity를 사용하면

$$
1=m([0,1])\le m\left(\bigcup_kN_k\right)
=\sum_{k=1}^{\infty}m(N)\le m([-1,2])=3.
$$

$$m(N)=0$$이면 가운데 합은 $$0$$이어서 왼쪽 부등식에 모순된다. $$m(N)>0$$이면 같은 양수를 무한히 더한 합은 무한대이므로 오른쪽 부등식에 모순된다. 두 경우 모두 불가능하므로 $$N$$은 measurable이 아니다.

</div>

모순을 얻을 때 subadditivity만으로는 충분하지 않다. 같은 measure를 가진 disjoint translation들의 합집합에 *등식*을 적용한 것이 핵심이다. 이 예는 자연스러운 translation invariance와 countable additivity를 유지하려면 모든 집합을 정의역에 넣을 수 없음을 보여 준다.

### 1.4. Measurable functions

**함숫값의 높이로 나누면 무엇을 측정해야 하는가?**

<span id="l05:motivation"></span>

집합의 measure를 공부한 이유는 길이와 부피 자체를 측정하기 위해서이기도 하지만, 더 넓은 함수에 대한 적분을 정의하기 위해서이기도 하다. Riemann integral에서는 정의역의 구간을 잘라 그 위에 세운 rectangle의 넓이를 더한다. 다른 방법으로, 함수의 *값이 놓이는 범위*를 잘라 보자. 높이를 여러 단계로 나누면 각 단계에서 필요한 것은 함수가 그 높이 범위에 들어가는 점들의 집합이다.

예를 들어 $$a\le f(x)<b$$인 점들을 모은

$$
\{x:a\le f(x)<b\}=f^{-1}([a,b))
$$

의 크기를 알면, 이 집합 위에서 일정한 높이를 갖는 간단한 함수를 만들고 “높이 곱하기 밑면의 measure”를 계산할 수 있다. 그 밑면은 하나의 구간일 필요가 없다. 여기서 inverse image의 measurability가 자연스럽게 등장한다.

연속함수의 특징 중 하나는 열린 집합의 inverse image가 열린 집합이라는 것이다. 적분을 구성하는 데에는 inverse image가 꼭 열려 있을 필요는 없고 measurable이면 된다. 이 요구를 이용하여 연속함수보다 훨씬 넓은 함수의 부류를 정의한다. Measurable이라고 해서 적분값이 유한하다는 뜻은 아니며, integrability는 다음 장에서 별도로 다룬다.

#### 1.4.1. Definition and basic properties

**Measurable function과 level set**

<span id="l05:definition"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Measurable function).**

$$E\in\mathcal M$$이고 $$f:E\to\overline{\mathbb R}=[-\infty,\infty]$$라 하자. 모든 $$a\in\mathbb R$$에 대해

$$
\{f<a\}:=\{x\in E:f(x)<a\}=f^{-1}([-\infty,a))\in\mathcal M
$$

이면 $$f$$를 measurable이라 한다.

</div>

$$f^{-1}(A)$$는 inverse image라는 집합 표기이며, $$f$$에 역함수가 존재한다는 뜻이 아니다. 또한 $$f$$가 $$-\infty$$라는 값을 취할 수 있으므로 $$\{f<a\}$$에는 그 점들도 들어간다. 그래서 extended real line의 구간 $$[-\infty,a)$$를 사용한다. 이후 range를 따로 제한하지 않으면 extended value를 허용한다.

부등호를 바꾸어도 동치인 정의를 얻는다. 실제로

$$
\{f\le a\}=\bigcap_{k=1}^{\infty}\{f<a+1/k\},\qquad
\{f<a\}=\bigcup_{k=1}^{\infty}\{f\le a-1/k\}.
$$

첫 식은 $$f(x)$$가 $$a$$보다 아무리 조금 큰 문턱 아래에도 있으면 $$f(x)\le a$$라는 뜻이다. 둘째 식은 $$f(x)<a$$이면 둘 사이에 양의 간격이 있으므로 충분히 큰 $$k$$에서 $$f(x)\le a-1/k$$라는 뜻이다. 따라서 $$\{f<a\}$$의 measurability와 $$\{f\le a\}$$의 measurability는 동치다. 또한

$$
\{f\ge a\}=E\setminus\{f<a\},\qquad
\{f>a\}=E\setminus\{f\le a\}
$$

이므로 네 가지 부등호 모두 같은 조건을 준다. Complement를 취하는 공간이 정의역 $$E$$임을 주의한다.

구간의 inverse image도 measurable이다. 예를 들어

$$
\{a<f<b\}=\{f>a\}\cap\{f<b\}.
$$

반대로 실수값 함수에서는 모든 유한 open interval의 inverse image가 measurable이면 $$(-\infty,a)$$를 countable한 유한 open interval들의 합집합으로 나타내어 measurability를 얻는다. Extended-valued 함수에서는 $$f^{-1}(\{\infty\})$$, $$f^{-1}(\{-\infty\})$$도 별도로 다루어야 한다. 유한 구간만으로는 두 무한대 값을 구별하지 못하기 때문이다. 정의에서 출발하면

$$
\{f=+\infty\}=\bigcap_{n=1}^{\infty}\{f>n\},\qquad
\{f=-\infty\}=\bigcap_{n=1}^{\infty}\{f<-n\}
$$

이므로 이 집합들은 자동으로 measurable이다.

**Open set의 inverse image와 composition**

<span id="l05:open-preimages"></span>

<div class="real-analysis-statement" markdown="1">

**Property 1.**

실수값 함수 $$f:E\to\mathbb R$$가 measurable인 것은 모든 열린 $$O\subset\mathbb R$$에 대해 $$f^{-1}(O)$$가 measurable인 것과 동치이며, 모든 닫힌 $$F\subset\mathbb R$$에 대해 $$f^{-1}(F)$$가 measurable인 것과도 동치다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

열린 $$O$$를 countable open interval union $$O=\bigcup_jI_j$$로 쓰면

$$
f^{-1}(O)=\bigcup_jf^{-1}(I_j).
$$

각 $$f^{-1}(I_j)$$가 measurable이므로 합집합도 그렇다. 반대 방향은 $$O=(-\infty,a)$$를 택하면 된다. 닫힌 집합에 관한 동치는 $$f^{-1}(O^c)=E\setminus f^{-1}(O)$$에서 나온다.

</div>

<div class="real-analysis-statement" markdown="1">

**Property 2.**

<span id="l05:composition"></span>

연속함수 $$f:\mathbb R^d\to\mathbb R$$는 measurable이다. 더 일반적으로 실수값 measurable function $$f:E\to\mathbb R$$와 연속함수 $$\Phi:\mathbb R\to\mathbb R$$에 대해 $$\Phi\circ f$$는 measurable이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

첫 명제는 열린 집합의 inverse image가 열려 있고 열린 집합은 measurable이라는 사실에서 나온다. 둘째에서 임의의 열린 $$U\subset\mathbb R$$를 택하면

$$
(\Phi\circ f)^{-1}(U)=f^{-1}(\Phi^{-1}(U)).
$$

$$\Phi$$가 연속이므로 $$\Phi^{-1}(U)$$는 열려 있고, $$f$$가 measurable이므로 이 열린 집합의 inverse image도 measurable이다.

</div>

Composition의 순서는 중요하다. $$f\circ\Phi$$에 같은 결론을 일반적으로 적용할 수는 없다. 이 경우 먼저 $$f^{-1}(U)$$라는 Lebesgue measurable set이 생기는데, 연속성은 *열린 집합*의 inverse image를 제어하는 성질이지 모든 Lebesgue measurable set의 inverse image를 제어하는 성질은 아니기 때문이다. Borel set과 Lebesgue measurable set의 차이가 여기서 영향을 준다.

**수열의 supremum과 극한에도 measurability가 남는다**

<span id="l05:limits"></span>

적분의 극한을 다루려면 함수열의 극한이 여전히 허용되는 함수인지 알아야 한다. 연속함수열의 pointwise limit은 연속일 필요가 없지만 measurable function에는 더 강한 안정성이 있다.

<div class="real-analysis-statement" markdown="1">

**Property 3.**

공통 measurable 정의역 $$E$$ 위의 measurable function 수열 $$\{f_n\}$$에 대해

$$
\sup_nf_n,\qquad \inf_nf_n,\qquad
\limsup_{n\to\infty}f_n,\qquad\liminf_{n\to\infty}f_n
$$

은 모두 measurable이다. 각 연산은 $$x$$를 고정하여 실수열 $$\{f_n(x)\}$$에 적용한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저

$$
\left\{\sup_nf_n>a\right\}=\bigcup_{n=1}^{\infty}\{f_n>a\}.
$$

Supremum이 $$a$$보다 크면 적어도 하나의 항이 $$a$$보다 커야 하고 그 역도 성립하기 때문이다. 오른쪽은 measurable set들의 countable union이다. Supremum이 꼭 어느 $$f_n(x)$$에서 달성될 필요는 없다. 엄격한 부등호 $$>a$$를 사용했기 때문에 이 표현이 성립한다.

Negation도 measurable함을 보존하므로

$$
\inf_nf_n=-\sup_n(-f_n)
$$

역시 measurable이다. 마지막 두 함수는

$$
\limsup_nf_n=\inf_k\sup_{n\ge k}f_n,\qquad
\liminf_nf_n=\sup_k\inf_{n\ge k}f_n
$$

으로 표현된다. Tail마다 supremum 또는 infimum을 취하고 다시 countable infimum 또는 supremum을 취하므로 앞의 결과를 두 번 적용하면 된다.

</div>

<div class="real-analysis-statement" markdown="1">

**Property 4.**

$$f_n$$이 measurable이고 모든 $$x\in E$$에서 $$f_n(x)\to f(x)$$이면 $$f$$는 measurable이다.

</div>

극한이 존재하면 $$f=\limsup_nf_n=\liminf_nf_n$$이므로 바로 앞의 결과를 적용한다. 이렇게 함수열의 극한에 대해 닫혀 있다는 성질은 뒤의 convergence theorem에서 반복해서 사용된다.

**합, 곱, 거듭제곱**

<span id="l05:operations"></span>

<div class="real-analysis-statement" markdown="1">

**Property 5.**

$$f,g:E\to\overline{\mathbb R}$$가 measurable이면 양의 정수 $$k$$에 대해 $$f^k$$는 measurable이다. 또한 $$f,g$$가 실수값 함수이면 $$f+g$$와 $$fg$$도 measurable이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

실수값 함수의 거듭제곱은 연속함수 $$t\mapsto t^k$$와의 composition으로 다룰 수 있다. Extended-valued인 경우에도 level set을 직접 보면 된다. $$k$$가 홀수이면

$$
\{f^k>a\}=\{f>a^{1/k}\}.
$$

$$k$$가 짝수이고 $$a\ge0$$이면

$$
\{f^k>a\}=\{f>a^{1/k}\}\cup\{f<-a^{1/k}\},
$$

$$a<0$$이면 이 집합은 정의역 전체다. 따라서 모든 경우에 measurable이다.

합에서는 두 함수가 실수값이라는 가정을 사용한다. 각 $$x$$에서

$$
f(x)+g(x)>a\quad\Longleftrightarrow\quad g(x)>a-f(x).
$$

두 실수 사이에 양의 간격이 있으므로 그 사이에 유리수 $$r$$을 끼울 수 있다. 따라서

$$
\{f+g>a\}=\bigcup_{r\in\mathbb Q}
\bigl(\{f>a-r\}\cap\{g>r\}\bigr).
$$

임의의 실수 $$r$$을 사용하면 합집합이 uncountable이 되어 $$\sigma$$-algebra의 닫힘 성질을 바로 적용할 수 없다. 유리수의 density와 countability를 동시에 이용하는 것이 이 논증의 핵심이다.

각 교집합은 measurable이고 유리수 전체가 countable이므로 $$f+g$$는 measurable이다. $$f-g$$도 같은 이유로 measurable이며

$$
fg=\frac14\bigl((f+g)^2-(f-g)^2\bigr)
$$

에서 곱의 measurability를 얻는다. 실수값 가정은 $$+\infty+(-\infty)$$ 같은 정의되지 않은 연산을 피하게 한다.

</div>

**Almost everywhere와 null set 위의 변경**

<span id="l05:ae"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Almost everywhere).**

어떤 명제가 null set을 제외한 모든 점에서 성립하면 almost everywhere 성립한다고 하며 a.e.로 줄여 쓴다. 예를 들어

$$
f=g\text{ a.e. on }E
\quad\Longleftrightarrow\quad
m\bigl(\{x\in E:f(x)\ne g(x)\}\bigr)=0.
$$

</div>

“모든 점에서 같다”와 “a.e. 같다”는 다른 말이다. 후자는 예외점의 수가 적다는 뜻이 아니라 예외집합의 measure가 $$0$$이라는 뜻이다.

<div class="real-analysis-statement" markdown="1">

**Property 6.**

$$f$$가 measurable이고 $$f=g$$ a.e.이면 $$g$$도 measurable이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

두 함수가 다를 수 있는 null set을 $$Z$$라 하자. 모든 실수 $$a$$에 대해

$$
\{g<a\}=(\{f<a\}\setminus Z)\cup(\{g<a\}\cap Z).
$$

첫 집합은 measurable이고, 둘째 집합은 null set $$Z$$의 부분집합이므로 measurable이다. 따라서 $$\{g<a\}$$도 measurable이다.

</div>

이로부터 $$f_n\to f$$가 a.e.로만 성립해도 $$f$$는 measurable임을 얻는다. 먼저 항상 measurable인 $$\limsup_nf_n$$을 생각하면 이것이 $$f$$와 a.e. 같기 때문이다. 유한값 조건도 a.e.로 만족되면 null set 위에서 값을 적절히 정한 뒤 합과 곱을 정의할 수 있다. 두 예외집합의 합집합도 null set이므로 a.e. 성질이 보존된다.

#### 1.4.2. Approximation by simple functions or step functions

**Characteristic function, simple function, step function**

<span id="l05:simple"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Characteristic function).**

집합 $$E$$의 characteristic function은

$$
\rchi_E(x)=\begin{cases}1,&x\in E,\\0,&x\notin E\end{cases}
$$

이다.

</div>

$$\rchi_E$$는 $$E$$가 measurable일 때, 그리고 그때에만 measurable이다. 예를 들어 $$\{\rchi_E>1/2\}=E$$이므로 한 방향이 보이고, 다른 방향에서는 모든 level set이 $$E,E^c,\varnothing,\mathbb R^d$$ 중 하나임을 확인한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Simple function과 step function).**

이 강의에서 simple function은

$$
\varphi(x)=\sum_{j=1}^N a_j\rchi_{E_j}(x),\qquad
a_j\in\mathbb R,\quad E_j\in\mathcal M,\quad m(E_j)<\infty
$$

형태의 함수다. Step function은 rectangle $$R_j$$들을 사용한

$$
\psi(x)=\sum_{j=1}^N a_j\rchi_{R_j}(x)
$$

형태의 함수다.

</div>

합은 반드시 유한하다. 이 정의에서는 simple function의 밑면 집합에 유한 measure도 요구한다. 함수가 취하는 값은 단순하지만 밑면 $$E_j$$의 모양은 복잡할 수 있다. Step function은 밑면도 rectangle로 제한하므로 기하학적으로 더 단순하다. 이제 일반 measurable function을 이런 함수들로 근사하여 적분의 정의로 나아갈 준비를 한다.

**두 방향의 truncation과 dyadic approximation**

<span id="l05:approximation"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.1.**

$$f:\mathbb R^d\to[0,\infty]$$가 measurable이면 nonnegative simple function 수열 $$\{\varphi_k\}$$가 존재하여 모든 $$x$$에서

$$
0\le\varphi_k(x)\le\varphi_{k+1}(x),\qquad
\lim_{k\to\infty}\varphi_k(x)=f(x)
$$

를 만족한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

함숫값의 높이를 잘게 나누어 아래에서 계단 모양으로 근사할 생각이다. 그러나 두 가지 문제가 있다. $$f$$가 arbitrarily large일 수 있으므로 유한한 높이만 다루어야 하고, level set이 무한 measure일 수 있으므로 정의역도 유계 부분으로 잘라야 한다.

$$Q_k=[-k/2,k/2]^d$$로 놓는다. 이 cube들은 증가하면서 $$\mathbb R^d$$ 전체를 덮는다. $$Q_k$$ 바깥에서는 $$0$$으로 놓고, 안에서는 높이를 $$k$$에서 자른다. $$[0,k)$$를 길이 $$2^{-k}$$인 $$k2^k$$개의 구간으로 나누어

$$
\begin{align*}
E_{j,k}&=\left\{x\in Q_k:\frac{j-1}{2^k}\le f(x)<\frac{j}{2^k}\right\},
&&1\le j\le k2^k,\\
E_k&=\{x\in Q_k:f(x)\ge k\}
\end{align*}
$$

로 정의한다. 모두 measurable이고 $$Q_k$$의 부분집합이므로 유한 measure를 갖는다. 이제

$$
\varphi_k(x)=\sum_{j=1}^{k2^k}\frac{j-1}{2^k}\rchi_{E_{j,k}}(x)
+k\rchi_{E_k}(x)
$$

로 놓는다. 각 띠에서는 왼쪽 끝 높이를 선택했으므로 $$0\le\varphi_k\le f$$이다. $$Q_k$$ 바깥을 무시했더라도 cube가 점점 커지므로 고정된 점은 결국 안으로 들어온다.

Monotonicity를 확인하자. $$x\in Q_k$$이면 dyadic 간격을 절반으로 줄일 때 아래쪽 반올림 값은 작아지지 않는다. 또한 높이 제한이 $$k$$에서 $$k+1$$로 올라가므로 이전에 잘렸던 값도 낮아지지 않는다. $$x\in Q_{k+1}\setminus Q_k$$에서는 이전 값이 $$0$$이고 새 값은 음이 아니다. 따라서 모든 점에서 $$\varphi_k\le\varphi_{k+1}$$이다.

수렴은 $$x$$를 고정하여 보인다. $$f(x)<\infty$$이면 충분히 큰 $$k$$에서 $$x\in Q_k$$이고 $$f(x)<k$$이므로

$$
0\le f(x)-\varphi_k(x)<2^{-k}\longrightarrow0.
$$

$$f(x)=\infty$$이면 $$x\in Q_k$$가 된 뒤에는 $$\varphi_k(x)=k$$이므로 역시 $$\varphi_k(x)\to\infty=f(x)$$이다. 이로써 모든 점에서의 수렴과 증가성을 얻는다.

</div>

공간을 잘라 유한 measure를 확보하고, 높이를 잘라 유한 개의 값을 만들고, 높이 간격을 줄여 오차를 없앴다. 다음에는 positive와 negative 부분을 따로 근사하여 부호 제한을 없애고, 이어 step function만으로도 a.e. 근사가 가능한지 살펴본다.

**부호가 있는 함수도 simple function으로 근사한다**

<span id="l06:signed"></span>

Nonnegative measurable function은 증가하는 nonnegative simple function 수열의 pointwise limit으로 나타낼 수 있었다. 이제 부호 제한을 없애자. 함수가 음수가 될 수 있으면 근사 함수 자체가 음이 아니거나 증가한다고 요구할 수 없다. 대신 absolute value가 증가하도록 만들 수 있다.

<div class="real-analysis-statement" markdown="1">

**Theorem 4.2.**

Measurable function $$f:\mathbb R^d\to[-\infty,\infty]$$에 대해 simple function 수열 $$\{\varphi_k\}$$가 존재하여 모든 $$x$$에서

$$
|\varphi_k(x)|\le|\varphi_{k+1}(x)|\le|f(x)|,
\qquad \varphi_k(x)\longrightarrow f(x)
$$

를 만족한다. 무한대 값에서는 extended limit을 뜻한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Positive part와 negative part를

$$
f^+(x)=\max\{f(x),0\},\qquad
f^-(x)=\max\{-f(x),0\}
$$

로 정의한다. 둘 다 음이 아니며

$$
f=f^+-f^-,\qquad |f|=f^++f^-.
$$

Negative part라는 이름에도 불구하고 $$f^-$$ 자체는 nonnegative다. $$f(x)<0$$인 곳에서 그 음수의 크기를 담고, 원래 부호는 빼기 기호로 복원한다. 각 점에서 $$f^+,f^-$$ 중 적어도 하나가 $$0$$이므로 $$\infty-\infty$$도 생기지 않는다.

두 nonnegative measurable function에 앞의 정리를 적용하여

$$
0\le\varphi_k^{(1)}\nearrow f^+,\qquad
0\le\varphi_k^{(2)}\nearrow f^-
$$

인 simple function 수열들을 택한다. $$\varphi_k=\varphi_k^{(1)}-\varphi_k^{(2)}$$로 놓으면 simple function이다. 또한 $$f^+(x)=0$$이면 $$0\le\varphi_k^{(1)}(x)\le f^+(x)=0$$이므로 모든 $$k$$에서 $$\varphi_k^{(1)}(x)=0$$이다. $$f^-(x)=0$$인 경우도 같다. 따라서 두 근사 함수는 같은 점에서 동시에 양수가 되지 않는다. 이 사실이

$$
|\varphi_k|=\varphi_k^{(1)}+\varphi_k^{(2)}
$$

라는 등식을 보장한다. 일반적인 두 nonnegative 함수의 차이에서는 이 등식이 성립하지 않으므로, 두 함수가 동시에 양수가 되지 않는다는 점이 중요하다. 오른쪽이 증가하고 $$f^++f^-=\vert f\vert $$ 이하이므로 absolute value의 조건을 얻는다. 수렴은 각 점의 부호에 따라 살아 있는 한쪽 근사 수열의 수렴으로부터 나온다.

</div>

**Step function을 만들 때 왜 rectangle을 분리하는가?**

<span id="l06:step"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.3.**

Measurable function $$f:\mathbb R^d\to[-\infty,\infty]$$는 어떤 step function 수열 $$\{\psi_k\}$$의 pointwise limit과 a.e. 같다.

</div>

Simple function은 임의의 measurable set을 밑면으로 사용하지만 step function은 rectangle만 사용한다. 더 단순한 함수를 요구하는 대신, 모든 점에서의 수렴을 a.e. 수렴으로 완화한다.

먼저 $$m(E)<\infty$$인 measurable set $$E$$의 characteristic function $$\rchi_E$$를 근사하자. $$\eta>0$$이 주어지면 유한 cube union으로의 근사 정리에 따라

$$
m\left(E\triangle\bigcup_{j=1}^NQ_j\right)\le\eta
$$

인 cube들을 고를 수 있다. 그러나 곧바로 $$\sum_j\rchi_{Q_j}$$를 쓰면 안 된다. 두 cube가 겹치는 점에서는 합이 $$2$$가 되어 characteristic function과 달라지기 때문이다. Cube들의 합집합을 표현하는 일과 그 characteristic function을 *합*으로 표현하는 일은 다르다.

각 cube의 면을 연장하여 공통 격자를 만들면 같은 합집합을 유한 개의 almost disjoint rectangle $$\widetilde R_1,\ldots,\widetilde R_M$$으로 표현할 수 있다. 원래 cube가 겹치는 부분을 자르므로 새 조각들은 cube가 아니라 rectangle일 수 있지만, step function의 정의에는 rectangle이면 충분하다. 조각 수가 늘어나도 유한 개라는 사실은 유지된다.

아직 공유하는 경계에서 indicator 합이 $$2$$ 이상이 될 수 있다. 각 양의 부피 rectangle을 안쪽으로 조금씩 줄여 closed rectangle $$R_j\subset\operatorname{int}\widetilde R_j$$로 만들자. 유한 개만 줄이므로 전체 잃은 부피가 $$\eta$$ 이하가 되게 할 수 있다. 부피 $$0$$인 조각은 제거한다. 그러면 $$R_j$$들은 실제로 disjoint이고

$$
m\left(E\triangle\bigcup_{j=1}^MR_j\right)\le2\eta.
$$

따라서 step function

$$
\psi=\sum_{j=1}^M\rchi_{R_j}
$$

는 $$E\triangle\bigcup_jR_j$$ 바깥에서 $$\rchi_E$$와 정확히 같다. 첫 $$\eta$$는 cube union 근사의 오차이고 둘째 $$\eta$$는 rectangle을 줄이는 데 쓴 오차다.

**작은 오차집합을 모으면 a.e. 수렴이 나온다**

<span id="l06:exceptional"></span>

각 $$k$$마다 위 구성의 오차를 조절하여 step function $$\psi_k$$가

$$
m(B_k)\le2^{-k},\qquad B_k=\{x:\rchi_E(x)\ne\psi_k(x)\}
$$

를 만족하게 하자. 단순히 $$m(B_k)\to0$$이라는 사실만으로 pointwise a.e. 수렴을 말할 수는 없다. 같은 점이 무한히 많은 오차집합에 들어갈 가능성을 제어해야 한다. 이를 위해

$$
H_K=\bigcup_{j>K}B_j,\qquad H=\bigcap_{K=1}^{\infty}H_K
$$

로 놓는다. $$H$$는 *무한히 많은* $$B_j$$에 들어가는 점들의 집합이다. “모든 $$j$$에서 실패하는 점”보다 넓은 집합임을 구별한다. 어느 $$K$$ 이후를 보더라도 다시 실패가 나타나면 $$H$$에 들어간다.

Countable subadditivity로

$$
m(H)\le m(H_K)\le\sum_{j>K}m(B_j)
\le\sum_{j>K}2^{-j}=2^{-K}
$$

이고, 모든 $$K$$에 대해 성립하므로 $$m(H)=0$$이다. $$x\notin H$$이면 어떤 $$K_0$$에 대해 $$x\notin H_{K_0}$$이다. 따라서 모든 $$j>K_0$$에서 $$x\notin B_j$$, 즉

$$
\psi_j(x)=\rchi_E(x)
$$

이다. 여기서는 단순히 값이 가까워지는 것을 넘어 결국 정확히 같아진다. 다만 $$K_0$$는 $$x$$에 따라 달라지므로 이 결론이 uniform convergence를 뜻하지는 않는다.

이제 일반 $$f$$로 돌아가자. 앞의 정리에서 $$\varphi_k\to f$$인 simple function 수열을 택하고

$$
\varphi_k=\sum_{\ell=1}^{M_k}a_{k,\ell}\rchi_{E_{k,\ell}}
$$

로 쓰자. 각 $$E_{k,\ell}$$는 유한 measure다. 각각의 characteristic function을 step function으로 근사하되, 그 값이 달라지는 집합의 measure가 $$2^{-k}/M_k$$ 이하가 되도록 고른다. 같은 계수를 곱하여 더하면 step function $$\psi_k$$를 얻고

$$
m\bigl(\{\varphi_k\ne\psi_k\}\bigr)\le2^{-k}
$$

가 된다. $$\varphi_k=0$$인 경우에는 $$\psi_k=0$$으로 두면 된다. 방금의 tail-union 논증을 이 오차집합들에 적용하면 null set 바깥에서는 결국 $$\psi_k(x)=\varphi_k(x)$$이다. 따라서 $$\psi_k(x)\to f(x)$$ a.e.이다. 이렇게 $$k$$번째 simple approximation마다 충분히 좋은 step approximation을 선택해야 두 단계의 근사가 하나의 수열로 이어진다.

#### 1.4.3. Littlewood's three principles

<span id="l06:littlewood"></span>

지금까지의 근사를 다음 직관으로 정리할 수 있다.

<ol type="i" markdown="1">

<li markdown="1">

Measurable set은 거의 유한한 interval union과 같다.

</li>

<li markdown="1">

Measurable function은 거의 연속이다.

</li>

<li markdown="1">

수렴하는 measurable function 수열은 거의 uniformly convergent이다.

</li>

</ol>

여기서 “거의”를 문맥에 맞게 정확히 해석해야 한다. 첫 원리의 현재 정식화는 유한 measure인 집합이 유한 rectangle 또는 cube union과 symmetric difference의 measure를 임의로 작게 한다는 것이다. 둘째와 셋째에서는 정의역에서 measure가 작은 부분을 버리고 남은 부분에서 좋은 성질을 얻는다. 함수를 임의로 바꾼다는 말이 아니라 정의역을 제한한다는 말이다. 증명 순서는 셋째를 먼저 보이고, uniform limit이 continuity를 보존한다는 사실을 이용하여 둘째를 보이는 것이다.

**Egorov theorem: 점마다 다른 시작 시점을 통일하기**

<span id="l06:egorov"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.4: Egorov.**

$$E\in\mathcal M$$, $$m(E)<\infty$$라 하자. 실수값 measurable function 수열 $$f_k:E\to\mathbb R$$가 실수값 함수 $$f$$로 a.e. 수렴한다고 하자. 그러면 모든 $$\epsilon>0$$에 대해 닫힌 집합 $$A_\epsilon\subset E$$가 존재하여

$$
m(E\setminus A_\epsilon)\le\epsilon,
\qquad f_k\to f\text{ uniformly on }A_\epsilon
$$

를 만족한다. 함수들과 극한이 유한값을 a.e. 갖는 경우에도 해당 null set들을 제거하여 같은 결론을 얻는다.

</div>

Pointwise convergence에서는 주어진 오차에 도달하는 시점이 $$x$$에 따라 달라진다. Uniform convergence에서는 그 시점 하나가 모든 $$x$$에 동시에 통한다. 정리는 measure가 작은 부분을 제거하면 시점을 공통으로 고를 수 있다는 것이다. $$\epsilon$$은 제거할 집합의 크기를 제어하며, 함수값의 오차는 증명에서 별도의 수 $$\delta$$로 표시한다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

수렴하지 않는 null set을 먼저 제거한다. 그 나머지를 다시 $$E$$라 부르면 모든 점에서 $$f_k(x)\to f(x)$$이고, 제거한 부분은 최종 measure 오차에 영향을 주지 않는다.

자연수 $$n,k\ge1$$에 대해

$$
E_k^n=\left\{x\in E:|f_j(x)-f(x)|<\frac1n\quad\text{for all }j>k\right\}
$$

로 놓는다. 이는 $$j>k$$에 대한 measurable level set들의 countable intersection이므로 measurable이다. $$n$$은 요구하는 정확도이고 $$k$$는 그 정확도가 계속 유지되기 시작하는 시점이다. $$n$$을 고정하고 $$k$$를 늘리면 확인해야 하는 초기 항이 줄어들어 조건이 약해지므로 $$E_k^n\subset E_{k+1}^n$$이다. 또한 pointwise convergence에 의해 모든 $$x$$는 충분히 큰 $$k$$에서 $$E_k^n$$에 들어간다. 따라서

$$
E_k^n\nearrow E\quad(k\to\infty).
$$

Continuity of measure로 $$m(E_k^n)\to m(E)$$이다. $$m(E)<\infty$$이므로

$$
m(E\setminus E_k^n)=m(E)-m(E_k^n)\longrightarrow0.
$$

유한 measure 가정은 바로 여기서 필요하다. 따라서 각 $$n$$마다 충분히 큰 $$k_n$$을 골라

$$
m(E\setminus E_{k_n}^n)<2^{-n}
$$

으로 만들 수 있다. 이 집합에서는 모든 $$j>k_n$$에 대해 오차 $$1/n$$이 통한다.

다음으로 $$\sum_{n=N}^{\infty}2^{-n}<\epsilon/2$$인 $$N$$을 고르고

$$
\widetilde A_\epsilon=\bigcap_{n\ge N}E_{k_n}^n
$$

로 놓는다. 모든 충분히 작은 정확도 조건을 동시에 만족하는 점만 남기는 것이다. De Morgan의 법칙은

$$
E\setminus\widetilde A_\epsilon
=\bigcup_{n\ge N}(E\setminus E_{k_n}^n)
$$

을 주므로 subadditivity로

$$
m(E\setminus\widetilde A_\epsilon)
\le\sum_{n\ge N}m(E\setminus E_{k_n}^n)
<\sum_{n\ge N}2^{-n}<\epsilon/2.
$$

이제 uniform convergence를 직접 확인하자. 함수값의 오차 $$\delta>0$$을 주면 $$1/n<\delta$$인 $$n\ge N$$을 고른다. 모든 $$x\in\widetilde A_\epsilon$$는 $$E_{k_n}^n$$에 속하므로

$$
|f_j(x)-f(x)|<1/n<\delta
\quad\text{for every }x\in\widetilde A_\epsilon\text{ and every }j>k_n.
$$

시점 $$k_n$$은 $$\delta$$에 따라 달라지지만 $$x$$에는 의존하지 않는다. 이것이 uniform convergence의 정의다.

아직 $$\widetilde A_\epsilon$$가 닫혔는지는 알 수 없다. Measurable set의 안쪽 closed approximation으로 닫힌 $$A_\epsilon\subset\widetilde A_\epsilon$$를 골라

$$
m(\widetilde A_\epsilon\setminus A_\epsilon)\le\epsilon/2
$$

가 되게 한다. 더 작은 집합으로 제한해도 uniform convergence는 유지된다. 또한

$$
m(E\setminus A_\epsilon)
=m(E\setminus\widetilde A_\epsilon)
+m(\widetilde A_\epsilon\setminus A_\epsilon)\le\epsilon.
$$

처음 제거한 null set을 다시 고려해도 이 추정은 변하지 않는다.

</div>

통상적인 uniform convergence는 $$\vert f_j-f\vert $$라는 실수값의 차이를 사용한다. 따라서 앞의 simple approximation 정리에서 무한대 극한을 허용한 것과, 여기서 유한값 극한에 관한 uniform convergence를 말하는 것은 구별해야 한다.

**Lusin theorem: restriction이 연속이 되도록 하기**

<span id="l06:lusin"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 4.5: Lusin.**

$$E\in\mathcal M$$, $$m(E)<\infty$$이고 $$f:E\to\mathbb R$$가 measurable이면, 모든 $$\epsilon>0$$에 대해 닫힌 $$F_\epsilon\subset E$$가 존재하여

$$
m(E\setminus F_\epsilon)\le\epsilon,
\qquad f|_{F_\epsilon}\text{는 연속}
$$

이다.

</div>

결론은 $$F_\epsilon$$에 *제한한 함수*의 continuity다. 원래 정의역 $$E$$의 모든 방향에서 $$F_\epsilon$$의 점으로 접근했을 때도 $$f$$가 연속이라는 더 강한 주장은 아니다. Restriction의 continuity는 $$F_\epsilon$$ 안에 남아 있는 점들로만 접근하여 검사한다.

이 차이는 characteristic function에서 쉽게 보인다. Rectangle의 안쪽과 바깥쪽 사이에는 경계에서 jump가 있다. 경계 근처의 작은 부분을 제거하면 남은 정의역의 각 점에서는 값이 근방 안에서 일정해진다. 일반 함수에서도 step approximation의 경계들을 조금씩 제거하고, 그 위에서 근사 수열을 uniformly convergent하게 만들면 같은 생각이 통한다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$f$$를 $$E^c$$에서 $$0$$으로 연장하면 $$\mathbb R^d$$ 위의 measurable function이 된다. Step approximation 정리를 적용하고 다시 $$E$$에 제한하여 step function의 restriction $$f_n$$이 $$f$$로 a.e. 수렴하게 한다.

각 $$f_n$$은 유한한 rectangle indicator들의 선형결합이다. 따라서 불연속이 생길 수 있는 곳은 유한 개 rectangle의 경계에 포함된다. Rectangle의 경계는 유한 개의 낮은 차원 rectangle로 덮이며 각 measure가 $$0$$이므로 전체 경계도 null set이다. 이를 덮는 열린 $$U_n$$을 골라

$$
m(U_n)<2^{-n}
$$

으로 만들 수 있다. 그러면 $$f_n$$은 $$U_n$$ 바깥에서 연속이다. 기하학적으로 경계 주변에 아주 얇은 띠를 제거하는 것이다.

Egorov theorem으로 닫힌 $$A_{\epsilon/3}\subset E$$를 골라

$$
m(E\setminus A_{\epsilon/3})\le\epsilon/3,
\qquad f_n\to f\text{ uniformly on }A_{\epsilon/3}
$$

이 되게 한다. $$\sum_{n\ge N}2^{-n}<\epsilon/3$$인 $$N$$을 고르고

$$
F'=A_{\epsilon/3}\setminus\bigcup_{n\ge N}U_n
$$

으로 놓는다. $$n\ge N$$이면 $$F'\subset U_n^c$$이므로 $$f_n\vert _{F'}$$는 연속이다. 초기의 유한 개 $$f_n$$이 연속인지까지 요구할 필요는 없다. 극한을 결정하는 tail만 연속이면 충분하다. 또한 $$F'\subset A_{\epsilon/3}$$이므로 이 tail은 $$f$$로 uniformly convergent이다.

왜 limit도 연속인가? $$x\in F'$$와 $$\delta>0$$을 고정하면, 충분히 큰 $$n$$에 대해 $$\sup_{F'}\vert f-f_n\vert <\delta/3$$이다. 이 $$f_n\vert _{F'}$$의 continuity로 $$y\in F'$$가 $$x$$에 충분히 가까우면 $$\vert f_n(y)-f_n(x)\vert <\delta/3$$이다. 그러면

$$
|f(y)-f(x)|\le|f(y)-f_n(y)|+|f_n(y)-f_n(x)|+|f_n(x)-f(x)|<\delta.
$$

따라서 $$f\vert _{F'}$$가 연속이다. 먼저 Egorov를 증명한 이유가 바로 이 uniform error control에 있다.

마지막으로 closed approximation을 사용하여 닫힌 $$F_\epsilon\subset F'$$를 고르고 $$m(F'\setminus F_\epsilon)\le\epsilon/3$$으로 만든다. 그러면 continuity는 restriction으로 보존되고

$$
E\setminus F_\epsilon
\subset(E\setminus A_{\epsilon/3})
\cup\bigcup_{n\ge N}U_n
\cup(F'\setminus F_\epsilon)
$$

이므로

$$
m(E\setminus F_\epsilon)
\le\epsilon/3+\sum_{n\ge N}m(U_n)+\epsilon/3\le\epsilon.
$$

각각의 $$\epsilon/3$$은 uniform convergence 확보, step function 경계 제거, closed subset 선택에 사용한 오차다.

</div>

**다음 장으로: measure에서 integral로**

<span id="l06:next"></span>

이제 집합의 크기와 measurable function을 갖추었고, 그 함수를 simple function 및 step function으로 근사할 수 있다. 다음 목표는 이 간단한 함수들의 적분을 출발점으로 Lebesgue integral을 정의하는 것이다. Riemann integral보다 넓은 함수들을 다룰 수 있다는 점과 함께, 함수열의 극한과 적분 사이의 관계를 정밀하게 다룰 수 있다는 점이 중요하다.

함수 $$f_n$$마다 적분이 존재하고 $$f_n$$이 어떤 함수로 수렴한다고 해서 적분값도 자동으로 수렴하는 것은 아니다. Monotone convergence theorem, bounded convergence theorem, dominated convergence theorem은 어떤 조건에서 극한과 적분을 연결할 수 있는지를 알려 준다. 이어 적분 가능한 함수들의 공간 $$L^1$$을 살펴보고, 더 나아가 $$L^2$$와 Hilbert space로 연결한다.

또한 여러 변수의 적분에서는

$$
\int\left(\int f(x,y)\,dy\right)dx
\quad\text{와}\quad
\int\left(\int f(x,y)\,dx\right)dy
$$

가 언제 같은지 물을 수 있다. 적분 순서를 마음대로 바꾸는 것은 일반적으로 정당하지 않다. 먼저 이 적분들을 정의하고, Fubini theorem의 가정 아래에서 교환이 가능함을 보이는 것이 다음 장의 중요한 목표다.

{% endraw %}

<!-- prettier-ignore-end -->

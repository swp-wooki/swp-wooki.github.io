---
layout: post
title: "Real Analysis 15: Closed Subspaces and Orthogonal Projections"
date: 2026-06-20 12:00:00 +0900
description: "닫힌 부분공간, 직교여공간과 직교사영의 구조를 다룬다."
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

### 4.4. Closed subspaces and orthogonal projections

<span id="l22:subspace"></span>

공간 자체의 분류 다음에는 그 사이의 linear operator를 연구한다. 유한 차원의 행렬을 단순한 형태로 바꾸듯, 특정한 무한 차원 연산자도 적절한 orthogonal한 방향들로 분해하려 한다. 이를 위해 먼저 공간을 subspace와 그에 수직인 방향으로 나누는 방법이 필요하다.

<div class="real-analysis-statement" markdown="1">

**Definition (Closed subspace).**

$$S\subset H$$가 linear subspace이고, $$f_n\in S$$, $$f_n\to f$$ in $$H$$이면 항상 $$f\in S$$일 때 $$S$$를 **closed subspace**라 한다. Subspace라는 관계를 $$S\le H$$로도 쓴다.

</div>

유한 차원에서는 모든 subspace가 closed이지만 무한 차원에서는 그렇지 않다. 예를 들어 $$L^2[0,1]$$에서 Riemann 적분가능한 대표원을 갖는 함수들의 공간은 closed가 아니다. $$f(x)=x^{-1/4}$$ for $$x>0$$은 $$\int_0^1\vert f\vert ^2=2$$이므로 $$L^2$$에 속한다. 그 bounded한 절단 $$f_n=\min(f,n)$$은 Riemann 적분가능하고 $$f_n\to f$$ in $$L^2$$이지만, $$f$$는 어떤 대표원을 택해도 bounded한 Riemann 적분가능 함수가 될 수 없다. 크기가 $$n$$을 넘는 집합이 항상 양의 measure를 갖기 때문이다. 따라서 극한이 원래 subspace를 벗어날 수 있다.

**가장 가까운 점이 존재하는가?**

<span id="l22:projection"></span>

<div class="real-analysis-statement" markdown="1">

**Lemma 4.1.**

$$S$$가 $$H$$의 closed subspace이고 $$f\in H$$이면 유일한 $$g_0\in S$$가 존재하여

$$
\|f-g_0\|=\inf_{g\in S}\|f-g\|
$$

를 만족한다. 또한 $$f-g_0\perp S$$, 즉 $$(f-g_0,g)=0$$ for all $$g\in S$$이다.

</div>

$$\mathbb R^3$$의 평면에 벡터를 수직으로 내리는 그림을 떠올릴 수 있다. 그러나 무한 차원에서는 그림만으로 존재를 증명할 수 없다. Infimum이 있다는 것과 그 값을 실제 원소가 달성한다는 것은 다른 명제이다. 여기서는 minimizing sequence를 만들고 그것이 Cauchy임을 보여 존재를 얻는다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

<span id="l22:projection-proof"></span>

$$f\in S$$이면 $$g_0=f$$로 끝난다. 그렇지 않으면

$$
d=\inf_{g\in S}\|f-g\|>0.
$$

$$d=0$$이면 $$S$$의 점들이 $$f$$에 수렴하므로 closedness에 의해 $$f\in S$$가 되어 모순이다. Infimum의 정의로 $$g_n\in S$$를 골라 $$\|f-g_n\|\to d$$가 되게 한다. 문제는 이 수열의 수렴이다. 무한 차원에서 bounded sequence가 수렴하는 부분수열을 갖는다고 가정할 수 없으므로 직접 Cauchy임을 증명한다.

Inner product를 전개하면 parallelogram law

$$
\|A+B\|^2+\|A-B\|^2=2\|A\|^2+2\|B\|^2
$$

를 얻는다. $$A=f-g_n$$, $$B=f-g_m$$을 넣고 $$S$$가 subspace이므로 $$(g_n+g_m)/2\in S$$라는 사실을 사용하면

$$
\begin{align*}
\|g_n-g_m\|^2
&=2\|f-g_n\|^2+2\|f-g_m\|^2-\|2f-g_n-g_m\|^2\\
&\le2\|f-g_n\|^2+2\|f-g_m\|^2-4d^2\longrightarrow0.
\end{align*}
$$

$$H$$의 completeness로 $$g_n\to g_0\in H$$이고, $$S$$의 closedness로 $$g_0\in S$$이다. Norm의 연속성으로 $$\|f-g_0\|=d$$이다. Completeness와 closedness가 서로 다른 지점에서 쓰였음을 구별하자.

이제 최소점의 orthogonality를 보자. 임의의 $$g\in S$$와 실수 $$t$$에 대해 $$g_0-tg\in S$$이므로

$$
0\le\|f-g_0+tg\|^2-\|f-g_0\|^2
=t^2\|g\|^2+2t\operatorname{Re}(f-g_0,g).
$$

이 부등식은 양수와 음수의 $$t$$ 모두에 성립한다. 만약 실수부가 0이 아니면 반대 부호의 충분히 작은 $$t$$를 택할 때 일차항이 음수가 되어 이차항보다 우세하므로 모순이다. 따라서 실수부는 0이다. $$g$$ 대신 $$ig\in S$$를 넣으면 허수부도 0이므로 $$(f-g_0,g)=0$$이다.

마지막으로 다른 최소점 $$\widetilde g_0$$가 있으면 $$g_0-\widetilde g_0\in S$$이고 $$f-g_0\perp(g_0-\widetilde g_0)$$이다. Pythagoras로

$$
\|f-\widetilde g_0\|^2=\|f-g_0\|^2+\|g_0-\widetilde g_0\|^2.
$$

처음 두 norm은 모두 $$d$$이므로 마지막 항은 0이다. 따라서 최소점은 유일하다.

</div>

이 최소점으로 보내는 사상이 orthogonal projection이다. 다음에는 이 사상을 사용해 $$H$$를 두 closed subspace의 direct sum으로 나누고, linear operator의 성질을 연구한다.

**Orthogonal complement와 direct sum**

<span id="l23:orthogonal-complement"></span>

Closed subspace $$S$$에 가장 가까운 점을 찾았으므로, 이제 각 벡터를 $$S$$ 방향의 성분과 나머지 성분으로 나눌 수 있다.

<div class="real-analysis-statement" markdown="1">

**Definition (Orthogonal complement).**

$$S\le H$$에 대해

$$
S^\perp=\{h\in H:(h,g)=0\text{ for every }g\in S\}
$$

를 $$S$$의 **orthogonal complement**라 한다.

</div>

Inner product의 선형성으로 $$S^\perp$$는 subspace이다. $$h\in S\cap S^\perp$$이면 $$(h,h)=0$$이므로 $$h=0$$이다. 또한 $$h_n\in S^\perp$$이고 $$h_n\to h$$이면 각 $$g\in S$$에 대해

$$
|(h,g)|=|(h-h_n,g)|\le\|h-h_n\|\|g\|\longrightarrow0.
$$

따라서 $$S^\perp$$는 closed이다. 이 결론에는 $$S$$ 자체의 closedness가 필요하지 않다.

<div class="real-analysis-statement" markdown="1">

**Proposition 4.2.**

$$S$$가 closed subspace이면 $$H=S\oplus S^\perp$$이다. 즉, 모든 $$f\in H$$는 유일하게 $$f=g+h$$, $$g\in S$$, $$h\in S^\perp$$로 표현된다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Lemma 4.1의 최소점 $$g_0$$를 택하면 $$f=g_0+(f-g_0)$$이고 $$f-g_0\in S^\perp$$이다. 두 표현 $$g_1+h_1=g_2+h_2$$가 있으면

$$
g_1-g_2=h_2-h_1\in S\cap S^\perp=\{0\}
$$

이므로 각 성분이 같다.

</div>

$$P_Sf=g_0$$를 **orthogonal projection**이라 한다. 분해의 유일성으로 $$P_S$$는 선형이고, $$S$$ 위에서는 identity, $$S^\perp$$ 위에서는 0이다. 또

$$
\|f\|^2=\|P_Sf\|^2+\|f-P_Sf\|^2
$$

이므로 $$\|P_Sf\|\le\|f\|$$이다. 이 부등식은 이후 projection을 사용한 근사 오차를 제어한다.

**Fourier projection과 Cauchy integral**

<span id="l23:projection-examples"></span>

$$L^2[-\pi,\pi]$$에 정규화된 inner product를 사용하면

$$
S_Nf=\sum_{|n|\le N}a_ne^{in\theta}
$$

는 $$\operatorname{span}\{e^{-iN\theta},\ldots,e^{iN\theta}\}$$로의 orthogonal projection이다. Fourier 부분합은 주어진 유한 주파수 공간 안에서 원래 함수에 가장 가까운 함수라는 기하적 의미를 갖는다.

이번에는 음의 Fourier coefficients가 모두 0인 함수들의 closed subspace $$S$$를 생각하자. 각 coefficient는 $$L^2$$에서 연속인 functional이므로 이러한 조건은 극한에서 보존된다. $$S$$는 $$H^2(\mathbb D)$$의 boundary values와 동일시된다. 실제로 $$\sum_{n\ge0}\vert a_n\vert ^2<\infty$$이면

$$
F(z)=\sum_{n=0}^\infty a_nz^n\quad(|z|<1)
$$

가 compact subset에서 수렴하고 holomorphic이며, Parseval로 $$H^2$$ bound를 갖는다. 그 radial boundary value가 원래의 $$S$$ 원소이다.

$$f\in L^2$$의 projection의 원판 안 표현을 $$P(f)(z)$$로 쓰면 음이 아닌 계수만 남기므로

$$
\begin{align*}
P(f)(z)&=\sum_{n\ge0}a_nz^n
=\frac1{2\pi}\int_{-\pi}^{\pi}f(e^{i\theta})\sum_{n\ge0}(ze^{-i\theta})^n\,d\theta\\
&=\frac1{2\pi}\int_{-\pi}^{\pi}\frac{f(e^{i\theta})}{1-ze^{-i\theta}}\,d\theta
=\frac1{2\pi i}\int_\gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta.
\end{align*}
$$

여기서 $$\gamma$$는 양의 방향으로 도는 unit circle이고 $$\zeta=e^{i\theta}$$, $$d\zeta=ie^{i\theta}d\theta$$이다. $$f(e^{i\theta})$$는 구간의 함수를 원 위의 함수로 보는 표기이다. 합과 적분의 교환은 고정한 $$\vert z\vert <1$$에서 $$\vert f(e^{i\theta})\vert /(1-\vert z\vert )$$로 지배되므로 DCT로 정당화된다. 이 적분이 **Cauchy integral**이다. 적분식 자체는 $$L^1$$에서도 정의되지만, orthogonal projection이라는 해석은 지금의 $$L^2$$ 구조에서 한다. 관련 연습문제는 Exercises 10, 11, 12이다.

{% endraw %}

<!-- prettier-ignore-end -->

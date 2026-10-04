---
layout: post
title: "Real Analysis 13: Hilbert Spaces—Orthogonality and Unitary Mappings"
date: 2026-06-17 12:00:00 +0900
description: "Hilbert 공간의 기하, 직교성, 정규직교계, unitary 사상과 pre-Hilbert 공간을 다룬다."
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

### 4.2. Hilbert spaces

<span id="l20:definition"></span>

$$L^2$$에서 확인한 성질은 inner product, completeness, separability의 세 가지였다. 이번에는 구체적인 함수의 모양을 잊고 이 구조만 남긴다. 그러면 유한 차원 벡터, 함수, 무한 수열을 한 이론으로 다룰 수 있다.

<div class="real-analysis-statement" markdown="1">

**Definition (Hilbert space).**

이 강의에서는 inner product가 유도하는 norm에 대해 complete이고 separable인 inner product space를 **Hilbert space**라 한다. 즉, 모든 Cauchy 수열이 공간 안에서 수렴하고 countable dense subset이 존재한다.

</div>

일반적인 정의에서는 separability를 요구하지 않기도 한다. 여기서는 이 조건을 포함하므로 이후 “모든 Hilbert space”라는 표현에도 이 약속이 적용된다. 교재 Chapter 4의 Problem 2는 non-separable한 예를 다룬다. 실수 공간도 생각할 수 있지만, 따로 언급하지 않으면 스칼라체는 $$\mathbb C$$이고 inner product는 첫 번째 인자에 선형이다.

**세 가지 예**

<span id="l20:examples"></span>

<div class="real-analysis-statement" markdown="1">

**Example 1: $$L^2(E)$$.**

$$E\subset\mathbb R^d$$가 measurable이고 $$m(E)>0$$이면

$$
L^2(E)=\{f:E\to\mathbb C:\ f\text{ measurable},\ \int_E|f|^2<\infty\}\big/\!\sim,
\quad(f,g)=\int_E f\overline g
$$

는 Hilbert space이다. $$\|f\|_{L^2(E)}=(\int_E\vert f\vert ^2)^{1/2}$$이다.

</div>

적분하는 영역만 $$\mathbb R^d$$에서 $$E$$로 바뀌었다. $$E$$ 밖에서 0으로 연장하면 $$L^2(E)$$를 $$L^2(\mathbb R^d)$$의 부분공간으로 볼 수 있다. $$L^2$$ 극한도 $$E$$ 밖에서 a.e. 0이므로 이 부분공간은 closed이고 complete이다. 앞의 근사 재료를 $$E$$에 제한하면 separability도 얻는다. $$m(E)=0$$이면 모든 함수가 같은 영벡터가 되므로 여기서는 비자명한 경우를 보기 위해 양의 measure를 가정했다.

<div class="real-analysis-statement" markdown="1">

**Example 2: 유한 차원.**

$$\mathbb C^N$$에는

$$
(a,b)=\sum_{k=1}^Na_k\overline{b_k}
$$

를, $$\mathbb R^N$$에는 conjugate를 뺀 식을 사용한다. 이들은 Hilbert space이다.

</div>

Completeness는 각 좌표의 Cauchy 수열이 수렴한다는 사실에서 나오고, 유리수 좌표 또는 $$\mathbb Q+i\mathbb Q$$ 좌표의 벡터들은 countable dense subset을 이룬다. 이 예는 선형대수에서 이미 다룬 기하이다. 새로운 어려움은 차원이 무한할 때 나타난다.

<div class="real-analysis-statement" markdown="1">

**Example 3: $$\ell^2$$.**

$$
\ell^2(\mathbb Z)=\left\{a=(a_n)_{n\in\mathbb Z}:a_n\in\mathbb C,\ \sum_{n\in\mathbb Z}|a_n|^2<\infty\right\},
\quad(a,b)=\sum_{n\in\mathbb Z}a_n\overline{b_n}
$$

도 Hilbert space이다. 지표를 $$\mathbb N$$으로 바꾼 $$\ell^2(\mathbb N)$$도 마찬가지이다.

</div>

여기서는 적분 대신 급수를 사용한다. 유한합에 대한 Cauchy--Schwarz를 적용하고 극한을 취하면 inner product 급수가 절대수렴한다. Completeness는 앞의 빠른 부분수열과 summable한 차이들의 논리를 수열의 좌표에 적용하여 확인할 수 있다. 유한 개 좌표만 0이 아니고 그 좌표가 $$\mathbb Q+i\mathbb Q$$에 속하는 수열들을 모으면 countable dense subset을 얻는다. 먼저 꼬리를 자르고 남은 유한 좌표를 유리수로 근사하면 된다. 자세한 확인은 Exercise 4와 연결된다.

$$L^2$$는 함수의 공간이고 $$\ell^2$$는 수열의 공간이라 겉모습이 다르다. 하지만 좌표를 적절히 선택하면 같은 Hilbert-space 구조를 갖는다. 이를 증명하려면 먼저 무한 차원에서 basis가 무엇인지 정해야 한다.

#### 4.2.1. Orthogonality

<span id="l20:orthogonality"></span>

<div class="real-analysis-statement" markdown="1">

**Definition.**

$$f,g\in H$$에 대해 $$(f,g)=0$$이면 **orthogonal**이라 하고 $$f\perp g$$로 쓴다. 집합 $$\{e_k\}$$가 **orthonormal**이라는 것은

$$
(e_i,e_j)=\delta_{ij}=\begin{cases}1&i=j,\\0&i\ne j\end{cases}
$$

라는 뜻이다.

</div>

여기서 $$\delta_{ij}$$는 Kronecker delta이다. 지표가 다르면 orthogonal이고, 같으면 $$\|e_i\|^2=1$$이므로 각 벡터의 길이가 1이라는 두 조건을 함께 표현한다. 공간의 원소를 $$f$$라 써도 그것이 항상 함수인 것은 아니다. 추상 Hilbert space에서는 그저 하나의 벡터이다.

**Pythagoras에서 무한급수로**

<span id="l20:pythagoras"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.1.**

$$f\perp g$$이면 $$\|f+g\|^2=\|f\|^2+\|g\|^2$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$
\|f+g\|^2=\|f\|^2+(f,g)+(g,f)+\|g\|^2.
$$

$$(f,g)=0$$이면 $$(g,f)=\overline{(f,g)}=0$$이므로 두 교차항이 사라진다.

</div>

이 증명은 차원을 사용하지 않는다. 따라서 유한 차원의 Pythagorean theorem이 그대로 성립한다.

<div class="real-analysis-statement" markdown="1">

**Proposition 2.2.**

$$\{e_k\}$$가 orthonormal이면 모든 유한합에 대해

$$
\left\|\sum_{k=1}^Na_ke_k\right\|^2=\sum_{k=1}^N|a_k|^2
$$

이다.

</div>

$$a_ke_k$$들은 서로 orthogonal이므로 앞의 명제를 유한 번 적용하면 된다. 자연스럽게 다음 질문이 생긴다. 합이 무한해져도 이 등식이 성립하는가? 이때는 먼저 급수의 수렴과 그 극한이 표현하려던 벡터인지부터 확인해야 한다.

**Basis는 유한합의 집합과 그 closure를 구별한다**

<span id="l20:basis"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Orthonormal basis).**

Orthonormal set $$\{e_k\}$$에 대해 $$\operatorname{span}\{e_k\}$$가 $$H$$에서 dense이면 이를 $$H$$의 **orthonormal basis**라 한다.

</div>

Span은 유한 linear combination의 집합이다. 그 정의에 무한합을 넣지 않는다. Density는 임의의 $$f\in H$$를 그런 유한합들로 norm의 의미에서 얼마든지 잘 근사할 수 있다는 뜻이다. 유한 차원에서는 span 자체가 $$H$$이지만 무한 차원에서는 closure를 취해야 한다. 예를 들어 $$\ell^2(\mathbb N)$$에서 표준 단위벡터의 span은 유한 개 좌표만 0이 아닌 수열들이고, 그 closure가 전체 $$\ell^2$$이다.

**Orthonormal basis의 네 가지 표현**

<span id="l20:criteria"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 2.3.**

$$\{e_k\}$$를 $$H$$의 orthonormal set이라 하자. 다음 조건들은 서로 동치이다.

<ol type="i" markdown="1">

<li markdown="1">

$$\{e_k\}$$는 orthonormal basis이다.

</li>

<li markdown="1">

$$(f,e_j)=0$$이 모든 $$j$$에 대해 성립하면 $$f=0$$이다.

</li>

<li markdown="1">

모든 $$f\in H$$에 대해 $$a_k=(f,e_k)$$와 $$S_Nf=\sum_{k=1}^Na_ke_k$$로 놓으면 $$S_Nf\to f$$ in $$H$$이다.

</li>

<li markdown="1">

모든 $$f\in H$$에 대해 Parseval's identity

$$
\|f\|^2=\sum_k|(f,e_k)|^2
$$

가 성립한다.

</li>

</ol>

유한한 orthonormal set이면 합은 그 원소 수까지 취한다.

</div>

지금 가정한 것은 orthonormality뿐이다. 정리는 주어진 방향들이 공간을 모두 설명하는지, 놓친 방향이 있는지를 판별한다. 특히 (ii)는 모든 좌표가 0인 벡터가 영벡터뿐이라는 뜻이다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

<span id="l20:criteria-proof"></span>

$$(i)\Rightarrow(ii)$$: $$f$$가 모든 $$e_j$$에 orthogonal이라 하자. Density로 $$g_n\in\operatorname{span}\{e_k\}$$를 골라 $$g_n\to f$$로 만들 수 있다. 각 $$g_n$$은 유한합이므로 $$(f,g_n)=0$$이다. 따라서

$$
\|f\|^2=(f,f-g_n)\le |(f,f-g_n)|\le\|f\|\|f-g_n\|\longrightarrow0.
$$

왼쪽은 $$n$$에 무관하므로 $$f=0$$이다.

$$(ii)\Rightarrow(iii)$$: 가장 중요한 부분이다. 먼저 $$S_Nf$$가 어떤 벡터로 수렴함을 보이고, 나중에 그 극한을 $$f$$로 식별한다. $$a_k=(f,e_k)$$로 놓으면

$$
(f-S_Nf,e_j)=0\quad(1\le j\le N).
$$

따라서 $$f-S_Nf$$는 $$S_Nf$$와도 orthogonal이다. 직접 계산해도

$$
(f,S_Nf)=\sum_{k=1}^N\overline{a_k}(f,e_k)=\sum_{k=1}^N|a_k|^2=\|S_Nf\|^2
$$

를 얻는다. 두 번째 인자에서 계수를 꺼낼 때 conjugate가 붙는다는 점에 주의하자. Pythagoras에 의해
<span id="l20:energy"></span>

$$
\begin{equation}\tag{1}
\|f\|^2=\|f-S_Nf\|^2+\sum_{k=1}^N|a_k|^2.
\end{equation}
$$

첫 항을 버리면 Bessel's inequality

$$
\sum_{k=1}^N|a_k|^2\le\|f\|^2
$$

가 나온다. 음이 아닌 항들의 부분합이 $$N$$에 무관하게 bounded이므로 $$\sum\vert a_k\vert ^2$$가 수렴한다. $$N>M$$이면

$$
\|S_Nf-S_Mf\|^2=\sum_{k=M+1}^N|a_k|^2\longrightarrow0
$$

이므로 $$\{S_Nf\}$$는 Cauchy이다. 여기서 $$H$$의 completeness를 사용하여 어떤 $$g\in H$$로 수렴함을 얻는다.

하지만 아직 $$g=f$$인지는 모른다. 하나의 $$j$$를 고정하면 $$N\ge j$$에서 $$(f-S_Nf,e_j)=0$$이다. Cauchy--Schwarz로 inner product의 norm 연속성을 확인한 뒤 $$N\to\infty$$를 보내면 $$(f-g,e_j)=0$$이다. 이것이 모든 $$j$$에 성립하므로 바로 이 지점에서 (ii)를 적용하여 $$f-g=0$$을 얻는다.

$$(iii)\Rightarrow(iv)$$: 식 [(1)](/blog/2026/real-analysis-hilbert-spaces/#l20:energy)에서 $$N\to\infty$$를 보낸다. 첫 항이 0으로 가므로 Parseval's identity가 나온다. 이는 무한 개의 orthogonal한 성분에 대한 Pythagoras이다.

$$(iv)\Rightarrow(i)$$: 같은 식에서 이번에는 Parseval's identity를 먼저 안다고 하자. 오른쪽 유한합이 $$\|f\|^2$$로 가므로 $$\|f-S_Nf\|^2\to0$$이다. 각 $$S_Nf$$는 유한 span 안에 있으므로 모든 $$f$$가 이 span의 극한으로 표현된다. 따라서 span은 dense이다.

</div>

**Basis를 실제로 만드는 방법**

<span id="l20:existence"></span>

앞의 정리는 basis가 주어졌을 때의 성질을 설명하지만 존재를 보장하지는 않는다. 이제 separability가 그 존재를 만들어 준다.

<div class="real-analysis-statement" markdown="1">

**Definition (Linear independence).**

무한 집합이 linearly independent라는 것은 그 모든 유한 부분집합이 linearly independent라는 뜻이다. 즉, 서로 다른 유한 개 원소에 대해 $$\sum_{j=1}^Na_jf_j=0$$이면 모든 $$a_j=0$$이어야 한다.

</div>

정의에 임의의 무한급수 관계를 넣지 않는다. 무한급수에는 어떤 의미의 수렴인지가 추가로 필요하기 때문이다.

<div class="real-analysis-statement" markdown="1">

**Theorem 2.4.**

모든 Hilbert space는 orthonormal basis를 갖는다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$H=\{0\}$$이면 빈 집합이 basis이다. 그렇지 않으면 separability에 의해 countable dense family를 택할 수 있다. 이 목록을 처음부터 검사하여 0은 버리고, 이미 남긴 원소들의 유한 span에 속하는 원소도 버린다. 첫 번째 남은 원소가 $$f_1$$이고, 그 방향과 독립인 다음 원소가 $$f_2$$가 된다. 이 과정을 반복하면 linearly independent한 목록 $$\{f_k\}$$가 남는다. 버린 원소는 앞서 남긴 원소들의 span에 있으므로 dense span은 보존된다.

남은 목록이 유한하면 유한 차원의 Gram--Schmidt를 적용한다. 얻은 orthonormal set의 span은 finite-dimensional이므로 closed이고 동시에 dense여서 $$H$$ 전체이다. 이 경우가 finite-dimensional Hilbert space이다.

목록이 무한하면 같은 과정을 귀납적으로 수행한다. 우선

$$
e_1=f_1/\|f_1\|
$$

로 놓는다. $$e_1,\ldots,e_k$$가 orthonormal이고 그 span이 $$f_1,\ldots,f_k$$의 span과 같다고 가정하자. 다음 방향에서 이미 사용한 성분을 뺀다.

$$
u_{k+1}=f_{k+1}-\sum_{j=1}^k(f_{k+1},e_j)e_j.
$$

각 $$j\le k$$에 대해 $$(u_{k+1},e_j)=0$$이다. 만약 $$u_{k+1}=0$$이면 $$f_{k+1}$$이 앞의 원소들의 span에 속하여 linear independence에 모순이다. 따라서

$$
e_{k+1}=u_{k+1}/\|u_{k+1}\|
$$

로 정규화할 수 있다. 새 목록은 orthonormal이고

$$
\operatorname{span}\{e_1,\ldots,e_{k+1}\}
=\operatorname{span}\{f_1,\ldots,f_{k+1}\}
$$

이다. 귀납법으로 모든 단계가 구성된다. 모든 유한 span을 합치고 closure를 취하면 $$\overline{\operatorname{span}\{e_k\}}=H$$이므로 이 목록이 orthonormal basis이다.

</div>

유한 차원의 Gram--Schmidt에서 계산법 자체는 바뀌지 않았다. 달라진 점은 countable dense family에서 시작해 유한 단계의 결과를 끝없이 이어 간다는 것이다.

**다음 단계: 좌표를 보존하는 사상**

<span id="l20:transition"></span>

이제 모든 벡터를 orthonormal basis의 좌표로 나타낼 수 있다. 다음에는 한 공간의 basis를 다른 공간의 basis로 보내는 사상을 만들고, 그 사상이 선형성뿐 아니라 길이와 inner product까지 보존함을 확인한다. 이렇게 얻는 unitary mapping이 Hilbert space의 분류를 연결한다.

#### 4.2.2. Unitary mappings

<span id="l21:unitary"></span>

모든 Hilbert space에 orthonormal basis가 존재한다는 사실을 얻었다. 이제 두 공간이 “같다”는 말을 정확하게 만들자. 서로 다른 집합을 같은 구조로 보려면 그 구조를 보존하는 사상이 필요하다. 선형대수의 isomorphism이나 topology의 homeomorphism처럼, Hilbert space에서도 벡터 연산과 기하를 함께 보존하는 사상을 사용한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Unitary mapping).**

같은 스칼라체 위의 Hilbert space 사이의 사상 $$U:H\to H'$$가 다음을 만족하면 **unitary**라 한다.

<ol type="i" markdown="1">

<li markdown="1">

$$U(\alpha f+\beta g)=\alpha Uf+\beta Ug$$이다.

</li>

<li markdown="1">

$$U$$는 bijection이다.

</li>

<li markdown="1">

$$\|Uf\|_{H'}=\|f\|_H$$이다.

</li>

</ol>

이런 사상이 존재하면 두 공간을 **unitarily equivalent** 또는 **unitarily isomorphic**이라 한다.

</div>

Norm을 보존하므로 $$Uf=0$$이면 $$f=0$$이다. 즉, injectivity는 다른 조건에서도 따라오지만, 공간 전체를 대응시키려면 surjectivity가 반드시 필요하다. 또한 $$U^{-1}$$은 선형이고 norm을 보존하므로 역시 unitary이다.

**길이를 보존하면 inner product도 보존한다**

<span id="l21:polarization"></span>

정의에는 inner product 대신 norm만 적었다. 이것으로 충분한 이유는 polarization identity에 있다. 첫 번째 인자에 선형인 복소 inner product에서는

$$
(f,g)=\frac14\left(\|f+g\|^2-\|f-g\|^2
+i\bigl(\|f+ig\|^2-\|f-ig\|^2\bigr)\right).
$$

첫 두 norm의 차는 $$4\operatorname{Re}(f,g)$$이고, 나머지 차는 $$4\operatorname{Im}(f,g)$$이다. 오른쪽을 직접 전개하면 이 부호도 확인할 수 있다. $$U$$의 선형성으로 $$U(f\pm g)=Uf\pm Ug$$, $$U(f\pm ig)=Uf\pm iUg$$이고, 각 norm이 보존되므로

$$
(Uf,Ug)_{H'}=(f,g)_H.
$$

따라서 unitary mapping은 길이뿐 아니라 orthogonality와 inner product 전체를 보존한다. 반대로 inner product를 보존하면 $$f=g$$로 놓아 norm 보존을 얻는다.

**좌표를 그대로 옮기면 얻는 분류**

<span id="l21:classification"></span>

<div class="real-analysis-statement" markdown="1">

**Corollary 2.5.**

같은 스칼라체 위의 두 infinite-dimensional Hilbert space는 unitarily equivalent이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

이 강의의 Hilbert space는 separable하므로 각각 countable orthonormal basis $$\{e_k\}$$, $$\{e'_k\}$$를 갖는다. $$f=\sum_{k\ge1}a_ke_k$$이면

$$
Uf=\sum_{k\ge1}a_ke'_k
$$

로 정의한다. 즉, 좌표는 바꾸지 않고 좌표축만 옮긴다.

먼저 오른쪽이 실제로 수렴하는지 확인해야 한다. Parseval's identity에 의해 $$\sum\vert a_k\vert ^2=\|f\|^2<\infty$$이다. 따라서 오른쪽 부분합의 차의 norm 제곱은 이 수렴급수의 꼬리이고, 부분합은 Cauchy이다. $$H'$$의 completeness로 그 극한이 존재한다. 좌표의 유일성에 의해 $$U$$도 잘 정의된다.

좌표를 더하고 스칼라배하는 방식으로 선형성을 얻는다. $$e'_k$$에서 $$e_k$$로 되돌리는 같은 구성이 역함수이므로 bijection이다. 마지막으로

$$
\|Uf\|_{H'}^2=\sum_{k\ge1}|a_k|^2=\|f\|_H^2
$$

이므로 unitary이다.

</div>

<div class="real-analysis-statement" markdown="1">

**Corollary 2.6.**

같은 스칼라체 위의 Hilbert space들이 unitarily equivalent일 필요충분조건은 dimension이 같은 것이다.

</div>

유한 차원에서는 같은 구성을 유한합으로 하면 된다. 반대로 unitary map은 orthonormal basis를 orthonormal basis로 보내므로 dimension을 보존한다. 따라서 복소수 공간은 유한 차원일 때 $$\mathbb C^N$$, 무한 차원일 때 $$\ell^2(\mathbb N)$$ 또는 $$\ell^2(\mathbb Z)$$와 같은 구조이다. 실수 공간에서는 같은 스칼라체의 실수 수열 공간을 사용한다. 이 결론은 임의의 함수 공간이 집합으로 같다는 말이 아니라, inner product 구조를 보존하는 좌표 표현을 갖는다는 뜻이다.

#### 4.2.3. Pre-Hilbert spaces

<span id="l21:completion"></span>

실제 함수 공간에서는 inner product와 separability는 있지만 completeness가 없는 경우가 나타난다. Fourier series나 partial differential equations를 다룰 때도 이런 공간에서 시작할 수 있다. 이때 필요한 극한들을 덧붙여 Hilbert space를 만든다. 유리수의 Cauchy 수열에서 실수를 구성하는 과정과 같은 생각이다. $$\mathbb Q$$를 이미 $$\mathbb R$$ 안에 넣었다면 closure라고 할 수 있지만, 아직 더 큰 공간을 갖고 있지 않을 때는 completion 자체를 구성해야 한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Pre-Hilbert space).**

이 강의에서는 separable inner product space를 **pre-Hilbert space**라 한다. Completeness는 요구하지 않는다.

</div>

<div class="real-analysis-statement" markdown="1">

**Proposition 2.7.**

Pre-Hilbert space $$H_0$$에 대해 Hilbert space $$H$$와 inner-product-preserving embedding $$j:H_0\to H$$가 존재하며 $$j(H_0)$$는 $$H$$에서 dense이다. $$j(H_0)$$를 $$H_0$$와 동일시하여 $$H_0\subset H$$로 쓴다. 이런 $$H$$를 $$H_0$$의 **completion**이라 한다.

</div>

단지 더 큰 complete 공간을 찾는 것만으로는 충분하지 않다. 무관한 방향을 더 붙여도 그런 공간을 만들 수 있기 때문이다. 원래 공간의 density는 새 공간이 원래 원소들의 극한만으로 채워지게 하는 조건이다. Completion은 $$H_0$$ 위에서의 대응을 고정하면 unitary isomorphism까지 유일하다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

<span id="l21:completion-proof"></span>

$$H_0$$의 모든 Cauchy 수열을 모으고

$$
(f_n)\sim(g_n)\iff\|f_n-g_n\|_0\longrightarrow0
$$

로 정의한다. 두 수열이 같은 극한을 나타내게 하려는 관계이지만, 아직 그 극한이 $$H_0$$에 존재한다고 가정하지 않는다. Triangle inequality로 transitivity가 나오므로 equivalence relation이다. Equivalence class들의 집합을 $$H$$라 하고 항별 덧셈과 스칼라배를 정의한다.

$$F=[(f_n)]$$, $$G=[(g_n)]$$에 대해

$$
(F,G)_H=\lim_{n\to\infty}(f_n,g_n)_0
$$

로 놓는다. 왜 이 극한이 존재하고 대표원에 무관한가? Cauchy 수열들은 bounded이므로 Cauchy--Schwarz에 의해

$$
|(f_n,g_n)_0-(f_m,g_m)_0|
\le\|f_n-f_m\|_0\|g_n\|_0+\|f_m\|_0\|g_n-g_m\|_0\longrightarrow0.
$$

따라서 복소수 극한이 존재한다. 동치인 대표원으로 바꿀 때도 같은 부등식의 각 차이가 0으로 가므로 값은 변하지 않는다. 선형성과 conjugate symmetry는 극한으로 전달된다. $$(F,F)_H=0$$이면 $$\|f_n\|_0\to0$$이므로 $$(f_n)\sim(0)$$이다. 따라서 positive definiteness도 성립한다.

$$f\in H_0$$를 상수 수열 $$(f,f,\ldots)$$의 class로 보내는 $$j$$를 정의한다. 상수 수열끼리의 inner product는 원래 inner product와 같으므로 $$j$$는 injective이고 norm을 보존한다. 이것이 $$H_0\subset H$$라는 표기의 정확한 의미이다. $$F=[(f_n)]$$이면

$$
\|F-j(f_m)\|_H=\lim_{n\to\infty}\|f_n-f_m\|_0\longrightarrow0
\quad(m\to\infty)
$$

이므로 $$j(H_0)$$는 dense이다. $$H_0$$의 countable dense subset은 이 embedding 아래에서도 $$H$$에 dense하므로 separability도 따른다.

남은 핵심은 $$H$$의 completeness이다. $$\{F^k\}$$를 $$H$$의 Cauchy 수열이라 하자. 각 $$F^k$$는 하나의 벡터이지만 그 벡터 자체가 $$H_0$$의 Cauchy 수열 $$\{f_n^k\}_n$$의 class이다. 위 첨자 $$k$$는 공간 $$H$$에서의 수열 지표이고 아래 첨자 $$n$$은 그 대표 수열의 지표이다. 두 지표를 구별해야 한다.

각 $$k$$에 대해 충분히 뒤의 원소 $$u_k=f_{N(k)}^k$$를 골라

$$
\|j(u_k)-F^k\|_H<1/k
$$

로 만든다. 이는 각 행 $$\{f_n^k\}_n$$의 Cauchy 성질과 앞서 증명한 density 식으로 가능하다. 그러면

$$
\|u_k-u_l\|_0\le1/k+\|F^k-F^l\|_H+1/l
$$

이므로 $$\{u_k\}$$는 $$H_0$$의 Cauchy 수열이다. 따라서 $$F=[(u_k)]\in H$$를 정의할 수 있고 $$j(u_k)\to F$$이다. 다시

$$
\|F^k-F\|_H\le\|F^k-j(u_k)\|_H+\|j(u_k)-F\|_H\longrightarrow0
$$

을 얻는다. 각 대표 수열에서 하나씩 고른 대각선 수열이 필요한 극한을 만든 것이다.

두 completion이 주어지면 $$H_0$$의 수열로 접근한 극한을 다른 completion의 같은 수열의 극한으로 보낸다. Norm 보존으로 대표 수열의 선택에 무관하고, density로 전 공간에 정의되며 역방향 구성도 가능하다. 이것이 유일성의 의미이다.

</div>

이 절과 관련된 연습문제는 Chapter 4의 Exercises 4, 7, 14이다.

{% endraw %}

<!-- prettier-ignore-end -->

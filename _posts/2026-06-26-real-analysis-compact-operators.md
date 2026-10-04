---
layout: post
title: "Real Analysis 17: Compact Operators"
date: 2026-06-26 12:00:00 +0900
description: "콤팩트 연산자와 대칭 콤팩트 연산자의 스펙트럼 정리를 다룬다."
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

### 4.6. Compact operators

<span id="l23:compact"></span>

유한 차원에서는 closed bounded ball이 compact이다. 무한 차원에서는 이 성질이 깨진다. Infinite orthonormal sequence $$\{e_n\}$$를 택하면 모두 closed unit ball 안에 있지만

$$
\|e_n-e_m\|^2=\|e_n\|^2+\|e_m\|^2=2\quad(n\ne m).
$$

서로 다른 두 항 사이의 거리가 항상 $$\sqrt2$$이므로 어느 부분수열도 Cauchy가 될 수 없다. 따라서 closed unit ball은 compact가 아니다. 반지름이 양수인 다른 ball도 rescaling으로 같다.

여기서 집합 $$X\subset H$$가 compact하다는 것은 $$X$$의 모든 수열이 $$X$$의 점으로 수렴하는 부분수열을 갖는다는 뜻이다. 무한 차원 전체에서는 이 성질을 기대할 수 없지만 어떤 연산자는 입력을 충분히 압축하여 출력에 이 성질을 만들 수 있다.

<div class="real-analysis-statement" markdown="1">

**Definition (Compact operator).**

$$B=\{f\in H:\|f\|\le1\}$$라 하자. Linear operator $$T:H\to H$$에 대해 $$\overline{T(B)}$$가 compact이면 $$T$$를 **compact**라 한다.

</div>

정의에 closure가 들어간다. 출력의 극한이 반드시 같은 ball 안의 어떤 입력의 상이라고 미리 가정하지 않는다. 동치인 실용적 표현은 다음과 같다.

$$
\text{모든 bounded 수열 }\{f_n\}\subset H\text{에서 }\{Tf_{n_k}\}\text{가 수렴하는 부분수열을 고를 수 있다.}
$$

Unit ball 대신 임의의 bounded ball을 사용해도 선형성으로 같은 조건이다. Compact한 closure는 bounded이므로 compact operator는 bounded이고 따라서 continuous이다. Identity는 무한 차원에서 compact가 아니지만, bounded한 finite-rank operator는 상이 유한 차원 공간에 들어가므로 compact이다. 여기서 finite rank는 range가 finite-dimensional이라는 뜻이다.

**Compact operator의 네 가지 성질**

<span id="l23:compact-properties"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 6.1.**

$$T$$가 bounded linear operator이면 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

$$S$$가 compact이면 $$ST$$와 $$TS$$도 compact이다.

</li>

<li markdown="1">

Compact operator $$T_n$$이 $$\|T_n-T\|\to0$$을 만족하면 $$T$$도 compact이다.

</li>

<li markdown="1">

$$T$$가 compact이면 finite-rank bounded operators로 operator norm에서 근사할 수 있다.

</li>

<li markdown="1">

$$T$$가 compact일 필요충분조건은 $$T^*$$가 compact인 것이다.

</li>

</ol>

</div>

여기서 수렴은 각 벡터별 수렴보다 강한 operator-norm 수렴이다. 입력의 unit ball 전체에 대한 오차를 동시에 작게 만들어야 한다.

(i)를 보자. Bounded sequence $$f_n$$에 대해 $$Tf_n$$도 bounded이므로 $$S$$의 compactness로 $$STf_n$$에서 수렴하는 부분수열을 뽑는다. 반면 $$TS$$의 경우에는 먼저 $$Sf_{n_k}$$를 수렴시키고, $$T$$의 연속성으로 $$TSf_{n_k}$$를 수렴시킨다. 두 composition에서 가정이 쓰이는 순서가 다르다.

**Operator-norm 극한의 compactness**

<span id="l23:compact-limit"></span>

(ii)를 증명하자. 임의의 bounded sequence $$\{f_k\}$$를 고정한다. $$T_1$$의 compactness로 $$T_1f_{1,k}$$가 수렴하는 부분수열을 뽑고, 그 부분수열에서 다시 $$T_2f_{2,k}$$가 수렴하도록 뽑는다. 이를 반복한 뒤 대각선 $$g_k=f_{k,k}$$를 택한다. 고정한 $$m$$에 대해 $$k\ge m$$인 대각선 꼬리는 $$m$$번째 부분수열에 포함되므로 $$T_mg_k$$는 수렴한다.

하지만 원하는 것은 $$T_m$$이 아닌 $$T$$에서의 수렴이다. $$\|g_k\|\le C$$라 하고

$$
\begin{align*}
\|Tg_k-Tg_l\|
&\le\|(T-T_m)g_k\|+\|T_mg_k-T_mg_l\|+\|(T_m-T)g_l\|\\
&\le2C\|T-T_m\|+\|T_mg_k-T_mg_l\|
\end{align*}
$$

로 나눈다. 먼저 $$m$$을 충분히 크게 고정하여 첫째와 셋째 항을 각각 $$\varepsilon/3$$보다 작게 한다. 이 선택은 $$k,l$$에 무관하다. 그다음 고정한 $$m$$에서 $$k,l$$을 크게 하여 가운데 항을 $$\varepsilon/3$$보다 작게 한다. 따라서 $$Tg_k$$는 Cauchy이고 completeness로 수렴한다. 대각선 선택과 오차 추정에서 지표를 고정하는 순서가 핵심이다.

**Compactness를 유한 차원 근사로 바꾸기**

<span id="l23:finite-rank"></span>

(iii)는 앞 성질의 반대 방향을 더 구체적으로 설명한다. Orthonormal basis $$\{e_k\}$$를 고정하고 $$P_n$$을 처음 $$n$$개 방향으로의 projection, $$Q_n=I-P_n$$을 나머지 방향의 closed span으로의 projection이라 하자. 유한 차원이라면 충분히 큰 $$n$$에서 $$P_n=I$$로 놓는다. 모든 고정한 $$g\in H$$에 대해

$$
\|Q_ng\|^2=\sum_{k>n}|(g,e_k)|^2\searrow0.
$$

후보 근사는 $$P_nT$$이다. 이는 finite rank이고 $$T-P_nT=Q_nT$$이므로 $$\|Q_nT\|\to0$$만 보이면 된다.

점별로 $$Q_ng\to0$$이라고 해서 곧바로 operator norm이 0으로 간다고 할 수는 없다. 여기에서 $$T$$의 compactness를 사용한다. 반대로 $$\|Q_nT\|$$가 0으로 가지 않는다고 하자. 이 norm들은 감소하므로 어떤 $$c>0$$에 대해 모든 $$n$$에서 $$\|Q_nT\|>2c$$라 할 수 있다. Supremum의 정의로 unit vector $$f_n$$을 골라

$$
\|Q_nTf_n\|>c
$$

로 만든다. Supremum이 한 벡터에서 달성된다고 가정하지 않기 위해 여유 있는 상수 $$c$$를 사용한 것이다.

$$T$$의 compactness로 부분수열을 택하여 $$Tf_{n_k}\to g$$라 하자. 극한 $$g$$가 반드시 $$Tf$$ 꼴이라고 말할 필요는 없다. Projection은 norm을 늘리지 않으므로

$$
\|Q_{n_k}g\|\ge\|Q_{n_k}Tf_{n_k}\|-\|Q_{n_k}(Tf_{n_k}-g)\|
>c-\|Tf_{n_k}-g\|>c/2
$$

가 충분히 큰 $$k$$에서 성립한다. 하지만 고정한 $$g$$에 대해서는 $$Q_{n_k}g\to0$$이다. 모순이므로 $$\|Q_nT\|\to0$$, 곧 $$\|P_nT-T\|\to0$$이다.

**Adjoint의 compactness**

<span id="l23:compact-adjoint"></span>

$$P_n=P_n^*$$이고 adjoint가 operator norm을 보존하므로

$$
\|T^*P_n-T^*\|=\|(P_nT-T)^*\|=\|P_nT-T\|\longrightarrow0.
$$

$$T^*P_n$$은 finite rank이므로 compact이고, (ii)에 의해 $$T^*$$도 compact이다. 반대로 $$T^*$$가 compact이면 같은 결과를 다시 적용하고 $$(T^*)^*=T$$를 사용한다. 따라서 네 번째 성질은 앞의 두 근사 성질을 결합한 결과이다.

**Hilbert--Schmidt operator의 compactness**

<span id="l23:hilbert-schmidt-compact"></span>

앞서 정의한 Hilbert--Schmidt operator의 compactness는 kernel을 유한합으로 근사하여 증명한다. $$L^2(\mathbb R^d)$$의 orthonormal basis $$\{\varphi_k\}$$를 택하면

$$
\{\varphi_k(x)\overline{\varphi_l(y)}:k,l\ge1\}
$$

는 product space의 orthonormal basis이다. Orthogonality는 적분을 두 변수로 나누면 확인된다. Completeness도 확인해 보자. $$F$$가 이 모든 곱과 orthogonal이면

$$
h_l(x)=\int F(x,y)\varphi_l(y)\,dy
$$

는 Cauchy--Schwarz로 $$L^2$$에 속하고 모든 $$\varphi_k$$와 orthogonal이므로 a.e. 0이다. $$l$$이 countable하므로 하나의 measure zero인 집합을 제외하면 모든 $$l$$에서 동시에 $$h_l(x)=0$$이다. 그러면 그 $$x$$에서 $$F(x,\cdot)$$가 $$\{\overline{\varphi_l}\}$$ 모두와 orthogonal이므로 a.e. 0이다. 다시 Tonelli로 $$F=0$$ a.e.를 얻는다. 이 product-basis 논리는 Exercise 7과 연결된다.

따라서

$$
K=\sum_{k,l\ge1}a_{kl}\varphi_k(x)\overline{\varphi_l(y)}
\quad\text{in }L^2(\mathbb R^{2d}),\qquad \sum_{k,l}|a_{kl}|^2<\infty.
$$

$$1\le k,l\le n$$만 남긴 kernel을 $$K_n$$이라 하고 대응하는 연산자를 $$T_n$$이라 하면

$$
T_nf=\sum_{k,l=1}^na_{kl}(f,\varphi_l)\varphi_k.
$$

Range가 $$\operatorname{span}\{\varphi_1,\ldots,\varphi_n\}$$에 들어가므로 finite rank이다. 이 식은 일반적으로 orthogonal projection이 아니라 유한 차원 range를 갖는 연산자이다.

Parseval's identity와 앞의 operator estimate에 의해

$$
\|K-K_n\|_2^2=\sum_{k>n\text{ 또는 }l>n}|a_{kl}|^2\longrightarrow0,
\qquad \|T-T_n\|\le\|K-K_n\|_2\longrightarrow0.
$$

따라서 $$T$$는 compact이다. 무한 차원 연산자의 근사를 kernel이라는 함수의 $$L^2$$ 근사로 바꾼 것이다.

**Spectral theorem의 목표**

<span id="l23:spectral"></span>

Orthonormal basis가 존재한다는 것만으로는 연산자가 단순해지지 않는다. 이번에는 basis의 각 방향이 연산자에 의해 자기 방향의 스칼라배로만 움직이게 하고 싶다. 이것이 무한 차원에서의 대각화이다.

<div class="real-analysis-statement" markdown="1">

**Theorem 6.2: Spectral theorem.**

$$T:H\to H$$가 compact self-adjoint operator이면 $$H$$에는 $$T$$의 eigenvector들로 이루어진 orthonormal basis $$\{\varphi_k\}$$가 존재한다. 즉,

$$
T\varphi_k=\lambda_k\varphi_k,\qquad \lambda_k\in\mathbb R.
$$

$$H$$가 infinite-dimensional이면 basis를 수열로 나열할 수 있고 $$\lambda_k\to0$$이다. 반대로 orthonormal basis에서 실수 대각성분을 가지며, 무한 차원에서는 그 성분이 0으로 수렴하는 연산자는 compact self-adjoint이다.

</div>

유한 차원에서는 eigenvalue가 유한 개이므로 $$k\to\infty$$ 조건을 붙일 필요가 없다. 무한 차원에서 대각성분이 0으로 가는 조건은 멀리 있는 좌표 방향을 점점 작게 눌러 compactness를 만드는 조건이다. Eigenvalue가 0인 방향, 즉 $$\ker T$$의 방향도 basis에 포함한다.

여기서 spectral이라는 말은 연산자의 spectrum을 연구한다는 뜻이다. 엄밀한 spectrum은 eigenvalue만을 뜻하지 않으며, 이 대각화 상황에서는 eigenvalue 집합의 closure이다. 특히 무한 차원에서는 0이 실제 eigenvalue가 아니더라도 그 극한점으로 spectrum에 포함될 수 있다. 지금 증명할 내용은 위의 basis와 대각성분에 대한 구체적인 명제이다.

**Self-adjointness가 주는 두 사실**

<span id="l23:real-eigenvalues"></span>

<div class="real-analysis-statement" markdown="1">

**Lemma 6.3.**

Bounded self-adjoint operator의 모든 eigenvalue는 실수이다. 서로 다른 eigenvalue에 대응하는 eigenvector들은 orthogonal이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$Tf=\lambda f$$, $$f\ne0$$이면

$$
\lambda(f,f)=(Tf,f)=(f,Tf)=(f,\lambda f)=\overline\lambda(f,f).
$$

$$(f,f)>0$$이므로 $$\lambda=\overline\lambda$$이다. 첫 번째 인자의 선형성과 두 번째 인자의 conjugate-linearity가 함께 사용된다.

이제 $$Tf_i=\lambda_if_i$$라 하자. 두 eigenvalue가 실수라는 사실과 self-adjointness를 사용하면

$$
\lambda_1(f_1,f_2)=(Tf_1,f_2)=(f_1,Tf_2)=\lambda_2(f_1,f_2).
$$

$$\lambda_1\ne\lambda_2$$이면 $$(f_1,f_2)=0$$이다.

</div>

이 두 결론에는 compactness가 필요하지 않다. 또 같은 eigenvalue를 갖는 임의의 두 eigenvector가 자동으로 orthogonal인 것은 아니다. 하나가 다른 하나의 배수일 수도 있다. 정확한 결론은 서로 다른 eigenspace들이 orthogonal이라는 것이다.

**Compactness가 eigenspace와 eigenvalue를 제한한다**

<span id="l23:eigenvalue-decay"></span>

<div class="real-analysis-statement" markdown="1">

**Lemma 6.4.**

$$T$$가 compact self-adjoint이면 $$\lambda\ne0$$에 대해 $$V_\lambda=\ker(T-\lambda I)$$는 finite-dimensional이다. 또 임의의 $$\mu>0$$에 대해 $$\vert \lambda\vert \ge\mu$$인 eigenvalue에 대응하는 eigenspace들의 합은 finite-dimensional이다. 따라서 0이 아닌 eigenvalue들은 at most countable하고, 무한히 나열하면 0으로 수렴한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

첫째, $$V_\lambda$$가 infinite-dimensional이라고 하자. $$T-\lambda I$$가 연속이므로 $$V_\lambda$$는 closed이고 그 안에서 infinite orthonormal sequence $$\{\varphi_n\}$$를 고를 수 있다. $$T$$의 compactness로 $$T\varphi_{n_k}$$가 수렴하는 부분수열이 존재해야 한다. 그러나

$$
\|T\varphi_{n_k}-T\varphi_{n_l}\|
=|\lambda|\|\varphi_{n_k}-\varphi_{n_l}\|=|\lambda|\sqrt2\quad(k\ne l)
$$

이므로 모순이다. $$\lambda\ne0$$가 바로 여기서 사용된다. $$T=0$$이면 $$\ker T=H$$일 수 있으므로 0의 eigenspace는 infinite-dimensional일 수 있다.

둘째, 어떤 고정한 $$\mu>0$$에 대해 $$\vert \lambda_n\vert \ge\mu$$인 서로 다른 eigenvalue들이 무한히 존재한다고 하자. 각 eigenspace에서 unit eigenvector $$\varphi_n$$을 고른다. Lemma 6.3으로 이들은 orthonormal이다. 그런데

$$
\|T\varphi_n-T\varphi_m\|^2
=\|\lambda_n\varphi_n-\lambda_m\varphi_m\|^2
=|\lambda_n|^2+|\lambda_m|^2\ge2\mu^2
$$

이므로 역시 image sequence에 수렴하는 부분수열이 없다. 따라서 그런 eigenvalue는 유한 개이고, 첫째 결과에 의해 각각의 eigenspace도 finite-dimensional이다.

모든 0이 아닌 eigenvalue는 어떤 $$j\in\mathbb N$$에 대해 $$\vert \lambda\vert \ge1/j$$를 만족한다. 각 집합이 유한하므로 그 합집합은 countable이다. 또한 임의의 양의 문턱 바깥에는 유한 개 방향만 있으므로 basis의 eigenvalue들을 나열하면 0으로 수렴한다. 무한히 많은 0을 포함해도 이 결론은 변하지 않는다.

</div>

여기서 모순을 시작할 때의 논리는 “어떤 $$\mu>0$$에 대해 0에서 떨어진 eigenvalue가 무한히 많다”이다. “모든 $$\mu>0$$”라고 가정할 필요가 없다.

**최소한 하나의 0이 아닌 eigenvalue 찾기**

<span id="l23:extremal-eigenvalue"></span>

앞의 결과는 eigenvalue가 존재한다면 어떤 성질을 갖는지를 말한다. 이제 실제 존재를 확보해야 한다.

<div class="real-analysis-statement" markdown="1">

**Lemma 6.5.**

$$T\ne0$$가 compact self-adjoint이면 $$\|T\|$$ 또는 $$-\|T\|$$이 $$T$$의 eigenvalue이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

[self-adjoint operator의 norm 공식](/blog/2026/real-analysis-linear-transformations/#l23:quadratic-norm)에 의해 $$\|T\|=\sup_{\|f\|=1}\vert (Tf,f)\vert $$이고 quadratic form은 실수이다. 따라서 양의 supremum이 $$\|T\|$$이거나 음의 infimum이 $$-\|T\|$$이다. 둘째 경우에는 $$-T$$에 첫째 경우를 적용하면 되므로

$$
\lambda=\|T\|=\sup_{\|f\|=1}(Tf,f)>0
$$

인 경우를 증명한다. Supremum이 maximum이라고 가정하지 않는다. 대신 $$\|f_n\|=1$$이고 $$(Tf_n,f_n)\to\lambda$$인 extremizing sequence를 고른다.

Unit ball 자체는 compact가 아니므로 $$f_n$$이 수렴한다고 말할 수 없다. $$T$$의 compactness가 보장하는 것은 image sequence의 수렴이다. 부분수열을 택하여 $$Tf_{n_k}\to g\in H$$라 하자. 아직 $$g=Tf$$인 어떤 $$f$$가 있는지는 알지 못한다.

목표는 $$Tf_{n_k}-\lambda f_{n_k}\to0$$을 보이는 것이다. 그러면 두 수열이 같은 극한을 갖게 된다. Self-adjointness와 $$\lambda\in\mathbb R$$, $$\|f_{n_k}\|=1$$을 이용해 제곱을 전개하면

$$
\begin{align*}
\|Tf_{n_k}-\lambda f_{n_k}\|^2
&=\|Tf_{n_k}\|^2-2\lambda(Tf_{n_k},f_{n_k})+\lambda^2\|f_{n_k}\|^2\\
&\le2\lambda^2-2\lambda(Tf_{n_k},f_{n_k})\longrightarrow0.
\end{align*}
$$

따라서 $$\lambda f_{n_k}\to g$$이다. $$T$$의 연속성과 선형성으로

$$
T(\lambda f_{n_k})\longrightarrow Tg,
\qquad T(\lambda f_{n_k})=\lambda Tf_{n_k}\longrightarrow\lambda g.
$$

극한의 유일성에 의해 $$Tg=\lambda g$$이다.

그러나 eigenvector는 0이 아니어야 한다. $$\lambda f_{n_k}\to g$$와 $$\|f_{n_k}\|=1$$에서 $$\|g\|=\lambda>0$$을 얻는다. 또는 $$g=0$$이라고 하면 Cauchy--Schwarz로 $$(Tf_{n_k},f_{n_k})\to0$$이 되어 $$\lambda>0$$과 모순이다. 따라서 $$\lambda$$는 실제 eigenvalue이다.

</div>

**모든 방향이 eigenvector들로 채워진다**

<span id="l23:spectral-proof"></span>

<div class="real-analysis-proof" markdown="1">

*Proof (Theorem 6.2의 증명).*

$$T=0$$이면 임의의 orthonormal basis를 사용하면 된다. 일반적인 경우 $$S$$를 $$T$$의 모든 eigenvector들의 *closed* span이라 하자. 여기에는 0의 eigenspace에 속한 벡터들도 포함한다. 목표는 $$S=H$$이다.

유한한 eigenvector들의 linear combination에 $$T$$를 적용하면 여전히 같은 종류의 linear combination이다. $$T$$의 연속성으로 closure까지 이 성질이 전달되므로 $$T(S)\subset S$$이다. 또한 $$g\in S^\perp$$, $$h\in S$$이면

$$
(Tg,h)=(g,Th)=0
$$

이므로 $$T(S^\perp)\subset S^\perp$$이다. 두 부분공간 모두 $$T$$에 의해 보존된다.

$$S\ne H$$라고 가정하면 $$H=S\oplus S^\perp$$이고 $$S^\perp\ne\{0\}$$이다. 이 closed subspace 위에

$$
T_1=T|_{S^\perp}:S^\perp\longrightarrow S^\perp
$$

를 생각한다. 이는 $$T$$의 *restriction*이다. Orthogonal projection과는 다른 연산자이다. $$T_1$$의 image sequence는 $$T$$의 image sequence이므로 compactness를 물려받으며, 극한도 $$S^\perp$$ 안에 남는다. Inner product 항등식을 제한하면 self-adjointness도 얻는다.

만약 $$T_1=0$$이면 $$S^\perp$$의 모든 0이 아닌 벡터가 $$T$$의 eigenvalue 0에 대응한다. 그런 벡터는 $$S$$에도 속해야 하므로 $$S\cap S^\perp=\{0\}$$와 모순이다. 따라서 $$T_1\ne0$$이다. 이제 Lemma 6.5를 $$T_1$$에 적용하면 $$S^\perp$$ 안에 0이 아닌 eigenvector가 존재한다. Restriction의 eigenvector는 원래 $$T$$의 eigenvector이기도 하므로 다시 $$S$$에 속한다. 또 모순이다. 따라서 $$S=H$$이다.

각 eigenspace 안에서 orthonormal basis를 고른다. 서로 다른 eigenspace들은 orthogonal이고 모든 eigenvector의 closed span이 $$H$$이므로 이 basis들을 합치면 $$H$$의 orthonormal basis가 된다. 같은 eigenspace 안에서 Gram--Schmidt를 하면 그 eigenvalue는 보존된다. Lemmas 6.3과 6.4가 eigenvalue의 실수성과 0으로의 수렴을 준다.

역방향도 확인하자. Orthonormal basis에서 $$T\varphi_k=\lambda_k\varphi_k$$이고 $$\lambda_k\in\mathbb R$$, $$\lambda_k\to0$$라 하자. 수열 $$\lambda_k$$는 bounded이므로 이 식은

$$
Tf=\sum_k\lambda_k(f,\varphi_k)\varphi_k
$$

라는 bounded operator를 정의한다. 실수 계수 때문에 $$(Tf,g)=(f,Tg)$$이다. 처음 $$N$$개 항만 남긴 $$T_N$$은 finite rank이고

$$
\|(T-T_N)f\|^2
=\sum_{k>N}|\lambda_k|^2|(f,\varphi_k)|^2
\le\left(\sup_{k>N}|\lambda_k|^2\right)\|f\|^2.
$$

따라서 $$\|T-T_N\|\to0$$이고 Proposition 6.1로 $$T$$는 compact이다. 유한 차원에서는 처음부터 finite rank이므로 같은 결론이 성립한다.

</div>

**가정과 결론의 연결**

<span id="l23:closing"></span>

이 장의 대각화는 두 가정의 역할을 구별하면 이해하기 쉽다. Self-adjointness는 eigenvalue를 실수로 만들고 서로 다른 eigenspace를 orthogonal하게 만든다. Compactness는 bounded sequence의 image에서 극한을 얻도록 하여 실제 eigenvector를 찾게 하고, 0에서 떨어진 방향이 무한히 남아 있는 것을 막는다. 이 때문에 무한 차원에서도 유한 차원 대각화와 닮은 결론을 얻는다.

관련 연습문제는 Chapter 4의 Exercises 25, 28, 29, 32, 33이다. 특히 가정 하나를 없앴을 때 결론이 어떻게 달라지는지 살펴보면 compactness와 self-adjointness를 왜 함께 요구했는지 확인할 수 있다. 정리의 적용에서는 단지 orthonormal basis의 존재만 확인하는 것으로 충분하지 않고, 그 basis가 해당 연산자의 eigenvector들로 이루어졌는지 확인해야 한다.

{% endraw %}

<!-- prettier-ignore-end -->

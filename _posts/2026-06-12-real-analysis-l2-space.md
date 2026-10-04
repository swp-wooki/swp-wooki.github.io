---
layout: post
title: "Real Analysis 12: The Hilbert Space L2"
date: 2026-06-12 12:00:00 +0900
description: "L2 공간의 내적과 노름, 완비성과 분리가능성을 정리한다."
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

## 4. Hilbert Spaces: An Introduction

**적분에서 기하로**

<span id="l19:motivation"></span>

지금까지 measurable function의 적분을 정의하고, 미분과 적분이 어떤 조건에서 서로를 복원하는지 살펴보았다. 이제 이 이론을 함수들의 공간 자체를 연구하는 데 사용한다. 함수 하나를 하나의 벡터로 생각하면 함수 사이의 거리와 각도를 말할 수 있을까? 유한 차원에서 익숙한 기하를 무한 차원으로 옮기는 것이 Hilbert space 이론의 출발점이다. 이 이름은 David Hilbert에서 왔다.

이 장의 목표는 두 가지이다. 먼저 Hilbert space를 이해하고 분류한다. 이 강의에서는 separability를 정의에 포함하므로, 같은 스칼라체 위의 유한 차원 공간은 차원에 따라 분류되고 무한 차원 공간은 $$\ell^2$$와 unitary equivalent가 된다. 다음으로 이 공간 사이의 linear transformation을 연구한다. 유한 차원에서 행렬을 연구하듯 무한 차원의 연산자를 살펴보고, compact self-adjoint operator에 대한 spectral theorem을 통해 대각화가 어떤 형태로 남는지 알아본다. 모든 무한 차원 연산자가 대각화된다는 뜻은 아니다.

추상적인 정의부터 시작하기보다 이미 알고 있는 함수 공간에서 필요한 구조를 발견해 보자. $$L^1$$에서는 $$\int \vert f\vert $$가 유한한 함수를 모았다. 이번에는 $$\int \vert f\vert ^2$$가 유한한 함수를 모은다. 지수를 바꾼 $$L^p$$ 공간도 생각할 수 있지만, $$p=2$$에서는 norm이 inner product와 직접 연결된다는 특별한 일이 일어난다.

### 4.1. The Hilbert space $$L^2$$

<span id="l19:l2"></span>

별도의 언급이 없으면 함수는 $$\mathbb R^d$$ 위의 복소수 값을 갖는 measurable function이다. 다음과 같이 정의한다.

<div class="real-analysis-statement" markdown="1">

**Definition ($$L^2$$, norm, inner product).**

$$
L^2(\mathbb R^d)=\left\{f:\mathbb R^d\to\mathbb C\text{ measurable}:\int_{\mathbb R^d}|f|^2<\infty\right\}\big/\!\sim,
\qquad f\sim g\iff f=g\ \text{a.e.}
$$

이 공간에서

$$
\|f\|_2=\left(\int_{\mathbb R^d}|f|^2\right)^{1/2},
\qquad (f,g)=\int_{\mathbb R^d}f\overline g
$$

로 놓는다. 정의역이 분명하면 $$L^2(\mathbb R^d)$$를 $$L^2$$로 쓴다.

</div>

복소수의 경우 $$\vert f\vert ^2=f\overline f$$이다. 두 번째 인자에 complex conjugate가 들어가므로 $$(f,f)$$가 음이 아닌 실수가 되고 $$\|f\|_2^2=(f,f)$$가 된다. 이 관계가 norm과 기하를 연결한다.

왜 equivalence class를 취하는가? $$\|f\|_2=0$$이 뜻하는 것은 모든 점에서 $$f=0$$이라는 명제가 아니라 $$f=0$$ a.e.라는 명제이다. 적분은 measure zero인 집합에서 값을 바꾸어도 달라지지 않는다. 따라서 그런 함수들을 같은 벡터로 보아야 norm이 0인 벡터가 영벡터뿐이라는 조건을 만족한다. 이후에는 equivalence class를 매번 따로 쓰지 않고 그 대표 함수 $$f$$로 나타낸다. 이 약속은 $$L^1$$에서와 같다.

**벡터 연산과 inner product**

<span id="l19:axioms"></span>

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

$$L^2$$는 복소 벡터 공간이고 위 식은 inner product와 norm을 정의한다. 특히

$$
|(f,g)|\le\|f\|_2\|g\|_2,
\qquad \|f+g\|_2\le\|f\|_2+\|g\|_2.
$$

또한 $$(\alpha f+\beta h,g)=\alpha(f,g)+\beta(h,g)$$이고 $$(f,g)=\overline{(g,f)}$$이다.

</div>

우선 두 함수를 더해도 $$L^2$$ 안에 남아야 한다. 점별 부등식

$$
|f+g|^2\le 2|f|^2+2|g|^2
$$

을 적분하면 이 사실을 얻는다. $$\vert cf\vert ^2=\vert c\vert ^2\vert f\vert ^2$$이므로 스칼라배에도 닫혀 있다. 적분의 선형성으로 첫 번째 인자에 대한 선형성이 나오고, complex conjugate를 취하면 두 인자를 바꿀 수 있다. 따라서 두 번째 인자에는

$$
(f,\alpha g+\beta h)=\overline\alpha(f,g)+\overline\beta(f,h)
$$

가 성립한다. 복소수 공간에서는 단순한 대칭성과 bilinearity가 아니라 conjugate symmetry와 sesquilinearity를 사용한다. 실수 값만 다루면 conjugate가 사라져 익숙한 실수 inner product로 돌아간다.

**Cauchy--Schwarz inequality의 세 경우**

<span id="l19:cauchy-schwarz"></span>

inner product를 정의하는 적분이 존재하는지부터 확인하자. 음이 아닌 두 수에 대한 $$2ab\le a^2+b^2$$를 적용하면

$$
\int|f\overline g|\le\frac12\int(|f|^2+|g|^2)<\infty.
$$

따라서 두 $$L^2$$ 함수의 곱 $$f\overline g$$는 $$L^1$$에 속한다. 이제 이 부등식의 오른쪽을 합이 아닌 norm의 곱으로 개선해야 한다.

첫째, $$\|f\|_2=0$$ 또는 $$\|g\|_2=0$$이면 한 함수가 a.e. 0이므로 $$(f,g)=0$$이다. 둘째, 두 norm이 모두 1이면

$$
|(f,g)|\le\int|f\overline g|\le\tfrac12(1+1)=1=\|f\|_2\|g\|_2.
$$

셋째, 두 norm이 모두 양수이면

$$
\widetilde f=\frac f{\|f\|_2},\qquad
\widetilde g=\frac g{\|g\|_2}
$$

로 정규화한다. 둘째 경우를 적용한 뒤 분모를 곱하면 원하는 부등식을 얻는다. 영벡터를 먼저 분리한 이유는 바로 이 나눗셈 때문이다. 유한 차원의 Cauchy--Schwarz와 핵심 원리가 같고, 여기서는 성분의 합 대신 적분을 사용한다.

**Triangle inequality와 거리**

<span id="l19:triangle"></span>

이제 norm의 마지막 조건을 보자. 음이 아닌 성질, 영벡터 조건, $$\|cf\|_2=\vert c\vert \|f\|_2$$는 정의로 확인된다. Triangle inequality는 제곱을 전개한 뒤 Cauchy--Schwarz를 사용한다.

$$
\begin{align*}
\|f+g\|_2^2
&=(f+g,f+g)\\
&=\|f\|_2^2+(f,g)+(g,f)+\|g\|_2^2\\
&=\|f\|_2^2+2\operatorname{Re}(f,g)+\|g\|_2^2\\
&\le\|f\|_2^2+2\|f\|_2\|g\|_2+\|g\|_2^2
=(\|f\|_2+\|g\|_2)^2.
\end{align*}
$$

양변이 음이 아니므로 제곱근을 취할 수 있다. 이로써

$$
d(f,g)=\|f-g\|_2
$$

라는 거리를 얻는다. 여기서 하나의 벡터는 함수이고, 두 함수의 차이의 norm이 두 벡터 사이의 거리이다. 따라서 이제 Cauchy 수열과 수렴, completeness 같은 metric space의 개념을 적용할 수 있다.

**Completeness: 빠른 부분수열에서 전체 수열로**

<span id="l19:complete"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.2.**

$$L^2$$는 complete이다. 즉, $$L^2$$의 모든 Cauchy 수열은 $$L^2$$의 한 원소로 norm 수렴한다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\{f_n\}$$을 $$L^2$$의 Cauchy 수열이라 하자. $$L^2$$에서 가까워진다고 해서 주어진 전체 수열의 점별 극한이 곧바로 존재하는 것은 아니다. 먼저 훨씬 빠르게 가까워지는 부분수열을 뽑아 점별 극한을 만들고, 마지막에 Cauchy 조건으로 전체 수열을 따라오게 한다. $$L^1$$의 completeness 증명과 같은 전략이다.

Cauchy 조건을 $$2^{-k}$$에 차례로 적용하면 증가하는 지표 $$n_k$$를 골라

$$
\|f_{n_{k+1}}-f_{n_k}\|_2<2^{-k}\quad(k\ge1)
$$

가 되게 할 수 있다. 차이들의 합이 telescoping sum이 된다는 점에 주목하여

$$
F_K=f_{n_1}+\sum_{k=1}^K(f_{n_{k+1}}-f_{n_k})=f_{n_{K+1}},
\quad
G_K=|f_{n_1}|+\sum_{k=1}^K|f_{n_{k+1}}-f_{n_k}|
$$

로 놓는다. 아직 무한급수의 수렴을 가정하지 않는다. 먼저 유한합에 triangle inequality를 적용하면

$$
\|G_K\|_2\le\|f_{n_1}\|_2+\sum_{k=1}^K2^{-k}
\le\|f_{n_1}\|_2+1=:C.
$$

$$G_K$$는 음이 아니고 증가한다. $$G=\lim_K G_K$$라 할 때 $$G_K^2\uparrow G^2$$이므로 MCT에 의해

$$
\int G^2=\lim_K\int G_K^2\le C^2.
$$

따라서 $$G$$는 a.e. 유한하다. 바로 이 사실이 차이들의 급수가 a.e. 절대수렴함을 보장한다. 그 점들에서

$$
f=f_{n_1}+\sum_{k=1}^\infty(f_{n_{k+1}}-f_{n_k})
$$

로 정의하고, 남은 measure zero인 집합에서는 0으로 정의한다. $$\vert f\vert \le G$$이므로 $$f\in L^2$$이고 $$F_K\to f$$ a.e.이다.

점별 극한만으로 증명이 끝난 것은 아니다. 필요한 것은 $$L^2$$ 수렴이다. $$\vert F_K\vert \le G_K\le G$$이므로

$$
|F_K-f|^2\le4G^2\in L^1.
$$

DCT를 제곱 차이에 적용하여 $$\|F_K-f\|_2^2\to0$$을 얻는다. 빠른 부분수열은 a.e. 수렴과 $$L^2$$ 수렴을 함께 만족한다. 이때 원래 전체 수열도 a.e. 수렴한다고 결론 내리면 안 된다.

마지막으로 $$\varepsilon>0$$을 고정하자. Cauchy 조건으로 $$n,m\ge N$$이면 $$\|f_n-f_m\|_2<\varepsilon/2$$가 되는 $$N$$을 잡는다. 부분수열 수렴을 사용해 $$n_k\ge N$$이고 $$\|f_{n_k}-f\|_2<\varepsilon/2$$인 하나의 $$k$$를 고정한다. 그러면 모든 $$n\ge N$$에 대해

$$
\|f_n-f\|_2\le\|f_n-f_{n_k}\|_2+\|f_{n_k}-f\|_2<\varepsilon.
$$

따라서 전체 수열이 $$f$$로 $$L^2$$ 수렴한다.

</div>

증명에서 공간에 특유한 핵심 도구는 triangle inequality이다. 이 부등식이 확보되면 $$1\le p<\infty$$의 $$L^p$$에서도 같은 전략을 쓸 수 있다. 지금 필요한 결론은 $$L^2$$ 안의 Cauchy 수열이 공간 밖으로 빠져나가지 않는다는 점이다.

**Separability: countable한 근사 재료**

<span id="l19:separable"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3.**

$$L^2$$에는 countable dense subset이 존재한다. 즉, $$L^2$$는 separable이다.

</div>

함수 전체는 매우 큰 집합이지만, 모든 함수를 원하는 오차 안에서 근사하는 데 countably many한 재료만 있으면 된다는 뜻이다. 앞으로 orthonormal basis의 원소를 하나씩 나열하고 급수로 벡터를 표현하는 데 이 성질이 쓰인다. 모든 simple function이나 모든 step function을 모으면 아직 uncountable하다. 높이와 rectangle의 꼭짓점을 유리수로 제한해야 countability를 얻는다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

꼭짓점 좌표가 유리수인 bounded rectangle $$R_j$$와 $$q_j\in\mathbb Q+i\mathbb Q$$를 사용한 유한합

$$
\mathcal D=\left\{\sum_{j=1}^Jq_j\rchi_{R_j}:J<\infty,\ q_j\in\mathbb Q+i\mathbb Q,\ R_j\text{의 꼭짓점 좌표가 유리수}\right\}
$$

를 생각한다. 각 함수는 유리수의 유한한 목록으로 지정되므로 $$\mathcal D$$는 countable하다. 여기서 임의의 복소수 계수까지 허용한 전체 complex linear span을 취하는 것이 아니다.

$$f\in L^2$$와 $$\varepsilon>0$$을 고정한다. 첫 단계는 함수의 가로 범위와 높이를 동시에 자르는 것이다.

$$
g_n(x)=f(x)\rchi_{\{|x|\le n\}\cap\{|f(x)|\le n\}}(x).
$$

두 조건의 교집합을 사용하므로 $$g_n$$은 bounded이고 bounded한 집합 밖에서 0이다. $$g_n\to f$$ a.e.이며 $$\vert f-g_n\vert ^2\le \vert f\vert ^2$$이므로 DCT에 의해 $$g_n\to f$$ in $$L^2$$이다. $$N\ge1$$을 충분히 크게 잡아

$$
\|f-g_N\|_2<\varepsilon/2
$$

로 만든다. 이제 $$g=g_N$$이라 쓰자. $$g$$는 bounded한 집합에 지지되고 $$\vert g\vert \le N$$이므로 $$g\in L^1$$이기도 하다.

둘째 단계는 $$g$$를 step function으로 근사하는 것이다. 앞서 얻은 $$L^1$$의 step approximation을 사용한다. 근사 step function의 값을 반지름 $$N$$인 복소수 원판 안으로 자르면 $$\vert g\vert \le N$$인 $$g$$와의 오차가 증가하지 않고 여전히 유한한 값만 갖는 step function이다. 먼저 모든 rectangle의 경계를 공통으로 세분하여 하나의 유한 rectangular grid를 만든다. 이 grid에서 step function은 서로소인 각 cell 위의 상수로 표현된다. 각 좌표 방향의 경계들을 순서를 유지하면서 유리수로 조금씩 옮기되, 인접 cell의 공통 경계는 함께 옮긴다. 그러면 cell들의 서로소성이 유지되어 서로 겹친 계수들의 합 때문에 bound가 커지는 일이 없다. 각 cell의 계수도 $$\mathbb Q+i\mathbb Q$$로 충분히 가깝게 바꾸어 그 modulus가 $$N+1$$ 이하가 되게 한다. 경계 이동으로 달라지는 집합의 measure는 임의로 작게 할 수 있고 cell과 계수는 유한 개이므로 $$L^1$$ 오차도 제어할 수 있다. 따라서 $$M=N+1$$로 놓으면 $$\psi\in\mathcal D$$를 골라

$$
|\psi|\le M,\qquad \int|g-\psi|<\frac{\varepsilon^2}{8M}
$$

가 되게 할 수 있다.

왜 이처럼 제곱이 들어간 작은 오차를 골랐는가? 지금 가진 근사는 $$L^1$$ 근사이지만 필요한 것은 $$L^2$$ 근사이다. $$\vert g\vert ,\vert \psi\vert \le M$$을 사용하여 차이의 두 인자 중 하나를 상수로 묶는다.

$$
\int|g-\psi|^2\le 2M\int|g-\psi|<\frac{\varepsilon^2}{4}.
$$

따라서 $$\|g-\psi\|_2<\varepsilon/2$$이고

$$
\|f-\psi\|_2\le\|f-g\|_2+\|g-\psi\|_2<\varepsilon.
$$

임의의 $$f$$와 오차에 대해 $$\mathcal D$$의 원소로 근사했으므로 density가 증명된다.

</div>

이제 $$L^2$$는 inner product를 갖고 complete이며 separable임을 확인했다. 다음에는 이 세 성질만을 추상화하여 Hilbert space를 정의한다. 관련 연습문제는 교재 Chapter 4의 Exercise 5이다.

{% endraw %}

<!-- prettier-ignore-end -->

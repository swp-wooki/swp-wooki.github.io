---
layout: post
title: "Probability Theory 4: Conditioning on a Random Variable"
date: 2026-10-04 12:04:00 +0900
description: "일반 확률변수에 대한 conditional expectation의 정의와 성질을 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 4)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_4.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

### 2.3 일반 random variable을 조건으로 하는 경우

<span id="l4:t01"></span>

지난 시간에는 두 종류의 conditional expectation을 정의했다. 사건 $$B$$를 조건으로 하면

$$
E(\xi\mid B)=\frac{1}{P(B)}\int_B\xi\,dP
$$

라는 실수가 나온다. 여기서는 $$\xi\in L^1$$이고 $$P(B)>0$$이어야 한다. 반면 discrete random variable $$\eta$$를 조건으로 하면, 관측값에 따라 서로 다른 사건별 평균을 골라 주는 함수가 나왔다.

$$
E(\xi\mid\eta)(\omega)
=E(\xi\mid\{\eta=y_n\})
\quad\text{if }\eta(\omega)=y_n.
$$

먼저 $$\omega$$에서 관측값을 읽고 그 값의 역상인 사건에서 평균을 계산하는 방식이었다.

그렇게 만든 함수 $$Z$$에 대해 Proposition 2.1에서 확인한 성질을 기억해 보자. $$Z$$는 integrable하고 $$\sigma(\eta)$$-measurable이며, 모든 $$A\in\sigma(\eta)$$에 대해

$$
\int_AZ\,dP=\int_A\xi\,dP
$$

였다. $$\mathcal F$$-measurable이라는 말만으로 끝나지 않고, 관측으로 얻는 더 작은 정보 $$\sigma(\eta)$$에 대한 measurability가 있다는 점이 중요하다.

#### 직접 값을 주는 정의에서 성질로 정하는 정의로

<span id="l4:t02"></span>

이제 $$\eta$$가 discrete이 아니라고 생각해 보자. 관측값 하나의 사건 $$\{\eta=y\}$$에 양의 확률이 있다는 보장이 없다. 그러므로 앞에서처럼 그 사건의 확률로 나누어 함숫값을 정하는 방법을 일반적으로 사용할 수 없다.

대신 방금 복습한 두 성질을 정의로 삼자.

<div class="real-analysis-statement" markdown="1">

**Definition (일반 random variable에 대한 conditional expectation).**

$$\xi\in L^1$$이고 $$\eta$$가 임의의 실수값 random variable이라 하자. integrable한 random variable $$Z$$가 다음을 만족하면 $$\xi$$의 $$\eta$$에 대한 conditional expectation이라고 하고 $$E(\xi\mid\eta)$$로 쓴다.

<ol type="1" markdown="1">

<li markdown="1">

$$Z$$는 $$\sigma(\eta)$$-measurable이다.

</li>

<li markdown="1">

모든 $$A\in\sigma(\eta)$$에 대해 $$\displaystyle\int_AZ\,dP=\int_A\xi\,dP$$이다.

</li>

</ol>

</div>

첫 조건은 관측한 정보만으로 $$Z$$의 값을 알 수 있어야 한다는 뜻이다. 둘째 조건은 그 정보로 구별할 수 있는 사건마다 $$Z$$와 원래 함수의 적분이 같아야 한다는 뜻이다. discrete인 경우에는 이미 이 두 성질을 증명했다. 이제 그 성질들을 정의로 삼아 더 일반적인 관측까지 다루는 것이다.

이전에는 각 $$\omega$$에서 값을 명시했지만, 지금은 만족해야 할 성질로 함수를 정했다. 따라서 세 질문이 생긴다. 그런 함수가 존재할까? 하나로 정해질까? 실제 계산에서는 어떻게 찾을까?

존재는 measure theory의 존재정리에 의해 보장된다는 사실을 사용하자. 그 정리의 증명은 여기서 다루지 않는다. 지금 직접 보일 것은 유일성이며, 이후에는 두 조건을 이용해 구체적인 함수를 찾아보자. 입력인 $$\xi$$와 $$\eta$$가 명시되어 있어도 conditional expectation의 모양이 곧바로 보이는 것은 아니다.

#### conditional probability도 같은 방식으로 정의한다

<span id="l4:t03"></span>

<div class="real-analysis-statement" markdown="1">

**Conditional Probability.**

사건 $$A\in\mathcal F$$에 대하여

$$
P(A\mid\eta)=E(\mathbb1_A\mid\eta)
$$

로 정의한다.

</div>

indicator function은 probability space에서 항상 integrable하므로 방금 정의를 적용할 수 있다. 이때 $$P(A\mid\eta)$$도 $$\Omega$$ 위의 random variable이다. 특정 사건 $$B$$를 주고 계산한 실수 $$P(A\mid B)$$와 종류를 구별해 두자. 여기서는 확률 $$0$$인 level set의 확률로 나누는 식을 정의에 사용하지 않는다.

#### 모든 관측 가능한 사건에서 적분이 0이라면

<span id="l4:t04"></span>

<div class="real-analysis-statement" markdown="1">

**Lemma 2.1.**

sigma-field $$\mathcal G\subset\mathcal F$$와 integrable하고 $$\mathcal G$$-measurable인 random variable $$\xi$$를 생각하자. 모든 $$B\in\mathcal G$$에 대해

$$
\int_B\xi\,dP=0
$$

이면 $$\xi=0$$ a.s., 즉 $$P(\xi\neq0)=0$$이다.

</div>

전체 공간에서 적분이 $$0$$이라는 조건 하나만으로 함수가 $$0$$이라고 결론낼 수는 없다. 양수와 음수가 상쇄될 수 있기 때문이다. 여기서는 $$\mathcal G$$의 모든 사건에서 확인하며, 함수도 바로 그 $$\mathcal G$$에 대해 measurable이라고 요구한다. 이 measurability가 있어야 함수의 양수 부분과 음수 부분을 구별해 시험할 수 있다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

목표는 $$\{\xi\neq0\}$$의 확률이 $$0$$임을 보이는 것이다. 먼저 $$\epsilon>0$$을 고정하고

$$
B_+=\{\xi\geq\epsilon\},\qquad B_-=\{\xi\leq-\epsilon\}
$$

로 두자. $$\xi$$의 $$\mathcal G$$-measurability 때문에 두 사건 모두 $$\mathcal G$$에 속한다. 따라서 가정의 적분 등식에 이 사건들을 넣을 수 있다.

$$B_+$$에서는 $$\xi\geq\epsilon$$이므로

$$
0=\int_{B_+}\xi\,dP\geq\epsilon P(B_+)\geq0.
$$

$$\epsilon$$이 양수이므로 $$P(B_+)=0$$이다. 마찬가지로 $$B_-$$에서는

$$
0=\int_{B_-}\xi\,dP\leq-\epsilon P(B_-)\leq0
$$

이어서 $$P(B_-)=0$$이다.

이제 $$\epsilon=1/n$$을 사용한다. 양수인 실수는 어떤 $$1/n$$보다 크거나 같고, 음수인 실수는 어떤 $$-1/n$$보다 작거나 같으므로

$$
\{\xi\neq0\}
=\bigcup_{n\geq1}\{\xi\geq1/n\}
\;\cup\;\bigcup_{n\geq1}\{\xi\leq-1/n\}.
$$

각 사건의 확률이 $$0$$이고 이 사건들을 자연수 $$n$$으로 나열할 수 있으므로, countable subadditivity에 의해 $$P(\xi\neq0)=0$$이다.

</div>

양수인 부분만 보고 끝내지 않고 음수인 부분도 확인해야 한다. 또 집합들을 $$\mathcal G$$ 안에서 선택할 수 있었다는 것이 핵심이다. 단순히 더 큰 $$\mathcal F$$에 대해 measurable이라는 사실만으로는 이 증명의 시험 사건들을 사용할 수 없다.

#### conditional expectation의 유일성은 almost sure 유일성이다

<span id="l4:t05"></span>

<div class="real-analysis-statement" markdown="1">

**Remark: 유일성과 a.s. 같은 입력.**

같은 $$\xi,\eta$$에 대해 conditional expectation의 정의를 만족하는 두 random variable은 almost surely 같다. 또한 $$\xi=\xi'$$ a.s.이면

$$
E(\xi\mid\eta)=E(\xi'\mid\eta)\quad\text{a.s.}
$$

이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 $$Z,Z'$$가 같은 입력에 대한 정의를 만족한다고 하자. $$Z-Z'$$는 integrable하고 $$\sigma(\eta)$$-measurable이다. 모든 $$A\in\sigma(\eta)$$에 대해

$$
\int_A(Z-Z')\,dP
=\int_A\xi\,dP-\int_A\xi\,dP=0.
$$

Lemma 2.1에 $$\mathcal G=\sigma(\eta)$$를 대입하면 $$Z-Z'=0$$ a.s.를 얻는다.

다음으로 $$\xi=\xi'$$ a.s.이면 두 함수는 확률 $$0$$인 부분에서만 다르므로 모든 사건 $$A$$에서 적분이 같다. 따라서 각각의 conditional expectation을 $$Z,Z'$$라고 할 때 위 차이의 적분은 여전히 $$0$$이고, 같은 lemma를 적용할 수 있다.

</div>

유일하다는 말을 모든 점에서 값이 같다는 뜻으로 읽으면 안 된다. 정의를 만족하는 두 함수도 확률 $$0$$인 부분에서는 값이 다를 수 있다. 따라서 실제 계산으로 식 하나를 찾으면, conditional expectation을 나타내는 대표 함수 하나를 찾은 것이다. 존재는 앞서 사용한 정리가 보장한다. 방금 증명으로 얻은 것은 두 대표가 a.s. 같다는 의미의 유일성이다.

#### 관측이 일정한 구간에서 후보의 값을 찾기

<span id="l4:t06"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.4: 일부 구간만 구별하는 관측.**

단위구간의 probability space

$$
\Omega=[0,1],\quad\mathcal F=\mathcal B([0,1]),\quad
P(A)=\operatorname{Leb}(A)
$$

에서

$$
\xi(x)=2x^2,\qquad
\eta(x)=\begin{cases}
2,&0\leq x<\frac12,\\
x,&\frac12\leq x\leq1
\end{cases}
$$

라 하자. $$E(\xi\mid\eta)$$를 구해 보자.

</div>

$$\xi$$는 이차함수이고, $$\eta$$는 앞 절반에서 상수 $$2$$, 뒤 절반에서 항등함수이다. $$\eta$$가 모든 곳에서 discrete인 것은 아니므로 이전의 discrete인 경우의 공식만으로 계산하지 않는다.

첫 조건인 $$\sigma(\eta)$$-measurability부터 이용하자. Doob--Dynkin lemma에 의해

$$
E(\xi\mid\eta)=h(\eta)
$$

인 Borel function $$h$$가 존재한다. Borel function과 $$\eta$$를 합성하면 $$\sigma(\eta)$$-measurable이라는 쉬운 방향의 역이었다. 아직 $$h$$는 모르지만, 찾아야 할 함수의 형태를 얻었다. 이제 둘째 조건인 적분 등식으로 $$h$$의 값을 찾자.

사건 $$L=\{\eta=2\}=[0,1/2)$$를 대입하면

$$
\int_Lh(\eta)\,dP=\int_L\xi\,dP.
$$

이 구간에서 $$h(\eta)=h(2)$$는 상수이므로 왼쪽은 $$h(2)/2$$이고, 오른쪽은

$$
\int_0^{1/2}2x^2\,dx
=\frac23\left(\frac12\right)^3=\frac1{12}.
$$

따라서 $$h(2)=1/6$$이다. 한 사건을 사용하여 $$h$$의 한 값을 알아냈다. 이제 다른 관측 가능한 사건들을 시험해 나머지 필요한 정보를 얻어 보자.

#### 관측이 항등함수인 구간에서 값을 찾기

<span id="l4:t07"></span>

이번에는 임의의 Borel set $$B\subset[1/2,1]$$를 잡는다. 앞 절반에서 $$\eta$$의 값은 $$2$$이고 뒤 절반에서는 $$\eta(x)=x$$이므로

$$
\{\eta\in B\}=B.
$$

따라서 이 집합도 $$\sigma(\eta)$$의 사건이다. 둘째 조건은

$$
\int_Bh(x)\,dx=\int_B2x^2\,dx
$$

가 된다. $$B$$를 하나만 고정한 것이 아니라 이 구간의 모든 Borel set을 허용했으므로, 앞의 lemma와 같은 level set 논증으로

$$
h(x)=2x^2\quad\text{Lebesgue measure에 대해 거의 모든 }x\in[1/2,1]
$$

을 얻는다. 이 구간에서는 $$h(\eta(x))=h(x)$$이고 conditional expectation이 integrable하므로 차이의 적분을 다룰 수 있다.

여기서는 실수축의 Lebesgue measure를 기준으로 a.e.라고 말했다. probability space 위의 함수들에 대한 a.s.와 무엇을 기준으로 한 null set인지 구별해 두자. 이 예의 바탕공간에서는 probability measure가 Lebesgue measure의 제한이어서 두 관점이 연결된다.

$$h$$가 실수 전체에서 결정된 것은 아니다. 그러나 관측값은 $$\{2\}\cup[1/2,1]$$에만 있으므로 그 밖의 값은 합성 $$h(\eta)$$에 사용되지 않는다. $$\eta=2$$에는 확률 $$1/2$$가 붙어 있어 $$h(2)$$가 고정되는 반면, 연속적인 구간에서의 값은 거의 모든 점에서만 정해졌다는 차이도 보인다.

#### 후보를 정의한 뒤 두 조건을 다시 확인하기

<span id="l4:t08"></span>

지금까지 얻은 정보를 바탕으로 실제 Borel function 하나를 정의하자.

$$
h(y)=\begin{cases}
\frac16,&y=2,\\
2y^2,&\frac12\leq y\leq1,\\
0,&\text{그 밖의 경우}.
\end{cases}
$$

그러면

$$
Z(x)=h(\eta(x))=\begin{cases}
\frac16,&0\leq x<\frac12,\\
2x^2,&\frac12\leq x\leq1.
\end{cases}
$$

이다. 관측값이 될 수 없는 곳에서 $$h$$를 $$0$$ 대신 다른 값으로 정해도 합성은 바뀌지 않는다.

이렇게 값을 찾았다고 계산이 끝난 것은 아니다. 지금까지는 답이 되려면 어떤 형태여야 하는지를 구했다. 이제 그 후보가 실제로 정의의 두 조건과 integrability를 만족하는지 확인해야 한다.

<div class="real-analysis-proof" markdown="1">

*Proof (후보의 검증).*

$$h$$가 Borel function이므로 $$Z=h(\eta)$$는 $$\sigma(\eta)$$-measurable이다. 또한 $$\vert Z\vert \leq2$$이므로 probability space에서 integrable하다.

모든 $$A\in\sigma(\eta)$$는 어떤 Borel set $$D$$의 역상이다. $$D$$가 $$2$$를 포함하느냐에 따라, 그 역상은 $$B$$ 또는 $$L\cup B$$ 꼴이다. 여기서 $$L=[0,1/2)$$이고 $$B=D\cap[1/2,1]$$이다. 즉, 앞 절반 전체를 넣거나 빼고, 뒤 절반에서는 임의의 Borel subset을 선택한다.

이미

$$
\int_LZ\,dP=\frac12\cdot\frac16=\frac1{12}=\int_L\xi\,dP
$$

이고, 뒤 절반에서는 $$Z=\xi$$이므로 모든 그러한 $$B$$에 대해 두 적분이 같다. $$L$$과 $$B$$가 서로소이므로 적분의 additivity를 쓰면 $$L\cup B$$에서도 같다. 따라서 모든 $$A\in\sigma(\eta)$$에 대한 둘째 조건이 성립한다.

</div>

그러므로 위의 $$Z$$가 $$E(\xi\mid\eta)$$의 한 대표이다. 이 계산의 순서를 기억하자. measurability에서 $$h(\eta)$$라는 형태를 얻고, 적분 등식에서 필요한 $$h$$의 값을 찾은 뒤, 함수를 실제로 정의하여 measurability·integrability·모든 시험 사건에서의 등식을 확인했다.

#### 함수의 모양으로 예상해 보는 연습

<span id="l4:t09"></span>

앞의 답을 관측의 관점에서 다시 보자. $$\eta$$가 일정한 앞 절반에서는 서로 다른 $$x$$를 전혀 구별하지 못한다. 그래서 conditional expectation도 그 구간에서 일정해야 한다. 반면 뒤 절반에서는 관측값이 곧 $$x$$이므로 원래의 $$\xi(x)$$를 알 수 있고, 답도 원래 이차함수와 같아진다. 계산 전에도 이런 형태는 예상할 수 있었다.

<div class="real-analysis-statement" markdown="1">

**Exercise 2.6.**

같은 단위구간과 Lebesgue measure를 제한한 probability measure 위에서

$$
\xi(x)=2x^2,\qquad\eta(x)=1-|2x-1|
$$

일 때 $$E(\xi\mid\eta)$$를 구해 보자.

</div>

이번 $$\eta$$의 그래프는 $$1/2$$에서 꼭짓점을 갖는 삼각형 모양이다. $$\eta(x)=\eta(1-x)$$이므로 서로 대칭인 두 점이 같은 관측값을 준다. 따라서 $$h(\eta)$$ 형태로 잡은 conditional expectation도 이 대칭을 가져야 한다. 이 symmetry와 적분 조건을 함께 이용해 직접 계산해 보자. 이어서 다른 종류의 예를 하나 더 보자.

#### 함수의 모양 대신 joint density만 주어진 경우

<span id="l4:t10"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 2.7.**

두 random variable $$\xi,\eta$$의 joint density가

$$
f_{\xi,\eta}(x,y)=\begin{cases}
x+y,&(x,y)\in[0,1]^2,\\
0,&\text{그 밖의 경우}
\end{cases}
$$

일 때 $$E(\xi\mid\eta)$$를 구하자.

</div>

density는 음이 아니며 $$\int_0^1\int_0^1(x+y)\,dx\,dy=1$$이다. 앞의 예와 달리 random variable 자체의 구체적인 함수식은 주어지지 않았다. 그래도 joint distribution을 알면 계산할 수 있다.

바탕공간으로 Borel sigma-field와 Lebesgue measure를 제한한 probability measure를 갖는 단위정사각형을 생각할 수도 있다. 하지만 그때에도 $$\xi,\eta$$를 원래 공간의 좌표함수라고 가정한 것은 아니다. 여기서 density의 인수 $$x,y$$는 두 random variable의 *값*을 나타낸다. 계산에 사용할 것은 바탕공간의 직접적인 좌표가 아니라 주어진 joint distribution이다.

이번에도 $$E(\xi\mid\eta)=h(\eta)$$로 쓰고, 임의의 Borel set $$B\subset\mathbb R$$에 대한 사건 $$\{\eta\in B\}$$를 시험한다.

$$
\int_{\{\eta\in B\}}h(\eta)\,dP
=\int_{\{\eta\in B\}}\xi\,dP.
$$

두 적분을 joint density로 계산하여 $$h$$를 찾으면 된다.

#### 두 적분을 비교하여 함숫값 결정하기

<span id="l4:t11"></span>

먼저 왼쪽은 joint distribution에 대한 적분으로 바꾸면

$$
\begin{align*}
\int_{\{\eta\in B\}}h(\eta)\,dP
&=\int_B\int_{\mathbb R}h(y)f_{\xi,\eta}(x,y)\,dx\,dy\\
&=\int_{B\cap[0,1]}h(y)\left(\int_0^1(x+y)\,dx\right)dy\\
&=\int_{B\cap[0,1]}h(y)\left(\frac12+y\right)dy.
\end{align*}
$$

$$h(y)$$는 안쪽 적분의 변수 $$x$$에 의존하지 않으므로 밖으로 꺼냈다. density가 정사각형 밖에서 $$0$$이라는 사실 때문에 적분 범위도 제한된다. $$B$$가 실수 전체의 임의의 Borel set이라면 $$B\cap[0,1]$$을 써야 한다.

오른쪽에서는 $$\xi$$에 대응하는 $$x$$가 한 번 더 곱해진다.

$$
\begin{align*}
\int_{\{\eta\in B\}}\xi\,dP
&=\int_B\int_{\mathbb R}x f_{\xi,\eta}(x,y)\,dx\,dy\\
&=\int_{B\cap[0,1]}\left(\int_0^1x(x+y)\,dx\right)dy\\
&=\int_{B\cap[0,1]}\left(\frac13+\frac y2\right)dy.
\end{align*}
$$

여기서는 joint distribution에 대한 LOTUS와 반복적분을 사용했다. 후보를 유도할 때의 $$h(\eta)$$는 conditional expectation이어서 integrable하고, $$\xi$$도 $$0\leq\xi\leq1$$ a.s.이므로 integrable하다. 따라서 absolutely integrable한 함수의 반복적분을 허용하는 Fubini's theorem을 적용할 수 있다.

모든 $$B$$에 대해 두 적분이 같으므로, 차이의 양수·음수 level set을 시험하는 논증에 의해

$$
h(y)\left(\frac12+y\right)=\frac13+\frac y2
\quad\text{a.e. on }[0,1].
$$

이 구간에서는 분모가 양수이므로

$$
h(y)=\frac{\frac13+\frac y2}{\frac12+y}
=\frac{2+3y}{3(1+2y)}
\quad\text{a.e. on }[0,1]
$$

을 얻는다. 분모 $$\frac12+y$$는 joint density를 $$x$$에 대해 적분한 $$\eta$$의 marginal density이다. 이번에는 marginal density가 구간 전체에서 양수이므로 나누는 데 문제가 없다.

#### 새 후보의 검증과 다음 단계

<span id="l4:t12"></span>

실수 전체에서 정의된 함수로 만들기 위해

$$
h(y)=\begin{cases}
\dfrac{2+3y}{3(1+2y)},&0\leq y\leq1,\\[5pt]
0,&\text{그 밖의 경우}
\end{cases}
$$

로 정하고 $$Z=h(\eta)$$를 택하자. $$h$$는 Borel function이고 $$0\leq h\leq1$$이므로 $$Z$$는 $$\sigma(\eta)$$-measurable이며 integrable하다.

또한 $$y\in[0,1]$$에서 $$h(y)(\frac12+y)=\frac13+\frac y2$$가 성립하므로 방금 계산을 거꾸로 읽으면 모든 Borel set $$B$$에 대해

$$
\int_{\{\eta\in B\}}Z\,dP
=\int_{\{\eta\in B\}}\xi\,dP
$$

이다. 이러한 사건들이 $$\sigma(\eta)$$의 모든 원소이므로 둘째 조건까지 확인되었다. 따라서

$$
E(\xi\mid\eta)=h(\eta)\quad\text{a.s.}
$$

이다. $$\eta\in[0,1]$$ a.s.이므로 해당 구간에서는 위 유리식으로 값을 읽으면 된다.

앞의 예와 동일하게, 후보를 찾아낸 뒤에는 반드시 정의의 조건들을 확인했다. 교재의 다른 conditional expectation 계산 문제들도 이 순서를 연습하기에 좋다. 다음에는 관측변수 하나가 아니라 sigma-field 자체를 조건으로 주는 경우로 나아가자.

{% endraw %}

<!-- prettier-ignore-end -->

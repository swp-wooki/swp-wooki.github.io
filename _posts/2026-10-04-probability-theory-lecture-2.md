---
layout: post
title: "Probability Theory 2: Expectation and Independence"
date: 2026-10-04 12:02:00 +0900
description: "기댓값의 성질과 부등식, 조건부확률과 독립성을 다룬다."
tags: probability-theory lecture-notes
categories: probability-theory
giscus_comments: true
related_posts: true
toc:
  sidebar: left
last_updated: 2026-10-04
---

<!-- prettier-ignore-start -->

> 2026년 가을학기 확률론 강의노트이다. (Lecture 2)

[이번 회차 PDF]({{ '/assets/pdf/2026-fall/probability-theory/lecture_2.pdf' | relative_url }}) · [전체 강의노트 PDF]({{ '/assets/pdf/2026-fall/probability-theory/main.pdf' | relative_url }})

{% raw %}

#### probability space를 정보의 관점에서 다시 보기

<span id="l2:t01"></span>

지난 시간의 probability space $$(\Omega,\mathcal F,P)$$부터 다시 보자. 세 기호가 서로 다른 일을 한다. $$\Omega$$는 가능한 결과들을 모으고, sigma-field $$\mathcal F$$는 그 결과에 관해 물을 수 있는 사건들을 모은다. $$P$$는 그렇게 고른 각 사건에 $$0$$과 $$1$$ 사이의 확률을 붙인다.

sigma-field를 정보로 해석하면 그 정의도 자연스럽게 보인다. 사건 $$A$$가 일어났는지 알면 $$A^c$$가 일어났는지도 알 수 있다. 사건열 각각의 발생 여부를 알면 그중 적어도 하나가 일어났는지도 판단할 수 있다. 그래서 여집합과 countable union에 대해 닫혀 있도록 요구한다. $$\mathcal F$$는 우리가 결과에 관해 어떤 질문에 답할 수 있는지를 나타낸다.

#### density와 점프: 지난 distribution function 계산의 마무리

<span id="l2:t02"></span>

absolutely continuous distribution에서는 음이 아닌 Borel measurable 함수인 density $$f_\xi$$가 있어서

$$
P(\xi\in B)=\int_B f_\xi(x)\,dx,
\qquad F_\xi(x)=\int_{-\infty}^x f_\xi(t)\,dt
$$

로 계산한다. $$B=\mathbb R$$를 대입하면 density의 적분은 $$1$$이므로 $$f_\xi$$는 integrable하다. 그러나 integrable하다는 말과 연속이라는 말은 다르다. Exercise 1.5의 모든 점에서의 등식 $$F_\xi'=f_\xi$$에는 density의 연속성이라는 추가 조건이 있었다.

이제 Exercise 1.6의 discrete distribution을 보자. 서로 다른 값 $$x_i$$들이 전체 확률을 담고 있을 때,

$$
P(\xi\in B)=\sum_{i:x_i\in B}P(\xi=x_i)
$$

이다. 값의 개수는 유한할 수도, countably infinite일 수도 있다. 이 distribution에서 $$P(\xi=x_i)>0$$인 한 점은 probability mass를 담은 atom이라고 생각할 수 있다.

<div class="real-analysis-proof" markdown="1">

*Proof (Exercise 1.6의 증명).*

$$s<t$$를 고정하면 $$\{\xi\leq t\}$$는 서로소인 두 사건 $$\{\xi\leq s\}$$와 $$\{s<\xi\leq t\}$$로 나뉜다. 따라서

$$
F_\xi(t)-F_\xi(s)
=P(s<\xi\leq t)
=\sum_{i:s<x_i\leq t}P(\xi=x_i).
$$

오른쪽 끝 $$t$$는 포함되고 왼쪽 끝 $$s$$는 제외된다. 구간 $$(s,t]$$ 안에 양의 질량이 없다면 이 차이는 $$0$$이다.

이제 $$s_m\uparrow x_i$$이고 $$s_m<x_i$$인 수열을 잡는다. 그러면 $$\{\xi\leq s_m\}\uparrow\{\xi<x_i\}$$이므로 확률의 연속성에 의해

$$
F_\xi(x_i-)=P(\xi<x_i).
$$

결국

$$
F_\xi(x_i)-F_\xi(x_i-)
=P(\xi\leq x_i)-P(\xi<x_i)=P(\xi=x_i)
$$

이다.

</div>

즉, $$x_i$$ 직전까지 누적한 확률에 그 점의 질량이 추가되는 만큼 함수가 뛴다. density를 적분하는 경우와 point mass를 더하는 경우의 차이를 이 두 계산에서 볼 수 있다. discrete distribution이라고 해서 반드시 서로 떨어진 유한 개의 점만 생각할 필요는 없다. 방금 계산은 유한하거나 countable한 값의 모임에도 적용된다.

#### 여러 관측량을 함께 다루는 joint distribution

<span id="l2:t03"></span>

지금까지는 random variable 하나의 distribution을 보았다. 실제로는 여러 수치를 동시에 관측할 수도 있다. 이때는 한 실수 대신 실수의 순서쌍이나 순서 있는 묶음이 관측값이 된다.

<div class="real-analysis-statement" markdown="1">

**Definition (joint distribution).**

같은 probability space 위의 random variable $$\xi_1,\ldots,\xi_n$$의 joint distribution은

$$
P_{\xi_1,\ldots,\xi_n}(B)
=P\bigl((\xi_1,\ldots,\xi_n)\in B\bigr),
\qquad B\in\mathcal B(\mathbb R^n)
$$

로 정의되는 $$\mathbb R^n$$ 위의 probability measure이다.

</div>

첨자가 길어졌지만 정의의 방식은 같다. $$\mathbb R^n$$의 Borel set을 잡고, 관측한 묶음이 그 안에 들어가는 원래 결과들의 확률을 계산한다. 이 정의 자체에는 random variable들의 independence나 density의 존재를 가정하지 않는다.

#### expectation은 probability measure에 대한 적분이다

<span id="l2:t04"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (integrability와 expectation).**

random variable $$\xi$$에 대하여

$$
\xi\in L^1(\Omega,\mathcal F,P)
\quad\Longleftrightarrow\quad
\int_\Omega|\xi|\,dP<\infty
$$

로 쓴다. 이때

$$
E(\xi)=\int_\Omega\xi\,dP
$$

를 $$\xi$$의 expectation이라고 한다.

</div>

$$\xi$$에는 양수와 음수가 모두 나올 수 있다. 그 적분이 유한한 실수로 잘 정의되도록 절댓값의 적분이 유한하다는 조건을 둔다. 이 조건이면 양의 부분과 음의 부분의 적분이 모두 유한하므로 무한대끼리 빼는 문제가 생기지 않는다. 또

$$
|E(\xi)|\leq E(|\xi|)<\infty
$$

이다. random variable은 함수이지만, 그 expectation은 적분을 마친 하나의 실수이다.

<div class="real-analysis-statement" markdown="1">

**Example: indicator function과 simple function.**

사건 $$A\in\mathcal F$$의 indicator function은

$$
\mathbb1_A(\omega)=
\begin{cases}1,&\omega\in A,\\0,&\omega\notin A\end{cases}
$$

이다. 사건의 발생 여부를 $$1$$과 $$0$$으로 나타내는 random variable이다. $$P(A)\leq1$$이므로 항상 integrable하고,

$$
E(\mathbb1_A)=\int_\Omega\mathbb1_A\,dP
=\int_A1\,dP=P(A)
$$

이다. 일반적인 measure에서는 indicator function의 integrability에 집합의 유한 measure가 필요하지만, probability space에서는 자동으로 만족된다.

서로소인 사건 $$A_1,\ldots,A_n$$과 실수 $$a_i$$로 만든 simple function

$$
\eta=\sum_{i=1}^n a_i\mathbb1_{A_i}
$$

의 경우에는 적분의 linearity에 의해

$$
E(\eta)=\sum_{i=1}^n a_iP(A_i).
$$

각 구역에서 갖는 값에 그 구역의 확률을 곱해서 더한다. 유한 개의 값을 갖는 이러한 함수를 여기서는 step function이라고도 부른다.

</div>

#### distribution만 알고 expectation을 계산하는 방법

<span id="l2:t05"></span>

실제 문제에서는 $$\omega\mapsto\xi(\omega)$$의 구체적인 모습은 모르고 $$\xi$$의 distribution만 아는 경우가 많다. 그래도 $$h(\xi)$$의 expectation을 구할 수 있을까? 다음 공식이 그 일을 해 준다.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.7: LOTUS.**

Borel measurable function $$h:\mathbb R\to\mathbb R$$에 대해 $$h(\xi)\in L^1$$이면

$$
E(h(\xi))=\int_\mathbb R h(x)\,dP_\xi(x).
$$

이를 law of the unconscious statistician, 줄여서 LOTUS라고 부른다. 특히

$$
E(h(\xi))=
\begin{cases}
\displaystyle\int_\mathbb R h(x)f_\xi(x)\,dx,
&\text{density }f_\xi\text{가 있을 때},\\[6pt]
\displaystyle\sum_i h(x_i)P(\xi=x_i),
&\text{discrete distribution일 때}
\end{cases}
$$

이다.

</div>

왼쪽은 $$\Omega$$ 위의 함수 $$h\circ\xi$$를 $$P$$로 적분하고, 오른쪽은 실수축 위의 함수 $$h$$를 distribution $$P_\xi$$로 적분한다. 따라서 변환된 random variable $$h(\xi)$$의 distribution을 먼저 구하지 않아도 된다. 필요한 가정은 $$h(\xi)$$의 integrability이지, $$\xi$$의 integrability를 별도로 요구하는 것이 아니다. density가 존재할 때 쓰는 첫 계산식에도 density의 연속성은 필요하지 않다.

증명의 방법은 indicator function에서 시작하여 일반 함수로 넓혀 가는 것이다. 먼저 $$h=\mathbb1_B$$이면

$$
E(\mathbb1_B(\xi))=P(\xi\in B)=P_\xi(B)
=\int_\mathbb R\mathbb1_B\,dP_\xi
$$

이므로 정의에서 바로 성립한다. indicator function의 유한 linear combination에도 적분의 linearity로 성립한다. 음이 아닌 Borel function은 아래에서 증가하는 음이 아닌 simple function들로 근사할 수 있고, 이때 적분도 극한으로 수렴한다는 monotone convergence theorem을 적용한다. 마지막으로 일반적인 $$h$$는 양의 부분과 음의 부분으로 나눈다. $$h(\xi)$$의 absolute integrability 덕분에 양쪽 적분이 유한하여 뺄 수 있다. 근사를 만드는 전체 과정은 여기서 전개하지 않지만, 어느 단계에서 어떤 극한을 쓰는지는 기억해 두자.

#### variance를 정의하기 전에 확인할 것

<span id="l2:t06"></span>

평균으로부터 얼마나 떨어져 있는지를 제곱하여 평균내면 variance가 된다. 하지만 $$\xi$$를 적분할 수 있다고 해서 $$\xi^2$$도 적분할 수 있는 것은 아니다.

<div class="real-analysis-statement" markdown="1">

**Definition ($$L^2$$와 variance).**

$$
\xi\in L^2(\Omega,\mathcal F,P)
\quad\Longleftrightarrow\quad E(\xi^2)<\infty.
$$

이때 variance는

$$
\operatorname{var}(\xi)=E\bigl((\xi-E(\xi))^2\bigr)
=E(\xi^2)-(E(\xi))^2
$$

로 정의한다.

</div>

$$m=E(\xi)$$가 유한하면 두 번째 등식은

$$
E(\xi^2-2m\xi+m^2)=E(\xi^2)-2mE(\xi)+m^2
=E(\xi^2)-m^2
$$

라는 전개이다. 여기서 $$m$$은 random variable이 아니라 상수이고, 상수의 expectation은 그 상수이다.

여기서 한 가지를 먼저 확인해야 한다. $$L^2$$라는 가정만으로 $$m=E(\xi)$$가 유한하다고 말할 수 있을까? probability space에서는 $$L^2\subset L^1$$이므로 가능하다. 다음 부등식으로 이 포함관계를 확인하면, 방금 쓴 variance의 모든 항이 잘 정의된다는 점도 함께 해결된다.

#### Cauchy--Schwarz: 곱의 적분과 두 번째 moment

<span id="l2:t07"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.8: Cauchy--Schwarz.**

$$\xi,\eta\in L^2$$이면

$$
|E(\xi\eta)|^2\leq E(\xi^2)E(\eta^2).
$$

특히 $$E(\vert \xi\vert )\leq\sqrt{E(\xi^2)}$$이므로 $$L^2\subset L^1$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 왼쪽의 expectation이 정의되는지 확인해야 한다. 실수의 제곱이 음이 아니므로

$$
2|\xi\eta|\leq\xi^2+\eta^2.
$$

양변을 적분하면 오른쪽이 유한하여 $$\xi\eta\in L^1$$이다. 이 계산은 곱의 integrability를 보일 뿐, 아직 원하는 Cauchy--Schwarz 부등식을 주지는 않는다.

더 정확한 부등식을 얻기 위해 실수 $$t$$에 대한 함수

$$
q(t)=E((\xi-t\eta)^2)
=E(\xi^2)-2tE(\xi\eta)+t^2E(\eta^2)
$$

를 보자. 제곱의 적분이므로 모든 $$t$$에서 $$q(t)\geq0$$이다. $$E(\eta^2)>0$$이면 이 이차식의 판별식이 양수일 수 없으므로

$$
4(E(\xi\eta))^2-4E(\xi^2)E(\eta^2)\leq0
$$

이다. $$E(\eta^2)=0$$이면 $$q$$는 일차 이하의 식이다. 모든 실수 $$t$$에서 음이 아니려면 일차항의 계수도 $$0$$이어야 하므로 같은 결론을 얻는다.

마지막으로 $$\xi$$ 대신 $$\vert \xi\vert $$, $$\eta$$ 대신 상수함수 $$1$$을 대입하면

$$
(E(|\xi|))^2\leq E(\xi^2)E(1)=E(\xi^2).
$$

제곱근을 취하면 원하는 포함관계가 나온다.

</div>

이 포함관계에서 전체 공간의 크기를 사용했다. 일반적인 유한 measure $$\mu$$라면 오른쪽에 $$\sqrt{\mu(\Omega)}$$라는 인자가 더 붙는다. 반면 실수 전체의 Lebesgue measure는 무한하므로 같은 논리로 $$L^2(\mathbb R)\subset L^1(\mathbb R)$$라고 말할 수 없다. 전체 크기가 정확히 $$1$$인 것은 지금 부등식의 상수에 영향을 주며, 포함관계에는 전체 measure의 유한성이 핵심이다. 다른 $$L^p$$ 사이의 관계도 관심이 있으면 따로 살펴볼 만하다.

#### tail probability를 적분하여 두 번째 moment 구하기

<span id="l2:t08"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.9: tail integral formula.**

음이 아닌 random variable $$\eta$$에 대해

$$
E(\eta^2)=2\int_0^\infty tP(\eta>t)\,dt.
$$

양변이 무한대인 경우도 허용하는 음이 아닌 적분의 등식이다.

</div>

앞에서는 유한한 expectation을 위해 $$L^1$$을 가정했다. 여기서는 음이 아닌 함수의 적분이므로 $$+\infty$$도 허용할 수 있다. 양의 무한대와 음의 무한대를 빼는 상황이 아니기 때문이다. 이 공식을 쓰기 전에 $$E(\eta^2)<\infty$$를 가정할 필요는 없다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 결과 $$\omega$$를 하나 고정해 보자. $$a=\eta(\omega)$$는 이제 음이 아닌 실수이다. 따라서

$$
\int_0^\infty2t\mathbb1_{\{a>t\}}\,dt
=\int_0^a2t\,dt=a^2.
$$

$$a$$ 이전에는 indicator function이 $$1$$이고 이후에는 $$0$$이다. 경계 한 점은 적분에 영향을 주지 않는다. 즉, 각각의 $$\omega$$에서

$$
\eta(\omega)^2=\int_0^\infty2t\mathbb1_{\{\eta(\omega)>t\}}\,dt
$$

라는 점별 등식이 성립한다.

이제 expectation을 취하면 $$\omega$$와 $$t$$에 대한 이중적분이 된다. 여기서 쓰는 **Tonelli's theorem**은 음이 아닌 measurable function의 반복적분 순서를 바꿀 수 있다는 정리이다. 현재 $$P$$는 유한 measure이고 $$dt$$는 $$[0,\infty)$$ 위의 Lebesgue measure이다. $$\eta$$가 measurable이므로 $$\{(\omega,t):t<\eta(\omega)\}$$도 measurable이며, 적분함수는 음이 아니다. 따라서

$$
\begin{align*}
E(\eta^2)
&=\int_\Omega\int_0^\infty2t\mathbb1_{\{\eta>t\}}\,dt\,dP\\
&=\int_0^\infty2t\left(\int_\Omega\mathbb1_{\{\eta>t\}}\,dP\right)dt\\
&=2\int_0^\infty tP(\eta>t)\,dt.
\end{align*}
$$

마지막 줄에서는 indicator function의 expectation이 그 사건의 확률이라는 계산을 사용했다.

</div>

이것을 coarea formula의 확률적 형태로 볼 수 있다. $$\eta^2$$를 직접 적분하는 대신, 각각의 높이 $$t$$를 넘을 확률을 모아 같은 양을 계산한다. 교재의 긴 풀이 대신 적분 순서 교환을 사용하면 이처럼 짧아진다. 더 일반적으로 $$p>0$$이면 같은 방법으로

$$
E(\eta^p)=p\int_0^\infty t^{p-1}P(\eta>t)\,dt
$$

를 얻는다. 지금은 제곱의 경우를 중심으로 기억하자. 이 공식은 뒤의 4장에서 최대값에 관한 $$L^2$$ 부등식을 다룰 때 다시 사용하게 된다.

### 1.3 conditional probability와 independence

#### 새 정보를 얻으면 확률을 어떻게 바꿀까?

<span id="l2:t09"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (conditional probability).**

사건 $$A,B\in\mathcal F$$와 $$P(B)>0$$에 대해

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

를 $$B$$가 주어졌을 때 $$A$$의 conditional probability라고 한다.

</div>

$$B$$가 일어났다고 알게 되면 고려할 결과들은 $$B$$ 안에 있다. 따라서 $$A$$에서도 $$B$$ 안에 있는 부분 $$A\cap B$$만 남기고, 남은 전체인 $$B$$의 확률이 $$1$$이 되도록 $$P(B)$$로 나눈다. 교집합은 정보를 반영해 범위를 제한하고, 분모는 다시 정규화하는 역할을 한다.

분모 때문에 $$P(B)>0$$이 필요하다. 또 조건의 방향을 바꾸면 다른 질문이 된다. 일반적으로

$$
P(A\mid B)\neq P(B\mid A)
$$

이며, 두 식을 모두 정의하려면 각각의 분모가 양수여야 한다. 두 식의 분자는 같아도 분모는 다르다.

#### sample space를 나누어 확률을 계산하기

<span id="l2:t10"></span>

<div class="real-analysis-statement" markdown="1">

**Exercise 1.10: law of total probability.**

서로소인 사건 $$B_1,B_2,\ldots$$가 $$\bigcup_nB_n=\Omega$$를 만족하고 $$P(B_n)>0$$이면

$$
P(A)=\sum_{n\geq1}P(A\mid B_n)P(B_n).
$$

</div>

전체 결과를 서로 겹치지 않는 경우들로 나누었다. 각 경우 안에서의 확률을 구하고 그 경우 자체의 확률로 가중하여 더하는 것이다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$A=\bigcup_n(A\cap B_n)$$이고 이 합집합은 서로소이다. 그러므로 countable additivity와 conditional probability의 정의를 차례로 적용하면

$$
P(A)=\sum_nP(A\cap B_n)
=\sum_nP(A\mid B_n)P(B_n)
$$

이다.

</div>

모든 $$B_n$$이 전체를 덮는다는 조건과 서로소라는 조건이 각각 어디에 쓰였는지 확인해 보자. 이 계산에는 사건들의 independence가 필요하지 않다.

#### 조건의 방향을 뒤집는 Bayes' formula

<span id="l2:t11"></span>

<div class="real-analysis-statement" markdown="1">

**Remark: Bayes' rule.**

위 분할 조건 아래 $$P(A)>0$$이면

$$
P(B_j\mid A)
=\frac{P(A\mid B_j)P(B_j)}{\sum_{n\geq1}P(A\mid B_n)P(B_n)}.
$$

</div>

앞에서는 $$B_n$$을 조건으로 $$A$$를 보았다. 이번에는 $$A$$를 알게 된 뒤 어느 $$B_j$$에 해당하는지를 묻는다. 증명은 정의로 돌아가면 짧다.

$$
P(B_j\mid A)=\frac{P(A\cap B_j)}{P(A)}.
$$

분자는 $$P(A\mid B_j)P(B_j)$$이고, 분모는 방금 얻은 law of total probability로 표현된다. 그래서 위 식을 얻는다. 짧은 대수 계산이지만, 어떤 정보를 조건으로 삼는지를 바꾸어 준다는 의미가 있다.

#### independence는 모든 부분모임에 대한 조건이다

<span id="l2:t12"></span>

이제 사건의 independence에서 시작해 random variable의 independence로, 나아가 sigma-field의 independence로 개념을 넓혀 가자.

<div class="real-analysis-statement" markdown="1">

**Definition (사건들의 independence).**

두 사건 $$A,B$$가

$$
P(A\cap B)=P(A)P(B)
$$

를 만족하면 independent라고 한다. $$A_1,\ldots,A_n$$이 independent라는 것은 모든 $$1\leq k\leq n$$과 서로 다른 첨자 $$i_1,\ldots,i_k$$에 대해

$$
P(A_{i_1}\cap\cdots\cap A_{i_k})
=\prod_{j=1}^kP(A_{i_j})
$$

가 성립한다는 뜻이다.

</div>

여기서는 전체 $$n$$개를 한꺼번에 교차한 식 하나만 확인해서는 안 된다. 두 개씩 골라 확인하는 pairwise independence만으로도 부족하다. 임의의 부분모임을 골라도 곱의 등식이 성립해야 한다. 이처럼 모든 부분모임을 확인한다는 점에서 전체 모임의 independence가 더 강한 조건이다.

<div class="real-analysis-statement" markdown="1">

**Exercise 1.11.**

$$P(B)>0$$이면

$$
A,B\text{가 independent}\quad\Longleftrightarrow\quad P(A\mid B)=P(A).
$$

</div>

실제로 $$P(A\cap B)/P(B)=P(A)$$의 양변에 $$P(B)$$를 곱하면 정의의 식이 나온다. 따라서 “$$B$$를 알게 되어도 $$A$$의 확률이 바뀌지 않는다”는 해석이 정확해진다. 이것은 확률에 관한 설명이며, 별도의 인과관계를 단정하는 정의는 아니다.

#### random variable의 independence와 expectation의 곱

<span id="l2:t13"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (random variable들의 independence).**

모든 Borel set $$A,B\subset\mathbb R$$에 대해

$$
P(\eta\in A,\xi\in B)=P(\eta\in A)P(\xi\in B)
$$

이면 random variable $$\eta,\xi$$가 independent라고 한다. 유한한 모임에서는 모든 Borel set의 선택에 대해 대응하는 사건들이 independent이어야 하며, 임의의 모임에서는 모든 유한 부분모임이 independent이어야 한다.

</div>

쉼표는 두 조건을 동시에 만족한다는 뜻이다. 왼쪽은 $$\{\eta\in A\}\cap\{\xi\in B\}$$의 확률이다. 이렇게 random variable의 independence를 사건들의 independence로 정의한다.

<div class="real-analysis-statement" markdown="1">

**Proposition 1.1.**

$$\xi_1,\ldots,\xi_n\in L^1$$이 independent이고 $$\xi_1\cdots\xi_n\in L^1$$이면

$$
E(\xi_1\cdots\xi_n)=\prod_{i=1}^nE(\xi_i).
$$

특히 independent인 $$\xi,\eta\in L^2$$에 대해서는

$$
E(\xi\eta)=E(\xi)E(\eta)
$$

가 성립하며, 이들을 uncorrelated라고 한다.

</div>

independence가 있으면 곱의 expectation을 각 expectation의 곱으로 분리할 수 있다. expectation 기호만 보고 언제나 이렇게 분리해도 된다고 생각해서는 안 된다. 여기서는 필요한 integrability와 independence를 함께 확인한다. 특히 $$L^2$$인 두 변수의 경우에는 앞의 부등식에서 각 변수와 곱의 integrability를 이미 확보했다.

증명의 기본 출발점도 indicator function이다. independent인 사건들 $$A_i$$에 대해

$$
E\left(\prod_i\mathbb1_{A_i}\right)
=P\left(\bigcap_i A_i\right)
=\prod_iP(A_i)=\prod_iE(\mathbb1_{A_i}).
$$

각 변수의 Borel function으로 만든 simple function들에는 이 식과 linearity를 적용한다. 음이 아닌 변수는 증가하는 simple function으로 근사해 monotone convergence theorem을 쓰고, 부호가 있는 변수는 양의 부분과 음의 부분으로 나누어 전개한다. integrability는 마지막에 유한한 expectation들을 더하고 빼도록 해 준다. 상세한 근사 구성은 생략하지만, independence가 실제로 쓰이는 출발점은 위 사건 교집합의 확률을 곱으로 바꾸는 단계이다.

{% endraw %}

<!-- prettier-ignore-end -->

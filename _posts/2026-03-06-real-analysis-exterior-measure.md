---
layout: post
title: "Real Analysis 2: Exterior Measure"
date: 2026-03-06 12:00:00 +0900
description: "외측도의 정의와 단조성, 가산 준가법성, 열린집합에 의한 근사를 다룬다."
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

### 1.2. The exterior measure

**Exterior measure의 정의**

<span id="l01:exterior"></span>

<div class="real-analysis-statement" markdown="1">

**Definition (Exterior measure).**

임의의 $$E\subset\mathbb R^d$$에 대해

$$
m_*(E)=\inf\left\{\sum_{j=1}^{\infty}|Q_j|:
E\subset\bigcup_{j=1}^{\infty}Q_j,\ Q_j\text{는 closed cube}\right\}
$$

로 정의한다. 따라서 $$m_*:\mathcal P(\mathbb R^d)\to[0,\infty]$$이다.

</div>

덮개는 almost disjoint일 필요가 없다. cube들이 서로 많이 겹쳐도 허용한다. 우리가 계산하는 양은 합집합의 아직 정의되지 않은 부피가 아니라 *각 cube의 부피를 모두 더한 값*이다. 겹치는 부분이 있다면 그만큼 반복해서 계산된다. 가능한 모든 덮개의 부피 합을 모은 집합을

$$
Z_E=\left\{\sum_j|Q_j|:E\subset\bigcup_jQ_j\right\}
$$

라고 하면 $$m_*(E)=\inf Z_E$$이다. 즉 덮개를 만드는 데 들어가는 부피의 가장 작은 가능한 하한을 잡는다. 최솟값을 달성하는 덮개가 있어야 한다는 요구는 없다.

$$\mathbb R^d$$ 자체를 정수 격자 cube들로 덮을 수 있으므로 $$Z_E$$는 비어 있지 않다. 모든 항이 음이 아니므로 infimum은 $$[0,\infty]$$에서 존재한다. 모든 덮개가 무한한 부피 합을 갖는다면 $$m_*(E)=\infty$$이다. 여기서 $$[0,\infty]$$는 음이 아닌 extended real numbers이고, 일반적인 extended real line은 $$[-\infty,\infty]$$이다.

Closed rectangle를 대신 사용해도 같은 exterior measure를 얻는다. Cube는 rectangle의 특수한 경우이며, 반대로 rectangle를 작은 cube들로 덮되 경계 근처의 낭비를 임의로 작게 할 수 있기 때문이다. Ball을 이용한 구성도 가능하지만 그 동등성은 더 많은 기하학적 논증을 요구한다. 지금은 cube covering을 일관되게 사용한다.

모든 집합에 $$m_*$$가 정의되었다고 해서 원하는 부피 이론이 완성된 것은 아니다. 목표는 disjoint한 집합들의 부피를 더하면 합집합의 부피가 되는 measure이다. Exterior measure는 임의의 집합에서 이 성질을 만족하지 않을 수 있다. 다음에는 좋은 성질을 가진 집합들을 골라 Lebesgue measure의 정의역으로 삼는다.

**정의와 익숙한 부피가 일치하는가?**

<span id="l01:cube-volume"></span>

<div class="real-analysis-statement" markdown="1">

**Example 1.**

$$m_*(\varnothing)=0$$이며 모든 $$x\in\mathbb R^d$$에 대해 $$m_*(\{x\})=0$$이다.

</div>

한 점은 변 길이가 $$0$$인 cube로 덮을 수 있다. 퇴화한 cube를 사용하지 않더라도 임의로 작은 cube로 덮으면 부피 합을 $$0$$에 가깝게 만들 수 있다. 빈 집합도 그 덮개로 덮인다. Exterior measure가 음이 아니므로 두 값 모두 $$0$$이다.

<div class="real-analysis-statement" markdown="1">

**Example 2.**

Closed cube $$Q$$에 대해 $$m_*(Q)=\vert Q\vert $$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$Q$$ 자체를 하나의 덮개로 사용하면 $$m_*(Q)\le\vert Q\vert $$이다. 반대 부등식은 모든 covering $$Q\subset\bigcup_{j=1}^{\infty}Q_j$$에 대해

$$
|Q|\le\sum_{j=1}^{\infty}|Q_j|
$$

를 보이면 된다. 오른쪽이 무한대이면 이 부등식은 이미 성립하므로 유한한 경우를 생각하자.

왜 유한 covering에 대한 Lemma 1.2를 바로 적용할 수 없는가? 지금 덮개에는 countable하게 많은 cube가 있고, closed covering에는 compactness의 유한 부분 덮개 성질을 직접 적용할 수 없기 때문이다. 각 $$Q_j$$를 조금 키워 open cube $$S_j$$로 만들자. 주어진 $$\epsilon>0$$에 대해

$$
Q_j\subset S_j,\qquad |S_j|\le |Q_j|+\epsilon2^{-j}
$$

가 되게 할 수 있다. 각 cube의 부피가 변 길이에 연속적으로 의존하므로 가능한 선택이다. 이 형태는 $$\vert Q_j\vert =0$$인 경우에도 적용된다.

$$Q$$는 compact이고 $$\{S_j\}$$는 열린 덮개이므로 유한한 지표 집합 $$J$$에 대해 $$Q\subset\bigcup_{j\in J}S_j$$이다. 각 $$S_j$$를 그 closure로 바꾸어 Lemma 1.2를 적용하면

$$
|Q|\le\sum_{j\in J}|S_j|
\le\sum_{j=1}^{\infty}|Q_j|+\epsilon\sum_{j\in J}2^{-j}
\le\sum_{j=1}^{\infty}|Q_j|+\epsilon.
$$

양쪽에서 $$\epsilon$$ 이외의 양은 고정되어 있으므로 $$\epsilon\downarrow0$$을 취한다. 모든 covering의 부피 합이 $$\vert Q\vert $$ 이상이므로 그 infimum도 $$\vert Q\vert $$ 이상이다.

</div>

이 증명의 구조를 기억하자. Countable closed covering을 약간 키워 open covering으로 바꾸고, compactness로 유한 covering을 얻은 뒤, 이미 아는 유한 부피 계산을 적용했다. 이제 open cube, rectangle, Cantor set에서도 같은 정의가 어떤 값을 주는지 살펴볼 수 있다.

**Open cube에서는 경계가 부피를 바꾸지 않는다**

<span id="l02:open"></span>

Exterior measure는 집합을 closed cube들로 덮고 그 부피 합의 infimum을 취하여 정의했다. 한 점과 빈 집합의 exterior measure는 $$0$$이며, closed cube $$Q$$에서는 $$m_*(Q)=\vert Q\vert $$임을 보았다. 이번에는 open cube를 생각하자. 경계를 붙이거나 떼어도 부피가 같을 것이라는 직관은 cube에서는 옳다. 그러나 모든 열린 집합에서 closure를 취해도 measure가 같다고 일반화해서는 안 된다. 열린 집합의 경계가 양의 measure를 가질 수도 있기 때문이다.

<div class="real-analysis-statement" markdown="1">

**Example 3: Open cube.**

Open cube $$Q\subset\mathbb R^d$$에 대해 $$m_*(Q)=\vert Q\vert $$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$Q\subset\overline Q$$이고 $$\overline Q$$는 closed cube이다. 큰 집합을 덮는 cube들은 작은 집합도 덮으므로

$$
m_*(Q)\le m_*(\overline Q)=|\overline Q|=|Q|.
$$

반대 방향은 안쪽에서 근사한다. $$\epsilon>0$$이 주어지면 $$Q_0\subset Q$$인 closed cube를 충분히 크게 잡아 $$\vert Q_0\vert \ge\vert Q\vert -\epsilon$$이 되게 한다. 그러면

$$
|Q|-\epsilon\le |Q_0|=m_*(Q_0)\le m_*(Q).
$$

$$Q_0$$는 $$\epsilon$$에 따라 달라져도 마지막 부등식의 양끝 $$\vert Q\vert $$와 $$m_*(Q)$$는 달라지지 않는다. 따라서 모든 $$\epsilon>0$$에 대한 부등식에서 $$\epsilon\downarrow0$$을 취할 수 있다.

</div>

**Rectangle의 경계 오차를 세어 보자**

<span id="l02:rectangles"></span>

<div class="real-analysis-statement" markdown="1">

**Example 4: Rectangle.**

Closed rectangle $$R\subset\mathbb R^d$$에 대해 $$m_*(R)=\vert R\vert $$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

먼저 임의의 cube covering $$R\subset\bigcup_jQ_j$$를 취한다. 앞의 closed cube 증명에서처럼 각 $$Q_j$$를 부피 증가량이 $$\epsilon2^{-j}$$ 이하인 open cube로 키우고, $$R$$의 compactness를 사용하여 유한 covering을 얻는다. Rectangle에 대한 Lemma 1.2를 적용하면 $$\vert R\vert \le\sum_j\vert Q_j\vert +\epsilon$$이다. $$\epsilon\downarrow0$$ 및 모든 covering에 대한 infimum으로

$$
|R|\le m_*(R)
$$

를 얻는다. Rectangle 자체가 cube가 아닐 수 있으므로 반대 방향은 별도의 covering을 만들어야 한다.

$$k\in\mathbb N$$에 대해 변 길이 $$1/k$$인 $$k^{-1}\mathbb Z^d$$ 격자를 사용한다. $$R$$ 안에 완전히 들어가는 cube들의 모임을 $$\mathcal Q_k$$, $$R$$과 $$R^c$$를 모두 만나는 cube들의 모임을 $$\mathcal Q'_k$$라고 하자. $$R$$과 만나지 않는 cube는 버린다. 그러면

$$
R\subset\bigcup_{Q\in\mathcal Q_k\cup\mathcal Q'_k}Q.
$$

안쪽 cube들은 almost disjoint이고 $$R$$에 포함되므로 유한 격자 부피 계산에 의해

$$
\sum_{Q\in\mathcal Q_k}|Q|\le|R|.
$$

이제 경계 cube들의 낭비를 제어한다. $$R$$의 한 면은 $$(d-1)$$개의 좌표 방향으로 유한한 길이를 가진다. 그 면에 닿는 격자 cube의 수는 각 방향에서 $$O(k)$$개씩이므로 $$O(k^{d-1})$$개다. 면이 $$2d$$개뿐이므로 전체 경계 cube 수도 $$O(k^{d-1})$$이다. 각 cube의 부피는 $$k^{-d}$$이므로

$$
\sum_{Q\in\mathcal Q'_k}|Q|=O(k^{d-1})k^{-d}=O(k^{-1}).
$$

여기서 $$O(k^{-1})$$는 $$k$$와 무관하고 $$R,d$$에만 의존하는 상수 $$C$$를 사용하여 $$C/k$$ 이하로 제어된다는 뜻이다. 따라서

$$
m_*(R)\le\sum_{Q\in\mathcal Q_k\cup\mathcal Q'_k}|Q|
\le|R|+\frac Ck.
$$

모든 $$k$$에 대해 성립하므로 $$k\to\infty$$로 보내면 $$m_*(R)\le\vert R\vert $$이다. 변의 길이가 $$0$$인 rectangle도 해당 면 근처의 cube들로 덮이며 같은 오차 추정으로 exterior measure가 $$0$$임을 얻는다.

</div>

말로는 “rectangle의 부피와 같다”라는 간단한 명제지만, 정의가 cube covering을 사용하기 때문에 경계의 오차가 사라진다는 사실을 확인해야 했다.

**Unbounded set과 Cantor set**

<span id="l02:unbounded"></span>

<div class="real-analysis-statement" markdown="1">

**Example 5.**

$$m_*(\mathbb R^d)=\infty$$이다.

</div>

임의의 큰 cube $$Q\subset\mathbb R^d$$에 대해 $$\vert Q\vert =m_*(Q)\le m_*(\mathbb R^d)$$이다. 왼쪽을 임의로 크게 만들 수 있으므로 오른쪽은 무한대여야 한다. 반대로 유계 집합은 유한한 cube 하나에 들어가므로 exterior measure가 유한하다. 따라서 무한한 exterior measure를 가진 집합은 unbounded다. 그러나 unbounded라고 반드시 무한한 measure를 갖지는 않는다. 흩어진 작은 집합들의 부피 합이 유한하거나 $$0$$일 수 있다.

<div class="real-analysis-statement" markdown="1">

**Cantor set.**

<span id="l02:cantor"></span>

$$C_0=[0,1]$$에서 시작하여 매 단계 남아 있는 각 구간의 가운데 열린 삼분의 일을 제거하자. 그 결과를 $$C_k$$라 하고 $$C=\bigcap_{k=0}^{\infty}C_k$$로 놓으면 $$m_*(C)=0$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$k$$단계에는 길이 $$3^{-k}$$인 closed interval이 $$2^k$$개 남는다. $$C\subset C_k$$이므로 이 구간들은 $$C$$의 covering이다. 따라서 정의만으로

$$
0\le m_*(C)\le 2^k3^{-k}=\left(\frac23\right)^k
$$

이다. 왼쪽은 $$k$$와 무관하고 오른쪽은 $$0$$으로 수렴하므로 $$m_*(C)=0$$이다. 여기서는 감소하는 집합열의 measure가 극한에서 보존된다는 정리를 사용하지 않았다. 각 단계에서 유효한 covering 하나를 제시한 것뿐이다.

</div>

**Infimum이 주는 covering과 monotonicity**

<span id="l02:infimum"></span>

<div class="real-analysis-statement" markdown="1">

**Observation 0.**

$$m_*(E)<\infty$$이고 $$\epsilon>0$$이면 어떤 countable closed-cube covering이

$$
E\subset\bigcup_jQ_j,\qquad
m_*(E)\le\sum_j|Q_j|\le m_*(E)+\epsilon
$$

를 만족한다.

</div>

모든 covering의 합은 infimum 이상이다. 반면 infimum에 임의로 가까운 covering이 존재한다는 것이 오른쪽 부등식이다. 이 두 사실을 구별해야 한다. “모든 covering의 합이 infimum 이상이다”라는 말만으로 어떤 covering이 infimum에 가까운지는 알 수 없다. $$m_*(E)=\infty$$이면 모든 covering의 합이 무한대이며, 뒤의 근사 증명에서는 이 경우를 먼저 따로 처리한다.

<div class="real-analysis-statement" markdown="1">

**Observation 1: Monotonicity.**

<span id="l02:monotone"></span>

$$E_1\subset E_2$$이면 $$m_*(E_1)\le m_*(E_2)$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E_2$$의 모든 covering은 $$E_1$$의 covering이기도 하다. 따라서 $$E_1$$에 허용되는 covering의 선택지가 더 많다. 더 큰 선택지의 집합에서 infimum을 취하면 값은 작아지거나 같으므로 부등식이 성립한다. 서로 임의로 선택한 두 covering의 부피 합끼리 비교하는 논증이 아니라, *허용되는 covering들의 모임*을 비교하는 논증이다.

</div>

**Countable subadditivity와 오차의 배분**

<span id="l02:subadditive"></span>

<div class="real-analysis-statement" markdown="1">

**Observation 2: Countable subadditivity.**

$$E\subset\bigcup_{j=1}^{\infty}E_j$$이면

$$
m_*(E)\le\sum_{j=1}^{\infty}m_*(E_j).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

오른쪽이 무한대이면 성립하므로 $$\sum_jm_*(E_j)<\infty$$라 하자. 주어진 $$\epsilon>0$$에 대해 각 $$E_j$$의 covering을 고르되 오차를 똑같이 $$\epsilon$$씩 주지 않고 $$2^{-j}\epsilon$$씩 배분한다.

$$
E_j\subset\bigcup_{k=1}^{\infty}Q_{k,j},\qquad
\sum_k|Q_{k,j}|\le m_*(E_j)+2^{-j}\epsilon.
$$

지표 $$j$$는 어떤 집합을 덮는지, $$k$$는 그 covering 안에서 어떤 cube인지를 나타낸다. 모든 $$Q_{k,j}$$를 합치면 $$E$$를 덮는다. $$\mathbb N^2$$가 countable이므로 이것도 정의에 허용되는 countable covering이다. 따라서

$$
m_*(E)\le\sum_{j,k}|Q_{k,j}|
\le\sum_j\bigl(m_*(E_j)+2^{-j}\epsilon\bigr)
=\sum_jm_*(E_j)+\epsilon.
$$

합의 항들이 모두 음이 아니므로 이중합은 유한 부분합들의 supremum으로 정의되며, 합을 묶거나 순서를 바꾸어도 값이 같다. 마지막으로 $$\epsilon\downarrow0$$을 취한다.

</div>

오차를 geometric series로 배분한 이유가 이제 보인다. Countable하게 많은 근사를 동시에 사용해도 전체 오차가 $$\epsilon$$ 이하로 남아야 한다.

**Open set으로 밖에서 근사하기**

<span id="l02:outer"></span>

<div class="real-analysis-statement" markdown="1">

**Observation 3.**

모든 $$E\subset\mathbb R^d$$에 대해

$$
m_*(E)=\inf\{m_*(O):E\subset O,\ O\text{는 열린 집합}\}.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

Monotonicity에 의해 $$E\subset O$$이면 $$m_*(E)\le m_*(O)$$이다. 따라서 왼쪽은 오른쪽 infimum 이하이다. $$m_*(E)=\infty$$인 경우에는 이것으로 양쪽이 모두 무한대임을 안다.

이제 $$m_*(E)<\infty$$라 하자. $$\epsilon>0$$을 고정하고

$$
E\subset\bigcup_jQ_j,\qquad \sum_j|Q_j|\le m_*(E)+\epsilon/2
$$

인 closed-cube covering을 선택한다. 이 합집합은 일반적으로 열려 있지 않으므로 각 cube를 조금 키워 open cube $$S_j$$를 만들되

$$
Q_j\subset S_j,\qquad |S_j|\le|Q_j|+\frac{\epsilon}{2^{j+1}}
$$

가 되게 한다. $$S_j$$는 $$Q_j$$의 내부가 아니라 $$Q_j$$를 포함하는 *더 큰* open cube다. $$O=\bigcup_jS_j$$는 열린 집합이고 $$E\subset O$$이다. Open cube의 exterior measure를 계산한 결과와 countable subadditivity로

$$
\begin{align*}
m_*(O)&\le\sum_j|S_j|
\le\sum_j|Q_j|+\sum_{j=1}^{\infty}\frac{\epsilon}{2^{j+1}}\\
&\le m_*(E)+\epsilon/2+\epsilon/2
=m_*(E)+\epsilon.
\end{align*}
$$

따라서 오른쪽 infimum도 $$m_*(E)$$ 이하이다.

</div>

이 명제는 *모든 집합*에 성립한다. 열린 집합의 exterior measure라는 숫자를 $$m_*(E)$$에 가깝게 만들었다. 그러나 아직 $$O\setminus E$$ 자체의 크기를 작게 만들었다고 말한 것은 아니다.

**거리 조건이 있으면 additivity를 얻는다**

<span id="l02:separated"></span>

<div class="real-analysis-statement" markdown="1">

**Observation 4.**

두 비어 있지 않은 집합 $$E_1,E_2\subset\mathbb R^d$$가

$$
\operatorname{dist}(E_1,E_2)
=\inf\{|x-y|:x\in E_1,\ y\in E_2\}>0
$$

를 만족하면

$$
m_*(E_1\cup E_2)=m_*(E_1)+m_*(E_2)
$$

이다. 한 집합이 비어 있는 경우에도 등식은 성립한다.

</div>

Disjoint와 positive distance는 다르다. 예를 들어 $$(0,1)$$과 $$(1,2)$$는 만나지 않지만 서로 임의로 가까운 점들을 가지므로 거리는 $$0$$이다. 이 예에서는 additivity가 성립하지만, 그 사실을 임의의 두 disjoint 집합으로 확대할 수는 없다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E=E_1\cup E_2$$로 놓자. $$m_*(E)\le m_*(E_1)+m_*(E_2)$$는 subadditivity이다. 한 $$m_*(E_i)$$가 무한대이면 monotonicity에 의해 $$m_*(E)=\infty$$여서 등식이 성립한다. 나머지 경우에는 subadditivity에 의해 $$m_*(E)<\infty$$이다.

$$\delta=\operatorname{dist}(E_1,E_2)/2>0$$으로 놓고 $$E$$의 covering을 선택하여

$$
\sum_j|Q_j|\le m_*(E)+\epsilon
$$

이 되게 한다. 각각의 cube를 유한 개의 작은 cube로 분할하여 모든 지름이 $$\delta$$보다 작게 할 수 있다. 유한 almost disjoint 분할은 부피 합을 보존하므로 위 추정은 유지된다. 새 covering도 countable이며 다시 $$\{Q_j\}$$라 쓰자.

이제 한 cube가 $$E_1$$과 $$E_2$$를 모두 만날 수 없다. 그렇다면 그 cube 안에 두 집합의 점이 하나씩 있어 두 점의 거리가 $$\delta$$보다 작아지고, 집합 사이 거리의 정의에 모순되기 때문이다. 따라서

$$
J_i=\{j:Q_j\cap E_i\ne\varnothing\},\qquad i=1,2
$$

는 서로 disjoint인 지표 집합이다. 어느 집합도 만나지 않는 cube는 무시해도 된다. 각 $$E_i$$는 $$j\in J_i$$인 cube들로 덮이므로

$$
m_*(E_1)+m_*(E_2)
\le\sum_{j\in J_1}|Q_j|+\sum_{j\in J_2}|Q_j|
\le\sum_j|Q_j|\le m_*(E)+\epsilon.
$$

$$\epsilon\downarrow0$$으로 원하는 반대 부등식을 얻는다.

</div>

유한 개의 집합이 쌍마다 positive distance를 가지면 이 논증을 반복하여 finite additivity를 얻는다. 유한 모임에서는 여러 거리의 최솟값도 양수이므로 한 집합과 나머지 유한 합집합 사이에도 양의 간격이 남는다.

**Almost disjoint cube들의 countable additivity**

<span id="l02:cubes"></span>

<div class="real-analysis-statement" markdown="1">

**Observation 5.**

Almost disjoint closed cube들에 대해

$$
m_*\left(\bigcup_{j=1}^{\infty}Q_j\right)=\sum_{j=1}^{\infty}|Q_j|.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E=\bigcup_jQ_j$$라 하자. $$\le$$ 방향은 subadditivity이다. $$\ge$$를 보이려면 cube들을 조금 줄여 서로 실제로 떨어지게 한다. 부피 $$0$$인 cube는 오른쪽 합에 기여하지 않으며 countable union도 exterior measure $$0$$이므로 제외해도 된다. 나머지 cube마다

$$
\widetilde Q_j\subset\operatorname{int}Q_j,\qquad
|\widetilde Q_j|\ge|Q_j|-\epsilon2^{-j}
$$

인 closed cube를 고른다.

서로 다른 $$\widetilde Q_j$$는 원래 cube의 내부 안으로 들어갔기 때문에 서로 떨어져 있다. 하지만 countable하게 많은 집합에 앞의 *finite* additivity를 곧바로 적용해서는 안 된다. 먼저 $$N$$을 고정하여 유한 모임에 적용한다.

$$
m_*(E)\ge m_*\left(\bigcup_{j=1}^N\widetilde Q_j\right)
=\sum_{j=1}^N|\widetilde Q_j|
\ge\sum_{j=1}^N|Q_j|-\epsilon.
$$

모든 $$N$$에 대해 성립하므로 $$N\to\infty$$로 보낸다. 부피 합이 무한대인 경우에는 위 부등식들이 곧 $$m_*(E)=\infty$$를 뜻한다. 유한한 경우에는 이어 $$\epsilon\downarrow0$$을 취하면 된다.

</div>

이제 열린 집합을 almost disjoint cube들로 분해하여 부피를 더하는 방식이 분해에 무관함을 안다. 그 합은 항상 이미 유일하게 정의된 $$m_*(O)$$와 같기 때문이다.

**왜 measurable set을 따로 골라야 하는가?**

<span id="l02:measurable"></span>

핵심 질문은 다음과 같다. $$E_1\cap E_2=\varnothing$$이라는 조건만으로

$$
m_*(E_1\cup E_2)=m_*(E_1)+m_*(E_2)
$$

라고 할 수 있을까? 답은 일반적으로 아니다. 익숙한 간단한 집합에서는 성립하므로 반례가 눈에 잘 보이지 않는다. 반례는 뒤에서 non-measurable set을 구성할 때 나타난다. 지금 필요한 것은 additivity를 회복할 수 있는 집합의 부류를 고르는 일이다.

<div class="real-analysis-statement" markdown="1">

**Definition (Lebesgue measurable set).**

$$E\subset\mathbb R^d$$가 다음 조건을 만족하면 Lebesgue measurable 또는 간단히 measurable이라 한다.

$$
\forall\epsilon>0\quad\exists\text{ 열린 }O\supset E
\quad\text{such that}\quad m_*(O\setminus E)\le\epsilon.
$$

</div>

열린 집합으로 밖에서 덮되, 덮개가 원래 집합보다 더 차지하는 부분 자체의 exterior measure를 임의로 작게 만들 수 있다는 뜻이다. Observation 3에서는 $$m_*(O)\le m_*(E)+\epsilon$$만 얻었다. 왜 거기서 $$m_*(O\setminus E)\le\epsilon$$을 바로 얻지 못하는가? $$O=E\cup(O\setminus E)$$가 disjoint union이라고 해도 exterior measure의 additivity를 아직 보장할 수 없기 때문이다. 두 조건을 혼동하면 measurable이라는 새 조건이 아무 역할도 하지 않는 것처럼 보이게 된다.

다음에는 이 정의를 만족하는 집합이 충분히 많다는 것, 그리고 그 모임이 countable union, complement, countable intersection 아래에서 닫혀 있다는 것을 보인다. 그 뒤에야 disjoint measurable set들의 countable additivity를 증명할 수 있다.

{% endraw %}

<!-- prettier-ignore-end -->

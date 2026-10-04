---
layout: post
title: "Real Analysis 3: Measurable Sets and Lebesgue Measure"
date: 2026-03-11 12:00:00 +0900
description: "르베그 가측집합과 르베그 측도, 가산 가법성, Borel 집합과 불변성을 정리한다."
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

### 1.3. Measurable sets and the Lebesgue measure

**정의를 다시 비교하자**

<span id="l03:definition"></span>

Exterior measure는 모든 집합에서 정의되지만 disjoint union에 대한 additivity가 실패할 수 있다. 그래서 집합 $$E$$를 열린 집합 $$O$$로 근사할 때, 숫자 $$m_*(O)$$만 $$m_*(E)$$에 가깝게 만드는 것보다 강한 조건을 요구한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Lebesgue measure).**

$$E\subset\mathbb R^d$$가 measurable이라는 것은 모든 $$\epsilon>0$$에 대해 열린 집합 $$O\supset E$$를 골라

$$
m_*(O\setminus E)\le\epsilon
$$

으로 만들 수 있다는 뜻이다. 이때 $$m(E)=m_*(E)$$를 $$E$$의 Lebesgue measure라 한다. 모든 measurable set들의 모임을 $$\mathcal M(\mathbb R^d)$$ 또는 $$\mathcal M$$이라 쓴다.

</div>

$$m_*$$와 $$m$$은 같은 집합에 적용될 때 값이 같다. 차이는 정의역이다. $$m_*$$는 모든 부분집합에서 쓰지만, $$m$$은 measurability를 확인한 집합에서만 쓴다. 이후 $$\mathbb R^{d_1}$$과 $$\mathbb R^{d_2}$$의 집합을 함께 다룰 때에는 $$\mathcal M(\mathbb R^{d_1})$$처럼 공간도 명시한다.

모든 $$E$$에 대해 성립했던 식은

$$
m_*(E)=\inf_{O\supset E,\ O\text{ open}}m_*(O)
$$

이다. $$m_*(E)<\infty$$이면 이 식에서 $$m_*(O)\le m_*(E)+\epsilon$$인 $$O$$를 고를 수 있다. 그러나 이것이 $$m_*(O\setminus E)\le\epsilon$$을 뜻하지는 않는다. 그 추론에는 $$m_*(O)=m_*(E)+m_*(O\setminus E)$$가 필요하고, 바로 그 additivity가 임의의 집합에서는 보장되지 않는다. 한편 measurability 조건은 subadditivity에 의해 수치적인 외측 근사를 함의한다. 즉 새 정의는 기존 관찰을 대체하는 것이 아니라 더 강한 성질을 요구한다.

현재는 $$\mathcal M\subset\mathcal P(\mathbb R^d)$$임을 안다. 엄밀한 포함 $$\mathcal M\subsetneq\mathcal P(\mathbb R^d)$$은 뒤의 반례에서 확인한다. 먼저 열린 집합과 닫힌 집합 같은 익숙한 집합들이 $$\mathcal M$$에 들어가는지, 집합 연산 아래에서 안정적인지 알아보자.

**Open set, null set, countable union**

<span id="l03:open-null"></span>

<div class="real-analysis-statement" markdown="1">

**Property 1.**

모든 열린 집합은 measurable이다.

</div>

$$E$$가 열려 있으면 덮개를 $$O=E$$로 택한다. 그러면 $$O\setminus E=\varnothing$$이고 $$m_*(\varnothing)=0$$이므로 정의를 만족한다.

<div class="real-analysis-statement" markdown="1">

**Property 2.**

$$m_*(E)=0$$이면 $$E$$는 measurable이며 $$m(E)=0$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$\epsilon>0$$에 대해 외측 근사로 $$E\subset O$$이고 $$m_*(O)\le\epsilon$$인 열린 집합을 고른다. $$O\setminus E\subset O$$이므로 monotonicity로

$$
m_*(O\setminus E)\le m_*(O)\le\epsilon.
$$

따라서 $$E$$는 measurable이다. 그 뒤에야 $$m(E)=m_*(E)=0$$이라고 쓸 수 있다.

</div>

특히 null set의 모든 부분집합도 measurable이다. $$A\subset Z$$, $$m(Z)=0$$이면 $$m_*(A)\le m_*(Z)=0$$이기 때문이다. 나중에 함수를 null set 위에서 바꾸어도 measurability가 유지되는 이유가 여기에 있다.

<div class="real-analysis-statement" markdown="1">

**Property 3.**

<span id="l03:unions"></span>

$$E_j\in\mathcal M$$이면 $$E=\bigcup_{j=1}^{\infty}E_j\in\mathcal M$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 집합을 열린 집합으로 근사하고 그 열린 집합들을 합칠 생각이다. 전체 오차가 $$\epsilon$$을 넘지 않게

$$
E_j\subset O_j,\qquad m_*(O_j\setminus E_j)\le\epsilon2^{-j}
$$

로 고른다. $$O=\bigcup_jO_j$$는 열려 있고 $$E\subset O$$이다. $$x\in O\setminus E$$이면 어떤 $$O_j$$에는 들어가면서 모든 $$E_j$$에는 들어가지 않으므로

$$
O\setminus E\subset\bigcup_j(O_j\setminus E_j).
$$

이 포함 관계를 exterior measure의 countable subadditivity와 결합하면

$$
m_*(O\setminus E)\le\sum_jm_*(O_j\setminus E_j)
\le\epsilon\sum_{j=1}^{\infty}2^{-j}=\epsilon.
$$

따라서 $$E$$가 measurable이다.

</div>

여기서는 아직 Lebesgue measure의 additivity를 쓰지 않았다. 이미 알고 있던 exterior measure의 *subadditivity*만으로 충분했다.

**Closed set을 다루기 위한 거리 lemma**

<span id="l03:separation"></span>

Closed set이 measurable임을 보이려면 먼저 compact set만 다루어도 충분하다. 닫힌 집합 $$F$$는

$$
F=\bigcup_{k=1}^{\infty}\bigl(F\cap\overline B_k(0)\bigr)
$$

로 표현되고 각 $$F\cap\overline B_k(0)$$는 닫히고 유계이므로 compact하다. Compact 집합이 measurable이라면 앞의 countable union 성질을 적용할 수 있다. 이때 필요한 것이 다음 lemma다.

<div class="real-analysis-statement" markdown="1">

**Lemma 3.1.**

비어 있지 않은 closed set $$F$$와 compact set $$K$$가 서로 disjoint이면 $$\operatorname{dist}(F,K)>0$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

목표는 각각의 점이 $$F$$에서 떨어져 있다는 사실을 *모든 점에 공통인 양의 거리*로 바꾸는 것이다. 각 $$x\in K$$에 대해 $$x\notin F$$이고 $$F^c$$가 열려 있으므로 $$\operatorname{dist}(x,F)>0$$이다. 따라서

$$
\operatorname{dist}(x,F)>3\delta_x>0
$$

이 되게 $$\delta_x$$를 고른다. 반지름 $$3\delta_x$$인 공은 $$F$$와 만나지 않는다. 이보다 작은 공 $$B_{2\delta_x}(x)$$들을 모으면 $$K$$의 열린 덮개가 된다.

$$K$$가 compact이므로 유한한 $$x_1,\ldots,x_N\in K$$에 대해

$$
K\subset\bigcup_{j=1}^N B_{2\delta_{x_j}}(x_j).
$$

$$\delta=\min_{1\le j\le N}\delta_{x_j}>0$$으로 놓자. 유한 개의 양수를 골랐기 때문에 최솟값이 양수다. 임의의 $$x\in K$$는 어떤 $$B_{2\delta_{x_j}}(x_j)$$에 들어가고, 모든 $$y\in F$$에 대해 $$\vert y-x_j\vert >3\delta_{x_j}$$이다. 따라서

$$
|x-y|\ge |y-x_j|-|x-x_j|
>3\delta_{x_j}-2\delta_{x_j}=\delta_{x_j}\ge\delta.
$$

모든 $$x\in K,y\in F$$에 대해 같은 $$\delta$$가 작동하므로 infimum을 취해 $$\operatorname{dist}(F,K)\ge\delta>0$$을 얻는다.

</div>

Disjoint한 열린 집합 둘에는 이 결론이 성립하지 않을 수 있다. 경계점에 계속 가까워질 수 있기 때문이다. 여기서는 closed 조건이 각 점 근처에 여유를 주고, compact 조건이 그 여유를 유한 개로 묶어 공통 간격을 준다.

**Compact set과 closed set의 measurability**

<span id="l03:closed"></span>

<div class="real-analysis-statement" markdown="1">

**Property 4.**

모든 closed set은 measurable이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

위의 환원에 따라 compact set $$F$$가 measurable임을 보인다. $$F$$는 유계이므로 $$m_*(F)<\infty$$이다. 외측 근사로 열린 $$O\supset F$$를 골라

$$
m_*(O)\le m_*(F)+\epsilon
$$

이 되게 한다. 원하는 결론은 $$m_*(O\setminus F)\le\epsilon$$이다. 두 exterior measure를 곧바로 빼서 이 결론을 얻을 수 없다는 점이 이번 증명의 어려움이다.

$$F$$가 닫혀 있으므로 $$O\setminus F=O\cap F^c$$는 열려 있다. 따라서 almost disjoint closed cube들로

$$
O\setminus F=\bigcup_{j=1}^{\infty}Q_j
$$

라고 쓸 수 있다. $$N$$을 고정하고 $$K_N=\bigcup_{j=1}^NQ_j$$라 하자. $$K_N$$은 유한 개 compact cube의 합집합이므로 compact이고 $$F$$와 disjoint하다. Lemma 3.1에 의해 $$\operatorname{dist}(F,K_N)>0$$이므로, 이 두 집합에는 exterior measure의 additivity를 적용할 수 있다.

$$
m_*(O)\ge m_*(F\cup K_N)=m_*(F)+m_*(K_N)
=m_*(F)+\sum_{j=1}^N|Q_j|.
$$

마지막 등식에는 almost disjoint cube의 부피 합 공식을 사용했다. 따라서

$$
\sum_{j=1}^N|Q_j|\le m_*(O)-m_*(F)\le\epsilon.
$$

$$m_*(F)$$와 $$m_*(O)$$가 유한하므로 여기서 뺄셈은 정당하다. 모든 $$N$$에 대한 부등식에서 $$N\to\infty$$로 보내고 subadditivity를 적용하면

$$
m_*(O\setminus F)\le\sum_{j=1}^{\infty}|Q_j|\le\epsilon.
$$

이로써 compact $$F$$가 measurable이며, 처음의 countable union 표현으로 모든 closed set도 measurable이다.

</div>

$$F$$와 $$O\setminus F$$의 거리는 $$0$$일 수 있다. 그래서 직접 additivity를 적용하는 대신, $$O\setminus F$$의 *안쪽 유한 부분* $$K_N$$에 적용한 것이다. 유한 단계에서는 positive distance를 확보하고, 마지막에 부피의 부분합을 극한으로 보낸다.

**Complement와 countable intersection**

<span id="l03:complements"></span>

<div class="real-analysis-statement" markdown="1">

**Property 5.**

$$E\in\mathcal M$$이면 $$E^c\in\mathcal M$$이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 $$n\in\mathbb N$$에 대해 열린 $$O_n\supset E$$를 골라

$$
m_*(O_n\setminus E)\le\frac1n
$$

이 되게 한다. $$O_n^c$$는 닫혀 있으므로 measurable이며 $$O_n^c\subset E^c$$이다. 따라서

$$
S=\bigcup_{n=1}^{\infty}O_n^c
$$

도 measurable이고 $$S\subset E^c$$이다. $$E$$를 밖에서 열린 집합으로 근사하던 것을 뒤집어서 $$E^c$$를 안쪽의 닫힌 집합들로 채우는 것이다.

채우고 남은 부분은

$$
E^c\setminus S=E^c\cap\bigcap_{k=1}^{\infty}O_k
\subset E^c\cap O_n=O_n\setminus E
$$

이다. 따라서 모든 $$n$$에 대해 $$m_*(E^c\setminus S)\le1/n$$이다. 왼쪽은 $$n$$에 의존하지 않으므로 $$m_*(E^c\setminus S)=0$$이다. Null set은 measurable이므로

$$
E^c=S\cup(E^c\setminus S)
$$

도 measurable이다.

</div>

<div class="real-analysis-statement" markdown="1">

**Property 6.**

$$E_j\in\mathcal M$$이면 $$\bigcap_{j=1}^{\infty}E_j\in\mathcal M$$이다.

</div>

실제로 De Morgan의 법칙으로

$$
\bigcap_{j=1}^{\infty}E_j
=\left(\bigcup_{j=1}^{\infty}E_j^c\right)^c.
$$

각 $$E_j^c$$가 measurable이고 그 countable union이 measurable이며, 다시 complement를 취해도 measurable이다. 이제 $$\mathcal M$$이 필요한 집합 연산 아래에서 닫혀 있음을 확보했다.

**Countable additivity: 안쪽에서 근사하는 이유**

<span id="l03:additivity"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.2: Countable additivity.**

Measurable set $$E_j$$들이 쌍마다 disjoint이고 $$E=\bigcup_{j=1}^{\infty}E_j$$이면

$$
m(E)=\sum_{j=1}^{\infty}m(E_j).
$$

</div>

Exterior measure에서는 positive distance라는 추가 조건 아래 finite additivity를 보였다. 지금은 각 집합의 measurability가 그 역할을 대신한다. 집합 사이 거리가 $$0$$이어도 좋고, 유한 개를 넘어 countable하게 많은 집합에 대해 등식이 성립한다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E$$는 measurable이다. $$\le$$ 방향은 exterior measure의 subadditivity에서 바로 나온다.

$$
m(E)=m_*(E)\le\sum_jm_*(E_j)=\sum_jm(E_j).
$$

반대 부등식을 위해 먼저 모든 $$E_j$$가 유계라고 가정한다. 유한 measure라는 말과 유계라는 말은 다르다. 유계 조건이 필요한 이유는 안쪽의 닫힌 근사 집합을 compact하게 만들기 위해서다.

$$\epsilon>0$$을 고정한다. $$E_j^c$$가 measurable이므로 열린 $$O_j\supset E_j^c$$를 골라

$$
m_*(O_j\setminus E_j^c)\le\epsilon2^{-j}
$$

로 만들 수 있다. $$F_j=O_j^c$$라 하면 $$F_j\subset E_j$$이고 $$F_j$$는 closed다. 또한 $$E_j$$가 유계이므로 $$F_j$$는 compact하며

$$
m(E_j\setminus F_j)=m_*(O_j\setminus E_j^c)\le\epsilon2^{-j}.
$$

$$E_j$$가 서로 disjoint이므로 그 안의 $$F_j$$들도 disjoint다. 밖에서 근사했다면 서로 다른 $$E_j$$의 열린 근방들이 겹칠 수 있다. *안쪽* 근사이기 때문에 disjointness를 보존한다.

고정된 $$N$$에 대해 $$F_1,\ldots,F_N$$은 disjoint compact set들이다. 쌍마다 positive distance를 가지므로 앞서 증명한 exterior measure의 finite additivity를 적용하여

$$
\sum_{j=1}^Nm(F_j)=m\left(\bigcup_{j=1}^NF_j\right)\le m(E)
$$

를 얻는다. 또한 $$E_j=F_j\cup(E_j\setminus F_j)$$와 subadditivity로

$$
\begin{align*}
\sum_{j=1}^Nm(E_j)
&\le\sum_{j=1}^Nm(F_j)+\sum_{j=1}^Nm(E_j\setminus F_j)\\
&\le m(E)+\epsilon\sum_{j=1}^N2^{-j}\le m(E)+\epsilon.
\end{align*}
$$

여기서 $$m(E_j)=m(F_j)+m(E_j\setminus F_j)$$라고 미리 쓰지 않는다. 그 additivity가 지금 증명하려는 성질이기 때문이다. 필요한 것은 이미 아는 $$\le$$뿐이다.

이 부등식이 모든 $$N$$에 대해 성립하므로 부분합의 극한을 취한다. $$m(E)=\infty$$이면 원하는 $$\ge$$ 방향은 이미 성립하고, 유한하면 이어 $$\epsilon\downarrow0$$을 취하여 $$\sum_jm(E_j)\le m(E)$$를 얻는다. 이것으로 각 $$E_j$$가 유계인 경우를 마쳤다.

</div>

**Unbounded set을 bounded 조각으로 나누기**

<span id="l03:unbounded"></span>

마지막으로 위 증명의 유계 가정을 제거하자. $$Q_k=[-k,k]^d$$로 두고

$$
S_1=Q_1,\qquad S_k=Q_k\setminus Q_{k-1}\quad(k\ge2)
$$

로 놓으면 $$\mathbb R^d$$는 bounded measurable set $$S_k$$들의 disjoint union이다. 그림으로는 중심의 cube와 그 바깥에 차례로 붙는 껍질을 생각하면 된다. 각 $$E_j$$를

$$
E_{j,k}=E_j\cap S_k
$$

로 잘라 놓으면 모든 $$E_{j,k}$$가 bounded, measurable이고 전체 이중 모임도 disjoint다. 또한

$$
E_j=\bigcup_{k=1}^{\infty}E_{j,k},\qquad
E=\bigcup_{j,k=1}^{\infty}E_{j,k}.
$$

앞에서 증명한 결과는 “합집합이 유계”일 것을 요구하지 않고 *각 조각*이 유계일 것만 요구했다. 그러므로 위 두 countable union 모두에 그 결과를 적용할 수 있다. 따라서

$$
m(E)=\sum_{j,k}m(E_{j,k})
=\sum_j\sum_km(E_{j,k})
=\sum_jm(E_j).
$$

음이 아닌 수의 이중합이므로 무한대가 허용되더라도 순서를 바꾸는 데 문제가 없다. 이로써 일반적인 경우의 countable additivity까지 증명했다.

이제 Lebesgue measure는 단순히 집합에 숫자를 부여하는 함수를 넘어, disjoint한 조각으로 분해하고 다시 합치는 연산과 일관되게 작동한다. 다음에는 이 additivity에서 집합열의 극한과 여러 근사 정리를 이끌어 낸다.

**Countable additivity에서 집합열의 극한으로**

<span id="l04:continuity"></span>

열린 집합, 닫힌 집합, compact 집합이 모두 measurable임을 보았고, $$\mathcal M$$은 complement와 countable union 및 intersection 아래에서 닫혀 있음을 확인했다. 가장 중요한 성질은 쌍마다 disjoint인 $$E_j\in\mathcal M$$에 대해

$$
m\left(\bigcup_{j=1}^{\infty}E_j\right)=\sum_{j=1}^{\infty}m(E_j)
$$

가 성립한다는 것이다. Exterior measure에서는 disjointness만으로 이 등식을 얻지 못했고, positive distance 조건 아래 finite additivity부터 증명했다. Measurability가 생기면서 집합 사이 거리를 따로 요구하지 않고 countable additivity까지 얻게 되었다.

이제 집합들이 점점 커지거나 작아질 때 measure가 어떻게 변하는지 묻자. $$E_j\subset E_{j+1}$$이고 $$E=\bigcup_jE_j$$이면 $$E_j\nearrow E$$라고 쓴다. 반대로 $$E_j\supset E_{j+1}$$이고 $$E=\bigcap_jE_j$$이면 $$E_j\searrow E$$라고 쓴다. 화살표는 집합의 포함 관계와 그 합집합 또는 교집합을 동시에 나타낸다.

<div class="real-analysis-statement" markdown="1">

**Corollary 3.3: Continuity of measure.**

$$E_j\in\mathcal M$$이라 하자.

<ol type="i" markdown="1">

<li markdown="1">

$$E_j\nearrow E$$이면 $$m(E)=\lim_{j\to\infty}m(E_j)$$이다.

</li>

<li markdown="1">

$$E_j\searrow E$$이고 어떤 $$k$$에 대해 $$m(E_k)<\infty$$이면 $$m(E)=\lim_{j\to\infty}m(E_j)$$이다.

</li>

</ol>

</div>

증가하는 경우에는 극한이 무한대여도 괜찮다. 감소하는 경우에는 왜 유한 measure 조건이 붙는가? $$E_j=(j,\infty)$$를 보자. 모든 $$E_j$$의 measure는 무한대이고 집합열은 감소하지만, 어떤 실수도 모든 $$(j,\infty)$$에 들어갈 수 없으므로 $$\bigcap_jE_j=\varnothing$$이다. 따라서

$$
m\left(\bigcap_jE_j\right)=0\ne\infty=\lim_jm(E_j).
$$

작아지는 집합의 모든 단계가 무한 measure이면 최종 교집합의 크기를 단계별 measure만으로 알 수 없다.

<div class="real-analysis-proof" markdown="1">

*Proof.*

(i) Countable additivity를 쓰려면 disjoint한 조각이 필요하다. 증가하는 집합들은 서로 겹치므로 새로 추가된 부분만 분리한다.

$$
G_1=E_1,\qquad G_j=E_j\setminus E_{j-1}\quad(j\ge2).
$$

각 $$G_j$$는 measurable이며 서로 disjoint다. 그림으로는 가장 안쪽 집합과 그 바깥에 한 겹씩 더해지는 층을 생각하면 된다. $$E=\bigcup_jG_j$$이고 $$E_N=\bigcup_{j=1}^NG_j$$이므로

$$
m(E)=\sum_{j=1}^{\infty}m(G_j)
=\lim_{N\to\infty}\sum_{j=1}^Nm(G_j)
=\lim_{N\to\infty}m(E_N).
$$

부분합의 극한은 무한대일 수도 있으며 음이 아닌 항들이므로 항상 존재한다.

(ii) 유한 개의 초기 항을 지워도 교집합과 measure의 극한은 바뀌지 않는다. 따라서 $$m(E_1)<\infty$$라 가정해도 된다. 이번에는 빠져나가는 층을

$$
G_j=E_j\setminus E_{j+1}
$$

로 정의한다. $$E_1$$의 점은 끝까지 남아서 $$E$$에 들어가거나, 어떤 단계에서 처음 빠져나가서 정확히 하나의 $$G_j$$에 들어간다. 그러므로

$$
E_1=E\,\dot\cup\,\mathop{\dot\bigcup}_{j=1}^{\infty}G_j.
$$

모든 집합이 유한 measure를 가지므로 $$m(G_j)=m(E_j)-m(E_{j+1})$$이다. Countable additivity와 telescoping sum을 쓰면

$$
\begin{align*}
m(E_1)
&=m(E)+\lim_{N\to\infty}\sum_{j=1}^{N-1}\bigl(m(E_j)-m(E_{j+1})\bigr)\\
&=m(E)+m(E_1)-\lim_{N\to\infty}m(E_N).
\end{align*}
$$

유한한 $$m(E_1)$$을 양변에서 빼면 원하는 등식이 나온다. 유한 measure 가정은 바로 이 뺄셈을 정당화한다. $$\infty-\infty$$는 정의하지 않으므로 그 가정 없이 같은 계산을 할 수 없다.

</div>

**Measurable set을 좋은 집합으로 근사하기**

<span id="l04:regularity"></span>

<div class="real-analysis-statement" markdown="1">

**Theorem 3.4.**

$$E\in\mathcal M$$이고 $$\epsilon>0$$이면 다음이 성립한다.

<ol type="i" markdown="1">

<li markdown="1">

열린 $$O\supset E$$가 존재하여 $$m(O\setminus E)\le\epsilon$$이다.

</li>

<li markdown="1">

닫힌 $$F\subset E$$가 존재하여 $$m(E\setminus F)\le\epsilon$$이다.

</li>

<li markdown="1">

$$m(E)<\infty$$이면 compact $$K\subset E$$가 존재하여 $$m(E\setminus K)\le\epsilon$$이다.

</li>

<li markdown="1">

$$m(E)<\infty$$이면 유한 개 cube의 합집합 $$F$$가 존재하여 $$m(E\triangle F)\le\epsilon$$이다. 여기서

$$
E\triangle F=(E\setminus F)\cup(F\setminus E)
$$

는 symmetric difference이다.

</li>

</ol>

</div>

첫째는 밖에서 열린 집합으로, 둘째와 셋째는 안에서 닫힌 집합 또는 compact 집합으로 근사하는 방법이다. 닫힌 집합이라 해도 그 모양은 복잡할 수 있다. 넷째는 더 단순한 유한 cube union을 사용하지만, 대신 $$F\subset E$$나 $$E\subset F$$를 요구하지 않는다. 놓친 부분과 더해진 부분을 모두 합친 symmetric difference를 작게 만든다. 단순한 도형을 사용하는 대가로 일방적인 포함 관계를 포기하는 셈이다.

(i)는 measurability의 정의다. 이제 $$O\setminus E$$도 measurable임을 알므로 exterior measure 기호의 별표를 없앨 수 있다. (ii)는 $$E^c$$에 (i)를 적용하면 된다. 열린 $$O\supset E^c$$와 $$m(O\setminus E^c)\le\epsilon$$을 고르면 $$F=O^c$$는 closed이고 $$F\subset E$$이며

$$
E\setminus F=E\cap O=O\setminus E^c
$$

이기 때문이다. 밖에서의 근사를 complement로 뒤집으면 안쪽 근사가 된다.

**유한 measure이면 compact하게 잘라도 된다**

<span id="l04:compact"></span>

(iii)를 보이자. (ii)로 닫힌 $$F\subset E$$를 골라 $$m(E\setminus F)\le\epsilon/2$$로 만든다. $$F$$가 유계이면 이미 compact하지만, 유한 measure만으로 유계라고 말할 수는 없다. 따라서

$$
K_n=F\cap\overline B_n(0)
$$

으로 자른다. 각 $$K_n$$은 compact이고 $$K_n\nearrow F$$이므로 $$E\setminus K_n\searrow E\setminus F$$이다. 또한 $$m(E\setminus K_n)\le m(E)<\infty$$이다. 따라서 continuity from above를 적용하여

$$
m(E\setminus K_n)\longrightarrow m(E\setminus F)\le\epsilon/2.
$$

충분히 큰 $$N$$에서 $$m(E\setminus K_N)\le\epsilon$$이 된다. 집합 자체가 무한히 멀리 뻗어 있어도, 유한 measure라면 멀리 있는 부분의 measure를 작게 버릴 수 있다는 뜻이다.

**유한 cube union과 symmetric difference**

<span id="l04:cubes"></span>

(iv)를 보이기 위해 exterior measure 정의에서 covering을 고른다.

$$
E\subset U:=\bigcup_{j=1}^{\infty}Q_j,\qquad
\sum_{j=1}^{\infty}|Q_j|\le m(E)+\epsilon/2<\infty.
$$

부피의 급수가 수렴하므로 충분히 큰 $$N$$에 대해 $$\sum_{j>N}\vert Q_j\vert <\epsilon/2$$이다. $$F=\bigcup_{j=1}^NQ_j$$로 놓자. $$E$$가 unbounded일 수 있으므로 $$F$$만으로 $$E$$ 전체를 덮을 수 있다고는 말하지 않는다. 대신 놓친 부분은 버린 tail cube들이 덮는다.

$$
E\setminus F\subset\bigcup_{j>N}Q_j.
$$

추가된 부분은 $$F\setminus E\subset U\setminus E$$이며 $$E\subset U$$와 유한 measure에 의해

$$
m(U\setminus E)=m(U)-m(E)
\le\sum_j|Q_j|-m(E)\le\epsilon/2.
$$

따라서 두 차집합의 disjointness와 subadditivity를 사용하면

$$
\begin{align*}
m(E\triangle F)
&=m(E\setminus F)+m(F\setminus E)\\
&\le\sum_{j>N}|Q_j|+m(U\setminus E)<\epsilon.
\end{align*}
$$

Covering의 cube들끼리는 겹칠 수 있으므로 $$m(U)=\sum_j\vert Q_j\vert $$라고 쓰지 않았다. 필요한 것은 항상 subadditivity 방향이다.

**Translation과 dilation**

<span id="l04:invariance"></span>

집합을 평행이동하면 크기는 그대로이고, 모든 길이를 $$\delta$$배 하면 $$d$$차원 부피는 $$\delta^d$$배가 되어야 한다. Lebesgue measure는 이 직관과 맞는다.

<div class="real-analysis-statement" markdown="1">

**Invariance와 scaling.**

$$E\in\mathcal M$$, $$h\in\mathbb R^d$$, $$\delta>0$$이라 하자. 집합

$$
E+h=\{x+h:x\in E\},\qquad \delta E=\{\delta x:x\in E\}
$$

는 measurable이며

$$
m(E+h)=m(E),\qquad m(\delta E)=\delta^d m(E).
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

$$E$$의 cube covering을 $$h$$만큼 옮기면 $$E+h$$의 covering이 되고 각 cube의 부피는 같다. 반대로 $$E+h$$의 covering을 $$-h$$만큼 옮길 수 있으므로 $$m_*(E+h)=m_*(E)$$이다. 같은 방식으로 scaling한 covering과 역 scaling을 비교하면 $$m_*(\delta E)=\delta^dm_*(E)$$이다.

열린 $$O\supset E$$를 평행이동하거나 scaling해도 열린 집합이고, 차집합은 $$(O+h)\setminus(E+h)=(O\setminus E)+h$$ 및 $$(\delta O)\setminus(\delta E)=\delta(O\setminus E)$$를 만족한다. 따라서 원래 오차를 각각 $$\epsilon$$ 또는 $$\epsilon/\delta^d$$ 이하로 택하면 변환된 집합의 measurability를 얻는다. 그 뒤 exterior measure의 등식을 Lebesgue measure로 읽으면 된다.

</div>

Rotation과 reflection 역시 Lebesgue measure를 보존하는 기하학적 변환이다. 다만 일반 rotation은 좌표축에 평행한 cube를 같은 형태의 cube로 보내지 않으므로, 방금 사용한 covering의 단순 대응만으로 그 사실을 증명한 것은 아니다. 현재의 계산에서 직접 확인한 것은 translation invariance와 dilation의 scaling law이다.

**집합들의 모임도 대수적 구조를 가진다**

<span id="l04:borel"></span>

<div class="real-analysis-statement" markdown="1">

**Definition ($$\sigma$$-algebra).**

$$\Sigma\subset\mathcal P(\mathbb R^d)$$가 비어 있지 않고 complement와 countable union 아래에서 닫혀 있으면 $$\sigma$$-algebra라 한다. 그러면 $$\varnothing,\mathbb R^d\in\Sigma$$이고 De Morgan의 법칙에 의해 countable intersection 아래에서도 닫혀 있다.

</div>

여기서 원소는 점이 아니라 집합이다. 예를 들어 $$\{\varnothing,\mathbb R^d\}$$와 $$\mathcal P(\mathbb R^d)$$는 가장 작은 경우와 가장 큰 경우를 보여 준다. 지금까지 증명한 성질들에 의해 $$\mathcal M$$도 $$\sigma$$-algebra이다. 이 구조는 뒤에서 Euclidean space 밖의 abstract measure space를 정의할 때에도 남게 된다.

<div class="real-analysis-statement" markdown="1">

**Definition (Borel $$\sigma$$-algebra).**

모든 열린 집합을 포함하는 가장 작은 $$\sigma$$-algebra를 $$\mathcal B_{\mathbb R^d}$$라 한다. 그 원소들을 Borel set이라 한다.

</div>

“가장 작다”는 것은 모든 열린 집합을 포함하는 다른 $$\sigma$$-algebra $$\Sigma$$에 대해 $$\mathcal B_{\mathbb R^d}\subset\Sigma$$라는 뜻이다. 그런 모임이 실제로 존재하는지도 확인하자. 모든 열린 집합을 포함하는 $$\sigma$$-algebra들을 전부 모아 교집합을 취한다. 이 모임은 적어도 power set을 포함하므로 비어 있지 않다. 각 연산은 모든 $$\sigma$$-algebra에서 허용되므로 그 교집합에서도 허용된다. 따라서 교집합 자체가 $$\sigma$$-algebra이고 원하는 최소성을 갖는다.

$$\mathcal M$$은 모든 열린 집합을 포함하는 $$\sigma$$-algebra이므로

$$
\mathcal B_{\mathbb R^d}\subset\mathcal M\subset\mathcal P(\mathbb R^d).
$$

두 포함은 실제로 모두 엄밀하다. 첫 번째 엄밀성에는 Lebesgue measurable이지만 Borel이 아닌 집합이 필요하며, 두 번째에는 non-measurable set이 필요하다. Borel set도 이미 매우 큰 부류이지만 모든 Lebesgue measurable set을 포함하지는 않는다. 그 차이가 measure의 관점에서 어떤 것인지는 다음 결과가 설명한다.

**G-delta, F-sigma, null set의 차이**

<span id="l04:completion"></span>

<div class="real-analysis-statement" markdown="1">

**Definition ($$G_\delta$$와 $$F_\sigma$$).**

Countable intersection of open sets를 $$G_\delta$$ set이라 하고, countable union of closed sets를 $$F_\sigma$$ set이라 한다.

</div>

Open set들의 합집합은 언제나 열려 있지만 countable intersection은 꼭 열려 있지 않다. 예를 들어 $$\bigcap_n(-1/n,1/n)=\{0\}$$이다. Closed set들의 countable union 역시 닫혀 있을 필요가 없으며, 예를 들어 $$\mathbb Q=\bigcup_{q\in\mathbb Q}\{q\}$$는 $$F_\sigma$$이지만 닫혀 있지 않다. 이처럼 새로운 이름을 붙이는 이유는 기존의 open 또는 closed라는 이름만으로 이들을 모두 부를 수 없기 때문이다. 두 종류의 집합은 모두 Borel이다. 이름에서 $$G$$는 열린 집합을 가리키는 German 표현에서, $$F$$는 닫혔다는 뜻의 French 표현에서 왔다.

<div class="real-analysis-statement" markdown="1">

**Corollary 3.5.**

$$E\subset\mathbb R^d$$에 대해 다음은 동치다.

<ol type="a" markdown="1">

<li markdown="1">

$$E$$는 measurable이다.

</li>

<li markdown="1">

어떤 $$G_\delta$$ set $$G$$와 null set만큼 다르다. 즉 $$m_*(E\triangle G)=0$$이다.

</li>

<li markdown="1">

어떤 $$F_\sigma$$ set $$F$$와 null set만큼 다르다. 즉 $$m_*(E\triangle F)=0$$이다.

</li>

</ol>

또한 (b)의 $$G$$는 $$E\subset G$$, (c)의 $$F$$는 $$F\subset E$$가 되게 고를 수 있다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

(a)를 가정하자. 각 $$n$$에 대해 열린 $$O_n\supset E$$를 골라 $$m(O_n\setminus E)\le1/n$$으로 만들고 $$G=\bigcap_nO_n$$으로 놓는다. 그러면 $$G$$는 $$G_\delta$$이고 $$E\subset G$$이며

$$
G\setminus E\subset O_n\setminus E\quad\text{for all }n.
$$

따라서 $$m(G\setminus E)\le1/n$$이 모든 $$n$$에서 성립하여 $$m(G\setminus E)=0$$이다. $$E\subset G$$이므로 이것은 $$m(E\triangle G)=0$$과 같다.

(c)는 안쪽 근사로 똑같이 보인다. 닫힌 $$F_n\subset E$$와 $$m(E\setminus F_n)\le1/n$$을 고르고 $$F=\bigcup_nF_n$$이라 하면 $$F$$는 $$F_\sigma$$이며 $$F\subset E$$이다. 또한 $$E\setminus F\subset E\setminus F_n$$이므로 $$m(E\setminus F)=0$$이다.

반대로 measurable set $$A$$와 $$m_*(E\triangle A)=0$$인 집합 $$E$$를 생각하자. $$Z=E\triangle A$$는 null set이므로 measurable이고, 그 모든 부분집합도 measurable이다. 그러면

$$
E=(A\setminus Z)\cup(E\cap Z)
$$

는 measurable set들의 합집합이다. $$G_\delta$$와 $$F_\sigma$$는 Borel이므로 measurable이며 이 논리를 각각 적용할 수 있다.

</div>

“Null set만큼 다르다”는 말에는 양방향의 차이를 모두 포함해야 한다. 단순히 $$m_*(E\setminus G)=0$$이라고만 하면 $$G$$가 $$E$$보다 얼마나 큰지 전혀 제어하지 못한다. 위에서 $$G\supset E$$를 선택한 경우에는 오히려 $$G\setminus E$$가 제어해야 할 부분이다.

이 결과는 Lebesgue measurable set이 Borel set을 null set 위에서 바꾼 것임을 뜻한다. 이런 의미에서 Lebesgue measurable sets는 Borel sets의 completion을 이룬다. 다음에는 $$\mathcal M$$ 밖의 집합을 구성한다. $$[0,1]$$의 점들을 유리수만큼 차이 나는 동치류로 나누고, 각 동치류에서 하나씩 대표를 고른 뒤 그 집합의 유리수 translation들을 살펴보는 것이 핵심이다.

{% endraw %}

<!-- prettier-ignore-end -->

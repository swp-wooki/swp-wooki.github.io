---
layout: post
title: "Real Analysis 1: Preliminaries"
date: 2026-03-05 12:00:00 +0900
description: "직사각형과 정육면체, 거의 서로소인 집합, 열린집합의 구조와 칸토어 집합을 정리한다."
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

## 1. Measure Theory

### 1.1. Preliminaries

**무엇을 측정하려는가?**

<span id="l01:motivation"></span>

실수축에서는 길이를, 평면에서는 넓이를, $$\mathbb R^d$$에서는 $$d$$차원 부피를 측정하려 한다. 구간이나 rectangle의 크기는 이미 안다. 그러나 우리가 다룰 집합은 하나의 구간이나 유한 개의 rectangle로 주어지지 않을 수 있다. Cantor set처럼 구간을 끝없이 제거하여 얻는 집합도 있고, 더 나아가 자연스러운 부피의 법칙을 모든 집합에 동시에 적용할 수 없게 만드는 집합도 있다. 따라서 먼저 “집합을 어떻게 간단한 도형으로 근사할 것인가?”를 정해야 한다.

이 장의 목표는 세 가지다. 첫째, $$\mathbb R^d$$에서 Lebesgue measure를 구성한다. 둘째, 크기를 일관되게 측정할 수 있는 집합들이 이루는 $$\sigma$$-algebra를 이해한다. 셋째, 이 집합들을 이용하여 measurable function을 정의한다. 연속함수보다 넓은 함수의 부류를 얻은 뒤에는 Lebesgue integral과 적분 가능한 함수들의 공간 $$L^1$$을 다루고, 이후 $$L^2$$와 Hilbert space로 나아간다. 지금 필요한 것은 이 전체 이론의 출발점인 집합의 크기다.

**Rectangle, cube, almost disjoint**

<span id="l01:rectangles"></span>

점 $$x=(x_1,\ldots,x_d)\in\mathbb R^d$$의 Euclidean norm은

$$
|x|=(x_1^2+\cdots+x_d^2)^{1/2}
$$

이다. $$B_r(x)=\{y:\vert y-x\vert <r\}$$는 열린 공이다. 열린 집합 $$O$$의 각 점 $$x$$에는 $$B_r(x)\subset O$$인 $$r>0$$이 있다. 닫힌 집합은 여집합이 열린 집합이며, $$\mathbb R^d$$에서 compact하다는 것은 닫혀 있고 유계라는 것과 동치다. 특히 compact 집합의 어떤 열린 덮개에서도 유한 부분 덮개를 고를 수 있다. 뒤에서 countable covering을 유한한 부피 계산으로 바꿀 때 이 성질을 사용한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Rectangle와 그 부피).**

Rectangle은 좌표축에 평행한 닫힌 집합

$$
R=[a_1,b_1]\times\cdots\times[a_d,b_d],\qquad a_i\le b_i,
$$

이며 부피는

$$
|R|=\prod_{i=1}^d(b_i-a_i)
$$

로 정의한다. 모든 변의 길이가 같으면 cube라 한다. 변의 길이가 $$\ell$$인 cube $$Q$$의 부피는 $$\vert Q\vert =\ell^d$$이다.

</div>

별도로 open rectangle 또는 open cube라고 하지 않는 한 닫힌 것을 뜻한다. $$a_i=b_i$$도 허용한다. 이 경우 rectangle은 더 낮은 차원의 집합이 될 수 있고 $$d$$차원 부피는 $$0$$이다. 모든 변이 $$0$$인 cube는 한 점이다. 기호 $$\vert x\vert $$는 점의 norm, $$\vert R\vert $$는 rectangle의 부피이므로 무엇에 적용하는지 구별한다.

<div class="real-analysis-statement" markdown="1">

**Definition (Almost disjoint).**

Rectangle들의 내부가 서로 겹치지 않으면 이들을 almost disjoint라 한다.

</div>

인접한 두 닫힌 정사각형은 한 변을 공유할 수 있다. 따라서 집합 자체는 disjoint가 아니지만 내부는 disjoint이므로 almost disjoint다. 여기서 “거의”라는 말은 아직 정의하지 않은 measure에 의존하지 않는다. 내부가 서로 만나지 않는다는 기하학적 조건이다.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.1.**

<span id="l01:finite-add"></span>

Rectangle $$R$$이 유한 개 rectangle $$R_1,\ldots,R_N$$의 almost disjoint union이면

$$
|R|=\sum_{j=1}^N|R_j|.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 rectangle의 모든 면을 좌표축 방향으로 연장하여 하나의 공통 격자를 만든다. 이 격자는 각 좌표 구간을 유한 개의 작은 구간으로 나눈다. 예를 들어 한 변의 길이가 $$\ell_1+\cdots+\ell_s$$로 나뉘면, 전체 부피의 곱을 전개할 때 작은 격자 rectangle들의 부피가 정확히 나타난다. 따라서 $$\vert R\vert $$은 $$R$$ 안의 격자 조각들의 부피 합이다.

각 $$R_j$$도 같은 격자의 조각들로 이루어진다. 양의 부피를 가진 조각이 서로 다른 $$R_j$$에 중복되면 두 rectangle의 내부가 겹치므로 almost disjoint 가정에 어긋난다. 반대로 $$R$$의 모든 조각은 어떤 $$R_j$$에 들어간다. 그러므로 부피 합을 $$R_j$$별로 묶으면 원하는 등식이 된다. 변의 길이가 $$0$$인 조각은 부피 합에 기여하지 않는다.

</div>

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2.**

<span id="l01:finite-cover"></span>

Rectangle $$R,R_1,\ldots,R_N$$에 대하여 $$R\subset\bigcup_{j=1}^N R_j$$이면

$$
|R|\le\sum_{j=1}^N|R_j|.
$$

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

다시 모든 면을 연장하여 공통 격자를 만든다. $$R$$ 안의 각 양의 부피 조각은 적어도 하나의 $$R_j$$에 포함된다. 이번에는 같은 조각이 여러 $$R_j$$의 부피에 중복되어 더해질 수 있다. 따라서 오른쪽 합은 $$R$$의 부피 이상이다. 앞의 lemma에서 등식이 성립한 이유가 바로 중복되는 내부가 없었기 때문임을 알 수 있다.

</div>

**실수축의 열린 집합은 구간들로 나뉜다**

<span id="l01:open-line"></span>

일반적인 열린 집합은 하나의 구간도, 유한 개 구간의 합집합도 아닐 수 있다. 그런데 실수축에서는 모든 열린 집합을 정확히 기술하는 방법이 있다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3.**

<span id="l01:open-intervals"></span>

열린 집합 $$O\subset\mathbb R$$는 서로 disjoint인 열린 구간들의 많아야 countable인 합집합으로 유일하게 표현된다. 여기서 구간의 양 끝은 무한대일 수 있으며, 유일성은 구간을 나열하는 순서를 제외한 뜻이다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

각 $$x\in O$$에 대해 $$x$$를 포함하면서 $$O$$ 안에 들어가는 가장 큰 열린 구간을 찾자. 다음과 같이 놓는다.

$$
a_x=\inf\{a<x:(a,x)\subset O\},\qquad
b_x=\sup\{b>x:(x,b)\subset O\},\qquad I_x=(a_x,b_x).
$$

$$O$$가 열려 있으므로 $$a_x<x<b_x$$이다. infimum과 supremum의 정의에 따라 $$I_x\subset O$$이고 $$x\in I_x$$이다. 따라서 $$O=\bigcup_{x\in O}I_x$$이다. 이 합집합은 겉으로는 uncountable일 수 있으므로, 서로 다른 구간이 실제로 얼마나 많은지 살펴야 한다.

$$I_x\cap I_y\ne\varnothing$$이면 $$I_x\cup I_y$$도 열린 구간이다. 이 구간은 $$O$$ 안에 있고 $$x$$를 포함한다. $$I_x$$의 maximality에 의해 $$I_x\cup I_y\subset I_x$$이다. $$y$$에 대해서도 같은 논리를 적용하면 $$I_x\cup I_y\subset I_y$$이다. 결국 $$I_x=I_y$$다. 그러므로 중복된 구간을 한 번씩만 남기면 서로 disjoint인 구간들이 된다.

각 비어 있지 않은 열린 구간에는 유리수가 있다. 유리수의 고정된 나열에서 그 구간에 속하는 첫 유리수를 선택하면, 서로 다른 구간에는 서로 다른 유리수가 대응한다. 유리수는 countable이므로 구간들의 모임도 많아야 countable이다.

유일성도 maximality에서 나온다. 다른 disjoint open interval 분해가 있다고 하자. 그 분해의 구간은 $$O$$ 안의 maximal open interval 하나에 포함된다. 하나의 maximal interval이 서로 다른 두 개 이상의 분해 구간으로 나뉘면 그 구간이 서로 분리된 비어 있지 않은 열린 부분들로 나뉘게 되어 구간의 connectedness에 어긋난다. 따라서 두 분해의 구간들은 같다.

</div>

이 결과는 $$O=\bigcup_j I_j$$에 길이 $$\sum_j\vert I_j\vert $$를 부여하고 싶게 만든다. 각 $$I_j$$의 길이를 알고 있고 분해도 유일하므로 자연스러운 생각이다. 그러나 높은 차원에서도 그대로 할 수 있을까?

**높은 차원에서는 closed cube를 사용한다**

<span id="l01:open-cubes"></span>

평면의 열린 원판을 서로 disjoint인 open rectangle로 채운다고 생각해 보자. 이웃한 rectangle 사이의 경계는 open rectangle에 들어가지 않으므로 빈틈이 생긴다. 더 정확히 말하면, 서로 disjoint인 비어 있지 않은 열린 집합이 둘 이상 있으면 그 합집합은 connected일 수 없다. 원판은 connected이며 rectangle 하나도 아니므로 이런 분해를 가질 수 없다. 열린 집합을 rectangle들의 합집합으로 쓰는 것 자체가 불가능한 것이 아니라, *서로 disjoint인 open rectangle*라는 요구가 문제다.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.4.**

<span id="l01:cube-decomposition"></span>

모든 열린 집합 $$O\subset\mathbb R^d$$는 많아야 countable인 almost disjoint closed cube들의 합집합으로 표현된다.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*

처음에는 $$\mathbb Z^d$$ 격자의 변 길이 $$1$$인 closed cube들을 살펴본다. 각 cube를 다음 세 종류로 나눈다.

<ol type="i" markdown="1">

<li markdown="1">

$$Q\subset O$$이면 채택한다.

</li>

<li markdown="1">

$$Q\subset O^c$$이면 버린다.

</li>

<li markdown="1">

$$O$$와 $$O^c$$를 모두 만나면 다음 단계로 넘긴다.

</li>

</ol>

다음 단계로 넘긴 cube만 각 변의 중점에서 잘라 $$2^d$$개의 cube로 나눈다. 새 cube들의 변 길이는 $$1/2$$이다. 다시 완전히 $$O$$ 안에 있으면 채택하고, 완전히 밖에 있으면 버리며, 경계에 걸쳐 있으면 재분할한다. 이를 계속하면 변 길이가 $$2^{-N}$$인 격자들을 차례로 사용하게 된다.

이미 채택한 cube는 다시 분할하여 채택하지 않으므로 서로 다른 채택 cube의 내부는 겹치지 않는다. 각 단계의 cube는 countable이고 단계 수도 countable이므로 모든 채택 cube의 모임 $$\mathcal Q$$도 countable이다. 또한 모든 채택 cube가 $$O$$ 안에 있으므로 $$\bigcup_{Q\in\mathcal Q}Q\subset O$$이다.

반대 포함 관계가 핵심이다. $$x\in O$$를 고정하면 어떤 $$r>0$$에 대해 $$B_r(x)\subset O$$이다. $$\sqrt d\,2^{-N}<r$$인 $$N$$을 선택하자. $$x$$를 포함하는 변 길이 $$2^{-N}$$의 격자 cube는 지름이 $$r$$보다 작으므로 $$B_r(x)$$ 안에 들어간다. 그 cube가 해당 단계까지 재분할되어 내려왔다면 그때 채택된다. 그 전에 과정이 멈췄다면 그 cube를 포함하는 더 큰 cube가 이미 채택된 경우다. $$x\in O$$인 cube를 완전히 $$O^c$$ 안에 있다고 버릴 수는 없기 때문이다. 어느 경우든 $$x$$는 채택 cube에 들어간다.

</div>

이 분해에서 겹침은 경계에서만 일어난다. 그래서 $$O=\bigcup_jQ_j$$에 $$\sum_j\vert Q_j\vert $$를 부여하는 것이 자연스럽다. 다만 분해는 유일하지 않다. 처음 격자를 평행이동하거나 다른 크기에서 시작하면 다른 cube들이 나온다. 서로 다른 분해의 부피 합이 같다는 사실을 증명하기 전에는 이것을 일관된 정의라고 선언할 수 없다. 이 문제를 해결하기 위해 하나의 분해를 고르는 대신 가능한 모든 덮개를 고려한다.

{% endraw %}

<!-- prettier-ignore-end -->

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
---

> 이 글은 2026년 봄학기 실변수함수론(MAT4033) 강의노트를 주제별로 정리한 글입니다.

Let me first start with previewing this. There is several preliminary stuff in the beginning of this section but I hope you read everything by yourself because they are all basics from advanced calculus. For instance, you will see some notions in set theory. Union, intersection, and so on. Furthermore, basic topology like open, closed or compact sets that you already know I guess. And there are several important examples in this section like the Cantor set. Actually, the Cantor set will play a fundamental role in this lecture because it will provide a bunch of counterexamples of several concepts. Thus that will be important. We will get back to this topic later.

### Notations
But let me introduce some basic notations that will be used in the sequel. First of all, whenever I say a rectangle, it will always mean a **closed rectangle** like a $d$-dimensional rectangle of this form.

<div class="real-analysis-statement" markdown="1">

**Rectangle.**

A (closed) rectangle in $\mathbb{R}^d$ is of the form
\[
R = [a_1, b_1] \times \dots \times [a_d, b_d].
\]

</div>

$[a_i, b_i]$ is a one-dimensional closed interval from $a_i$ to $b_i$ and we will apply the Cartesian product in $\mathbb{R}^d$, where $\mathbb{R}^d$ is the $d$-dimensional Euclidean space. $d$ is the dimension and we have $d$ copies, like they are not copies of each other, but you have $d$ closed intervals and then you take the Cartesian product. $R$, the rectangle, will always denote the closed rectangle and here $a_j$ is less than or equal to $b_j$ ($a_j \le b_j$), and equality is allowed. Indeed, it can be a lower-dimensional set when $a_j$ equals $b_j$. For example, if $a_1$ is equal to $b_1$, then it will be a singleton $\{a_1\}$. 

The absolute value of $R$, $|R|$, denote the volume of rectangle $R$. Obviously, we know how to compute the volume of rectangle, which is just the product of these numbers: $(b_1 - a_1)$ which is the length of this interval up to $(b_d - a_d)$. This is the volume of $R$. Clearly, for rectangles, each interval can be different.

<div class="real-analysis-statement" markdown="1">

**Volume of a Rectangle.**

The volume of a rectangle $R$ is denoted and defined by
\[
|R| = (b_1 - a_1) \times \dots \times (b_d - a_d).
\]

</div>

 Again, whenever I mention the cube, it will always be a **closed cube**. If we need an open cube or open rectangle, I will explicitly say that it is an open rectangle or open cube. A closed cube is a rectangle with the same sides. So when $b_1 - a_1 = \dots = b_d - a_d$, then we will call it a cube. 

<div class="real-analysis-statement" markdown="1">

**Cube.**

A (closed) cube is a rectangle with $b_1 - a_1 = \dots = b_d - a_d$.

</div>

In later sections, we will approximate a random set by simple sets like rectangles or cubes. To emphasize again, we will always play with closed rectangles and closed cubes.

But if you have two closed rectangles, they might share an edge, or the side of the rectangles when they are adjacent. Thus we cannot say that such two rectangles are disjoint because they share something, but they are **almost** disjoint, except for adjacent parts.  

<div class="real-analysis-statement" markdown="1">

**Almost Disjoint.**

A union of rectangles is **almost disjoint** if the interiors of the rectangles are disjoint.

</div>

That's why we use above as the definition of almost disjoint, if the interiors of the rectangles are disjoint. If you have two rectangles sharing an edge or side, they are not disjoint because of that. But they are almost disjoint because we can find small open rectangles inside them, then these two open rectangles are disjoint. They don't share anything. In that case, we say that they are almost disjoint. These are basic terminologies that we will use throughout the lecture.

<div class="real-analysis-statement" markdown="1">

**Remark.**

Our first goal was to construct the Lebesgue measure in $\mathbb{R}^d$. What we want to do is to measure the size of the sets. Naturally, if we have a simple set like a rectangle or cube, we can easily measure the size of the set. Unfortunately, we have very strange sets like the **Cantor set**. We know that the Cantor set has measure or length zero. Moreover, there are much more strange sets in the world. There even exists a set which cannot be measured. Anyway, our goal is to construct the Lebesgue measure and we want to know how to measure the size of the set. 

</div>

The first lemma is about the almost disjoint union of rectangles. If $R$ is the almost disjoint union of finite rectangles, $R_1, R_2, \cdots, R_N$, then we can measure the size of the $\bigcup_{i=1}^{N} R_i$. Clearly, if you have a single rectangle, then the volume is given by the product of the lengths. If you have a finite union of a single rectangle then the volume is given by the sum of volumes of each rectangles, which is obvious. But if you look at the proof actually it's more complicated than you think. Please check the proof by yourself. I will skip the proof.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.1.**

If $R$ is the almost disjoint union of finitely many rectangles $R_1, \dots, R_N$, then
\[
|R| = \sum_{i=1}^N |R_i|.
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
(Homework)

</div>

The next lemma is about when $R$ is exactly the union of rectangles. As they are all rectangles, then the volume of this rectangle will be less than or equal to the sum of those, which is also straightforward and it's not counterintuitive. Try to prove this by yourself.

<div class="real-analysis-statement" markdown="1">

**Lemma 1.2.**

If $R \subset \bigcup_{i=1}^N R_i$ where $R$ and $R_i$ are rectangles, then
\[
|R| \le \sum_{i=1}^N |R_i|.
\]

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
(Homework)

</div>

Now we will go further and further. We began with a simple rectangle and we considered a finite union of rectangles. In the following, we will proceed to an open set. For open set, I will always use this notation $\mathcal{O}$. If $\mathcal{O} \in \mathbb{R}$, then $\mathcal{O}$ is a subset of $\mathbb{R}$ with dimension one. We want to compute the length of $\mathcal{O}$. Actually, it's not trivial because an open set can be very ugly. It's not always given by a simple interval or finite union of intervals. Thus it can be very ugly, but actually, we have a very beautiful theorem about one-dimensional open sets which says that any open set can be written even uniquely as an at most countable union of disjoint open intervals.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.3.**

Every open set $\mathcal{O} \subset \mathbb{R}$ can be written uniquely as an at most countable union of disjoint open intervals.

</div>

This theorem is beautiful in two aspects. First, it can be written **uniquely** as a **countable union of disjoint open intervals**. In the previous the result `lemma1.1`, we considered almost disjoint unions of closed rectangles. But in this case, we represent an open set $\mathcal{O}$ by open intervals that are *really* disjoint. *i.e.* they are pairwise disjoint to each other. Moreover, *at most countable* means it is either finite or countable. Let me give you a proof of this theorem.

<div class="real-analysis-proof" markdown="1">

*Proof.*
For each point $x$ in this set, we will assign an open interval $I_x$ which is given by an interval from $a_x$ to $b_x$ and is a subset of $\mathcal{O}$. Formally, $I_x = (a_x, b_x) \subset \mathcal{O}$ where
\[
a_x = \inf\{a < x : (a, x) \subset \mathcal{O}\}, \quad b_x = \sup\{x < b : (x, b) \subset \mathcal{O}\}.
\]
Note that $I_x$ is the largest open interval containing $x$ and contained in $\mathcal{O}$, because $a_x$ is given by the infimum of all $a < x$ so that this interval $(a_x, x)$ is entirely contained in the open set $\mathcal{O}$. Similary, you may check for $b_x$. Then you may take the union over all points $x \in \mathcal{O}$, then following equality holds:
\[
\mathcal{O} = \bigcup_{x \in \mathcal{O}} I_x.
\]

Now we will prove two things. First we will prove that this union is actually disjoint. Thus open intervals $I_x$ and $I_y$ are disjoint. They do not meet. Second, we will prove that this union is at most countable. Original open set $\mathcal{O}$ may contain uncountably many points. However, the union $\bigcup_{x \in \mathcal{O}} I_x$ forms an at most countable union.

<ol>

<li markdown="1">**$\bigcup_{x \in O} I_x$ is a union of disjoint intervals.** \\
        Suppose that $I_{x} \cap I_{y} \neq \emptyset$. Then we will prove that these two intervals coincide in the end. This implies that these intervals are disjoint. 

        We can take $x \in I_{x} \cup I_{y}$. Since $I_{x} \subset \mathcal{O}$ and $I_{y} \subset \mathcal{O}$, so do for the union $I_{x} \cup I_{y} \subset \mathcal{O}$. By definition of $I_x$, it is the largest open interval containing $x$. Thus we have $I_{x} \cup I_{y} \subset I_x$. In other words, the interval $I_y$ must be contained in $I_x$ because the union of the sets is contained in $I_x$. *i.e.* $I_y \subset I_x$. 
        
        By the same argument, if you begin with a point $y$, we also have $I_x \cup I_y \subset I_y$ as well. Therefore we can conclude that $I_x$ is contained in $I_y$ as well. *i.e.* $I_x \subset I_y$. Therefore, $I_x = I_y$. 
        
        Now we have proved that if $I_x$ and $I_y$ are not disjoint, then they coincide. So this is what we wanted to prove. So the union $\bigcup_{x \in O} I_x$ is a union of disjoint intervals.
        
</li>
<li markdown="1">**$\bigcup_{x \in O} I_x$ contains at most countable intervals.** \\
        Since each $I_x$ contains a rational number, the collection of disjoint intervals is at most countable. In particular, we may form a bijection between the collection of disjoint intervals and a subset of rational numbers. Since the set of rational numbers is countable, so is the collection of disjoint intervals. Thus we have proved that $\bigcup_{x \in O} I_x$ contains at most countable intervals.

</li>
</ol>

</div>

By this the result `thm:1.3`, we can measure the size of the open set at least on the real line. We can define the measure of the open set by the countable sum, an at most countable sum of the lengths of these intervals. 

<div class="real-analysis-statement" markdown="1">

**Remark.**

     
    
<ul>

<li markdown="1">If $\mathcal{O} = \bigcup_{j=1}^\infty I_j$ (where $I_j$ are disjoint open intervals), then this measure can be defined by the sum of the lengths of all intervals:
        \[
        |\mathcal{O}| := \sum_{j=1}^\infty |I_j|.
        \]
        Here the absolute value of $I_j$ means the length of the interval, because this is a special case of an open rectangle. thus this will be our definition of the measure of an open set. 
    
</li>
</ul>

</div>

Now we know how to measure the open set on $\mathbb{R}$. But you cannot do this in higher-dimensional space. Hereby important remark is about higher dimensions. For the one dimensional case, if we have an arbitrary open set in the real line, then we would represent this open set with simplest sets like open intervals. But if you imagine a two-dimensional object like an open disk, you may want to fill this open disk with simpler objects like open rectangles. Indeed, if we try to fill in this open disk with open rectangles, they may share an edges. Those parts are not covered by rectangles. This becomes a serious problem in higher-dimensional space. 
Hence for an open ball, actually any open set other than a rectangle, cannot be represented as a union of open rectangles. They are not a countable union of disjoint open rectangles. In conclusion, there is no simple way to define a measure of an open set in a higher-dimensional space. You can find some examples in exercise 12 in this chapter.

<div class="real-analysis-statement" markdown="1">

**Remark.**

     
    
<ul>

<li markdown="1">In higher dimensions, an open ball is not a countable union of disjoint open rectangles. (Exercise 12).
    
</li>
</ul>

</div>

Therfore we will have a different claim in higher-dimensional space. You may compare the result `thm:1.3` and the result `thm:1.4`. If you have an open set $\mathcal{O} \subset \mathbb{R}^d$, where $1 \leq d$, which also contains the one-dimensional case. Then $\mathcal{O}$ can be written, **not uniquely**, as an at most countable union of almost disjoint closed cubes. Thus for the higher-dimensional space we don't have the unique representation of an open set. Furthermore, we cannot cover a arbitrary open set by disjoint rectangles. Instead, we can cover it by almost disjoint closed cubes. They would share an edge but it's not a problem when you define a measure, because the measure of side is zero. In this way, we will be able to define the measure of an open set in higher dimensions.

<div class="real-analysis-statement" markdown="1">

**Theorem 1.4.**

Every open set $O \subset \mathbb{R}^d$ ($d \ge 1$) can be written as an at most countable union of almost disjoint closed cubes.

</div>

<div class="real-analysis-proof" markdown="1">

*Proof.*
And let me first give you the proof of this theorem. The idea is very simple. So that's actually the idea. So if you have an open set like this, we first take a lattice of side one. 

<ol>

<li markdown="1">**** \\
        So we accept all cubes of side one. Or you can fill in the open set with closed rectangles if you want. But let me work with cubes in this proof. So we accept all cubes of side one. We have this $\mathbb{Z}^d$ dimensional lattice, that are entirely contained in the open set $O$. So in this picture we accept this cube. So this cube is entirely contained in the open set. Right? And also this one but not this one because this part is not contained in the open set. Right? So in this picture these two cubes are the only cubes that are entirely contained in $O$. And then we reject all cubes that are contained in $O$ complement ($O^c$). So in this picture for instance this cube is contained entirely in the complement of the open set, right? Actually many of them are contained in the complement except for these ones. Right? Finally, we tentatively accept all remaining cubes. So remaining cubes satisfy this: if $Q$ denotes one of the remaining cubes, it means it intersects with $O$. So the intersection is not empty ($Q \cap O \neq \emptyset$) and it also intersects with $O$ complement ($Q \cap O^c \neq \emptyset$). Right?
        
</li>
<li markdown="1">**** \\
        For these cubes we do the same in the second step. This was the first step. In the second step we bisect the tentatively accepted cubes into $2^d$ cubes with side length $\frac{1}{2}$. So in the next step, so this cube is tentatively accepted in the previous step. So we bisect this cube and then... okay, these two cubes are contained in the open set entirely. So we accept these two cubes in the second step. But again we tentatively accept these two cubes because they intersect with $O$ and the complement $O^c$ at the same time. But if you for instance bisect this cube, these three cubes are tentatively accepted in the second step. But this one is not contained. So it is contained in the complement of $O$. So we will reject this cube. So in this way you will accept these cubes and we will tentatively accept these cubes for step three.

</li>
</ol>

We will iterate this indefinitely. So we will continue the second step... so that we finish this sentence. So we will bisect cubes with side length one half and repeat the process.

Now let's call it $\mathcal{Q}$. So I will distinguish $Q$ and $\mathcal{Q}$. Usually $\mathcal{Q}$ denotes a collection of cubes. So let me denote by $\mathcal{Q}$ the collection of all accepted cubes in the iteration. Then by construction it's clear to see that this collection is at most countable and also consists of almost disjoint cubes. This is clear from construction. So we have an at most countable union of almost disjoint cubes. 

And what remains to prove is that the whole open set is contained in the union of these cubes. So we have collected all accepted cubes in this collection. But now we need to prove that the open set is contained in the union. So let $x$ be an arbitrary point in the open set. And our claim is that this point is contained in at least one of these accepted cubes during the construction. But if you have a point in the set, then there exists at least one cube with side length $2^{-N}$ for some natural number $N$ so that $x$ is contained in $Q$ which is a subset of $O$. Okay. So let's say you took a point $x$ close to the boundary, then you can take at least one small cube, like a very small cube, so that this cube is entirely contained in the open set. This is always possible if you take a sufficiently large natural number $N$, right? Then either this cube has been accepted at step $N$, or it is contained in a larger cube that has been previously accepted. In either case, this point $x$ is contained in an accepted cube during the iteration. So this finishes the proof.

</div>

And now we can define the measure of an arbitrary open set in higher-dimensional space. Let me make a remark here. 

<div class="real-analysis-statement" markdown="1">

**Remark.**

     
    
<ul>

<li markdown="1">Let $\mathcal{O} \subset \mathbb{R}^d$ be an open set. Then the measure of $\mathcal{O}$ is defined by:
        \[
        |\mathcal{O}| := \sum_{j=1}^\infty |Q_j| \in [0, \infty].
        \]
    
</li>
</ul>

</div>

So the measure of $\mathcal{O}$, which is represented as a countable union of almost disjoint closed cubes... let me write it like this $\mathcal{O} = \bigcup_{j=1}^\infty Q_j$ ... this can be defined by the summation of all volumes of the closed cubes. But we have to be careful here because in the higher-dimensional case... I mean this statement is true even for the one-dimensional space, but in that case we have a stronger statement, right? If $d$ is bigger than one, like higher-dimensional cases, then this decomposition, I mean this representation, is not unique. So there can be two different ways to fill in the open set with almost disjoint cubes. For instance, I mean we started with the lattice like this, but we may start with larger cubes or translated cubes or something. 

So there are many, actually infinitely many ways to represent the open set with almost disjoint closed cubes, and in that case, we will have different definitions of the measure of an open set by using different representations. So you will get two different quantities and they might be different and we don't know *a priori* that they are equal or not. But in the end, we will figure out that they are actually equal. So that the measure of the open set is independent of the representation. But at this point we don't know whether this quantity is uniquely determinable or not. Okay, we have a serious problem in higher dimensions. So this is our discussion in section 1.1 and Exercise 12 is the homework in this section and we will proceed to the next section.

---
layout: blog
permalink: /blog/
title: Blog
nav: true
nav_order: 1
---

{% assign groups = site.data.blog_categories %}

<div class="blog-home">
  <header class="blog-hero">
    <div>
      <p class="blog-kicker">LEARNING ARCHIVE</p>
      <h1>공부 기록</h1>
      <p class="blog-intro">수학과 컴퓨터과학을 공부하며 이해한 내용을 수식, 코드, 직관으로 정리합니다.</p>
    </div>
    <button class="blog-search-button" type="button" onclick="openSearchModal()" aria-label="블로그 검색 열기">
      <i class="ti ti-search" aria-hidden="true"></i><span>글 검색</span>
    </button>
  </header>

  <section class="blog-latest" aria-labelledby="latest-title">
    <div class="blog-section-heading"><p class="blog-section-label">NEW NOTES</p><h2 id="latest-title">최근 공부한 내용</h2></div>
    <div class="blog-latest-grid">
      {% assign latest_count = 0 %}
      {% for post in site.posts %}
        {% assign visible = false %}
        {% for group in groups %}
          {% if post.categories contains group.slug %}{% assign visible = true %}{% endif %}
          {% for child in group.children %}{% if post.categories contains child.slug %}{% assign visible = true %}{% endif %}{% endfor %}
        {% endfor %}
        {% if visible and latest_count < 3 %}
          <article class="blog-latest-card">
            <div class="blog-card-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time>{% if post.categories.first %}<span>{{ post.categories.first }}</span>{% endif %}</div>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            {% if post.description %}<p>{{ post.description | strip_html | truncate: 100 }}</p>{% elsif post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 100 }}</p>{% endif %}
            <a class="blog-card-link" href="{{ post.url | relative_url }}">읽기 <span aria-hidden="true">→</span></a>
          </article>
          {% assign latest_count = latest_count | plus: 1 %}
        {% endif %}
      {% endfor %}
      {% if latest_count == 0 %}<div class="blog-empty-state"><strong>첫 번째 공부 기록을 기다리고 있어요.</strong><p>글을 발행하면 최근 글이 이곳에 자동으로 표시됩니다.</p></div>{% endif %}
    </div>
  </section>

  <div class="blog-content-grid">
    <div class="blog-topic-list">
      <div class="blog-section-heading"><p class="blog-section-label">TOPICS</p><h2>분야별 노트</h2></div>
      {% for group in groups %}
        {% assign shown = 0 %}
        <section class="blog-topic-section" id="topic-{{ group.slug }}">
          <div class="blog-topic-header">
            <div><h3>{{ group.title }}</h3><p>{{ group.description }}</p></div>
            <div class="blog-topic-chips" aria-label="{{ group.title }} 세부 카테고리">
              {% for child in group.children %}<a href="{{ '/blog/category/' | append: child.slug | append: '/' | relative_url }}">{{ child.title }}</a>{% endfor %}
            </div>
          </div>
          <div class="blog-post-rows">
            {% for post in site.posts %}
              {% assign matches = false %}
              {% if post.categories contains group.slug %}{% assign matches = true %}{% endif %}
              {% for child in group.children %}{% if post.categories contains child.slug %}{% assign matches = true %}{% endif %}{% endfor %}
              {% if matches and shown < 5 %}
                <article class="blog-post-row"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time><a href="{{ post.url | relative_url }}">{{ post.title }}</a></article>
                {% assign shown = shown | plus: 1 %}
              {% endif %}
            {% endfor %}
            {% if shown == 0 %}<p class="blog-topic-empty">아직 공개된 글이 없습니다.</p>{% endif %}
          </div>
        </section>
      {% endfor %}
    </div>

    <aside class="blog-category-sidebar" aria-label="블로그 카테고리">
      <div class="blog-category-panel">
        <div class="blog-category-title"><span>분류 전체보기</span><a href="{{ '/blog/' | relative_url }}">전체</a></div>
        <nav class="blog-category-tree">
          {% for group in groups %}
            {% assign direct_posts = site.categories[group.slug] %}{% assign total = direct_posts | size %}
            {% for child in group.children %}{% assign child_posts = site.categories[child.slug] %}{% assign child_count = child_posts | size %}{% assign total = total | plus: child_count %}{% endfor %}
            <details {% if forloop.first %}open{% endif %}>
              <summary><span>{{ group.title }}</span><span class="blog-category-count">{{ total }}</span></summary>
              <ul>{% for child in group.children %}{% assign child_posts = site.categories[child.slug] %}<li><a href="{{ '/blog/category/' | append: child.slug | append: '/' | relative_url }}"><span>{{ child.title }}</span><span class="blog-category-count">{{ child_posts | size }}</span></a></li>{% endfor %}</ul>
            </details>
          {% endfor %}
        </nav>
      </div>
    </aside>

  </div>
</div>

---
layout: blog
permalink: /blog/
title: Blog
nav: true
nav_order: 1
description: Study notes on mathematics, optimization, and computer science.
---

<div class="blog-home">
  <header class="blog-hero">
    <div><h1 id="blog-title">Research Notes</h1><p class="blog-intro">공돌이 대학(원)생의 공부 기록</p></div>
    <div class="blog-header-links"><a href="#all-notes-title">Search articles</a><a class="feed-link" href="{{ '/feed.xml' | relative_url }}">RSS</a></div>
  </header>

{% assign courses = site.data.blog_categories %}

  <div class="blog-content-grid">
    <div class="blog-topic-list">
      <div class="section-heading"><h2>Browse by Course</h2></div>
      {% for course in courses %}
        {% assign course_posts = site.categories[course.slug] | sort: 'date' %}
        {% if course_posts.size > 0 %}
          <section class="blog-topic-section" id="topic-{{ course.slug }}">
            <div class="blog-topic-header">
              <div><h3>{{ course.title }}</h3><p>{{ course.description }}</p></div>
              <div class="blog-topic-chips">
                <a href="{{ course_posts.first.url | relative_url }}">첫 글부터 읽기 →</a>
                <a href="{{ '/blog/category/' | append: course.slug | append: '/' | relative_url }}">전체 {{ course_posts.size }}편</a>
              </div>
            </div>
            <div class="blog-post-rows">
              {% for post in course_posts limit: 5 %}
                <article class="blog-post-row"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></article>
              {% endfor %}
              {% if course_posts.size > 5 %}
                <details class="blog-more-posts"><summary>View all {{ course_posts.size }} articles</summary>
                  {% for post in course_posts offset: 5 %}
                    <article class="blog-post-row"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></article>
                  {% endfor %}
                </details>
              {% endif %}
            </div>
          </section>
        {% endif %}
      {% endfor %}
    </div>

    <aside class="blog-category-sidebar" aria-label="Courses">
      <div class="blog-category-panel">
        <div class="blog-category-title"><span>Courses</span><a href="#all-notes-title">All</a></div>
        <nav class="blog-category-tree">
          <ul>
            {% for course in courses %}
              {% assign course_posts = site.categories[course.slug] %}
              {% if course_posts.size > 0 %}
                <li><a href="{{ '/blog/category/' | append: course.slug | append: '/' | relative_url }}"><span>{{ course.title }}</span><span class="blog-category-count">{{ course_posts.size }}</span></a></li>
              {% endif %}
            {% endfor %}
          </ul>
        </nav>
      </div>
    </aside>

  </div>

  <section class="notebook-index" aria-labelledby="all-notes-title">
    <div class="section-heading section-heading-split"><div><h2 id="all-notes-title">All notes</h2></div><p id="note-count" role="status" aria-live="polite">{{ site.posts.size }} notes</p></div>
    <div class="notebook-controls" hidden>
      <label class="notebook-search"><span class="sr-only">Search notes by title, topic, or description</span><i class="ti ti-search" aria-hidden="true"></i><input id="note-search" type="search" placeholder="Search articles…" autocomplete="off"></label>
      <label class="notebook-sort"><span>Order</span><select id="note-sort"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></label>
    </div>
    <div class="topic-filters" role="group" aria-label="Filter notes by topic" hidden>
      <button type="button" data-topic="" aria-pressed="true">All topics <span>{{ site.posts.size }}</span></button>
      {% assign sorted_categories = site.categories | sort %}
      {% for category in sorted_categories %}
        {% assign label = category[0] | replace: '-', ' ' | capitalize %}
        {% for course in courses %}{% if course.slug == category[0] %}{% assign label = course.title %}{% endif %}{% endfor %}
        <button type="button" data-topic="{{ category[0] | escape }}" aria-pressed="false">{{ label }} <span>{{ category[1].size }}</span></button>
      {% endfor %}
    </div>
    <div class="note-list" id="all-notes">
      {% for post in site.posts %}
        <article class="note-row" data-note data-topics="{{ post.categories | jsonify | escape }}" data-search="{{ post.title | append: ' ' | append: post.description | escape }} {{ post.tags | join: ' ' | escape }} {{ post.topic_label | escape }}" data-date="{{ post.date | date: '%s' }}">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %d, %Y' }}</time>
          <div><p class="note-topic">{{ post.topic_label }}</p><h3><a href="{% if post.redirect %}{{ post.redirect | relative_url }}{% else %}{{ post.url | relative_url }}{% endif %}">{{ post.title | escape }}</a></h3>{% if post.description %}<p>{{ post.description | escape }}</p>{% endif %}</div>
          <span class="note-reading-time">{{ post.reading_minutes }} min read</span>
        </article>
      {% endfor %}
    </div>
    <div id="no-notes" class="notebook-empty" hidden><h3>No matching notes.</h3><p>Try a broader term or another topic.</p><button type="button" id="reset-notes">Clear filters</button></div>
    <noscript><p>Browse all notes above, or use your browser’s Find command to look for a topic.</p></noscript>
  </section>
</div>

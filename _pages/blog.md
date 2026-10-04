---
layout: blog
permalink: /blog/
title: Notes
nav: true
nav_order: 1
description: A working notebook on mathematics, optimization, and computation. Read by topic, follow a series, or find a specific idea.
---

<div class="blog-home">
  <header class="blog-hero">
    <div><p class="eyebrow">The working notebook</p><h1 id="blog-title">Research notes<span>.</span></h1><p class="blog-intro">A place to think carefully, work through proofs, and connect ideas.<br>수학과 계산, 그리고 그 사이의 생각을 기록합니다.</p></div>
    <a class="feed-link" href="{{ '/feed.xml' | relative_url }}">Follow via RSS ↗</a>
  </header>

{% assign course_notes = site.posts | where_exp: 'post', 'post.categories contains "real-analysis"' | sort: 'date' %}
{% if course_notes.size > 0 %}

<section class="series-feature" aria-labelledby="series-title">
<div><p class="eyebrow">A guided reading path / {{ course_notes.size }} notes</p><h2 id="series-title">Real analysis, from the ground up.</h2><p>From measure and integration to Hilbert spaces and Fourier analysis. Follow the notes in order, or pick up where your curiosity leads.</p><a href="{{ course_notes.first.url | relative_url }}">Start with the foundations <span aria-hidden="true">→</span></a></div>
<div class="series-outline" aria-label="Topics in this series"><span>01 <span>Measure &amp; integration</span></span><span>02 <span>Differentiation &amp; convergence</span></span><span>03 <span>Hilbert spaces &amp; Fourier analysis</span></span></div>
</section>
{% endif %}

  <section class="notebook-index" aria-labelledby="all-notes-title">
    <div class="section-heading section-heading-split"><div><p class="eyebrow">Explore the archive</p><h2 id="all-notes-title">All notes</h2></div><p id="note-count" role="status" aria-live="polite">{{ site.posts.size }} notes</p></div>
    <div class="notebook-controls" hidden>
      <label class="notebook-search"><span class="sr-only">Search notes by title, topic, or description</span><i class="ti ti-search" aria-hidden="true"></i><input id="note-search" type="search" placeholder="Search an idea, a theorem, a topic…" autocomplete="off"></label>
      <label class="notebook-sort"><span>Order</span><select id="note-sort"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></label>
    </div>
    <div class="topic-filters" role="group" aria-label="Filter notes by topic" hidden>
      <button type="button" data-topic="" aria-pressed="true">All topics <span>{{ site.posts.size }}</span></button>
      {% assign sorted_categories = site.categories | sort %}
      {% for category in sorted_categories %}
        {% assign label = category[0] | replace: '-', ' ' | capitalize %}
        {% for group in site.data.blog_categories %}{% if group.slug == category[0] %}{% assign label = group.title %}{% endif %}{% for child in group.children %}{% if child.slug == category[0] %}{% assign label = child.title %}{% endif %}{% endfor %}{% endfor %}
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

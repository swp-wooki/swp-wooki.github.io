---
layout: page
title: Selected work
nav_title: Projects
permalink: /projects/
description: Mathematical ideas, tested against practical problems.
nav: true
nav_order: 3
---

<div class="project-index">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <article class="project-feature">
    {% if project.img %}<a class="project-image" href="{{ project.url | relative_url }}" aria-label="Read {{ project.title | escape }}">{% include figure.liquid loading="lazy" path=project.img alt=project.title class="img-fluid" %}</a>{% endif %}
    <div><p class="eyebrow">Selected project / {{ forloop.index | prepend: '0' }}</p><h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2><p>{{ project.description }}</p><a class="project-read" href="{{ project.url | relative_url }}">Explore the project <span aria-hidden="true">→</span></a>{% if project.github %}<a class="project-read" href="{{ project.github }}">Source code ↗</a>{% endif %}</div>
  </article>
{% endfor %}
</div>

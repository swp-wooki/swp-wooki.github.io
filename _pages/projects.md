---
layout: page
title: Projects
permalink: /projects/
description: Selected projects in optimization, applied mathematics, and software engineering.
nav: true
nav_order: 3
---

<div class="project-index">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <article class="project-feature">
    {% if project.img %}<a class="project-image" href="{{ project.url | relative_url }}" aria-label="Read {{ project.title | escape }}">{% include figure.liquid loading="lazy" path=project.img alt=project.title class="img-fluid" %}</a>{% endif %}
    <div><h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2><p>{{ project.description }}</p><a class="project-read" href="{{ project.url | relative_url }}">Read more <span aria-hidden="true">→</span></a>{% if project.github %}<a class="project-read" href="{{ project.github }}">Source code ↗</a>{% endif %}</div>
  </article>
{% endfor %}
</div>

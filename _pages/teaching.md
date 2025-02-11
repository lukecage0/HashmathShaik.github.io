---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

{% include base_path %}

Stony Brook University
-----

{% for post in site.teaching reversed %}
  {% if post.venue == "Stony Brook University" %}
    {% include archive-single-teaching.html %}
  {% endif %}
{% endfor %}

Lakehead University
-----

{% for post in site.teaching reversed %}
  {% if post.venue == "Lakehead University" %}
    {% include archive-single-teaching.html %}
  {% endif %}
{% endfor %}

Jawaharlal Nehru Technological University, Kakinada
-----

{% for post in site.teaching reversed %}
  {% if post.venue == "Jawaharlal Nehru Technological University" %}
    {% include archive-single-teaching.html %}
  {% endif %}
{% endfor %}
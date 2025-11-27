---
layout: default
title: Blog
---
# Blog

Welcome to my blog. This page lists posts from the `_posts` folder.

{% for post in site.posts %}
  <article class="post-list-item">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="muted">{{ post.date | date: "%b %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
  </article>
{% endfor %}

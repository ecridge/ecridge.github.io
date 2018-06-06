---
layout: page
title: Design
navbar: true
permalink: /design/
---

<script type="application/ld+json">{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"{{ site.url }}{{ site.baseurl }}/design/","name":"Design"}}]}</script>
<ul class="post-list">
  {% for post in site.categories.design %}<li itemscope itemtype="http://schema.org/BlogPosting">
    {% if post.description %}<meta itemprop="description" content="{{ post.description | strip_newlines | truncate: 160 }}" />
    {% endif %}{% if post.thumbnail %}<meta itemprop="image" content="{{ post.thumbnail | prepend: site.baseurl | prepend: site.url}}" />
    {% endif %}<span class="post-meta"><date itemprop="datePublished" datetime="{{ post.date | date: "%Y-%m-%d" }}">{% assign m = post.date | date: "%-m" | plus: 0 %}{% if m > 2 and m < 9 %}{{ post.date | date: "%B" }} {% elsif m == 9 %}Sept. {% else %}{{ post.date | date: "%b" }}. {% endif %}{{ post.date | date: "%-d, %Y" }}</time></span>
    <h2 itemprop="headline" class="squish"><a class="post-link" itemprop="url" href="{{ post.url | prepend: site.baseurl }}"> {{ post.title}}</a></h2>
    <p itemprop="description" class="post-excerpt">
      {{ post.description }}
    </p>
  </li>{% endfor %}
</ul>

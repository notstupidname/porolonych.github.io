---
title: voylok-10mm
layout: default
permalink: /catalog/:path
type: "product"
---

{% for product in site.catalog %}
<h2>{{ product.title }}</h2>
<p>{{ product.url }}</p>
<p>{{ page.url }}</p>
{% endfor %}
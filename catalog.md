---
title: catalog
layout: default
permalink: /catalog/
type: "category"
---
<h2>Catalog</h2>
<h3>{{ page.url }}</h3>
{% for product in site.catalog %}
{% if product.type == "category" %}
<h3>{{ product.title }}</h3>
<p>{{ product.url }}</p>
{% endif %}
{% endfor %}
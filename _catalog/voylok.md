---
title: voylok-i-fetr
layout: default
permalink: /catalog/:path/
type: "category"
---
<h2>Category</h2>
<h3>{{ page.url }}</h3>
{% for product in site.catalog %}
{% if product.type != "category" and product.url contains page.url%}
<h3>{{ product.title }}</h3>
<p>{{ product.url }}</p>
{% endif %}
{% endfor %}
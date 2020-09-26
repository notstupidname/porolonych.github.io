---
title: Каталог товаров - Поролоныч
description: Поролон, искусственная кожа, вилатерм и другие товары оптом и в розницу с доставкой по Москве от компании "Поролоныч".

layout: generic
permalink: /catalog/

page_title: Каталог
---

<section class="items">
	{%-assign sorted_cat = site.catalog | sort: 'weight'-%}
	{%-for cat in sorted_cat-%}
		{%-if cat.type == "category"-%}
		<div class="item">
			<header>
				<a href="{{cat.url}}">
					<img class="image fit" loading="lazy" src="{{cat.prod_image}}"/>
					<h2>{{cat.page_title}}</h2>
				</a>
				<p>{{cat.prod_short_desc}}</p>
			</header>
		</div>
		{%-endif-%}
	{%-endfor-%}
</section>
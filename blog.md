---
title: Блог о поролоне - Поролоныч
description: Статьи о поролоне, искусственной коже и других товарах от компании "Поролоныч".
layout: generic
permalink: /blog/

page_title: Блог
---
<section class="items">
	{%-for post in site.posts-%}
		<div class="item">
			<header>
				<a href="{{post.url}}">
					<img class="image fit" loading="lazy" src="{{post.prod_image}}"/>
					<h2>{{post.page_title}}</h2>
				</a>
				<p>{{post.prod_short_desc}}</p>
                <a class="accent" href="{{ post.url }}">Читать далее</a>
			</header>
		</div>
	{%-endfor-%}
</section>

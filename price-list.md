---
title: Прайс-лист на поролон - Поролоныч
description: Цены на поролон и другую продукцию от компании "Поролоныч". Актуальные розничные и оптовые цены.

layout: generic
permalink: /price-list/

page_title: Прайс-лист
---

<p>Актуальные цены на все товары представлены в разделе <a class="accent" href="/catalog/">Каталог</a>.</p>
<p>Обращаем Ваше внимание на то, что цены в розничном магазине могут отличаться от представленных на сайте. Пожалуйста уточняйте цены на интересующие Вас товары по телефону <a class="accent" href="tel:+74994080024">+7&nbsp;(499)&nbsp;408-00-24</a>.</p>
<hr />
<h2>Прайс-лист на поролон</h2>
<p>У нас в магазине Вы можете купить поролон в розницу. Цена поролона в розницу указана в рублях за лист. При покупке поролона мелким оптом (от 30 000 руб.) цена поролона уменьшится. Практически любой поролоновый лист в розницу есть в наличии в нашем магазине, точное наличие поролона Вы всегда сможете узнать по телефону или отправив запрос по e-mail.</p>
{%-assign sorted_cat = site.catalog | sort: 'weight'-%}
{%-for product in sorted_cat-%}
{%-if product.type != "category"-%}
{%-if product.url contains "porolon"-%}
{%-unless product.url contains "2000"-%}
{%-if product.products.size > 1-%}
{%-assign url_list = product.url | split: '/'-%}
{%-assign prod_name = url_list | last-%}
<h3 id="{{prod_name}}"><a href="{{product.url}}">{{product.product_title | truncatewords: 2, ""}}</a></h3>
<p>{{product.product_short_desc}} <a class="accent" href="{{product.url}}">Подробнее</a></p>
<div class="table-wrapper">
<table class="alt">
<thead>
<tr>
<th>Размер листа, мм</th>
<th>{{product.param_name}}, {{product.param_mes}}</th>
<th>Розничная цена листа, руб.</th>
<th>Оптовая цена листа, руб.</th>
</tr>
</thead>
<tbody>
{%-for prod in product.products-%}
<tr>
<td>{{product.properties[0].value | truncatewords: 1, ""}}</td>
<td>{{prod.param}}</td>
<td>{{prod.price}}</td>
<td>{{prod.price | times: 0.85 | divided_by: 10 | ceil | times: 10}}</td>
</tr>
{%-endfor-%}
{%-for inner_prod in sorted_cat-%}
{%-if inner_prod.url contains product.url-%}
{%-if inner_prod.url != product.url-%}
{%-for prod in inner_prod.products-%}
<tr>
<td>{{inner_prod.properties[0].value | truncatewords: 1, ""}}</td>
<td>{{prod.param}}</td>
<td>{{prod.price}}</td>
<td>{{prod.price | times: 0.85 | divided_by: 10 | ceil | times: 10}}</td>
</tr>
{%-endfor-%}
{%-endif-%}
{%-endif-%}
{%-endfor-%}
</tbody>
</table>
</div>
{%-endif-%}
{%-endunless-%}
{%-endif-%}
{%-endif-%}
{%-endfor-%}
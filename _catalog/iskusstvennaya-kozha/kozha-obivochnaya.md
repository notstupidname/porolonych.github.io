---
title: Искусственная кожа обивочная - Поролоныч
description: Купить искусственную кожу обивочную в розницу с доставкой по Москве.

layout: product
permalink: /catalog/:path
type: "product"
weight: 1

prod_title: Кожа обивочная
prod_short_desc: <b style="color:#ff0000">156 ЦВЕТОВ!</b><br />Обладает приятным дизайном и слабовыраженным тиснением. Высокая прочность и износостойкость.
prod_full_desc: Обладает приятным дизайном и слабовыраженным тиснением. Высокая прочность и износостойкость.
prod_message: При заказе товара пожалуйста уточните необходимые параметры (цвет и количество).
price: 400
price-a: " - 500 руб/м.п."

chars:
- "Материал основы: трикотаж"
- "Материал верха: ПВХ"
- "Ширина, м: 1,4"

usage:

related:
- kozha-ekonom
- kozha-dvernaya
- kley-mebelniy-poling
- porolon-el-2040

colors:
- image: 27
  title: "Цвет №306 Тиснение №84 Печать №02330"
- image: 30
  title: "Цвет №314 Тиснение №84 Печать №01314"
- image: 201
  title: "Цвет №991 Тиснение №84"
- image: 202
  title: "Цвет №99 Тиснение №84"
- image: 200
  title: "Цвет №96 Тиснение №34"
- image: 199
  title: "Цвет №84 Тиснение №54 Печать №01314"
- image: 198
  title: "Цвет №721Д Тиснение №54"
- image: 197
  title: "Цвет №703 Тиснение №84"  
---
<div class="row 50%">
	{% for color in page.colors %}
	<div class="3u 4u(medium) 6u(small) gallery">
		<a title="{{color.title}}" class="image feature fancybox" href="/images/kozha/{{color.image}}.jpg" data-fancybox-group="gallery"><img src="/images/kozha/{{color.image}}.jpg" alt="{{color.title}}"/><p>{{color.title}}</p></a>
	</div>
	{% endfor %}
	<div style="text-align:center;width:100%">
		<a href="/catalog/iskusstvennaya-kozha/katalog-cvetov-kozhi" class="button">Смотреть все цвета</a>
	</div>
</div>

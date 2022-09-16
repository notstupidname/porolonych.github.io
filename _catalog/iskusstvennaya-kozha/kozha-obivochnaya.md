---
title: Искусственная кожа обивочная - Поролоныч
description: Купить искусственную кожу обивочную в розницу с доставкой по Москве.

layout: product
permalink: /catalog/:path
image: /images/catalog/iskusstvennaya-kozha/kozha-obivochnaya-01_1600w.jpg
type: product

weight: 1
add_category: 

product_title: Кожа обивочная
product_short_desc: Обладает приятным дизайном и слабовыраженным тиснением. Высокая прочность и износостойкость.
product_full_desc: Обладает приятным дизайном и слабовыраженным тиснением. Высокая прочность и износостойкость.
        
price_after: "м.п."
properties:
- name: Материал основы
  value: трикотаж
- name: Материал верха
  value: ПВХ
- name: Ширина
  value: 1,4 м

related:
- kozha-ekonom
- kozha-dvernaya
- kley-mebelniy-poling
- porolon-el-2040

products:
- id: 1260
  price: 500
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

---
<div class="items">
{%-for color in page.colors-%}
<div class="item">
<img class="image fit" loading="lazy" src="/images/kozha/{{color.image}}.jpg" alt="{{color.title}}" title="{{color.title}}"/>
<p>{{color.title}}</p>
</div>
{%-endfor-%}
</div>
<ul class="actions align-center">
<li>
<a href="/catalog/iskusstvennaya-kozha/katalog-cvetov-kozhi" class="button special">Смотреть все цвета</a>
</li>
</ul>
---
date: 2020-05-29T06:58:20Z
title: Почему провайдеры CDN/Serverless тарифицируют по пользователям, а не по мощности?
slug: cdn-serverless-pricing
excerpt: CDN/Serverless-провайдеры вроде Netlify и Vercel не берут плату за мощность
  сервера и ёмкость хранилища. Почему? Ответ в этой заметке.
tags:
- Netlify
- Vercel
- CDN
- Serverless
category: ''
action: ''

---
Обычный хостинг тарифицирует по мощности сервера, потому что так или иначе провайдер выделяет некие мощности определённой машины. Если это shared-хостинг, то он выделяет часть вычислительных ресурсов и памяти одной машины для многих клиентов, и администрируется самим провайдером. Если VPS/VDS-сервер, то выделяется целый компьютер под клиента — он обычно заметно дороже общего (shared) хостинга, там больше мощности и он стабильнее, но администрирование и настройка производится самим клиентом, для этого нужны иметь админские навыки.

**CDN/Serverless** — работает по другой технологии. Это супер-shared-хостинг, когда хранилище и вычислительно мощности распределены по тысячам компьютеров, соответственно распределены и нагрузки — а значит, нет смысла продавать конкретные мощности компьютера, потому что его физически определить для клиента невозможно. Плюс этого в том, что эта схема намного стабильнее, она сама масштабируется и не требует никакого администрирования, только минимальная настройка. Поэтому продают здесь просто пропускную способность сети, которая стоит копейки, и саму добавленную стоимость этого решения в виде тарификации по количеству людей, которым эти технологии экономят время.
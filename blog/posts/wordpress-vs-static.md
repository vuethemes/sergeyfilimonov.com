---
title: Статичный сайт vs. сайт на WordPress
slug: wordpress-vs-static
author: [sergey]
date: 2019-03-13
action: Узнать разницу
excerpt: "Стоит ли создавать сайт на WordPress в 2019 году? Я сравнил процесс создания сайта по двум подходами: если он полностью построен на WordPress и если он создан как статичный сайт по технологии JAMstack. Какой из лучше и почему — читайте в этой статье."
---

По некоторой статистике, около 30% всех сайтов и большинство блогов в интернете работают сегодня на WordPress. Но значит ли это, что и сегодня, чтобы создать сайт быстро и получить при этом удобную CMS, нужно использовать проверенный временем WordPress? В каком-нибудь 2016-м или 2017-м году я бы сказал, что особых альтернатив WordPress нет, но в 2018-м ситуация резко изменилась с появлением нескольких фреймворков для создания статичных сайтов.

Главным из них стал фреймворк [Gatsby](https://www.gatsbyjs.org/), позволяющий относительно быстро собрать шаблоны сайта с помощью React и подключить к ним данные из любого источника (в том числе WordPress) через GraphQL. Сегодня, в 2019-м Gatsby уже не единственный такой фреймворк. Сегодня набирает популярность [Gridsome](https://gridsome.org), созданный по точно такому же принципу, но в качестве шаблонизатора можно использовать более простой, удобный и по-своему привлекательный Vue вместо React, а также делать запросы с помощью тега `<page-query>`.

В общем, WordPress теперь есть чем заменить, и новые альтернативы глобально имеют намного больше перспектив. Но что выбрать в вашем конкретном случае — читайте дальше о плюсах и минусах обоих подходов.

## <i class="fab fa-wordpress-simple"></i> Преимущества WordPress над статичными сайтами

- ✅ **Больше экспертизы на рынке**. Найти разработчика, который знает, как настраивать и улучшать WordPress, — легко. Разработка статичных сайтов требует специалистов более высокой квалификации.
- ✅ **Быстрое развёртывание**. Запустить сайт на WordPress может занять полчаса-час. При этом не нужно заморачиваться над тем, где он будет расположен: подойдёт любой хостинг c PHP и MySQL.
- ✅ **Есть масса готовых тем**. Не отметить это я не могу — действительно, отличных с виду тем, созданных для WordPress, много, но по факту редко получается использовать их так, как задумали создатели. От этого приходится тему дописывать под себя — что иногда затратнее, чем написать тему с нуля.
- ✅ **Есть много готовых плагинов и развитое API**. Для WordPress есть очень много плагинов, которых пока нет или не скоро появятся в публичных библиотеках типа NPM, откуда берутся все модули для статичных сайтов.

## <i class="fab fa-js-square"></i> Преимущества статичных сайтов над WordPress

- ✅ **Максимальная скорость загрузки**. Статичный сайт фактически является просто готовыми HTML-файлами, размещёнными на CDN-серверах. То есть при обращении к сайту не происходит запросов к базе данных и не тратится время на сборку HTML-файла, который нужно в итоге показать в браузере пользователя. WordPress может достичь этого только с помощью платных кеширующих плагинов (на моём опыте, лучший — WP Rocket), но по факту не это даёт такой же эффект.
- ✅ **Максимальная безопасность**. База данных, CMS и файлы сайта находятся в разных местах. Это значит, злоумышленник никогда не получит доступ к сайту, просто зайдя на ваш FTP или админку сайта.
- ✅ **CMS — на ваш выбор**. Вы можете использовать, как WordPress, так и любую другую CMS, которая имеет внешнее API.
- ✅ **Интерес к этому растёт**. Это значит, что интерес к развитию и разработке на WordPress, постепенно падает, а значит самые квалифицированные кадры, работающие с современными технологияи разработки, вряд ли будут инвестировать своё время в старую платформу, написанную на PHP. Скорее всего, они предпочтут то, что написано на JavaScript.
- ✅ **Больше свободы в разработке**. При работе с WordPress, ты вынужден учитывать то, как работает WordPress, его темы и плагины и как сделать так, чтобы новые возможности не конфликтовали ни по стилям, ни функционально. От этого тратится лишнее время на разработку и работать в такие моменты с WordPress никакого удовольствия не составляет. В отличие от работы с Gatsby или Gridsome.

## Резюме

Подводя итог, можно сказать одно: сайт на WordPress сделать дешевле и быстрее на старте, но, если смотреть на это интегрально, вдолгую, то статичный сайт окажется более солидной инвестицией, так как он будет сделан под вас на 100%, будет более привлекательным для поисковиков и пользователей за счёт максмальной скорости загрузки.
---
title: Как вылавливать ошибки JavaScript на мобильном
slug: mobile-dubug
date: 2019-10-14T00:00:00.196+0300
category: note
action: Узнать как
excerpt: Поиск ошибок JavaScript на телефонах и планшетах задача непростая, так как большинство мобильных устройств не позволяют посмотреть консоль внутри браузера. Одно из решений — при возникновении ошибки просто показывать окно с ошибкой. Временно, конечно.
tags: ['JavaScript']
---

```js
window.onerror = function (msg, url, line) {
 alert(msg + "\n" + url + "\n" + "\n" + line);
 return true;
};
```

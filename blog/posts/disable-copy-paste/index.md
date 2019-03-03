---
title: Как отключить копирование
---

``` JavaScript
document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}
```

``` CSS
h1, h2, h3, p, li {
	-webkit-user-select: none;
}
```

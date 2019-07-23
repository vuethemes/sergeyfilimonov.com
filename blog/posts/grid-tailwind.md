---
title: A grid system for Tailwind CSS
slug: grid-tailwind
date: 2019-06-23T00:01:00.196+0300
category: article
action: More
excerpt: A simple grid system which Tailwind definitely lacks for now.
tags: ['Tailwind CSS', 'CSS']
---

In all of my projects built with Tailwind, I always use my own grid system while we are all waiting for a native one to come from Tailwind's core team. It's pretty simple so just copy and modify it as you want. It's also being used in my [Tailwind components library](/tools/tailwind).

```css
.grid-cols {
  --space: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: calc( var(--space));
  &--gap-2 { grid-gap: calc( var(--space)); }
  &--2m3d { grid-template-columns: repeat(2, 1fr); }
  &--2m4d { grid-template-columns: repeat(2, 1fr); }
  &--2 { grid-template-columns: repeat(1, 1fr); }
  &--3 { grid-template-columns: repeat(1, 1fr); }
  &--4 { grid-template-columns: repeat(1, 1fr); }
  &--5 { grid-template-columns: repeat(1, 1fr); }
  &--6 { grid-template-columns: repeat(1, 1fr); }
  &--7 { grid-template-columns: repeat(1, 1fr); }
  &--8 { grid-template-columns: repeat(1, 1fr); }
  &--2-1-1 { grid-template-columns: repeat(1, 1fr); }
}

@screen lg {
  .grid-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: calc(var(--space));
    &--gap-2 { grid-gap: calc( var(--space) * 2); }
    &--2m3d { grid-template-columns: repeat(3, 1fr); }
    &--2m4d { grid-template-columns: repeat(4, 1fr); }
    &--2 { grid-template-columns: repeat(2, 1fr); }
    &--3 { grid-template-columns: repeat(3, 1fr); }
    &--4 { grid-template-columns: repeat(4, 1fr); }
    &--5 { grid-template-columns: repeat(5, 1fr); }
    &--6 { grid-template-columns: repeat(6, 1fr); }
    &--7 { grid-template-columns: repeat(7, 1fr); }
    &--8 { grid-template-columns: repeat(8, 1fr); }
    &--2-1-1 { grid-template-columns: 2fr 1fr 1fr; }
  }
}

```

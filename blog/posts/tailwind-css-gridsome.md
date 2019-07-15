---
title: How to add Tailwind CSS to Gridsome
slug: tailwind-css-gridsome
date: 2019-06-01 00:00:00
category: article
action: Get Tailwind CSS
excerpt: Here you will find instruction on how to add Tailwind CSS to Gridsome.
---

Install a few plugins:

```shell
yarn add tailwindcss tailwindcss-transitions postcss-import postcss-nested @fullhuman/postcss-purgecss
```

Add a code for extracting custom components from Tailwind in the very beginning of `gridsome.config.js`:

```js
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}
```

Add the following code to `module.exports` of `gridsome.config.js`:

```js
chainWebpack: config => {
  config.module
    .rule('css')
    .oneOf('normal')
    .use('postcss-loader')
    .tap(options => {
      options.plugins.unshift(...[
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
      ])

      if (process.env.NODE_ENV === 'production') {
        options.plugins.push(...[
          require('@fullhuman/postcss-purgecss')({
            content: [
              'src/assets/**/*.css',
              'src/**/*.vue',
              'src/**/*.js'
            ],
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['css', 'vue', 'js']
              }
            ],
            whitelistPatterns: [/shiki/]
          }),
        ])
      }
      return options
    })
}
```

Create `main.css` in `src/assets/css`:

```css
/*! purgecss start ignore */
@import 'tailwindcss/base';
/*! purgecss end ignore */

/* start components */
@import 'tailwindcss/components';
/* end components */

/* start utilities */
@import 'tailwindcss/utilities';
/* end utilities */
```

Add the following code to `main.js`:
```js
import '~/assets/css/main.css'
```

Done!

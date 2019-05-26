require('dotenv').config({path: 'variables.env'})

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: 'Сергей Филимонов',
  siteUrl: "https://sergeyfilimonov.com",
  siteDescription: "Разрабатываю статичные сайты с помощью Vue и Gridsome для проектов из SaaS и EdTech. Также создаю навыки для голосового помощника Алиса от Яндекса.",
  titleTemplate: '%s ∙ Сергей Филимонов',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      autolinkHeadings: {
        content: {
          type: 'text',
          value: '#'
        }
      }
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    },
    /*{
      use: '~/src/sources/products',
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        base: process.env.AIRTABLE_BASE,
      },
    },*/
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-WH2RFDV',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: "blog/posts/*.md",
        route: "blog/:slug",
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/404']
      }
    }
  ],
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
}

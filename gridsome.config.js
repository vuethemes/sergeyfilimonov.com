require('dotenv').config({path: 'vars.env'})

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
    {
      use: '~/src/sources/products',
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        base: process.env.AIRTABLE_BASE,
      },
    },
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
  ]
}

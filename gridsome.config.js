require('dotenv').config({path: 'variables.env'})

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: process.env.sitetName,
  siteUrl: process.env.siteUrl,
  titleTemplate: '%s',
  siteName: '',
  siteUrl: process.env.siteUrl,
  siteDescription: process.env.siteDescription,

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: process.env.GTM,
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
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'Сергей Филимонов о сайтах, продутикности и всём таком',
          feed_url: 'https://sergeyfilimonov.com/feed.xml',
          site_url: 'https://sergeyfilimonov.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://sergeyfilimonov.com/' + node.slug,
          author: node.author,
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'feed.xml'
        }
      }
    },
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

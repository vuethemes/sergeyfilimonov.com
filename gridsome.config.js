class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'Сергей Филимонов',
  siteUrl: 'sergeyfilimonov.com',
  titleTemplate: '%s',
  siteDescription: 'Разрабатываю статичные сайты с помощью Vue и Gridsome для проектов из SaaS и EdTech. Также создаю навыки для голосового помощника Алиса от Яндекса',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },

  plugins: [
    {
      use: 'gridsome-plugin-modal'
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
        typeName: 'Post',
        path: "src/data/posts/*.md",
        route: "blog/:slug",
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'min-light' } ]
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Course',
        path: "src/data/courses/*.md",
        route: "courses/:slug",
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'nord' } ]
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
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Сергей Филимонов о сайтах, продутивности и всём таком',
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
              whitelist: ['fa-telegram', 'svg-inline--fa'],
              whitelistPatterns: [/shiki/, /fa-$/]
            })
          ])
        }
        return options
      })
  }
}

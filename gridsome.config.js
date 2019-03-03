module.exports = {
  siteName: 'Сергей Филимонов',
  siteUrl: "https://sergeyfilimonov.com",
  siteDescription: "Сергей Филимонов",
  titleTemplate: '%s - Сергей Филимонов',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        //
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-135079945-1'
      }
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
        path: "blog/**/*.md",
        route: "blog/:slug"
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me']
      }
    }
  ]
}

module.exports = {
  siteName: 'Сергей Филимонов',
  siteUrl: "https://sergeyfilimonov.com",
  siteDescription: "Сергей Филимонов",
  titleTemplate: '%s - Сергей Филимонов',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post"
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-135079945-1'
      }
    },
    {
      use: 'gridsome-plugin-yandex-metrika',
      options: {
        id: '50285131'
      }
    }
  ]
}

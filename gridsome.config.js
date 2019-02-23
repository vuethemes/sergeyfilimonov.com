module.exports = {
  siteName: 'Сергей Филимонов',
  siteUrl: "https://sergeyfilimonov.com",
  siteDescription: "Сергей Филимонов",
  titleTemplate: '%s - Сергей Филимонов',
  icon: "static/favicon.jpg",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post"
      }
    }
  ]
}

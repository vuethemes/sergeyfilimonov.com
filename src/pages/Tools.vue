<template>
  <Layout>
    <div class="container section">
      <div class="mt-5 mb-4">
        <h1 class="text-3xl lg:text-6xl mb-4 leading-none font-bold">Инструменты</h1>
        <div class="text-lg lg:text-2xl max-w-3xl lg:my-8">
          Простые и эффективные инструменты, которые упрощают работу маркетологам и разработчикам сайтов и онлайн-сервисов.
        </div>
        <div class="markdown">
          <ul>
            <li><g-link to="/tools/text-length" class="link">Измеритель длины текста</g-link></li>
            <li><g-link to="/tools/ppi" class="link">Калькулятор PPI</g-link></li>
            <li><g-link to="/tools/utm" class="link">UTM-генератор ссылок</g-link></li>
            <li><g-link to="/tools/pinterest-embed" class="link">Pinterest Embed</g-link></li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'Инструменты для маркетологов и разработчиков',
        description: 'UTM-генератор ссылок, компонтенты для Tailwind и другое'
      }
    }
  },
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        { name: 'description', content: this.meta.description },
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/about.jpg' }
      ]
    }
  }
}
</script>

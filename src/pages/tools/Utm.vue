<template>
  <Layout>
    <div class="container section py-6">
      <h1 class="mb-4 lg:text-5xl text-3xl">Генератор UTM-меток</h1>
      <Utm/>
    </div>
  </Layout>
</template>

<script>
import Utm from '@/components/tools/Utm'

export default {
  components: {
    Utm
  },
  data() {
    return {
      meta: {
        title: 'Генератор UTM-меток',
        description: 'Platforma.pw — платформа для размещения онлайн-курсов: проводите марафоны и обучение на новой платформе, которая быстрее, удобнее остальных — и с хорошей поддержкой.'
      }
    }
  },
  metaInfo() {
    return {
      title: this.meta.title,
      description: this.meta.description,
      meta: [
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: 'https://platforma.pw/og/index.jpg' }
      ]
    }
  }
}
</script>

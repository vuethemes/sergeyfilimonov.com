<template>
  <Layout>
    <div class="container mt-5">
      <div class="section markdown">
        <h1>Мои выступления</h1>
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="">
            <div class="video-container mb-6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fs9jyO7ehQg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/MpaTFNpFzBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="">
            <iframe class="airtable-embed rounded shadow-lg" src="https://airtable.com/embed/shrL0xIQouOQsb0nP?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="100%"></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Contacts from '@/components/sections/Contacts'
import Reviews from '@/components/sections/site/Reviews'

export default {
  components: {
    Contacts,
    Reviews
  },
  data() {
    return {
      meta: {
        title: 'Привет, я Сергей Филимонов',
        description: 'Главное о моих проектах, ссылки на выступления, отзывы от клиентов и сотрудников'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/about.jpg' }
      ]
    }
  }
}
</script>

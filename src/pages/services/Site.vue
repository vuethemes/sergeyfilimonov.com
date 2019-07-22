<template>
  <Layout>
    <div class="container section">
      <div class="mb-4">
        <h1 class="text-3xl lg:text-6xl lg:font-bold mb-4">Разработка сайта под вас</h1>
        <div class="text-xl lg:text-2xl max-w-4xl">
          Сайт — точка сборки всего бренда не только для клиентов, но и для вас самих. При прочих равных бренд с хорошим сайтом всегда смотрится выигрышнее.
        </div>
      </div>
      <div class="mb-2 lg:mb-10">
        <ul class="flex text-xl lg:text-2xl flex-wrap">
          <li><a href="#" v-scroll-to="'#showcase'" class="link mr-4 mb-2 lg:mb-0">Работы</a></li>
          <li><a href="#" v-scroll-to="'#plans'" class="link mr-4 mb-2 lg:mb-0">Тарифы</a></li>
          <li><a href="#" v-scroll-to="'#testimonials'" class="link mr-4 mb-2 lg:mb-0">Отзывы</a></li>
          <li><a href="#" v-scroll-to="'#stack'" class="link mr-4 mb-2 lg:mb-0">Технологии</a></li>
          <li><a href="#" v-scroll-to="'#faq'" class="link mr-4 mb-2 lg:mb-0">FAQ</a></li>
        </ul>
      </div>
    </div>
    <Showcase/>
    <Plans/>
    <Testimonials/>
    <Stack/>
    <FAQ/>
  </Layout>
</template>

<script>
import Showcase from '@/components/sections/site/Showcase'
import Plans from '@/components/sections/site/Plans'
import Testimonials from '@/components/sections/site/Testimonials'
import Stack from '@/components/sections/site/Stack'
import FAQ from '@/components/sections/site/Faq'

export default {
  components: {
    Showcase,
    Plans,
    Testimonials,
    Stack,
    FAQ,
  },
  data() {
    return {
      meta: {
        title: 'Свой сайт',
        description: 'Помогаем создавать личные бренды и бренды для небольших, растущих компаний'
      }
    }
  },
  metaInfo() {
    return {
      title: this.meta.title,
      description: this.meta.description,
      meta: [
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.title },
        { property: "og:image", content: 'https://svoybrend.ru/og/index.jpg' }
      ]
    }
  }
}
</script>

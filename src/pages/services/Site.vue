<template>
  <Layout>
    <div class="container section">
      <div class="lg:mt-8 mb-4">
        <h1 class="text-3xl lg:text-6xl mb-4 leading-none"><span class="font-bold">Разработка сайта:</span><br>хорошо, в срок, без ТЗ</h1>
        <div class="text-lg lg:text-2xl max-w-4xl lg:my-8">
          Сайт — точка сборки всего бренда не только для клиентов, но и для вас самих. При прочих равных бренд с хорошим сайтом всегда смотрится выигрышнее.
        </div>
      </div>
      <div class="lg:mb-10">
        <ul class="flex text-lg lg:text-2xl flex-wrap">
          <li><a href="#" v-scroll-to="'#showcase'" class="link mr-4 mb-2 lg:mb-0">Работы</a></li>
          <li><a href="#" v-scroll-to="'#plans'" class="link mr-4 mb-2 lg:mb-0">Цены и сроки</a></li>
          <li><a href="#" v-scroll-to="'#reviews'" class="link mr-4 mb-2 lg:mb-0">Отзывы</a></li>
          <li><a href="#" v-scroll-to="'#stack'" class="link mr-4 mb-2 lg:mb-0">Технологии</a></li>
          <li><a href="#" v-scroll-to="'#faq'" class="link mr-4 mb-2 lg:mb-0">FAQ</a></li>
        </ul>
      </div>
    </div>
    <Contacts class="lg:my-8"/>
    <Showcase/>
    <Plans class="lg:mt-12"/>
    <div id="reviews" class="lg:mt-12 section container">
      <h2 class="text-3xl lg:text-5xl mb-4 font-bold">Отзывы клиентов</h2>
      <Reviews/>
    </div>
    <Stack class="lg:mt-12"/>
    <FAQ class="lg:mt-12"/>
    <Contacts id="contacts" class="mt-8"/>
  </Layout>
</template>

<script>
import Showcase from '@/components/sections/site/Showcase'
import Plans from '@/components/sections/site/Plans'
import Reviews from '@/components/sections/site/Reviews'
import Stack from '@/components/sections/site/Stack'
import FAQ from '@/components/sections/site/Faq'
import Contacts from '@/components/sections/Contacts'

export default {
  components: {
    Showcase,
    Plans,
    Reviews,
    Stack,
    FAQ,
    Contacts
  },
  data() {
    return {
      meta: {
        title: 'Разработка сайта: хорошо, в срок, без ТЗ',
        description: 'Перейдите и увидите работы, цены и сроки, отзывы, технологии, частые вопросы и все удобные каналы для связи.'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/site.jpg' }
      ]
    }
  }
}
</script>

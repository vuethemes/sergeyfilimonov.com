<template>
  <Layout>
    <div class="container section">
      <div class="mt-5 lg:mt-8 mb-4 grid lg:grid-cols-2 gap-6">
        <div class="flex-col justify-center">
          <h1 class="text-3xl lg:text-5xl mb-4 lg:mb-0 leading-tight">Зачем сегодня нужен сайт? И&nbsp;что такое «статичные» сайты?</h1>
          <div class="text-lg lg:text-2xl max-w-4xl mb-4 lg:my-8">
            Начнём с того, что сайт — отличная возможность собрать всё самое главное о вашем бренде в максимально концентрированном, структурированном и доступном виде. Сайт получается продуманным, красивым и быстрым именно за счёт <g-link to="/blog/wordpress-vs-static" class="link inline">статического фреймворка</g-link>.
          </div>
          <div class="lg:mb-10">
            <ul class="flex text-lg lg:text-2xl flex-wrap">
              <li class="mr-3 mb-1 lg:mb-0 font-bold">Подробнее:</li>
              <li><a href="#" v-scroll-to="'#showcase'" class="link mr-3 mb-1 lg:mb-0">Работы</a></li>
              <li><a href="#" v-scroll-to="'#plans'" class="link mr-3 mb-1 lg:mb-0">Цены и сроки</a></li>
              <li><a href="#" v-scroll-to="'#reviews'" class="link mr-3 mb-1 lg:mb-0">Отзывы</a></li>
              <li><a href="#" v-scroll-to="'#stack'" class="link mr-3 mb-1 lg:mb-0">Технологии</a></li>
              <li><a href="#" v-scroll-to="'#faq'" class="link mr-3 mb-1 lg:mb-0">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <g-image src="@/assets/images/dev.svg" class=""/>
        </div>
      </div>
    </div>
    <Contacts class="my-6 lg:mt-2 lg:mb-12"/>
    <Showcase class="mt-8"/>
    <Plans class="lg:mt-12 mt-8"/>
    <div id="reviews" class="lg:mt-12 mt-8 section container">
      <h2 class="text-3xl lg:text-5xl mb-4">Отзывы клиентов</h2>
      <Reviews/>
    </div>
    <Stack class="lg:mt-12 mt-8"/>
    <FAQ class="lg:mt-12 mt-8"/>
    <div id="contacts" class="mt-8">
      <div class="container section ">
        <h2 class="text-3xl lg:text-5xl mb-4">
          Контакты
        </h2>
        <div class="mb-6 text-lg lg:text-xl">
          Если вы согласны с порядками <a v-scroll-to="`#plans`" class="link">цен</a>, предлагаю обсудить проект в удобном мессенджере.
        </div>
      </div>
      <Contacts/>
    </div>
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
        description: 'Сайт — отличная возможность собрать всё самое главное о вашем бренде в максимально концентрированном, структурированном и доступном виде. Для каждого сайта я составляю карту смыслов, рисую прототип, затем — дизайн и в самом конце — программирование. Сайт получается продуманным, красивым и быстрым за счёт статического фреймворка.'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/site.jpg' }
      ]
    }
  }
}
</script>

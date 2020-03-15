<template>
  <Layout>
    <div class="container section">
      <div class="grid lg:grid-cols-2 gap-8 mt-5 lg:mt-8 mb-4 lg:mb-6">
        <div class="flex flex-col justify-center">
          <div class="mb-2 font-mono">Онлайн-курс</div>
          <h1 class="text-3xl lg:text-5xl mb-4 lg:mb-5 leading-tight">{{ $page.course.title }}</h1>
          <div class="text-lg lg:text-xl max-w-4xl mb-4">
            {{ $page.course.excerpt }}
          </div>
          <div class="mt-4">
            <a v-scroll-to="'#order'" class="button button--2xl rounded">Записаться</a>
          </div>
        </div>
        <div class="">
          <g-image :src="$page.course.cover" class=""/>
        </div>
      </div>
    </div>
    <div class="container section">
      <h2 class="text-3xl lg:text-4xl mb-4">Что вы узнаете из курса</h2>
      <div class="grid grid-cols-2 gap-6">
        <div class="">
          <ul>
            <li v-for="item in $page.course.program" class="lg:text-xl">— {{ item.title }}</li>
          </ul>
        </div>
        <div class="">
          <div class="border text-xl p-6">
            По всем обозначенным темам вы сможете задать вопросы в формате консультации (вопрос–ответ) в течение 30 дней.
          </div>
        </div>
      </div>
    </div>
    <div class="my-12"/>
    <div id="order" class="container section">
      <h2 class="text-3xl lg:text-4xl mb-4">Как записаться</h2>
      <div class="grid lg:grid-cols-2 gap-6">
        <div class="">
          <div class="lg:text-xl mb-4">
            Курс находится в разработке. Получить доступ можно будет с 6 апреля, но оплатить можно сейчас под цене предзаказа — 2900 ₽. После релиза курса он будет стоить 4900 ₽. К лету цена поднимется до 7900 ₽.
          </div>
          <a href="https://airtable.com/shrAi2qNIpRAo4sBd" target="_blank" class="button button--2xl rounded">Оставить заявку</a>
        </div>
        <div class="">

        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Course ($path: String!) {
  course: course (path: $path) {
    title
    content
    excerpt
    slug
    date
    tags
    cover
    program {
      title
    }
  }
}
</page-query>

<script>
import moment from 'moment'

export default {
  metaInfo() {
    return {
      title: `Онлайн-курс «${this.$page.course.title}» | Сергей Филимонов`,
      meta: [
        { name: 'description', content: this.$page.course.excerpt }
      ]
    }
  }
}
</script>

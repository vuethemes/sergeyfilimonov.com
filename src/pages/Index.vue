<template>
  <Layout>
    <div class="container section mt-3 lg:mt-6">
      <div class="grid-cols grid-cols--2-1-1">
        <div class="">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="'blog'"/>
        </div>
        <div class="">
          <div class="bg-gray-100 p-6">
            <div class="font-bold text-xs text-gray-500 mb-2">
              Технологии
            </div>
            <ul>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>Gridsome
              </li>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>Vue
              </li>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>GraphQL
              </li>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>Tailwind CSS
              </li>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>Figma
              </li>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>Now
              </li>
              <li class="flex items-center mb-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>WordPress
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"/>Contentful
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <div class="bg-gray-100 p-6">
            <div class="font-bold text-xs text-gray-500 mb-2 flex items-center">
              <div class="pulseAnim mr-1"><div/></div>
              Telegram
            </div>
            <div class="mb-4 pl-2 border-l border-social-telegram">
              <div class="text-sm mb-2">
                Source by Forpeople — большая библиотека дизайн-блоков для Sketch и Figma: 537 блоков, 571 элемент, 12 шаблонов страниц, всё в двух темах — светлой и тёмной.
              </div>
              <div class="text-xs">
                13 июля 2019
              </div>
            </div>
            <div class="mb-4 pl-2 border-l border-social-telegram">
              <div class="text-sm mb-2">
                colors.eva.design — генератор цветовых схем. Из особенностей — простой, приятный дизайн и, как заявлено, туда подключена нейросеть, которая врдое бы должна выдавать схемы более интересные, чем другие генераторы
              </div>
              <div class="text-xs">
                12 июля 2019
              </div>
            </div>
            <div class="mb-4 pl-2 border-l border-social-telegram">
              <div class="text-sm mb-2">
                freshstatus — условно бесплатные статусные страницы для вашиъ пользователей. Статусные страницы полезны для онлайн-сервисов, набравших такую популярность, что каждое падение сервиса вызывает шквал обрашений в поддержку. Вместо этого можно дать всем возможность видеть статус работы ваших серверов и самым активным пользователям дать возможность подписаться на сбои в работе сервиса. → https://www.freshworks.com/statuspage/
              </div>
              <div class="text-xs">
                11 июля 2019
              </div>
            </div>
            <div class="mb-4 pl-2 border-l border-social-telegram">
              <div class="text-sm mb-2">
                История GraphQL https://youtu.be/783ccP__No8
              </div>
              <div class="text-xs">
                1 июля 2019
              </div>
            </div>
            <a href="https://tele.click/sfilimonov" class="link text-social-telegram border-social-telegram">Все посты в Telegram</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        excerpt
        action
        content
        category
        date
      }
    }
  }
}
</page-query>

<script>
import PostCard from '@/components/PostCard'

export default {
  props: ['category'],
  components: {
    PostCard
  },
  data() {
    return {
      currentCategory: 'all'
    }
  },
  computed: {
    postsFiltered() {
      if(this.currentCategory != 'all') {
        return this.$page.posts.edges.filter(edge => edge.node.category == this.currentCategory)
      } else {
        return this.$page.posts.edges
      }
    }
  },
  mounted() {
    if(this.category) {
      this.currentCategory = this.category
    }
  },
  metaInfo: {
    title: 'Блог',
    meta: [
      { vmid: 'description', name: 'description', content: 'Среди моих работ: edmarket.ru, hr.netology.ru, spiridonov.ru, arttsapko.ru и др.' }
    ]
  }
}
</script>

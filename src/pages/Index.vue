<template>
  <Layout>
    <div class="container section mt-0 lg:mt-6">
      <div class="grid-cols grid-cols--2-1-1">
        <div class="">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="'blog'"/>
        </div>
        <div class="">
          <div class="bg-gray-100 p-6">
            <div class="font-bold text-xs text-gray-500 mb-2">
              Технологии веб-разработки
            </div>
            <ul>
              <li class="flex items-center mb-2">
                <img src="/images/stack/gridsome.png" class="w-5 h-5 mr-2">Gridsome
              </li>
              <li class="flex items-center mb-2">
                <img src="/images/stack/vue.png" class="w-5 h-5 mr-2">Vue
              </li>
              <li class="flex items-center mb-2">
                <img src="/images/stack/graphql.png" class="w-5 h-5 mr-2">GraphQL
              </li>
              <li class="flex items-center mb-2">
                <img src="/images/stack/tailwind-css.png" class="w-5 h-5 mr-2">Tailwind CSS
              </li>
              <li class="flex items-center mb-2">
                <img src="/images/stack/figma.png" class="w-5 h-5 mr-2">Figma
              </li>
              <li class="flex items-center mb-2">
                <img src="/images/stack/now.png" class="w-5 h-5 mr-2">Now
              </li>
              <li class="flex items-center mb-2">
                <img src="/images/stack/wordpress.png" class="w-5 h-5 mr-2">WordPress
              </li>
              <li class="flex items-center">
                <img src="/images/stack/contentful.png" class="w-5 h-5 mr-2">Contentful
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 p-6 mt-5">
            <div class="font-bold text-xs text-gray-500 mb-2">
              Технологии онлайн-продвижения
            </div>
            <ul>
              <li class="flex items-center mb-2">
                <div class="w-5 h-5 bg-gray-300 rounded-full mr-2"/>YouTube
              </li>
              <li class="flex items-center mb-2">
                <div class="w-5 h-5 bg-gray-300 rounded-full mr-2"/>Instagram
              </li>
              <li class="flex items-center mb-2">
                <div class="w-5 h-5 bg-gray-300 rounded-full mr-2"/>Email-маркетинг
              </li>
              <li class="flex items-center mb-2">
                <div class="w-5 h-5 bg-gray-300 rounded-full mr-2"/>Telegram
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 p-6 mt-5">
            <div class="font-bold text-xs text-gray-500 mb-2">
              Технологии управления
            </div>
            <ul>
              <li class="flex items-center mb-2">
                <div class="w-5 h-5 bg-gray-300 rounded-full mr-2"/>Продюсирование
              </li>
              <li class="flex items-center mb-2">
                <div class="w-5 h-5 bg-gray-300 rounded-full mr-2"/>Продакт-менеджмент
              </li>
            </ul>
          </div>
          <div class="bg-primary text-white p-6 mt-5">
            <div class="font-bold text-xs text-white mb-2">
              Реклама
            </div>
            <div class="">
              <div class="text-sm font-bold mb-1">
                Студия «Свой бренд»
              </div>
              <div class="text-sm">
                Мы работаем как студия и агентство одновременно. Часть услуг, составляющих личный бренд, мы делаем силами внутренней команды. Например, это касается сайтов и YouTube. Часть — доверяем другим студиям, с которыми мы работали и получили хороший результат. Например, это всё, что касается SEO.
              </div>
              <div class="text-sm mt-2 pl-2 border-white border-l-2">
                Заказать свой <a href="https://svoybrend.ru/svoy/site" target="_blank" class="link link--white">сайт</a>, <a href="https://svoybrend.ru/svoy/youtube" target="_blank" class="link link--white">YouTube-канал</a> и <a href="https://svoybrend.ru" target="_blank" class="link link--white">другое</a>
              </div>
            </div>
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
  metaInfo: {
    title: 'Сергей Филимонов о сайтах, продуктивности и всём таком',
    meta: [
      { vmid: 'description', name: 'description', content: 'Среди моих работ: edmarket.ru, hr.netology.ru, spiridonov.ru, arttsapko.ru и др.' }
    ]
  }
}
</script>

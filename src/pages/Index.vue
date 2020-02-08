<template>
  <Layout>
    <div class="container section mt-5">
      <div class="grid grid-cols-2 gap-6">
        <div class="">
          <div class="mb-6">
            <div class="flex items-center">
              <g-image src="@/assets/images/sergeyfilimonov.jpg" alt="Сергей Филимонов" class="lg:h-24 lg:w-24 h-12 w-12 rounded-full border border-theme-borderGray mr-2 lg:mr-4"/>
              <div class="">
                <div class="text-lg lg:text-3xl mb-0 leading-tight font-mono" style="word-spacing: -0.4rem;">Привет, я Сергей Филимонов</div>
                <div class="text-xs lg:text-base">
                  Здесь — коротко о том, что интересного я сделал и какими проектам занят в данный момент
                </div>
              </div>
            </div>
          </div>
          <div class="markdown">
            <ul class="">
              <li>Создаю современные и быстрые <g-link to="/services/site" class="link">статичные сайты</g-link> на Vue, GraphQL, Tailwind и Now. Участвую в официальной <a href="https://github.com/orgs/gridsome/teams/maintainers" target="_blank" class="link inline">команде</a> развития фреймворка Gridsome.</li>
              <li>Создаю <a href="https://platforma.pw/" target="_blank" class="link">платформу</a> для авторов онлайн-курсов.</li>
              <li>Веду <g-link to="/blog" class="link">блог</g-link> для маркетологов и разработчиков русско- и англоговорящих стран.</li>
              <li>Веду <a href="https://www.youtube.com/channel/UCoj3nHKZm6r2acowfEwSFww?view_as=subscriber" class="link">канал на YouTube</a> и <a href="https://tele.click/sergeyfilimonov_com" class="link">канал в Telegram</a>.</li>
              <li>Я создал более 20 сайтов, в том числе для <a href="https://edmarket.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">EdMarket</a>, <a href="https://hr.netology.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">Нетология HR</a>, <a href="https://ms.netology.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">Максим Спиридонов</a>.</li>
              <li>Соосновал онлайн-школу рисования <a href="https://arttsapko.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">arttsapko.ru</a>, отвечаю за системность развития и онлайн-платформу для обучения.</li>
              <li>Продюсировал канал на YouTube <a href="https://www.youtube.com/channel/UCfhY78Qw1PeWLphcaA7PcNQ" target="_blank" class="link" rel="nofollow noreferrer noopener">Максима Спиридонова</a></li>
            </ul>
          </div>
        </div>
        <div class="">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" currentPage="index" class="mb-4"/>
          <g-link to="/blog" class="link mt-2">Все посты →</g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(limit: 3) {
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
        tags
      }
    }
  }
}
</page-query>

<script>
import PostCard from '@/components/PostCard'
import WidgetTelegram from '@/components/WidgetTelegram'
import WidgetLessons from '@/components/WidgetLessons'

export default {
  components: {
    PostCard,
    WidgetTelegram,
    WidgetLessons
  },
  data() {
    return {
      meta: {
        title: 'Сергей Филимонов о сайтах, продуктивности и всём таком',
        description: 'Создаю удобные и стильные сайты, используя современные технологии вроде статических фреймворков, чат-ботов, авторассылок, использую авторские иллюстрации, профессиональные фото для создания уникальности сайтов. К слову, я участвую в официальной команде развития фреймворка Gridsome'
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

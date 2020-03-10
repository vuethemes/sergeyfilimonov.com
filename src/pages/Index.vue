<template>
  <Layout>
    <div class="container section mt-5">
      <div class="grid lg:grid-cols-2 gap-6">
        <div class="">
          <!-- <div class="mb-6">
            <div class="flex items-center">
              <g-image src="@/assets/images/sergeyfilimonov.jpg" alt="Сергей Филимонов" class="lg:h-24 lg:w-24 h-12 w-12 rounded-full border border-theme-borderGray mr-2 lg:mr-4"/>
              <div class="">
                <div class="text-lg lg:text-2xl font-bold mb-1 leading-tight font-mono" style="word-spacing: -0.4rem;">👋</div>
                <div class="text-xs lg:text-base">
                  Коротко расскажу о том, что интересного я сделал и какими проектам занят в данный момент.
                </div>
              </div>
            </div>
          </div> -->
          <div>
            <h1 class="text-4xl lg:mb-6 mb-4">Это блог о статичных сайтах, Airtable, Intercom, Notion и других сервисов в действии</h1>
            <div class="grid lg:grid-cols-2 gap-4 mb-4">
              <div class="">
                <g-image src="@/assets/images/sergey.jpg" alt="Сергей Филимонов" class="rounded"/>
              </div>
              <div class="lg:text-xl">
                Меня зовут Сергей Филимонов. Я занимаюсь маркетингом и специализируюсь на создании <g-link to="/services/site/" class="link">статичных сайтов</g-link>. В частности использую <g-link to="/blog/wordpress-vs-static/" class="link">Gridsome</g-link> (основанный на Vue) и Tailwind CSS для построения фронтенда, <g-link to="/blog/headless-cms/" class="link">headless CMS</g-link> (WordPress, Forestry и пр.) для управления контентом и <g-link to="/blog/serverless/" class="link">serveless-подход</g-link> для создания API.
              </div>
            </div>
            <p class="mb-4">
              Помимо этого я выступаю в роли координатора маркетинга на проекте: подбираю команды для продвижения в поиске (SEO), нахожу фотографов и видеографов для съёмок и помогаю <g-link to="/blog/edmarket-lms/" class="link">автоматизировать процессы</g-link> с помощью, например, Airtable.
            </p>
            <p class="mb-4">
              Веду <g-link to="/blog/" class="link">блог</g-link> на этом сайте на русском и английском (английский — для тем, связанных с разработкой, так как 95% информации приходится получать из иностранных источников и делиться своим опытом есть смысл также на английском). Также веду <a href="https://www.youtube.com/channel/UCoj3nHKZm6r2acowfEwSFww?view_as=subscriber" class="link">канал на YouTube</a> и <a href="https://tele.click/sergeyfilimonov_com" class="link">канал в Telegram</a>.
            </p>
            <p class="mb-4">
              Разрабатываю платформу для онлайн-образования <a href="https://platforma.pw" target="_blank" class="link">Platforma.pw</a>.
            </p>
            <p class="mb-4">
              В прошлом писал статьи и заметки на тему IT. <g-link to="/blog/apple-ibook/" class="link">Кое-что перенёс в свой блог</g-link>.
            </p>
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
  posts: allPost(limit: 4) {
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

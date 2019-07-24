<template>
  <Layout>
    <div class="container section mt-5">
      <div class="grid-cols grid-cols--2-1-1">
        <div class="">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" currentPage="index"/>
          <g-link to="/posts" class="link mt-2">Все посты</g-link>
        </div>
        <div class="">
          <WidgetStack/>
          <WidgetMarketing/>
          <WidgetManagement/>
          <WidgetSvoybrend/>
        </div>
        <div class="">
          <WidgetTelegram/>
          <WidgetLessons/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
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
import WidgetStack from '@/components/WidgetStack'
import WidgetSvoybrend from '@/components/WidgetSvoybrend'
import WidgetTelegram from '@/components/WidgetTelegram'
import WidgetMarketing from '@/components/WidgetMarketing'
import WidgetManagement from '@/components/WidgetManagement'
import WidgetLessons from '@/components/WidgetLessons'

export default {
  components: {
    PostCard,
    WidgetStack,
    WidgetSvoybrend,
    WidgetTelegram,
    WidgetMarketing,
    WidgetManagement,
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

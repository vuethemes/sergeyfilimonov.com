<template>
  <Layout>
    <div class="container section mt-0 lg:mt-6">
      <div class="grid-cols grid-cols--2-1-1">
        <div class="">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" currentPage="index"/>
        </div>
        <div class="">
          <WidgetStack/>
          <WidgetSvoybrend/>
        </div>
        <div class="">
          <WidgetTelegram/>
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

export default {
  components: {
    PostCard,
    WidgetStack,
    WidgetSvoybrend,
    WidgetTelegram
  },
  data() {
    return {
      meta: {
        title: 'Сергей Филимонов о сайтах, продуктивности и всём таком',
        description: 'Среди моих работ: edmarket.ru, hr.netology.ru, spiridonov.ru, arttsapko.ru и др.'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/og/index.jpg' }
      ]
    }
  }
}
</script>

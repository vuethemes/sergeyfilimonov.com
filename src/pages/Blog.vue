<template>
  <Layout>
    <div class="container section mt-5">
      <div class="">
        <div class="grid lg:grid-cols-2 gap-3">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" currentPage="index"/>
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
import PostCard from '@/components/cards/PostCard'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      meta: {
        title: 'Блог | Сергей Филимонов',
        description: 'Это блог о статичных сайтах, Airtable, Intercom, Notion и других сервисов в действии'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/og/index.jpg' }
      ]
    }
  }
}
</script>

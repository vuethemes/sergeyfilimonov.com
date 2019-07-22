<template>
  <Layout>
    <div class="container section mt-0 lg:mt-6">
      <div class="">
        <div class="max-w-xl mx-auto">
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
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      meta: {
        title: 'Все посты',
        description: ''
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

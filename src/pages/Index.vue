<template>
  <Layout>
    <div class="container section mt-10">
      <div class="max-w-xl">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="'blog'"/>
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

<template>
  <section id="blog-posts" class="section backgrouned">
    <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="currentPage"/>
  </section>
</template>

<static-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        excerpt
        content
        action
        slug
      }
    }
  }
}
</static-query>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  props: {
    headingText: String,
    currentPage: String
  },
  components: {
    PostCard
  }
}
</script>

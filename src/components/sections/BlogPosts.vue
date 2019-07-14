<template>
  <div id="posts" class="section">
    <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="currentPage"/>
  </div>
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
  props: ['headingText', 'currentPage'],
  components: {
    PostCard
  }
}
</script>

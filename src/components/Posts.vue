<template>
  <div id="posts" class="section">
    <div class="container">
      <div class="max-w-xl mx-auto">
        <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="currentPage"/>
        <g-link to="/posts" class="link mt-2">Все посты</g-link>
      </div>
    </div>
  </div>
</template>

<static-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        excerpt
        content
        action
        slug
        date
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

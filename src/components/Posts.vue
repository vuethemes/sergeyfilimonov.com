<template>
  <div id="posts" class="container section max-w-xl mx-auto mt-8">
    <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="currentPage"/>
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

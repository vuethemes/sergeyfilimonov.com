<template>
  <div id="posts" class="section">
    <div class="container">
      <h2 class="text-center text-2xl mb-6">Другие посты...</h2>
      <div class="grid lg:grid-cols-2 gap-4">
        <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node" :currentPage="currentPage" class="mb-4 lg:mb-0"/>
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
        tags
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

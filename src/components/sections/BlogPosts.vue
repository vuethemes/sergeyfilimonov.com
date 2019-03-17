<template>
  <section id="blog-posts" class="section backgrouned">
    <div class="is-size-3 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">✏️</div>
    <h2 class="is-size-3 is-size-3-mobile has-text-centered">{{headingText}}</h2>
    <p class="desc has-text-centered">В блоге я делюсь не только о том, что делаю профессионально — разработку сайтов, — но и своими исследованиями в других областях: искусственный интеллект, чатботы и прочее.</p>
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
        date (format: "D. MMMM YYYY")
        timeToRead
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

<template>
  <section id="blog-posts" class="section backgrouned">
    <h2 class="is-size-3 is-size-3-mobile has-text-centered">Блог</h2>
    <p class="desc has-text-centered">В блоге я делюсь не только о том, что делаю профессионально — <a href="/">разработку сайтов</a>, — но и своими исследованиями в других областях: искусственный интеллект, чатботы и прочее.</p>
    <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node"/>
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
      }
    }
  }
}
</static-query>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  }
}
</script>

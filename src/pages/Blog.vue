<template>
  <Layout>
    <main class="section">
      <h1 class="is-size-1 is-size-3-mobile has-text-centered">Блог</h1>
      <p class="desc has-text-centered">В блоге я делюсь не только о том, что делаю профессионально — <a href="/">разработку сайтов</a>, — но и своими исследованиями в других областях: искусственный интеллект, чатботы и прочее.</p>
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </main>
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
        date (format: "D. MMMM YYYY")
        timeToRead
        excerpt
        content
      }
    }
  }
}
</page-query>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Блог'
  }
}
</script>

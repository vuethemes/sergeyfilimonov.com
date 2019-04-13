<template>
  <Layout>
    <main class="section">
      <h1 class="is-size-1 is-size-3-mobile has-text-centered">Блог</h1>
      <p class="desc has-text-centered lead">В блоге я делюсь не только о том, что делаю профессионально — <a class="is-size-5 is-size-5-mobile" href="/">разработку сайтов</a>, — но и своими исследованиями в других областях: искусственный интеллект, чат-боты и прочее.</p>
      <div class="tabs is-centered">
        <ul>
          <li :class="{'is-active' : currentCategory == 'all'}"
            @click="currentCategory = 'all'">
            <a>Все посты</a>
          </li>
          <li :class="{'is-active' : currentCategory == 'talks'}"
            @click="currentCategory = 'talks'">
            <a>Выступления</a>
          </li>
        </ul>
      </div>
      <PostCard v-for="edge in postsFiltered" :key="edge.node.id" :post="edge.node" :currentPage="'blog'"/>
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

<style lang="scss">
.tabs {
  max-width: 780px;
  margin: auto;
  ul {
    border-bottom: none !important;
    margin-bottom: 0rem;
    margin-top: 2rem;
    text-align: center;
  }
}
</style>

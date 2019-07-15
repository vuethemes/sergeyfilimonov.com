<template>
  <Layout>
    <!-- <vue-scroll-progress-bar height="2px" backgroundColor="#3273dc"/> -->
    <article class="container section max-w-3xl mx-auto mt-0 lg:mt-8 markdown">
      <div class="mb-4 text-xs lg:text-base" v-html="formattedPublishDate"/>
      <h1 class="" v-html="$page.post.title"/>
      <div class="text-lg lg:text-2xl mb-4" v-html="$page.post.excerpt"/>
      <div v-html="$page.post.content"/>
      <!-- <vue-disqus class="mt-8" shortname="sergeyfilimonov-com" :identifier="$page.post.slug" :url="'https://sergeyfilimonov.com/' + $route.path">
      </vue-disqus> -->
    </article>
    <Posts :currentPage="$page.post.slug" class="border-t-2 border-gray-200 pt-8"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    excerpt
    slug
    date
  }
}
</page-query>

<script>
import moment from 'moment'

import Posts from '@/components/Posts'

export default {
  components: {
    Posts
  },
  computed: {
    formattedPublishDate() {
      return moment(this.$page.post.date).format('DD.MM.YYYY')
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>

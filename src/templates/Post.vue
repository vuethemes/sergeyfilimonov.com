<template>
  <Layout>
    <!-- <vue-scroll-progress-bar height="2px" backgroundColor="#3273dc"/> -->
    <div class="container section max-w-3xl mx-auto">
      <article class="mt-5 markdown">
        <div class="lg:mb-4 mb-1 text-xs lg:text-base" v-html="formattedPublishDate"/>
        <h1 class="" v-html="$page.post.title"/>
        <div class="text-lg lg:text-2xl mb-4" v-html="$page.post.excerpt"/>
        <div v-html="$page.post.content"/>
      </article>
      <ul class="mt-8 flex">
        <li v-for="tag in $page.post.tags" v-html="tag" class="rounded-full border-theme-backgroundGray border-2 border-solid px-4 py-2 mr-3"/>
      </ul>
      <!-- <vue-disqus class="mt-8" shortname="sergeyfilimonov-com" :identifier="$page.post.slug" :url="'https://sergeyfilimonov.com/' + $route.path">
      </vue-disqus> -->
    </div>
    <Posts :currentPage="$page.post.slug" class="border-t-2 border-theme-backgroundGray pt-12 mt-6 lg:mt-12"/>
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
    tags
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

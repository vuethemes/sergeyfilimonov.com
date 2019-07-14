<template>
  <Layout>
    <!-- <vue-scroll-progress-bar height="2px" backgroundColor="#3273dc"/> -->
    <article class="container section max-w-3xl mx-auto mt-8">
      <h1 class="text-4xl mb-4" v-html="$page.post.title"/>
      <p class="text-xl mb-4" v-html="$page.post.excerpt"/>
      <div class="markdown" v-html="$page.post.content"/>
      <vue-disqus
        shortname="sergeyfilimonov-com"
        :identifier="$page.post.slug"
        :url="'https://sergeyfilimonov.com/' + $route.path">
      </vue-disqus>
    </article>
    <BlogPosts :headingText="'Другие статьи'" :currentPage="$page.post.slug"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    content
    excerpt
    slug
  }
}
</page-query>

<script>
import BlogPosts from '@/components/sections/BlogPosts'

export default {
  components: {
    BlogPosts
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

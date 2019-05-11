<template>
  <Layout>
    <vue-scroll-progress-bar height="2px" backgroundColor="#3273dc"/>
    <article class="section content">
      <h1 class="is-size-1 is-size-3-mobile" v-html="$page.post.title"/>
      <p class="lead" v-html="$page.post.excerpt"/>
      <div v-html="$page.post.content"/>
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

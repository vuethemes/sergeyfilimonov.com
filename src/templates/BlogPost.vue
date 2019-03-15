<template>
  <Layout>
    <article class="section">
      <yandex-share :services="['facebook','vkontakte','telegram','whatsapp']" counter />
      <h1 class="is-size-1 is-size-3-mobile" v-html="$page.post.title"/>
      <p class="lead" v-html="$page.post.excerpt"/>
      <div v-html="$page.post.content"/>
      <vue-disqus
        shortname="sergeyfilimonov-com"
        :identifier="$page.post.slug"
        :url="'https://sergeyfilimonov.com/' + $route.path">
      </vue-disqus>
    </article>
    <BlogPosts :headingText="'Другие статьи'" :slug="this.$page.post.slug"/>
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
import YandexShare from '@cookieseater/vue-yandex-share'
import BlogPosts from '@/components/sections/BlogPosts'

export default {
  props: {
    slug: String
  },
  components: {
    YandexShare,
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

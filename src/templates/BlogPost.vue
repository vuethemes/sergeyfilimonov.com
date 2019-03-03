<template>
  <Layout>
    <article class="section">
      <h1 class="is-size-1" v-html="$page.post.title"/>
      <p class="lead" v-html="$page.post.excerpt"/>
      <div v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    content
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

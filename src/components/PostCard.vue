<template>
  <g-link :to="post.path">
    <div v-if="post.slug != currentPage" class="post-card">
      <h3 v-html="post.title"/>
      <p v-html="post.excerpt"/>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
    currentPage: String
  }
}
</script>

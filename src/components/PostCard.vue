<template>
  <div class="post-card">
    <h3 v-html="post.title"/>
    <p v-html="post.excerpt"/>
    <g-link :to="post.path">
      Читать →
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true }
  }
}
</script>

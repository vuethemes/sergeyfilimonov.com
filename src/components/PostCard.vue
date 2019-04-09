<template>
  <g-link :to="post.path">
    <div v-if="post.slug != currentPage" class="post-card">
      <h3 class="is-size-4" v-html="post.title"/>
      <p v-html="post.excerpt"/>
      <button class="button is-text">{{post.action}} →</button>
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

<style lang="scss">
.post-card {
  padding: 1.6rem;
  border: 1px solid #eee;
  border-radius: 6px;
  max-width: 720px;
  margin: auto;
  margin-top: 2rem;
  transition: .2s;
  background: #fff;
  color: var(--color) !important;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px -6px rgba(0,0,0,0.2);
  }
}
</style>

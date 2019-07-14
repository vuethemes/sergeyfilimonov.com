<template>
  <g-link :to="post.path">
    <div v-if="post.slug != currentPage" class="post-card content">
      <h3 class="is-size-4" v-html="post.title"/>
      <p v-html="post.excerpt"/>
      <button class="button is-text">{{post.action}} →</button>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ['post', 'currentPage']
}
</script>

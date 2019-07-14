<template>
  <g-link :to="post.path" v-if="post.slug != currentPage" class="block p-6 border-gray-400 border rounded-lg mb-4 hover:shadow-lg">
    <h3 class="text-2xl mb-2" v-html="post.title"/>
    <div class="mb-2" v-html="post.excerpt"/>
    <div class="link" href="#">{{post.action}} →</div>
  </g-link>
</template>

<script>
export default {
  props: ['post', 'currentPage']
}
</script>

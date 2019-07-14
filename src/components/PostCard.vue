<template>
  <g-link :to="post.path" class="block p-6 border-gray-500 border shadow rounded mb-4 max-w-4xl mx-auto">
    <div v-if="post.slug != currentPage" class="">
      <h3 class="text-2xl mb-2" v-html="post.title"/>
      <p class="mb-2" v-html="post.excerpt"/>
      <a class="link" href="#">{{post.action}} →</a>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ['post', 'currentPage']
}
</script>

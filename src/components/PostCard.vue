<template>
  <g-link :to="post.path" v-if="post.slug != currentPage" class="block p-6 border-gray-200 border mb-4 hover:shadow-lg">
    <div v-html="post.date" class="mb-2 text-xs"/>
    <h3 class="text-2xl mb-2" v-html="post.title"/>
    <div v-html="post.excerpt"/>
  </g-link>
</template>

<script>
export default {
  props: ['post', 'currentPage']
}
</script>

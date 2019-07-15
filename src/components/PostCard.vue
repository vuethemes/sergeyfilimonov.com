<template>
  <g-link :to="post.path" v-if="post.slug != currentPage" class="block p-6 border-gray-200 border mb-4 hover:shadow-lg">
    <div v-html="formattedPublishDate" class="mb-2 text-xs"/>
    <h3 class="text-2xl mb-2" v-html="post.title"/>
    <div v-html="post.excerpt"/>
  </g-link>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post', 'currentPage'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.date).format('DD.MM.YYYY');
    }
  },
}
</script>

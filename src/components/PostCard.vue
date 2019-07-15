<template>
  <g-link :to="post.path" v-if="post.slug != currentPage" class="block p-6 border-theme-backgroundGray border mb-4 hover:shadow-lg bg-theme-backgroundGray transform--move-top">
    <div class="mb-2 text-xs">{{ formattedPublishDate }}</div>
    <h3 class="text-2xl mb-2 leading-tight font-bold" v-html="post.title"/>
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
  }
}
</script>

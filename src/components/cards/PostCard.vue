<template>
  <g-link
    :to="post.path"
    v-if="post.slug != currentPage"
    class="block p-4 lg:p-6 border-theme-backgroundGray border hover:shadow-lg bg-theme-background transform--move-top border-theme-borderGray">
    <div class="mb-2 text-xs font-mono">{{ formattedPublishDate }}</div>
    <h3 class="text-2xl mb-2 leading-tight" v-html="post.title"/>
    <div v-html="post.excerpt"/>
  </g-link>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post', 'currentPage'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.date).format('DD.MM.YYYY')
    }
  }
}
</script>

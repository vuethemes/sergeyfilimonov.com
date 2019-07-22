<template>
  <g-link :to="post.path" v-if="post.slug != currentPage" class="block p-6 border-theme-backgroundGray border mb-4 hover:shadow-lg bg-theme-background transform--move-top border-theme-borderGray">
    <div class="mb-2 text-xs">{{ formattedPublishDate }}</div>
    <h3 class="text-2xl mb-2 leading-tight font-bold" v-html="post.title"/>
    <div v-html="post.excerpt"/>
    <ul class="mt-4 flex">
      <li v-for="tag in post.tags" v-html="tag" class="text-xs rounded-full border-theme-backgroundGray border-2 border-solid px-2 py-1 mr-2"/>
    </ul>
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

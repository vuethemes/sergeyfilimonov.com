<template>
  <div class="topline" v-if="$route.path != link && lang != 'en'">
    🆕 Свежий пост в блоге: <a :href="link">«Статичный сайт vs. сайт на WordPress»</a>
  </div>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      link: '/blog/wordpress-vs-static'
    }
  }
}
</script>

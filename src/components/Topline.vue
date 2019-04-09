<template>
  <div class="topline" v-if="$route.path != link && lang != 'en'" v-rellax="{speed: -4}">
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

<style lang="scss">
.topline {
  background: rgb(129,4,147);
  background: linear-gradient(41deg, rgba(129,4,147,1) 0%, rgba(67,153,255,1) 100%);
  text-align: center;
  padding: 1rem;
  color: #fff;
  a {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
      color: #fff;
    }
  }
}

</style>

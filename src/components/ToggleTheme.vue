<template>
  <a class="" @click.prevent="toggleTheme">
    <i v-if="this.$store.getters.theme == 'theme-light'" class="far fa-sun"></i>
    <i v-else class="far fa-moon"></i>
  </a>
</template>

<script>
export default {
  mounted() {
    let theme = localStorage.getItem('theme') || 'theme-light'
    this.$store.commit('changeTheme', theme)
  },
  methods: {
    toggleTheme() {
      let theme = this.$store.getters.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', theme)
      this.$store.commit('changeTheme', theme)
    }
  }
}
</script>

<template>
  <a class="text-2xl" @click.prevent="toggleTheme" v-html="this.$store.getters.theme === 'theme-light' ? '🌇' : '🏙'"/>
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

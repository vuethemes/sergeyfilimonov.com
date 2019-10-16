<template>
  <a class="" @click.prevent="toggleTheme">
    <fa :icon="['fa', 'moon']" v-if="this.$store.getters.theme == 'theme-light'"/>
    <fa :icon="['fa', 'sun']" v-else/>
  </a>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      let theme = this.$store.getters.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', theme)
      this.$store.commit('changeTheme', theme)
    }
  }
}
</script>

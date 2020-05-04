<template>
  <div class="layout bg-theme-background text-theme-text" :class="$store.getters.theme">
    <Navbar/>
    <div class="pb-8">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },

  computed: {
    canonical() {
      const SITE_URL = 'https://sergeyfilimonov.com'

      let canonical

      if (this.$route.path === '/') {
        canonical = SITE_URL
      } else {
        canonical = SITE_URL + this.$route.path
      }
      return canonical
    }
  },

  mounted() {
    const currentDateTime = new Date()
    const currentTime = currentDateTime.getHours()

    if (!localStorage.getItem('theme')) {
      if (currentTime >= 10 && currentTime <= 22) {
        this.$store.commit('changeTheme', 'theme-light')
      } else {
        this.$store.commit('changeTheme', 'theme-dark')
      }
    } else {
      this.$store.commit('changeTheme', localStorage.getItem('theme'))
    }

    this.$intercom.boot({ app_id: "uh3auh95" })

    this.$intercom.show()

    this.$intercom.update()
  },

  metaInfo() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'yandex-verification', content: '476dfb11a869a822' },
        { name: 'google-site-verification', content: 'h5T7xM4N3wa9YaCGOmzQufGBVdCTmnjx-ODI8bhG7Cc' },
        { property: "og:type", content: 'website' },
        { property: "og:url", content: this.canonical },
      ],
      link: [
        { rel: 'canonical', href: this.canonical }
      ]
    }
  }
}
</script>

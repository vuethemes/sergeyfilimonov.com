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
        canonical = SITE_URL + '/' + this.$route.path
      }
      return canonical
    }
  },
  metaInfo() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'yandex-verification', content: '' },
        { name: 'google-site-verification', content: '' },
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

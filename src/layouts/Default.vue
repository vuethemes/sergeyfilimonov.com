<template>
  <transition>
    <div class="layout bg-background-primary" :class="$store.getters.theme">
      <Navbar/>
      <slot/>
      <Footer/>
    </div>
  </transition>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      currentLang: 'ru',
      canonical: 'https://sergeyfilimonov.com' + this.$route.path
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

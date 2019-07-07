<template>
  <transition>
    <div class="layout">
      <Nav/>
      <slot/>
      <Footer/>
    </div>
  </transition>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Topline from '@/components/Topline'

export default {
  components: {
    Nav,
    Footer,
    Topline
  },
  data() {
    return {
      currentLang: 'ru',
      canonical: 'https://sergeyfilimonov.com' + this.$route.path
    }
  },
  metaInfo() {
    return {
      titleTemplate: '%s ∙ Сергей Филимонов',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'canonical', href: this.canonical }
      ]
    }
  }
}
</script>

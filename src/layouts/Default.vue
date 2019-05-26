<template>
  <transition>
    <div class="layout">
      <Topline :lang="lang"/>
      <Nav v-if="nav !== false" :lang="lang"/>
      <slot/>
      <Footer v-if="footer !== false" :lang="lang"/>
      <Messenger :lang="lang"/>
    </div>
  </transition>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Messenger from '@/components/Messenger'
import Topline from '@/components/Topline'

export default {
  props: ['nav', 'footer', 'lang'],
  components: {
    Nav,
    Footer,
    Messenger,
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
  },
  mounted() {
    if(!localStorage.views){
      localStorage.views = 0
    }
    localStorage.views = Number(localStorage.views) + 1

    if(this.lang == 'en') {
      this.currentLang = 'en'
    }
  }
}
</script>

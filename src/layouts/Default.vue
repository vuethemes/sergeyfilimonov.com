<template>
  <transition name="fade" appear>
    <div class="layout">
      <Topline/>
      <Nav v-if="nav !== false" />
      <slot/>
      <Footer v-if="footer !== false" />
      <Messenger/>
    </div>
  </transition>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Messenger from '@/components/Messenger'
import Topline from '@/components/Topline'
import Notifications from '@/components/Notifications'

export default {
  props: ['nav', 'footer'],
  components: {
    Nav,
    Footer,
    Messenger,
    Topline,
    Notifications
  },
  metaInfo: {
    titleTemplate: '%s | Сергей Филимонов',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  mounted() {
    if(!localStorage.views){
      localStorage.views = 0
    }
    localStorage.views = Number(localStorage.views) + 1
  }
}
</script>

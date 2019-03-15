<template>
  <transition name="fade" appear>
    <div class="layout">
      <vue-scroll-progress-bar height="2px" backgroundColor="#3273dc"/>
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

export default {
  props: ['nav', 'footer'],
  components: {
    Nav,
    Footer,
    Messenger,
    Topline
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
  }
}
</script>

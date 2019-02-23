<template>
  <div class="layout">
    <Nav v-if="nav !== false" />
    <slot/>
    <Footer v-if="footer !== false" />
    <Messenger/>
  </div>
</template>

<script>
import Nav from './partials/Nav'
import Footer from './partials/Footer'
import Messenger from './partials/Messenger'

export default {
  props: ['nav', 'footer'],
  components: {
    Nav,
    Footer,
    Messenger
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

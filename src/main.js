// Global styles
import '~/assets/css/main.css'

//Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Global components
import Vuex from 'vuex'
import VueMq from 'vue-mq'
import VueScrollTo from 'vue-scrollto'
import VueGtm from 'vue-gtm'
import VueDisqus from 'vue-disqus'

export default function (Vue, {router, head, isClient, appOptions}) {
  head.htmlAttrs = { lang: 'ru', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-sans' }

  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      theme: localStorage.getItem('theme') || 'theme-light'
    },
    mutations: {
      changeTheme(state, payload) {
        state.theme = payload
      }
    },
    getters: {
      theme(state) {
        return state.theme
      }
    }
  })

  Vue.use(VueDisqus)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease'
  })

  Vue.use(VueMq, {
    breakpoints: {
      xs: 540,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1180,
    }
  })

  if(process.isClient) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    Vue.use(VueAwesomeSwiper)

    const { default: VueScrollProgressBar } = require('~/components/modules/vue-scroll-progressbar')
    Vue.use(VueScrollProgressBar)
  }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })

  head.script.push({
    src: '/scripts/teletype.js',
    body: true
  })

  head.script.push({
    src: 'https://yastatic.net/q/forms-frontend-ext/_/embed.js',
    body: true
  })
}

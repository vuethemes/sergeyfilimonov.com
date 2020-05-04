import '~/assets/css/main.css'

import DefaultLayout from '~/layouts/Default.vue'

import Vuex from 'vuex'
import VueMq from 'vue-mq'
import VueScrollTo from 'vue-scrollto'
import VueGtm from 'vue-gtm'
import VueIntercom from 'vue-intercom'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex)

  Vue.use(VueScrollTo, { duration: 500, easing: 'ease' })

  Vue.use(VueMq, { breakpoints: { mobile: 540, desktop: 1024 } })

  Vue.use(VueIntercom, { appId: 'uh3auh95' })

  appOptions.store = new Vuex.Store({
    state: {
      theme: 'theme-light'
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

  head.htmlAttrs = { lang: 'ru', class: 'h-full' }
  
  head.bodyAttrs = { class: 'font-body antialiased' }
}

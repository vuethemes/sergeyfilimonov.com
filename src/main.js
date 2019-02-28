import DefaultLayout from '~/layouts/Default.vue'
import VueMq from 'vue-mq'
import Bulma from 'bulma'
import VueScrollTo from 'vue-scrollto'
import VueGtm from 'vue-gtm'

import '~/assets/style/index.scss'
import('animate.css');

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity,
    }
  })

  if(process.isClient) {
    const { default: VueGtm } = require('vue-gtm')
    Vue.use(VueGtm, {
      id: 'GTM-WH2RFDV',
      enabled: true,
      debug: true,
      vueRouter: router
    })
  }
}

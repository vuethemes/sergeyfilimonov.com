import '~/assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'
import VueMq from 'vue-mq'
import Bulma from 'bulma'
import VueScrollTo from 'vue-scrollto'
import VueYandexMetrika from 'vue-yandex-metrika'

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
}

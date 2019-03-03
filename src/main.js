// Global styles
import '~/assets/style/index.scss'
import('animate.css')

// Global components
import DefaultLayout from '~/layouts/Default.vue'
import VueMq from 'vue-mq'
import Bulma from 'bulma'
import VueScrollTo from 'vue-scrollto'
import VueGtm from 'vue-gtm'
import Typography from 'typography'

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)

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

  const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.6,
    scaleRatio: 2,
    bodyColor: 'hsla(0,0%,0%,0.7)',
    headerColor: 'hsla(0,0%,0%,0.9)',
    headerFontFamily: ['Circe', 'sans-serif'],
    bodyFontFamily: ['Circe', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
  })

  head.style.push({
    type: 'text/css',
    cssText: typography.injectStyles()
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })
}

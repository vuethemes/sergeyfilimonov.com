// Global styles
import '~/assets/styles/index.scss'
import 'prismjs/themes/prism.css'
import('animate.css')

// Global components
import DefaultLayout from '~/layouts/Default.vue'
import VueMq from 'vue-mq'
import VueScrollTo from 'vue-scrollto'
import VueDisqus from 'vue-disqus'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueDisqus)
  Vue.use(VueScrollTo, { duration: 500, easing: "ease" })
  Vue.use(VueMq, { breakpoints: { mobile: 450, tablet: 900, laptop: 1250, desktop: Infinity } })

  if(process.isClient) {
    const { default: VueScrollProgressBar } = require('~/components/modules/vue-scroll-progressbar')
    Vue.use(VueScrollProgressBar)

    const { default: VueRellax } = require('vue-rellax')
    Vue.use(VueRellax)
  }

  head.script.push({
    src: 'https://sergeyfilimonov.com/scripts/teletype.js',
    body: true
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })
}

import DefaultLayout from '~/layouts/Default.vue'
import Bulma from 'bulma'

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })
}

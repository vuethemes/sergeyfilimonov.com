import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faTelegram, faYoutube, faFacebook, faVk } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faInstagram, faWhatsapp, faTelegram, faFacebook, faVk, faYoutube)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}

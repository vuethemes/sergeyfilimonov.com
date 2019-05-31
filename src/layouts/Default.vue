<template>
  <transition>
    <div class="layout">
      <Topline :lang="lang"/>
      <Nav v-if="nav !== false" :lang="lang"/>
      <slot/>
      <Footer v-if="footer !== false" :lang="lang"/>
    </div>
  </transition>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Messenger from '@/components/Messenger'
import Topline from '@/components/Topline'

export default {
  props: ['nav', 'footer', 'lang'],
  components: {
    Nav,
    Footer,
    Messenger,
    Topline
  },
  data() {
    return {
      currentLang: 'ru',
      canonical: 'https://sergeyfilimonov.com' + this.$route.path
    }
  },
  metaInfo() {
    return {
      titleTemplate: '%s ∙ Сергей Филимонов',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'canonical', href: this.canonical }
      ]
    }
  },
  mounted() {
    if(!localStorage.views){
      localStorage.views = 0
    }
    localStorage.views = Number(localStorage.views) + 1

    if(this.lang == 'en') {
      this.currentLang = 'en'
    }

    (function () {
        window['yandexChatWidgetCallback'] = function() {
            try {
                window.yandexChatWidget = new Ya.ChatWidget({
                    guid: 'dbc8b5cf-8fc4-4c0f-a8f8-b0d91e691f82',
                    buttonText: 'Хотите заказать сайт?',
                    title: 'Задайте вопрос здесь',
                    theme: 'light',
                    collapsedDesktop: 'never',
                    collapsedTouch: 'never'
                });
            } catch(e) { }
        };
        var n = document.getElementsByTagName('script')[0],
            s = document.createElement('script');
        s.async = true;
        s.src = 'https://chat.s3.yandex.net/widget.js';
        n.parentNode.insertBefore(s, n);
    })();
  }
}
</script>

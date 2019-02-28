<template>
  <div class="messenger">
  	<a class="btn" target="_blank" :href="href" :class="classes">
      <i class="fab" :class="iconClass"></i>
    </a>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    	<div class="bubble" v-if="bubble.show" :key="1" style="animation-duration: 0.3s">
    		<div class="close" @click="close()">✕</div>
    		<div class="text">
    			<span>{{bubble.text}}</span> Предлагаю обсудить в {{messenger}} 😉 Если {{messenger}} неудобен, <a v-scroll-to="{el: '#contact', onDone: function(element){close()} }" class="my-link">здесь</a> все способы связаться
    		</div>
    	</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
  	  bubble: {
  		  show: true,
  		  text: 'Готовы обсудить проект?'
  	  },
  	  source: this.$route.query.utm_source
    }
  },
  methods: {
    close() {
      this.bubble.show = false
    },
    message() {
    },
    updateBubbleText() {
      if(this.source){
        this.bubble.text = '👋 Понравился ' + this.source + '.ru? Хотите такой же сайт?'
      }
    }
  },
  computed: {
    messenger() {
      return this.$mq === 'mobile'
      ? 'WhatsApp'
      : 'Telegram'
    },
    href() {
      return this.$mq === 'mobile'
      ? 'https://api.whatsapp.com/send?phone=79261118328&text=Здравствуйте!%20Меня%20интересует%20'
      : 'https://t-do.ru/sfilimonov'
    },
    iconClass() {
      return this.$mq === 'mobile'
      ? 'fa-whatsapp'
      : 'fa-telegram-plane'
    },
    classes() {
      return this.$mq === 'mobile'
      ? 'whatsapp'
      : 'telegram'
    }
  },
  mounted() {
    this.updateBubbleText()
  }
}
</script>

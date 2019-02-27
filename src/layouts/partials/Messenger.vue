<template>
  <div class="messenger">
  	<a class="btn" target="_blank" :href="href">
      <i class="fab" :class="iconClass"></i>
    </a>
  	<div class="bubble" v-if="bubble.show">
  		<div class="close" @click="close()">✕</div>
  		<div class="text">
  			<span>{{bubble.text}}</span> Предлагаю обсудить в удобном для вас мессенджере 🙂
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
  	  bubble: {
  		  show: true,
  		  text: '👋 Хотите начать проект?'
  	  },
  	  source: this.$route.query.utm_source
    }
  },
  methods: {
    close(){
      this.bubble.show = false
    },
    message(){
    },
    updateBubbleText(){
      if(this.source){
        this.bubble.text = '👋 Понравился ' + this.source + '.ru? Хотите такой же сайт?'
      }
    }
  },
  computed: {
    href() {
      return this.$mq === 'mobile'
      ? 'https://api.whatsapp.com/send?phone=79261118328&text=Здравствуйте!%20Меня%20интересует%20'
      : 'https://t-do.ru/sfilimonov'
    },
    iconClass() {
      return this.$mq === 'mobile'
      ? 'fa-whatsapp'
      : 'fa-telegram-plane'
    }
  },
  mounted() {
    this.updateBubbleText()
  }
}
</script>

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
  name: 'Messenger',
  data() {
    return {
      ym: 50285131,
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
      //ym(this.ym, 'reachGoal', 'close')
    },
    message(){
      //ym(this.ym, 'reachGoal', 'message')
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
      : 'fa-telegram'
    }
  },
  mounted() {
  },
  created() {
    this.updateBubbleText()
  }
}
</script>

<style lang="scss">
.messenger {
  .btn {
    display: flex;
    z-index: 10000;
    background: #fff;
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    box-shadow: 0px 4px 20px #d2d2d2;
    color: black;
    position: fixed;
    bottom: 26px;
    right: 26px;
    transition: .4s;
    i {
      font-size: 40px;
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 4px 10px #d2d2d2;
    }
    .fa-whatsapp {
      color: #25D366;
    }
    .fa-telegram {
      color: #36ADE1;
    }
  }
  .bubble {
    box-shadow: 0px 4px 26px -4px #d2d2d2;
    padding: 1rem;
    z-index: 10000;
    bottom: 26px;
    right: 100px;
    transition: .4s;
    position: fixed;
    border-radius: 8px;
    background: #fff;
    max-width: 240px;
    line-height: 1.4;
    &:hover {
      box-shadow: 0px 4px 10px #d2d2d2;
    }
    span {
      font-weight: 700;
    }
    .close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: -12px;
      top: -12px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
    }
    .text {
      @media only screen and (max-width: 568px) {
        font-size: 16px !important;
      }
    }
  }
}
</style>

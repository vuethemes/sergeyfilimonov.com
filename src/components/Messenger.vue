<template>
  <div class="messenger">
  	<a class="btn" target="_blank" :href="href" :class="classes">
      <i class="fab" :class="iconClass"></i>
    </a>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    	<div class="bubble" v-if="bubble.show" :key="1" style="animation-duration: 0.3s">
    		<div class="close" @click="close()">✕</div>
    		<div class="text">
    			<span>{{bubble.text}}</span> Предлагаю обсудить в {{messenger}} 😉 Если {{messenger}} неудобен,
          <a v-if="$route.path !== '/'" href="/#contact" class="my-link" @click="close()">здесь</a>
          <a v-if="$route.path == '/'" v-scroll-to="{el: '#contact', onDone: function(element){close()}}" class="my-link">здесь</a> все способы связаться
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
        show: false,
  		  text: 'Готовы обсудить проект?'
  	  },
  	  source: this.$route.query.utm_source
    }
  },
  methods: {
    close() {
      this.bubble.show = false
      localStorage.show = 0
    },
    message() {},
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

    setTimeout(function () {
      if(localStorage.show == 0) {
        this.bubble.show = false
      } else {
        this.bubble.show = true
      }
    }.bind(this), 4000)
  }
}
</script>

<style lang="scss">
.messenger {
  .telegram {
    background: linear-gradient(180deg, #36ADE1 0%, #1E96C8 100%) !important;
  }
  .whatsapp {
    background: #25D366 !important;
  }
  .btn {
    display: flex;
    z-index: 10000;
    background: #fff;
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    box-shadow: 0px 4px 20px rgba(0,0,0,0.2);
    color: black;
    position: fixed;
    bottom: 26px;
    right: 26px;
    transition: .4s;
    i {
      font-size: 36px;
      margin-right: 0;
    }
    .fa-telegram-plane {
      position: relative;
      left: -2px;
      top: 1px
    }
    &:hover {
      box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    }
    .fa-whatsapp {
      color: #fff;
    }
    .fa-telegram-plane {
      color: #fff;
    }
  }
  .bubble {
    box-shadow: 0px 4px 26px -4px rgba(0,0,0,0.2);
    padding: 1rem;
    z-index: 100000000 !important;
    bottom: 26px;
    right: 100px;
    transition: .4s;
    position: fixed;
    border-radius: 8px;
    background: #fff;
    max-width: 320px;
    line-height: 1.4;
    &:hover {
      box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
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
    @media only screen and (max-width: 568px) {
      .text {
        font-size: 16px !important;
        span, a {
          font-size: 16px !important;
        }
      }
    }
  }
}

@media only screen and (max-width: 568px) {
  .messenger {
    .btn {
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
    }
    .bubble {
      max-width: 240px !important;
      bottom: 20px !important;
      right: 90px !important;
    }
  }
}

@media only screen and (max-width: 320px) {
  .messenger {
    .btn {
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
    }
    .bubble {
      max-width: 200px !important;
      bottom: 20px !important;
      right: 90px !important;
    }
  }
}
</style>

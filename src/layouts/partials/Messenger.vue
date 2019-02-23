<template>
  <div id="messenger">
  	<a id="whatsapp-button" class="messenger-button" target="_blank" href="https://api.whatsapp.com/send?phone=79261118328&text=Здравствуйте!%20Меня%20интересует%20..."><i class="fab fa-whatsapp"></i></a>
  	<a id="telegram-button" class="messenger-button" target="_blank" href="https://t-do.ru/sfilimonov"><i class="fab fa-telegram"></i></a>
  	<div id="messenger-bubble" v-if="bubble.show">
  		<div id="messenger-bubble-close" @click="close()">✕</div>
  		<div id="messenger-bubble-text">
  			<span>{{bubble.text}}</span> Предлагаю обсудить в удобном для вас мессенджере 🙂
  		</div>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

export default {
  props: ['source'],
  name: 'Messenger',
  data() {
    return {
      ym: 50285131,
  	  bubble: {
  		  show: true,
  		  text: '👋 Хотите начать проект?'
  	  },
  	  source: ''
    }
  },
  methods: {
    close(){
      this.bubble.show = false;
      ym(this.ym, 'reachGoal', 'close');
    },
    message(){
      ym(this.ym, 'reachGoal', 'message');
    },
    updateBubbleText(){
      if(this.source){
        this.bubble.text = '👋 Понравился ' + this.source + '.ru? Хотите такой же сайт?';
      }
    }
  },
  computed: {
  },
  mounted() {
  },
  created() {
    this.updateBubbleText();
  }
}
</script>

<style>
.messenger-button {
  z-index: 10000;
  background: #fff;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  box-shadow: 0px 4px 20px #d2d2d2;
  color: black;
  position: fixed;
  bottom: 26px;
  right: 26px;
  transition: .4s;
}
.messenger-button:hover {
  box-shadow: 0px 4px 10px #d2d2d2;
}
.messenger-button i {
  font-size: 40px;
  margin-right: 0;
}
#messenger-bubble {
	box-shadow: 0px 4px 20px #d2d2d2;
	padding: 1rem;
	z-index: 10000;
	bottom: 26px;
  right: 112px;
  transition: .4s;
  position: fixed;
  border-radius: 12px;
  background: #fff;
  max-width: 240px;
  line-height: 1.4;
}
#messenger-bubble:hover {
	box-shadow: 0px 4px 10px #d2d2d2;
}
#messenger-bubble-close {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	left: -12px;
	top: -12px;
	font-size: 12px;
}
#messenger-bubble-close:hover {
	cursor: pointer;
}
#messenger-bubble span {
	font-weight: 700;
}
@media only screen and (max-width: 568px) {
	#messenger-bubble-text,
	#messenger-bubble-text span {
		font-size: 16px !important;
	}
}
</style>

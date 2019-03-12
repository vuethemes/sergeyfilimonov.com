<template>
  <div class="callback">
  	<input type="tel" :value="number" placeholder="Укажите свой номер"/>
    <div class="numpad">
      <div class="numpad-btn" @click="add(1)">1</div>
      <div class="numpad-btn" @click="add(2)">2</div>
      <div class="numpad-btn" @click="add(3)">3</div>
      <div class="numpad-btn" @click="add(4)">4</div>
      <div class="numpad-btn" @click="add(5)">5</div>
      <div class="numpad-btn" @click="add(6)">6</div>
      <div class="numpad-btn" @click="add(7)">7</div>
      <div class="numpad-btn" @click="add(8)">8</div>
      <div class="numpad-btn" @click="add(9)">9</div>
      <div class="numpad-btn" @click="add('+')">+</div>
      <div class="numpad-btn" @click="add(0)">0</div>
      <div class="numpad-btn" @click="clear()">←</div>
    </div>
    <input
      @click="send()"
      type="submit"
      class="button button__whatsapp is-large is-outlined"
      value="Отправить заявку"/>
    {{response}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
  	  number: '',
      errors: [],
      response: ''
    }
  },
  methods: {
    add(digit) {
      this.number = this.number + digit
    },
    clear() {
      this.number = ''
    },
    send(){
      axios.post('https://hooks.zapier.com/hooks/catch/608402/n2xs0z/', {
        body: this.number
      })
      .then(response => {
        this.response = response
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  computed: {
    //
  },
  mounted() {
    //
  }
}
</script>

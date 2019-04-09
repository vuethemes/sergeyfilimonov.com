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
    <input type="submit"
      @click="send()"
      class="button button__whatsapp is-large is-outlined"
      value="Отправить заявку"/>
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
      let data = this.number
      axios.post('https://hooks.zapier.com/hooks/catch/608402/n2xs0z/', data)
        .then(response => {
          this.response = response
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style lang="scss">
.callback {
  background: #fff;
  border: 2px solid #eee;
  padding: 2rem;
  font-weight: bold;
  input[type="tel"] {
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 2px solid #eee;
    margin-bottom: 1rem;
  }
  input[type="submit"] {
    width: 100%;
    margin-top: 1rem;
  }
  .numpad {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px solid #eee;
    border-radius: 6px;
    overflow: hidden;
    .numpad-btn {
      text-align: center;
      border: 1px solid #eee;
      width: 33.3%;
      padding: 1rem;
      &:active {
        background: rgba(0,0,0,0.1);
      }
      &:hover {
        background: rgba(0,0,0,0.025);
        cursor: pointer;
      }
    }
  }
}
</style>

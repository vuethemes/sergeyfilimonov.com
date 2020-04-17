<template>
  <Layout>
    <div class="container my-8">
      <h1 class="mb-4 lg:text-5xl text-3xl">Pinterest Embed</h1>

      <div class="text-lg mb-4">
        Pinterst не работает в десктопной версии на iPad Pro, поэтому получить код встройки невозможно. Этот инструмент решает проблему.
      </div>

      <input class="mb-4 p-4 border-2 border-black w-full" type="text" name="" v-model="url" placeholder="Ссылка на пост в Pinterest">

      <div v-if="url" class="">
        <div class="">
          Код, который нужно вставить в блог:
        </div>

        <div class="bg-gray-100 border-1 rounded p-8 font-mono">
          {{ code }}
        </div>

        <div class="button button--2xl cursor-pointer mt-4" @click="handleCopy()">
          Скопировать код
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

export default {
  data: () => ({
    url: ``
  }),

  computed: {
    code() {
      return `<a data-pin-do="embedPin" data-pin-lang="ru" href="${this.url}"></a>`
    }
  },

  methods: {
    handleCopy: function () {
      this.$copyText(this.code).then(function (e) {
        console.log(e)
      }, function (e) {
        console.log(e)
      })

      alert('Код скопирован! 😘')
    }
  }
}
</script>

<template>
  <div class="">
    <div class="mb-4">
      <h3 class="mb-3 text-2xl">1. Укажите основную ссылку:</h3>
      <input type="text" class="placeholder-gray-500" v-model="link" placeholder="https://">
    </div>
    <div class="mb-4">
      <h3 class="mb-3 text-2xl">2. Укажите UTM-метки:</h3>
      <div class="grid lg:grid-cols-2 gap-4">
        <input type="text" class="placeholder-gray-500" v-model="utm.source" placeholder="utm_source">
        <input type="text" class="placeholder-gray-500" v-model="utm.term" placeholder="utm_term">
        <input type="text" class="placeholder-gray-500" v-model="utm.campaign" placeholder="utm_campaign">
        <input type="text" class="placeholder-gray-500" v-model="utm.content" placeholder="utm_content">
        <input type="text" class="placeholder-gray-500" v-model="utm.medium" placeholder="utm_medium">
      </div>
    </div>
    <div class="">
      <h3 class="mb-3 text-2xl">3. Ваша ссылка:</h3>
      <div v-if="result" class="border py-2 px-3 border-black" v-html="result"/>
      <div v-else class="">
        ☝️Укажите ссылку
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: '',
      utm: {
        source: '',
        term: '',
        campaign: '',
        content: '',
        medium: ''
      }
    }
  },
  computed: {
    result() {
      if (this.link) {
        let result = this.link

        if (this.utm.source) result += '?utm_source=' + this.utm.source
        if (this.utm.term) result += '?utm_term=' + this.utm.term
        if (this.utm.campaign) result += '?utm_campaign=' + this.utm.campaign
        if (this.utm.content) result += '?utm_content=' + this.utm.content
        if (this.utm.medium) result += '?utm_medium=' + this.utm.medium

        return result
      } else {
        return
      }
    }
  }
}
</script>

<style>
  input[type="text"] {
    @apply border py-2 px-3 border-black w-full;
  }
</style>

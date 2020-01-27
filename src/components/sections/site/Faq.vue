<template>
  <div id="faq" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4">
      FAQ
    </h2>
    <div class="grid-cols">
      <div class="p-4 lg:p-6 bg-theme-backgroundGray rounded" v-for="item in faq">
        <div class="text-xl mb-4 font-bold">
          {{ item.q }}
        </div>
        <div class="">
          {{ item.a }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faq from '@/data/site/faq.yaml'

export default {
  data() {
    return {
      faq: faq
    }
  }
}
</script>

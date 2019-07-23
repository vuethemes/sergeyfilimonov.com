<template lang="html">
  <div id="faq" class="container section mt-16">
    <h2 class="text-3xl lg:text-5xl mb-4 font-bold">
      FAQ
    </h2>
    <div class="grid-cols">
      <div class="p-6 bg-theme-backgroundGray rounded" v-for="item in faq">
        <div class="text-xl mb-4">
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

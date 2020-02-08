<template lang="html">
  <div id="stack" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4">
      Технологии
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="p-4 lg:p-6 bg-theme-backgroundGray flex items-center" v-for="item in stack">
        <div class="">
          <img :src="`/images/stack/${item.slug}.png`" :alt="item.name" class="w-8 lg:w-12 mr-4"/>
        </div>
        <div class="text-base lg:text-xl font-bold">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stack from '@/data/site/stack.yaml'

export default {
  data() {
    return {
      stack: stack
    }
  }
}
</script>

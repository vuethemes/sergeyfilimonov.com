<template lang="html">
  <div id="stack" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4 font-bold">
      Технологии
    </h2>
    <div class="grid-cols grid-cols--2m4d">
      <div class="p-4 lg:p-6 bg-theme-backgroundGray flex items-center" v-for="item in stack">
        <div class="">
          <img :src="`/images/stack/${item.slug}.png`" :alt="item.name" class="w-12 lg:w-8 mr-4"/>
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

<template lang="html">
  <div id="stack" class="container section mt-16">
    <h2 class="text-3xl lg:text-5xl mb-4">
      Технологии
    </h2>
    <div class="grid-cols grid-cols--4">
      <div class="p-6 bg-gray-100 flex items-center" v-for="item in stack">
        <div class="">
          <img :src="`/images/stack/${item.slug}.png`" :alt="item.name" class="w-12 mr-4"/>
        </div>
        <div class="text-xl lg:font-bold">
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

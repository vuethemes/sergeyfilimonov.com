<template>
  <Layout>
    <div class="container my-8">
      <h1 class="mb-4 lg:text-5xl text-3xl">Измеритель длины текста</h1>

      <div class="text-lg mb-4">
        Простой инструмент для измерения длины текста. Просто вставьте текст, чтобы увидеть из какого количества символов он состоит.
      </div>

      <textarea
        class="mb-2 p-4 border-2 border-black w-full"
        v-model="text"
        placeholder="Текст сюда"
      >
      </textarea>

      <div v-if="text">
        <div class="">
          Символов с пробелами:
          <span class="font-mono font-bold">{{ length }}</span>
        </div>

        <div class="">

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),

  computed: {
    length() {
      return this.text.length
    }
  }
}
</script>

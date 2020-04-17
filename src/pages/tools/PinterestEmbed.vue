<template>
  <Layout>
    <div class="container my-16">
      <input class="mb-4 p-4 border-2 border-black" type="text" name="" v-model="url" placeholder="URL">

      <div class="">
        <div class="">
          Код, который нужно вставить в блог:
        </div>

        <div class="bg-gray-100 border-1 rounded p-8 font-mono">
          {{ code }}
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    url: ``
  }),

  computed: {
    code() {
      return `<a data-pin-do="embedPin" data-pin-lang="ru" href="${this.url}"></a>`
    }
  }
}
</script>

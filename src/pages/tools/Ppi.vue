<template>
  <Layout>
    <div class="container my-8">
      <h1 class="mb-4 lg:text-5xl text-3xl">Калькулятор PPI для дисплея</h1>

      <div class="text-lg mb-4">
        This PPI calculator (pixels per inch calculator) finds the resolution of your display based on its dimensions and the pixel count. In this text, we will teach you what is PPI, explore the differences between PPI vs DPI through the DPI definition. Also, you can find some comments on the dot pitch definition and its decline in usage. Of course, this is a calculator so we'll show you how to calculate PPI and how to categorize resolution based on PPI.
      </div>

      <div class="grid lg:grid-cols-2 gap-4">
        <div class="border p-6">
          <div class="text-2xl mb-4">
            dₒ
          </div>
          <div class="grid lg:grid-cols-2 gap-4">
            <div class="">
              <div class="mb-2 font-bold">
                Ширина (px):
              </div>
              <input
                class="mb-2 p-4 border-2 border-black w-full"
                type="number"
                v-model="width"
                min="0"
                placeholder=""
              >
            </div>

            <div class="">
              <div class="mb-2 font-bold">
                Высота (px):
              </div>
              <input
                class="mb-2 p-4 border-2 border-black w-full"
                type="number"
                v-model="height"
                min="0"
                placeholder=""
              >
            </div>
          </div>
        </div>

        <div class="border p-6">
          <div class="text-2xl mb-4">
            dᵢ
          </div>
          <div class="">
            <div class="mb-2 font-bold">
              Диагональ ":
            </div>
            <input
              class="mb-2 p-4 border-2 border-black w-full"
              type="number"
              v-model="diagonal"
              min="0"
              placeholder=""
            >
          </div>
        </div>
      </div>

      <div class="mt-4 bg-gray-100 p-6 font-mono">
        {{ `PPI = √(${width}² + ${height}²)/${diagonal}` }}
        <span class="font-bold">{{ width && height && diagonal ? ' = ' + ppi : ' = ?' }}</span>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    width: '1920',
    height: '1080',
    diagonal: '27',
  }),

  computed: {
    ppi() {
      const numberOfPixels = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))

      return Math.round(numberOfPixels / this.diagonal)
    }
  }
}
</script>

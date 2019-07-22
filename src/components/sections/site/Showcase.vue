<template lang="html">
  <div id="showcase" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4">
      Работы
    </h2>
    <div class="grid-cols grid-cols--3">
      <div class="bg-gray-100 rounded overflow-hidden" v-for="item in showcase">
        <div class="bg-gray-200 h-48 bg-cover" :style="`background-image: url(/images/showcase/websites/${item.image}.jpg);`"/>
        <div class="p-6">
          <div class="text-xl lg:text-xl lg:font-bold mb-1">
            {{ item.name }}
          </div>
          <a class="link" :href="item.website.url" target="_blank">
            {{ item.website.name }} ->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showcase: [
        {
          name: 'arttsapko',
          website: {
            name: 'arttsapko.ru',
            url: 'https://arttsapko.ru/',
          },
          image: 'arttsapko',
          type: 'Компания',
          field: 'Онлайн-обучение'
        },
        {
          name: 'Ольга Баларама',
          website: {
            name: 'olgabalarama.com',
            url: 'https://olgabalarama.com/',
          },
          image: 'olgabalarama',
          type: 'Личный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'Анастасия Филимонова',
          website: {
            name: 'anastasiafilimonova.com',
            url: 'https://anastasiafilimonova.com/'
          },
          image: 'anastasiafilimonova',
          type: 'Личный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'Нетология HR',
          website: {
            name: 'hr.netology.ru',
            url: 'https://hr.netology.ru/',
          },
          image: 'hrnetology',
          type: 'Корпоративный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'EdMarket',
          website: {
            name: 'edmarket.ru',
            url: 'https://edmarket.ru/',
          },
          image: 'edmarket',
          type: 'Корпоративный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'EdMarket "LMS"',
          website: {
            name: 'lms.edmarket.ru',
            url: 'https://lms.edmarket.ru/',
          },
          image: 'edmarket-lms',
          type: 'Корпоративный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'ProductSense',
          website: {
            name: 'space.productsense.io',
            url: 'https://space.productsense.io/',
          },
          image: 'productsense',
          type: 'Компания',
          field: 'Онлайн-обучение'
        },
        {
          name: 'МосСтройПодъём',
          website: {
            name: 'msp-moscow.ru',
            url: 'https://msp-moscow.ru/',
          },
          image: 'msp',
          type: 'Комания',
          field: 'Услуги'
        },
        {
          name: 'Максим Спиридонов & Нетология',
          website: {
            name: 'ms.netology.ru',
            url: 'https://ms.netology.ru/',
          },
          image: 'msnetology',
          type: 'Личный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'Максим Спиридонов',
          website: {
            name: 'm.spiridonov.ru',
            url: 'https://m.spiridonov.ru/',
          },
          image: 'mspiridonov',
          type: 'Личный бренд',
          field: 'Онлайн-обучение'
        },
        {
          name: 'Ацетилен',
          website: {
            name: 'lp.acetilen.ru',
            url: 'https://lp.acetilen.ru/',
          },
          image: 'acetilen',
          type: 'Компания',
          field: 'Производство'
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div id="showcase" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4">
      Работы
    </h2>
    <div class="grid lg:grid-cols-3 gap-6">
      <a class="bg-theme-backgroundGray overflow-hidden hover:shadow-lg transform--move-top transition-all" v-for="item in showcase" :href="item.website.url" target="_blank">
        <div class="bg-gray-200 h-48 bg-cover" :style="`background-image: url(/images/showcase/websites/${item.image}.jpg);`"/>
        <div class="p-4 lg:p-6">
          <h3 class="text-xl lg:text-xl font-bold mb-1">
            {{ item.name }}
          </h3>
          <div class="link" target="_blank">
            {{ item.website.name }} →
          </div>
        </div>
      </a>
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
          name: 'Максим Спиридонов',
          website: {
            name: 'ms.netology.ru',
            url: 'https://ms.netology.ru/',
          },
          image: 'msnetology',
          type: 'Личный бренд',
          field: 'Онлайн-обучение'
        },
        // {
        //   name: 'Максим Спиридонов',
        //   website: {
        //     name: 'm.spiridonov.ru',
        //     url: 'https://m.spiridonov.ru/',
        //   },
        //   image: 'mspiridonov',
        //   type: 'Личный бренд',
        //   field: 'Онлайн-обучение'
        // },
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

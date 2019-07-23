<template lang="html">
  <div id="plans" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4 font-bold">
      Тарифы
    </h2>
    <div class="grid-cols">
      <div class="p-6 bg-theme-backgroundGray" v-for="plan in plans">
        <img :src="`/icons/${plan.icon}.svg`" alt="" class="w-24">
        <div class="mt-4 text-2xl lg:text-3xl font-bold">
          {{ plan.name }}
        </div>
        <ul class="mt-4">
          <li v-for="feature in plan.features" :class="!feature.active ? 'text-theme-textBlack200' : ''">– {{ feature.name }}</li>
        </ul>
        <div class="mt-4 text-2xl lg:text-3xl">
          {{ plan.price }}
        </div>
        <a href="#" v-scroll-to="'#contacts'" class="button button--2xl rounded mt-6 w-full">Обсудить</a>
        <div class="mt-4 text-md">
          {{ plan.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          name: 'Блог',
          description: 'Для тех, кому нужен только первоклассный блог на любой платформе: WordPress, Ghost, Contentful и пр.',
          features: [
            {
              name: 'Свой дизайн',
              active: true,
            },
            {
              name: 'Блог на WordPress/Ghost',
              active: true,
            },
            {
              name: 'Шаблон страницы продукта',
              active: false,
            },
            {
              name: 'Широкий каталог продуктов',
              active: false,
            }
          ],
          price: '75 000 ₽ & 1 месяц',
          icon: 'edit'
        },
        {
          name: 'Личный сайт',
          description: 'Для тех, кому нужен не только блог, но и возможность продавать свои услуги/товары через сайт',
          features: [
            {
              name: 'Свой дизайн',
              active: true,
            },
            {
              name: 'Блог на WordPress/Ghost',
              active: true,
            },
            {
              name: 'Шаблон страницы продукта',
              active: true,
            },
            {
              name: 'Широкий каталог продуктов',
              active: false,
            }
          ],
          price: '150 000 ₽ & 1,5 месяца',
          icon: 'home'
        },
        {
          name: 'Продуктовый сайт',
          description: 'Для компаний, которым нужен полноценный сайт для продвижения бренда в онлайне и продажи своих услуг/товаров',
          features: [
            {
              name: 'Свой дизайн',
              active: true,
            },
            {
              name: 'Блог на WordPress/Ghost',
              active: true,
            },
            {
              name: 'Шаблоны страниц продуктов',
              active: true,
            },
            {
              name: 'Широкий каталог продуктов',
              active: true,
            }
          ],
          price: '250 000 ₽ & 3 месяца',
          icon: 'shop'
        }
      ]
    }
  }
}
</script>

<template lang="html">
  <div id="plans" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4">
      Цены и сроки
    </h2>
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="p-4 lg:p-6 bg-theme-backgroundGray flex flex-col justify-between lg:h-22rem" v-for="plan in plans">
        <div class="">
          <h3 class="text-2xl lg:text-3xl font-bold">
            {{ plan.name }}
          </h3>
          <ul class="mt-2">
            <li v-for="feature in plan.features" :class="!feature.active ? 'text-theme-textBlack200' : ''">■  {{ feature.name }}</li>
          </ul>
        </div>
        <div class="">
          <div class="mt-2 text-lg lg:text-xl font-mono" v-html="plan.price"/>
          <a href="#" v-scroll-to="'#contacts'" class="button button--2xl rounded mt-4 w-full">Обсудить</a>
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
          name: 'Сложный сайт',
          description: 'сайт с уникальным дизайном, состоящий из множества страниц',
          features: [
            {
              name: 'Уникальный дизайн',
              active: true,
            },
            {
              name: 'Любая CMS',
              active: true,
            },
            {
              name: 'Интеграции с любыми сервисами',
              active: true,
            },
            {
              name: 'Максимальная скорость загрузки',
              active: true,
            },
            {
              name: 'Бесплатный CDN-хостинг',
              active: true,
            },
            {
              name: 'Можно продвигать в SEO',
              active: true,
            }
          ],
          price: 'от 200&thinsp;000&nbsp;₽ и 10 недель',
          icon: 'home'
        },
        {
          name: 'Простой сайт',
          description: 'сайт с уникальным дизайном, состоящий из одной страницы (лендинг)',
          features: [
            {
              name: 'Уникальный дизайн',
              active: true,
            },
            {
              name: 'Статика / Tilda',
              active: true,
            },
            {
              name: 'Интеграции с любыми сервисами',
              active: true,
            },
            {
              name: 'Максимальная скорость загрузки',
              active: true,
            },
            {
              name: 'Бесплатный CDN-хостинг',
              active: true,
            },
            {
              name: 'Можно продвигать в SEO',
              active: true,
            }
          ],
          price: 'от 40&thinsp;000&nbsp;₽ и 10 дней',
          icon: 'shop'
        },
        {
          name: 'Из блоков Тильды',
          description: 'сайт полностью собранный из готовых блоков Tilda',
          features: [
            {
              name: 'Стандартные блоки Tilda',
              active: true,
            },
            {
              name: 'Интеграции с партнёрами Tilda',
              active: true,
            }
          ],
          price: 'от 20&thinsp;000&nbsp;₽ и 1 недели',
          icon: 'edit'
        }
      ]
    }
  }
}
</script>

<template lang="html">
  <div id="plans" class="container section">
    <h2 class="text-3xl lg:text-5xl mb-4 font-bold">
      Цены и сроки
    </h2>
    <div class="grid-cols">
      <div class="p-4 lg:p-6 bg-theme-backgroundGray" v-for="plan in plans">
        <div class="text-2xl lg:text-3xl font-bold">
          {{ plan.name }}
        </div>
        <ul class="mt-2">
          <li v-for="feature in plan.features" :class="!feature.active ? 'text-theme-textBlack200' : ''">→ {{ feature.name }}</li>
        </ul>
        <!-- <div class="mt-4">
          <span class="font-bold">Результат:</span> {{ plan.description }}
        </div> -->
        <div class="mt-2 text-xl lg:text-2xl" v-html="plan.price"/>
        <a href="#" v-scroll-to="'#contacts'" class="button button--2xl rounded mt-4 w-full">Обсудить</a>
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
          name: 'Tilda Block',
          description: 'сайт полностью собран из готовых блоков Tilda',
          features: [
            {
              name: 'Система управления контентом',
              active: true,
            },
            {
              name: 'Подготовка к SEO-продвижению',
              active: false,
            },
            {
              name: 'Уникальный дизайн',
              active: false,
            },
            {
              name: 'Гибкая шаблонизация',
              active: false,
            },
            {
              name: 'Мультиязычность',
              active: false,
            },
            {
              name: 'Свой API',
              active: false,
            },
            {
              name: 'Система аккаунтов',
              active: false,
            }
          ],
          price: 'от 20&thinsp;000&nbsp;₽ и 1 недели',
          icon: 'edit'
        },
        {
          name: 'Статика',
          description: 'сайт с уникальным дизайном и готовый под все виды продвижения',
          features: [
            {
              name: 'Система управления контентом',
              active: true,
            },
            {
              name: 'Подготовка к SEO-продвижению',
              active: true,
            },
            {
              name: 'Уникальный дизайн',
              active: true,
            },
            {
              name: 'Гибкая шаблонизация',
              active: true,
            },
            {
              name: 'Мультиязычность',
              active: true,
            },
            {
              name: 'Свой API',
              active: true,
            },
            {
              name: 'Система аккаунтов',
              active: false,
            }
          ],
          price: 'от 50&thinsp;000&nbsp;₽ и 2 недель',
          icon: 'home'
        },
        {
          name: 'Веб-сервис',
          description: 'полностью самописный сайт, с шаблонами страниц и со своим API',
          features: [
            {
              name: 'Система управления контентом',
              active: true,
            },
            {
              name: 'Подготовка к SEO-продвижению',
              active: true,
            },
            {
              name: 'Уникальный дизайн',
              active: true,
            },
            {
              name: 'Гибкая шаблонизация',
              active: true,
            },
            {
              name: 'Мультиязычность',
              active: true,
            },
            {
              name: 'Свой API',
              active: true,
            },
            {
              name: 'Система аккаунтов',
              active: true,
            }
          ],
          price: 'от 150&thinsp;000&nbsp;₽ и 2 месяцев',
          icon: 'shop'
        }
      ]
    }
  }
}
</script>

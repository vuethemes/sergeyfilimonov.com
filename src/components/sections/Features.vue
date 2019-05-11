<template>
  <section id="features" class="section">
		<div class="container">
      <div class="is-size-3 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">⚙️</div>
      <h2 class="has-text-centered is-size-3 is-size-4-mobile has-text-weight-bold m-b-lg" v-html="text.header"/>
      <div class="columns feature">
        <div class="column">
          <img src="@/assets/images/data.jpg">
          <h3 class="is-size-5 is-size-5-mobile has-text-weight-bold" v-html="text.features.one.header"/>
          <p v-html="text.features.one.desc"/>
        </div>
        <div class="column">
          <img src="@/assets/images/design.jpg">
          <h3 class="is-size-5 is-size-5-mobile has-text-weight-bold" v-html="text.features.two.header"/>
          <p v-html="text.features.two.desc"/>
        </div>
        <div class="column">
          <img src="@/assets/images/code.jpg">
          <h3 class="is-size-5 is-size-5-mobile has-text-weight-bold" v-html="text.features.three.header"/>
          <p v-html="text.features.three.desc"/>
        </div>
      </div>
    </div>
		</section>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      text: {
        header: 'Как построен процесс',
        features: {
          one: {
            header: '1️⃣ Проектирование',
            desc: 'На первом этапе мы структурируем информацию для сайта: от <em>«твёрдых» данных</em>, вроде продуктов, до <em>смыслов</em>, уникальных особенностей продукта.'
          },
          two: {
            header: '2️⃣ Дизайн',
            desc: 'На втором этапе мы детально прорисовываем все макеты так, чтобы клиент смог представить как будет выглядеть сайт, когда он будет готов.'
          },
          three: {
            header: '3️⃣ Запуск',
            desc: 'Только после того, как сайт спроектирован и отрисован, можно приступать к вёрстке макетов и программированию страниц и шаблонов.'
          }
        }
      }
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.header = 'How process looks'

      this.text.features.one.header = '1️⃣ Planning'
      this.text.features.one.desc = 'At this stage, I structure all data about your business to tell everything your audience needs to know on the future website...'

      this.text.features.two.header = '2️⃣ Design'
      this.text.features.two.desc = 'then I make mockups and design of all pages in desktop and mobile views in order you to see how the future website will look and feel...'

      this.text.features.three.header = '3️⃣ Launch'
      this.text.features.three.desc = 'once the design is ready, I code the website templates, pages, and components to build a fast, secure, static website'
    }
  }
}
</script>

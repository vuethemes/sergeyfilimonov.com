<template>
  <section id="intro" class="section">
    <div class="container">
      <h1 class="has-text-black has-text-centered" style="margin-bottom: 0;">
        <span class="is-size-1 is-size-3-mobile has-text-weight-bold">
          {{textService}}
        </span>
      </h1>
      <br>
      <p class="is-size-5 is-size-5-mobile has-text-centered" style="max-width: 760px; margin: auto;" v-html="text.desc"/>
      <div class="has-text-centered m-t-lg">
        <a v-scroll-to="'#contact'" class="button is-large" v-html="'💬 Обсудить проект'"/>
      </div>
    </div>
  </section>
</template>

<script>
var words = ''

export default {
  props: ['lang'],
  data() {
    return {
      text: {
        desc: 'Создаю сайты для средних компаний, которым уже не хватает возможностей конструкторов. Гарантирую отличный дизайн, скорость сайта не меньше 95&nbsp;баллов по Google PageSpeed Insights, разумные сроки и стоимость.'
      }
    }
  },
  components: {
    VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h('span', null, [words[0]]) }
      : () => import('vue-typer').then(({ VueTyper }) => VueTyper)
  },
  computed: {
    words() {
      return this.$mq === 'mobile' && this.lang != 'en' ? ['SaaS-проектов ☁️', 'образования ‍🎓', 'стартапов 🚀']
      : this.$mq != 'mobile' && this.lang != 'en' ? ['SaaS-проектов ☁️', 'онлайн-образования 🎓', 'стартапов на рынки России и США 🚀']
      : this.lang == 'en' ? ['SaaS ☁️', 'EdTech 🎓', 'startups 🚀']
      : ''
    },
    textService() {
      return this.lang == 'en'
      ? 'Need a website?'
      : 'Создаю быстрые и удобные сайты'
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.desc = 'Since 2019 I develop only with JAMstack framework <b>Gridsome</b> leaving WordPress as a headless CMS. So the websites I make cannot be made slow and unsecure.'
    }
  }
}
</script>

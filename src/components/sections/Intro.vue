<template>
  <section id="intro" class="section">
    <div class="container">
      <h1 class="has-text-black has-text-centered" style="margin-bottom: 0;">
        <span class="is-size-1 is-size-3-mobile">
          {{textService}}
          <br/>
          <VueTyper
            :text="words"
            :type-delay="60"
            caret-animation="smooth"
            class="is-size-1 is-size-3-mobile" />
        </span>
      </h1>
      <br>
      <p class="is-size-5 is-size-5-mobile has-text-centered" style="max-width: 760px; margin: auto;" v-html="text.desc"/>
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
        desc: 'С 2019-го все проекты разрабатываю со статичным фреймворком <b>Gridsome</b>. В чём преимущество статичных фреймворков над монолитными — вроде <b>WordPress</b> или <b>Drupal</b>, — читайте <a href="/blog/wordpress-vs-static">здесь</a>'
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
      ? 'Need a website? I create ones for'
      : 'Создаю быстрые и удобные сайты для'
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.desc = 'Since 2019 I develop only with JAMstack framework <b>Gridsome</b> leaving WordPress as a headless CMS. So the websites I make cannot be made slow and unsecure.'
    }
  }
}
</script>

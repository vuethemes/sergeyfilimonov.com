<template>
  <section id="intro" class="section" data-lax-preset="spin fadeInOut">
    <div class="container">
      <h1 class="has-text-black has-text-centered" style="margin-bottom: 0;">
        <span class="is-size-1 is-size-3-mobile">
          Создаю быстрые и удобные сайты для
          <br>
          <VueTyper
            :text="words"
            :type-delay="60"
            caret-animation="smooth"
            class="is-size-1 is-size-3-mobile" />
        </span>
      </h1>
    </div>
  </section>
</template>

<script>
var words = ''

export default {
  components: {
    VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h('span', null, [words[0]]) }
      : () => import('vue-typer').then(({ VueTyper }) => VueTyper)
  },
  computed: {
    words() {
      return this.$mq === 'mobile'
      ? ['SaaS-проектов ☁️', 'образования 👩‍🎓', 'стартапов 🚀']
      : ['SaaS-проектов ☁️', 'онлайн-образования 👩‍🎓', 'стартапов на рынки России и США 🚀']
    }
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 568px) {
  .vue-typer {
    font-size: 29px;
    .custom.char {
      font-size: 2rem;
    }
  }
}
@keyframes Type {
  from  {
    transform: translateX(-5px);
    color: var(--primary-color);
  } to  {
    color: currentColor;
  }
}
</style>

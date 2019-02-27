<template>
  <section id="intro" class="section">
    <div class="container">
      <div class="is-size-1 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">🚀</div>
      <h1 class="has-text-black has-text-centered">
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
      ? ['онлайн-образования', 'и хороших продуктов']
      : ['образовательных проектов', 'и хороших продуктов 👍']
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

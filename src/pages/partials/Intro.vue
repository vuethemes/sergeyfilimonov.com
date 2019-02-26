<template>
  <section id="hero" class="section">
    <div class="container">
      <div class="is-size-1 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">🚀</div>
      <h1 class="has-text-black has-text-centered">
        <span class="is-size-1 is-size-3-mobile">
          Создаю быстрые и удобные сайты
          <br>
          для <VueTyper :text="words" :type-delay="60" caret-animation="smooth" />
        </span>
      </h1>
    </div>
  </section>
</template>

<script>
const words = ['образовательных проектов', 'и просто хороших продуктов']

export default {
  name: 'Header',
  components: {
    VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h('span', null, [words[0]]) }
      : () => import('vue-typer').then(({ VueTyper }) => VueTyper)
  },
  data () {
    return { words }
  }
}
</script>

<style lang="scss">
@keyframes Type {
  from  {
    transform: translateX(-5px);
    color: var(--primary-color);
  } to  {
    color: currentColor;
  }
}
</style>

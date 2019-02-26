<template>
  <section id="hero" class="section">
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
@media only screen and (max-width: 568px) {
  .vue-typer {
    font-size: 29px;
  .custom.char {
    font-size: 24px;

    &.typed {
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
    }
    &.selected {
      /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
    }
    &.erased {
      /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
    }
  }

  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */

    &.pre-type {
      /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
    }
    &.pre-erase {
      /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
    }
    &.idle {
      /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
    }
    &.typing {
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
    }
    &.selecting {
      /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
    }
    &.erasing {
      /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
    }
    &.complete {
      /* Styles for the idle caret when VueTyper has finished all typing/erasing */
    }
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

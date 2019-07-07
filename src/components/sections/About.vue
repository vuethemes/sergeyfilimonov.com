<template>
  <div id="about" class="section">
		<div class="container has-text-centered">
			<img src="@/assets/images/sergeyfilimonov.jpg">
      <h3 class="is-size-3 is-size-4-mobile has-text-weight-bold" v-html="text.header"/>
      <p v-html="text.about"/>
      <a v-scroll-to="'#contact'" class="button is-large" v-html="text.cta"/>
		</div>
	</div>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      text: {
        header: '👋 Коротко о себе',
        about: 'Я создаю сайты с 2015 года. Параллельно работал менеджером продуктов (в том числе в Нетологии), создал несколько своих проектов, но по-прежнему создаю сайты, потому что мне это нравится. Поэтому к каждому новому проекту стараюсь подойти, как к своему.',
        cta: 'Обсудить проект'
      }
    }
  }
}
</script>

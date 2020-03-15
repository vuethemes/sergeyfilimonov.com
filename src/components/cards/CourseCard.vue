<template>
  <g-link
    :to="course.path"
    v-if="course.slug != currentPage"
    class="block grid lg:grid-cols-2 gap-6 p-4 lg:p-6 border-theme-backgroundGray border hover:shadow-lg bg-theme-background transform--move-top border-theme-borderGray">
    <img :src="course.cover">
    <div class="">
      <div class="mb-2 text-xs font-mono">Онлайн-курс</div>
      <h3 class="text-2xl lg:text-4xl mb-2 leading-tight" v-html="course.title"/>
      <div v-html="course.excerpt"/>
      <div class="hidden lg:block mt-4">
        <div class="font-bold">
          Что вы узнаете:
        </div>
        <ul>
          <li v-for="item in course.program">— {{ item.title }}</li>
        </ul>
        <div class="mt-4 border bg-gray p-4">
          👍 По всем обозначенным темам вы сможете задать вопросы в формате консультации (вопрос–ответ) в течение 30 дней.
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ['course', 'currentPage']
}
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <div class="is-size-3 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">❓</div>
      <h2 class="has-text-centered is-size-3 is-size-4-mobile has-text-weight-bold m-b-lg" v-html="text.header"/>
      <div class="columns" style="margin: 0 !important;">
        <div class="column has-text-left">
          <h4 class="is-size-5 has-text-weight-bold" v-html="text.questions.one.header"/>
          <p class="has-text-left" v-html="text.questions.one.desc"/>
        </div>
        <div class="column has-text-left">
          <h4 class="is-size-5 has-text-weight-bold" v-html="text.questions.two.header"/>
          <p class="has-text-left" v-html="text.questions.two.desc"/>
        </div>
        <div class="column has-text-left">
          <h4 class="is-size-5 has-text-weight-bold" v-html="text.questions.three.header"/>
          <p class="has-text-left" v-html="text.questions.three.desc"/>
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
        header: 'Ответы на частые вопросы',
        questions: {
          one: {
            header: 'Вы работаете с Tilda?',
            desc: 'Нет. И против Tilda ничего не имею — конструктор отличный, но это конструктор. Я работаю с <a href="https://jamstack.org/" class="my-link" target="_blank">JAMstack</a> — набором технологий, которые позволяют создавать самые быстрые, гибкие и надёжные сайты на сегодняшний день.'
          },
          two: {
            header: 'Вы ведёте проект полностью?',
            desc: 'Да. Более того — дизайн, вёрстку, запуск, поддержку делаю я на 90–95%. Оставшиеся 5–10% я поручаю узким специалистам. Например, я не умею парсить источники данных со сложной структурой — поручаю это специалисту.'
          },
          three: {
            header: 'Сколько стоит работа?',
            desc: 'Я стараюсь не брать проекты бюджетом ниже 100&nbsp;000&nbsp;₽, чтобы не распыляться. Поэтому стоимость — от 100&nbsp;000&nbsp;₽. Сроки — от трёх недель. Надо понимать, что многое зависит от вашей задачи.'
          }
        }
      }
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.header = 'Frequently asked questions'

      this.text.questions.one.header = 'Do you work with Webflow?'
      this.text.questions.one.desc = 'No, I don\'t. Webflow is a great tool but it is much faster and more convenient for a developer to build a static website with professional, JAMstack tools.'

      this.text.questions.two.header = 'Do you both design and code?'
      this.text.questions.two.desc = 'Yes. I consider myself as fullstack designer. I am working in Figma to design pages and templates, and use Vue, Gridsome, GraphQL to build websites.'

      this.text.questions.three.header = 'How much?'
      this.text.questions.three.desc = 'I cannot afford to take many projects to guarantee quality for my clients so the cost of the project with me is higher than average—and starts from $3000.'
    }
  }
}
</script>

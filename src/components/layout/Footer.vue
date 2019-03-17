<template>
  <footer>
    <div class="footer-main section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h4 class="is-size-5" v-html="text.works.header"/>
            <ul>
              <li><a href="https://arttsapko.ru" target="_blank">arttsapkó.ru</a></li>
              <li><a href="https://hr.netology.ru" target="_blank">hr.netology.ru</a></li>
              <li><a href="https://edmarket.ru" target="_blank">edmarket.ru</a></li>
              <li><a :href="text.works.more.link" v-html="text.works.more.text"/></li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5" v-html="text.blog.header"/>
            <ul>
              <li v-for="item in text.blog.posts">
                <a :href="item.link">{{item.question}}</a>
              </li>
              <li><a href="/blog">Другие посты →</a></li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5" v-html="text.faq.header"/>
            <ul>
              <li v-for="item in text.faq.questions">
                <a :href="item.link">{{item.question}}</a>
              </li>
              <li><a href="/#contact" v-html="text.faq.more"/></li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5" v-html="text.contacts.header"/>
            <ul>
              <li>
                <a href="https://api.whatsapp.com/send?phone=79261118328&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%81%D0%B0%D0%B9%D1%82..." target="_blank">
                  <i class="fab fa-whatsapp"></i>WhatsApp</a>
              </li>
              <li>
                <a href="http://t-do.ru/sfilimonov" target="_blank">
                  <i class="fab fa-telegram"></i>Telegram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/tunecatcher" target="_blank">
                <i class="fab fa-facebook"></i>Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/sergey_v_filimonov/" target="_blank">
                  <i class="fab fa-instagram"></i>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
		<div class="footer-last section has-text-centered">
      <div class="container">
        <p style="margin-bottom: 0 !important;">
          <i class="fas fa-code-branch"></i>
          <a
          href="https://github.com/sergeyfilimonov/sergeyfilimonov.com"
          target="_blank">sergeyfilimonov.com</a>
        </p>
        <p style="opacity: 0.5; margin-bottom: 1rem !important;">{{commit.update}} <code>{{commit.hash}}</code> <span v-if="ago != 0">{{ago}}</span> {{days}}</p>
        <div class="lang">
          <a v-if="lang != 'en'" href="/en">🇬🇧In English</a>
          <a v-if="lang == 'en'" href="/">🇷🇺На русском</a>
        </div>
      </div>
		</div>
	</footer>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      text: {
        works: {
          header: 'Работы',
          more: {
            text: 'Другие проекты →',
            link: '/#works'
          }
        },
        blog: {
          header: 'Блог',
          posts: {
            1: {
              question: 'Статика vs. WordPress',
              link: '/blog/wordpress-vs-static'
            },
            2: {
              question: 'Рейтинг кафе и коворкингов',
              link: '/blog/work-outside'
            },
            3: {
              question: 'Fullstack-дизайн',
              link: '/blog/fullstack-design'
            }
          }
        },
        faq: {
          header: 'FAQ',
          questions: {
            one: {
              question: 'Вы работаете с Tilda?',
              link: '/#faq'
            },
            two: {
              question: 'Вы ведёте проект полностью?',
              link: '/#faq'
            },
            three: {
              question: 'Сколько стоит работа?',
              link: '/#faq'
            }
          },
          more: 'Задать другой вопрос →'
        },
        contacts: {
          header: 'Контакты'
        }
      },
  	  commit: {
        update: 'Обновление',
        hash: 'c2800d9',
        date: '20190317'
      }
    }
  },
  computed: {
    ago() {
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth() + 1

      var yyyy = today.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      var today = yyyy + mm + dd

      return today - this.commit.date
    },
    days() {
      var daysAgo = ''

      if(this.lang != 'en'){
        this.ago === 1 || this.ago === 21 ? daysAgo = 'день назад'
        : this.ago === 2 || this.ago === 3 ? daysAgo = 'дня назад'
        : this.ago === 0 ? daysAgo = 'сегодня'
        : 'дней назад'
      } else {
        daysAgo = 'day(s) ago'
      }
      return daysAgo
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.works.header = 'Works'
      this.text.works.more.text = 'More →'
      this.text.works.more.link = '/en#works'

      this.text.blog.header = 'Blog (in Russian)'

      this.text.faq.header = 'FAQ'
      this.text.faq.questions.one.question = 'Do you work with Webflow?'
      this.text.faq.questions.one.link = '/en#faq'
      this.text.faq.questions.two.question = 'Do you both design and code?'
      this.text.faq.questions.two.link = '/en#faq'
      this.text.faq.questions.three.question = 'How much?'
      this.text.faq.questions.three.link = '/en#faq'

      this.text.faq.more = 'Ask another question →'

      this.text.contacts.header = 'Contacts'

      this.commit.update = 'Latest commit'
    }
  }
}
</script>

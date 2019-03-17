<template>
  <footer>
    <div class="footer-main section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h4 class="is-size-5">Проекты</h4>
            <ul>
              <li><a href="https://arttsapko.ru" target="_blank">arttsapkó.ru</a></li>
              <li><a href="https://hr.netology.ru" target="_blank">hr.netology.ru</a></li>
              <li><a href="https://edmarket.ru" target="_blank">edmarket.ru</a></li>
              <li><a href="/#works">Другие проекты →</a></li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5">Блог</h4>
            <ul>
              <li><a href="/blog/wordpress-vs-static">Статика vs. WordPress</a></li>
              <li><a href="/blog/work-outside">Рейтинг кафе и коворкингов</a></li>
              <li><a href="/blog/fullstack-design">Fullstack-дизайн</a></li>
              <li><a href="/blog">Другие посты →</a></li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5">FAQ</h4>
            <ul>
              <li><a href="/#faq">Вы работаете с Tilda?</a></li>
              <li><a href="/#faq">Вы ведёте проект полностью?</a></li>
              <li><a href="/#faq">Сколько стоит работа?</a></li>
              <li><a href="/#contact">Задать другой вопрос →</a></li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5">Контакты</h4>
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
        <p style="opacity: 0.5;">Обновление <code>{{commit.hash}}</code> <span v-if="ago != 0">{{ago}}</span> {{days}}</p>
      </div>
		</div>
	</footer>
</template>

<script>
export default {
  data() {
    return {
  	  commit: {
        hash: 'd07924c',
        date: '20190315'
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
      return this.ago === 1 || this.ago === 21
      ? 'день назад'
      : this.ago === 2 || this.ago === 3
      ? 'дня назад'
      : this.ago === 0
      ? 'сегодня'
      : 'дней назад'
    }
  }
}
</script>

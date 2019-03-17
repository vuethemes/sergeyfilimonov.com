<template>
  <section id="contact" class="section">
    <div class="container has-text-centered">
      <div class="is-size-3 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">💬</div>
      <h3>
        <span class="is-size-3 is-size-4-mobile has-text-weight-bold">
          Хотите обсудить проект?
        </span>
      </h3>
      <p style="margin-top: 1rem; margin-bottom: 1rem;">
        <a
          href="https://api.whatsapp.com/send?phone=79261118328&text=Здравствуйте!%20Меня%20интересует%20сайт..."
          class="button button__whatsapp is-large is-outlined">
          <i class="fab fa-whatsapp"></i>
          Напишите в WhatsApp
        </a>
      </p>
      <div class="contacts-additional">
        <a class="button telegram" href="http://t-do.ru/sfilimonov">
          <i class="fab fa-telegram"></i>
          Telegram
        </a>
        <a class="button email" href="mailto:email@sergeyfilimonov.com">
          <i class="fa fa-envelope"></i>
          Email
        </a>
        <a class="button facebook" href="https://www.facebook.com/tunecatcher" target="_blank">
          <i class="fab fa-facebook"></i>
          Facebook
        </a>
        <a class="button vk" target="_blank" href="https://vk.com/sfilimonov">
          <i class="fab fa-vk"></i>
          VK
        </a>
        <a class="button instagram" target="_blank" href="https://www.instagram.com/sergey_v_filimonov/">
          <i class="fab fa-instagram"></i>
          Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Callback from '@/components/Callback'

export default {
  components: {
    Callback
  },
  methods: {
    show() {
      this.$modal.show('callback')
    },
    hide() {
      this.$modal.hide('callback')
    }
  }
}
</script>

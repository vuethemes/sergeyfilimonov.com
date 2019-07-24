<template>
  <ul class="flex">
    <li v-for="item in social" class="mr-2">
      <a :href="item.link" rel="nofollow noreferrer noopener" target="_blank">
        <i :class="`${item.icon} text-theme-text hover:text-${item.color}`"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          name: 'YouTube',
          link: 'https://www.youtube.com/channel/UCoj3nHKZm6r2acowfEwSFww?view_as=subscriber',
          icon: 'fab fa-youtube',
          color: 'social-youtube'
        },
        {
          name: 'Telegram',
          link: 'https://tele.click/sfilimonov',
          icon: 'fab fa-telegram',
          color: 'social-telegram'
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/sergeyfilimonov_com',
          icon: 'fab fa-instagram',
          color: 'pink-500'
        },
        {
          name: 'Facebook',
          link: 'https://facebook.com/tunecatcher',
          icon: 'fab fa-facebook',
          color: 'social-facebook'
        },
        {
          name: 'WhatsApp',
          link: 'https://api.whatsapp.com/send?phone=79261118328',
          icon: 'fab fa-whatsapp',
          color: 'social-whatsapp'
        },
        {
          name: 'Email',
          link: 'mailto:email@sergeyfilimonov.com',
          icon: 'fa fa-envelope',
          color: 'gray-500'
        },
      ]
    }
  }
}
</script>

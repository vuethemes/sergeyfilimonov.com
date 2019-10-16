<template>
  <ul class="flex">
    <li v-for="item in social" class="mr-2">
      <a :href="item.link" rel="nofollow noreferrer noopener" target="_blank">
        <fa :icon="['fab', item.icon]":class="`text-theme-text hover:text-${item.color}`"/>
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
          icon: 'youtube',
          color: 'social-youtube'
        },
        {
          name: 'Telegram',
          link: 'https://tele.click/sfilimonov',
          icon: 'telegram',
          color: 'social-telegram'
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/sergeyfilimonov_com',
          icon: 'instagram',
          color: 'pink-500'
        },
        {
          name: 'Facebook',
          link: 'https://facebook.com/tunecatcher',
          icon: 'facebook',
          color: 'social-facebook'
        },
        {
          name: 'WhatsApp',
          link: 'https://api.whatsapp.com/send?phone=79261118328',
          icon: 'whatsapp',
          color: 'social-whatsapp'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/sergeyfilimonov/sergeyfilimonov.com',
          icon: 'github',
          color: 'gray-500'
        }
      ]
    }
  }
}
</script>

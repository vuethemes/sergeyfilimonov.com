<template>
  <nav id="navbar" class="navbar section py-4 bg-white">
    <div class="container">
      <div class="flex items-center justify-between lg:flex-row">
        <div class="flex items-center">
          <g-link to="/" class="mr-6 hover:text-primary">
            <div class="text-lg lg:text-2xl font-bold">Сергей Филимонов</div>
            <div class="text-xs">
              О&nbsp;сайтах, продуктивности и&nbsp;всём&nbsp;таком
            </div>
          </g-link>
        </div>
        <div class="flex items-end lg:items-center mt-2 lg:mt-0 flex-col lg:flex-row">
          <ul class="flex items-center mr-2">
            <li class="lg:mr-6" v-for="page in pages">
              <g-link class="text-base leading-none hover:text-primary" :to="page.to" :class="$route.path == page.to ? 'text-primary' : ''">{{ page.text }}</g-link>
            </li>
          </ul>
          <ul class="flex text-xl lg:text-2xl">
            <li v-for="item in social" class="mr-2"><a :href="item.link" rel="nofollow noreferrer noopener" target="_blank"><i :class="`fab fa-${item.icon} text-${item.color}`"></i></a></li>
          </ul>
          <ToggleTheme class="ml-4 hidden lg:block"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
    ToggleTheme
  },
  data() {
    return {
      pages: [
        {
          text: 'Обо мне',
          to: '/about'
        }
      ],
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
          name: 'VK',
          link: 'https://vk.com/sfilimonov',
          icon: 'vk',
          color: 'social-vk'
        }
      ]
    }
  }
}
</script>

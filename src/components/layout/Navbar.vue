<template>
  <nav id="navbar" class="navbar section py-4">
    <div class="container">
      <div class="flex items-center justify-between lg:flex-row">
        <div class="flex items-center">
          <div class="group">
            <g-link to="/" class="text-base lg:text-2xl leading-tight font-mono font-bold hover:text-primary" style="word-spacing: -5px;" :class="{ 'text-primary' : $route.path == '/' }">Сергей Филимонов</g-link>
          </div>
        </div>
        <div class="flex items-center lg:items-centerleading-none lg:mb-0">
          <Social class="text-md lg:text-xl"/>
          <ToggleTheme class="lg:ml-4 ml-2 lg:block lg:text-2xl hover:bg-theme-backgroundGray rounded-full lg:-mr-2"/>
        </div>
      </div>
      <div class="leading-none mt-2">
        <ul class="flex flex-wrap items-center mr-2 leading-none font-mono" style="word-spacing: -6px;">
          <li class="mr-3 lg:mr-4 mb-1 lg:mb-0" v-for="page in pages" v-if="page.type == 'theme'">
            <g-link :to="page.to" :class="['text-sm lg:text-base hover:text-primary', ($route.path == page.to ? 'text-primary' : '')]"><span v-html="page.text"/></g-link>
          </li>
          <li class="mr-4">|</li>
          <li class="mr-3 lg:mr-4 mb-1 lg:mb-0" v-for="page in pages" v-if="page.type == 'category'">
            <g-link :to="page.to" :class="['text-sm lg:text-base hover:text-primary', ($route.path == page.to ? 'text-primary' : '')]"><span v-html="page.text"/></g-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ToggleTheme from '@/components/ToggleTheme'
import Social from '@/components/Social'

export default {
  components: {
    ToggleTheme,
    Social
  },
  data() {
    return {
      pages: [
        {
          text: 'Статичные сайты',
          to: '/static-site',
          type: 'theme'
        },
        {
          text: 'Airtable',
          to: '/airtable/',
          type: 'theme'
        },
        {
          text: 'Intercom',
          to: '/intercom/',
          type: 'theme'
        },
        {
          text: 'Онлайн-курсы',
          to: '/courses/',
          type: 'category'
        },
        {
          text: 'Блог',
          to: '/blog/',
          type: 'category'
        },
        {
          text: 'Отзывы',
          to: '/reviews/',
          type: 'category'
        },
        {
          text: 'Выступления',
          to: '/talks/',
          type: 'category'
        },
      ]
    }
  }
}
</script>

<template>
  <nav id="navbar" class="navbar section py-4">
    <div class="container">
      <div class="flex items-center justify-between lg:flex-row">
        <div class="flex items-center">
          <g-link to="/" class="group mr-6">
            <div class="text-lg lg:text-2xl font-bold">Сергей Филимонов</div>
            <div class="text-xs">
              О&nbsp;сайтах, продуктивности и&nbsp;всём&nbsp;таком
            </div>
          </g-link>
        </div>
        <div class="flex items-end lg:items-center lg:mt-0 flex-col lg:flex-row leading-none -mb-1 lg:mb-0">
          <ul class="flex items-center mr-2">
            <li class="lg:mr-6" v-for="page in pages">
              <g-link :to="page.to" :class="['text-base leading-none hover:text-primary', ($route.path == page.to ? 'text-primary' : ''), (page.mobileHidden ? 'hidden lg:block' : '')]">{{ page.text }}</g-link>
            </li>
            <li class="lg:hidden block text-xl ml-2" style="margin-right: -1px;"><ToggleTheme/></li>
          </ul>
          <Social class="text-xl lg:text-xl mt-3 lg:mt-0"/>
          <ToggleTheme class="ml-4 hidden lg:block text-2xl hover:bg-theme-backgroundGray lg:p-2 rounded-full lg:-mr-2"/>
        </div>
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
          text: 'Обо мне',
          to: '/about'
        },
        {
          text: 'Блог',
          to: '/blog',
          mobileHidden: true
        },
        {
          text: 'Разработка сайта',
          to: '/services/site',
          mobileHidden: true
        },
        {
          text: 'Инструменты',
          to: '/tools',
          mobileHidden: true
        }
      ]
    }
  }
}
</script>

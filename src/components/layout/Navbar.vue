<template>
  <nav id="navbar" class="navbar section py-4">
    <div class="container">
      <div class="flex items-center justify-between lg:flex-row">
        <div class="flex items-center">
          <div class="group mr-6">
            <g-link to="/" class="text-base lg:text-2xl leading-tight font-mono font-bold" style="word-spacing: -6px;">Сергей Филимонов</g-link>
            <div class="mt-1 lg:mt-0 text-xs leading-tight">
              О статичных сайтах, serverless и <g-link class="link" to="/about/">всём таком</g-link>
            </div>
          </div>
        </div>
        <div class="flex items-end lg:items-center lg:mt-0 flex-col lg:flex-row leading-none -mb-1 lg:mb-0">
          <ul class="flex items-center mr-2 leading-none font-mono" style="word-spacing: -6px;">
            <li class="mr-2 lg:mr-6 mb-1" v-for="page in pages">
              <g-link :to="page.to" :class="['text-xs lg:text-base hover:text-primary', ($route.path == page.to ? 'text-primary' : ''), (page.mobileHidden ? 'hidden lg:block' : '')]"><span v-html="page.text"/></g-link>
            </li>
            <li class="lg:mr-6">
              <a href="https://tele.click/sergeyfilimonov_com" class="text-base leading-none hidden lg:block button button--xl rounded py-3" target="_blank"><fa :icon="['fab', 'telegram']" class="mr-1"/>Telegram-канал</a>
            </li>
            <li class="lg:hidden block text-md lg:text-xl lg:ml-2" style="margin-right: -1px;"><ToggleTheme/></li>
          </ul>
          <Social class="text-md lg:text-xl mt-1 lg:mt-0"/>
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
          text: 'О себе',
          to: '/about/',
          mobileHidden: false
        },
        {
          text: 'Блог',
          to: '/blog/',
          mobileHidden: false
        },
        {
          text: 'Сайты',
          to: '/services/site/',
          mobileHidden: false
        },
      ]
    }
  }
}
</script>

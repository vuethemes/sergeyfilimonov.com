<template>
  <nav id="navbar" class="navbar section py-4 bg-white">
    <div class="container">
      <div class="flex items-center justify-between">
        <ul class="flex items-center">
          <li class="mr-6 text-lg lg:text-2xl lg:font-bold">
            <g-link to="/">Сергей Филимонов</g-link>
          </li>
        </ul>
        <ul class="flex items-center">
          <!-- <li class="mr-6 hidden lg:block" v-for="link in links">
            <g-link class="text-xl gradientText" :to="link.to" :class="$route.path == link.to ? 'gradientText--active' : ''">{{ link.name }}</g-link>
          </li> -->
        </ul>
        <div class="flex items-center">
          <a class="button button--xl rounded mr-3 bg-social-youtube" href="https://instagram.com/sergeyfilimonov_com" target="_blank">
            YouTube
          </a>
          <a class="button button--xl rounded mr-3 bg-social-telegram" href="https://tele.click/sfilimonov" target="_blank">Telegram</a>
          <ToggleTheme/>
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
  mounted() {
    var prevScrollpos = window.pageYOffset

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset

      if (currentScrollPos <= 100) {
        document.getElementById('navbar').style.top = '0'
      } else if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-100px'
      }

      prevScrollpos = currentScrollPos
    }
  }
}
</script>

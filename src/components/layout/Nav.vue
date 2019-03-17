<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item sergeyfilimonov" href="/">
          <img src="@/assets/images/emojime.jpg" alt="emoji">
          <div class="text">
            <div class="is-size-4 is-size-5-mobile has-text-weight-bold" v-html="navbar.name"/>
            <div class="whatdoyoudo" v-html="navbar.profession"/>
          </div>
        </a>
        <a role="button" class="navbar-burger burger" @click="isActive = !isActive" :class="{ 'is-active' : isActive }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active' : isActive }">
        <div class="navbar-end">
          <a v-if="home" class="navbar-item" v-scroll-to="'#works'" v-html="navbar.items.works.text" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item" :href="navbar.items.works.link" v-html="navbar.items.works.text" @click="isActive = false"/>

          <a v-if="home" class="navbar-item" v-html="navbar.items.process.text" v-scroll-to="'#features'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item" v-html="navbar.items.process.text" :href="navbar.items.process.link" @click="isActive = false"/>

          <a v-if="home" class="navbar-item" v-html="navbar.items.contacts.text" v-scroll-to="'#contact'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item" v-html="navbar.items.contacts.text" :href="navbar.items.contacts.link" @click="isActive = false"/>

          <a v-if="home" class="navbar-item" v-html="navbar.items.faq.text" v-scroll-to="'#faq'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item" v-html="navbar.items.faq.text" :href="navbar.items.faq.link" @click="isActive = false"/>

          <a v-if="home" class="navbar-item" v-html="navbar.items.about.text" v-scroll-to="'#about'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item" v-html="navbar.items.about.text" :href="navbar.items.about.link" @click="isActive = false"/>

          <a v-if="lang != 'en'" class="navbar-item" href="/blog" :class="$route.path == '/blog' ? 'active' : ''" @click="isActive = false">Блог</a>
          <div v-if="lang != 'en'" class="navbar-item">
            <a href="http://t-do.ru/fullstackdesign"
              click="isActive = false"
              class="button"
              target="_blank"><i class="fab fa-telegram"></i>Telegram-канал</a>
          </div>
          <a v-if="lang != 'en'" class="navbar-item" href="/en" @click="isActive = false">🇬🇧In English</a>
          <a v-if="lang == 'en'" class="navbar-item" href="/" @click="isActive = false">🇷🇺На русском</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      navbar: {
        name: 'Сергей Филимонов',
        profession: 'Fullstack-дизайнер',
        items: {
          works: {
            text: 'Работы',
            link: '/#works'
          },
          process: {
            text: 'Процесс',
            link: '/#features'
          },
          contacts: {
            text: 'Контакты',
            link: '/#contacts'
          },
          about: {
            text: 'Обо мне',
            link: '/#about'
          },
          faq: {
            text: 'FAQ',
            link: '/#faq'
          }
        }
      },
      isActive: false
    }
  },
  computed: {
    home() {
      return this.$route.path === '/' || this.$route.path === '/en'
      ? true
      : false
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.navbar.name = 'Sergey Filimonov'
      this.navbar.profession = 'Fullstack Designer'

      this.navbar.items.works.text = 'Works'
      this.navbar.items.works.link = '/en#works'

      this.navbar.items.process.text = 'Process'
      this.navbar.items.process.link = '/en#process'

      this.navbar.items.contacts.text = 'Contacts'
      this.navbar.items.contacts.link = '/en#contacts'

      this.navbar.items.about.text = 'About'
      this.navbar.items.about.link = '/en#about'

      this.navbar.items.faq.text = 'FAQ'
      this.navbar.items.faq.link = '/en#faq'
    }
  }
}
</script>

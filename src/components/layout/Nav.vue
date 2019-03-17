<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item sergeyfilimonov" href="/">
          <img src="@/assets/images/emojime.jpg" alt="emoji">
          <div class="text">
            <div class="is-size-4 is-size-5-mobile has-text-weight-bold">{{textName}}</div>
            <div class="whatdoyoudo">{{textProfession}}</div>
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
          <a v-if="home" class="navbar-item" v-scroll-to="'#works'" @click="isActive = false">{{textWorks}}</a>
          <a v-if="!home" class="navbar-item" href="/#works" @click="isActive = false">{{textWorks}}</a>
          <a v-if="home" class="navbar-item" v-scroll-to="'#features'" @click="isActive = false">{{textProcess}}</a>
          <a v-if="!home" class="navbar-item" href="/#features" @click="isActive = false">{{textProcess}}</a>
          <a v-if="home" class="navbar-item" v-scroll-to="'#contact'" @click="isActive = false">{{textContacts}}</a>
          <a v-if="!home" class="navbar-item" href="/#contact" @click="isActive = false">{{textContacts}}</a>
          <a v-if="home" class="navbar-item" v-scroll-to="'#faq'" @click="isActive = false">FAQ</a>
          <a v-if="!home" class="navbar-item" href="/#faq" @click="isActive = false">FAQ</a>
          <a v-if="home" class="navbar-item" v-scroll-to="'#about'" @click="isActive = false">{{textAbout}}</a>
          <a v-if="!home" class="navbar-item" href="/#about" @click="isActive = false">{{textAbout}}</a>
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
      isActive: false
    }
  },
  computed: {
    home() {
      return this.$route.path === '/'
      ? true
      : false
    },
    textName() {
      return this.lang == 'en'
      ? 'Sergey Filimonov'
      : 'Сергей Филимонов'
    },
    textProfession() {
      return this.lang == 'en'
      ? 'Fullstack Designer'
      : 'Fullstack-дизайнер'
    },
    textWorks() {
      return this.lang == 'en'
      ? 'Works'
      : 'Работы'
    },
    textProcess() {
      return this.lang == 'en'
      ? 'Process'
      : 'Процесс'
    },
    textContacts() {
      return this.lang == 'en'
      ? 'Contacts'
      : 'Контакты'
    },
    textAbout() {
      return this.lang == 'en'
      ? 'About'
      : 'Обо мне'
    }
  }
}
</script>

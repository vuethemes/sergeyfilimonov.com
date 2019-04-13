<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item sergeyfilimonov" href="/">
          <img src="@/assets/images/emojime.jpg" alt="emoji">
          <div class="text">
            <div class="is-size-5 is-size-5-mobile has-text-weight-bold" v-html="navbar.name"/>
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
          <a v-if="home" class="navbar-item borderCenter" v-scroll-to="'#showcase'" v-html="navbar.items.works.text" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item borderCenter" :href="navbar.items.works.link" v-html="navbar.items.works.text" @click="isActive = false"/>
          <a v-if="home" class="navbar-item borderCenter" v-html="navbar.items.process.text" v-scroll-to="'#features'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item borderCenter" v-html="navbar.items.process.text" :href="navbar.items.process.link" @click="isActive = false"/>
          <a v-if="home" class="navbar-item borderCenter" v-html="navbar.items.contacts.text" v-scroll-to="'#contact'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item borderCenter" v-html="navbar.items.contacts.text" :href="navbar.items.contacts.link" @click="isActive = false"/>
          <a v-if="home" class="navbar-item borderCenter" v-html="navbar.items.faq.text" v-scroll-to="'#faq'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item borderCenter" v-html="navbar.items.faq.text" :href="navbar.items.faq.link" @click="isActive = false"/>
          <a v-if="home" class="navbar-item borderCenter" v-html="navbar.items.about.text" v-scroll-to="'#about'" @click="isActive = false"/>
          <a v-if="!home" class="navbar-item borderCenter" v-html="navbar.items.about.text" :href="navbar.items.about.link" @click="isActive = false"/>
          <div v-if="lang != 'en'" class="navbar-item has-dropdown is-hoverable borderCenter" href="/blog" :class="$route.path == '/blog' ? 'active' : ''" @click="isActive = false">
            <a class="navbar-link" href="/blog">
              Блог
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="/blog">
                Все статьи
              </a>
              <a class="navbar-item" @click="go('/blog', 'talks')">
                Выступления
              </a>
              <!--<hr class="navbar-divider">
              <a class="navbar-item" href="/partners">
                Корпоративным блогам
              </a>-->
            </div>
          </div>
          <div v-if="lang != 'en'" class="navbar-item">
            <a href="http://t-do.ru/fullstackdesign"
              click="isActive = false"
              class="button"
              target="_blank"><i class="fab fa-telegram"></i>Telegram-канал</a>
          </div>
          <a v-if="lang != 'en'" class="navbar-item borderCenter" href="/en" @click="isActive = false">🇬🇧In English</a>
          <a v-if="lang == 'en'" class="navbar-item borderCenter" href="/" @click="isActive = false">🇷🇺На русском</a>
        </div>
      </div>
    </nav>
  </div>
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
  methods: {
    go(url, category) {
      this.$router.push({ path: url, props: {category: category} })
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

<style lang="scss">
nav {
  border-bottom: 1px solid #eee;
  .button {
    &:hover {
      border-color: #36ADE1;
      i {
        color: #36ADE1;
      }
    }
  }
  .active {
    color: var(--primary-color);
  }
  .navbar-dropdown {
    border-top: 1px solid var(--primary-color);
  }
  .navbar-link:not(.is-arrowless)::after {
    border-color: var(--gray);
  }
}
.sergeyfilimonov {
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5rem;
    margin-bottom: 0;
    max-height: none !important;
    width: 50px;
    margin-left: -18px;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start !important;
    .whatdoyoudo {
      font-size: 8px;
      letter-spacing: 1px;
      text-transform: uppercase;;
    }
  }
}

.navbar-item {
  border-radius: 0 !important;
  transition: .2s !important;
  font-weight: 600;
  i {
    font-weight: 400;
  }
  &:hover {
    background: none !important;
    color: var(--primary-color);
  }
}

@media only screen and (max-width: 568px) {
  .navbar-brand {
    align-items: center !important;
  }
  .navbar-burger {
    &:hover {
      border-radius: 100px;
    }
  }
  .navbar-menu {
    padding: 1rem !important;
    border-radius: 8px;
  }
  .navbar-menu .navbar-item:hover {
    color: #8786FE !important;
  }
  .sergeyfilimonov {
    img {
      margin-left: -18px;
    }
  }
  .navbar {
    padding: 0rem 1rem;
    padding-top: 0rem;
  }
}
</style>

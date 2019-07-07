<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item sergeyfilimonov" href="/">
          <div class="text">
            <div class="is-size-5 is-size-5-mobile has-text-weight-bold" v-html="'Cергей Филимонов'"/>
            <div class="whatdoyoudo">Блог</div>
          </div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
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
      border-color: red;
      i {
        color: red;
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

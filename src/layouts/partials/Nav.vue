<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="is-size-4 is-size-4-mobile has-text-weight-bold">Сергей Филимонов</span>
        </a>
        <a role="button" class="navbar-burger burger" @click="isActive = !isActive" :class="{ 'is-active' : isActive }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active' : isActive }">
        <div class="navbar-end">
          <a class="navbar-item" href="#" v-scroll-to="'#works'">Работы</a>
          <a class="navbar-item" href="#" v-scroll-to="'#features'">Процесс разработки</a>
          <a class="navbar-item" href="#" v-scroll-to="'#contact'">Контакты</a>
          <a class="navbar-item" href="#" v-scroll-to="'#faq'">FAQ</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
.navbar-menu .navbar-item,
.footer-links a {
  border-radius: 0 !important;
  border-bottom: 4px solid white;
  transition: .2s !important;
  font-weight: 600;
}
.navbar-menu .navbar-item:hover,
.footer-links a:hover {
  background: none !important;
  border-bottom: 4px solid #3273dc;
  color: black !important;
}
.navbar-menu i {
  font-weight: 400;
}
@media only screen and (max-width: 568px) {
  .navbar-menu .navbar-item:hover,
  .footer-links a:hover {
    border-bottom: 4px solid white;
    color: #8786FE !important;
  }
  .navbar {
    padding: 0rem 1rem;
    padding-top: 1rem;
  }
}
</style>

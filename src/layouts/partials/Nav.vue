<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item sergeyfilimonov">
          <img src="@/assets/images/emojime.jpg" alt="emoji">
          <div class="text">
            <div class="is-size-4 is-size-5-mobile has-text-weight-bold">Сергей Филимонов</div>
            <div class="whatdoyoudo">Дизайнер и разработчик сайтов</div>
          </div>
        </div>
        <a role="button" class="navbar-burger burger" @click="isActive = !isActive" :class="{ 'is-active' : isActive }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active' : isActive }">
        <div class="navbar-end">
          <a class="navbar-item" v-scroll-to="'#works'" @click="isActive = false">Работы</a>
          <a class="navbar-item" v-scroll-to="'#features'" @click="isActive = false">Процесс разработки</a>
          <a class="navbar-item" v-scroll-to="'#contact'" @click="isActive = false">Контакты</a>
          <a class="navbar-item" v-scroll-to="'#faq'" @click="isActive = false">FAQ</a>
          <a class="navbar-item" v-scroll-to="'#about'" @click="isActive = false">Обо мне</a>
          <a
            class="navbar-item"
            href="http://t-do.ru/fullstackdesign"
            @click="isActive = false"
            target="_blank">
            <i class="fab fa-telegram"></i> Telegram-канал
          </a>
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

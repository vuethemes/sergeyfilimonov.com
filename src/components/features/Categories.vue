<template>
  <section id="categories" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <h2 class="title is-2">Онлайн-запись легко настраивается под ваш бизнес и дизайн сайта</h2>
          <div class="content">
            <p class="subtitle">Сервис подойдет для любой категории бизнеса. Онлайн-запись можно настроить для услуг, где используются сеансы, аренда, билеты или абонементы.</p>
          </div>
        </div>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="content">
            <div><strong>Недвижимость</strong></div>
            <a href="/">Узучить категорию</a>
          </div>
          <img src="/images/fields/2.jpg">
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <div><strong>Недвижимость</strong></div>
            <a href="/">Узучить категорию</a>
          </div>
          <img src="/images/fields/2.jpg">
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <div><strong>Недвижимость</strong></div>
            <a href="/">Узучить категорию</a>
          </div>
          <img src="/images/fields/2.jpg">
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <div><strong>Недвижимость</strong></div>
            <a href="/">Узучить категорию</a>
          </div>
          <img src="/images/fields/2.jpg">
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <div><strong>Недвижимость</strong></div>
            <a href="/">Узучить категорию</a>
          </div>
          <img src="/images/fields/2.jpg">
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Categories',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>

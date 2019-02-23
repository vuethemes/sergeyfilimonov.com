<template>
  <section id="partners" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <h2 class="title is-2">Одно расписание — множество площадоки еще больше клиентов</h2>
          <div class="content">
            <p class="subtitle">Как только вы настроите расписание для своих услуг, мы разместим вас на партнерских площадках с кнопкой онлайн-записи.</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="partners">
            <img src="/images/partners/yandex-maps.jpg" @click="image = '/images/yandex.jpg', currentPartner = 'yandex-maps'" v-bind:class="{'active' : currentPartner == 'yandex-maps'}">
            <img src="/images/partners/2gis.jpg" @click="image = '/images/zapis.jpg', currentPartner = '2gis'" v-bind:class="{'active' : currentPartner == '2gis'}">
            <img src="/images/partners/afisha.jpg" @click="image = '/images/zapis.jpg', currentPartner = 'afisha'" v-bind:class="{'active' : currentPartner == 'afisha'}">
            <img src="/images/partners/kudago.jpg" @click="image = '/images/zapis.jpg', currentPartner = 'kudago'" v-bind:class="{'active' : currentPartner == 'kudago'}">
          </div>
        </div>
        <div class="column">
          <img :src="image" alt="" style="width: 100%;">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      image: '/images/yandex.jpg',
      currentPartner: 'yandex-maps'
    }
  }
}
</script>

<style lang="scss">
.partners {
  display: inline-flex;
  flex-direction: column;
  img {
    margin-top: 2rem;
    filter: grayscale(1);
    transition: .2s;
    &.active {
      filter: grayscale(0);
    }
    &:hover {
      filter: grayscale(0);
      cursor: pointer;
    }
  }
}
</style>

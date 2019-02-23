<template>
  <section id="feature-5" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <h2 class="title is-2">Онлайн-запись за 10 минут без помощи программиста</h2>
          <div class="switcher">
            <div id="feature-1" class="switcher_item" @click="image = '/images/desktop-mobile.jpg', currentFeature = 'feature-1'" v-bind:class="{'switcher_item__active' : currentFeature == 'feature-1'}">
              <div class="switcher_item_bulk"></div>
              <div class="switcher_item_content">
                Создайте и опишите вашу услуг
              </div>
            </div>
            <div id="feature-2" class="switcher_item" @click="image = '/images/zapis.jpg', currentFeature = 'feature-2'" v-bind:class="{'switcher_item__active' : currentFeature == 'feature-2'}">
              <div class="switcher_item_bulk"></div>
              <div class="switcher_item_content">
                Выберите тип онлайн-записи и создайте расписание
              </div>
            </div>
            <div id="feature-3" class="switcher_item" @click="image = '/images/desktop-mobile.jpg', currentFeature = 'feature-3'" v-bind:class="{'switcher_item__active' : currentFeature == 'feature-3'}">
              <div class="switcher_item_bulk"></div>
              <div class="switcher_item_content">
                Добавьте услугу в виджет, который уже доступен по ссылке
              </div>
            </div>
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
  name: 'Feature5',
  data() {
    return {
      image: '/images/zapis.jpg',
      currentFeature: 'feature-1'
    }
  }
}
</script>

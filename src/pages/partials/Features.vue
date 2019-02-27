<template>
  <section id="features" class="section">
		<div class="container">
      <div class="is-size-3 is-size-3-mobile has-text-centered" style="margin-bottom: 1rem;">⚙️</div>
      <h2 class="has-text-centered is-size-3 is-size-4-mobile has-text-weight-bold">
        Как выстроен процесс разработки
      </h2>
      <br>
      <div class="columns feature">
        <div class="column">
          <img src="@/assets/images/data.jpg">
          <h3 class="is-size-5 is-size-5-mobile has-text-weight-bold">
            1. Проектирование
          </h3>
          <p>
            На первом этапе мы структурируем информацию для сайта: от <em>«твёрдых» данных</em>, вроде продуктов, до <em>смыслов</em>, уникальных особенностей продукта.
          </p>
        </div>
        <div class="column">
          <img src="@/assets/images/design.jpg">
          <h3 class="is-size-5 is-size-5-mobile has-text-weight-bold">
            2. Дизайн
          </h3>
          <p>
            На втором этапе мы детально прорисовываем все макеты так, чтобы клиент смог представить как будет выглядеть сайт, когда он будет готов.
          </p>
        </div>
        <div class="column">
          <img src="@/assets/images/code.jpg">
          <h3 class="is-size-5 is-size-5-mobile has-text-weight-bold">
            3. Запуск
          </h3>
          <p>
            Только после того, как сайт спроектирован и отрисован, можно приступать к вёрстке макетов и программированию страниц и шаблонов.
          </p>
        </div>
      </div>
    </div>
		</section>
</template>

<script>
export default {
  name: 'Features'
}
</script>

<style lang="scss">
#features {
  background: #fefefe;
  border-top: 1px solid #eee;
}
.feature {
  img {
    border-radius: 12px;
    box-shadow: 0 0 20px -4px #eee;
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
}
</style>

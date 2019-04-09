<template>
  <section id="showcase" class="section">
		<div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article id="hrnetology" class="tile is-child notification is-dark">
                <a class="is-size-4" href="https://hr.netology.ru" target="_blank">hr.netology.ru</a>
                <div class="tags">
                  <span class="tag is-rounded is-outlined is-inverted">#EdTech</span>
                  <span class="tag is-rounded">#Статичный</span>
                </div>
                <p class="subis-size-4">Сайт был разработан изначально на WordPress. В качестве фишки сайта я выбрал плавающее меню, которое позволяло видеть форму заказа в любом месте сайта. Так, конверсия достигала 30%.</p>
              </article>
              <article class="tile is-child notification is-light">
                <a class="is-size-4" href="https://erapoznaniya.ru" target="_blank">erapoznaniya.ru</a>
                <div class="tags">
                  <span class="tag is-rounded">#EdTech</span>
                  <span class="tag is-rounded">#WordPress</span>
                </div>
                <div class="content">
                  Серия форумов «Эра познания» — это история, философия и популяризация науки. Наша задача не просто рассказать о тех или иных событиях и процессах в прошлом, но и осмыслить их, причём, с непосредственным участием публики.
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article id="edmarket" class="tile is-child notification is-dark">
                <a class="is-size-4" href="https://edmarket.ru" target="_blank">edmarket.ru</a>
                <div class="tags">
                  <span class="tag is-rounded">#EdTech</span>
                  <span class="tag is-rounded">#WordPress</span>
                </div>
                <div class="content">
                  <p>Курсы, мастер-классы, конференции и нетворкинг для тех, кто работает или хочет работать в EdTech.</p>
                  <p>Сайт изначально разработан на WordPress, но сейчас переписывается на статичный фреймворк Gridsome.</p>
                  <p>Edmarket.ru — сложный сайт в том смысле, что состоит из множества подразделов и категорий продуктов. Это требует одновременно гибкости в редактировании и сохранении единого стиля оформления, что сложно сделать на конструкторах, но легко — при разработке сайта с нуля.</p>
                </div>
              </article>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent">
              <article id="spaceproductsense" class="tile is-child notification is-dark">
                <a class="is-size-4" href="https://space.productsense.io" target="_blank">space.productsense.io</a>
                <div class="tags">
                  <span class="tag is-rounded">#EdTech</span>
                  <span class="tag is-rounded">#WordPress</span>
                </div>
                <div class="content">
                  Стояла задача в короткие сроки разработать сайт для конференции ProductSense, на котором можно было бы размещать различные материалы: статьи, подкаты и прочее.
                </div>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article id="mspmoscow" class="tile is-child notification is-dark">
                <a class="is-size-4" href="https://мсп.москва" target="_blank">мсп.москва</a>
                <div class="tags">
                  <span class="tag is-rounded">#Услуги</span>
                  <span class="tag is-rounded">#Статичный</span>
                </div>
                <div class="content">
                  Один из немногих сайтов, которые я разработаывал не для отрасли онлайн-образования, но он мне очень нравится — заходите, посмотрите его сами :)
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent is-vertical">
          <article id="arttsapko" class="tile is-child notification is-dark">
            <div class="content">
              <a class="is-size-4" href="https://arttsapko.ru" target="_blank">arttsapko.ru</a>
              <div class="tags">
                <span class="tag is-rounded">#EdTech</span>
                <span class="tag is-rounded">#WordPress</span>
              </div>
              <div class="content">
                <p>Сайт для онлайн-школы по рисованию с возможностью принимать оплаты и встроенной LMS (Learning Management System, системой по управлению обучением). </p>
                <p>Сейчас сайт, как и многие другие мои проекты, переписывается на статичный фреймворк Gridsome.</p>
              </div>
            </div>
          </article>
          <article class="tile is-child notification has-background-dark is-dark">
            <div class="content">
              <a class="is-size-4" href="http://spiridonov.ru" target="_blank">spiridonov.ru</a>
              <div class="tags">
                <span class="tag is-rounded">#EdTech</span>
                <span class="tag is-rounded">#HTML</span>
              </div>
              <div class="content">
                <p>Персональный сайт для основателя «Нетологии-групп» Максима Спиридонова.</p>
                <p>Сейчас разрабатывается улучшенная версия, спроектированная специально для поддержки личного бренда руководителя компании стоимостью $72 млн.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
		</div>
	</section>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      text: {
        header: 'Мои работы',
      }
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.header = 'showcase'
    }
  }
}
</script>

<style lang="scss">
#showcase {
  .is-size-4 {
    margin-bottom: 1rem;
    font-weight: 700;
    display: inline-block;
    &:hover {
      text-decoration: none;
    }
  }
  .tag {
    margin: 0;
    margin-right: 12px;
    border: 2px solid #fff;
    background: none;
    font-weight: 600;
    color: #fff;
  }
  .is-light {
    .tag {
      border: 2px solid #333;
      color: #333;
    }
  }
  #arttsapko {
    background: linear-gradient(95.37deg, #ff590a 6.9%, #ff0b5d 93.1%);
  }
  #edmarket {
    background: linear-gradient(46.31deg, #9650FF 14.64%, #E17EFF 85.36%);
  }
  #hrnetology {
    background: -webkit-linear-gradient(left , rgb(1, 162, 221) , rgb(0, 87, 255) 100%);
  }
  #spaceproductsense {
    background: #25B309;
  }
  #mspmoscow {
    background: -webkit-linear-gradient(#eb5757,#ff5e5e);
  }
}
</style>

<template>
  <Layout>
    <div class="container mt-5">
      <div class="section markdown">
        <g-image src="@/assets/images/sergeyfilimonov.jpg" alt="Сергей Филимонов" class="w-40 h-40 rounded-lg mb-4 border border-theme-borderGray"/>
        <div class="max-w-4xl">
          <div class="text-lg lg:text-3xl mb-4 font-bold">Привет, я Сергей Филимонов</div>
          <ul>
            <li>Создаю удобные и стильные <g-link to="/services/site" class="link">сайты</g-link>, используя современные технологии вроде статических фреймворков, чат-ботов, авторассылок, использую авторские иллюстрации, профессиональные фото для создания уникальности сайтов. К слову, я участвую в официальной <a href="https://github.com/orgs/gridsome/teams/maintainers" target="_blank" class="inline">команде развития фреймворка Gridsome</a>.</li>
            <li>Создаю <a href="https://platforma.pw/" target="_blank" class="link">платформу для прохождения онлайн-курсов</a>.</li>
            <li>Веду <g-link to="/blog" class="link">блог</g-link> для маркетологов и разработчиков русско- и англоговорящих стран.</li>
          </ul>
          <h2>Мои проекты</h2>
          <ul>
            <li>Я создал более 20 сайтов, в том числе для <a href="https://edmarket.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">EdMarket</a>, <a href="https://hr.netology.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">Нетология HR</a>, <a href="https://ms.netology.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">Максим Спиридонов</a>.</li>
            <li>Соосновал онлайн-школу рисования <a href="https://arttsapko.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">arttsapko.ru</a>, отвечаю за системность развития и онлайн-платформу для обучения.</li>
            <li>Продюсировал канал на YouTube <a href="https://svoybrend.ru/svoy/youtube" target="_blank" class="link" rel="nofollow noreferrer noopener">Максима Спиридонова</a></li>
          </ul>
        </div>
      </div>
      <div class="section markdown">
        <h2>Мои выступления</h2>
        <div class="grid-cols grid-cols--2">
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MpaTFNpFzBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fs9jyO7ehQg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="section markdown">
        <h2>Отзывы клиентов</h2>
        <Reviews/>
      </div>
      <div class="section markdown">
        <h2>Отзывы сотрудников, коллег, подрядчиков</h2>
        <div class="grid-cols grid-cols--2">
          <div class="p-6 bg-theme-backgroundGray">
            <div class="relative">
              <span class="opacity-50">«</span>
              На входе от Сергея всегда получаешь подробнейшее ТЗ, с которым невозможно сделать что-либо не так. И при этом всегда есть пространство для творчества, что очень важно для иллюстраций и графики. Каждый новый заказ - трендовый стиль, некоторые из которых делаешь впервые, но никаких сомнений в успехе задуманного! Быстрое согласование, адекватные замечания, своевременная оплата. Вжух! и ты уже видишь результат совместной работы на работающих клиентских сайтах! Это действительно круто
              <span class="opacity-50">»,</span>
            </div>
            <div class="mt-4 text-sm">
              <span class="opacity-50">—</span> Алексей Сергиенко, TeamLead <a href="http://kpdmedia.com/" rel="nofollow noreferrer noopener" target="_blank" class="link">KPD Media</a>
            </div>
          </div>
          <div class="p-6 bg-theme-backgroundGray">
            <div class="relative">
              <span class="opacity-50">«</span>
              Сергей мой идеальный заказчик/работодатель/руководитель проекта. Тот самый о котором все говорят но никто никогда не видел! Тот что всегда знает к кому и зачем он обращается, точно знает что хочет получить в результате и, в тоже время, всегда на стороне исполнителя. Оплата своевременна, проекты захватывающие и отлично смотрящиеся на страницах в портфеле, некоторые я даже показывала своим ученикам :)
              <span class="opacity-50">»,</span>
            </div>
            <div class="mt-4 text-sm">
              <span class="opacity-50 mr-1">—</span><a href="https://www.instagram.com/linoroy/" rel="nofollow noreferrer noopener" target="_blank" class="link">Алина Роенко</a>, иллюстратор
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Contacts from '@/components/sections/Contacts'
import Reviews from '@/components/sections/site/Reviews'

export default {
  components: {
    Contacts,
    Reviews
  },
  data() {
    return {
      meta: {
        title: 'Привет, я Сергей Филимонов',
        description: 'Главное о моих проектах, ссылки на выступления, отзывы от клиентов и сотрудников'
      }
    }
  },
  metaInfo() {
    return {
      title: this.meta.title,
      description: this.meta.description,
      meta: [
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/about.jpg' }
      ]
    }
  }
}
</script>

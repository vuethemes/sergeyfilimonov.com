<template>
  <Layout>
    <div class="container mt-5">
      <div class="section markdown">
        <div class="max-w-xl">
          <div class="mb-6">
            <div class="flex items-center">
              <g-image src="@/assets/images/sergeyfilimonov.jpg" alt="Сергей Филимонов" class="lg:h-24 lg:w-24 h-12 w-12 rounded-full shadow-lg border border-theme-borderGray mr-2 lg:mr-4"/>
              <div class="">
                <div class="text-lg lg:text-3xl mb-0 leading-tight font-mono" style="word-spacing: -0.4rem;">Привет, я Сергей Филимонов</div>
                <div class="text-xs lg:text-base">
                  Здесь — коротко о том, что интересного я сделал и какими проектам занят в данный момент
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <ul class="">
              <li>Создаю современные и быстрые <g-link to="/services/site" class="link">статичные сайты</g-link> на Vue, GraphQL, Tailwind и Now. Участвую в официальной <a href="https://github.com/orgs/gridsome/teams/maintainers" target="_blank" class="link inline">команде</a> развития фреймворка Gridsome.</li>
              <li>Создаю <a href="https://platforma.pw/" target="_blank" class="link">платформу</a> для авторов онлайн-курсов.</li>
              <li>Веду <g-link to="/blog" class="link">блог</g-link> для маркетологов и разработчиков русско- и англоговорящих стран.</li>
              <li>Веду <a href="https://www.youtube.com/channel/UCoj3nHKZm6r2acowfEwSFww?view_as=subscriber" class="link">канал на YouTube</a> и <a href="https://tele.click/sergeyfilimonov_com" class="link">канал в Telegram</a>.</li>
              <li>Я создал более 20 сайтов, в том числе для <a href="https://edmarket.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">EdMarket</a>, <a href="https://hr.netology.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">Нетология HR</a>, <a href="https://ms.netology.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">Максим Спиридонов</a>.</li>
              <li>Соосновал онлайн-школу рисования <a href="https://arttsapko.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">arttsapko.ru</a>, отвечаю за системность развития и онлайн-платформу для обучения.</li>
              <li>Продюсировал канал на YouTube <a href="https://www.youtube.com/channel/UCfhY78Qw1PeWLphcaA7PcNQ" target="_blank" class="link" rel="nofollow noreferrer noopener">Максима Спиридонова</a></li>
            </ul>
          </div>
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
          <div class="p-6 bg-theme-backgroundGray">
            <div class="relative">
              <span class="opacity-50">«</span>
              Работать с Сергеем было действительно приятно. Мне как дизайнеру логотипов, важно четко понимать поставленную задачу. Сергей профессионально подходит к своим проектам и грамотно составляет задание, что делает рабочий процесс эффективнее и быстрее.  Общение и сотрудничество с ними были легким и интересным. Я с нетерпением жду следующей возможности посотрудничать.
              <span class="opacity-50">»,</span>
            </div>
            <div class="mt-4 text-sm">
              <span class="opacity-50 mr-1">—</span><a href="https://www.instagram.com/sergiimanakov/" rel="nofollow noreferrer noopener" target="_blank" class="link">Сергей Манаков</a>, дизайнер логотипов
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

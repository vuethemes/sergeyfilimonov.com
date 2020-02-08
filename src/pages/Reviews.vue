<template>
  <Layout>
    <div class="container mt-5">
      <div class="section markdown">
        <h1>Отзывы клиентов</h1>
        <Reviews/>
      </div>
      <div class="section markdown">
        <h2>Отзывы сотрудников, коллег, подрядчиков</h2>
        <div class="grid lg:grid-cols-2 gap-6">
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

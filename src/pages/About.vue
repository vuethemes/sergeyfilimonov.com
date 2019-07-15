<template>
  <Layout>
    <div class="container section pt-4 pb-8">
      <div class="markdown">
        <img src="@/assets/images/sergeyfilimonov.jpg" alt="Сергей Филимонов" class="w-40 h-40 rounded-full mb-4 border border-gray-300">
        <div class="max-w-3xl">
          <div class="text-lg lg:text-3xl mb-4">Привет, я Сергей Филимонов.</div>
          <ul>
            <li>Разиваю студию <a href="https://svoybrend.ru" rel="nofollow noreferrer noopener" target="_blank" class="link">«Свой бренд»</a>.</li>
            <li>Создаю классные статические <a href="https://svoybrend.ru/svoy/site" target="_blank" class="link" rel="nofollow noreferrer noopener">сайты</a> на Gridsome, Vue, GraphQL и headless CMS.</li>
            <li>Работал проджект- и продакт-менеджером в Нетологии с самого основания и немного после образования холдинга «Нетология-групп».</li>
            <li>Соосновал онлайн-школу рисования <a href="https://arttsapko.ru" target="_blank" class="link" rel="nofollow noreferrer noopener">arttsapko.ru.</a></li>
            <li>Основал два SaaS-сервиса: сервис дашбордов Qometa.co (проработала полгода) и затем чатбот для сайта Soyuz.chat (проработал полтора года). Оба проекта закрыл, пробую дальше.</li>
            <li>Выступал на ProductSense.</li>
          </ul>
        </div>
        <h2>Видео со мной</h2>
        <div class="grid-cols grid-cols--2">
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MpaTFNpFzBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fs9jyO7ehQg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'Привет, я Сергей Филимонов',
        description: 'Разиваю студию «Свой бренд». Создаю классные статические сайты на Gridsome, Vue, GraphQL и headless CMS. Работал проджект- и продакт-менеджером в Нетологии с самого основания и немного после образования холдинга «Нетология-групп».'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/og/index.jpg' }
      ]
    }
  }
}
</script>

<template>
  <div class="pb-4 pt-8 lg:pt-8 bg-theme-backgroundGray border-t border-b border-theme-borderGray">
    <div class="container section grid lg:grid-cols-4 grid-cols-2 gap-6 lg:mb-8 mb-4">
      <div class="">
        <h4 class="font-mono lg:text-xl text-lg font-bold mb-2">Темы</h4>
        <ul>
          <li><g-link class="hover:text-primary" to="/static-site/">Статичный сайт</g-link></li>
          <li><g-link class="hover:text-primary" to="/airtable/">Airtable</g-link></li>
          <li><g-link class="hover:text-primary" to="/intercom/">Intercom</g-link></li>
        </ul>
      </div>
      <div class="">
        <h4 class="font-mono lg:text-xl text-lg font-bold mb-2">Категории</h4>
        <ul>
          <li><g-link class="hover:text-primary" to="/courses/">Онлайн-курсы</g-link></li>
          <li><g-link class="hover:text-primary" to="/blog/">Блог</g-link></li>
          <li><g-link class="hover:text-primary" to="/reviews/">Отзывы</g-link></li>
          <li><g-link class="hover:text-primary" to="/talks/">Выступления</g-link></li>
        </ul>
      </div>
      <div class="">
        <h4 class="font-mono lg:text-xl text-lg font-bold mb-2">Каналы</h4>
        <ul>
          <li><a class="hover:text-primary" href="https://www.youtube.com/channel/UCoj3nHKZm6r2acowfEwSFww?view_as=subscriber" target="_blank">YouTube</a></li>
          <li><a class="hover:text-primary" href="https://tglink.ru/sergeyfilimonov_com" target="_blank">Telegram</a></li>
          <li><a class="hover:text-primary" href="https://instagram.com/sergeyfilimonov_com" target="_blank">Instagram</a></li>
          <li><a class="hover:text-primary" href="https://github.com/sergeyfilimonov/sergeyfilimonov.com" target="_blank">GitHub</a></li>
        </ul>
      </div>
      <div class="">
        <h4 class="font-mono lg:text-xl text-lg font-bold mb-2">Контакты</h4>
        <ul>
          <li><a class="hover:text-primary" href="https://tglink.ru/sfilimonov" target="_blank">Telegram</a></li>
          <li><a class="hover:text-primary" href="https://api.whatsapp.com/send?phone=79959232515" target="_blank">WhatsApp</a></li>
          <li><a class="hover:text-primary" href="mailto:email@sergeyfilimonov.com" target="_blank">Email</a></li>
        </ul>
      </div>
    </div>
    <div class="container section flex items-center lg:justify-between flex-wrap leading-none flex-col lg:flex-row text-xs border-theme-backgroundGray border-t">
      <ul class="flex flex-wrap items-center lg:relative flex-col lg:flex-row" style="top: 1px;">
        <li class="mr-4 mt-3 lg:mt-0">© 2020 Сергей Филимонов</li>
        <li class="mr-4 mt-3 lg:mt-0"><a href="/feed.xml" target="_blank"><fa :icon="['fa', 'rss']" class="mr-1"/>RSS</a></li>
      </ul>
      <!-- <Social class="text-base mt-4 lg:mt-0"/> -->
    </div>
  </div>
</template>

<script>
import Social from '@/components/Social'

export default {
  components: {
    Social
  }
}
</script>

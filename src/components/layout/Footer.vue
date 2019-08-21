<template>
  <div class="pb-4 pt-2 lg:pt-4 text-xs bg-theme-backgroundGray border-t border-b border-theme-borderGray">
    <div class="container section flex items-center lg:justify-between flex-wrap leading-none">
      <ul class="flex flex-wrap items-center lg:relative" style="top: 1px;">
        <!-- <li class="mr-6 mt-3 lg:mt-0"><a href="#"><i class="fa fa-bell mr-2"></i>Push-уведомления</a></li> -->
        <!-- <li class="mr-6 mt-3 lg:mt-0"><a href="#"><i class="fa fa-envelope mr-2"></i>Email-подписка</a></li> -->
        <li class="mr-6 mt-3 lg:mt-0"><a href="/feed.xml" target="_blank"><i class="fa fa-rss mr-2"></i>RSS</a></li>
        <li class="mr-6 mt-3 lg:mt-0"><a href="/sitemap.xml" target="_blank"><i class="fa fa-sitemap mr-2"></i>Карта сайта</a></li>
        <li class="mr-6 mt-3 lg:mt-0"><g-link to="/contacts"><i class="fab fa-whatsapp mr-2"></i>Контакты</g-link></li>
      </ul>
      <Social class="text-base lg:mr-8 mt-3 lg:mt-0"/>
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

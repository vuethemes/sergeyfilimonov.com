<template>
  <div class="pb-4 pt-2 lg:pt-4 text-xs bg-theme-backgroundGray border-t border-b border-theme-borderGray">
    <div class="container section flex items-center lg:justify-between flex-wrap leading-none flex-col lg:flex-row">
      <ul class="flex flex-wrap items-center lg:relative flex-col lg:flex-row" style="top: 1px;">
        <li class="mr-4 mt-3 lg:mt-0">© 2020 Сергей Филимонов</li>
        <li class="mr-4 mt-3 lg:mt-0"><a href="/feed.xml" target="_blank"><fa :icon="['fa', 'rss']" class="mr-1"/>RSS</a></li>
        <li class="mr-4 mt-3 lg:mt-0"><a href="/sitemap.xml" target="_blank"><fa :icon="['fa', 'sitemap']" class="mr-1"/>Карта сайта</a></li>
      </ul>
      <Social class="text-base mt-4 lg:mt-0"/>
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

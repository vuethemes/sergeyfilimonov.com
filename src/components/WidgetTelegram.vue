<template>
  <div class="bg-theme-backgroundGray p-4 lg:p-4">
    <div class="font-bold text-xs text-theme-textSecondary mb-2 flex items-center">
      <div class="pulseAnim mr-1"><div/></div>
      Telegram: избранное
    </div>
    <div class="mb-4 pl-2 border-l border-social-telegram" v-for="post in posts">
      <div class="text-sm mb-1">
        {{ post.text }}
      </div>
      <div v-if="post.date" class="text-xs">
        {{ post.date }}
      </div>
      <a v-if="post.more" :href="post.more" class="text-xs link text-social-telegram border-social-telegram" target="_blank">Подробнее</a>
    </div>
    <a href="https://tele.click/sfilimonov" rel="nofollow noreferrer noopener" class="link text-social-telegram border-social-telegram" target="_blank">Все посты в Telegram →</a>
  </div>
</template>

<script>
import posts from '@/data/telegram.yaml'

export default {
  data() {
    return {
      posts: posts
    }
  }
}
</script>

<template>
  <div class="bg-gray-100 p-6">
    <div class="font-bold text-xs text-gray-500 mb-2 flex items-center">
      <div class="pulseAnim mr-1"><div/></div>
      Telegram
    </div>
    <div class="mb-4 pl-2 border-l border-social-telegram" v-for="post in posts">
      <div class="text-sm mb-2">
        {{ post.text }}
      </div>
      <div class="text-xs">
        {{ post.date }}
      </div>
    </div>
    <a href="https://tele.click/sfilimonov" class="link text-social-telegram border-social-telegram">Все посты в Telegram</a>
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

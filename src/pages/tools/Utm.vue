<template>
  <Layout>
    <ul>
      <li v-for="item in result">{{ item.Title }}</li>
    </ul>
  </Layout>
</template>

<script>
import allPosts from '@/data/1.json'
import bestPosts from '@/data/2.json'

export default {
  data() {
    return {
      result: []
    }
  },
  mounted() {
    this.result = allPosts.filter(item => bestPosts.includes(item.URL))
  }
}
</script>

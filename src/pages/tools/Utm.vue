<template>
  <Layout>
    <ul>
      <li v-for="item in result">{{ item.Title }}</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      result: []
    }
  }
}
</script>

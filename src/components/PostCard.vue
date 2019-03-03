<template>
  <Card>
    <div class="post-card">
      <h3 v-html="post.title"/>
      <PostMeta class="post" :post="post"/>
      <p v-html="post.excerpt"/>
      <g-link :to="post.path">
        Читать →
      </g-link>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true }
  }
}
</script>

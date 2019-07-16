<template>
  <Layout>
    <div class="flex items-center justify-center lg:h-128 flex-col">
      <div class="lg:text-4xl font-bold mb-4">
        Мои соцсети
      </div>
      <Social class="lg:text-4xl"/>
    </div>
  </Layout>
</template>

<script>
import Social from '@/components/Social'

export default {
  components: {
    Social
  }
}
</script>

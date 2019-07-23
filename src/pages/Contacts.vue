<template>
  <Layout>
    <div class="flex items-center justify-center lg:h-128 flex-col">
      <div class="lg:text-4xl font-bold mb-4">
        Мои соцсети
      </div>
      <Social class="lg:text-4xl"/>
      <Contacts class="mt-8"/>
    </div>
  </Layout>
</template>

<script>
import Social from '@/components/Social'
import Contacts from '@/components/sections/Contacts'

export default {
  components: {
    Social,
    Contacts
  }
}
</script>

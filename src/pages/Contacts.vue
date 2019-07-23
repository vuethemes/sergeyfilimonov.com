<template>
  <Layout>
    <div class="flex items-center justify-center lg:h-128 flex-col">
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

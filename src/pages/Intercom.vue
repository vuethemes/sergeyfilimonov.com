<template>
  <Layout>
    <div class="container section">
      <div class="mt-5 lg:mt-8 mb-4 lg:mb-6 flex flex-col lg:flex-row">
        <div class="lg:w-1/2 flex flex-col justify-center">
          <h1 class="text-3xl lg:text-5xl mb-2 lg:mb-0 leading-tight">Intercom — это дорого, но лучше бизнес-мессенджера вам&nbsp;не&nbsp;найти</h1>
          <div class="text-lg lg:text-2xl max-w-4xl mb-4 lg:my-8">
            Intercom позволит не только связать все каналы связи в одном сервисе, но и максимально, насколько это позволяет современный мессенджер автоматизировать процессы работы с клиентами.
          </div>
        </div>
        <div class="lg:w-1/2 w-full">
          <g-image src="@/assets/images/intercom.png" class=""/>
        </div>
      </div>
    </div>
    <Contacts class="my-4 lg:mt-0 lg:mb-12"/>
    <div class="-mb-8">
      <iframe class="airtable-embed border-t" src="https://airtable.com/embed/shrPrvTpT38ClO5rX" frameborder="0" onmousewheel="" width="100%" height="858px;"></iframe>
    </div>
  </Layout>
</template>

<script>
import Contacts from '@/components/sections/Contacts'

export default {
  components: {
    Contacts
  },
  data() {
    return {
      meta: {
        title: 'Airtable может быть вашей следующей CRM, CMS, [вставьте-что-хотите]',
        description: 'Если вы уже слышали об Airtable, осознаёте его возможности, потенциальную пользу для бизнеса, но у вас нет времени на внедрение, я могу сделать это за вас. Вернее — вместе с вами.'
      }
    }
  },
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        { name: 'description', content: this.meta.description },
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/site.jpg' }
      ]
    }
  }
}
</script>

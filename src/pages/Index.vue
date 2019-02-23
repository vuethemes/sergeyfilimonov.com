<template>
  <Layout>
    <Header/>
    <Works/>
    <Contact/>
    <FAQ/>
  </Layout>
</template>

<script>
import Header from '@/pages/partials/Header'
import Works from '@/pages/partials/Works'
import Contact from '@/pages/partials/Contact'
import FAQ from '@/pages/partials/FAQ'

export default {
  components: {
    Header,
    Works,
    Contact,
    FAQ
  },
  data() {
    return {
      //
    }
  },
  metaInfo: {
    title: 'Создаю быстрые и удобные сайты для образовательных проектов',
    meta: [
      { vmid: 'description', name: 'description', content: 'Сергей Филимонов' }
    ]
  }
}
</script>

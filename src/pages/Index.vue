<template>
  <Layout>
    <Intro/>
    <Works/>
    <Features/>
    <Contact/>
    <FAQ/>
  </Layout>
</template>

<script>
import Intro from '@/pages/partials/Intro'
import Works from '@/pages/partials/Works'
import Features from '@/pages/partials/Features'
import Contact from '@/pages/partials/Contact'
import FAQ from '@/pages/partials/FAQ'

export default {
  components: {
    Intro,
    Features,
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
    title: 'Быстрые и удобные сайты для образовательных проектов',
    meta: [
      { vmid: 'description', name: 'description', content: 'Сергей Филимонов' }
    ]
  }
}
</script>

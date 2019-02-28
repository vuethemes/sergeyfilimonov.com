<template>
  <Layout>
    <Intro/>
    <Works/>
    <Features/>
    <Contact/>
    <FAQ/>
    <About/>
  </Layout>
</template>

<script>
import Intro from '@/pages/sections/Intro'
import Works from '@/pages/sections/Works'
import Features from '@/pages/sections/Features'
import Contact from '@/pages/sections/Contact'
import FAQ from '@/pages/sections/FAQ'
import About from '@/pages/sections/About'

export default {
  components: {
    Intro,
    Features,
    Works,
    Contact,
    FAQ,
    About
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

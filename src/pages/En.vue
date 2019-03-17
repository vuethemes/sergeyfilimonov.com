<template>
  <Layout :lang="lang">
    <Intro :lang="lang"/>
    <Works :lang="lang"/>
    <Features :lang="lang"/>
    <Contact :lang="lang"/>
    <FAQ :lang="lang"/>
    <About :lang="lang"/>
  </Layout>
</template>

<script>
import Intro from '@/components/sections/Intro'
import Works from '@/components/sections/Works'
import Features from '@/components/sections/Features'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import About from '@/components/sections/About'
import BlogPosts from '@/components/sections/BlogPosts'

export default {
  data() {
    return {
      lang: 'en'
    }
  },
  components: {
    Intro,
    Features,
    Works,
    Contact,
    FAQ,
    About,
    BlogPosts
  },
  metaInfo: {
    title: 'Need a JAMstack website?',
    meta: [
      { vmid: 'description', name: 'description', content: 'I work with SaaS ☁️, EdTech 👩‍🎓, and startups 🚀' }
    ]
  }
}
</script>

<template>
  <Layout>
    <Intro/>
    <Works/>
    <Features/>
    <Contact/>
    <FAQ/>
    <About/>
    <BlogPosts headingText="Недавние статьи из блога" currentPage="home"/>
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
    title: 'Создаю статичные сайты по JAMstack',
    meta: [
      { vmid: 'description', name: 'description', content: 'Работаю с SaaS-проектами ☁️, EdTech 👩‍🎓, стартапами 🚀' }
    ]
  }
}
</script>

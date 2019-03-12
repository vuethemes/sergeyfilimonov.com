<template>
  <Layout>
    <Intro/>
    <Works/>
    <Features/>
    <Contact/>
    <FAQ/>
    <About/>
    <BlogPosts/>
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
    title: 'Быстрые и удобные сайты для образовательных проектов',
    meta: [
      { vmid: 'description', name: 'description', content: 'Среди моих работ: edmarket.ru, hr.netology.ru, spiridonov.ru, arttsapko.ru и др.' }
    ]
  }
}
</script>

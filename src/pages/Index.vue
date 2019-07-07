<template>
  <Layout>
    <BlogPosts headingText="Недавние статьи из блога" currentPage="home"/>
  </Layout>
</template>

<script>
import About from '@/components/sections/About'
import BlogPosts from '@/components/sections/BlogPosts'

export default {
  components: {
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

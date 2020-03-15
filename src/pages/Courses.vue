<template>
  <Layout>
    <div class="container section mt-5">
      <div class="">
        <div class="grid gap-3">
          <CourseCard v-for="edge in $page.courses.edges" :key="edge.node.id" :course="edge.node"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Courses {
  courses: allCourse {
    edges {
      node {
        id
        title
        path
        excerpt
        action
        slug
        content
        category
        date
        tags
        cover
        program {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import CourseCard from '@/components/cards/CourseCard'

export default {
  components: {
    CourseCard
  },
  data() {
    return {
      meta: {
        title: 'Онлайн-курсы | Сергей Филимонов',
        description: 'Онлайн-курс по статичным сайтам, Airtable, Intercom'
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
        { property: "og:image", content: 'https://sergeyfilimonov.com/og/index.jpg' }
      ]
    }
  }
}
</script>

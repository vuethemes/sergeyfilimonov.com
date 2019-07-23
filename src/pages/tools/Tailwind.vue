<template>
  <Layout>
    <div class="container section">
      <div class="mt-5 mb-4 h-screen">
        <h1 class="text-3xl lg:text-6xl mb-4 leading-none font-bold">Tailwind Components</h1>
        <div class="text-lg lg:text-2xl max-w-3xl lg:my-8">
          <div class="">
            This is an author library of <a href="https://tailwindcss.com" target="_blank" class="link">Tailwind CSS</a> components which can be used in any website or web app. Note that many components use <g-link to="/blog/grid-tailwind" class="link">my own grid system</g-link> — you need to include it.
          </div>
        </div>
        <div class="">
        </div>
        <div class="lg:mb-10">
          <ul class="flex text-lg lg:text-2xl flex-wrap">
            <li><a href="#" v-scroll-to="'#footers'" class="link mr-4 mb-2 lg:mb-0">Footers</a></li>
          </ul>
        </div>
        <div id="footers" class="lg:mt-6">
          <h2 class="text-3xl lg:text-5xl mb-4 font-bold">Footers</h2>
          Soon
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'Tailwind Components',
        description: 'Components for Tailwind CSS for any website or web app'
      }
    }
  },
  metaInfo() {
    return {
      title: this.meta.title,
      description: this.meta.description,
      meta: [
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: 'https://sergeyfilimonov.com/images/og/about.jpg' }
      ]
    }
  }
}
</script>

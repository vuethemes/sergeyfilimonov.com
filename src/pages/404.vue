<template>
  <Layout>
    <div class="container section text-center lg:h-128 flex flex-col justify-center items-center">
      <div class="">
        <div class="text-6xl mt-4">
          🤔
        </div>
        <h1 class="text-6xl font-bold">404</h1>
        <div class="text-2xl mt-4">
          <div class="">
            Нет страницы с адресом
          </div>
          <span class="link text-black">{{ 'sergeyfilimonov.com' + this.$route.path }}</span>
        </div>
        <g-link class="button button--2xl rounded-full glow mt-8" to="/">Перейти на главную</g-link>
        <div class="hidden text-social-youtube text-social-telegram text-social-facebook text-social-vk text-pink-500"/>
      </div>
    </div>
  </Layout>
</template>
</script>

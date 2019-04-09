<template>
  <section id="works" class="section">
		<div class="container">
			<div class="label">
				<div style="padding-top: 2px;font-size: 10px !important;color:#656565;">{{text.works}}</div>
			</div>
			<div class="projects has-text-centered" style="margin-top: -16px;">
				<div class="columns">
				  <div class="column">
				    <a id="arttsapko" href="https://arttsapko.ru" target="_blank">arttsapkó.ru</a>
				  </div>
          <div class="column">
				    <a id="edmarket" href="https://edmarket.ru" target="_blank">edmarket.ru</a>
				  </div>
				  <div class="column">
				    <a id="spiridonov" href="http://spiridonov.ru" target="_blank">spiridonov.ru</a>
				  </div>
				</div>
				<div class="columns">
				  <div class="column">
				    <a id="netology" href="https://hr.netology.ru" target="_blank">hr.netology.ru</a>
				  </div>
          <div class="column">
				    <a id="productsense" href="https://space.productsense.io" target="_blank">space.productsense.io</a>
				  </div>
          <div class="column">
				    <a id="erapoznaniya" href="https://erapoznaniya.ru" target="_blank">erapoznaniya.ru</a>
				  </div>
				</div>
        <div class="columns">
				  <div class="column">
				    <a id="msp" href="https://мсп.москва" target="_blank">мсп.москва</a>
				  </div>
          <div class="column">
				    <a id="loffi" href="https://loffi.ru" target="_blank">loffi.ru</a>
				  </div>
          <div class="column">
				    <a id="bookform" href="https://blog.bookform.ru" target="_blank">blog.bookform.ru</a>
				  </div>
				</div>
			</div>
    </div>
		</section>
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      text: {
        works: 'Мои работы'
      }
    }
  },
  mounted() {
    if(this.lang == 'en') {
      this.text.works = 'Works'
    }
  }
}
</script>

<style lang="scss">
#works a {
  color: #000 !important;
  font-weight: 700;
  transition: .2s !important;
}
#works a span {
	display: inline-block;
	transition: .2s !important;
}
#works a:hover span {
	transform: translateX(2px);
}
#works a:hover,
.my-link:hover {
  text-decoration: none;
  color: #3273dc !important;
}
</style>

<template>
  <footer id="more" class="section">
		<div class="container has-text-centered">
			<p>© Сергей Филимонов 2019 ∙ <a class="my-link" href="https://github.com/sergeyfilimonov/sergeyfilimonov.com" target="_blank">Этот сайт на GitHub</a></p>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  .footer-links {
    display: flex;
  }
  .footer-links a {
    font-weight: 600;
    color: #333;
    margin-right: 1rem;
  }
</style>

<template>
  <div class="layout">
    <Nav v-if="nav !== false" />
    <slot/>
    <Footer v-if="footer !== false" />
    <Messenger/>
  </div>
</template>

<script>
import Nav from './partials/Nav'
import Footer from './partials/Footer'
import Messenger from './partials/Messenger'

export default {
  props: ['footer'],
  components: {
    Nav,
    Footer,
    Messenger
  },
  metaInfo: {
    titleTemplate: '%s | Сергей Филимонов',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'favicon', href: 'favicon.png' }
    ]
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: 'Circe' !important;
  color: #000 !important;
}
h1, h3 {
	line-height: 1.1 !important;
}

sup {
	margin-left: 2px;
	position: relative;
	bottom: 2px !important;
}
#hero,
#works {
	padding-bottom: 0 !important;
}
#more {
	padding-top: 1.8rem !important;
	padding-bottom: 1.8rem !important;
}
.projects {
	max-width: 960px;
	margin: auto;
	border-radius: 6px;
	padding: 2rem;
	background: #fff !important;
	border: 1px solid #dadada;
	transition: .2s !important;
	z-index: 100;
}
.projects a {
	font-size: 18px;
}
a i {
	margin-right: 6px;
}
.button {
	border: 1px solid #000;
	border-bottom: 2px solid #000;
	transition: .2s;
}
.button:hover {
	color: #fff !important;
	background: #333 !important;
	border-color: #000;
}
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
.my-link {
	text-decoration: underline;
	color: #333 !important;
	transition: .2s !important;
}
li i {
  position: relative;
  top: 1px;
  margin-right: 6px;
}
.tag {
  margin-left: 12px;
}
@media only screen and (max-width: 568px) {
  * {
    font-size: 20px;
  }
  .main-container {
    background-size: contain;
		background-repeat: no-repeat;
  }
	.column {
		text-align: center;
		padding: 4px;
	}
	.button {
		width: 100%;
	}
}
</style>

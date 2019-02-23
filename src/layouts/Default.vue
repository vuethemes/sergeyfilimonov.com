<template>
  <div class="layout">
    <Nav/>
    <slot/>
    <Footer/>
    <Messenger/>
  </div>
</template>

<script>
import Nav from './partials/Nav'
import Footer from './partials/Footer'
import Messenger from './partials/Messenger'

export default {
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

#whatsapp-button {
	display: none;
}
#telegram-button {
	display: flex;
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
  #telegram-button {
		display: none !important;
	}
	#whatsapp-button {
		display: flex;
	}
	.column {
		text-align: center;
		padding: 4px;
	}
	.button {
		width: 100%;
	}
}

h1, h2, h3 {
  font-family: 'Gilroy';
  font-weight: 600;
}
p, li {
  font-family: 'Graphik';
  line-height: 1.6 !important;
}
.content a {
  color: #8786FE !important;
  font-weight: 600;
  border-bottom: 2px solid #fff;
  transition: .2s;
}
.content a:hover {
  border-bottom: 2px solid #8786FE;
  opacity: 0.8;
}
.has-padding-1 {
  padding: 1rem;
}
.has-padding-4 {
  padding: 4rem;
}
.make-content-to-right {
  display: flex !important;
  justify-content: flex-end;;
}
@media only screen and (max-width: 568px) {
  .is-1 {
    font-size: 28px !important;
  }
  .is-2 {
    font-size: 24px !important;
  }
  p {
    font-size: 16px !important;
    line-height: 1.6 !important;
  }
}
@font-face {
  font-family: 'Gilroy';
  src: url('/fonts/gilroy/Gilroy-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url('/fonts/gilroy/Gilroy-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url('/fonts/gilroy/Gilroy-Bold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Graphik';
  src: url('/fonts/graphik/Graphik-Regular-Cy.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Graphik';
  src: url('/fonts/graphik/Graphik-Medium-Cy.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Graphik';
  src: url('/fonts/graphik/Graphik-Bold-Cy.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}
</style>

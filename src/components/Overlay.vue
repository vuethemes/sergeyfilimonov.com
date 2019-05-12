<template>
  <div class="overlay" :style="{ opacity: opacity }"/>
</template>

<script>
export default {
  props: ['opacity']
}
</script>

<style lang="scss">
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  -webkit-transition: .2s;
  transition: .2s;
}
</style>

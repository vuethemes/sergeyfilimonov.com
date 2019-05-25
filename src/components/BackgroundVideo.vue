<template>
  <div class="background-video">
    <video autoplay="" loop="">
      <source src="" type="video/mp4"/>
    </video>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.background-video {
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    display: block;
  }
}
</style>

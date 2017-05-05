<template>
  <div class="ui container">
    <h1>Lightbox</h1>
    <a :href="'http://lorempicsum.com/up/900/600/'+n" v-lightbox v-for="n in 9">
      <img :src="'http://lorempicsum.com/up/150/150/'+n" alt="">
    </a>
    <lightbox-viewer></lightbox-viewer>
  </div>
</template>

<script>
  import LightboxViewer from './LightboxViewer.vue'
  export default {
    name: "lightbox",
    components: {LightboxViewer}
  }
</script>
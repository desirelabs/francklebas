<template>
  <div @click.stop>
    <img :src="src" width="500" class="lightbox-image" :style="style">
    <div v-if="loading">
      <div class="ui active dimmer">
        <div class="ui loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: String
    },
    data () {
      return {
        loading: true,
        src: false,
        style: {}
      }
    },
    methods: {
      resizeImage(image) {
        let width = image.width
        let height = image.height

        if (width > window.innerWidth || height > window.innerHeight) {
          let ratio = width / height
          let windowRatio = window.innerWidth / window.innerHeight
          if(ratio > windowRatio) {
            width = window.innerWidth
            height = width / ratio
          }
          else {
            height = window.innerHeight
            width = height * ratio
          }
        }

        this.style = {
          width: width+"px",
          height: height+"px"
        }
      }
    },
    mounted() {
      let image = new window.Image()
      image.onload = _ => {
        this.src = this.image
        this.loading = false
        this.resizeImage(image)
      }
      image.src = this.image
      this.resizeEvent = () => {
        this.resizeImage(image)
        console.log('resize')
      }
      window.addEventListener('resize', this.resizeEvent)
    },
    destroyed() {
      window.removeEventListener('resize', this.resizeEvent)
    }
  }
</script>
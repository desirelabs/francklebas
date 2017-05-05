<style src="./lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image">
    <!-- TODO transition -->
    <transition :name="transition">
      <lightbox-image :image="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightbox-close" @click="close">
      <i class="remove circle outline icon"></i>
    </div>
    <button class="lightbox-nav lightbox-prev" @click.prevent="prev">
      <i class="caret left icon"></i>
    </button>
    <button class="lightbox-nav lightbox-next" @click.prevent="next">
      <i class="caret right icon"></i>
    </button>
  </div>
</template>

<script>
  import './LightboxDirective'
  import LightboxImage from './LightboxImage.vue'
  import store from './LightboxStore'

  export default {
    components: { LightboxImage },
    data() {
      return {
        state: store.state,
        direction: 'right'
      }
    },
    methods: {
      close() {
        store.close()
      },
      prev() {
        store.prev()
        this.direction = 'left'
      },
      next() {
        store.next()
        this.direction = 'right'
      },
    },
    computed: {
      transition() {
        return "lightbox-" + this.direction
      },
      image() {
        if(this.state.index !== false){
          return this.state.images[this.state.index-1]
        }
      }
    }
  }
</script>
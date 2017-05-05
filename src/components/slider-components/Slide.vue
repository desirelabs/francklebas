<template>
  <transition :name="transition">
    <div v-show="visible">
      <img :src="image.src" alt="">
    </div>
  </transition>
</template>

<script>
  export default {
    name: "slide",
    props: {
      index: {type: Number, default: 0},
      image: {type: String, default: ""}
    },
    data() {
      return {
        images: [
          { src: "http://lorempicsum.com/futurame/900/350/1" },
        ]
      }
    },
    computed: {
      visible() {
        return this.index === this.$parent.index
      },
      transition() {
        if(this.$parent.direction)
          return "slide-" + this.$parent.direction
      }
    }
  }
</script>

<style>
</style>
<template>
  <div class="ui vertical inverted center aligned segment slider">
    <transition-group :name="transition" tag="div">
      <div v-for="(slide, i) in slides" :key="i" v-if="index == i">
        <img :src="slide.image" width="100%">
      </div>
    </transition-group>
    <button class="slider-nav slider-prev" @click.prevent="prev">
      <i class="caret left icon"></i>
    </button>
    <button class="slider-nav slider-next" @click.prevent="next">
      <i class="caret right icon"></i>
    </button>
    <div class="slider-pagination">
      <button class="slider-pagination-button" v-for="n in slidesCount" @click.prevent="goto(n-1)">
        <i class="circle icon" :class="{thin:index != n-1}"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import Slide from './Slide.vue'

  export default {
    components: { Slide },
    data() {
      return {
        index: 0,
        slides: [
          { image: "http://lorempicsum.com/up/900/350/1" },
          { image: "http://lorempicsum.com/up/900/350/2" },
          { image: "http://lorempicsum.com/up/900/350/3" },
          { image: "http://lorempicsum.com/up/900/350/4" }
        ],
        direction: 'right'
      }
    },
    methods: {
      prev() {
        this.index--
        this.direction = 'left'
        if(this.index < 0)
          this.index = this.slidesCount-1
      },
      next() {
        this.index++
        this.direction = 'right'
        if(this.index >= this.slidesCount)
          this.index = 0
      },
      goto(index) {
        if(index > this.index){
          while(index > this.index) {
            this.next()
          }
        }
        if(index < this.index){
          while(index < this.index) {
            this.prev()
          }
        }
      }
    },
    computed: {
      slidesCount() {
        return this.slides.length
      },
      visible(slide) {
        slide.index == this.index
      },
      transition() {
        if(this.direction)
          return "slide-" + this.direction
      }
    }
  }
</script>

<style>
  .slider {
    position: relative !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .slider .slider-nav {
    background-color: #000;
    border: none;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 2rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-30px);
    left: 20px;
  }
  .slider .slider-nav:focus {
    outline: none;
  }
  .slider .slider-next {
    left: inherit;
    right: 20px;
  }
  /* pagination */
  .slider .slider-pagination-button {
    border: none;
    background: none;
  }
  .slider .slider-pagination-button:focus {
    outline: none;
  }
  .slide-right-enter-active {
    animation: slideRightIn .5s;
  }
  .slide-right-leave-active {
    animation: slideRightOut .5s;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
  @keyframes slideRightIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideRightOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  .slide-left-enter-active {
    animation: slideLeftIn .5s;
  }
  .slide-left-leave-active {
    animation: slideLeftOut .5s;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
  @keyframes slideLeftIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideLeftOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
</style>
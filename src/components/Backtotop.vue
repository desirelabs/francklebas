<template>
  <div class="totop" @click="scrollTop">
    <i class="angle up icon"></i>
  </div>
</template>

<script>
  export default {
    name: 'backtotop',
    data () {
      return {
        scrolled: false
      }
    },
    methods: {
      setVisibility (opacity) {
        //document.querySelector('.totop').style.opacity = opacity
      },
      scrollToTop () {
        let scroll = window.scrollY
        if (scroll > 350) {
          this.setVisibility (1)
        } else {
          this.setVisibility (0)
        }
      },
      scrollTop () {
        $("html, body").animate({
          scrollTop: 0
        }, 500)
      }
    },
    created () {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    mounted () {
      this.setVisibility (0)
    }
  }
</script>

<style lang="scss">
  .totop {
    width: 60px;
    height: 60px;
    line-height: 60px;
    position: fixed;
    bottom: 81px;
    right: 10px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.8);
    transition: opacity 0.3s ease-in-out;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    i {
      display: inline-block;
      height: 60px;
      margin: 0;
    }
  }
  @media only screen and (max-width: 700px) {
    .totop {
      width: 40px;
      height: 40px;
      bottom: 65px;
      i {
        height: 40px;
        line-height: 40px;
      }
    }
  }
</style>
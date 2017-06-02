<template>
  <div id="wrapper" class="pusher">
    <heading></heading>
    <transition name="fade" mode="out-in" appear>
      <router-view name="hello"></router-view>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <router-view name="page"></router-view>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <router-view name="portfolio"></router-view>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <router-view name="project"></router-view>
    </transition>
    <foot></foot>
    <back-to-top></back-to-top>
    <loader :active="loader"></loader>  
  </div>
</template>

<script>
  import backToTop from './components/Backtotop'
  import Heading from './components/Heading'
  import Foot from './components/Foot'
  import Loader from './components/Loader'
  export default {
    name: 'app',
    components: { backToTop, Foot, Loader, Heading },
    data () {
      return {
        loader: true
      }
    },
    mounted () {
      this.loader = false
    }
  }
</script>

<style lang="scss">
/**
 * Transition between pages
 */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
.ui.menu {
    margin-bottom: 0;
}
.main.container {
    margin-top: 7em;
}
</style>

<style src="./main.scss" lang="scss"></style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import MasonryLayout from 'masonry-layout'
import ImagesLoaded from 'imagesloaded'

Vue.prototype.$imagesloaded = ImagesLoaded
Vue.prototype.$masonry = MasonryLayout

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('#app')
})
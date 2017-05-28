// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */

const app = new Vue({
  router,
  render: h => h(require('./App'))
})

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('#app')
})
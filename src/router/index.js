import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Component from '@/components/Component'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/comp',
      name: 'Component',
      component: Component
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})

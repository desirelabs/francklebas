import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Portfolio from '@/components/Portfolio/Portfolio'
import Project from '@/components/Portfolio/Project'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      components: {
        hello: Hello
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      components: {
        portfolio: Portfolio
      }
    },
    {
      path: '/portfolio/:slug',
      name: 'Project',
      components: {
        portfolio: Project
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {
        contact: Contact
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

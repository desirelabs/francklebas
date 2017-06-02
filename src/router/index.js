import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Portfolio from '@/components/Portfolio/Portfolio'
import Project from '@/components/Portfolio/Project'
import Page from '@/components/Page/Page'

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
      path: '/page/:uid',
      name: 'Page',
      components: {
        page: Page
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0 }
  }
})

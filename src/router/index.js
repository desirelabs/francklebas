import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Articles from '@/components/Blog/Articles'
import Lightbox from '@/components/lightbox-components/Lightbox'
import Portfolio from '@/components/Portfolio/Portfolio'
import Component from '@/components/Component'
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
      name: 'Portfolio',
      components: {
        portfolio: Portfolio
      }
    },
    {
      path: '/comp',
      name: 'Component',
      components: {
        Component
      }
    },
    {
      path: '/articles/:page(\\d+)',
      name: 'Articles',
      components: {
        blog: Articles
      }
    },
    {
      path: '/articles/all',
      name: 'Articles',
      components: {
        blog: Articles
      }
    },
    {
      path: '/:article?',
      name: 'Article',
      components: {
        blog: Articles
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

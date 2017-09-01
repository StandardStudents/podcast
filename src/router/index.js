import Vue from 'vue'
import Router from 'vue-router'
import Lander from '@/components/Lander'
import About from '@/components/About'
import Archive from '@/components/Archive'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lander',
      component: Lander
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    }
  ]
})

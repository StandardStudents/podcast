import Vue from 'vue'
import Router from 'vue-router'
import Lander from '@/components/Lander'
import About from '@/components/About'
import Archive from '@/components/Archive'

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
    }
  ]
})

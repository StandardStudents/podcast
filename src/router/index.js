import Vue from 'vue'
import Router from 'vue-router'
import Lander from '@/components/Lander'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})

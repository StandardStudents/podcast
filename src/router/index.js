import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/components/Main'
import Lander from '@/components/Lander'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lander',
      component: Lander
    }
  ]
})

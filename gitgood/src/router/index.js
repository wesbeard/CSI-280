import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dogs from '@/components/Dogs'
import Cats from '@/components/Cats'
import Other from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "Home"
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dogs',
      name: 'Dogs',
      component: Dogs
    },
    {
      path: '/Cats',
      name: 'Cats',
      component: Cats
    },
    {
      path: '/About',
      name: 'About',
      component: Other
    }
  ]
})

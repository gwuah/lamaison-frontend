import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Authenticate from './views/Authenticate.vue'
import ManagerApplication from './views/ManagerApplication.vue'
import ManagerHome from './components/subviews/ManagerHome.vue'
import ManagerSettings from './components/subviews/ManagerSettings.vue'
import Listing from './components/subviews/Listing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: Authenticate
    },
    {
      path: '/manager',
      name: 'manager',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ManagerApplication,
      children:[
        {
          path: 'home',
          name: 'Home',
          component: ManagerHome
        },
        {
          path: 'settings',
          name: 'Settings',
          component: ManagerSettings
        },
        {
          path: 'listing',
          name: 'Listing',
          component: Listing
        }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import MainVuex from '../mainVuex'
import { warningNotify } from '@/util/Notifications'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requireAuth: true, role: 'admin' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  MainVuex.commit('setSideMenuIsOpen', false)

  //check user has role or not
  if(to.meta.requireAuth) {

    if(!MainVuex.getters.getterLoggedUser) {
      warningNotify('Please sign in again!')
      router.push('/', () => {})
      return
    }

    if(to.meta.role === 'admin' && !MainVuex.getters.getterLoggedUser.isAdmin) {
      warningNotify(`You don't have permission to access this resource`)
      router.push('/home', () => {})
      return
    }

  }

  next()


})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
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
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requireAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  setTimeout(() => {
    window.scrollTo(0,0)
    let mainContent = document.getElementById('main-content')
    if(mainContent) mainContent.scrollTop = 0;
  },200)

  //check user has role or not
  if(to.meta.requireAuth) {

    if(!MainVuex.getters.getterLoggedUser) {
      warningNotify('Please sign in again!')
      router.push('/', () => {})
      return
    }

  }

  next()


})

export default router

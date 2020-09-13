import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Session } from '../services/session.enum'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import(/*webpackChunkName: "sign-in" */ "../views/sign-in.vue")
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/*webpackChunkName: "main" */ "../views/main.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/main') {
    if (!sessionStorage.getItem(Session.usoftwareUser))
      next({path: '/'})
  }
    next()
})

export default router

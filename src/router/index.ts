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
    component: () => import(/*webpackChunkName: "main" */ "../views/main.vue"),
    children: [
      {
        path: 'units',
        component: () => import(/*webpackChunkName: "main" */ "../views/units.vue")
      },
      {
        path: 'new-orders',
        component: () => import(/*webpackChunkName: "main" */ "../views/new-orders.vue")
      },
      {
        path: 'old-orders',
        component: () => import(/*webpackChunkName: "main" */ "../views/old-orders.vue")
      },
      {
        path: 'reports',
        component: () => import(/*webpackChunkName: "main" */ "../views/reports.vue")
      }
    ]
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
      next({ path: '/' })
  }
  next()
})

export default router

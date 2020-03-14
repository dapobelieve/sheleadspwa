import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import middlewarePipeline from "@/router/kernel/middlewarePipeline"
import auth from "@/router/middlewares/auth"
// import CheckLogin from '@/views/CheckLogin'
// import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})
 
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("@/views/Profile")
    },
    { path: '*', redirect: '/home' }
  ]
})


router.beforeEach((to, from, next) => {
  if(!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    router,
    store
  }

  return middleware[0]({...context, next: middlewarePipeline(context, middleware, 1)})
})

export default router

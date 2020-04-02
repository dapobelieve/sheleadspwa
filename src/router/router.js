import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import middlewarePipeline from "@/router/kernel/middlewarePipeline"
import auth from "@/router/middlewares/auth"
import newuser from "@/router/middlewares/newUser"
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
      component: () => import("@/views/app/index"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/app/home"),
          meta: {
            // middleware: [ auth, newuser ]
          }
        },
        {
          path: "/page2",
          name: "page2",
          component: () => import("@/views/app/page2"),
          meta: {
            middleware: [ newuser, auth ]
          }
        }
      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import("@/views/Home"),
      meta: {
        // middleware: [ newuser, auth ]
      }
    },
    {
      path: "/reg",
      component: () => import("@/views/register/index"),
      children: [
        {
          path: "password-create",
          name: "password-create",
          component: () => import("@/views/register/password")
        },
        {
          path: "info",
          name: "info",
          component: () => import("@/views/register/info")
        },
        {
          path: "interest",
          name: "interests",
          component: () => import("@/views/register/interests")
        },
        {
          path: "login",
          name: "login",
          component: () => import("@/views/register/login")
        },
        {
          path: "industry",
          name: "industry",
          component: () => import("@/views/register/location")
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("@/views/Profile")
    },
    // { path: '*', redirect: '/' }
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

import Vue from "vue";
import Router from "vue-router";
import Head from "vue-head";
import middlewarePipeline from "@/router/kernel/middlewarePipeline";
import auth from "@/router/middlewares/auth";
import newuser from "@/router/middlewares/newUser";
// import CheckLogin from '@/views/CheckLogin'
// import { isNil } from 'lodash'
import store from "@/store";

Vue.use(Router);

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
});

const router = new Router({
  mode: "history",
  // linkExactActiveClass: "",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/app/index"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/app/home"),
          meta: {
            // middleware: [auth, newuser]
          }
        },
        {
          path: "/courses",
          component: () => import("@/views/courses/index"),
          children: [
            {
              path: "",
              name: "courses",
              component: () => import("@/views/courses/home")
            },
            {
              path: "details/:id",
              name: "courseDetail",
              component: () => import("@/views/courses/courseDetail"),
              meta: {
                middleware: [newuser, auth],
                showNav: false
              }
            },
            {
              path: "enrolled",
              name: "enrolledCourseDetail",
              component: () => import("@/views/courses/enrolledCourseDetail"),
              meta: {
                middleware: [newuser, auth],
                showNav: false
              }
            }
          ]
        },
        {
          path: "search",
          name: "search",
          component: () => import("@/views/app/search")
        },
        {
          path: "notification",
          name: "notification",
          component: () => import("@/views/app/notification")
        },
        {
          path: "leaderboard",
          name: "leader",
          component: () => import("@/views/app/leader"),
          meta: {
            showTopBar: true
          }
        }
      ]
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("@/views/Home"),
      meta: {
        // middleware: [ newuser, auth ]
      }
    },
    {
      path: "/modal",
      // name: "sidenav",
      component: () => import("@/views/Profile")
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
      path: "/reset",
      component: () => import("@/views/reset/index"),
      children: [
        {
          path: "email",
          name: "resetEmail",
          component: () => import("@/views/reset/resetEmail")
        },
        {
          path: "password",
          name: "resetPassword",
          component: () => import("@/views/reset/resetPassword")
        }
      ]
    },
    { path: "*", redirect: "/" }
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    router,
    store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;

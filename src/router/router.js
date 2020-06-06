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

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new Router({
  mode: "history",
  scrollBehavior,
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
            middleware: [auth, newuser]
          }
        },
        {
          path: "enrolled",
          name: "enrolled",
          component: () => import("@/views/app/enrolled"),
          meta: {
            middleware: [auth, newuser],
            showTopBar: false
          }
        },
        {
          path: "help",
          name: "help",
          component: () => import("@/views/app/help"),
          meta: {
            middleware: [auth, newuser],
            showTopBar: false
          }
        },
        {
          path: "recommended",
          name: "recommended",
          component: () => import("@/views/app/recommended"),
          meta: {
            middleware: [auth, newuser],
            showTopBar: false
          }
        },
        {
          path: "saved-courses",
          name: "saved-courses",
          component: () => import("@/views/app/saved"),
          meta: {
            middleware: [auth, newuser],
            showTopBar: false
          }
        },
        {
          path: "new-courses",
          name: "new-courses",
          component: () => import("@/views/app/new"),
          meta: {
            middleware: [auth, newuser],
            showTopBar: false
          }
        },
        {
          path: "more",
          name: "more",
          component: () => import("@/views/app/more"),
          meta: {
            middleware: [auth, newuser]
          }
        },
        {
          path: "/topic",
          component: () => import("@/views/discuss"),
          children: [
            {
              path: "create",
              name: "create-topic",
              component: () => import("@/views/discuss/create"),
              meta: {
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "/groups",
          component: () => import("@/views/groups"),
          children: [
            {
              path: "",
              name: "groups-home",
              component: () => import("@/views/groups/home"),
              meta: {
                showTopBar: false
                // showMenu: false
              }
            },
            {
              path: "my-groups",
              name: "my-groups",
              component: () => import("@/views/groups/userGroups"),
              meta: {
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "/polls",
          component: () => import("@/views/polls"),
          children: [
            {
              path: "",
              name: "polls-home",
              component: () => import("@/views/polls/home"),
              meta: {
                showTopBar: false
                // showMenu: false
              }
            },
            {
              path: "single",
              name: "single",
              props: true,
              component: () => import("@/views/polls/single"),
              meta: {
                showTopBar: false,
                showMenu: false
              }
            },
            {
              path: "success",
              name: "poll",
              component: () => import("@/views/polls/success"),
              meta: {
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "course/:courseId",
          component: () => import("@/views/lesson/index"),
          children: [
            {
              path: "lessondetails",
              name: "lesson-details",
              component: () => import("@/views/lesson/details"),
              // children: [
              //   {
              //     // path: ""
              //   }
              // ],
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            },
            {
              path: "lesson/:lessonId",
              name: "lesson",
              component: () => import("@/views/lesson/lesson"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "/courses",
          component: () => import("@/views/courses/index"),
          children: [
            {
              path: "",
              name: "courses",
              component: () => import("@/views/courses/home"),
              meta: {
                middleware: [newuser, auth]
              }
            },
            {
              path: "details/:courseId",
              name: "courseDetail",
              component: () => import("@/views/courses/courseDetail"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            },
            {
              path: "enrolled",
              name: "enrolledCourseDetail",
              component: () => import("@/views/courses/enrolledCourseDetail"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "search",
          name: "search",
          component: () => import("@/views/app/search"),
          meta: {
            middleware: [newuser, auth],
            showNav: false
          }
        },
        {
          path: "surveys",
          component: () => import("@/views/surveys/index"),
          children: [
            {
              path: "",
              name: "all-survey",
              component: () => import("@/views/surveys/home"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            },
            {
              path: "details/:id",
              name: "survey-details",
              component: () => import("@/views/surveys/details"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            },
            {
              path: "complete",
              name: "survey-complete",
              component: () => import("@/views/surveys/complete"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "/profile",
          component: () => import("@/views/profile/index"),
          children: [
            {
              path: "",
              name: "profile",
              component: () => import("@/views/profile/home"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false
              }
            },
            // {
            //   path: "details",
            //   name: "profileDetails",
            //   component: () => import("@/views/profile/details"),
            //   meta: {
            //     middleware: [newuser, auth],
            //     showNav: false,
            //     showMenu: false
            //   }
            // },
            {
              path: "edit",
              name: "editProfile",
              component: () => import("@/views/profile/edit"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "notification",
          name: "notification",
          component: () => import("@/views/app/notification"),
          meta: {
            middleware: [newuser, auth]
          }
        },
        {
          path: "discussion",
          name: "discussion",
          component: () => import("@/views/app/discussion"),
          meta: {
            middleware: [newuser, auth],
            showNav: false,
            showMenu: false
          }
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("@/views/app/settings"),
          meta: {
            middleware: [newuser, auth],
            showTopBar: false,
            showMenu: false
          }
        },
        {
          path: "resources",
          name: "resources",
          component: () => import("@/views/app/resources"),
          meta: {
            middleware: [newuser, auth],
            showTopBar: false,
            showMenu: false
          }
        },
        {
          path: "/messages",
          component: () => import("@/views/messages/index"),
          children: [
            {
              path: "",
              name: "messages",
              component: () => import("@/views/messages/home"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            },
            {
              path: "chat/:id",
              name: "chat",
              component: () => import("@/views/messages/chat"),
              meta: {
                middleware: [newuser, auth],
                showTopBar: false,
                showMenu: false
              }
            }
          ]
        },
        {
          path: "leaderboard",
          name: "leader",
          component: () => import("@/views/app/leader")
        },
        {
          path: "/annoucement",
          component: () => import("@/views/annoucements/index"),
          children: [
            {
              path: "",
              name: "annoucement",
              component: () => import("@/views/annoucements/home"),
              meta: {
                middleware: [newuser, auth]
              }
            }
            // {
            //   path: "/:id",
            //   name: "annoucementdetails",
            //   component: () => import("@/views/courses/courseDetail"),
            //   meta: {
            //     middleware: [newuser, auth],
            //     showTopBar: false,
            //     showMenu: false
            //   }
            // },
          ]
        }
      ]
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

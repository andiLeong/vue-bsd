import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { useStore } from 'vuex';


import middlewarePipeline from '@/router/middlewarePipeline.js'
import auth from '@/middleware/auth.js'
import guest from '@/middleware/guest.js'

const store = useStore();

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    // meta: { redirectIfLogged: true },
    meta:{
      middleware: [guest]
    }
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta:{
      middleware: [guest]
    }
    // meta: { redirectIfLogged: true },
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    // meta: { auth: true },
    meta: { 
      middleware: [auth] 
    },
  },

  {
    path: '/tracking/create',
    name: 'tracking.create',
    component: () => import('@/views/tracking/create.vue'),
    // meta: { auth: true },
    meta: { 
      middleware: [auth] 
    },
  },

  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/Logout.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'border-b-sky-500 text-gray-900 border-b-2',
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

// router.beforeEach((to, from) => {
//   let user = localStorage.getItem('user');
//   let loggedIn = user;

//   if (to.meta.auth && !loggedIn) {
//     return { name: 'login' };
//   }

//   if (to.meta.redirectIfLogged && loggedIn) {
//     return { name: 'home' };
//   }
// });



router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    store,
    next
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})




export default router;

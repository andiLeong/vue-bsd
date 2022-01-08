import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import middlewarePipeline from '@/router/middlewarePipeline.js';
import auth from '@/middleware/auth.js';
import guest from '@/middleware/guest.js';
import store from '@/store';

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
    meta: {
      middleware: [guest],
    },
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: {
      middleware: [guest],
    },
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    meta: {
      middleware: [auth],
    },
  },

  {
    path: '/tracking/create',
    name: 'tracking.create',
    component: () => import('@/views/tracking/Create.vue'),
    meta: {
      middleware: [auth],
    },
  },

  {
    path: '/package',
    name: 'package.index',
    component: () => import('@/views/package/package.vue'),
    meta: {
      middleware: [auth],
    },
  },

  {
    path: '/slip/:id/create/',
    name: 'slip.create',
    component: () => import('@/views/Slip/Create.vue'),
    props: true,
    meta: {
      middleware: [auth],
    },
  },

  {
    path: '/package/:id/tracking',
    name: 'tracking',
    component: () => import('@/views/tracking/Tracking.vue'),
    props: true,
    meta: {
      middleware: [auth],
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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    store,
    next,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import { Home, Posts, Todos, OnlyCSS, UI, FunJS, Gallery } from '@/views'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos,
  },
  {
    path: '/onlycss',
    name: 'onlycss',
    component: OnlyCSS,
    children: [{
      path: 'bgs',
      name: 'onlycss-general',
      component: () => import('../views/onlycss/BGs.vue')
    }, {
      path: 'slider',
      name: 'onlycss-slider',
      component: () => import('../views/onlycss/Slider.vue')
    }, {
      path: 'scroll',
      name: 'onlycss-scroll',
      component: () => import('../views/onlycss/scroll.vue')
    }]
  },
  {
    path: '/ui',
    name: 'ui',
    component: UI,
    children: [{
      path: 'service',
      name: 'ui-service',
      component: () => import('../views/ui/UiService.vue')
    },
    {
      path: 'use',
      name: 'ui-use',
      component: () => import('../views/ui/UiUse.vue')
    }]
  },
  {
    path: '/funjs',
    name: 'funjs',
    component: FunJS,
    children: [{
      path: 'data-collection',
      name: 'funjs-data-collection',
      component: () => import('../views/funjs/FunJSDataCollection.vue')
    },
    {
      path: 'cookies',
      name: 'funjs-cookies',
      component: () => import('../views/funjs/FunJSCoockies.vue')
    }]
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/viewNotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

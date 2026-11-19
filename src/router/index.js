import { createRouter, createWebHistory } from 'vue-router'
import { Home, Posts, Todos, OnlyCSS, UI, FunJS, Gallery } from '@/views'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta: { title: 'Posts' },
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos,
    meta: { title: 'Todos' },
  },
  {
    path: '/onlycss',
    name: 'onlycss',
    component: OnlyCSS,
    // The redirect used to be a top-level router.push() inside the component.
    // Now it lives in the router config and also works on a direct visit.
    redirect: { name: 'onlycss-bgs' },
    meta: { title: 'Only CSS' },
    children: [
      {
        path: 'bgs',
        name: 'onlycss-bgs',
        component: () => import('../views/onlycss/BGs.vue'),
        meta: { title: 'CSS backgrounds' },
      },
      {
        path: 'slider',
        name: 'onlycss-slider',
        component: () => import('../views/onlycss/Slider.vue'),
        meta: { title: '3D carousel' },
      },
      {
        path: 'scroll',
        name: 'onlycss-scroll',
        component: () => import('../views/onlycss/scroll.vue'),
        meta: { title: 'Scroll animations' },
      },
    ],
  },
  {
    path: '/ui',
    name: 'ui',
    component: UI,
    meta: { title: 'UI Kit' },
    children: [
      {
        path: 'tooltip',
        name: 'ui-service',
        component: () => import('../views/ui/viewTooltip.vue'),
        meta: { title: 'Tooltip' },
      },
      {
        path: 'elements',
        name: 'elements',
        component: () => import('../views/ui/viewElements.vue'),
        meta: { title: 'Form Elements' },
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('../views/ui/viewCalendar.vue'),
        meta: { title: 'Calendar' },
      },
      {
        path: 'modal',
        name: 'modal',
        component: () => import('../views/ui/viewModal.vue'),
        meta: { title: 'Modal' },
      },
      {
        path: 'histogram',
        name: 'histogram',
        component: () => import('../views/ui/viewHistogram.vue'),
        meta: { title: 'Histogram' },
      },
      {
        path: 'avatar',
        name: 'avatar',
        component: () => import('../views/ui/viewAvatar.vue'),
        meta: { title: 'Avatar' },
      },
    ],
  },
  {
    path: '/funjs',
    name: 'funjs',
    component: FunJS,
    redirect: { name: 'funjs-data-collection' },
    meta: { title: 'Fun JS' },
    children: [
      {
        path: 'data-collection',
        name: 'funjs-data-collection',
        component: () => import('../views/funjs/FunJSDataCollection.vue'),
        meta: { title: 'Data Collection' },
      },
      {
        path: 'cookies',
        name: 'funjs-cookies',
        component: () => import('../views/funjs/FunJSCoockies.vue'),
        meta: { title: 'Cookies' },
      },
    ],
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: { title: 'Gallery' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/viewNotFound.vue'),
    meta: { title: 'Page not found' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (_to, _from, savedPosition) => savedPosition ?? { top: 0 },
})

const APP_TITLE = 'Vue for Fun — interactive playground'

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · Vue for Fun` : APP_TITLE
})

export default router

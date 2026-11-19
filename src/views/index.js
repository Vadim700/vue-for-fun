// Every section is loaded lazily: each route gets its own chunk.
const Home = () => import('./viewHome.vue')
const Posts = () => import('./viewPosts.vue')
const Todos = () => import('./viewTodos.vue')
const OnlyCSS = () => import('./viewOnlyCss.vue')
const UI = () => import('./viewUI.vue')
const FunJS = () => import('./viewFunJS.vue')
const Gallery = () => import('./viewGallery.vue')

export { Home, Posts, Todos, OnlyCSS, UI, FunJS, Gallery }

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'Movies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AllMovies.vue')
  },
  {
    path: '/tv-series',
    name: 'TvSeries',
    component: () => import(/* webpackChunkName: "about" */ '../views/TvSeries.vue')
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookMark.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

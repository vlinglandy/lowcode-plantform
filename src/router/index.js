import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/main.vue')
  },
  {
    path: '/release/:id',
    component: () => import('@/views/release/Release.vue')
  },
  {
    path: '/example/:num',
    component: () => import('@/views/release/SetExample.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

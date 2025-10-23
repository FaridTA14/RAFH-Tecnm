import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/dashboard-view.vue'),
    },
    {
      path: '/dashboard/:component',
      name: 'dashboard-component',
      component: () => import('../views/dashboard/dashboard-view.vue'),
      props: true,
    }
  ],
})

export default router

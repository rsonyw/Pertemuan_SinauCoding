import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogView from '../views/LogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chart',
      component: HomeView
    },
    {
      path: '/log',
      name: 'chart-log',
      component: LogView
    }
  ]
})

export default router

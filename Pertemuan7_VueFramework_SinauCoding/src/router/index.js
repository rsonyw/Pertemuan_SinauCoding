import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InputIngredient.vue'
import PrintTagihan from '../views/PrintTagihan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/print',
      name: 'cetakTagihan',
      component: PrintTagihan
    }
  ]
})

export default router

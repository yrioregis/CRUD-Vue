import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HomeComponent.vue')
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import('@/components/ProdutosComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

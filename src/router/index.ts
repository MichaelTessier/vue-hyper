import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact/Contact.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

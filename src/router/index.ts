import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
})

import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import { Locale } from 'vue-i18n'
import { i18n } from '@/i18n'
import { useContextStore } from '@/stores/context/context'

export const routes = [
  {
    path: '/',
    redirect: () => {
      const contextStore = useContextStore()
      return { name: 'locale', params: { locale: contextStore.locale } }
    },
  },
  {
    path: '/:locale',
    name: 'locale',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/pages/Contact/Contact.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const contextStore = useContextStore()
  if (
    !(i18n.global.availableLocales as Locale[]).includes(
      to.params.locale as Locale
    )
  ) {
    next(contextStore.locale)
    return
  }

  next()
})

export default router

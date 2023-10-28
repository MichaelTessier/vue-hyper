import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import { Locale } from 'vue-i18n'
import { i18n } from '@/i18n'

export const routes = [
  {
    path: '/',
    redirect: i18n.global.locale.value,
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
  if (
    !(i18n.global.availableLocales as Locale[]).includes(
      to.params.locale as Locale
    )
  ) {
    next(i18n.global.fallbackLocale.value as Locale)
    return
  }

  next()
})

export default router

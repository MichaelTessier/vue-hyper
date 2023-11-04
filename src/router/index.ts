import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import { Locale } from 'vue-i18n'
import { i18n } from '@/i18n'
import { useContextStore } from '@/stores/context/context'

export const ROUTES = {
  CONTACT: 'contact',
  HOME: 'home',
  LOCALE: 'locale',
  ROOT: 'root',
  SUPABASE_TEST: 'supabase-test',
}

export const routes = [
  {
    path: '/',
    name: ROUTES.ROOT,
    redirect: () => {
      const contextStore = useContextStore()
      return { name: 'home', params: { locale: contextStore.locale } }
    },
  },
  {
    path: '/:locale',
    name: ROUTES.LOCALE,
    component: RouterView,
    children: [
      {
        path: '',
        name: ROUTES.HOME,
        component: Home,
      },
      {
        path: 'contact',
        name: ROUTES.CONTACT,
        component: () => import('@/pages/Contact/Contact.vue'),
      },
      {
        path: 'supabase-test',
        name: ROUTES.SUPABASE_TEST,
        component: () => import('@/pages/SupabaseTest/SupabaseTest.vue'),
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

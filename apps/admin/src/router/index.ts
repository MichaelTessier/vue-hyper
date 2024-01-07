import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
// import type { Locale } from 'vue-i18n'

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

  if (!AVAILABLE_LOCALES.includes(to.params.locale as string)) {
    next(contextStore.locale)
    return
  }

  if (to.params.locale !== contextStore.locale) {
    contextStore.setLocale(to.params.locale as string)
    window.location.reload()
    return
  }

  next()
})

export default router

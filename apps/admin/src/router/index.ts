import { createRouter, createWebHistory } from 'vue-router'

export const ROUTES = {
  LOCALE: 'locale',
  ROOT: 'root',
}

export const routes = [
  {
    path: '/',
    name: ROUTES.ROOT,
    redirect: () => {
      const contextStore = useContextStore()
      return { name: 'admin', params: { locale: contextStore.locale } }
    },
  },
  {
    path: '/:locale',
    name: ROUTES.LOCALE,
    redirect: () => {
      const contextStore = useContextStore()
      return { name: 'admin', params: { locale: contextStore.locale } }
    },
    children: [adminRoutes, authRoutes],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _from, next) => {
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

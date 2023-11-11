import { i18n } from '@/i18n'

export const CONTEXT_LOCALE_STORAGE_KEY = 'context-locale'

const getLocale = () => {
  const locale = localStorage.getItem(CONTEXT_LOCALE_STORAGE_KEY)

  if (!locale) {
    localStorage.setItem(
      CONTEXT_LOCALE_STORAGE_KEY,
      i18n.global.fallbackLocale.value as string
    )

    return i18n.global.fallbackLocale.value
  }

  return locale
}

interface ContextState {
  locale: string
}

export const useContextStore = defineStore('context', {
  state: (): ContextState => ({
    locale: getLocale() as string,
  }),

  actions: {
    setLocale(locale: string) {
      this.locale = locale

      localStorage.setItem(CONTEXT_LOCALE_STORAGE_KEY, locale)
    },
  },
})

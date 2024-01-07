export const CONTEXT_LOCALE_STORAGE_KEY = 'context-locale'

const getLocale = () => {
  const locale = localStorage.getItem(CONTEXT_LOCALE_STORAGE_KEY)

  if (!locale) {
    localStorage.setItem(CONTEXT_LOCALE_STORAGE_KEY, DEFAULT_LOCALE)

    return DEFAULT_LOCALE
  }

  return locale
}

export interface ContextState {
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

import { createI18n } from 'vue-i18n'

export const DEFAULT_LOCALE = 'fr'

const messages = {
  en: {
    home: {
      title: 'hello world',
    },
  },
  fr: {
    home: {
      title: 'Bienvenue',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})

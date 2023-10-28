import { createI18n } from 'vue-i18n'

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
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
})

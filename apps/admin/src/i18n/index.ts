import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import type { ContextState } from '@/stores/context/context'

import en from './locales/en.json'
import fr from './locales/fr.json'

import adminMessagesEn from '@/domains/admin/i18n/messages/en.json'
import adminMessagesFr from '@/domains/admin/i18n/messages/fr.json'

export const DEFAULT_LOCALE = 'fr'
export const AVAILABLE_LOCALES = [DEFAULT_LOCALE, 'en']

export const i18n = (context: ContextState) => {
  const options: I18nOptions = {
    legacy: false,
    locale: context?.locale ?? DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      en: {
        ...en,
        ...adminMessagesEn,
      },
      fr: {
        ...fr,
        ...adminMessagesFr,
      },
    },
  }

  return createI18n(options)
}

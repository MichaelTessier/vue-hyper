import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import type { ContextState } from '@/stores/context/context'

import adminMessagesEn from '@/domains/admin/i18n/messages/en.json'
import adminMessagesFr from '@/domains/admin/i18n/messages/fr.json'

import authMessagesEn from '@/domains/auth/i18n/messages/en.json'
import authMessagesFr from '@/domains/auth/i18n/messages/fr.json'

export const DEFAULT_LOCALE = 'fr'
export const AVAILABLE_LOCALES = [DEFAULT_LOCALE, 'en']

export const i18n = (context: ContextState) => {
  const options: I18nOptions = {
    legacy: false,
    locale: context?.locale ?? DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      en: {
        ...adminMessagesEn,
        ...authMessagesEn,
      },
      fr: {
        ...adminMessagesFr,
        ...authMessagesFr,
      },
    },
  }

  return createI18n(options)
}

import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import type { ContextState } from '@/stores/context/context'

import adminEn from '@/domains/admin/i18n/en.json'
import adminFr from '@/domains/admin/i18n/fr.json'

import authEn from '@/domains/auth/i18n/en.json'
import authFr from '@/domains/auth/i18n/fr.json'

import profileEn from '@/domains/profile/i18n/en.json'
import profileFr from '@/domains/profile/i18n/fr.json'

export const DEFAULT_LOCALE = 'fr'
export const AVAILABLE_LOCALES = [DEFAULT_LOCALE, 'en']

export const i18n = (context: ContextState) => {
  const options: I18nOptions = {
    legacy: false,
    locale: context?.locale ?? DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      en: {
        ...adminEn,
        ...authEn,
        ...profileEn,
      },
      fr: {
        ...adminFr,
        ...authFr,
        ...profileFr,
      },
    },
  }

  return createI18n(options)
}

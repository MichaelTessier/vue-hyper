import { config } from '@vue/test-utils'
import { i18n } from './src/i18n'
import { beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

config.global.plugins = [i18n]

beforeEach(async () => {
  setActivePinia(createPinia())
})

import { config } from '@vue/test-utils'
import { i18n } from './src/i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from './src/router'
import { afterEach, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useContextStore } from './src/stores/context/context'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

setActivePinia(createPinia())
const context = useContextStore()

config.global.plugins = [i18n(context), router]

config.global.mocks = {
  $t: (key: string) => key,
  $tc: (key: string) => key,
  $te: (key: string) => key,
  $n: (key: string) => key,
  $d: (key: string) => key,
}

beforeEach(async () => {
  setActivePinia(createPinia())

  router.push('/')
  await router.isReady()
})

afterEach(() => {
  vi.resetAllMocks()
})

import { defineSetupVue3 } from '@histoire/plugin-vue'
import { useTheme } from './src/lib/composables/useTheme/useTheme'
import '@unocss/reset/tailwind.css'
import './src/assets/css/main.css'
import 'uno.css'

export const setupVue3 = defineSetupVue3(() => {
  const theme = useTheme()
  theme.init()
})

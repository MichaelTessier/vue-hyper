import '@unocss/reset/tailwind.css'
import './assets/css/main.css'
import 'uno.css'

// Plugins
export { HyperResolver } from './plugins/auto-import'

// Unocss
export { theme } from './config/unocss/theme'

// Composables
export { useTheme } from './lib/composables/useTheme/useTheme'

// Components Base
export { default as HypButton } from './lib/components/base/HypButton/HypButton.vue'
export { default as HypIcon } from './lib/components/base/HypIcon/HypIcon.vue'
export { default as HypLink } from './lib/components/base/HypLink/HypLink.vue'
export { default as HypTypo } from './lib/components/base/HypTypo/HypTypo.vue'

// Components Form
export { default as HypInput } from './lib/components/form/HypInput/HypInput.vue'

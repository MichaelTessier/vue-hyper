import '@unocss/reset/tailwind.css'
import './assets/css/main.css'
import 'uno.css'

// Plugins
export { HyperResolver } from './plugins/auto-import'

// Unocss
export { theme } from './config/unocss/theme'

// Components

// Base
export { default as HypButton } from './lib/base/HypButton/HypButton.vue'
export { default as HypIcon } from './lib/base/HypIcon/HypIcon.vue'
export { default as HypLink } from './lib/base/HypLink/HypLink.vue'
export { default as HypTypo } from './lib/base/HypTypo/HypTypo.vue'

// Form
export { default as HypInput } from './lib/form/HypInput/HypInput.vue'

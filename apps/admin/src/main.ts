import { createApp } from 'vue'
import './assets/css/main.css'
import 'virtual:uno.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { i18n } from '@/i18n'
import urql from '@urql/vue'
import { urqlClient } from './graphql/urqlClient'
// import components from 'vue-hyper-components'

const app = createApp(App)
const pinia = createPinia()
// components.log()
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(urql, urqlClient)

const theme = useTheme()
theme.init()

router.isReady().then(() => {
  app.mount('#app')
})

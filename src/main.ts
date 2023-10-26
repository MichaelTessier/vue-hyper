import { createApp } from 'vue'
import './assets/css/main.css'
import 'virtual:uno.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import * as dotenv from 'dotenv'
dotenv.config()

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
  clientId: process.env.GOOGLE_CLIENT
})
app.use(pinia)
app.use(router)

app.mount('#app')

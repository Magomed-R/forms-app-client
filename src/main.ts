import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import { env } from '../env'

import '@/assets/main.scss'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.baseURL = env.BASE_URL
axios.defaults.headers['Authorization'] = localStorage.JWTToken
axios.defaults.headers['Accept'] = "*"

app.mount('#app')

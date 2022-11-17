import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import BaseCard from './components/ui/BaseCard.vue'
import pinia from './store'

const app = createApp(App)

app.component('base-card', BaseCard)

app.use(router)
app.use(pinia)

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import BaseCard from './components/ui/BaseCard.vue'
import pinia from './store'
import axios from 'axios'
import VueAnalytics from 'vue-analytics'
const app = createApp(App)

app.component('base-card', BaseCard)
axios.defaults.baseURL = 'http://localhost:8000/'
app.use(router)
app.use(pinia)
app.use(VueAnalytics, {
	id: 'G-YEJ6WYZZ47',
	router,
})

app.mount('#app')

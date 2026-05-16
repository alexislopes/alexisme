import { createApp } from 'vue'
import './assets/brand-tailwind.css'
import App from './App.vue'
import { i18n } from './i18n'

createApp(App).use(i18n).mount('#app')

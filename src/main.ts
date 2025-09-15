import './assets/base.scss'
import Vue3Marquee from 'vue3-marquee'
import { createApp } from 'vue'
import { i18n } from './plugins/i18n'
import App from './App.vue'
const app = createApp(App)
app.use(Vue3Marquee)
app.use(i18n)
app.mount('#app')

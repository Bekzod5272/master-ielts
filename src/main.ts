import './assets/base.scss'
import Vue3Marquee from 'vue3-marquee'
import {createApp} from 'vue'
import App from './App.vue'
import "vue-fast-marquee/style.css"
const app = createApp(App);
app.use(Vue3Marquee)
app.mount('#app')

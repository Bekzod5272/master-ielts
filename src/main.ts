import './assets/base.scss'

import {createApp} from 'vue'
import App from './App.vue'

import Vue3Toasity, {type ToastContainerOptions} from 'vue3-toastify';

const app = createApp(App);

app.use(Vue3Toasity)
app.mount('#app')

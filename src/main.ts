import './assets/base.scss'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import Vue3Toasity, {type ToastContainerOptions} from 'vue3-toastify';
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App);

app.use(router)
app.use(createYmaps({apikey:'cd38a715-a2ba-4c42-9103-83b76b5dc0b0'}));
app.use(Vue3Toasity)
app.mount('#app')

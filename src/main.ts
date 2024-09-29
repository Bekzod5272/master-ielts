import './assets/base.scss'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import Vue3Toasity, {type ToastContainerOptions} from 'vue3-toastify';
import { createYmaps } from 'vue-yandex-maps';

app.use(router,createYmaps({apikey:''}), Vue3Toasity, {
    autoClose: 3000,
    position: "bottom-right",
} as ToastContainerOptions);

app.mount('#app')

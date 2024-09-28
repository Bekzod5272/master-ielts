import './assets/base.scss'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import Vue3Toasity, {type ToastContainerOptions} from 'vue3-toastify';

app.use(router, Vue3Toasity, {
    // autoClose: 3000,
    // position: "bottom-right",
} as ToastContainerOptions);

app.mount('#app')

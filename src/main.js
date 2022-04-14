import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import store from './store';
import router from './router';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';




createApp(App)
    .use(router)
    .use(store)
    .use(Datepicker)
    .mount('#app')
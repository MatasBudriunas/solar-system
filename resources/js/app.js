import { createApp } from 'vue';
import router from '../js/router/router.js';
import App from "../components/App.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).mount('#app');

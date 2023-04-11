import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './routes';

import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');

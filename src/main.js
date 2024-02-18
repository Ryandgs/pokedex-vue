import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './index.css'

import AppButton from './components/AppButton/AppButton.vue';

import router from './routes';

import App from './App.vue';

const pinia = createPinia();
// Better & fast for local use/tests
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);

app.component('AppButton', AppButton)

app.use(router);
app.use(pinia);

app.mount('#app');

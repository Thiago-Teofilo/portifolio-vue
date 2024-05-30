import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/global.postcss';
import '@/styles/reset.postcss';
import '@/styles/fonts.postcss';

createApp(App).use(store).use(router).mount('#app');

import './assets/main.scss';

import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

import App from './App.vue';
import 'animate.css';
import EN from './assets/locale/en.json';
import ES from './assets/locale/es.json';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
import store from '@/stores/store';

const i18n = createI18n({
  locale: store().locale,
  messages: {
    EN: EN,
    ES: ES
  }
});

app.use(i18n);
app.use(MotionPlugin);

app.mount('#app');

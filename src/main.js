import './assets/main.scss';

import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';

import App from './App.vue';
import 'animate.css';

const app = createApp(App);

app.use(MotionPlugin);

app.mount('#app');

/* eslint-disable no-unused-vars */
// @ts-ignore
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/animations.css';
import axios from 'axios'; // Importa Axios

const app = createApp(App);

// Configura Axios (opcional)
axios.defaults.baseURL = 'http://localhost:3000'; // Configura la URL base de tu API

app.config.globalProperties.$axios = axios; // Agrega Axios a las propiedades globales de tu aplicación

app.mount('#app');

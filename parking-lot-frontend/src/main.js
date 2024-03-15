window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import { createApp, ref } from 'vue';
import App from './App.vue';
import axios from 'axios';
import config from '../config';

const app = createApp(App);

axios.defaults.baseURL = config.baseURL; 
console.log('Balanceador ', axios.defaults.baseURL);

app.config.globalProperties.$axios = axios;

app.mixin({
  data() {
    return {
      vehicleslist: ref([]) 
    };
  },
  methods: {
  }
});

app.mount('#app');

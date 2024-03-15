
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import axios from 'axios';
import { createApp, ref } from 'vue';
import App from './App.vue';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:3000';
console.log('Balanceador ',axios.defaults.baseURL)

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


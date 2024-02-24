/* eslint-disable no-unused-vars */
// @ts-ignore
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import axios from 'axios';
import { createApp, ref } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Configura Axios (opcional)
axios.defaults.baseURL = 'http://localhost:3000'; // Ajusta la URL base según la configuración de tu servidor

app.config.globalProperties.$axios = axios; // Agrega Axios a las propiedades globales de tu aplicación

app.mixin({
  data() {
    return {
      vehicles: ref([]) // Utiliza un ref para almacenar la lista de vehículos
    };
  },
  methods: {
    async getVehicles() {
      try {
        const response = await this.$axios.get('/cars');
        this.vehicles = response.data; // Asigna la respuesta del servidor a la variable vehicles
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        // Maneja el error de alguna manera, por ejemplo, mostrando un mensaje al usuario
      }
    }
  }
});

app.mount('#app');


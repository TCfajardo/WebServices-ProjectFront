<template>
  <div id="app">
    <h1>Parqueadero NN</h1>
    <button @click="showRegistrationForm = true">Registrar vehículo</button>
    <button @click="showRetrievalForm = true">Retirar vehículo</button>
    <button @click="getVehicles">Obtener vehículos</button>

    <transition name="slide-down">
      <div class="form-container" v-if="showRegistrationForm || showRetrievalForm">
        <vehicle-registration-form v-if="showRegistrationForm" @close="showRegistrationForm = false"></vehicle-registration-form>
        <vehicle-retrieval-form v-if="showRetrievalForm" @close="showRetrievalForm = false"></vehicle-retrieval-form>
      </div>
    </transition>

    <pre v-if="vehicles.length > 0">{{ vehicles }}</pre>
  </div>
</template>

<script>
import VehicleRegistrationForm from './components/VehicleRegistrationForm.vue';
import VehicleRetrievalForm from './components/VehicleRetrievalForm.vue';

export default {
  name: 'App',
  components: {
    VehicleRegistrationForm,
    VehicleRetrievalForm
  },
  data() {
    return {
      showRegistrationForm: false,
      showRetrievalForm: false,
      vehicles: []
    }
  },
  methods: {
    getVehicles() {
      // Lógica para obtener los vehículos desde una API o base de datos
      this.vehicles = [
        {
          licensePlate: 'ABC123',
          color: 'Rojo',
          systemTime: '2023-03-14T10:30:00',
          carPhoto: '/path/to/car-photo.jpg',
          status: true
        },
        {
          licensePlate: 'DEF456',
          color: 'Azul',
          systemTime: '2023-03-14T09:45:00',
          carPhoto: '/path/to/car-photo.jpg',
          status: false
        }
      ];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #1c0043;
}

pre {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  white-space: pre-wrap;
}
</style>
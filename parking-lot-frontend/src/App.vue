<template>
  <div id="app">
    <h1>Parqueadero NN</h1>
    <img src="https://img.freepik.com/vector-premium/diseno-plantilla-logotipo-coche-estacionamiento_20029-1033.jpg" alt="Carro" class="car-image">
    <nav>
      <button @click="showRegistrationForm = true; showRetrievalForm = false">Registrar vehículo</button>
      <button @click="showRetrievalForm = true; showRegistrationForm = false">Retirar vehículo</button>
      <button @click="getVehicles">Obtener vehículos</button>
    </nav>

    <div class="form-container" v-if="showRegistrationForm || showRetrievalForm">
      <vehicle-registration-form v-if="showRegistrationForm" @close="showRegistrationForm = false"></vehicle-registration-form>
      <vehicle-retrieval-form v-if="showRetrievalForm" @close="showRetrievalForm = false"></vehicle-retrieval-form>
    </div>

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
  color: #00152a;
  margin-top: 60px;
  background-color: #ffffff;
}

button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1c0043;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover { 
  background-color: rgb(80, 95, 193); } 

pre { margin: 20px 0; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  background-color: #f5f5f5; 
  white-space: pre-wrap; } 

nav{
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  margin-top: -10px;
}

.car-image { 
  width: 120px; 
  height: auto; 
  margin-top: -15px;
} 

</style>
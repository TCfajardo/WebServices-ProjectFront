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

    <table v-if="vehicles.length > 0">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Color</th>
          <th>Hora de entrada</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vehicle, index) in vehicles" :key="index">
          <td>{{ vehicle.license_plate }}</td>
          <td>{{ vehicle.color }}</td>
          <td>{{ vehicle.entryTime }}</td>
          <td>{{ vehicle.state ? 'Activo' : 'Retirado' }}</td>
        </tr>
      </tbody>
    </table>
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
    async getVehicles() {
      try {
        const response = await this.$axios.get('/cars');
        this.vehicles = response.data;
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
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
  background-color: rgb(80, 95, 193); 
} 

.car-image { 
  width: 120px; 
  height: auto; 
  margin-top: -15px;
} 

table {
  width: 70%;
  margin: auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>

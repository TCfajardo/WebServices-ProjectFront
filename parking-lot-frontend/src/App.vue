<template>
  <div id="app">
    <h1>Parqueadero NN</h1>
    <img src="https://img.freepik.com/vector-premium/diseno-plantilla-logotipo-coche-estacionamiento_20029-1033.jpg" alt="Carro" class="car-image">
    <nav>
      <button @click="showRegistrationForm = true; showRetrievalForm = false; showTableForm = false">Registrar vehículo</button>
      <button @click="showRetrievalForm = true; showRegistrationForm = false; showTableForm = false">Retirar vehículo</button>
      <button @click="showTableForm = true; showRegistrationForm = false; showRetrievalForm = false">Obtener vehículos</button>
    </nav>

    <div class="form-container">
      <vehicle-registration-form v-if="showRegistrationForm" @close="showRegistrationForm = false"></vehicle-registration-form>
      <vehicle-retrieval-form v-if="showRetrievalForm" @close="showRetrievalForm = false"></vehicle-retrieval-form>
      <vehicle-table v-if="showTableForm"></vehicle-table>
    </div>
  </div>
</template>

<script>

import VehicleRegistrationForm from './components/VehicleRegistrationForm.vue';
import VehicleRetrievalForm from './components/VehicleRetrievalForm.vue';
import VehicleTable from './components/VehicleTable.vue';

export default {
  name: 'App',
  components: {
    VehicleRegistrationForm,
    VehicleRetrievalForm,
    VehicleTable
  },
  data() {
    return {
      showRegistrationForm: false,
      showRetrievalForm: false,
      showTableForm: false
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
  margin-top: 30px;
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

.form-container {
  margin-top: 20px;
}
</style>

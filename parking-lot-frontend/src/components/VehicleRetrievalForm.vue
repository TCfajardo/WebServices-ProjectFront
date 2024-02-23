<template>
    <div>
      <h2>Retirar Vehículo</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="licensePlate">Número de placa:</label>
          <input type="text" id="licensePlate" v-model="vehicle.licensePlate" required>
        </div>
        <div>
          <button type="submit">Retirar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vehicle: {
          licensePlate: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Lógica para retirar el vehículo
        console.log(this.vehicle);
      }
    }
  }
  </script>
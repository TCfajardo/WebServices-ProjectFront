<template>
    <div class="form-container slide-down">
      <h2>Registrar Vehículo</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="licensePlate">Número de placa:</label>
          <input type="text" id="licensePlate" v-model="vehicle.licensePlate" required>
        </div>
        <div>
          <label for="color">Color:</label>
          <input type="text" id="color" v-model="vehicle.color" required>
        </div>
        <div>
          <label for="systemTime">Hora de entrada:</label>
          <input type="datetime-local" id="systemTime" v-model="vehicle.systemTime" required>
        </div>
        <div>
          <label for="carPhoto">Foto del vehículo:</label>
          <input type="file" id="carPhoto" @change="handleFileChange" required>
        </div>
        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vehicle: {
          licensePlate: '',
          color: '',
          systemTime: '',
          carPhoto: null
        }
      }
    },
    methods: {
      handleFileChange(event) {
        this.vehicle.carPhoto = event.target.files[0];
      },
      submitForm() {
        // Lógica para registrar el vehículo
        console.log(this.vehicle);
      }
    }
  }
  </script>
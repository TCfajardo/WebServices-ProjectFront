<template>
    <div class="form-container slide-down" style="border: 2px solid rgb(0, 0, 64); padding: 20px;">
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
<style>

.form-container {
  margin-top: 30px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2%;
}

.label {
  display: inline-block;
  width: 100px;
  text-align: left;
}

.input {
  width: calc(100% - 290px);
  margin-left: 10px;
}

</style>
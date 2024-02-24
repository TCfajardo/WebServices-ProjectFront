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
      <div v-if="message">{{ message }}</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vehicle: {
        licensePlate: ''
      },
      message: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.patch('http://localhost:3000/cars', { license_plate: this.vehicle.licensePlate });
        console.log('Respuesta del servidor:', response.data);
        // Actualizar el mensaje para mostrar al usuario
        this.message = `El carro de placa ${this.vehicle.licensePlate} ha salido del parqueadero`;
      } catch (error) {
        console.error('Error al retirar el vehículo:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje de error al usuario
        this.message = 'Hubo un error al retirar el vehículo. Por favor, inténtalo de nuevo.';
      }
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

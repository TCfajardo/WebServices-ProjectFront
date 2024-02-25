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

      <div v-if="licensePlates.length">
        <h3><br>Placas de vehiculos activos:</h3>
        <ul>
          <li v-for="plate in licensePlates" :key="plate">{{ plate }}</li>
        </ul>
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
      },
      message: '',
      licensePlates: []
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.patch('/cars', { license_plate: this.vehicle.licensePlate });
        console.log('Respuesta del servidor:', response.data);
        // Actualizar el mensaje para mostrar al usuario
        this.message = `El carro de placa ${this.vehicle.licensePlate} ha salido del parqueadero`;
        // Llamar al método para obtener las placas después de retirar un carro
        this.fetchLicensePlates();
      } catch (error) {
        console.error('Error al retirar el vehículo:', error);
        this.message = 'Hubo un error al retirar el vehículo. Por favor, inténtalo de nuevo.';
      }
    },
    async fetchLicensePlates() {
      try {
        const response = await this.$axios.get('/cars/license-plates');
        this.licensePlates = response.data; // Actualizar la lista de placas
      } catch (error) {
        console.error('Error al obtener las placas:', error);
      }
    }
  },
  mounted() {
    // Llamar al método para obtener las placas cuando el componente se monte
    this.fetchLicensePlates();
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

label {
  display: inline-block;
  width: 170px;
  text-align: left;
}

input {
  width: calc(100% - 370px);
  margin-left: 10px;
}
</style>

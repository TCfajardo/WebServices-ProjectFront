<template>
  <div class="form-container slide-down" style="padding: 20px;">
    <h2>Retirar Vehículo</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="licensePlate">Placa:</label>
        <input type="text" id="licensePlate" v-model="vehicle.licensePlate" required>
      </div>
      <div class="classButton">
        <button type="submit">Retirar</button>
      </div>
      <div v-if="message">{{ message }}</div>

      <div v-if="licensePlates.length" class="license-plates-container">
        <h3>Placas de vehículos activos:</h3>
        <ul class="license-plates-list">
          <li v-for="plate in licensePlates" :key="plate" class="license-plate-item">{{ plate }}</li>
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
        licensePlate: '',
        error: null
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
    this.fetchLicensePlates(); // <-- Actualizar la lista de placas después de retirar un carro
  } catch (error) {
    console.error('Error al retirar el vehículo:', error);
    this.message = 'Hubo un error al retirar el vehículo. Por favor, inténtalo de nuevo.';
  }
},
    async fetchLicensePlates() {
  try {
    const response = await this.$axios.get('/cars/license-plates');
    this.licensePlates = response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error('No hay vehículos activos disponibles en este momento.');
      this.message = 'No hay vehículos activos disponibles en este momento.';
    } else {
      console.error('Ocurrió un error al cargar las placas de los vehículos activos:', error);
      this.message = 'Ocurrió un error al cargar las placas de los vehículos activos, intenta más tarde.';
    }
  }
}

  },
  mounted() {
    this.fetchLicensePlates();
  }
}
</script>

<style>
.form-container {
  margin-top: 25px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10%;
}

.label {
  display: inline-block;
  width: 20%;
  text-align: left;
}

.input {
  width: calc(100% - 70%);
  margin-left: 10px;
}

.classButton {
  margin: 20px;
}

.license-plates-container {
    text-align: center;
    margin-top: 20px;
}

.license-plates-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column; /* Organiza los elementos verticalmente */
    align-items: center; /* Centra los elementos horizontalmente */
}

.license-plate-item {
    margin-bottom: 10px;
    background-color: #f2f2f2;
    padding: 8px;
    border-radius: 5px;
    font-size: 16px;
    width: 200px; /* Ancho máximo de los elementos */
    text-align: center; /* Centra el texto horizontalmente */
}

.message {
  font-size: 14px; 
  margin-top: 10px;
  color: rgb(187, 210, 131); 
}


</style>

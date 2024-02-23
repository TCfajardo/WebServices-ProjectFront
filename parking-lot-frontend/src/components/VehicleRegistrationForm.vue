<template>
  <div class="form-container slide-down" style="border: 2px solid rgb(0, 0, 64); padding: 20px;">
    <h2>Registrar Vehículo</h2>
    <form @submit.prevent="submitForm" style="margin: 0px;">
      <div class="form-group">
        <label for="licensePlate" class="label">Placa:</label>
        <input type="text" id="licensePlate" v-model="vehicle.licensePlate" required @input="validateLicensePlate" class="input" maxlength="6">
        <p v-if="licensePlateError" class="error">La placa debe tener el formato XXXNNN<br> X es un caracter alfabético y N es un número.</p>
      </div>
      <div class="form-group">
        <label for="color" class="label">Color:</label>
        <select id="color" v-model="vehicle.color" required class="input">
          <option v-for="color in colors" :key="color.id" :value="color.name">{{ color.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="carPhoto" class="label">Foto del vehículo:</label>
        <input type="file" id="carPhoto" @change="handleFileChange" required class="input">
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <button type="submit" class="button">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vehicle: {
        licensePlate: '',
        color: '',
        state: 'ACTIVO',
        carPhoto: null
      },
      licensePlateError: false,
      colors: [
        { id: 1, name: 'Rojo' },
        { id: 2, name: 'Azul' },
        { id: 3, name: 'Verde' },
        { id: 4, name: 'Amarillo' },
        { id: 5, name: 'Negro' },
        { id: 6, name: 'Blanco' },
        { id: 7, name: 'Gris' },
        { id: 8, name: 'Plateado' },
        { id: 9, name: 'Dorado' },
        { id: 10, name: 'Plateado' },
        { id: 11, name: 'Café' },
        { id: 12, name: 'Naranja' },
        { id: 13, name: 'Morado' },
        { id: 14, name: 'Rosa' },
        { id: 15, name: 'Turquesa' },
        { id: 16, name: 'Beige' },
        { id: 17, name: 'Celeste' },
        { id: 18, name: 'Marrón' },
        { id: 19, name: 'Violeta' },

      ]
    };
  },
  methods: {
    handleFileChange(event) {
      this.vehicle.carPhoto = event.target.files[0];
    },
    validateLicensePlate() {
      const regex = /^[A-Z]{3}-[0-9]{3}$/;
      this.licensePlateError = !regex.test(this.vehicle.licensePlate);
    },
    async submitForm() {
      if (
        !this.vehicle.licensePlate ||
        !this.vehicle.color ||

        !this.vehicle.carPhoto
      ) {
        this.errorMessage = 'Todos los datos del vehículo son obligatorios';
        return; 
      }
      try {
        const response = await axios.post('http://localhost:3000/cars', this.vehicle);
        console.log('Respuesta del servidor:', response.data);
      } catch (error) {
        console.error('Error al enviar los datos del vehículo:', error);
      }
    },
  }
}
</script>

<style scoped>
.label {
  display: inline-block;
  width: 100px;
  text-align: left;
  
}

.input {
  width: calc(100% - 290px);
  margin-left: 10px;
}

.error {
  color: rgb(255, 127, 127);
  margin-top: 5px;
  font-size: 11px;
}

.form-container {
  margin-top: 30px;
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2%;
}

.form-group {
  margin: 0;
  margin-bottom: 10px;
}
</style>

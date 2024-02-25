<template>
  <div class="form-container slide-down" style=" padding: 20px;">
    <h2>Registrar Vehículo</h2>
    <form @submit.prevent="submitForm" style="margin: 0px;">
      <div class="form-group">
        <label for="license_plate" class="label">Placa:</label>
        <input type="text" id="license_plate" v-model="vehicle.license_plate" required @input="validateLicensePlate"
          class="input" maxlength="7">
      </div>
      <div class="form-group">
        <label for="color" class="label">Color:</label>
        <select id="color" v-model="vehicle.color" required class="input">
          <option v-for="color in colors" :key="color.id" :value="color.name">{{ color.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="carPhoto" class="label">Foto del vehículo:</label>
        <input type="file" id="carPhoto" @change="validateCarPhoto" ref="carPhoto" name="image_path" required class="input">

      </div>
      <div style="text-align: center; margin-top: 20px;">
        <button type="submit" class="button">Registrar</button>
      </div>
      <label v-if="errorMessage" class="error">{{ errorMessage }}</label>
      <label v-if="successMessage" class="success">{{ successMessage }}</label>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicle: {
        license_plate: '',
        color: '',
        state: 'ACTIVO'
      },
      errorMessage: '',
      successMessage: '',
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
    validateLicensePlate() {
      this.vehicle.license_plate = this.vehicle.license_plate.slice(0, 3).toUpperCase() + this.vehicle.license_plate.slice(3);
      const regex = /^[A-Z]{3}-[0-9]{3}$/;
      this.licensePlateError = !regex.test(this.vehicle.license_plate);
    },
    validateCarPhoto(event) {
      const file = event.target.files[0];
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(file.name)) {
        this.errorMessage = 'El archivo seleccionado no es una imagen válida. Por favor, selecciona un archivo de imagen.';
        this.successMessage = '';
        event.target.value = '';
      } else {
        this.errorMessage = '';
        this.vehicle.image_path = file;
      }
    },
    async submitForm() {
  if (!this.vehicle.license_plate || !this.vehicle.color || !this.$refs.carPhoto.files[0]) {
    this.errorMessage = 'Todos los datos del vehículo son obligatorios';
    this.successMessage = '';
    return;
  }

  const formData = new FormData();
  formData.append('license_plate', this.vehicle.license_plate); 
  formData.append('color', this.vehicle.color)
  formData.append('image_path', this.$refs.carPhoto.files[0]); 
  

   try {
    const response = await this.$axios.post('/cars', formData);
    console.log('Respuesta del servidor:', response.data);
    this.successMessage = 'El vehículo se registró correctamente';
    this.errorMessage = '';
  } catch (error) {
    console.error('Error al enviar los datos del vehículo:', error);
    this.errorMessage = 'Hubo un error al registrar el vehículo';
    this.successMessage = '';
  }
},
}
}

</script>

<style scoped>
.label {
  display: inline-block;
  width: 160px;
  text-align: left;
}

.input {
  width: calc(100% - 700px);
  margin-left: 10px;
}

.error {
  color: rgb(255, 127, 127);
  margin-top: 5px;
  font-size: 11px;
}

.form-container {
  margin-top: 25px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10%;
}

.form-group {
  margin: 0;
  margin-bottom: 10px;
}
</style>

<template>
  <div id="app">
    <h1>Parqueadero NN</h1>
    <img src="https://img.freepik.com/vector-premium/diseno-plantilla-logotipo-coche-estacionamiento_20029-1033.jpg" alt="Carro" class="car-image">
    <nav>
      <button @click="showRegistrationForm = true; showRetrievalForm = false; showTableForm = false">Registrar vehículo</button>
      <button @click="showRetrievalForm = true; showRegistrationForm = false; showTableForm = false">Retirar vehículo</button>
      <button @click="showTableForm = true; showRegistrationForm = false; showRetrievalForm = false">Obtener vehículos</button>
    </nav>

    <div class="main-content">
      <div class="form-container" v-if="showRegistrationForm || showRetrievalForm || showTableForm">
        <vehicle-registration-form v-if="showRegistrationForm" @close="showRegistrationForm = false"></vehicle-registration-form>
        <vehicle-retrieval-form v-if="showRetrievalForm" @close="showRetrievalForm = false"></vehicle-retrieval-form>
        <vehicle-table v-if="showTableForm"></vehicle-table>
      </div>
    </div>

    <footer class="footer" :style="{ marginTop: showFooterMargin ? '8px' : '0' }">
      <div class="footer-content">
        <h3>Contacto</h3>
        <p>Dirección: Av. Principal #123, Ciudad, País</p>
        <p>Teléfono: +123 456 789</p>
        <p>Correo electrónico: info@parqueadero.com</p>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <p>&copy; 2024 Parqueadero NN. Todos los derechos reservados.</p>
      </div>
    </footer>
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
  },
  computed: {
    showFooterMargin() {
      return !(this.showRegistrationForm || this.showRetrievalForm || this.showTableForm);
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
  background-color: #f7f8fc;
  width: 60%;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2%;
  margin-bottom: 45px;
}

.main-content {
  min-height: calc(100vh - 420px); 
}

.footer {
  background-color: #1c0043;
  color: white;
  padding: 30px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.footer-content h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.footer-content p {
  font-size: 12px;
  margin-bottom: 10px;
}

.social-links a {
  color: white;
  text-decoration: none;
  margin: 0 5px;
}

.social-links a:hover {
  text-decoration: underline;
}

</style>

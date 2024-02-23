<template>
    <div v-if="showConfirmation" class="confirmation-modal">
        <div class="confirmation-box">
            <p>¿Está seguro de registrar el vehículo con la siguiente información?</p>
            <p>Placa: {{ vehicle.licensePlate }}</p>
            <p>Color: {{ vehicle.color }}</p>
            <p>Hora de entrada: {{ vehicle.systemTime }}</p>
            <p>Foto del vehículo: {{ vehicle.carPhoto ? vehicle.carPhoto.name : 'Ninguna' }}</p>
            <div class="button-container">
                <button @click="confirmRegistration">Sí</button>
                <button @click="cancelRegistration">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vehicle: Object,
        showConfirmation: Boolean
    },
    methods: {
        confirmRegistration() {
            // Aquí podrías enviar los datos a tu proyecto en Next.js
            // Por ahora, solo vamos a imprimir los datos
            console.log('Registrando vehículo:', this.vehicle);
            // Luego, puedes reiniciar el formulario o hacer otras acciones necesarias
            this.$emit('confirmed');
        },
        cancelRegistration() {
            // En caso de cancelación, puedes realizar acciones necesarias
            this.$emit('cancelled');
        }
    }
}
</script>

<style scoped>
.confirmation-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirmation-box {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.button-container {
    margin-top: 20px;
}

.button-container button {
    margin-right: 10px;
}
</style>

<template>
    <div class="table-container">
        <table v-if="vehiclesLocal.length > 0">
            <thead>
                <tr>
                    <th>Placa</th>
                    <th>Color</th>
                    <th>Hora de entrada</th>
                    
                    <th>Estado</th>
                    <th>Imagen</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vehicle, index) in vehiclesLocal" :key="index">
                    <td>{{ vehicle.license_plate }}</td>
                    <td>{{ vehicle.color }}</td>
                    <td>{{ formatEntryTime(vehicle.entrytime) }}</td>
                    
                    <td>{{ vehicle.state }}</td>
                    <td>
                        <img :src="vehicle.imageurl" alt="Imagen del vehículo" style="max-width: 100px; max-height: 100px;">
                    </td>
                    
                </tr>
            </tbody>
        </table>
        <p v-else-if="error">{{ errorMessage }}</p>

        <p v-else>No hay vehículos registrados.</p>
    </div>
</template>

<script>
export default {
    name: 'VehicleTable',
    props: {
        vehicles: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            
            vehiclesLocal: this.vehicles,
            loading: true,
            error: false,
            errorMessage: 'No fue posible conectar con el servicio ahora, intenta más tarde.'
        
        }
    },
    methods: {
        async getVehicles() {
            try {
                const response = await this.$axios.get('/cars');
                this.vehiclesLocal = response.data;
                this.$emit('update:vehicles', response.data);
            } catch (error) {
                console.error('Error al obtener los vehículos:', error);
                this.error = true;
            } finally {
                this.loading = false;
            }
        },
        formatEntryTime(entrytime) {
    const date = new Date(entrytime);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleString('es-ES', options);
},
formatExitTime(exittime) {
    if (exittime === 0 || exittime === null) {
        return '-';
    } else {
        const date = new Date(exittime);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleString('es-ES', options);
    }
}

    },
    mounted() {
        this.getVehicles();
    }
}
</script>

<style scoped>
.table-container {
    width: 100%;
    margin: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

th {
    background-color: #1c0043;
    color: rgb(255, 255, 255);
}
</style>

<template>
    <div class="table-container">
        <table v-if="vehiclesLocal.length > 0">
            <thead>
                <tr>
                    <th>Placa</th>
                    <th>Color</th>
                    <th>Hora de entrada</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vehicle, index) in vehiclesLocal" :key="index">
                    <td>{{ vehicle.license_plate }}</td>
                    <td>{{ vehicle.color }}</td>
                    <td>{{ vehicle.entryTime }}</td>
                    <td>{{ vehicle.state ? 'Activo' : 'Retirado' }}</td>
                </tr>
            </tbody>
        </table>
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
            vehiclesLocal: this.vehicles
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
    width: 70%;
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
    background-color: #f2f2f2;
}
</style>

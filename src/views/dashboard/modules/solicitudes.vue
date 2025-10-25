<template>
	<div class="space-y-6">
		<div class="flex justify-between items-center">
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Solicitudes</label>
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Instituto Tecnológico de Chetumal</label>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
			<div class="flex flex-col md:flex-row gap-4 items-end">
				<div class="flex-1">
					<form class="flex gap-2" @submit.prevent>
						<input type="text" placeholder="Buscar solicitud" class="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
						<button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Buscar</button>
					</form>
				</div>
				<select v-model="filterEstado" class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
					<option value="">Todos los estados</option>
					<option value="Pendiente">Pendiente</option>
					<option value="Aprobada">Aprobada</option>
					<option value="Rechazada">Rechazada</option>
				</select>
			</div>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
			<table class="w-full text-sm">
				<thead class="bg-gray-100 dark:bg-gray-700">
					<tr>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Tipo</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Solicitante</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Descripción</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Estado</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Acciones</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 dark:divide-gray-600">
					<tr v-for="(solicitud, index) in filteredSolicitudes" :key="index" class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">{{ solicitud.tipo }}</td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">{{ solicitud.solicitante }}</td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">{{ solicitud.descripcion }}</td>
						<td class="px-4 py-3">
							<span 
								v-if="solicitud.estado === 'Pendiente'" 
								class="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-semibold"
							>
								{{ solicitud.estado }}
							</span>
							<span 
								v-else-if="solicitud.estado === 'Aprobada'" 
								class="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold"
							>
								{{ solicitud.estado }}
							</span>
							<span 
								v-else 
								class="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs font-semibold"
							>
								{{ solicitud.estado }}
							</span>
						</td>
						<td class="px-4 py-3 flex gap-2">
							<button 
								v-if="solicitud.estado === 'Pendiente'"
								@click="approveSolicitud(index)" 
								class="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors"
							>
								Aprobar
							</button>
							<button 
								v-else 
								class="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded text-xs cursor-not-allowed opacity-50"
								disabled
							>
								Aprobar
							</button>
							<button 
								v-if="solicitud.estado === 'Pendiente'"
								@click="rejectSolicitud(index)" 
								class="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors"
							>
								Rechazar
							</button>
							<button 
								v-else 
								class="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded text-xs cursor-not-allowed opacity-50"
								disabled
							>
								Rechazar
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const solicitudes = ref([
	{ tipo: 'Transferencia', solicitante: 'Juan Pérez', descripcion: 'Transferencia de laptop', estado: 'Pendiente' },
	{ tipo: 'Eliminación', solicitante: 'María García', descripcion: 'Eliminación de bien dañado', estado: 'Aprobada' },
	{ tipo: 'Transferencia', solicitante: 'Carlos López', descripcion: 'Transferencia de escritorio', estado: 'Pendiente' },
	{ tipo: 'Reparación', solicitante: 'Ana Rodríguez', descripcion: 'Reparación de monitor', estado: 'Rechazada' },
])

const filterEstado = ref('')

const filteredSolicitudes = computed(() => {
	if (!filterEstado.value) {
		return solicitudes.value
	}
	return solicitudes.value.filter(solicitud => solicitud.estado === filterEstado.value)
})

const approveSolicitud = (index) => {
	solicitudes.value[index].estado = 'Aprobada'
}

const rejectSolicitud = (index) => {
	solicitudes.value[index].estado = 'Rechazada'
}
</script>

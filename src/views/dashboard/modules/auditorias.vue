<template>
	<div class="space-y-6">
		<div class="flex justify-between items-center">
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Registro de auditorías</label>
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Instituto Tecnológico de Chetumal</label>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filtrar por usuario</label>
				<div class="flex gap-2">
					<input type="text" placeholder="Usuario" class="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
					<button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Buscar</button>
				</div>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filtrar por tipo de usuario</label>
				<select class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
					<option>Sin filtro</option>
					<option>Gestor</option>
					<option>Resguardante</option>
				</select>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filtrar por rol</label>
				<select class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
					<option>Sin filtro</option>
					<option>Administrador</option>
					<option>Gestor superior</option>
					<option>Jefe de departamento</option>
				</select>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filtrar por acción</label>
				<select class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
					<option>Sin filtro</option>
					<option>Actualizar centro de trabajo</option>
					<option>Crear gestor</option>
					<option>Modificar gestor</option>
					<option>Eliminar gestor</option>
					<option>Crear resguardante</option>
					<option>Modificar resguardante</option>
					<option>Eliminar resguardante</option>
				</select>
			</div>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
			<table class="w-full text-sm">
				<thead class="bg-gray-100 dark:bg-gray-700">
					<tr>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Usuario</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Tipo</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Rol</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Acción</th>
						<th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Fecha</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 dark:divide-gray-600">
					<tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">Juan Pérez</td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">Gestor</td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">Administrador</td>
						<td class="px-4 py-3"><span class="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-semibold">Modificar</span></td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">2024-01-15 10:30</td>
					</tr>
					<tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">María García</td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">Resguardante</td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">Gestor</td>
						<td class="px-4 py-3"><span class="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">Crear</span></td>
						<td class="px-4 py-3 text-gray-600 dark:text-gray-400">2024-01-15 09:15</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
</script>

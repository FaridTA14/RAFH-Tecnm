<template>
	<div class="space-y-6">
		<!-- Page Title -->
		<div>
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Vista general</label>
		</div>

		<!-- Main Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Left Column (8/12 desktop, full mobile) -->
			<div class="lg:col-span-2 space-y-6">
				<!-- Top Cards Row -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<!-- Card 1 -->
					<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
						<div class="flex items-center justify-between mb-4">
							<h2 class="text-gray-600 dark:text-gray-400 text-sm">Ultimo bien registrado</h2>
							<a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
								<img src="/icons/consulta.png" alt="More" class="w-4 h-4">
							</a>
						</div>
						<div class="space-y-2">
							<a href="#" class="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
								<img src="/icons/bien.png" alt="Bien" class="w-4 h-4">
								<h2 class="ml-3 font-semibold">ARCHIVERO DE MADERA</h2>
							</a>
							<label class="text-gray-600 dark:text-gray-400 text-xs">Cantidad: 25</label>
						</div>
					</div>

					<!-- Card 2 -->
					<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
						<div class="flex items-center justify-between mb-4">
							<h2 class="text-gray-600 dark:text-gray-400 text-sm">Próximo mantenimiento</h2>
							<a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
								<img src="/icons/consulta.png" alt="More" class="w-4 h-4">
							</a>
						</div>
						<div class="space-y-2">
							<a href="#" class="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
								<img src="/icons/fecha.png" alt="Fecha" class="w-4 h-4">
								<h2 class="ml-3 font-semibold">12/07/25</h2>
							</a>
							<label class="text-gray-600 dark:text-gray-400 text-xs">Para: COMPUTADORA HP</label>
						</div>
					</div>

					<!-- Card 3 -->
					<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
						<div class="flex items-center justify-between mb-4">
							<h2 class="text-gray-600 dark:text-gray-400 text-sm">Última transferencia</h2>
							<a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
								<img src="/icons/consulta.png" alt="More" class="w-4 h-4">
							</a>
						</div>
						<div class="space-y-2">
							<a href="#" class="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
								<img src="/icons/enviar.png" alt="Enviar" class="w-4 h-4">
								<h2 class="ml-3 font-semibold">IMPRESORA HP</h2>
							</a>
							<label class="text-gray-600 dark:text-gray-400 text-xs">Realizada por: John Doe</label>
						</div>
					</div>
				</div>

				<!-- Table Card -->
				<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
					<div class="flex items-center justify-between mb-4">
						<h2 class="text-gray-600 dark:text-gray-400 text-sm font-semibold">Últimos movimientos</h2>
						<a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
							<img src="/icons/consulta.png" alt="More" class="w-4 h-4">
						</a>
					</div>
					<div class="overflow-x-auto">
						<table class="w-full text-sm">
							<thead>
								<tr class="border-b border-gray-300 dark:border-gray-600">
									<th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Tipo</th>
									<th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Gestor encargado</th>
									<th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Resguardante responsalbe</th>
									<th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Bien involucrado</th>
									<th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Área</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 dark:divide-gray-600">
								<tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Transferecia</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Juan Pérez</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Mary Doe</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">ESCRITORIO DE MADERA</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Servicios escolares</td>
								</tr>
								<tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Registro</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Juan Pérez</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Lane Doe</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">SILLA ESCOLAR</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Sistemas</td>
								</tr>
								<tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Mantenimiento</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Tyler Doe</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Mike Doe</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">COMPUTADORA DELL</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">sistemas</td>
								</tr>
								<tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Transferecia</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Juan Pérez</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Jay Doe</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">IMPRESORA HP</td>
									<td class="py-3 px-2 text-gray-600 dark:text-gray-400">Servicios escolares</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<!-- Right Column (4/12 desktop, full mobile) -->
			<div class="lg:col-span-1 space-y-6">
				<!-- Work Center Card -->
				<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
					<div class="flex items-center justify-between mb-4">
						<label class="text-gray-600 dark:text-gray-400 text-sm">Centro de trabajo</label>
						<a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
							<img src="/icons/consulta.png" alt="More" class="w-4 h-4">
						</a>
					</div>
					<h5 class="font-bold text-base mb-4">Instituto Tecnológico de Chetumal</h5>
					<div class="space-y-3">
						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-6 h-6 text-gray-500 dark:text-gray-400">
								<path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/>
							</svg>
							<h2 class="ml-2 text-gray-600 dark:text-gray-400 text-sm">Bienes registrados: 5,642</h2>
						</div>
						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-6 h-6 text-gray-500 dark:text-gray-400">
								<path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"/>
							</svg>
							<h2 class="ml-2 text-gray-600 dark:text-gray-400 text-sm">Gestores asignados: 10</h2>
						</div>
						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-6 h-6 text-gray-500 dark:text-gray-400">
								<path d="M120-160v-520l160 120 200-280 200 160h160v520H120Zm200-120 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z"/>
							</svg>
							<h2 class="ml-2 text-gray-600 dark:text-gray-400 text-sm">Áreas asociadas: 7</h2>
						</div>
						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-6 h-6 text-gray-500 dark:text-gray-400">
								<path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/>
							</svg>
							<h2 class="ml-2 text-gray-600 dark:text-gray-400 text-sm">Resguardantes registrados: 532</h2>
						</div>
					</div>
				</div>

				<!-- Notifications Card -->
				<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4 border-red-500">
					<div class="flex items-center justify-between mb-4">
						<label class="text-gray-600 dark:text-gray-400 text-sm">Notificaciones</label>
						<a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
							<img src="/icons/consulta.png" alt="More" class="w-4 h-4">
						</a>
					</div>
					<h5 class="font-bold text-base mb-4">Solicitudes de transferencia</h5>
					<div class="space-y-2 mb-4">
						<h3 class="text-orange-600 dark:text-orange-400 font-semibold">Autorización requerida</h3>
						<h3 class="text-gray-600 dark:text-gray-400 text-sm">Transferecia de bien: <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">MONITOR SAMSUNG</a></h3>
						<h3 class="text-gray-600 dark:text-gray-400 text-sm">Emisor: <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Sara Doe</a></h3>
						<h3 class="text-gray-600 dark:text-gray-400 text-sm">Receptor: <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Tyler Doe</a></h3>
					</div>
					<div class="flex gap-2 mt-4">
						<button @click="showAuthModal = true" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">Autorizar</button>
						<button @click="showDenyModal = true" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">Denegar</button>
					</div>

					<!-- Authorization Modal -->
					<div v-if="showAuthModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
						<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
							<div class="flex items-center justify-between border-b border-gray-300 dark:border-gray-600 p-4">
								<h2 class="text-lg font-semibold text-green-600">Solicitud Autorizada</h2>
								<button @click="showAuthModal = false" class="text-gray-400 hover:text-gray-600">&times;</button>
							</div>
							<div class="p-8 flex flex-col items-center justify-center">
								<img src="/icons/lista-de-verificacion.png" alt="Check" class="w-24 h-24 mb-4">
								<h1 class="text-gray-600 dark:text-gray-400 text-base text-center">Se ha autorizado la transferencia.</h1>
							</div>
							<div class="border-t border-gray-300 dark:border-gray-600 p-4">
								<button @click="showAuthModal = false" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Continuar</button>
							</div>
						</div>
					</div>

					<!-- Deny Modal -->
					<div v-if="showDenyModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
						<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
							<div class="flex items-center justify-between border-b border-gray-300 dark:border-gray-600 p-4">
								<h2 class="text-lg font-semibold text-red-600">Solicitud Denegada</h2>
								<button @click="showDenyModal = false" class="text-gray-400 hover:text-gray-600">&times;</button>
							</div>
							<div class="p-8 flex flex-col items-center justify-center">
								<img src="/icons/prohibido.png" alt="Denied" class="w-24 h-24 mb-4">
								<h1 class="text-gray-600 dark:text-gray-400 text-base text-center">Se ha negado la transferencia.</h1>
							</div>
							<div class="border-t border-gray-300 dark:border-gray-600 p-4">
								<button @click="showDenyModal = false" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Continuar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const showAuthModal = ref(false)
const showDenyModal = ref(false)
</script>

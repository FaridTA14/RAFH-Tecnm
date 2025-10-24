<template>
	<div class="space-y-6">
		<div class="flex justify-between items-center">
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Centro de Trabajo</label>
			<label class="text-sm md:text-base text-gray-600 dark:text-gray-400">Institución Educativa</label>
		</div>

		<!-- Work Center Info -->
		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
			<div class="flex items-center gap-6 mb-6">
				<img src="/images/logoEscuela.png" alt="Logo" class="w-16 h-16 rounded-lg">
				<div class="flex-1">
					<h1 class="text-2xl font-bold text-gray-900 dark:text-white">Instituto Tecnológico de Chetumal</h1>
					<a href="#" class="text-blue-600 dark:text-blue-400 hover:underline text-sm">Editar</a>
				</div>
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
					<div class="flex justify-between items-start">
						<div>
							<p class="text-gray-600 dark:text-gray-400 text-sm">Bienes registrados</p>
							<p class="text-3xl font-bold text-gray-900 dark:text-white">5,642</p>
						</div>
						<a href="#" class="text-gray-400 hover:text-gray-600">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</a>
					</div>
				</div>

				<div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
					<div class="flex justify-between items-start">
						<div>
							<p class="text-gray-600 dark:text-gray-400 text-sm">Gestores asignados</p>
							<p class="text-3xl font-bold text-gray-900 dark:text-white">10</p>
						</div>
						<a href="#" class="text-gray-400 hover:text-gray-600">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</a>
					</div>
				</div>

				<div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
					<div class="flex justify-between items-start">
						<div>
							<p class="text-gray-600 dark:text-gray-400 text-sm">Resguardantes registrados</p>
							<p class="text-3xl font-bold text-gray-900 dark:text-white">532</p>
						</div>
						<a href="#" class="text-gray-400 hover:text-gray-600">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Configuration Section -->
		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
			<div class="flex items-center gap-2 mb-4">
				<svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
					<path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
				</svg>
				<h3 class="text-lg font-bold text-gray-900 dark:text-white">Configuración de los bienes</h3>
			</div>

			<button @click="showCategoriesModal = true" class="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white transition-colors">
				Categorías de los bienes registrados
			</button>
			<button @click="showBuildingsModal = true" class="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white transition-colors">
				Edificios
			</button>
		</div>

		<!-- Modals -->
		<div v-if="showCategoriesModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
				<div class="flex items-center justify-between border-b border-gray-300 dark:border-gray-600 p-6">
					<h2 class="text-lg font-bold text-gray-900 dark:text-white">Categorías</h2>
					<button @click="showCategoriesModal = false" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
				</div>
				<div class="p-6">
					<p class="text-gray-600 dark:text-gray-400">Gestione las categorías de bienes</p>
					<button class="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Nueva Categoría</button>
				</div>
			</div>
		</div>

		<div v-if="showBuildingsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
				<div class="flex items-center justify-between border-b border-gray-300 dark:border-gray-600 p-6">
					<h2 class="text-lg font-bold text-gray-900 dark:text-white">Edificios</h2>
					<button @click="showBuildingsModal = false" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
				</div>
				<div class="p-6">
					<p class="text-gray-600 dark:text-gray-400">Gestione los edificios del centro de trabajo</p>
					<button class="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Nuevo Edificio</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const showCategoriesModal = ref(false)
const showBuildingsModal = ref(false)
</script>

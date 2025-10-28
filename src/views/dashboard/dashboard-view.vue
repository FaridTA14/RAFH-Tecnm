<template>
<<<<<<< HEAD
	<main class="flex h-screen bg-gray-900 dark:bg-gray-950 transition-colors duration-300">
		<!-- Top Navigation Bar -->
		<nav class="fixed top-0 left-0 right-0 z-40 bg-gray-900 dark:bg-gray-950 text-white shadow-lg transition-colors duration-300">
			<div class="flex justify-between items-center px-4 h-16">
				<!-- Mobile Menu Toggle -->
				<button
					@click="toggleSidebar"
					class="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
					aria-label="Toggle sidebar"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>

				<!-- Logo -->
				<div class="flex items-center space-x-2">
					<img src="/icons/favicon.png" alt="RAFH Logo" class="w-8 h-8">
					<span class="font-bold text-lg">RAFH</span>
				</div>

				<!-- Logout Button -->
				<button
					@click="handleLogout"
					class="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors duration-300 font-medium"
				>
					Cerrar Sesión
				</button>
			</div>
		</nav>

		<!-- Sidebar -->
		<aside
			:class="{ 'translate-x-0': isSidebarActive, '-translate-x-full': !isSidebarActive }"
			class="fixed left-0 top-16 bottom-0 w-64 bg-gray-800 dark:bg-gray-900 text-white shadow-lg transition-transform duration-300 md:static md:translate-x-0 z-30"
		>
			<nav class="p-4 space-y-2 overflow-y-auto h-full">
				<!-- Dashboard Overview -->
				<RouterLink
					:to="{ name: 'dashboard' }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 group"
					@click="closeSidebar"
				>
					<img src="/icons/overview.png" alt="Overview" class="w-4 h-4">
					<span>Vista general</span>
				</RouterLink>

				<!-- Work Center -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'workcenter' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/edificio.png" alt="Work Center" class="w-4 h-4">
					<span>Centro de trabajo</span>
				</RouterLink>

				<!-- Managers -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'gestores' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/gestor.png" alt="Managers" class="w-4 h-4">
					<span>Gestores</span>
				</RouterLink>

				<!-- Custodians -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'resguardantes' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/usuarios.png" alt="Custodians" class="w-4 h-4">
					<span>Resguardantes</span>
				</RouterLink>

				<!-- Material Goods -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'bienes' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/bienes.png" alt="Goods" class="w-4 h-4">
					<span>Bienes materiales</span>
				</RouterLink>

				<!-- Areas -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'areas' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/zona.png" alt="Areas" class="w-4 h-4">
					<span>Áreas</span>
				</RouterLink>

				<!-- Audits -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'auditorias' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/auditoria.png" alt="Audits" class="w-4 h-4">
					<span>Registro de auditorías</span>
				</RouterLink>

				<!-- Maintenance -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'mantenimiento' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/herramienta.png" alt="Maintenance" class="w-4 h-4">
					<span>Mantenimiento</span>
				</RouterLink>

				<!-- Requests -->
				<RouterLink
					:to="{ name: 'dashboard-component', params: { component: 'solicitudes' } }"
					class="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300"
					@click="closeSidebar"
				>
					<img src="/icons/campana.png" alt="Requests" class="w-4 h-4">
					<span>Solicitudes</span>
				</RouterLink>
			</nav>
		</aside>

		<!-- Sidebar Overlay (Mobile) -->
		<div
			v-if="isSidebarActive"
			@click="closeSidebar"
			class="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300"
		></div>

		<!-- Main Content Area -->
		<div class="flex-1 flex flex-col w-full md:w-auto">
			<!-- Main Content -->
			<div class="flex-1 overflow-auto pt-16 md:pt-0">
				<section class="p-4 md:p-8">
					<Component :is="currentComponent" />
				</section>
			</div>
		</div>
	</main>
</template>

<script setup>
	import { computed, onMounted, onUnmounted, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { logout } from '../../config/api.js'
	import { RouterLink } from 'vue-router'

	const isSidebarActive = ref(false)
	const toggleSidebar = () => { isSidebarActive.value = !isSidebarActive.value }
	const closeSidebar = () => { isSidebarActive.value = false }

	const handleResize = () => {
		if (window.innerWidth > 768) isSidebarActive.value = false
	}

	onMounted(() => {
		window.addEventListener('resize', handleResize)
	})
	onUnmounted(() => {
		window.removeEventListener('resize', handleResize)
	})

	const route = useRoute()
	const componentParam = computed(() => route.params.component)

	const componentMap = {
		areas: () => import('./modules/areas.vue'),
		auditorias: () => import('./modules/auditorias.vue'),
		"bien-view": () => import('./modules/bien-view.vue'),
		bienes: () => import('./modules/bienes.vue'),
		gestores: () => import('./modules/gestores.vue'),
		main: () => import('./modules/main.vue'),
		mantenimiento: () => import('./modules/mantenimiento.vue'),
		resguardantes: () => import('./modules/resguardantes.vue'),
		roles: () => import('./modules/roles.vue'),
		solicitudes: () => import('./modules/solicitudes.vue'),
		"user-resg": () => import('./modules/user-resg.vue'),
		workcenter: () => import('./modules/workcenter.vue'),
	}

	const currentComponent = computed(() => {
		const key = String(componentParam.value || 'main')
		return componentMap[key] ? componentMap[key] : componentMap['main']
	})

	const router = useRouter()
	const handleLogout = async () => {
		try {
			await logout()
			router.push('/')
		} catch (error) {
			console.error('Error al cerrar sesión:', error)
			localStorage.removeItem('auth_token')
			localStorage.removeItem('user')
			router.push('/')
		}
	}
</script>
=======
	<div class="flex h-screen bg-white dark:bg-gray-900">
		<div v-if="isLoggingOut" class="fixed inset-0 bg-black bg-opacity-50 z-[49]"></div>
		<!-- Sidebar -->
		<aside :class="[
			'fixed md:static z-40 w-64 h-full bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-transform duration-300 ease-in-out',
			isSidebarActive ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
		]">
			<!-- Sidebar Header -->
			<div class="p-6 border-b border-blue-200 dark:border-gray-700">
				<div class="flex items-center space-x-2">
					<img src="/favicon.ico" alt="RAFH Logo" class="w-12 h-12">
					<h1 class="text-2xl font-bold text-blue-900 dark:text-white">RAFH</h1>
				</div>
			</div>

			<!-- Navigation Menu -->
			<nav class="p-4">
				<RouterLink to="/dashboard" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Principal
				</RouterLink>

				<RouterLink to="/dashboard/areas" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Áreas
				</RouterLink>
				<RouterLink to="/dashboard/bienes" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Bienes
				</RouterLink>
				<RouterLink to="/dashboard/auditorias" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Auditorías
				</RouterLink>
				<RouterLink to="/dashboard/gestores" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Gestores
				</RouterLink>
				<RouterLink to="/dashboard/resguardantes" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Resguardantes
				</RouterLink>
				<RouterLink to="/dashboard/roles" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Roles
				</RouterLink>
				<RouterLink to="/dashboard/solicitudes" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Solicitudes
				</RouterLink>
				<RouterLink to="/dashboard/workcenter" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Centro de Trabajo
				</RouterLink>
				<RouterLink to="/dashboard/mantenimiento" @click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition">
					Mantenimiento
				</RouterLink>
			</nav>

			<!-- Theme Toggle - Bottom of Sidebar -->
			<div class="absolute bottom-6 left-0 right-0 flex justify-center">
				<button @click="toggleTheme" :class="[
					'p-3 rounded-lg transition-colors',
					isDark ? 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200' : 'bg-blue-200 text-blue-900 hover:bg-blue-300'
				]" title="Cambiar tema">
					<svg v-if="isDark" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v6m0 6v6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M2 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24" />
					</svg>
					<svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				</button>
			</div>
		</aside>

		<!-- Overlay for mobile -->
		<div v-if="isSidebarActive" @click="closeSidebar" class="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30" />

		<!-- Main Content -->
		<div class="flex-1 flex flex-col">
			<!-- Top Bar -->
			<header class="bg-white dark:bg-gray-800 shadow-md">
				<div class="p-4 flex items-center justify-between">
					<button @click="toggleSidebar"
						class="p-2 text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:hidden">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<div class="flex-1"></div>
					<div class="relative">
						<button @click="isProfileMenuOpen = !isProfileMenuOpen"
							class="flex items-center space-x-2 p-2 text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							<span class="hidden sm:inline text-sm font-medium">{{ userName }}</span>
						</button>

						<!-- Profile Dropdown Menu -->
						<div v-if="isProfileMenuOpen" @click.outside="!isLoggingOut && (isProfileMenuOpen = false)"
							class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-600">
							<div class="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
								<p class="text-sm font-semibold text-gray-900 dark:text-white">{{ userName }}</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">{{ userEmail }}</p>
							</div>
							<RouterLink to="/dashboard/profile-edit" @click="!isLoggingOut && (isProfileMenuOpen = false)"
								class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
								Editar Perfil
							</RouterLink>
							<button @click="handleLogout" :disabled="isLoggingOut"
								class="w-full px-4 py-2 text-sm transition" :class="{
									'text-left text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600': !isLoggingOut,
									'flex justify-center items-center text-gray-400 dark:text-gray-500 cursor-not-allowed': isLoggingOut
								}">
								<span v-if="isLoggingOut" class="flex items-center justify-center">
									<div class="spinner-logout mr-2"></div>
									Cerrando sesión...
								</span>
								<span v-else>
									Cerrar Sesión
								</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			<!-- Component Display Area -->
			<section class="p-4 md:p-8 overflow-auto flex-1 bg-gray-50 dark:bg-gray-800">
				<Suspense>
					<template #default>
						<component :is="currentComponent" />
					</template>
					<template #fallback>
						<div class="flex items-center justify-center h-64">
							<div class="text-center">
								<div
									class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600">
								</div>
								<p class="mt-4 text-gray-600 dark:text-gray-400">Cargando...</p>
							</div>
						</div>
					</template>
				</Suspense>
			</section>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, defineAsyncComponent } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { logout } from '../../config/api.js'
import { useTheme } from '../../composables/useTheme.js'

const { isDark, toggleTheme } = useTheme()
const isSidebarActive = ref(false)
const isProfileMenuOpen = ref(false)
const isLoggingOut = ref(false)
const toggleSidebar = () => { isSidebarActive.value = !isSidebarActive.value }
const closeSidebar = () => { isSidebarActive.value = false }

const handleResize = () => {
	if (window.innerWidth > 768) isSidebarActive.value = false
}

onMounted(() => {
	window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})

const route = useRoute()
const router = useRouter()
const componentParam = computed(() => route.params.component)

// Get user data from localStorage
const userData = JSON.parse(localStorage.getItem('user') || '{}')
const userName = computed(() => userData.usuario_nombre || 'Usuario')
const userEmail = computed(() => userData.usuario_correo || 'email@example.com')

const componentMap = {
	areas: defineAsyncComponent(() => import('./modules/areas.vue')),
	auditorias: defineAsyncComponent(() => import('./modules/auditorias.vue')),
	"bien-view": defineAsyncComponent(() => import('./modules/bien-view.vue')),
	bienes: defineAsyncComponent(() => import('./modules/bienes.vue')),
	gestores: defineAsyncComponent(() => import('./modules/gestores.vue')),
	main: defineAsyncComponent(() => import('./modules/main.vue')),
	mantenimiento: defineAsyncComponent(() => import('./modules/mantenimiento.vue')),
	resguardantes: defineAsyncComponent(() => import('./modules/resguardantes.vue')),
	roles: defineAsyncComponent(() => import('./modules/roles.vue')),
	solicitudes: defineAsyncComponent(() => import('./modules/solicitudes.vue')),
	"user-resg": defineAsyncComponent(() => import('./modules/user-resg.vue')),
	workcenter: defineAsyncComponent(() => import('./modules/workcenter.vue')),
	"profile-edit": defineAsyncComponent(() => import('./modules/profile-edit.vue')),
}

const currentComponent = computed(() => {
	const key = String(componentParam.value || 'main')
	return componentMap[key] ? componentMap[key] : componentMap['main']
})


const handleLogout = async () => {
	// Evita doble clic si ya está cargando
	if (isLoggingOut.value) return

	// Activa el estado de carga
	isLoggingOut.value = true

	try {
		// Llama a la API de logout
		await logout()
	} catch (error) {
		console.error('Error al cerrar sesión en la API:', error)
		// No importa si la API falla, el usuario DEBE ser deslogueado localmente
	}

	// Limpiar el localStorage
	localStorage.removeItem('auth_token')
	localStorage.removeItem('user')

	// Pequeña pausa para mostrar la animación antes de redirigir
	await new Promise(resolve => setTimeout(resolve, 500))

	// Cerrar el menú desplegable antes de redirigir
	isProfileMenuOpen.value = false

	// Redirige al login
	router.push('/login')
}
</script>

<style scoped>
/* Spinner para logout */
.spinner-logout {
	width: 16px;
	height: 16px;
	border: 2px solid #e5e7eb;
	border-top: 2px solid #dc2626;
	border-radius: 50%;
	animation: spin 1s linear infinite;
	display: inline-block;
	vertical-align: middle;
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

/* Spinner para modo oscuro */
.dark .spinner-logout {
	border: 2px solid #4b5563;
	border-top: 2px solid #f87171;
}

/* Forzar la animación */
.spinner-logout {
	animation-play-state: running !important;
	animation-fill-mode: none !important;
}
</style>
>>>>>>> 3635517 (Cambios de Api y diseño)

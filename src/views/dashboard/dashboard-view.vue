<template>
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

<template>
	<div class="flex h-screen bg-white dark:bg-gray-900">
		<!-- Sidebar -->
		<aside :class="[
			'fixed md:static z-40 w-64 h-full bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-transform duration-300 ease-in-out',
			isSidebarActive ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
		]">
			<!-- Sidebar Header -->
			<div class="p-6 border-b border-blue-200 dark:border-gray-700">
				<h1 class="text-2xl font-bold text-blue-900 dark:text-white">RAFH</h1>
			</div>

			<!-- Navigation Menu -->
			<nav class="p-4">
				<RouterLink
					to="/dashboard"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Dashboard
				</RouterLink>
				<RouterLink
					to="/dashboard/main"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Principal
				</RouterLink>
				<RouterLink
					to="/dashboard/areas"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Áreas
				</RouterLink>
				<RouterLink
					to="/dashboard/bienes"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Bienes
				</RouterLink>
				<RouterLink
					to="/dashboard/auditorias"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Auditorías
				</RouterLink>
				<RouterLink
					to="/dashboard/gestores"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Gestores
				</RouterLink>
				<RouterLink
					to="/dashboard/resguardantes"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Resguardantes
				</RouterLink>
				<RouterLink
					to="/dashboard/roles"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Roles
				</RouterLink>
				<RouterLink
					to="/dashboard/solicitudes"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Solicitudes
				</RouterLink>
				<RouterLink
					to="/dashboard/workcenter"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Centro de Trabajo
				</RouterLink>
				<RouterLink
					to="/dashboard/mantenimiento"
					@click="closeSidebar"
					class="block px-4 py-3 mb-2 text-blue-900 dark:text-gray-300 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-700 transition"
				>
					Mantenimiento
				</RouterLink>
			</nav>
		</aside>

		<!-- Overlay for mobile -->
		<div
			v-if="isSidebarActive"
			@click="closeSidebar"
			class="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
		/>

		<!-- Main Content -->
		<div class="flex-1 flex flex-col">
			<!-- Top Bar -->
			<header class="bg-white dark:bg-gray-800 shadow-md">
				<div class="p-4 flex items-center justify-between">
					<button
						@click="toggleSidebar"
						class="p-2 text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:hidden"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<div class="flex-1"></div>
					<div class="relative">
						<button
							@click="isProfileMenuOpen = !isProfileMenuOpen"
							class="flex items-center space-x-2 p-2 text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
						>
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							<span class="hidden sm:inline text-sm font-medium">{{ userName }}</span>
						</button>

						<!-- Profile Dropdown Menu -->
						<div
							v-if="isProfileMenuOpen"
							@click.outside="isProfileMenuOpen = false"
							class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-600"
						>
							<div class="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
								<p class="text-sm font-semibold text-gray-900 dark:text-white">{{ userName }}</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">{{ userEmail }}</p>
							</div>
							<RouterLink
								to="/dashboard/profile-edit"
								@click="isProfileMenuOpen = false"
								class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
							>
								Editar Perfil
							</RouterLink>
							<button
								@click="handleLogout"
								class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
							>
								Cerrar Sesión
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
								<div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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

const isSidebarActive = ref(false)
const isProfileMenuOpen = ref(false)
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
	try {
		await logout()
		router.push('/login')
	} catch (error) {
		console.error('Error al cerrar sesión:', error)
		localStorage.removeItem('auth_token')
		localStorage.removeItem('user')
		router.push('/login')
	}
}
</script>

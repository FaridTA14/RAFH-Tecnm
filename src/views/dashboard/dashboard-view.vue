<template>
	<main>
		<nav class="navbar custom-navbar">
			<div class="navbar-brand">
				<a class="navbar-item has-text-white menu-toggle" @click="toggleSidebar">
					<i class="fas fa-bars"></i>
				</a>
				<span class="navbar-item has-text-white">
					<img src="/icons/favicon.png" alt="">
					RAFH
				</span>
			</div>
			<div class="navbar-end navbar-content navbar-item">
				<div class="navbar-item">
					<button class="button is-danger is-outlined" @click="handleLogout">
						Cerrar Sesión
					</button>
				</div>
			</div>
		</nav>
		<div class="main-container">
			<aside id="sidebar" class="custom-aside-bar" :class="{ 'is-active': isSidebarActive }">
				<div class="menu">
					<ul class="menu-list">
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard' }">
							<img class="image is-16x16 mx-2" src="/icons/overview.png" alt="">
							Vista general
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'workcenter' } }">
							<img class="image is-16x16 mx-2" src="/icons/edificio.png" alt="">
							Centro de trabajo
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'gestores' } }">
							<img class="image is-16x16 mx-2" src="/icons/gestor.png" alt="">
							Gestores
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'resguardantes' } }">
							<img class="image is-16x16 mx-2" src="/icons/usuarios.png" alt="">
							Resguardantes
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'bienes' } }">
							<img class="image is-16x16 mx-2" src="/icons/bienes.png" alt="">
							Bienes materiales
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'areas' } }">
							<img class="image is-16x16 mx-2" src="/icons/zona.png" alt="">
							Áreas
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'auditorias' } }">
							<img class="image is-16x16 mx-2" src="/icons/auditoria.png" alt="">
							Registro de auditorias
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'mantenimiento' } }">
							<img class="image is-16x16 mx-2" src="/icons/herramienta.png" alt="">
							Mantenimiento
						</RouterLink>
						<RouterLink class="has-text-white is-flex is-align-items-center px-2" :to="{ name: 'dashboard-component', params: { component: 'solicitudes' } }">
							<img class="image is-16x16 mx-2" src="/icons/campana.png" alt="">
							Solicitudes
						</RouterLink>
					</ul>
				</div>
			</aside>
			<div class="overlay" id="sidebar-overlay" :class="{ 'is-active': isSidebarActive }" @click="closeSidebar"></div>
			<div class="custom-main-content">
				<section class="custom-main-section" id="dynamic-content">
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

	const isSidebarActive = ref(false)
	const toggleSidebar = () => { isSidebarActive.value = !isSidebarActive.value }
	const closeSidebar = () => { isSidebarActive.value = false }

	const handleResize = () => {
		if (window.innerWidth > 1023) isSidebarActive.value = false
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

	// Función para manejar el logout
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

<style scoped>
</style>


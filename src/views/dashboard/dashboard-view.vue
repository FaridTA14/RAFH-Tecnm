import { computed, onMounted, onUnmounted, ref, defineAsyncComponent } from 'vue'
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
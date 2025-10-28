<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
<<<<<<< HEAD
const route = useRoute()
=======
import { computed } from 'vue'

const route = useRoute()
const isDashboard = computed(() => route.path.startsWith('/dashboard'))
>>>>>>> 3635517 (Cambios de Api y diseño)
</script>

<template>
	<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
<<<<<<< HEAD
		<Navbar :isCentroT="Boolean(route.meta.navbarCentroT)" />
		<main class="flex-grow pt-16">
			<RouterView />
		</main>
		<Footer />
=======
		<Navbar v-if="!isDashboard" :isCentroT="Boolean(route.meta.navbarCentroT)" />
		<main :class="['flex-grow', { 'pt-16': !isDashboard }]">
			<RouterView />
		</main>
		<Footer v-if="!isDashboard" />
>>>>>>> 3635517 (Cambios de Api y diseño)
	</div>
</template>

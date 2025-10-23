<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
	<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
		<Navbar :isCentroT="Boolean(route.meta.navbarCentroT)" />
		<main class="flex-grow pt-16">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

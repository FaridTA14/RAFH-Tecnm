<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
	<div>
		<Navbar :isCentroT="Boolean(route.meta.navbarCentroT)" />
		<div class="app-main">
			<RouterView />
		</div>
		<Footer />
	</div>
</template>

<style scoped>

</style>

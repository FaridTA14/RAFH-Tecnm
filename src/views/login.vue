<template>
	<section class="custom-section-first">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-4">
					<div class="box has-background-black-bis">
						<h1 class="title has-text-centered custom-family-text">Iniciar Sesión</h1>
						
						<!-- Mensaje de error -->
						<div v-if="errorMessage" class="notification is-danger is-light">
							<button class="delete" @click="errorMessage = ''"></button>
							{{ errorMessage }}
						</div>

						<form @submit.prevent="handleLogin">
							<div class="field">
								<div class="control has-icons-left">
									<input 
										class="input" 
										type="email" 
										v-model="formData.email" 
										placeholder="Ingresa tu correo" 
										required
										:disabled="isLoading"
									>
									<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
								</div>
							</div>
							<div class="field">
								<div class="control has-icons-left">
									<input 
										class="input" 
										type="password" 
										v-model="formData.password" 
										placeholder="Ingresa tu contraseña" 
										required
										:disabled="isLoading"
									>
									<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
								</div>
							</div>
							<div class="field">
								<p class="control has-text-right"><a href="#" class="is-size-7 has-text-link">¿Olvidaste tu contraseña?</a></p>
							</div>
							<div class="field">
								<div class="control">
									<button type="submit" class="button register-button is-fullwidth is-info"
										:class="{ 'is-loading': isLoading }"
										:disabled="isLoading"
									>
										{{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
									</button>
								</div>
							</div>
						</form>
						
						<div class="field">
							<div class="control">
								<button 
									class="button register-button is-fullwidth"
									@click="loginWithMicrosoft"
									:disabled="isLoading"
								>
									<img src="/images/microsoft.png" alt="" width="25px" height="25px">Iniciar Sesión con Microsoft
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref, reactive } from 'vue'
	import { useRouter } from 'vue-router'
	import { login } from '../config/api.js'

	const router = useRouter()

	// Estado del formulario
	const formData = reactive({
		usuario_correo: '',
		usuario_pass: ''
	})

	// Estados de la aplicación
	const isLoading = ref(false)
	const errorMessage = ref('')

	// Función para manejar el login
	const handleLogin = async () => {
	// Validación básica
	if (!formData.email || !formData.password) {
		errorMessage.value = 'Por favor, completa todos los campos'
		return
	}

	isLoading.value = true
	errorMessage.value = ''

	try {
		//console.log(formData)
		const response = await login(formData.email, formData.password)
		const data = await response.json()

		if (response.ok) {
		// Login exitoso
		// Guardar el token en localStorage
		if (data.token) {
			localStorage.setItem('auth_token', data.token)
			localStorage.setItem('user', JSON.stringify(data.user))
		}
		
		// Redirigir al dashboard
		router.push('/dashboard')
		} else {
		// Mostrar error del servidor
		errorMessage.value = data.message || 'Error al iniciar sesión'
		}
	} catch (error) {
		console.error('Error en la petición:', error)
		errorMessage.value = 'Error de conexión. Verifica que tu API esté funcionando.'
	} finally {
		isLoading.value = false
	}
	}

	// Función para login con Microsoft (placeholder)
	const loginWithMicrosoft = () => {
	// Aquí puedes implementar la lógica de OAuth con Microsoft
	console.log('Login con Microsoft - por implementar')
	}
</script>

<style scoped>
.register-button img {
    margin-right: 10px;
}
</style>


<template>
	<section class="custom-section-first">
		<div class="main-container">
			<div class="signup-container">
				<div class="form-side">
					<h1 class="title custom-family-text">Registro</h1>
					<form method="POST" class="register-form" id="register-form">
						<div class="field">
							<div class="control has-icons-left">
								<input class="input" type="text" name="nombre" placeholder="Tu Nombre" required>
							</div>
						</div>
						<div class="field">
							<div class="control has-icons-left">
								<input class="input" type="email" name="email" placeholder="Tu Email" required>
							</div>
						</div>
						<div class="field">
							<div class="control has-icons-left">
								<input class="input" type="password" name="contraseña" placeholder="Contraseña" required>
							</div>
						</div>
						<div class="field">
							<div class="control has-icons-left">
								<input class="input" type="password" name="repetir_contraseña" placeholder="Repite tu contraseña" required>
							</div>
						</div>
						<div class="field terms">
							<label class="checkbox">
								<input type="checkbox" required>
								Acepto todos los <a href="#" class="terms-link">términos de servicio</a>
							</label>
						</div>
						<div class="field">
							<button type="submit" class="button register-button">Registrarse</button>
						</div>
						<div class="field login-link">
							<RouterLink to="/login">Ya tengo una cuenta</RouterLink>
						</div>
					</form>
				</div>
				<div class="image-side">
					<img src="/images/form.png" alt="Imagen de registro">
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style scoped>
/* Ajustar el contenedor de registro */
.custom-section-first {
    min-height: calc(100vh - 3.25rem);
    padding-top: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.25rem 1rem 2rem 1rem;
    box-sizing: border-box;
}

.main-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
}

.signup-container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    background: rgb(20,22,26);
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
    overflow: hidden;
}

.form-side {
    flex: 1;
    padding: 2rem;
    min-width: 0;
}

.image-side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    min-width: 0;
}

.image-side img {
    max-width: 100%;
    height: auto;
    max-height: 400px;
}

/* Responsive */
@media screen and (max-width: 768px) {
    .custom-section-first {
        padding: 3.25rem 0.5rem 1rem 0.5rem;
    }
    
    .signup-container {
        flex-direction: column;
        margin: 0;
        border-radius: 0;
    }
    
    .form-side {
        padding: 1.5rem;
    }
    
    .image-side {
        display: none;
    }
}

@media screen and (max-width: 480px) {
    .custom-section-first {
        padding: 3.25rem 0.25rem 0.5rem 0.25rem;
    }
    
    .form-side {
        padding: 1rem;
    }
    
    .title {
        font-size: 1.5rem;
    }
}
</style>


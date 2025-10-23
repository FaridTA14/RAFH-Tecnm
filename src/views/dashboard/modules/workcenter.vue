<template>
	<section class="container">
		<div class="is-flex">
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd">Centro de trabajo</label>
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd ml-auto">Institución Educativa</label>
		</div>
		<div class="container">
			<div class="is-flex mt-4 is-align-items-center">
				<img class="image is-64x64" src="/images/logoEscuela.png" alt="">
				<h1 class="ml-3 custom-title is-size-5-mobile is-size-5-tablet is-size-5-desktop is-size-5-fullhd">Instituto Tecnológico de Chetumal</h1>
				<a href="">
					<img class="ml-2 image is-16x16" src="/icons/editar.png" alt="">
				</a>
			</div>
			<div class="columns is-1 mt-2">
				<div class="column custom-cards custom-shadow-cards-link m-1 custom-cards p-2">
					<div class="is-flex is-align-items-center">
						<h2 class="has-text-grey">Bienes registrados</h2>
						<RouterLink class="ml-auto" :to="{ name: 'dashboard-component', params: { component: 'bienes' } }">
							<img class="image is-16x16" src="/icons/consulta.png" alt="">
						</RouterLink>
					</div>
					<h2 class="is-size-3 is-size-4-mobile is-size-3-tablet is-size-3-desktop is-size-3-fullhd">5,642</h2>
				</div>

				<!-- Card 2 -->
				<div class="column m-1 custom-cards custom-shadow-cards-link p-2">
					<div class="is-flex is-align-items-center">
						<h2 class="has-text-grey">Gestores asignados</h2>
						<RouterLink class="ml-auto" :to="{ name: 'dashboard-component', params: { component: 'gestores' } }">
							<img class="image is-16x16" src="/icons/consulta.png" alt="">
						</RouterLink>
					</div>
					<h2 class="is-size-3">10</h2>
				</div>

				<!-- Card 3 -->
				<div class="column m-1 custom-cards custom-shadow-cards-link p-2">
					<div class="is-flex is-align-items-center">
						<h2 class="has-text-grey">Resguardantes registrados</h2>
						<RouterLink class="ml-auto" :to="{ name: 'dashboard-component', params: { component: 'resguardantes' } }">
							<img class="image is-16x16 has-text-grey-lighter" src="/icons/consulta.png" alt="">
						</RouterLink>
					</div>
					<h2 class="is-size-3">532</h2>
				</div>
			</div>
			<section class="">
				<div class="container custom-border">
					<div class="p-1">
						<div class="is-flex is-align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#737373"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
							<h2 class="ml-1">Configuración de los bienes</h2>
						</div>
						<div class="is-flex is-flex-direction-column ml-2 p-2" style="align-items: flex-start;">
							<button class="custom-button has-text-grey open-modal is-responsive mb-3" data-target="modal1">Categorias de los bienes registrados</button>
							<div class="modal" id="modal1">
								<div class="modal-background"></div>
								<div class="modal-card">
									<header class="modal-card-head">
										<p class="modal-card-title">Categorias de los bienes registrados</p>
										<button class="delete close-modal" aria-label="close"></button>
									</header>
									<section class="modal-card-body">
										<form action="" class="is-flex is-align-items-center">
											<input class="input custom-input" type="text" placeholder="Nueva Categoria" />
											<input class="button" type="submit" value="Añadir">
											<div class="switch-container">
												<input type="checkbox" id="switch0" class="custom-switch">
												<label for="switch0"></label>
											</div>
										</form>
										<div class="custom-border mt-2 p-2">
											<table class="table is-fullwidth">
												<tr>
													<th>Categoria</th>
													<th>Acciones</th>
												</tr>
												<tr>
													<td>Mueble de oficina</td>
													<td class="is-flex">
														<button>
															<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#737373"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
														</button>
														<button class="ml-3">
															<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#737373"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
														</button>
													</td>
												</tr>
												<tr>
													<td>Equipo de computo</td>
													<td class="is-flex">
														<button>
															<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#737373"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
														</button>
														<button class="ml-3">
															<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#737373"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
														</button>
													</td>
												</tr>
											</table>
										</div>
									</section>
									<footer class="modal-card-foot">
										<button class="button is-link">Cerrar</button>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
</template>

<script setup>
</script>

<style scoped>
</style>


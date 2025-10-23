<template>
	<section class="container">
		<div class="is-flex">
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd">Control de Áreas</label>
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd ml-auto">Instituto Tecnológico de Chetumal</label>
		</div>

		<div id="tab-gestion-areas">
			<div class="container is-flex mb-3 mt-3">
				<form action="" class="is-flex">
					<input type="text" placeholder="Buscar área" class="input">
					<input type="submit" value="Buscar" class="button">
				</form>
				<button class="button is-primary ml-auto open-modal" data-target="modal-area-new">Nueva Área</button>
			</div>

			<!-- Modal para crear nueva área -->
			<div class="modal" id="modal-area-new">
				<div class="modal-background"></div>
				<div class="modal-card">
					<header class="modal-card-head">
						<p class="modal-card-title">Nueva Área</p>
						<button class="delete close-modal" aria-label="close"></button>
					</header>
					<section class="modal-card-body">
						<form action="">
							<div class="field">
								<label class="label">Nombre del Área</label>
								<div class="control">
									<input class="input" type="text" placeholder="Nombre del área">
								</div>
							</div>
							<div class="field">
								<label class="label">Código del Área (Opcional)</label>
								<div class="control">
									<input class="input" type="text" placeholder="Código">
								</div>
							</div>
							<div class="field">
								<label class="label">Responsable del Área</label>
								<div class="control">
									<div class="select">
										<select>
											<option>Seleccionar responsable</option>
											<option>Juan Pérez</option>
											<option>María García</option>
										</select>
									</div>
								</div>
							</div>
							<div class="field">
								<label class="label">Edificio</label>
								<div class="control">
									<div class="select">
										<select>
											<option>Seleccionar edificio</option>
											<option>Edificio A</option>
											<option>Edificio B</option>
										</select>
									</div>
								</div>
							</div>
							<div class="field">
								<label class="label">Departamento</label>
								<div class="control">
									<div class="select">
										<select>
											<option>Seleccionar departamento</option>
											<option>Sistemas</option>
											<option>RR.HH</option>
											<option>Administración</option>
										</select>
									</div>
								</div>
							</div>
						</form>
					</section>
					<footer class="modal-card-foot">
						<button class="button is-primary">Guardar</button>
						<button class="button close-modal">Cancelar</button>
					</footer>
				</div>
			</div>

			<!-- Tarjetas de áreas -->
			<div class="columns is-multiline mt-3">
				<div class="column is-4">
					<div class="card card-control-area" id="area-1">
						<div class="card-content">
							<div class="media">
								<div class="media-left">
									<span class="icon is-large">
										<i class="fas fa-building fa-2x has-text-primary"></i>
									</span>
								</div>
								<div class="media-content">
									<p class="title is-4">Laboratorio de Sistemas</p>
									<p class="subtitle is-6">Código: LAB-SIS-001</p>
									<p class="subtitle is-6">Responsable: Juan Pérez</p>
									<p class="subtitle is-6">Edificio: A</p>
									<p class="subtitle is-6">Departamento: Sistemas</p>
								</div>
							</div>
							<div class="content">
								<div class="is-flex is-justify-content-space-between">
									<button class="button is-small is-info">
										<i class="fa-solid fa-pen-to-square"></i>
									</button>
									<button class="button is-small is-danger">
										<i class="fa-solid fa-trash"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-4">
					<div class="card card-control-area" id="area-2">
						<div class="card-content">
							<div class="media">
								<div class="media-left">
									<span class="icon is-large">
										<i class="fas fa-users fa-2x has-text-success"></i>
									</span>
								</div>
								<div class="media-content">
									<p class="title is-4">RR.HH</p>
									<p class="subtitle is-6">Código: RRHH-001</p>
									<p class="subtitle is-6">Responsable: María García</p>
									<p class="subtitle is-6">Edificio: B</p>
									<p class="subtitle is-6">Departamento: Administración</p>
								</div>
							</div>
							<div class="content">
								<div class="is-flex is-justify-content-space-between">
									<button class="button is-small is-info">
										<i class="fa-solid fa-pen-to-square"></i>
									</button>
									<button class="button is-small is-danger">
										<i class="fa-solid fa-trash"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style scoped>
</style>


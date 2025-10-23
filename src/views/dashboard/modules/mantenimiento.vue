<template>
	<section class="container">
		<div class="is-flex">
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd">Gestión de Mantenimientos</label>
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd ml-auto">Instituto Tecnológico de Chetumal</label>
		</div>

		<div class="container is-flex mb-3 mt-3">
			<form action="" class="is-flex">
				<input type="text" placeholder="Buscar plan de mantenimiento" class="input">
				<input type="submit" value="Buscar" class="button">
			</form>
			<button class="button is-primary ml-auto open-modal" data-target="modal-mantenimiento-new">Nuevo Plan de Mantenimiento</button>
		</div>

		<!-- Modal para crear nuevo plan de mantenimiento -->
		<div class="modal" id="modal-mantenimiento-new">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Nuevo Plan de Mantenimiento</p>
					<button class="delete close-modal" aria-label="close"></button>
				</header>
				<section class="modal-card-body">
					<form action="">
						<div class="field">
							<label class="label">Nombre del Plan</label>
							<div class="control">
								<input class="input" type="text" placeholder="Nombre del plan de mantenimiento">
							</div>
						</div>
						<div class="field">
							<label class="label">Descripción</label>
							<div class="control">
								<textarea class="textarea" placeholder="Descripción del plan de mantenimiento"></textarea>
							</div>
						</div>
						<div class="field">
							<label class="label">Frecuencia</label>
							<div class="control">
								<div class="select">
									<select>
										<option>Seleccionar frecuencia</option>
										<option>Diario</option>
										<option>Semanal</option>
										<option>Mensual</option>
										<option>Trimestral</option>
										<option>Semestral</option>
										<option>Anual</option>
									</select>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label">Tipo de Mantenimiento</label>
							<div class="control">
								<div class="select">
									<select>
										<option>Seleccionar tipo</option>
										<option>Preventivo</option>
										<option>Correctivo</option>
										<option>Predictivo</option>
									</select>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label">Responsable</label>
							<div class="control">
								<div class="select">
									<select>
										<option>Seleccionar responsable</option>
										<option>Juan Pérez</option>
										<option>María García</option>
										<option>Carlos López</option>
									</select>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label">Fecha de Inicio</label>
							<div class="control">
								<input class="input" type="date">
							</div>
						</div>
						<div class="field">
							<label class="label">Fecha de Fin</label>
							<div class="control">
								<input class="input" type="date">
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

		<!-- Lista de planes de mantenimiento -->
		<div class="columns is-multiline">
			<div class="column is-4">
				<div class="card">
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<span class="icon is-large">
									<i class="fas fa-tools fa-2x has-text-primary"></i>
								</span>
							</div>
							<div class="media-content">
								<p class="title is-4">Mantenimiento Preventivo</p>
								<p class="subtitle is-6">Frecuencia: Mensual</p>
								<p class="subtitle is-6">Responsable: Juan Pérez</p>
								<p class="subtitle is-6">Estado: <span class="tag is-success">Activo</span></p>
							</div>
						</div>
						<div class="content">
							<p>Plan de mantenimiento preventivo para equipos de cómputo.</p>
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
				<div class="card">
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<span class="icon is-large">
									<i class="fas fa-wrench fa-2x has-text-warning"></i>
								</span>
							</div>
							<div class="media-content">
								<p class="title is-4">Mantenimiento Correctivo</p>
								<p class="subtitle is-6">Frecuencia: Según necesidad</p>
								<p class="subtitle is-6">Responsable: María García</p>
								<p class="subtitle is-6">Estado: <span class="tag is-warning">Pendiente</span></p>
							</div>
						</div>
						<div class="content">
							<p>Plan de mantenimiento correctivo para equipos dañados.</p>
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
	</section>
</template>

<script setup>
</script>

<style scoped>
</style>


<template>
	<section class="container">
		<div class="is-flex">
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd">Centro de trabajo — Roles y permiso</label>
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd ml-auto">Instituto Tecnológico de Chetumal</label>
		</div>
		<div class="mt-4">
			<button class="button is-primary open-modal" data-target="modal-rol-new">Nuevo rol</button>
		</div>
		<div class="modal" id="modal-rol-new">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Nuevo Rol</p>
					<button class="delete close-modal" aria-label="close"></button>
				</header>
				<section class="modal-card-body">
					<form action="">
						<div class="field">
							<label class="label">Nombre del rol</label>
							<div class="control">
								<input class="input" type="text" placeholder="Nombre">
							</div>
						</div>
						<div class="field">
							<label class="label">Tipo de usuario</label>
							<div class="control">
								<div class="select">
									<select>
										<option>Selecione tipo de usuario</option>
										<option>Gestor</option>
										<option>Resguardante</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-primary">Continuar</button>
				</footer>
			</div>
		</div>
		<div class="container">
			<div class="columns mt-2">
				<!-- Columna Izquierda (8 de 12 columnas en pantallas grandes, 12 en móviles) -->
				<div class="column is-12-tablet is-4-desktop is-mobile">
					<div class="custom-cards p-1">
						<h1 class="p-2"><strong>Roles para gestores</strong></h1>
						<table class="table custom-table is-fullwidth mt-2">
							<tr class="m-1">
								<th class="has-text-grey-lighter">Rol</th>
								<th class="has-text-grey-lighter">Acciones</th>
							</tr>
							<tr>
								<td class="has-text-grey">Gestor Administrador</td>
								<td class="is-flex">
									<button class="button ml-3">
										<i class="fa-solid fa-trash" style="color: #777777;"></i>
									</button>
									<button class="button ml-3">
										<i class="fa-solid fa-pen-to-square" style="color: #777777;"></i>
									</button>
								</td>
							</tr>
							<tr>
								<td class="has-text-grey">Gestor Global</td>
								<td class="is-flex">
									<button class="button ml-3">
										<i class="fa-solid fa-trash" style="color: #777777;"></i>
									</button>
									<button class="button ml-3">
										<i class="fa-solid fa-pen-to-square" style="color: #777777;"></i>
									</button>
								</td>
							</tr>
						</table>
					</div>
					<div class="custom-cards p-1 mt-4">
						<h1 class="p-2"><strong>Roles para resguardantes</strong></h1>
						<table class="table custom-table is-fullwidth mt-2">
							<tr class="m-1">
								<th class="has-text-grey-lighter">Rol</th>
								<th class="has-text-grey-lighter">Acciones</th>
							</tr>
							<tr>
								<td class="has-text-grey">Docente</td>
								<td class="is-flex">
									<button class="button ml-3">
										<i class="fa-solid fa-trash" style="color: #777777;"></i>
									</button>
									<button class="button ml-3">
										<i class="fa-solid fa-pen-to-square" style="color: #777777;"></i>
									</button>
								</td>
							</tr>
							<tr>
								<td class="has-text-grey">Jefe de departamento</td>
								<td class="is-flex">
									<button class="button ml-3">
										<i class="fa-solid fa-trash" style="color: #777777;"></i>
									</button>
									<button class="button ml-3">
										<i class="fa-solid fa-pen-to-square" style="color: #777777;"></i>
									</button>
								</td>
							</tr>
						</table>
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


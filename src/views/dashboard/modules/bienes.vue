<template>
	<section class="container">
		<div class="is-flex">
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd">Bienes Materiales</label>
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd ml-auto">Instituto Tecnológico de Chetumal</label>
		</div>
		<div class="container">
			<div class="container is-flex mt-3 p-2 is-align-items-center">
				<div>
					<label class="label">Nombre del bien</label>
					<form action="" class="is-flex">
						<input type="text" name="" id="" placeholder="Bien" class="input">
						<input type="submit" value="Buscar" class="button">
					</form>
				</div>
				<div>
					<label class="label">Filtrar por área</label>
					<div class="control">
						<div class="select">
							<select>
								<option>Sin filtro</option>
								<option>Laboratorio de sistemas</option>
								<option>RR.HH</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<label class="label">Filtrar por categoria</label>
					<div class="control">
						<div class="select">
							<select>
								<option>Sin filtro</option>
								<option>Electronicos</option>
								<option>Oficina</option>
								<option>Jardinería</option>
							</select>
						</div>
					</div>
				</div>
				<div class="ml-auto">
					<button class="button is-primary open-modal" data-target="modal-bien-new">Nuevo Bien</button>
					<button class="button is-link open-modal">
						<i class="fa-solid fa-print mr-1" style="color: #ffffff;"></i>
						Reporte
					</button>
				</div>
				<div class="modal" id="modal-bien-new">
					<div class="modal-background"></div>
					<div class="modal-card">
						<header class="modal-card-head">
							<p class="modal-card-title">Nuevo Bien</p>
							<button class="delete close-modal" aria-label="close"></button>
						</header>
						<section class="modal-card-body">
							<form action="">
								<div class="field">
									<label class="label">Número de serie</label>
									<div class="control">
										<input class="input" type="text" placeholder="Número de serie">
									</div>
								</div>
								<div class="field">
									<label class="label">Modelo</label>
									<div class="control">
										<input class="input" type="text" placeholder="Modelo">
									</div>
								</div>
								<div class="field">
									<label class="label">Marca</label>
									<div class="control">
										<input class="input" type="text" placeholder="Marca">
									</div>
								</div>
								<div class="field">
									<label class="label">Fecha de adquisición</label>
									<div class="control">
										<input class="input" type="date" placeholder="Marca">
									</div>
								</div>
								<div class="field">
									<label class="label">Valor del bien</label>
									<div class="control">
										<input class="input" type="text" placeholder="Marca">
									</div>
								</div>
								<div class="field">
									<label class="label">Documento soporte</label>
									<div class="control">
										<div class="select">
											<select>
												<option>Seleccionar un tipo</option>
												<option>Factura</option>
												<option>Proveedor</option>
												<option>Donación</option>
												<option>Otros conceptos</option>
											</select>
										</div>
									</div>
								</div>
								<div class="field">
									<label class="label">Categoria</label>
									<div class="control">
										<div class="select">
											<select>
												<option>Seleccionar categoria</option>
												<option>Mueble de oficina</option>
												<option>Equipo de computo</option>
												<option>Equipo de laboratorio</option>
											</select>
										</div>
									</div>
								</div>
								<div class="field">
									<label class="label">Área</label>
									<div class="control">
										<div class="select">
											<select>
												<option>Seleccionar área</option>
												<option>RR.HH</option>
												<option>Sistemas</option>
												<option>Administración</option>
											</select>
										</div>
									</div>
								</div>
								<div class="field">
									<label class="label">Resguardante</label>
									<div class="control">
										<div class="select">
											<select>
												<option>Seleccionar resguardante</option>
												<option>Juan Pérez</option>
												<option>María García</option>
												<option>Carlos López</option>
											</select>
										</div>
									</div>
								</div>
								<div class="field">
									<label class="label">Estado</label>
									<div class="control">
										<div class="select">
											<select>
												<option>Seleccionar estado</option>
												<option>Bueno</option>
												<option>Regular</option>
												<option>Malo</option>
											</select>
										</div>
									</div>
								</div>
								<div class="field">
									<label class="label">Observaciones</label>
									<div class="control">
										<textarea class="textarea" placeholder="Observaciones"></textarea>
									</div>
								</div>
							</form>
						</section>
						<footer class="modal-card-foot">
							<button class="button is-success">Guardar</button>
							<button class="button close-modal">Cancelar</button>
						</footer>
					</div>
				</div>
			</div>
			<div class="table-container">
				<table class="table is-fullwidth custom-table">
					<thead>
						<tr>
							<th>Número de serie</th>
							<th>Modelo</th>
							<th>Marca</th>
							<th>Área</th>
							<th>Resguardante</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>ABC123456</td>
							<td>OptiPlex 7090</td>
							<td>Dell</td>
							<td>Sistemas</td>
							<td>Juan Pérez</td>
							<td><span class="tag is-success">Bueno</span></td>
							<td class="is-flex">
								<button class="button is-small is-info">
									<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
								</button>
								<button class="button is-small is-danger ml-2">
									<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
								</button>
							</td>
						</tr>
						<tr>
							<td>XYZ789012</td>
							<td>ThinkPad E15</td>
							<td>Lenovo</td>
							<td>RR.HH</td>
							<td>María García</td>
							<td><span class="tag is-warning">Regular</span></td>
							<td class="is-flex">
								<button class="button is-small is-info">
									<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
								</button>
								<button class="button is-small is-danger ml-2">
									<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style scoped>
</style>


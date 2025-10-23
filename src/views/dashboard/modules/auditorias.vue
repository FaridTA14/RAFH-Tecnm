<template>
	<section class="container">
		<div class="is-flex">
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd">Registro de auditorias</label>
			<label for="" class="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-size-6-fullhd ml-auto">Instituto Tecnológico de Chetumal</label>
		</div>
		<div class="container">
			<div class="container is-flex mt-3 p-2 is-justify-content-space-between">
				<div>
					<label class="label">Filtrar por usuario</label>
					<form action="" class="is-flex">
						<input type="text" name="" id="" placeholder="Usuario" class="input">
						<input type="submit" value="Buscar" class="button">
					</form>
				</div>
				<div>
					<label class="label">Filtrar por tipo de usuario</label>
					<div class="control">
						<div class="select">
							<select>
								<option>Sin filtro</option>
								<option>Gestor</option>
								<option>Resguardante</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<label class="label">Filtrar por rol</label>
					<div class="control">
						<div class="select">
							<select>
								<option>Sin filtro</option>
								<option>Administrador</option>
								<option>Gestor superior</option>
								<option>Jefe de departamento</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<label class="label">Filtrar por acción</label>
					<div class="control">
						<div class="select">
							<select>
								<option>Sin filtro</option>
								<option class="has-text-warning">Actualizar centro de trabajo</option>
								<option class="has-text-success">Crear gestor</option>
								<option class="has-text-warning">Modificar gestor</option>
								<option class="has-text-danger">Eliminar gestor</option>
								<option class="has-text-success">Crear resguardante</option>
								<option class="has-text-warning">Modificar resguardante</option>
								<option class="has-text-danger">Eliminar resguardante</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="table-container">
				<table class="table is-fullwidth custom-table">
					<thead>
						<tr>
							<th>Usuario</th>
							<th>Tipo de usuario</th>
							<th>Rol</th>
							<th>Acción</th>
							<th>Fecha</th>
							<th>Hora</th>
							<th>IP</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="has-text-grey">Juan Pérez</td>
							<td class="has-text-grey">Gestor</td>
							<td class="has-text-grey">Administrador</td>
							<td class="has-text-grey">Crear gestor</td>
							<td class="has-text-grey">15/01/2024</td>
							<td class="has-text-grey">10:30:45</td>
							<td class="has-text-grey">192.168.1.100</td>
						</tr>
						<tr>
							<td class="has-text-grey">María García</td>
							<td class="has-text-grey">Resguardante</td>
							<td class="has-text-grey">Jefe de departamento</td>
							<td class="has-text-grey">Modificar resguardante</td>
							<td class="has-text-grey">15/01/2024</td>
							<td class="has-text-grey">11:15:20</td>
							<td class="has-text-grey">192.168.1.101</td>
						</tr>
						<tr>
							<td class="has-text-grey">Carlos López</td>
							<td class="has-text-grey">Gestor</td>
							<td class="has-text-grey">Gestor superior</td>
							<td class="has-text-grey">Actualizar centro de trabajo</td>
							<td class="has-text-grey">15/01/2024</td>
							<td class="has-text-grey">14:22:10</td>
							<td class="has-text-grey">192.168.1.102</td>
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


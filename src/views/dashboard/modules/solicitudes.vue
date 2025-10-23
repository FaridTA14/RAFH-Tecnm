<template>
	<div class="box">
		<div class="level">
			<div class="level-left">
				<h2 class="title is-4">Solicitudes</h2>
			</div>
			<div class="level-right">
				<div class="buttons has-addons">
					<button class="button is-small" data-filtro="recientes">Más Recientes</button>
					<button class="button is-small" data-filtro="antiguas">Más Antiguas</button>
				</div>
			</div>
		</div>

		<div class="solicitudes-list">
			<!-- Ejemplo de una solicitud -->
			<div class="box">
				<div class="level is-mobile">
					<div class="level-left">
						<div class="level-item">
							<div>
								<h3 class="subtitle is-5">Nueva Solicitud</h3>
								<p class="has-text-grey is-size-7">Hace 5 minutos</p>
							</div>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<span class="tag is-warning is-light">Pendiente</span>
							<button class="button is-small is-dark ml-2">Detalles</button>
						</div>
					</div>
				</div>
				<div class="content">
					<p>Usuario: Juan Pérez</p>
					<p>Tipo: Solicitud de intercambio de bien</p>
				</div>
				<div class="buttons">
					<button class="button is-small is-success">Aceptar</button>
					<button class="button is-small is-danger">Rechazar</button>
				</div>
			</div>

			<!-- Segunda solicitud -->
			<div class="box">
				<div class="level is-mobile">
					<div class="level-left">
						<div class="level-item">
							<div>
								<h3 class="subtitle is-5">Solicitud de Transferencia</h3>
								<p class="has-text-grey is-size-7">Hace 2 horas</p>
							</div>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<span class="tag is-success is-light">Aprobada</span>
							<button class="button is-small is-dark ml-2">Detalles</button>
						</div>
					</div>
				</div>
				<div class="content">
					<p>Usuario: María García</p>
					<p>Tipo: Solicitud de transferencia de bien</p>
				</div>
				<div class="buttons">
					<button class="button is-small is-info">Ver detalles</button>
				</div>
			</div>

			<!-- Tercera solicitud -->
			<div class="box">
				<div class="level is-mobile">
					<div class="level-left">
						<div class="level-item">
							<div>
								<h3 class="subtitle is-5">Solicitud de Mantenimiento</h3>
								<p class="has-text-grey is-size-7">Hace 1 día</p>
							</div>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<span class="tag is-danger is-light">Rechazada</span>
							<button class="button is-small is-dark ml-2">Detalles</button>
						</div>
					</div>
				</div>
				<div class="content">
					<p>Usuario: Carlos López</p>
					<p>Tipo: Solicitud de mantenimiento preventivo</p>
				</div>
				<div class="buttons">
					<button class="button is-small is-info">Ver detalles</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal de detalles -->
	<div class="modal" id="modalDetalles">
		<div class="modal-background"></div>
		<div class="modal-card is-large">
			<header class="modal-card-head">
				<p class="modal-card-title">Detalles de la Solicitud</p>
				<button class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="content">
					<h4>Información de la Solicitud</h4>
					<p><strong>Usuario:</strong> Juan Pérez</p>
					<p><strong>Tipo:</strong> Solicitud de intercambio de bien</p>
					<p><strong>Fecha:</strong> 15/01/2024</p>
					<p><strong>Estado:</strong> Pendiente</p>
					<p><strong>Descripción:</strong> Solicitud para intercambiar un monitor por otro de mayor resolución.</p>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-success">Aceptar</button>
				<button class="button is-danger">Rechazar</button>
				<button class="button">Cancelar</button>
			</footer>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped>
</style>


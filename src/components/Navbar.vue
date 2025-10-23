<template>
	<nav class="navbar custom-navbar is-fixed-top has-background-black-bis" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<RouterLink class="navbar-item has-text-white hover-white" to="/">
				<img src="/icons/favicon.png" alt="">
			</RouterLink>

			<a role="button" class="navbar-burger has-text-white" :class="{ 'is-active': isOpen }" aria-label="menu" :aria-expanded="isOpen" data-target="navbarBasicExample" @click="isOpen = !isOpen">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
	</nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({ isCentroT: { type: Boolean, default: false } })
const isOpen = ref(false)
const isDropdownOpen = ref(false)

// Función para cerrar el menú
const closeMenu = () => {
    isOpen.value = false
    isDropdownOpen.value = false
}

// Función para toggle del dropdown
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

// Cerrar menú al hacer clic fuera
const handleClickOutside = (event) => {
    const navbar = event.target.closest('.navbar')
    if (!navbar && isOpen.value) {
        isOpen.value = false
        isDropdownOpen.value = false
    }
}

// Cerrar menú con tecla Escape
const handleEscape = (event) => {
    if (event.key === 'Escape' && isOpen.value) {
        isOpen.value = false
        isDropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
/* Navbar fijo y responsivo */
.navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

/* Asegurar que los elementos estén en línea en desktop */
.navbar-menu {
    display: flex;
    align-items: center;
}

.navbar-start {
    display: flex;
    align-items: center;
    flex: 1;
}

.navbar-end {
    display: flex;
    align-items: center;
}

.navbar-item {
    display: flex;
    align-items: center;
}

.navbar-item.has-dropdown {
    position: relative;
}

/* Dropdown en desktop */
.navbar-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #2a2a2a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    min-width: 200px;
    z-index: 1001;
}

.navbar-item.has-dropdown.is-active .navbar-dropdown {
    display: block;
    animation: dropdownFadeIn 0.3s ease;
}

@keyframes dropdownFadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Estilos para botones azules */
.button.is-primary {
    background-color: #3273dc !important;
    border-color: #3273dc !important;
    color: white !important;
    transition: all 0.3s ease !important;
}

.button.is-primary:hover {
    background-color: #2366d1 !important;
    border-color: #2366d1 !important;
    color: white !important;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4) !important;
    transform: translateY(-2px) !important;
}

/* Botón Sign up con azul más claro */
.button.is-info {
    background-color: #17a2b8 !important;
    border-color: #17a2b8 !important;
    color: white !important;
    transition: all 0.3s ease !important;
}

.button.is-info:hover {
    background-color: #138496 !important;
    border-color: #138496 !important;
    color: white !important;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4) !important;
    transform: translateY(-2px) !important;
}

/* Burger menu - oculto por defecto en desktop */
.navbar-burger {
    display: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.navbar-burger:hover {
    transform: scale(1.1);
}

/* Animación del burger menu */
.navbar-burger span {
    display: block;
    height: 2px;
    width: 25px;
    background-color: white;
    margin: 4px 0;
    transition: all 0.3s ease;
}

.navbar-burger.is-active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.navbar-burger.is-active span:nth-child(2) {
    opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* Responsive para móviles - menú hamburguesa */
@media screen and (max-width: 1023px) {
    /* Mostrar burger menu */
    .navbar-burger {
        display: block;
    }
    
    /* Ocultar menú por defecto */
    .navbar-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #2a2a2a;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        flex-direction: column;
        align-items: stretch;
    }
    
    /* Mostrar menú cuando está activo */
    .navbar-menu.is-active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .navbar-start {
        flex-direction: column;
        width: 100%;
        align-items: stretch;
    }
    
    .navbar-end {
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
        align-items: stretch;
    }
    
    .navbar-item {
        width: 100%;
        margin: 0.25rem 0;
        justify-content: center;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .navbar-item:last-child {
        border-bottom: none;
    }
    
    .buttons {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
    }
    
    .button {
        width: 100%;
        justify-content: center;
    }
    
    /* Dropdown en móvil */
    .navbar-item.has-dropdown {
        flex-direction: column;
    }
    
    .navbar-dropdown {
        position: static;
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.2);
        margin-top: 0.5rem;
        display: none;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
    }
    
    .navbar-dropdown.is-active {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width: 480px) {
    .navbar-brand {
        padding: 0.5rem 1rem;
    }
    
    .navbar-item {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }
    
    .navbar-burger {
        margin-right: 0.5rem;
    }
}
</style>

<template>
  <nav class="navbar">
    <div class="nav-logo">MiBrand</div>
    <ul class="nav-links">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#caracteristicas">Características</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 2rem; background: #0f3460; position: sticky; top: 0; z-index: 100;
}
.nav-logo { color: #e94560; font-size: 1.5rem; font-weight: bold; }
.nav-links { display: flex; list-style: none; gap: 2rem; }
.nav-links a { color: white; text-decoration: none; transition: color 0.3s; }
.nav-links a:hover { color: #e94560; }
</style>
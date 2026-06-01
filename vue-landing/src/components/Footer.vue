<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 MiBrand. Desarrollado con 💚 Vue.</p>
      <div class="footer-links">
        <a href="#inicio">Inicio</a>
        <a href="#caracteristicas">Características</a>
        <a href="#contacto">Contacto</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f3460;
  color: white;
  padding: 2rem;
  text-align: center;
}
.footer-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.footer-links {
  display: flex;
  gap: 2rem;
}
.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}
.footer-links a:hover {
  color: #e94560;
}
</style>
<template>
  <section class="hero" id="inicio">
    <div class="hero-content">
      <h1>Bienvenido a Mi Landing Page</h1>
      <p>Desarrollada con Vue — moderna, rápida y responsive.</p>
      <a href="#contacto" class="btn-primary">Contáctanos</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0f3460, #16213e);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}
.hero-content {
  max-width: 800px;
  margin: 0 auto;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}
.btn-primary {
  background: #e94560;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s;
}
.btn-primary:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
}
</style>
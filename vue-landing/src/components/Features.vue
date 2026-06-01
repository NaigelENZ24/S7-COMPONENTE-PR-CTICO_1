<template>
  <section class="features" id="caracteristicas">
    <h2>¿Por qué elegirnos?</h2>
    <div class="features-grid">
      <div
        class="feature-card"
        v-for="(feature, index) in features"
        :key="index"
      >
        <span class="feature-icon">{{ feature.icon }}</span>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "⚡",
          title: "Rápido",
          desc: "Rendimiento optimizado para el usuario."
        },
        {
          icon: "🎨",
          title: "Diseño",
          desc: "Interfaz moderna y atractiva."
        },
        {
          icon: "📱",
          title: "Responsive",
          desc: "Se adapta a cualquier pantalla."
        }
      ]
    }
  }
}
</script>

<style scoped>
.features {
  padding: 4rem 2rem;
  text-align: center;
  background: #f5f5f5;
}
.features h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a1a2e;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.feature-card:hover {
  transform: translateY(-5px);
}
.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}
.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0f3460;
}
.feature-card p {
  color: #666;
  font-size: 0.95rem;
}
</style>
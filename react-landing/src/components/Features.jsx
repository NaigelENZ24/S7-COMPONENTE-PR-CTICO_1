const features = [
  { icon: "⚡", title: "Rápido", desc: "Rendimiento optimizado para el usuario." },
  { icon: "🎨", title: "Diseño", desc: "Interfaz moderna y atractiva." },
  { icon: "📱", title: "Responsive", desc: "Se adapta a cualquier pantalla." },
]

function Features() {
  return (
    <section className="features" id="caracteristicas">
      <h2>¿Por qué elegirnos?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
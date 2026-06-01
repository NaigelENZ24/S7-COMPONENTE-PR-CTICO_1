import { useState } from 'react'

function ContactForm() {

  // ── MEMORIA DEL FORMULARIO ──────────────────────────────
  const [nombre,  setNombre]  = useState('')
  const [email,   setEmail]   = useState('')
  const [mensaje, setMensaje] = useState('')

  const [errores, setErrores] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)


  // ── VALIDACIONES ────────────────────────────────────────
  const validar = () => {

    let hayErrores = false
    const nuevosErrores = { nombre: '', email: '', mensaje: '' }

    // Validación 1: nombre no puede estar vacío
    if (nombre.trim() === '') {
      nuevosErrores.nombre = 'El nombre es obligatorio'
      hayErrores = true
    }

    // Validación 2: email no puede estar vacío
    if (email.trim() === '') {
      nuevosErrores.email = 'El email es obligatorio'
      hayErrores = true
    // Validación 3: email debe tener formato correcto (algo@algo.algo)
    } else if (!email.includes('@') || !email.includes('.')) {
      nuevosErrores.email = 'El email no es válido'
      hayErrores = true
    }

    // Validación 4: mensaje no puede estar vacío
    if (mensaje.trim() === '') {
      nuevosErrores.mensaje = 'El mensaje es obligatorio'
      hayErrores = true
    // Validación 5: mensaje debe tener al menos 10 caracteres
    } else if (mensaje.length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener mínimo 10 caracteres'
      hayErrores = true
    }

    setErrores(nuevosErrores)
    return hayErrores
  }


  // ── AL HACER CLICK EN "ENVIAR" ───────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault() // evita que la página se recargue

    const tieneErrores = validar()

    if (tieneErrores) {
      return // para aquí, muestra los errores
    }

    // Si llegó hasta aquí: todo está bien
    setEnviado(true)
    setNombre('')
    setEmail('')
    setMensaje('')
  }


  // ── LO QUE SE VE EN PANTALLA ─────────────────────────────
  return (
    <section className="contact" id="contacto">
      <h2>Contáctanos</h2>

      {/* Mensaje de éxito — solo aparece si enviado es true */}
      {enviado && (
        <p className="success-msg"> ¡Mensaje enviado correctamente!</p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">

        {/* Campo Nombre */}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo"
          />
          {errores.nombre !== '' && (
            <span className="error">{errores.nombre}</span>
          )}
        </div>

        {/* Campo Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
          />
          {errores.email !== '' && (
            <span className="error">{errores.email}</span>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje..."
            rows="4"
          />
          {errores.mensaje !== '' && (
            <span className="error">{errores.mensaje}</span>
          )}
        </div>

        <button type="submit" className="btn-primary">
          Enviar Mensaje
        </button>

      </form>
    </section>
  )
}

export default ContactForm
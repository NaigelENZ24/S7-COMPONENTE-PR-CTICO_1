<template>
  <section class="contact" id="contacto">
    <h2>Contáctanos</h2>

    <!-- Mensaje de éxito — solo aparece si enviado es true -->
    <p v-if="enviado" class="success-msg">¡Mensaje enviado correctamente!</p>

    <form @submit.prevent="handleSubmit" class="contact-form">

      <!-- Campo Nombre -->
      <div class="form-group">
        <label>Nombre</label>
        <input v-model="nombre" type="text" placeholder="Tu nombre completo" />
        <span v-if="errores.nombre !== ''" class="error">{{ errores.nombre }}</span>
      </div>

      <!-- Campo Email -->
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="text" placeholder="tu@email.com" />
        <span v-if="errores.email !== ''" class="error">{{ errores.email }}</span>
      </div>

      <!-- Campo Mensaje -->
      <div class="form-group">
        <label>Mensaje</label>
        <textarea v-model="mensaje" placeholder="Tu mensaje..." rows="4"></textarea>
        <span v-if="errores.mensaje !== ''" class="error">{{ errores.mensaje }}</span>
      </div>

      <button type="submit" class="btn-primary">Enviar Mensaje</button>

    </form>
  </section>
</template>

<script>
export default {

  // ── MEMORIA DEL FORMULARIO ──────────────────────────────
  data() {
    return {
      nombre:  '',
      email:   '',
      mensaje: '',

      errores: { nombre: '', email: '', mensaje: '' },
      enviado: false
    }
  },

  methods: {

    // ── VALIDACIONES ──────────────────────────────────────
    validar() {

      let hayErrores = false
      const nuevosErrores = { nombre: '', email: '', mensaje: '' }

      // Validación 1: nombre no puede estar vacío
      if (this.nombre.trim() === '') {
        nuevosErrores.nombre = 'El nombre es obligatorio'
        hayErrores = true
      }

      // Validación 2: email no puede estar vacío
      if (this.email.trim() === '') {
        nuevosErrores.email = 'El email es obligatorio'
        hayErrores = true
      // Validación 3: email debe tener formato correcto (algo@algo.algo)
      } else if (!this.email.includes('@') || !this.email.includes('.')) {
        nuevosErrores.email = 'El email no es válido'
        hayErrores = true
      }

      // Validación 4: mensaje no puede estar vacío
      if (this.mensaje.trim() === '') {
        nuevosErrores.mensaje = 'El mensaje es obligatorio'
        hayErrores = true
      // Validación 5: mensaje debe tener al menos 10 caracteres
      } else if (this.mensaje.length < 10) {
        nuevosErrores.mensaje = 'El mensaje debe tener mínimo 10 caracteres'
        hayErrores = true
      }

      this.errores = nuevosErrores
      return hayErrores
    },


    // ── AL HACER CLICK EN "ENVIAR" ────────────────────────
    handleSubmit() {

      const tieneErrores = this.validar()

      if (tieneErrores) {
        return // para aquí, muestra los errores
      }

      // Si llegó hasta aquí: todo está bien
      this.enviado = true
      this.nombre  = ''
      this.email   = ''
      this.mensaje = ''
    }

  }
}
</script>
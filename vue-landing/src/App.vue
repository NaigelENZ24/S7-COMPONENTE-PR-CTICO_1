<template>
  <div class="app">
    <Navbar />
    <Hero />
    <Features />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Hero, Features, ContactForm, Footer }
}
</script>
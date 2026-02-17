/**
 * Form Enhancements - Validación y mejoras de formularios
 * Proporciona validación en tiempo real y mejora la experiencia del usuario
 */

(function(document) {
  "use strict";

  // Validar formulario de contacto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      // Agregar evento blur para validación en tiempo real
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      // Agregar evento input para validación mientras se escribe
      input.addEventListener('input', function() {
        validateField(this);
      });
    });

    // Envío del formulario
    contactForm.addEventListener('submit', function(e) {
      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Por favor completa todos los campos correctamente.');
      }
    });
  }

  // Validar formulario de newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    emailInput.addEventListener('blur', function() {
      if (!isValidEmail(this.value)) {
        this.classList.add('is-invalid');
      } else {
        this.classList.remove('is-invalid');
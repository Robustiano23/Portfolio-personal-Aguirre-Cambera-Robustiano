document.addEventListener("DOMContentLoaded", function () {
  //mostrar sección contacto
  document.querySelectorAll('nav a, .footer-menu a').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const destinoID = this.getAttribute('href');
      const destino = document.querySelector(destinoID);

      if (destino) {
        if (destinoID === '#contacto') {
          destino.style.display = 'block';
        }
        destino.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Elemento no encontrado para el selector: ${destinoID}`);
      }
    });
  });

  // Validación de formulario
  const formulario = document.querySelector('form');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !correo || !mensaje) {
        e.preventDefault();
        alert('Por favor, completá todos los campos antes de enviar.');
      }
    });
  }

  // Efecto hover en botones
  document.querySelectorAll('button').forEach(boton => {
    boton.addEventListener('mouseover', () => {
      boton.style.backgroundColor = '#29465f';
    });
    boton.addEventListener('mouseout', () => {
      boton.style.backgroundColor = '#1A2E40';
    });
  });
});


// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validación básica del formulario
document.querySelector('form')?.addEventListener('submit', function(e) {
  const nombre = this.querySelector('input[name="nombre"]');
  const email = this.querySelector('input[name="email"]');
  const mensaje = this.querySelector('textarea[name="mensaje"]');

  if (!nombre.value || !email.value || !mensaje.value) {
    alert('Por favor completá todos los campos.');
    e.preventDefault();
  }
});

// Botón volver arriba
const btnArriba = document.createElement('button');
btnArriba.id = 'volver-arriba';
btnArriba.textContent = '↑';
document.body.appendChild(btnArriba);

window.addEventListener('scroll', () => {
  btnArriba.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$(document).ready(function () {
  // Validación del formulario de contacto
  $('#contactoForm').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (!nombre || !correo || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert('Ingresa un correo válido.');
      return;
    }

    alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
    this.reset();
  });

  // Evaluación del test de seguridad
  $('#testSeguridad').on('submit', function (e) {
    e.preventDefault();

    const respuesta1 = $('#pregunta1').val();
    const respuesta2 = $('#pregunta2').val();

    let puntaje = 0;

    if (respuesta1 === 'b') puntaje++;
    if (respuesta2 === 'b') puntaje++;

    let mensaje = '';
    if (puntaje === 2) {
      mensaje = '✅ ¡Excelente! Tus conocimientos básicos son sólidos.';
    } else if (puntaje === 1) {
      mensaje = '🟡 Aceptable. Te recomendamos revisar más sobre seguridad en línea.';
    } else {
      mensaje = '🔴 Necesitas mejorar tus conocimientos. ¡Repasa los consejos!';
    }

    $('#resultadoTest').html(`<div class="alert alert-info">${mensaje}</div>`);
    
    // Scroll animado hacia el resultado
    $('html, body').animate({
      scrollTop: $('#resultadoTest').offset().top - 100
    }, 600);
  });

  // Efecto de fadeIn
  $('.list-group, form, #resultadoTest, .card-group, .carousel').hide().fadeIn(1000);

  // Efecto de sombra en botones
  $('.btn').hover(
    function () {
      $(this).addClass('shadow-lg');
    },
    function () {
      $(this).removeClass('shadow-lg');
    }
  );
});

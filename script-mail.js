
  // Obtener el formulario
  const formulario = document.getElementById('formulario-contacto');

  // Añadir un escuchador de evento para cuando se envíe el formulario
  formulario.addEventListener('submit', function(event) {
    // Prevenir que se envíe el formulario y se recargue la página
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear la solicitud AJAX
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('POST', 'enviar-mensaje.php', true);

    // Establecer la cabecera "Content-Type" para enviar los datos como un formulario
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// Añadir un escuchador de evento para cuando cambie el estado de la solicitud
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.error) {
        // Mostrar un mensaje de error en el elemento con la clase "mensaje-error"
        const mensajeError = document.querySelector('.mensaje-error');
        mensajeError.innerHTML = response.error;

        // Ocultar el mensaje de error después de 5 segundos
        setTimeout(function() {
          mensajeError.innerHTML = '';
        }, 5000);
      } else {
        // Mostrar un mensaje de éxito en el elemento con la clase "mensaje-exito"
        const mensajeExito = document.querySelector('.mensaje-exito');
        mensajeExito.innerHTML = response.message;

        // Ocultar el mensaje de éxito después de 5 segundos
        setTimeout(function() {
          mensajeExito.innerHTML = '';
        }, 5000);
      }
    }
  };

    // Enviar la solicitud con los datos del formulario
    xhr.send(`nombre=${nombre}&email=${email}&mensaje=${mensaje}`);
  });


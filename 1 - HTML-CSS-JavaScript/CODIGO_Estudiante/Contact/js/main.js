function enviarFormulario() {
    var button = document.getElementById('button-enviar');
    button.disabled = true;
    button.value = 'Enviando datos...';

    this.form.submit();
}

function validar() {
    var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;

  var emailRegex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  var telefonoRegex = /^\d{10}$/;

  if (!emailRegex.test(email)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return false;
  }

  if (!telefonoRegex.test(telefono)) {
    alert('Por favor, introduce un número de teléfono válido de 10 dígitos.');
    return false;
  }

    // El formulario es válido, se puede enviar
    return true;
}
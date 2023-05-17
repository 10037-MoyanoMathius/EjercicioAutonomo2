function actualizarBoton() {
    var casilla = document.getElementById("miCasilla");
    var boton = document.getElementById("miBoton");
  
    if (casilla.checked == true) {
      boton.disabled = false;
    } else {
      boton.disabled = true;
    }
  }

  function mostrarOcultarDiv() {
    var casilla = document.getElementById("view");
    var div = document.getElementById("miDiv");
  
    if (casilla.checked == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
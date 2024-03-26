/*Validacion de datos*/
function validarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;

    var nombreValido = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,15}$/.test(nombre);
    var apellidosValidos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,40}$/.test(apellidos);
    var telefonoValido = /^[0-9]{1,9}$/.test(telefono);
    var correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);

    if (!nombreValido || !apellidosValidos || !telefonoValido || !correoValido) {
      alert("Por favor, complete todos los campos correctamente");
      return false;
    }

    return true;
  }
  /*calcular presupuesto*/
  function calcularPresupuesto() {
    var producto = document.getElementById("producto").value;
    var plazo = parseInt(document.getElementById("plazo").value);
    var extras = 0;

    if (document.getElementById("extra1").checked) {
      extras += 10;
    }

    if (document.getElementById("extra2").checked) {
      extras += 75;
    }
    
    var presupuesto = (parseInt(producto) * plazo) + extras;

    if (plazo >= 6) {
      var descuento = presupuesto * 0.10;
      presupuesto -= descuento;
    }
  
    document.getElementById("presupuesto").textContent = "$" + presupuesto;
  }

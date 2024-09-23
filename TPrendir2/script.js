function enviar() {
  // Obtiene el valor del campo de entrada de nombre y lo muestra en la tarjeta
  const nombre = document.getElementById("nombre").value;
  document.getElementById(
    "tarjetanombre"
  ).innerHTML = `<strong>Nombre:</strong> ${nombre}`;

  // Obtiene el valor del campo de entrada de apodo y lo muestra en la tarjeta
  const apodo = document.getElementById("apodo").value;
  document.getElementById(
    "tarjetaapodo"
  ).innerHTML = `<strong>Apodo:</strong> ${apodo}`;

  // Obtiene el archivo seleccionado en el campo de entrada de imagen
  const imagenInput = document.getElementById("imagen");
  const imagenFile = imagenInput.files[0];

  if (imagenFile) {
    // Crea una nueva instancia de FileReader
    const reader = new FileReader();

    // Define lo que sucede cuando el archivo se ha leído exitosamente
    reader.onload = function (e) {
      // Actualiza el contenido del elemento con ID "tarjetaimagen" para mostrar la imagen
      document.getElementById(
        "tarjetaimagen"
      ).innerHTML = `<img src="${e.target.result}" alt="Imagen cargada">`;
    };

    // Lee el archivo como una URL de datos (data URL)
    reader.readAsDataURL(imagenFile);
  } else {
    // Si no se ha seleccionado ningún archivo, muestra un mensaje indicando que no hay imagen
    document.getElementById("tarjetaimagen").innerHTML =
      "<strong>Imagen:</strong> No se ha seleccionado ninguna imagen.";
  }

  // Obtiene el valor del campo de entrada de descripción y lo muestra en la tarjeta
  const descripcion = document.getElementById("descripcion").value;
  document.getElementById(
    "tarjetadescripcion"
  ).innerHTML = `<strong>Descripción:</strong> ${descripcion}`;
}

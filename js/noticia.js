document.addEventListener("DOMContentLoaded", function() {
    var noticiasContainer = document.getElementById("contenedor-noticias");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        var titulo = document.createElement("h2");
        titulo.textContent = json.title;

        var contenido = document.createElement("p");
        contenido.textContent = json.body;

        noticiasContainer.appendChild(titulo);
        noticiasContainer.appendChild(contenido);
      })
      .catch(error => {
        console.error("Error al cargar el JSON:", error);
      });
});
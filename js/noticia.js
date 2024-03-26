document.addEventListener("DOMContentLoaded", function() {
  var noticiasContainer = document.getElementById("contenedor-noticias");

  // Reemplaza 'TU_API_KEY' con tu clave de autenticación
  const apiKey = '3529b74db5414b4796588ed7cba26aa4';
  const url = 'https://newsapi.org/v2/everything?q=apple&from=2024-03-25&to=2024-03-25&sortBy=popularity&apiKey=3529b74db5414b4796588ed7cba26aa4';

  // Realiza una solicitud a tu API incluyendo la clave de autenticación en el encabezado
  fetch(url, {
      headers: {
          'Authorization': 'Bearer ' + apiKey
      }
  })
  .then(response => response.json())
  .then(data => {
      // Procesa los datos recibidos (asumiendo que la estructura es similar al ejemplo JSON mostrado arriba)
      data.noticias.forEach(noticia => {
          var noticiaElement = document.createElement("div");
          noticiaElement.innerHTML = "<h2>" + noticia.titulo + "</h2>" +
                                     "<p>" + noticia.descripcion + "</p>" +
                                     "<p>Fecha: " + noticia.fecha + "</p>";
          noticiasContainer.appendChild(noticiaElement);
      });
  })
  .catch(error => {
      console.error('Error al cargar las noticias:', error);
  });
});
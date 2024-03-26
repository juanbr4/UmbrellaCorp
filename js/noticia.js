//Funcion para cargar noticias desde json
document.addEventListener("DOMContentLoaded", function() {
    var noticiasContainer = document.getElementById("contenedor-noticias");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var noticias = JSON.parse(xhr.responseText);
 
             mostrarNoticias(noticias);
            } 
            
            else {
                console.error("Error al cargar el archivo JSON");
            }
        }
    };
    xhr.open("GET","../js/noticias.json", true);
    xhr.send();
   function mostrarNoticias(noticias) {
        noticias.noticias.forEach(function(noticia) {
            var noticiaElement = document.createElement("div");
            noticiaElement.innerHTML = "<h2>" + noticia.titulo + "</h2>" +
                                       "<p>" + noticia.descripcion + "</p>" +
                                       "<p>Fecha: " + noticia.fecha + "</p>";
            noticiasContainer.appendChild(noticiaElement);
        });
    }
});

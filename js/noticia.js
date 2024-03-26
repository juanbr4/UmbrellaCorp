document.addEventListener("DOMContentLoaded", function() {
    var noticiasContainer = document.getElementById("contenedor-noticias");
  
    let key = "3529b74db5414b4796588ed7cba26aa4";
    let pais = "us";
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
  
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data); 
        if (data.articles && data.articles.length > 0) {
          //Solo mostrar 3
          for (let i = 0; i < 3; i++) {
            const noticia = data.articles[i];
            
            var noticiaElement = document.createElement("div");
            noticiaElement.classList.add("noticia");
  
            
            var tituloElement = document.createElement("h2");
            tituloElement.textContent = noticia.title;
  
            var descripcionElement = document.createElement("p");
            descripcionElement.textContent = noticia.description;
  
            var fechaElement = document.createElement("p");
            fechaElement.textContent = "Fecha: " + noticia.publishedAt;
  
            //Añadirlo al contenedor
            noticiaElement.appendChild(tituloElement);
            noticiaElement.appendChild(descripcionElement);
            noticiaElement.appendChild(fechaElement);
  
            noticiasContainer.appendChild(noticiaElement);
          }
        } else {
          console.error("No se encontraron noticias.");
        }
      })
      .catch((error) => {
        console.error("Error al cargar las noticias:", error);
      });
  });
  
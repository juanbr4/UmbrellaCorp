function initMap() {

  // Coordenadas
  var ubicacionNegocio = {lat: 33.79119435394, lng: -84.397494}; 
  
  // Opciones 
  var opcionesMapa = {
      zoom: 15,
      center: ubicacionNegocio
  };
  
  var mapa = new google.maps.Map(document.getElementById('mapa'), opcionesMapa);
  
  //Marcador
  var marcadorNegocio = new google.maps.Marker({
      position: ubicacionNegocio,
      map: mapa,
      title: 'Ubicación del negocio'
  });

  // Obtener la ubicacion 
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          
          var ubicacionUsuario = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };

          //Medir distancia
          var distancia = google.maps.geometry.spherical.computeDistanceBetween(
              new google.maps.LatLng(ubicacionNegocio.lat, ubicacionNegocio.lng),
              new google.maps.LatLng(ubicacionUsuario.lat, ubicacionUsuario.lng)
          );

          
          console.log('Distancia al negocio:', (distancia / 1000).toFixed(2), 'kilometros');
      });
  } else {
      console.error('La geolocalización no está disponible.');
  }
}

$(document).ready(function() {
    // Iniciar Fancybox
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close"
      ],
      animationEffect: "zoom",
      transitionEffect: "slide",
      transitionDuration: 600
    });
  });
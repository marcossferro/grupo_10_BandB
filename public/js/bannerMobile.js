window.addEventListener("load", function(){
    // Funcion para el banner
    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var imagen = document.getElementsByClassName("imagenSlider");
      for (i = 0; i < imagen.length; i++) {
        imagen[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > imagen.length) {myIndex = 1}    
      imagen[myIndex-1].style.display = "block";  
      setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos
    };
});
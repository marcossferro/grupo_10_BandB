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

    // Funcion para la barra de busqueda
    let searchIcon = document.getElementById("searchIcon");
    let searchBar = document.getElementById("searchBar");
    
    searchIcon.addEventListener("click", function(){
      if(searchBar.style.display == "block"){
        searchBar.style.display = "none"
      }else{
        searchBar.style.display = "block"
      }
    });

    // Funcion para carrete de productos destacados Tablet

    let flechaIzq = document.getElementById("flechaIzq");
    let flechaDer = document.getElementById("flechaDer");
    
    let destacadosUno = document.getElementById("productosDestacados1");
    let destacadosDos = document.getElementById("productosDestacados2");
    let destacadosTres = document.getElementById("productosDestacados3");


    flechaDer.addEventListener("click", function(){
      if(destacadosUno.style.display == "flex"){
        destacadosUno.style.display = "none"
        destacadosDos.style.display = "flex"
        destacadosTres.style.display = "none"
      }else if(destacadosDos.style.display == "flex"){
        destacadosUno.style.display = "none"
        destacadosDos.style.display = "none"
        destacadosTres.style.display = "flex"
      }else{
        destacadosUno.style.display = "flex"
        destacadosDos.style.display = "none"
        destacadosTres.style.display = "none"
      }

    });

    flechaIzq.addEventListener("click", function(){
      if(destacadosUno.style.display == "flex"){
        destacadosUno.style.display = "none"
        destacadosDos.style.display = "none"
        destacadosTres.style.display = "flex"
      }else if(destacadosDos.style.display == "flex"){
        destacadosUno.style.display = "flex"
        destacadosDos.style.display = "none"
        destacadosTres.style.display = "none"
      }else{
        destacadosUno.style.display = "none"
        destacadosDos.style.display = "flex"
        destacadosTres.style.display = "none"
      }
    });
    
    // Funcion para carrete de productos destacados Desktop

    let flechaIzqDesk = document.getElementById("flechaIzqDesk");
    let flechaDerDesk = document.getElementById("flechaDerDesk");
    
    let destacadosUnoDesk = document.getElementById("productosDestacados1Desktop");
    let destacadosDosDesk = document.getElementById("productosDestacados2Desktop");
    let destacadosTresDesk = document.getElementById("productosDestacados3Desktop");


    flechaDerDesk.addEventListener("click", function(){
      if(destacadosUnoDesk.style.display == "flex"){
        destacadosUnoDesk.style.display = "none"
        destacadosDosDesk.style.display = "flex"
        destacadosTresDesk.style.display = "none"
      }else if(destacadosDosDesk.style.display == "flex"){
        destacadosUnoDesk.style.display = "none"
        destacadosDosDesk.style.display = "none"
        destacadosTresDesk.style.display = "flex"
      }else{
        destacadosUnoDesk.style.display = "flex"
        destacadosDosDesk.style.display = "none"
        destacadosTresDesk.style.display = "none"
      }

    });

    flechaIzqDesk.addEventListener("click", function(){
      if(destacadosUnoDesk.style.display == "flex"){
        destacadosUnoDesk.style.display = "none"
        destacadosDosDesk.style.display = "none"
        destacadosTresDesk.style.display = "flex"
      }else if(destacadosDosDesk.style.display == "flex"){
        destacadosUnoDesk.style.display = "flex"
        destacadosDosDesk.style.display = "none"
        destacadosTresDesk.style.display = "none"
      }else{
        destacadosUnoDesk.style.display = "none"
        destacadosDosDesk.style.display = "flex"
        destacadosTresDesk.style.display = "none"
      }
    });

    // Funcion para perfil y cierre de sesion
    let imgPerfil = document.getElementById("imgPerfil");
    let divUser = document.getElementById("user");
    
    imgPerfil.addEventListener("click", function(){
      if(divUser.style.display == "block"){
        divUser.style.display = "none"
      }else{
        divUser.style.display = "block"
      }
    });
});
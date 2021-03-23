window.addEventListener("load", function(){
    let botonFavoritos = document.getElementById("favoritosIcon");
    botonFavoritos.addEventListener("click", function(){
        if(botonFavoritos.style.color == "#6EC1E4"){
            botonFavoritos.style.color = "#fff"
          }else{
            botonFavoritos.style.color = "#6EC1E4"
          }
    })
});
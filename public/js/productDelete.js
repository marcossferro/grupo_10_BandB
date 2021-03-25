window.addEventListener("load", function(){
    let deleteBoton = document.getElementById("deleteBoton");
    let formDelete = document.getElementById("formDelete");

    console.log(deleteBoton)
    console.log(formDelete)

    deleteBoton.addEventListener("click",function(event){
        event.preventDefault();
    })
})
window.addEventListener("load", function(e){
    e.preventDefault()
    
    let deleteButton = document.getElementById("deleteButton")

deleteButton.addEventListener("click", function(e){
    if(confirm("¿Seguro que quieres eliminar este producto?")){
        e.preventDefault()
        alert("El producto fue eliminado")
    }else{
        e.preventDefault()
        alert("El producto no fue eliminado")
    }
})
})
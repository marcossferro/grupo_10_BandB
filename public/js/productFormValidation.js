// New Products
const submit_newProduct = document.getElementById("submit_newProduct");
const nombre_newProduct = document.getElementById("nombre_newProduct");
const detalle_newProduct = document.getElementById("detalle_newProduct");
const imagen_newProduct = document.getElementById("imagen_newProduct");
const cat1_newProduct = document.getElementById("cat1_newProduct");
const cat2_newProduct = document.getElementById("cat2_newProduct");
const cat3_newProduct = document.getElementById("cat3_newProduct");
const precio_newProduct = document.getElementById("precio_newProduct");
const form_newProduct = document.getElementById("form_newProduct");

// Edit Products
const submit_editProduct = document.getElementById("submit_editProduct");
const nombre_editProduct = document.getElementById("nombre_editProduct");
const detalle_editProduct = document.getElementById("detalle_editProduct");
const precio_editProduct = document.getElementById("precio_editProduct");
const form_editProduct = document.getElementById("form_editProduct");

// New Products
window.addEventListener("load", function(){
    submit_newProduct.addEventListener("click", function(event){
        event.preventDefault();
        if(nombre_newProduct.value == "" || nombre_newProduct.value.length < 2){
            alert('El nombre debe tener al menos 5 caracteres');
        }else if(detalle_newProduct.value =="" || detalle_newProduct.value.length < 2){
            alert('El detalle debe tener al menos 20 caracteres');
        }else if(((cat1_newProduct.checked || cat2_newProduct.checked || cat3_newProduct.checked) == false)){
            alert("Debes seleccionar una categoria");
        }else if(precio_newProduct.value =="" || precio_newProduct.value.length < 1){
            alert("El precio no puede estar vacio");
        }else if(imagen_newProduct.value == ""){
            alert('Debes cargar una imagen en formato JPG, JPEG o PNG');
        }else{
            form_newProduct.submit();
        }
    })
})


// Edit Products
window.addEventListener("load", function(){
    submit_editProduct.addEventListener("click", function(event){
        event.preventDefault();
        if(nombre_editProduct.value == "" || nombre_editProduct.value.length < 2){
            alert('El nombre debe tener al menos dos caracteres');
        }else if(detalle_editProduct.value =="" || detalle_editProduct.value.length < 2){
            alert('El detalle debe tener al menos dos caracteres');
        }else if(precio_editProduct.value == "" || precio_editProduct.value.length < 1){
            alert('El precio no puede estar vacio');
        }else{
            form_editProduct.submit();
        }
    })
})
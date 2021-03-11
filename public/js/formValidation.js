// Register
const boton_register = document.getElementById("boton_register");
const nombre_register = document.getElementById("nombre");  
const apellido_register = document.getElementById("apellido");
const email_register = document.getElementById("email_register");
const contraseña_register = document.getElementById("contraseña_register");
const repassword = document.getElementById("repassword");
const form_register = document.getElementById("form_register");

// Login
const boton_login = document.getElementById("boton_login");
const email_login = document.getElementById("email_login");
const contraseña_login = document.getElementById("contraseña_login");
const form_login = document.getElementById("form_login");

// New Products
const submit_newProduct = document.getElementById("submit_newProduct");
const nombre_newProduct = document.getElementById("nombre_newProduct");
const detalle_newProduct = document.getElementById("detalle_newProduct");
const imagen_newProduct = document.getElementById("imagen_newProduct");
const cat1_newProduct = document.getElementById("1_newProduct");
const cat2_newProduct = document.getElementById("2_newProduct");
const cat3_newProduct = document.getElementById("3_newProduct");
const precio_newProduct = document.getElementById("precio_newProduct");
const form_newProduct = document.getElementById("form_newProduct");

// Edit Products
const submit_editProduct = document.getElementById("submit_editProduct");
const nombre_editProduct = document.getElementById("nombre_editProduct");
const detalle_editProduct = document.getElementById("detalle_editProduct");
const precio_editProduct = document.getElementById("precio_editProduct");
const form_editProduct = document.getElementById("form_editProduct");


// Register
window.addEventListener("load", function(){
    boton_register.addEventListener("click", function(event){
        event.preventDefault();    
        if((nombre_register.value == "") || (apellido_register.value =="") || (email_register.value == "") || (!email_register.value.includes("@")) || (contraseña_register.value =="") || (repassword.value == contraseña_register.value)){
            alert('Completa los campos');
        }else{
            form_register.submit();
        }
    })
})

// Login
window.addEventListener("load", function(){
    boton_login.addEventListener("click", function(event){
        event.preventDefault();    
        if((email_login.value == "") || (!email_login.value.includes("@")) || (contraseña_login.value =="")){
            alert('Completa los campos');
        }else{
            form_login.submit();
        }
    })
})

// New Products
window.addEventListener("load", function(){
    submit_newProduct.addEventListener("click", function(event){
        event.preventDefault();    
        if((nombre_newProduct.value == "") || (detalle_newProduct.value =="") || (imagen_newProduct.value =="") ((cat1_newProduct.value =="") || (cat2_newProduct.value =="") || (cat3_newProduct.value ==""))|| (precio_newProduct.value =="") ){
            alert('Completa los campos');
        }else{
            form_newProduct.submit();
        }
    })
})

// Edit Products
window.addEventListener("load", function(){
    submit_editProduct.addEventListener("click", function(event){
        event.preventDefault();
        if((nombre_editProduct.value == "") || (detalle_editProduct.value =="") || (precio_editProduct.value =="")){
            alert('Completa los campos');
        }else{
            form_editProduct.submit();
        }
    })
})
  

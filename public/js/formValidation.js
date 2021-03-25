// Register
const boton_register = document.getElementById("boton_register");
const nombre_register = document.getElementById("nombre_register");  
const apellido_register = document.getElementById("apellido_register");
const email_register = document.getElementById("email_register");
const contraseña_register = document.getElementById("contraseña_register");
const repassword = document.getElementById("repassword_register");
const form_register = document.getElementById("form_register");

// Login
const boton_login = document.getElementById("boton_login");
const email_login = document.getElementById("email_login");
const contraseña_login = document.getElementById("contraseña_login");
const form_login = document.getElementById("form_login");



// Register
window.addEventListener("load", function(){
    boton_register.addEventListener("click", function(event){
        event.preventDefault();    
        if(nombre_register.value == "" || nombre_register.value.length < 2){
            alert('El nombre debe tener al menos dos caracteres');
        }else if(apellido_register.value =="" || apellido_register.value.length < 2){
            alert('El apellido debe tener al menos dos caracteres');
        }else if(email_register.value == "" || !email_register.value.includes("@")){
            alert('El formato correcto es tuemail@email.com');
        }else if(contraseña_register.value =="" || contraseña_register.value.length < 8){
            alert("La contraseña debe contener al menos 8 caracteres, una mayuscula, un numero y un caracter especial ( .*+\-?^${}_()|[\]\\ )")
        }else if(repassword.value != contraseña_register.value){
            alert("Las contraseñas deben coincidir")
        }else{
            form_register.submit();
        }
    })
})

// Login
window.addEventListener("load", function(){
    boton_login.addEventListener("click", function(event){
        event.preventDefault();    
        if(email_login.value == "" || !email_login.value.includes("@")){
            alert("El formato correcto es tuemail@email.com")
        }else if(contraseña_login.value =="" || contraseña_login.value.length < 8){
            alert("La contraseña debe contener al menos 8 caracteres")
        }else{
            form_login.submit();
        }
    })
})


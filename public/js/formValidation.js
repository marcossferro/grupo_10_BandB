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

// Perfil
const form_perfil = document.getElementById('form_perfil');
const nombre_perfil = document.getElementById("nombre_perfil");  
const apellido_perfil = document.getElementById("apellido_perfil");
const email_perfil = document.getElementById("email_perfil");
const contraseñaActual_perfil = document.getElementById("contraseñaActual_perfil");
const contraseñaNueva_perfil = document.getElementById("contraseñaNueva_perfil");
const repassword_perfil = document.getElementById("repassword_perfil");
const boton_perfil = document.getElementById("boton_perfil");
const formDeletePerfil = document.querySelector(".formDeletePerfil");
const boton_delete_perfil = document.getElementById("deleteButton");
const contraseñaDelete_perfil = document.getElementById("contraseñaDelete_perfil");


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

// Perfil
window.addEventListener('load',()=>{
    boton_perfil.addEventListener('click',(event)=>{
        event.preventDefault();
        if(nombre_perfil.value == "" || nombre_perfil.value.length < 2){
            alert('El nombre debe tener al menos dos caracteres');
        }else if(apellido_perfil.value =="" || apellido_perfil.value.length < 2){
            alert('El apellido debe tener al menos dos caracteres');
        }else if(email_perfil.value == "" || !email_perfil.value.includes("@")){
            alert('El formato correcto es tuemail@email.com');
        }else{
            form_perfil.submit();
        }
    })
})

window.addEventListener('load',()=>{
    boton_delete_perfil.addEventListener('click',(event)=>{
        event.preventDefault();
        var confirmar = confirm("Estas seguro que queres eliminar tu usuario?");
        if (confirmar == true) {
            if(contraseñaDelete_perfil.value != ''){
                formDeletePerfil.submit();
            }else{
                alert('Para eliminar tu perfil debes confirmar con tu contraseña');
            }
        }else{
            alert("Cancelado");
        }
    })
})
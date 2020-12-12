const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public')); 
// ó tambien... app.use(express.static(path.join(dirname, './public') ));

app.get('/', function(req,res){
    res.sendFile( path.join(dirname, '') ); // path te da una ruta absoluta
})

app.get('/login', function(req,res){
    res.sendFile( path.join(dirname, './views/login.html') ); 
})

app.get('/register', function(req,res){
    res.sendFile( path.join(dirname, './views/register.html') );
})

app.get('/product', function(req,res){
    res.sendFile( path.join(dirname, './views/product.html') );
})

app.get('/productCart', function(req,res){
    res.sendFile( path.join(dirname, './views/productCart.html') );
})


let puerto = 3000;
app.listen(puerto, function(){
    console.log('El servidor esta corriendo en el puerto '+ puerto);
});
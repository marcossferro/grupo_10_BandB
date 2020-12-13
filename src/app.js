const express = require('express');
const app = express();
const path = require('path');

app.use('/public/css', express.static(__dirname + '/css'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/public/img', express.static(__dirname + '/img'));
// app.use(express.static('./src')); 
// ó tambien... app.use(express.static(path.join(dirname, './public') ));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/views/home/index.html" ); // path te da una ruta absoluta
})

app.get('/login', function(req,res){
    res.sendFile(__dirname + '/views/login/login.html'); 
})

app.get('/register', function(req,res){
    res.sendFile(__dirname + '/views/register/register.html');
})

app.get('/product', function(req,res){
    res.sendFile(__dirname + '/views/product/product.html');
})

app.get('/productCart', function(req,res){
    res.sendFile(__dirname + '/views/productCart/productCart.html');
})


let puerto = 3000;
app.listen(puerto, function(){
    console.log('El servidor esta corriendo en el puerto '+ puerto);
    console.log("http://localhost:3000")
});
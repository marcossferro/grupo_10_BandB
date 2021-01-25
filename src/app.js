const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");

const { check, body } = require("express-validator");

const generalRouter = require ("./routers/general")
const loginRouter = require ("./routers/login")
const registerRouter = require ("./routers/register")
const productRouter = require ("./routers/product")
const productCartRouter = require ("./routers/productCart")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, '../public')));

app.use("/", generalRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/product", productRouter);
app.use("/productCart", productCartRouter);

let puerto = 3000;
app.listen(puerto, function(){
    console.log('El servidor esta corriendo en el puerto '+ puerto);
    console.log("http://localhost:3000")
});
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require('cookie-parser');

const { check, body } = require("express-validator");

const logueadoMiddleware = require("./middlewares/logueadoMiddleware");
const recordameMiddleware = require("./middlewares/recordameMiddleware");

const apiProductsRouter = require ('./routers/api/product');
const apiUsersRouter = require ('./routers/api/user');

const generalRouter = require ("./routers/general");
const loginRouter = require ("./routers/login");
const registerRouter = require ("./routers/register");
const productRouter = require ("./routers/product");
const productCartRouter = require ("./routers/productCart");
const perfilRouter = require ("./routers/perfil");


let port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cookieParser());

app.use(session({secret: "abcd1234", saveUninitialized: true, resave: true}));

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, '../public')));

app.use(recordameMiddleware);
app.use(logueadoMiddleware);

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);

app.use("/", generalRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/products", productRouter);
app.use("/productCart", productCartRouter);
app.use("/perfil", perfilRouter);


let puerto = 3000;
app.listen(port, function(){
    console.log('El servidor esta corriendo en el puerto '+ puerto);
    console.log("http://localhost:"+ puerto);
});
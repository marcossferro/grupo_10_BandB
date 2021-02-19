const fs = require("fs");
const path = require("path");

let productos = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
productosJson = JSON.parse(productos);

function invitadoMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined) {
        next();
    }else{
        if(req.originalUrl == "/"){
            res.render("index",{usuarioLogueado: req.session.usuarioLogueado})
        }else if(req.originalUrl == "/login"){
            res.render("yaEstasLogueado", {usuarioLogueado: req.session.usuarioLogueado})
        }else if(req.originalUrl == "/register"){
            res.render("yaEstasLogueado", {usuarioLogueado: req.session.usuarioLogueado})
        }else if(req.originalUrl == "/products"){
            res.render("products/productList",{usuarioLogueado: req.session.usuarioLogueado, productos: productosJson})
        }else if(req.originalUrl == "/products/" + req.params.id){
            let idProduct = req.params.id - 1;
            let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
            product = JSON.parse(product); 
            let productToEdit = product[idProduct]
            
            res.render("products/product", {productos: productToEdit, usuarioLogueado: req.session.usuarioLogueado})
        }else if(req.originalUrl == "/productCart"){
            res.render("productCart", {usuarioLogueado: req.session.usuarioLogueado})
        }else{
            res.send("Esta pagina no esta disponible")
        }
    }
}

module.exports = invitadoMiddleware
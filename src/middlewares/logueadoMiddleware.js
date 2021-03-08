const db = require("../database/models")

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
            db.Producto.findAll()
            .then(function(product){ res.render("products/productList", {productos: product, usuarioLogueado: req.session.usuarioLogueado})})

        }else if(req.originalUrl == "/products/" + req.params.id){
            db.Producto.findByPk(req.params.id)
            .then(function(product){res.render("products/product", {productos: product, usuarioLogueado: req.session.usuarioLogueado})})

        }else if(req.originalUrl == "/productCart"){
            res.render("productCart", {usuarioLogueado: req.session.usuarioLogueado})

        }else if(req.originalUrl == "/perfil/" + req.params.id){

            // Llamo a usuario por su PK desde la db
                db.Usuario.findByPk(req.params.id)
                .then(function(usuario){ return res.render("users/perfil", {usuarios: usuario, usuarioLogueado: req.session.usuarioLogueado})})
                
        }else{
            res.send("Esta pagina no esta disponible")
        }
    }
}

module.exports = invitadoMiddleware
const db = require("../database/models")

function invitadoMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined) {
        next();
    }else{
        if(req.originalUrl == "/"){
            db.Producto.findAll()
            .then(function(producto){
                res.render("index",{producto: producto,usuarioLogueado: req.session.usuarioLogueado})
            })

        }else if(req.originalUrl == "/login"){
            res.render("yaEstasLogueado", {usuarioLogueado: req.session.usuarioLogueado})

        }else if(req.originalUrl == "/register"){
            res.render("yaEstasLogueado", {usuarioLogueado: req.session.usuarioLogueado})

        }else if(req.originalUrl == "/products"){
            db.Producto.findAll()
            .then(function(product){ 
                res.render("products/productList", {productos: product, usuarioLogueado: req.session.usuarioLogueado})
            })
        }else if(req.originalUrl == "/products/aireacondicionado"){
            db.Producto.findAll({
                where:{
                    categoria_id: "1"
                }
            })
            .then(function(product){ 
                res.render("products/productList", {productos: product, usuarioLogueado: req.session.usuarioLogueado})
            })
        }else if(req.originalUrl == "/products/calefaccion"){
            db.Producto.findAll({
                where:{
                    categoria_id: "2"
                }
            })
            .then(function(product){ 
                res.render("products/productList", {productos: product, usuarioLogueado: req.session.usuarioLogueado})
            })
        }else if(req.originalUrl == "/products/aguacaliente"){
            db.Producto.findAll({
                where:{
                    categoria_id: "3"
                }
            })
            .then(function(product){ 
                res.render("products/productList", {productos: product, usuarioLogueado: req.session.usuarioLogueado})
            })
        }else if(req.originalUrl == "/products/" + req.params.id){
            db.Producto.findByPk(req.params.id)
            .then(function(product){
                res.render("products/product", {productos: product, usuarioLogueado: req.session.usuarioLogueado})
            })
        }else if(req.originalUrl == "/productCart"){
            res.render("productCart", {usuarioLogueado: req.session.usuarioLogueado})

        }else if(req.originalUrl == "/perfil/" + req.params.id){

            // Llamo a usuario por su PK desde la db
                db.Usuario.findByPk(req.params.id)
                .then(function(usuario){ 
                    res.render("users/perfil", {usuarios: usuario, usuarioLogueado: req.session.usuarioLogueado})
                })
        }else{
            res.send("Esta pagina no esta disponible")
        }
    }
}

module.exports = invitadoMiddleware
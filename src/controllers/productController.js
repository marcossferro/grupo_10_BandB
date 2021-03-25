const {validationResult} = require ("express-validator");
const db = require("../database/models")

module.exports = {
    product: function(req,res){
        
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            db.Producto.findAll()
            .then(function(totalProductos){
                res.render('products/product', {totalProductos: totalProductos, productos: producto})
            })
        })
    },
    createView: function(req,res){
        res.render("products/newProducts")
    },
    create: function(req, res){
        let errores = validationResult(req)
        
        if(errores.isEmpty()){
            db.Producto.create({
                nombre: req.body.nombre,
                detalle: req.body.detalle,
                imagen: req.files[0].filename,
                categoria_id: req.body.categoria_id,
                precio: req.body.precio
            })
            .then(function(){
                res.redirect("/products")
            })
        }else{
            res.render("products/newProducts", { usuarioLogueado: req.session.usuarioLogueado, errores: errores.mapped() })
        }
    },
    productList: function(req,res){
        db.Producto.findAll()
        .then(function(product){ res.render("products/productList", { productos: product })})
    },
    editView: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then(function(product){ res.render("products/editProducts", { productos: product })})
    },
    edit: function(req, res){
        var imagenGuardada = db.Producto.findByPk(req.params.id)
        .then(function(producto){
            return producto
        })

        let errores = validationResult(req)

        if(errores.isEmpty()){
            db.Producto.update({
                nombre: req.body.nombre,
                detalle: req.body.detalle,
                imagen: (req.files.length != 0) ? req.files[0].filename : imagenGuardada.imagen,
                categoria_id: req.body.categoria_id,
                precio: req.body.precio
            }, {
                where: {id: req.params.id}
            })
            .then(function(){ res.redirect("/products") })
        }else{
            db.Producto.findByPk(req.params.id)
            .then(function(producto){
                res.render("products/editProducts", { usuarioLogueado: req.session.usuarioLogueado, productos: producto, errores: errores.mapped() })
            })
        }
    },
    delete: function(req, res){
        db.Producto.destroy({
            where: { id: req.params.id }})
        .then(function(){ res.redirect("/products") })
    },
    aireAcon: function(req, res){
        db.Producto.findAll({ where:{ categoria_id: "1" }})
      .then(function(producto){
        res.render("products/productList", { productos: producto })
      })
    },
    calefaccion: function(req, res){
        db.Producto.findAll({ where:{ categoria_id: "2" }})
      .then(function(producto){
        res.render("products/productList", { productos: producto })
      })
    },
    aguaCaliente: function(req, res){
        db.Producto.findAll({ where:{ categoria_id: "3" }})
      .then(function(producto){
        res.render("products/productList", { productos: producto })
      })
    }
}
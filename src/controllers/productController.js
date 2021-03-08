const db = require("../database/models")

module.exports = {
    product: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then(function(producto){ res.render('products/product', {productos: producto} )})
    },
    createView: function(req,res){
        res.render("products/newProducts")
    },
    create: function(req, res){
        db.Producto.create({
            nombre: req.body.nombre,
            detalle: req.body.detalle,
            imagen: req.files[0].filename,
            categoria_id: req.body.categoria_id,
            precio: req.body.precio
        })
        .then(function(){res.redirect("/products")})
    },
    productList: function(req,res){
        db.Producto.findAll()
        .then(function(product){res.render("products/productList", {productos: product})})
    },
    editView: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then(function(product){res.render("products/editProducts", {productos: product})})
    },
    edit: function(req, res){
        var imagenGuardada = db.Producto.findByPk(req.params.id)
        .then(function(producto){return producto})

        db.Producto.update({
            nombre: req.body.nombre,
            detalle: req.body.detalle,
            imagen: (req.files.length != 0) ? req.files[0].filename : imagenGuardada.imagen,
            categoria_id: req.body.categoria_id,
            precio: req.body.precio
        }, {
            where: {id: req.params.id}
        })
        .then(function(){res.redirect("/products")})
    },
    delete: function(req, res){
        db.Producto.destroy({
            where: {id: req.params.id}})
        .then(function(){res.redirect("/products")})
    }
}
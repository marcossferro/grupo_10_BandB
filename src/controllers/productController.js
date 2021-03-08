const fs = require("fs");
const path = require("path");
const db = require("../database/models")

module.exports = {
    product: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            res.render('products/product', {
                productos: producto
            })
        })
        
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
        .then(function(producto){
            res.redirect("/products")
        })
    },
    productList: function(req,res){
        // let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        // product = JSON.parse(product); 
        db.Producto.findAll()
        .then(function(product){
            res.render("products/productList", {
                productos: product
            })
        })
        
    },
    editView: function(req,res){
        // let idProduct = req.params.id - 1;
        // let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        // product = JSON.parse(product); 
        // let productToEdit = product[idProduct]
        db.Producto.findByPk(req.params.id)
        .then(function(product){
            res.render("products/editProducts", {
                productos: product
            })    
        })
        
    },
    edit: function(req, res){

        var imagenGuardada = db.Producto.findByPk(req.params.id)
        .then(function(producto){
            return producto
        })

        db.Producto.update({
            nombre: req.body.nombre,
            detalle: req.body.detalle,
            imagen: (req.files.length != 0) ? req.files[0].filename : imagenGuardada.imagen,
            categoria_id: req.body.categoria_id,
            precio: req.body.precio
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(producto){
            res.redirect("/products")
        })

        // return res.send(req.files.length) prueba

        // let idProduct = req.params.id - 1;
        // let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        // product = JSON.parse(product); 
        // let imagenAModificar = productosJson[idProduct].imagen;

        // let productToEdit = product[idProduct]; no se usa mas

        // let productoEditado = {
        //     id: req.body.id,
        //     nombre: req.body.nombre,
        //     detalle: req.body.detalle,
        //     imagen: (req.files.length != 0) ? req.files[0].filename : imagenAModificar,
        //     categoria_id: req.body.categoria_id,
        //     precio: req.body.precio
        // };

        // productosJson.splice(idProduct, 1, productoEditado)
        // fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        // res.redirect("/products");
    },
    delete: function(req, res){

        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.redirect("/products")
        })
        
        // let idProduct = req.params.id - 1;
        // let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        // product = JSON.parse(product); 
        
        // productosJson.splice(idProduct, 1)
        
        // fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        // res.redirect("/products");
        
    }
}
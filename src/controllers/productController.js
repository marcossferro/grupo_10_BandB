const fs = require("fs");
const path = require("path");

let productos = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
productosJson = JSON.parse(productos);

module.exports = {
    product: function(req,res){
        let idProduct = req.params.id - 1;
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        let productToEdit = product[idProduct]
        res.render("products/product", {
            productos: productToEdit
        })
    },
    createView: function(req,res){
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        res.render("products/newProducts", {
            productos: product
        })
    },
    create: function(req, res){
        productosJson.push({
            id: req.body.id,
            nombre: req.body.nombre,
            detalle: req.body.detalle,
            imagen: req.files[0].filename,
            categoria_id: req.body.categoria_id,
            precio: req.body.precio
        })
        fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        res.redirect("/products")
    },
    productList: function(req,res){
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        res.render("products/productList", {
            productos: product
        })
    },
    editView: function(req,res){
        let idProduct = req.params.id - 1;
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        let productToEdit = product[idProduct]
        res.render("products/editProducts", {
            productos: productToEdit
        })
    },
    edit: function(req, res){
        // return res.send(req.files.length) prueba
        let idProduct = req.params.id - 1;
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        let imagenAModificar = productosJson[idProduct].imagen;
        // let productToEdit = product[idProduct]; no se usa mas

        let productoEditado = {
            id: req.body.id,
            nombre: req.body.nombre,
            detalle: req.body.detalle,
            imagen: (req.files.length != 0) ? req.files[0].filename : imagenAModificar,
            categoria_id: req.body.categoria_id,
            precio: req.body.precio
        };

        productosJson.splice(idProduct, 1, productoEditado)
        fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        res.redirect("/products");
    },
    delete: function(req, res){
        
        let idProduct = req.params.id - 1;
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        
        productosJson.splice(idProduct, 1)
        
        fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        res.redirect("/products");
        
    }
}
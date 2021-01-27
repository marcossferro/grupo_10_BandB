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
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            categoria: req.body.categoria,
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
        let idProduct = req.params.id - 1;
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        let productToEdit = product[idProduct];

        let productoEditado = {
            id: req.body.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            categoria: req.body.categoria,
            precio: req.body.precio
        };

        productosJson.splice(idProduct, 1, productoEditado)
        fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        res.redirect("/products", {
            productos: productToEdit
        })
    }
}
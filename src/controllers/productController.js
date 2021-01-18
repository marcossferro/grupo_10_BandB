const fs = require("fs");
const path = require("path");

let productos = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
productosJson = JSON.parse(productos);

module.exports = {
    product: function(req,res){
        res.render("products/product")
    },
    register: function(req,res){
        res.render("products/newProducts")
    },
    create: function(req, res){
        productosJson.push({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            precio: req.body.precio
        })
        fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(productosJson))
        res.redirect("/products/productList")
    },
    productList: function(req,res){
        let product = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
        product = JSON.parse(product); 
        res.render("products/productList", {
            productos: product
        })
    }
}
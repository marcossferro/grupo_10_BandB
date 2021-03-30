const db = require("../database/models")

module.exports = {
    home: function(req,res){
        db.Producto.findAll()
        .then(function(producto){
            res.render("index", {producto: producto})})
    },
    search: function(req,res){
        db.Producto.findAll({ where: {nombre: {[db.Sequelize.Op.substring]: req.query.search }}})
        .then(function(producto){
            if(producto.length != 0){
            res.render("products/productList", {productos: producto})
            }else{
                res.send("No se encontraron productos")
            }
        })
    }
}
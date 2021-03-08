const db = require("../database/models")

module.exports = {
    home: function(req,res){
        db.Producto.findAll()
        .then(function(producto){
            res.render("index", {producto: producto})})
    },
}

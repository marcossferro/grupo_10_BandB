const path = require("path")
const fs = require("fs")

let productos = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf8");
productos = JSON.parse(productos);

module.exports = {
    home: function(req,res){
        res.render("index", {producto: productos})
    },
}
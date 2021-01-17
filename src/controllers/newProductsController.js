const path = require("path")

module.exports= {
    newProducts: function(req,res){
        res.render(path.join(__dirname, "../views/products/newProducts"))
    },
}
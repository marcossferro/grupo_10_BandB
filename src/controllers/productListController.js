const path = require("path")

module.exports= {
    productList: function(req,res){
        res.render(path.join(__dirname, "../views/products/productList"))
    },
}
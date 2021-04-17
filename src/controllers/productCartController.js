const db = require("../database/models")

module.exports = {
    productCart: function(req,res){
        res.render('productCart', {usuarioLogueado: req.session.usuarioLogueado})
    },
    agregarProducto: function(req, res){
        if(!req.session.usuarioLogueado){
            res.render('login');
        }else{
            res.render('productCart', {usuarioLogueado: req.session.usuarioLogueado})
        }   
    }
}
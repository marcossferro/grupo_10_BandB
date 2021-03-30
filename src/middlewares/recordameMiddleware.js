const db = require("../database/models");

function recordameMiddleware (req, res, next){
    if(typeof req.cookies.recordame != "undefined" && typeof req.session.usuarioLogueado == "undefined"){
        db.Usuario.findByPk(req.cookies.recordame)
        .then(function(usuario){
            req.session.usuarioLogueado = usuario
            next();
        })
    }else{
        next();
    } 
}  

module.exports = recordameMiddleware
const bcrypt = require("bcryptjs");
const { check, validationResult, body } = require ("express-validator");
const db = require('../database/models/index');

module.exports = {
    login: function(req, res){
        res.render("users/login")
    },
    processLogin: function(req, res){
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.Usuario.findAll({where: {email: req.body.email}})
            .then(function(usuario){
                console.log(typeof usuario[0]);
                if(typeof usuario[0] == 'undefined'){
                    return res.render("users/register")
                }else{
                    if(bcrypt.compareSync(req.body.contraseña, usuario[0].dataValues.contraseña) == true ){
                        req.session.usuarioLogueado = usuario[0].dataValues;
                        console.log(`el email ${req.session.usuarioLogueado.email} con id ${req.session.usuarioLogueado.id} fue logueado`)
                        
                        db.Producto.findAll()
                        .then(function(producto){ res.render("index",{ usuarioLogueado: usuario[0],producto: producto })});
                    }
                }
            })
        }else{
            return res.render("users/login", { errors: errors.mapped() })
        }
    }
}
const bcrypt = require("bcryptjs");
const {validationResult} = require ("express-validator");
const db = require('../database/models');

module.exports = {
    register: function(req,res){
        res.render("users/register")
    },
    create: function(req, res){
        let errores = validationResult(req);

        if(errores.isEmpty()){
            db.Usuario.findAll({
                where: { email: req.body.email }})
            .then(function(usuarioBuscado){
                if(typeof usuarioBuscado[0] == 'undefined'){
                    db.Usuario.create({
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        contraseña: bcrypt.hashSync(req.body.contraseña, 12),
                        avatar: req.files[0].filename,
                        tipo_usuario: 2
                    })
                    .then(function(){
                        // req.session.usuarioLogueado = usuario[0].dataValues;
                        res.redirect("/")})
                }else{
                    return res.render("users/login")
                }
            })
        }else{
            return res.render("users/register", { errores: errores.mapped() })
        }    
    }
}
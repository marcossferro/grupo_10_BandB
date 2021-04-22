const bcrypt = require("bcryptjs");
const {validationResult} = require ("express-validator");
const db = require ("../database/models")

module.exports = {
    perfil: function(req,res){
        db.Usuario.findByPk(req.params.id)
        .then(function(usuario){
            return res.render("users/perfil", { usuarios : usuario })})
    },
    edit: function(req, res){

        let errores = validationResult(req);

        if(errores.isEmpty()){
            let usuario = db.Usuario.findByPk(req.params.id)
            .then(function(usuario){return usuario});
    
            let avatarAModificar = usuario.avatar;
            let contraseñaAModificar = usuario.contraseña;
    
            db.Usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                avatar: (req.files.length != 0) ? req.files[0].filename : avatarAModificar,
                contraseña: (!req.body.contraseña == undefined && req.body.contraseña == req.body.repassword) ? bcrypt.hashSync(req.body.contraseña, 12) : contraseñaAModificar,
                tipo_usuario: "2"
            },{
                where: { id: req.params.id }
            }).then(()=>{
                res.redirect("/")
            })
        }else{
            return res.render("users/perfil", { errores: errores.mapped()})
        }
    },
    delete: function(req, res){
        db.Usuario.destroy({ where: { id:req.params.id }})
        .then(()=>{
            req.session.destroy(()=>{
                return res.redirect("/");
            })
        })
    }
}
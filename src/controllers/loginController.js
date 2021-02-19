const fs = require("fs");
const path = require("path")
const bcrypt = require("bcryptjs");
const { check, validationResult, body } = require ("express-validator");

var usuarios = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf8");
usuariosJson = JSON.parse(usuarios);

module.exports = {
    login: function(req,res){
            res.render("users/login")
    },
    processLogin: function(req, res){
        let errors = validationResult(req);

        if(errors.isEmpty()){
            for(let i = 0; i < usuariosJson.length; i++){
                if(usuariosJson[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, usuariosJson[i].password)){
                        var usuarioALoguearse = usuariosJson[i];
                        break;
                    }
                }
            }
            if(usuarioALoguearse == undefined){
                return res.render("users/login", {
                    errors: [
                        {msg: "El email o la contraseña son incorrectos"}
                    ]
                })
            }
            req.session.usuarioLogueado = usuarioALoguearse
            console.log("el email " + req.session.usuarioLogueado.email + " fue logueado")
            res.render("index")
        }else{
            return res.render("users/login", {errors: errors.errors})
        }
    }
}
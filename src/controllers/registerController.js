const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { check, validationResult, body } = require ("express-validator");

var usuarios = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf8");
usuariosJson = JSON.parse(usuarios);

module.exports = {
    register: function(req,res){
        res.render("users/register", {
            usuariosJson: usuariosJson
        })
    },
    create: function(req, res){
        let errores = validationResult(req);

        if(errores.isEmpty()){
            usuariosJson.push({
                id: req.body.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                avatar: req.files[0].filename
            })
            fs.writeFileSync(path.join(__dirname, "../data/usuarios.json"), JSON.stringify(usuariosJson))
            res.send("Registrado!")
        }else{
            return res.render("users/register", {errores: errores.errors})
        }    
    }
}
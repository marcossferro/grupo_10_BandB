const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt-nodejs");

let usuarios = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf8");
usuariosJson = JSON.parse(usuarios);

module.exports = {
    register: function(req,res){
        let user = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf8");
        user = JSON.parse(user); 
        res.render("users/register", {
            usuarios: user
        })
    },
    create: function(req, res){
        usuariosJson.push({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            avatar: req.files[0].filename
        })
        fs.writeFileSync(path.join(__dirname, "../data/usuarios.json"), JSON.stringify(usuariosJson))
        res.send("Registrado!")
    }
}
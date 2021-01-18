const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

let usuarios = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf8");
usuariosJson = JSON.parse(usuarios);

module.exports = {
    register: function(req,res){
        res.render("users/register")
    },
    create: function(req, res){
        usuariosJson.push({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            calle: req.body.calle,
            altura: req.body.altura,
            localidad: req.body.localidad,
            codpos: req.body.codpos,
            telefono: req.body.telefono,
            celular: req.body.celular
        })
        fs.writeFileSync(path.join(__dirname, "../data/usuarios.json"), JSON.stringify(usuariosJson))
        res.send("Registrado!")
    }
}
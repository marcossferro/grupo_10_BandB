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
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 12)
        })
        fs.writeFileSync(path.join(__dirname, "../data/usuarios.json"), JSON.stringify(usuariosJson))
        res.redirect("/registerMenssage")
    },
    registerMenssage: function(req, res){
        res.render("users/registerMenssage")
    }
}
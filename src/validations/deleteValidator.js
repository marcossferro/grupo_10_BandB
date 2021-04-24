const { check, validationResult, body } = require ("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

module.exports = [
    check("contraseñaActual").custom(function(value, {req}){
        console.log("value editar: ",value);
            return db.Usuario.findByPk(req.params.id)
            .then(function(usuario){
              if(bcrypt.compareSync(value, usuario.contraseña) == false ){
                return Promise.reject("Para guardar los cambios debes confirmar con tu contraseña");
              }
            })
          }
      )
]
  
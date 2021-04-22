const { check, validationResult, body } = require ("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models")

//  CHEQUEAR

module.exports = [
    check("nombre").isLength({min:2}).withMessage("El nombre no puede estar vacio y debera tener al menos 2 caracteres"),
    check("apellido").isLength({min:2}).withMessage("El apellido no puede estar vacio y debera tener al menos 2 caracteres"),
    check("email").isEmail().withMessage("El formato correcto es tuemail@email.com"),
    body("email").custom(function(value){
      return db.Usuario.findAll({where:{email:value}})
      .then(function(usuario){
        if(usuario[0] != undefined){
          return Promise.reject("Este email ya esta registrado");
        }
      })
    }),
    check("contraseñaActual").custom(function(value, {req}){
        return db.Usuario.findByPk(req.params.id)
        .then(function(usuario){
          if(bcrypt.compareSync(value, usuario.contraseña) = false ){
            return Promise.reject("Debes poner tu contraseña actual");
          }
        })
      }
    )
  ]
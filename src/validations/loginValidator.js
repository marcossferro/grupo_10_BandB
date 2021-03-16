const { check, validationResult, body } = require ("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models")

module.exports = [
    check("email").isEmail().withMessage("El formato correcto es tuemail@email.com"),
    body("email").custom(function(value, {req}){
        return db.Usuario.findAll({where:{email:value}})
        .then(function(usuario){
          if(usuario[0] == undefined){
            return Promise.reject("No hemos encontrado este email en la base de datos. Registrate");
          }else{
              if(bcrypt.compareSync(req.body.contraseña, usuario[0].dataValues.contraseña) == false ){
                return Promise.reject("La contraseña es incorrecta");
              }
          }
        })
      }),
    check("contraseña").isLength({min: 8}).withMessage("La contraseña debe contener al menos 8 caracteres")
]
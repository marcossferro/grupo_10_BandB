const { check, validationResult, body } = require ("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models")

//  CHEQUEAR

module.exports = [
    check("nombre").isLength({min:2}).withMessage("El nombre no puede estar vacio y debera tener al menos 2 caracteres"),
    check("apellido").isLength({min:2}).withMessage("El apellido no puede estar vacio y debera tener al menos 2 caracteres"),
    check("email").isEmail().withMessage("El formato correcto es tuemail@email.com"),
    body("email").custom(function(value, {req}){
      return db.Usuario.findAll({where:{email:value}})
      .then(function(usuario){
        if(usuario[0].dataValues.id != req.params.id){
          return Promise.reject("Este email ya esta registrado");
        }
      })
    }),
    check("contraseñaActual").custom(function(value, {req}){
          return db.Usuario.findByPk(req.params.id)
          .then(function(usuario){
            if(bcrypt.compareSync(value, usuario.contraseña) == false ){
              return Promise.reject("Para guardar los cambios debes confirmar con tu contraseña");
            }
          })
        }
    ),
    check("repassword").custom(async(repassword, {req})=>{
      let contraseña = req.body.contraseña
      if(contraseña !== repassword){
        throw new Error("La contraseña debe ser la misma")
      }
    }).isLength({min: 8}).withMessage("Debe contener al menos 8 caracteres").matches("[0-9]").withMessage("Debe contener al menos un número").matches("[A-Z]").withMessage("Debe contener al menos una letra mayúscula").matches(/[.*+\-?^${}_()|[\]\\]/g,'\\$&').withMessage("Debe contener al menos un caracter especial: .*+\-?^${}_()|[\]\\ ")
  ]
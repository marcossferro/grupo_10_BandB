const { check, validationResult, body } = require ("express-validator");
const db = require("../database/models")

module.exports = [
    check("nombre").isLength({min:1}).withMessage("El nombre no puede estar vacio"),
    check("apellido").isLength({min:1}).withMessage("El apellido no puede estar vacio"),
    check("email").isEmail().withMessage("El formato correcto es tuemail@email.com"),
    check("contraseña").isLength({min: 8, max: 12}).withMessage("La contraseña debe contener entre 8 y 12 caracteres"),
    check("repassword").custom(async(repassword, {req})=>{
      let contraseña = req.body.contraseña
      if(contraseña !== repassword){
        throw new Error("La contraseña debe ser la misma")
      }
    }),
    body("email").custom(function(value){
      return db.Usuario.findAll({where:{email:value}})
      .then(function(usuario){
        if(usuario[0] != undefined){
          return Promise.reject("Este email ya esta registrado");
        }
      })
    }),
      check('avatar').isEmpty().withMessage("Por favor carga una imagen")
  ]
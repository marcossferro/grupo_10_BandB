const { check, validationResult, body } = require ("express-validator");
const db = require("../database/models")

module.exports = [
    check("nombre").isLength({min:2}).withMessage("El nombre no puede estar vacio y debera tener al menos 2 caracteres"),
    check("apellido").isLength({min:2}).withMessage("El apellido no puede estar vacio y debera tener al menos 2 caracteres"),
    check("email").isEmail().withMessage("El formato correcto es tuemail@email.com"),
    check("contraseña").isLength({min: 8}).withMessage("Debe contener al menos 8 caracteres").matches("[0-9]").withMessage("Debe contener al menos un número").matches("[A-Z]").withMessage("Debe contener al menos una letra mayúscula").matches(/[.*+\-?^${}_()|[\]\\]/g,'\\$&').withMessage("Debe contener al menos un caracter especial: .*+\-?^${}_()|[\]\\ "),
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
    body("avatar").custom((avatar, {req})=>{
      if(req.files[0] != undefined){
        if(req.files[0].mimetype != "image/jpeg"){
          throw new Error("JPG es el unico formato valido hasta el momento")
        }
      } return true
    })
  ]
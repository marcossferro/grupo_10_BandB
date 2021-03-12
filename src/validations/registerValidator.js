const { check, validationResult, body } = require ("express-validator");

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
      db.Usuario.findAll({where: {email: value}})
    .then(function(usuarioBuscado){
      if(usuarioBuscado != null){
        return false
      }else{
        return true
      }})}).withMessage("Este mail ya fue registrado"),
      check('avatar').isEmpty().withMessage("Por favor carga una imagen")
  ]
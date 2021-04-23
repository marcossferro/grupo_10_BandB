const { check, validationResult, body } = require ("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
const { response } = require("express");

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

      //Guardo el valor de contraseña en variable
      let contraseña = req.body.contraseña

      //Guardo las expresiones regulares en variables
      let regex1 = /[0-9]/;
      let regex2 = /[A-Z]/;
      let regex3 = /[.*+\-?^${}_()|[\]\\]/;

      //Testeo (como ejemplo) que repassword contenga alguna de las expresiones regulares. Si contiene todas, en consola, deberia mostrarse true 3 veces y ningun error de validacion en password nueva y repassword.
      console.log(repassword)
      console.log(regex1.test(repassword))
      console.log(regex2.test(repassword))
      console.log(regex3.test(repassword))
      
      //Armo un if donde si se cumplen todas las condiciones de la contraseña devuelve true (ningun error de validacion se muestra), sino devuelve el error de validacion por pantalla con el mensaje en "new Error"
      if(repassword.length == 0 && contraseña.length == 0 || repassword.length >= 8 && contraseña.length >= 8 && repassword == contraseña && regex1.test(repassword) == true && regex2.test(repassword) == true && regex3.test(repassword) == true){
        return true
      } throw new Error("La contraseña debe ser la misma")
    })
  ]
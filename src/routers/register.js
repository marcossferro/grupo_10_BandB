const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require ("express-validator");
const fs = require("fs");
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")
const db = require('../database/models');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgAvatar')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

const registerController = require("../controllers/registerController")

router.get('/', logueadoMiddleware ,registerController.register)

router.post('/', upload.any() , [
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
] , cierreSesionMiddleware ,registerController.create)


module.exports = router
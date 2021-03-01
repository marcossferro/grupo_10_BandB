const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require ("express-validator");
const logueadoMiddleware = require("../middlewares/logueadoMiddleware");
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")

const loginController = require("../controllers/loginController")

router.get('/', logueadoMiddleware ,loginController.login)
router.post('/', [
    check("email").isEmail().withMessage("Formato invalido"),
    check("contraseña").isLength({min: 8, max: 12}).withMessage("La contraseña debe tener entre 8 y 12 caracteres")
] , cierreSesionMiddleware ,loginController.processLogin)

module.exports = router
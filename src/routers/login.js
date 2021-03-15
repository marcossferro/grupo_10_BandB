const express = require("express");
const router = express.Router();
const logueadoMiddleware = require("../middlewares/logueadoMiddleware");
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")
const loginValidator = require('../validations/loginValidator')

const loginController = require("../controllers/loginController")

router.get('/', logueadoMiddleware ,loginController.login)
router.post('/', loginValidator, cierreSesionMiddleware ,loginController.processLogin)

module.exports = router
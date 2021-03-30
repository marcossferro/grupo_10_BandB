const express = require("express");
const router = express.Router();
const loginValidator = require('../validations/loginValidator')

const loginController = require("../controllers/loginController")

router.get('/' ,loginController.login)
router.get('/logout', loginController.logout)
router.post('/', loginValidator, loginController.processLogin)

module.exports = router
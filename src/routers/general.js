const express = require("express");
const router = express.Router();
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")

const generalController = require("../controllers/generalController")

router.get('/', logueadoMiddleware ,generalController.home)

module.exports = router
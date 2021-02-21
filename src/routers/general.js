const express = require("express");
const router = express.Router();
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware");

const generalController = require("../controllers/generalController");

router.get('/', logueadoMiddleware ,generalController.home)
router.get('/', cierreSesionMiddleware ,generalController.home)

module.exports = router
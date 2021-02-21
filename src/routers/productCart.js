const express = require("express");
const router = express.Router();
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")

const productCartController = require("../controllers/productCartController")

router.get('/', logueadoMiddleware ,productCartController.productCart)
router.post('/', cierreSesionMiddleware, productCartController.productCart)

module.exports = router
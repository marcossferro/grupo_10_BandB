const express = require("express");
const router = express.Router();
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")

const productCartController = require("../controllers/productCartController")

router.get('/', logueadoMiddleware ,productCartController.productCart)

module.exports = router
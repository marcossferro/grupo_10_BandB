const express = require("express");
const router = express.Router();

const productController = require("../controllers/productCartController")

router.get('/', productController.productCart);
router.get('/carrito', productController.agregarProducto);

module.exports = router
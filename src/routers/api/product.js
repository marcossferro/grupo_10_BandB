const express = require("express");
const router = express.Router();
var cors = require('cors')


const apiProductsController = require("../../controllers/api/productController")

router.get('/getProducts', cors(), apiProductsController.productos)
router.get('/getProducts/:id', cors(), apiProductsController.productoPorId)
router.get('/getCategories', cors(), apiProductsController.categorias)
//router.get('/getCategoriesWithProducts', cors(), apiProductsController.productosPorCategoria)
router.get('/getCategoriesWithProducts/:id', cors(), apiProductsController.cantidadProductosPorCat)

module.exports = router
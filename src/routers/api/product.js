const express = require("express");
const router = express.Router();

const apiProductsController = require("../../controllers/api/productController")

router.get('/getProducts', apiProductsController.productos)
router.get('/getProducts/:id', apiProductsController.productoPorId)
router.get('/getCategories', apiProductsController.categorias)
router.get('/getCategoriesWithProducts', apiProductsController.productosPorCategoria)

module.exports = router
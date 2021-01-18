const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get('/', productController.product)

router.get('/formulariodeproductos', productController.register)
router.post('/formulariodeproductos', productController.create)
//router.put('/formulariodeproductos', productController.put)
//router.delete('/formulariodeproductos', productController.delete)

router.get('/productlist',productController.productList)





module.exports = router;
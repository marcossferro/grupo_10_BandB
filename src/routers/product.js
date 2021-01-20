const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgProducts')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

const productController = require("../controllers/productController")

router.get('/', productController.product)

router.get('/formulariodeproductos', productController.register)
router.post('/formulariodeproductos', upload.any(), productController.create)

router.get('/formeditproduct/:idProducto', productController.editView)
router.put('/formeditproduct', productController.edit)

router.get('/productlist',productController.productList)





module.exports = router;
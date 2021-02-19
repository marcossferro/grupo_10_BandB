const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")

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

router.get('/', logueadoMiddleware ,productController.productList)
router.get('/create', productController.createView)
router.get('/:id', logueadoMiddleware ,productController.product)

router.post('/create', upload.any(), productController.create)

router.get('/:id/edit', productController.editView)
router.put('/:id/edit', upload.any(), productController.edit)
router.delete('/:id/delete', productController.delete)


module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")
const editCreateValidationMiddleware = require("../middlewares/editCreateValidationMiddleware")

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

router.get('/', logueadoMiddleware, productController.productList)
router.post('/', cierreSesionMiddleware, productController.productList)
router.get('/create', editCreateValidationMiddleware ,productController.createView)
router.get('/:id', logueadoMiddleware ,productController.product)
router.post('/:id', cierreSesionMiddleware, productController.product)

router.post('/create', upload.any(), cierreSesionMiddleware ,productController.create)

router.get('/:id/edit', editCreateValidationMiddleware ,productController.editView)
router.post('/:id/edit', cierreSesionMiddleware ,productController.editView)
router.put('/:id/edit', upload.any(), productController.edit)
router.delete('/:id/delete', productController.delete)


module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")
const editCreateValidationMiddleware = require("../middlewares/editCreateValidationMiddleware")
const productValidator = require('../validations/productValidator')

const productController = require("../controllers/productController");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgProducts')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ 
    storage: storage,
    limits: { fileSize: 1*1024*1024 },
    fileFilter: function (req, file, cb) {
      if (file.mimetype === 'image/png') {
        return cb(null, true);
      }else if(file.mimetype === 'image/jpeg'){
        return cb(null, true);
      }
      cb(null, false);
     }
    })
    

router.get('/', logueadoMiddleware, productController.productList)
router.post('/', cierreSesionMiddleware, productController.productList)

router.get("/aireacondicionado", logueadoMiddleware, productController.aireAcon)
router.get("/calefaccion", logueadoMiddleware, productController.calefaccion)
router.get("/aguacaliente", logueadoMiddleware, productController.aguaCaliente)


router.get('/create',logueadoMiddleware, editCreateValidationMiddleware, cierreSesionMiddleware, productController.createView)
router.post('/create', upload.any(), productValidator[0], productController.create)

router.get('/:id', logueadoMiddleware ,productController.product)
router.post('/:id', cierreSesionMiddleware, productController.product)

router.get('/:id/edit', logueadoMiddleware, editCreateValidationMiddleware, productController.editView)
router.post('/:id/edit', cierreSesionMiddleware, productController.editView)
router.put('/:id/edit', upload.any(), productValidator[1], productController.edit)

router.delete('/:id/delete', productController.delete)


module.exports = router;
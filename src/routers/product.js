const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require ("express-validator");
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

router.get("/aireacondicionado", logueadoMiddleware, productController.aireAcon)
router.get("/calefaccion", logueadoMiddleware, productController.calefaccion)
router.get("/aguacaliente", logueadoMiddleware, productController.aguaCaliente)


router.get('/create',logueadoMiddleware, editCreateValidationMiddleware ,productController.createView)
router.post('/create', upload.any(), 
check("nombre").isLength({min:1}).withMessage("El nombre no puede estar vacio"),
check("detalle").isLength({min:1}).withMessage("El detalle no puede estar vacio"),
check("imagen").isEmpty({min:1}).withMessage("Debes subir una imagen"),
check("categoria_id").isEmpty({min:1}).withMessage("Debes seleccionar una categoria"),
check("precio").isNumeric({min:1}).withMessage("el precio no puede estar vacio"), cierreSesionMiddleware, productController.create)

router.get('/:id', logueadoMiddleware ,productController.product)
router.post('/:id', cierreSesionMiddleware, productController.product)

router.get('/:id/edit', logueadoMiddleware, editCreateValidationMiddleware, productController.editView)
router.post('/:id/edit', cierreSesionMiddleware, productController.editView)
router.put('/:id/edit', upload.any(), 
check("nombre").isLength({min:1}).withMessage("El nombre no puede estar vacio"),
check("detalle").isLength({min:1}).withMessage("El detalle no puede estar vacio"),
check("precio").isNumeric({min:1}).withMessage("el precio no puede estar vacio"),
productController.edit)

router.delete('/:id/delete', productController.delete)


module.exports = router;
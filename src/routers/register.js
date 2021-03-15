const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware")
const registerValidator = require("../validations/registerValidator")
const registerController = require("../controllers/registerController")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgAvatar')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


router.get('/', logueadoMiddleware, registerController.register)
router.post('/', upload.any(), registerValidator, cierreSesionMiddleware, registerController.create)


module.exports = router
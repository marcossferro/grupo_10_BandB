const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { perfil } = require("../controllers/perfilController");
const logueadoMiddleware = require ("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require ("../middlewares/cierreSesionMiddleware")
const perfilMiddleware = require ("../middlewares/perfilMiddleware")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgAvatar')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

const perfilController = require("../controllers/perfilController");

router.get('/:id', logueadoMiddleware, perfilMiddleware ,perfilController.perfil)
router.post("/:id", cierreSesionMiddleware, perfilController.perfil)
router.put("/:id/edit", upload.any() ,perfilController.edit)
router.delete("/:id/delete", perfilController.delete)

module.exports = router
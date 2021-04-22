const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const perfilValidator = require("../validations/perfilValidator")
const perfilMiddleware = require ("../middlewares/perfilMiddleware")

const perfilController = require("../controllers/perfilController");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/imgAvatar')
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

router.get('/:id', perfilMiddleware, perfilController.perfil)
router.put("/:id/edit", upload.any(), perfilValidator ,perfilController.edit)
router.delete("/:id/delete", perfilController.delete)

module.exports = router
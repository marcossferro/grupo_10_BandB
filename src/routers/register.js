const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgAvatar')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

const registerController = require("../controllers/registerController")

router.get('/', registerController.register)
router.post('/', upload.any() ,registerController.create)


module.exports = router
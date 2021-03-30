const express = require("express");
const router = express.Router();

const productCartController = require("../controllers/productCartController")

router.get('/', productCartController.productCart)
router.post('/', productCartController.productCart)

module.exports = router
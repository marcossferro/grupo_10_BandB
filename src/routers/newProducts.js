const express = require("express");
const router = express.Router();

const newProductsController = require("../controllers/newProductsController")

router.get('/', newProductsController.newProducts)

module.exports = router;
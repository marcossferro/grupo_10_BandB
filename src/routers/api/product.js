const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productController');

router.get('/countProducts', productAPIController.count);
router.get('/getProduct/:id', productAPIController.getProduct);
router.get('/getCategoriesWithProducts', productAPIController.getCategories);

module.exports = router;
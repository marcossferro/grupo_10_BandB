const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userController');

router.get('/getAll', userAPIController.getAll);
router.get('/getById/:id', userAPIController.getById);

module.exports = router
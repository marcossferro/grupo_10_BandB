const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userController');

router.get('/getUsers', userAPIController.getAll);
router.get('/getUsers/:id', userAPIController.getById);

module.exports = router
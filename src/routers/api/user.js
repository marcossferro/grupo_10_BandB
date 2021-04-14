const express = require('express');
const router = express.Router();
var cors = require('cors')

const userAPIController = require('../../controllers/api/userController');

router.get('/getUsers', cors() ,userAPIController.getAll);
router.get('/getUsers/:id', cors() ,userAPIController.getById);

module.exports = router
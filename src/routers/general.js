const express = require("express");
const router = express.Router();
const logueadoMiddleware = require("../middlewares/logueadoMiddleware")
const cierreSesionMiddleware = require("../middlewares/cierreSesionMiddleware");

const generalController = require("../controllers/generalController");

router.get('/', logueadoMiddleware ,generalController.home)
router.post('/', cierreSesionMiddleware ,generalController.home)
router.get('/search', logueadoMiddleware ,generalController.search)

module.exports = router
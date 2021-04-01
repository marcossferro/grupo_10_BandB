const express = require("express");
const router = express.Router();

const generalController = require("../controllers/generalController");

router.get('/',generalController.home);
router.get('/search', generalController.search);
router.get('/logout', generalController.logout);
router.post('/logout', generalController.processLogout);

module.exports = router;
const express = require('express');

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController');

const router = express.Router();

router.use('/', homeController);
router.use('/cube', cubeController);

// router.get('/create', homeController.create);

module.exports = router;
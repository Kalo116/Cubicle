const express = require('express');

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', homeController.about);
// router.get('/create', homeController.create);
router.use('/cube', cubeController);


module.exports = router;
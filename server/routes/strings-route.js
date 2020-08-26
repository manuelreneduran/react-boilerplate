const express = require('express');
const stringsController = require('../controllers/strings-controller.js');
const router = express.Router();

router.get('/all', stringsController.getAll);

router.post('/add-one', stringsController.addOne);

module.exports = router;

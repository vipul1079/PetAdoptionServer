const express = require('express');
const confirmationController = require('../controllers/confirmationController');

const router = express.Router();

router.post('/create',confirmationController.create);

module.exports = router;
const express = require('express');
const contactusController = require('../controllers/contactusController');

const router = express.Router();

router.post('/create',contactusController.create);

module.exports = router;
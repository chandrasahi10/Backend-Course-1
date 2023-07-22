const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contacts')

router.get('/contact-us',contactController.getContact);
 
 router.post('/contact-us',contactController.postContact);

module.exports = router;
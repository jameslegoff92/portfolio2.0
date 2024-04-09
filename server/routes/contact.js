const express = require('express');
const contactController = require('../controllers/contact');

const router = express.Router();

// GET /projects
router.get('/contact', contactController.getContact);

module.exports = router;
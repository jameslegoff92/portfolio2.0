const express = require('express');
const aboutController = require('../controllers/about');

const router = express.Router();

// GET /projects
router.get('/about', aboutController.getAbout);

module.exports = router;
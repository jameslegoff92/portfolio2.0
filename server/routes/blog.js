const express = require('express');
const blogController = require('../controllers/blog');

const router = express.Router();

// GET /projects
router.get('/blog', blogController.getBlog);

module.exports = router;
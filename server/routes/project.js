const express = require('express');
const projectController = require('../controllers/project');

const router = express.Router();

// GET /projects
router.get('/projects', projectController.getAllProjects);

module.exports = router;
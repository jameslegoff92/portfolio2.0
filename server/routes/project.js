const express = require('express');
const projectsController = require('../controllers/projects');

const router = express.Router();

// GET /projects
router.get('/projects', projectsController.getAllProjects);

module.exports = router;
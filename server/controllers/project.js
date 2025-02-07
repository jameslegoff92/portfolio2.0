const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  const projectsArray = await Project.getAll();
  const projects = projectsArray.map(data => new Project(data));
  const url = 'projects';
  res.render('pages/projects', { projects, script: 'projects.bundle.js', t: req.t, url });
}
const projectsModel = require('../models/Projects');

exports.getAllProjects = async (req, res) => {
  const projectsArray = await projectsModel.getAll();
  console.log(projectsArray)

  res.render('pages/projects');
}
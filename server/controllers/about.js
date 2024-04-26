exports.getAbout = async (req, res) => {
<<<<<<< HEAD
  res.render('pages/about', { script: 'about.bundle.js' });
=======
  res.render('pages/about', { t: req.t});
>>>>>>> develop
}
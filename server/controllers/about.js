exports.getAbout = async (req, res) => {
  res.render('pages/about', {script: 'about.bundle.js', t: req.t});
}
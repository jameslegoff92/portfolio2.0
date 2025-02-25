exports.getAbout = async (req, res) => {
  const url = 'about';
  const path = req.path;
  const query = req.query.lng
  res.render('pages/about', { script: 'about.bundle.js', t: req.t, url, path, query });
}
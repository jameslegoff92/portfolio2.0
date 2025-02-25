exports.getAbout = async (req, res) => {
  const url = 'about';
  const path = req.path;
  res.render('pages/about', { script: 'about.bundle.js', t: req.t, url, path });
}
exports.getAbout = async (req, res) => {
  const url = 'about';
  res.render('pages/about', { script: 'about.bundle.js', t: req.t, url });
}
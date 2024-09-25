exports.getAbout = async (req, res) => {
  // The req.t translates the text to the user's language
  res.render('pages/about', { script: 'about.bundle.js', t: req.t});
}
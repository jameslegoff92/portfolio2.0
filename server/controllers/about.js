exports.getAbout = async (req, res) => {
  res.render('pages/about', { t: req.t});
}
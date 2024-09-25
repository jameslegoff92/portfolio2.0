exports.getBlog = async (req, res) => {
  res.render('pages/blog', { script: 'blog.bundle.js', t: req.t});
}
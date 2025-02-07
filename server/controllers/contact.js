exports.getContact = async (req, res) => {
  const url = 'contact';
  res.render('pages/contact', { script: 'contact.bundle.js', t: req.t, url });
}
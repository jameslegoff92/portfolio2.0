exports.getContact = async (req, res) => {
  res.render('pages/contact', { script: 'contact.bundle.js' });
}
const client = require('../sanity');

exports.getBlog = async (req, res) => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    mainImage,
    "name": author->name,
    "categories": categories[]->title
  }`;
  
  const posts = await client.fetch(query);

  res.render('pages/blog', { script: 'blog.bundle.js', t: req.t});
}
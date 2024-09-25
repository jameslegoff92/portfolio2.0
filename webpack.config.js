const path = require('path');

module.exports = {
  entry: {
    app: './client/src/app.js',
    homepage: './client/src/homepage.js',   
    projects: './client/src/projects.js',
    contact: './client/src/contact.js',
    about: './client/src/about.js',
    blog: './client/src/blog.js',
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      'jquery': 'jquery/dist/jquery.min.js',
      'gsap': 'gsap',
      'imagesloaded': 'imagesloaded/imagesloaded.pkgd.min.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile frontend code
        },
      },
    ],
  },
};
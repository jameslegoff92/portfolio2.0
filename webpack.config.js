const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './client/src/app.js',
    homepage: './client/src/homepage.js',   
    projects: './client/src/projects.js',
    contact: './client/src/contact.js',
    about: './client/src/about.js',
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js'
  },
  devtool: false,
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      'jquery': 'jquery/dist/jquery.min.js',
      'imagesloaded': 'imagesloaded/imagesloaded.pkgd.min.js',
    }
  },
  optimization: {
    usedExports: true,
    minimize: true,
    sideEffects: false,
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
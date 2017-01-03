global.Promise = require('bluebird');

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var publicPath = '/';
var cssName = 'styles.css';
var jsName = 'bundle.js';

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER:  JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin(cssName)
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = {
  entry: ['babel-polyfill', './src/index'],
  debug: process.env.NODE_ENV !== 'production',
  resolve: {
    root:               path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/dist`,
    filename: jsName,
    publicPath
  },
  module: {
    loaders: [
      { test: /\.jss?x?l?$/, loader: process.env.NODE_ENV !== 'production' ? 'babel!eslint-loader' : 'babel', exclude: [/node_modules/, /public/] },
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};

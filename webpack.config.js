var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/app.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: APP_DIR, loader: 'babel-loader', query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      } },
      { test: /\.scss$/, include: APP_DIR, loader: 'style!css!sass' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({filename: "index.html", template: path.join('./src/client', "index.tpl.html")}),
  ]
};

module.exports = config;

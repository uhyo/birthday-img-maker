'use strict';

const {
  LicenseWebpackPlugin,
} = require('license-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [];
if (process.env.NODE_ENV === 'production'){
  plugins.push(new UglifyJsPlugin());
  plugins.push(new LicenseWebpackPlugin({
    pattern: /.*/,
    unacceptablePattern: /GPL/,
    abortOnUnacceptableLicense: true,
  }));
}

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  entry: null,
  output: null,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  plugins,
  watchOptions: {
    aggregateTimeout: 200,
    ignored: /node_modules/,
  },
};


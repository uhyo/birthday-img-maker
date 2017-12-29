'use strict';

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
};


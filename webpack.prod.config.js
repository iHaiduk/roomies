var path = require('path');
var webpack = require('webpack');

var outDirectory = (process.env.NODE_ENV === 'production') ?
  'dist' :
  'build';

module.exports = {
  entry: [
    './client'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:        ['', '.js', '.jsx']
  },
  output: {
    path:     path.join(__dirname, outDirectory),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },{
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
            BROWSER: JSON.stringify(true)
        }
    })
  ]
};
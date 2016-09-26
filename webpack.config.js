const HtmlWebpackPlugin = require('html-webpack-plugin');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../deploy/public',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new EnvironmentPlugin(['API_URL']),
    new ExtractTextPlugin('/styles/bundle.css')
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style!', 'css?sourceMap')
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style!', 'css?sourceMap!sass?sourceMap')
    },
    {
      test: /\.html$/,
      loader: 'html'
    }
    ]
  },
  sassLoader: {
    includePaths: ['./src/scss/includes']
  }
};
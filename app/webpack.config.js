const HtmlWebpackPlugin = require('html-webpack-plugin');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../server/public',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new EnvironmentPlugin(['API_URL'])
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?sourceMap'
    },
    {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap'
    },
    {
      test: /\.html$/,
      loader: 'html'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        cacheDirectory: true,
        //plugins: ['transform-runtime']
      }
    }]
  }
};

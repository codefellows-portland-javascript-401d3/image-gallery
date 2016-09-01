const webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
  const configuration = {
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './app/src/app.js',
      './app/node_modules/angular-mocks/angular-mocks.js',
      './app/src/test/**/*.js'
    ],
    webpack: webpackConfig,
    preprocessors: {
      './app/src/app.js': ['webpack'],
      './app/src/test/**/*.js': ['babel']
    },
    browsers: ['Chrome'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  };
  if (process.env.TRAVIS) {
    configuration.customLaunchers = {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['Chrome_travis_ci'];
    configuration.singleRun = true;
  }

  config.set(configuration);
};
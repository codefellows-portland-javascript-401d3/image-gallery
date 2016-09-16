exports.config = {
  allScriptsTimeout: 11000,

  suites: {
    home: 'e2e-test/home.test.js',
    full: 'e2e-test/**/*.test.js'
  },
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8080',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
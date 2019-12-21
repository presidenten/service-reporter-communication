require('module-alias/register');
require('@babel/register')({
  presets: [[
    '@babel/preset-env',
    { targets: { node: 8 } },
  ]],
  babelrc: false,
});

const reporter = require('./reporter.js').default;
const service = require('./service.js').default;

const config = {
  // Setup the browser window
  before: function (capabilities, specs) {
    browser.setWindowSize(1320, 768);
  },

  logLevel: 'trace',
  outputDir: './_results_',
  reporters: [
    'spec',
    reporter,
  ],

  services: [
    'selenium-standalone',
    [service],
  ],


  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
    },
  ],

  specs: [
    './src/specs/**/*.e2e.js',
  ],
  deprecationWarnings: true,
  maxInstances: 10,
  sync: true,
  coloredLogs: true,
  bail: 1,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000,
  },
};

module.exports = {
  config,
};

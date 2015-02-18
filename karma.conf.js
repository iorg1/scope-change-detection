module.exports = function(config) {
  config.set({
    frameworks: ['commonjs', 'jasmine'],
    files: [
      'test/testHtml.js',
      'test/**/*-tests.js'
    ],
    preprocessors: {
      '**/*.js': ['commonjs']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};

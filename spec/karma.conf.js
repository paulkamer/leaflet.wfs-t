// Karma configuration
// Generated on Tue Jun 10 2014 19:41:13 GMT+0200 (CEST)

module.exports = function(config) {
    
    var libSources = require(__dirname+'/../build/build.js').getFiles();
    var leafletSources = require(__dirname+'/../node_modules/leaflet/build/build.js').getFiles();
    for (var i=0; i < leafletSources.length; i++) {
        leafletSources[i] = __dirname+"/../node_modules/leaflet/" + leafletSources[i];
    }
    
    var leafletDrawSources = require(__dirname+'/../node_modules/leaflet-draw/build/build.js').getFiles();
    for (var i=0; i < leafletDrawSources.length; i++) {
        leafletDrawSources[i] = __dirname+"/../node_modules/leaflet-draw/" + leafletDrawSources[i];
    }


    var files = ['examples/js/config.js.dist' ].concat(leafletSources,leafletDrawSources, libSources, ["spec/suites/**/*.js"]);

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        plugins: [
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-expect'],

        // frameworks to use
        frameworks: ['mocha','expect'],

        // list of files / patterns to load in the browser
        files: files,

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};

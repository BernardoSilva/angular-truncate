// Testacular configuration file
//
// For all available config options and default values, see:
// https://github.com/vojtajina/testacular/blob/stable/lib/config.js#L54

var configuration = {
    // other things
 
    


	// base path, that will be used to resolve files and exclude
	// basePath: './..',

	// frameworks to use
	frameworks: ['jasmine'],

	// list of files / patterns to load in the browser
	files: [
	   'test/lib/angular/angular.min.js',
	   'test/lib/angular/angular-mocks.js',
	  'src/*.js',
	  'test/*.js'
	],

	// list of files to exclude
	exclude: [],

	preprocessors: {
      'src/*.js': ['coverage']
    },

	// use dots reporter, as travis terminal does not support escaping sequences
	// possible values: 'dots', 'progress', 'junit'
	// CLI --reporters progress
	// 'coverage',
	reporters: ['progress', 'coverage', 'dots'],

	coverageReporter: {
      // specify a common output directory
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },

	// web server port
	// CLI --port 9876
	port: 9876,

	// cli runner port
	// CLI --runner-port 9100
	runnerPort: 9100,

	// enable / disable colors in the output (reporters and logs)
	// CLI --colors --no-colors
	colors: true,

	// level of logging
	// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
	// CLI --log-level debug
	//logLevel: LOG_INFO,

	// enable / disable watching file and executing tests whenever any file changes
	// CLI --auto-watch --no-auto-watch
	autoWatch: true,

	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera
	// - Safari (only Mac)
	// - PhantomJS
	// - IE (only Windows)
	// CLI --browsers Chrome,Firefox,Safari
	browsers: ['Chrome'],

	// If browser does not capture in given timeout [ms], kill it
	// CLI --capture-timeout 5000
	captureTimeout: 5000,

	// Auto run tests on start (when browsers are captured) and exit
	// CLI --single-run --no-single-run
	singleRun: false,

	// report which specs are slower than 500ms
	// CLI --report-slower-than 500
	reportSlowerThan: 500,

	customLaunchers: {
        ChromeNoSandbox: {
        	base: 'Chrome',
        	flags: ['--no-sandbox'] 
    	}
    },

};
 
if (process.env.TRAVIS) {
    configuration.browsers = ['ChromeNoSandbox'];
}
 
module.exports = function (config) {

config.set(configuration);
};

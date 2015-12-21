module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		frameworks: ['chai', 'mocha'],

		// list of files / patterns to load in the browser
		files: [
			'./src/**/*_test.js'
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		preprocessors: {
			'./src/**/*_test.js': ['webpack']
		},

		webpack: {
			babel: {
				cacheDirectory: true,
				presets: ['es2015']
			},
			module: {
				loaders: [
					{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
				]
			}
		},

		// test results reporter to use
		reporters: ['mocha'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultanous
		concurrency: Infinity
	})
};
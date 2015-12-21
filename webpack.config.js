var path    = require('path');

module.exports = {
	// The base directory (absolute path) for resolving 'entry' option
	context: path.resolve(__dirname + '/src'),
	// The entry point of the bundle
	// The use of a object allows us to declare multiple entry point
	entry: {
		// key : the chunk name
		// value : the file
		bundle: './repo.app.js'
	},
	output: {
		// The output directory (absolute path)
		path: path.resolve(__dirname + '/src'),
		// The filename of the entry chunk as relative path inside 'output.path' directory
		// [name] is replaced by the name of the chunk
		filename: './[name].js'
	},
	// Arguments used by babel-loader
	babel: {
		cacheDirectory: true,
		presets: ['es2015']
	},
	module: {
		loaders: [
			// Loader to transpile JS file with Babel
			{
				// Regex to find js file
				test: /\.js/,
				// Define the loader to be used for the found files
				loader: 'babel',
				// Exclude files from node_modules to optimize the build
				exlude: /node_modules/
			}
		]
	}
};

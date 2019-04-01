var path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/stackmash.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'stackmash.min.js',
		libraryTarget: 'var',
		library: 'Stackmash'
	}
};
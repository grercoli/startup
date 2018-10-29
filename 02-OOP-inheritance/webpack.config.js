const path = require('path');


module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js', //Assign name to bundle.js
		path: path.join(__dirname, '/dist')//Creates folder dist with bundle.js inside
	},
	module: {
  		rules: [
		    {
		      test: /\.m?js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
		      }
		    }
	  	]
	}
}
var webpack = require('webpack')

module.exports = {
	entry: { app: './app.js' },
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: `jshint-loader`,
				enforce: 'pre'
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				jshint: {
					camelcase: true,
					emitErrors: false,
					failOnHint: false,
					esversion: 8,
					asi: true
				}
			}
		})
	],
	devServer: {
		publicPath: '/',
		contentBase: './public',
		inline: true,
		port: 8888
	},
	resolve: {
		extensions: ['.js', '.es6']
	}
}

var webpack = require('webpack')
var Fiber = require('fibers')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: { app: './app.js' },
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	watch: true,
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							fiber: Fiber
						}
					}
				]
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
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	devServer: {
		//hot: true,
		publicPath: '/',
		contentBase: './public',
		inline: true,
		port: 8888
	},
	resolve: {
		extensions: ['.js', '.es6']
	}
}

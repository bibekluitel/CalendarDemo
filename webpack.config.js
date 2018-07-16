const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve( __dirname , 'app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "js/[name].bundle.js"
	},
	plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve( __dirname , 'index.html'),
				filename: 'index.html'
			}),
			new ExtractTextPlugin({
	        		filename: 'css/[name]-style.css',
	   	        	allChunks: true,
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'react',
				minChunks: Infinity,
	        	}),

	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ["babel-loader"],
			},
			{
       			test: /\.(sass|scss|css)$/,
        		loader: ExtractTextPlugin.extract({
						fallback: "style-loader",
     					use: [ 'css-loader', 'sass-loader' ],
						publicPath: '../'
        			}),
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				  {
					loader: 'url-loader',
					options: {
					fallback: 'file-loader',
					limit: 100000,
					name: 'images/[name]_[hash].[ext]'
					}
				  }
				]
			}
		]
	},
	resolve: {
		alias: {
      			Components: path.resolve(__dirname, 'Components'),
      			Container: path.resolve(__dirname, 'Container'),
      			Images: path.resolve(__dirname, 'images')
    		}
	}

}

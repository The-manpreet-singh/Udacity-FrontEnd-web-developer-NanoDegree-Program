const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/public/index.js',
  mode: 'development',
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
},
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(jpg|png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/public/view/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
    }), 
  ]
}
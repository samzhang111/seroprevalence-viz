  const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./serology.js",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Seroprevalence estimation',
          template: './index.html',
          filename: 'covid-serology.html',
          minify: {
            collapseWhitespace: false
          }
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
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

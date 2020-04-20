  const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ["@babel/polyfill", "./calculator2.js"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './calculator2.html',
          filename: 'covid-calculator2.html',
          minify: {
            collapseWhitespace: false
          }
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist-calc2'),
        filename: "calc2.[contenthash].js",
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

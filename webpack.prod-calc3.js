  const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ["@babel/polyfill", "./calculator3.js"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './calculator3.html',
          filename: 'covid-calculator3.html',
          minify: {
            collapseWhitespace: false
          }
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist-calc3'),
        filename: "calc3.[contenthash].js",
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

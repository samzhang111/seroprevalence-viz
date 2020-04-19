  const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./calculator2.js"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Seroprevalence estimation',
          template: './calculator2.html',
          filename: 'covid-calculator2.html',
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dev-dist'),
        filename: "[name].[contenthash]-dev.js",
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

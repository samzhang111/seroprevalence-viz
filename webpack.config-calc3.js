  const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./calculator3.js"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Surveillance testing',
          template: './calculator3.html',
          filename: 'covid-calculator3.html',
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dev-dist-calc3'),
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

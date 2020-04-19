  const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ["@babel/polyfill", "./calculator1.js"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Seroprevalence estimation',
          template: './calculator1.html',
          filename: 'covid-serology.html',
          minify: {
            collapseWhitespace: false
          }
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "calc1.[contenthash].js",
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

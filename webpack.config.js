module.exports = {
    mode: 'development',
    entry: "./serology.js",
    output: {
        path: __dirname,
        filename: "serology-bundle.js",
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

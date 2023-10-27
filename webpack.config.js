const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default)
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader', {loader: 'image-webpack-loader'}],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      },
    ],
  },
};

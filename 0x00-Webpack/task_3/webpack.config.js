const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './js/dashboard_main.js',
  entry: {
    all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  plugins: [
    new CleanWebpackPlugin(), new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 8564,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpeg|jpg|gif|png|svg)$/i,
        use: ['file-loader', { 
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            disable: true,
          },
        }],
      },
    ]
  }
};

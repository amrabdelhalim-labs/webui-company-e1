const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]',
        },
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    compress: false,
    hot: false,
    port: 9000,
    open: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
};
